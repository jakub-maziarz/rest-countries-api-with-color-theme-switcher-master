<template>
    <div class="shadow-blur dropdown rounded-1" @click="dropdown = true">
        <div
            class="d-flex justify-content-between h-100 align-items-center fs-7 fw-semibold rounded-1 dropdown__selected"
        >
            <span class="dropdown__value">Filter by Region</span>
            <font-awesome-icon icon="fa-solid fa-chevron-down" />
        </div>
        <div
            class="w-100 shadow-blur py-2 rounded-1 dropdown__list"
            v-if="dropdown"
            @mouseleave="dropdown = false"
        >
            <div
                class="fs-7 fw-semibold dropdown__item"
                v-for="region in regions"
                :key="region"
                @click="$emit('filterByRegion', region)"
            >
                {{ region }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
defineEmits(["filterByRegion"]);

const dropdown = ref(false);
const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];
</script>

<style scoped>
.dropdown {
    width: fit-content;
    position: relative;
}

.dropdown__selected {
    cursor: pointer;
    column-gap: 30px;
    padding: 6px 20px 6px 20px;
    background-color: var(--elements-color);
}

.dropdown__selected,
.dropdown__item {
    font-family: var(--text-font);
    color: var(--text-color);
}

.dropdown__list {
    position: absolute;
    background-color: var(--elements-color);
    top: 100%;
    top: calc(100% + 10px);
    z-index: 1;
}

.dropdown__item {
    padding: 6px 20px 6px 20px;
    cursor: pointer;
    background-color: var(--elements-color);
}
</style>
