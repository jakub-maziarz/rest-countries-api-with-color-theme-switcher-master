<template>
    <div v-if="country" class="container-xxl px-4 px-xxl-0 py-4">
        <GoBack></GoBack>
        <div class="row mt-5 country">
            <div
                class="col-12 col-lg-6 mb-3 mb-lg-0 d-flex justify-content-center country__flag"
            >
                <img
                    :src="country.flags.svg"
                    :alt="country.name.common"
                    class="w-100"
                />
            </div>
            <div
                class="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center py-4 country__desc"
            >
                <h2 class="fw-bold w-100 country__header">
                    {{ country.name.common }}
                </h2>
                <div class="row w-100 mb-3">
                    <div
                        class="col-12 col-lg-6 d-flex flex-column p-0 country__geo-info"
                    >
                        <div v-for="(value, key) in countryGeoInfo" :key="key">
                            <span class="fw-semibold">{{ key }}: </span>
                            <span>{{ value }}</span>
                        </div>
                    </div>
                    <div
                        class="col-12 col-lg-6 d-flex flex-column p-0 country__additional-info"
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
                    class="d-flex flex-wrap align-items-center fw-semibold w-100 country__border-countries"
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
        const populationReversed = country.value.population
            .toString()
            .split("")
            .reverse();
        let population = [];
        for (let i = 1; i <= populationReversed.length; i++) {
            population.push(populationReversed[i - 1]);
            if (i % 3 === 0) {
                population.push(",");
            }
        }
        population = population.reverse().join("");
        return {
            "Native Name": country.value.name.nativeName[nativeNameKey].common,
            Population: population,
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
            "Top Level Domain": country.value.hasOwnProperty("tld")
                ? country.value.tld
                : "",
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
.country__flag img {
    height: 250px;
    object-fit: cover;
}

.country__desc,
.country__desc .row {
    row-gap: 20px;
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

@media only screen and (max-width: 991px) {
    .country__flag img {
        max-width: 400px;
    }

    .country__header {
        max-width: 400px;
    }

    .country__desc .row,
    .country__border-countries {
        max-width: 400px;
    }
}

@media only screen and (min-width: 992px) {
    .country__flag {
        padding-right: 50px;
    }

    .country__flag img {
        height: 350px;
    }
}

@media only screen and (min-width: 1200px) {
    .country__flag {
        padding-right: 75px;
    }
    .country__flag img {
        height: 400px;
    }
}

@media only screen and (min-width: 1400px) {
    .country__flag {
        padding-right: 100px;
    }
}
</style>
