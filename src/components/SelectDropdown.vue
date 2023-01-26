<template>
    <div class="dropdown shadow-blur">
        <div
            class="dropdown__selected d-flex justify-content-between h-100 align-items-center fs-14 text-font fw-semibold"
        >
            <span class="dropdown__value">Filter by Region</span>
            <font-awesome-icon
                icon="fa-solid fa-chevron-down"
                class="dark-gray"
            />
        </div>
        <div class="dropdown__list w-100 shadow-blur py-2">
            <div class="dropdown__item fs-14 text-font fw-semibold">Africa</div>
            <div class="dropdown__item fs-14 text-font fw-semibold">
                America
            </div>
            <div class="dropdown__item fs-14 text-font fw-semibold">Asia</div>
            <div class="dropdown__item fs-14 text-font fw-semibold">Europe</div>
            <div class="dropdown__item fs-14 text-font fw-semibold">
                Oceania
            </div>
        </div>
    </div>
</template>

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
}

.dropdown__item {
    padding: 6px 20px 6px 20px;
    cursor: pointer;
    background-color: var(--elements-color);
}
</style>
