<template>
    <div class="card w-100 h-100 shadow-blur mx-auto">
        <img
            :src="country.flags.png"
            class="card-img-top"
            :alt="country.name.common"
        />
        <div class="card-body pt-4 pb-5 px-4">
            <h3 class="card-title fs-5 fw-bold">
                {{ country.name.common }}
            </h3>
            <p
                class="card-text mb-0 fs-6"
                v-for="(value, key) in countryShortInfoComputed"
                :key="key"
            >
                <span class="card-country-key fw-semibold"
                    >{{ key.charAt(0).toUpperCase() + key.slice(1) + ": " }}
                </span>
                <span class="card-country-property-value">{{
                    value instanceof Array ? value[0] : value
                }}</span>
            </p>
        </div>
    </div>
</template>
<script setup>
import { computed } from "vue";

const props = defineProps(["country", "countryShortInfo"]);

const countryShortInfoComputed = computed(() => {
    const infoTemp = props.countryShortInfo;
    const populationReversed = infoTemp.population
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
    infoTemp.population = population;

    return infoTemp;
});
</script>
<style>
.card {
    border: none;
    cursor: pointer;
    overflow: hidden;
}

.card-img-top {
    height: 150px;
}

.card-body {
    color: var(--text-color);
    font-family: var(--text-font);
    background-color: var(--elements-color);
}

@media only screen and (max-width: 1200px) {
    .card {
        max-width: 285px;
    }
}
</style>
