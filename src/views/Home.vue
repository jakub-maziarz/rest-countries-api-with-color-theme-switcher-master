<template>
    <div class="container-xxl px-4 px-xxl-0 py-4">
        <div class="row mb-5">
            <div class="col-12 d-flex justify-content-between pt-3">
                <SearchInput
                    :modelValue="searchCountry"
                    @update:modelValue="(country) => (searchCountry = country)"
                ></SearchInput>
                <SelectDropdown
                    @filter-by-region="(region) => (regionCountries = region)"
                ></SelectDropdown>
            </div>
        </div>
        <div class="row gx-5 gy-5">
            <CountryCard
                v-for="country in countriesFiltered"
                :country="country"
                :country-short-info="{
                    population: country.population,
                    region: country.region,
                    capital: country.capital,
                }"
                :key="country.name.common"
            ></CountryCard>
        </div>
    </div>
</template>

<script setup>
import SelectDropdown from "../components/SelectDropdown.vue";
import SearchInput from "../components/SearchInput.vue";
import CountryCard from "../components/CountryCard.vue";
import { ref, onMounted, computed } from "vue";

const countries = ref([]);

onMounted(async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    countries.value = data;
    console.log(countries.value);
});

const searchCountry = ref("");
const regionCountries = ref("");

const countriesFiltered = computed(() => {
    let tempCountries = countries.value;

    if (searchCountry.value != "" && searchCountry.value) {
        tempCountries = tempCountries.filter((country) => {
            return country.name.common.includes(searchCountry.value);
        });
    }

    if (regionCountries.value != "" && regionCountries.value) {
        tempCountries = tempCountries.filter((country) => {
            return country.region === regionCountries.value;
        });
    }

    return tempCountries;
});
</script>

<style></style>
