<template>
    <div class="container-xxl px-4 px-xxl-0 py-4">
        <div class="row mb-5">
            <div class="col-12 d-flex justify-content-between pt-3">
                <SearchInput></SearchInput>
                <SelectDropdown></SelectDropdown>
            </div>
        </div>
        <div class="row gx-5 gy-5">
            <CountryCard
                v-for="country in countries"
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
import { ref, onMounted } from "vue";

const countries = ref([]);

onMounted(async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    countries.value = data;
    console.log(countries.value);
});
</script>

<style></style>
