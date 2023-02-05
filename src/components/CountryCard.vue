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
                v-for="(value, key) in countryShortInfo"
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
const props = defineProps(["country", "countryShortInfo"]);
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
