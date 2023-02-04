<template>
    <div v-if="country" class="container-xxl px-4 px-xxl-0 py-4">
        <GoBack></GoBack>
        <div class="row mt-5 country">
            <div class="col-6 country__flag">
                <img
                    :src="country.flags.svg"
                    :alt="country.name.common"
                    class="w-100"
                />
            </div>
            <div
                class="col-6 d-flex flex-column justify-content-center py-4 country__desc"
            >
                <h2 class="fw-semibold country__header">
                    {{ country.name.common }}
                </h2>
                <div class="row">
                    <div class="col-6 d-flex flex-column country__geo-info">
                        <div v-for="(value, key) in countryGeoInfo" :key="key">
                            <span class="fw-semibold">{{ key }}: </span>
                            <span>{{ value }}</span>
                        </div>
                    </div>
                    <div
                        class="col-6 d-flex flex-column country__additional-info"
                    >
                        <div
                            v-for="(value, key) in countryAdditionalInfo"
                            :key="key"
                        >
                            <span class="fw-semibold">{{ key }}: </span>
                            <span>{{ value.toString() }}</span>
                        </div>
                    </div>
                </div>
                <div
                    class="d-flex flex-wrap align-items-center fw-semibold country__border-countries"
                >
                    <span>Border Countries: </span>
                    <router-link
                        v-for="(value, key) in borderCountriesData"
                        :key="key"
                        class="px-3 py-1 shadow-blur rounded-1 fs-7"
                        :to="{
                            name: 'country',
                            params: { name: value },
                        }"
                    >
                        {{ value }}
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import GoBack from "../components/GoBack.vue";
import { ref, onBeforeMount, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
const country = ref(null);
const borderCountries = ref([]);

const router = useRouter();
const route = useRoute();

onBeforeMount(async () => {
    const res = await fetch(
        `https://restcountries.com/v3.1/name/${route.params.name}?fullText=true`
    );
    if (res.ok) {
        const data = await res.json();
        country.value = data[0];
        if (country.value.hasOwnProperty("borders")) {
            const borders = country.value.borders;
            borders.forEach(async (border) => {
                const res = await fetch(
                    `https://restcountries.com/v3.1/alpha/${border}`
                );
                const data = await res.json();
                borderCountries.value.push(data);
            });
        }
    } else {
        router.push({
            name: "notFound",
            params: { pathMatch: route.path.split("/").slice(1) },
            query: route.query,
            hash: route.hash,
        });
    }
});

const countryGeoInfo = computed(() => {
    if (country.value) {
        const nativeNameKey = Object.keys(country.value.name.nativeName)[0];
        return {
            "Native Name": country.value.name.nativeName[nativeNameKey].common,
            Population: country.value.population,
            Region: country.value.region,
            "Sub Region": country.value.subregion,
            Capital:
                country.value.capital instanceof Array
                    ? country.value.capital[0]
                    : country.value.capital,
        };
    }
});

const countryAdditionalInfo = computed(() => {
    if (country.value) {
        const currencyKey = Object.keys(country.value.currencies)[0];
        const languages = [];
        for (let key in country.value.languages) {
            languages.push(country.value.languages[key]);
        }
        return {
            "Top Level Domain": country.value.tld,
            Currencies: country.value.currencies[currencyKey].name,
            Languages: languages.join(", "),
        };
    }
});

const borderCountriesData = computed(() => {
    const bordersNames = borderCountries.value.map(
        (border) => border[0].name.common
    );
    return bordersNames;
});
</script>
<style scoped>
.country__flag {
    padding-right: 100px;
}

.country__flag img {
    height: 400px;
    object-fit: cover;
}

.country__desc {
    row-gap: 30px;
}

.country__desc,
.country__flag {
    background-color: var(--bg-color);
}

.country__header,
.country__geo-info,
.country__additional-info,
.country__border-countries,
.country__border-countries a {
    font-family: var(--text-font);
    color: var(--text-color);
}

.country__geo-info,
.country__additional-info {
    row-gap: 5px;
}

.country__border-countries {
    gap: 10px;
}
</style>
