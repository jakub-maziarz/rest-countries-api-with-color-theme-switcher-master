<template>
    <div class="container-xxl px-3 px-sm-4 px-xxl-0 py-4">
        <div class="row mb-5">
            <div
                class="col-12 d-flex flex-column flex-md-row justify-content-between pt-3"
            >
                <SearchInput
                    :modelValue="searchCountry"
                    @update:modelValue="(country) => (searchCountry = country)"
                ></SearchInput>
                <SelectDropdown
                    @filter-by-region="(region) => (regionCountries = region)"
                ></SelectDropdown>
            </div>
        </div>
        <LazyList
            :data="countriesFiltered"
            :itemsPerRender="32"
            containerClasses="row gx-4 gx-xl-5 gy-5"
            defaultLoadingColor="#222"
        >
            <template v-slot="{ item }">
                <router-link
                    class="col-12 col-sm-6 col-lg-4 col-xl-3"
                    :to="{
                        name: 'country',
                        params: { name: item.name.common },
                    }"
                >
                    <CountryCard
                        :country="item"
                        :country-short-info="{
                            population: item.population,
                            region: item.region,
                            capital: item.capital,
                        }"
                    ></CountryCard>
                </router-link>
            </template>
        </LazyList>
    </div>
</template>

<script setup>
// import LazyList from "lazy-load-list/vue";
import SelectDropdown from "../components/SelectDropdown.vue";
import SearchInput from "../components/SearchInput.vue";
import CountryCard from "../components/CountryCard.vue";
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

onMounted(() => {
    store.dispatch("fetchCountries");
});

const searchCountry = ref("");
const regionCountries = ref("");

const countriesFiltered = computed(() => {
    let tempCountries = store.getters.getCountries;

    if (searchCountry.value != "" && searchCountry.value) {
        tempCountries = tempCountries.filter((country) => {
            return country.name.common.includes(searchCountry.value);
        });
    }

    if (
        regionCountries.value != "" &&
        regionCountries.value &&
        regionCountries.value != "All"
    ) {
        tempCountries = tempCountries.filter((country) => {
            return country.region === regionCountries.value;
        });
    }

    return tempCountries;
});
</script>

<style></style>
