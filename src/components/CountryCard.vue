<template>
    <div class="col-3">
        <div class="card w-100 h-100 shadow-blur">
            <img
                :src="country.flags.png"
                class="card-img-top"
                alt="country.flags.png"
            />
            <div class="card-body pt-4 pb-5 px-4">
                <h5 class="card-title text-font fw-bold">
                    {{ country.name.common }}
                </h5>
                <p
                    class="card-text mb-0 text-font"
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
    </div>
</template>
<script setup>
const props = defineProps(["country", "countryShortInfo"]);
</script>
<style>
.card {
    border: none;
    cursor: pointer;
}

.card-img-top {
    height: 150px;
}
</style>
