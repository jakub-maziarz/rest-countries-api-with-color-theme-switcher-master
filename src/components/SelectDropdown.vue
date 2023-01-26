<template>
    <div class="dropdown shadow-blur" @click="dropdown = true">
        <div
            class="dropdown__selected d-flex justify-content-between h-100 align-items-center fs-14 text-font fw-semibold"
        >
            <span class="dropdown__value">Filter by Region</span>
            <font-awesome-icon
                icon="fa-solid fa-chevron-down"
                class="icon-color"
            />
        </div>
        <div
            class="dropdown__list w-100 shadow-blur py-2"
            v-if="dropdown"
            @mouseleave="dropdown = false"
        >
            <div
                class="dropdown__item fs-14 text-font fw-semibold"
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
const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
</script>

<style scoped>
.dropdown {
    width: fit-content;
    position: relative;
    border-radius: 0.375rem;
}

.dropdown__selected {
    border-radius: 0.375rem;
    cursor: pointer;
    column-gap: 30px;
    padding: 6px 20px 6px 20px;
    background-color: var(--elements-color);
}

.dropdown__list {
    border-radius: 0.375rem;
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
