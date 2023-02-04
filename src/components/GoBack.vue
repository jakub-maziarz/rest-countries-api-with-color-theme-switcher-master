<template>
    <button class="btn px-4 py-2 shadow-blur mt-3" @click="$router.back()">
        <font-awesome-icon icon="fa-solid fa-arrow-left-long" class="me-2" />
        Back
    </button>
</template>
<style scoped>
.btn {
    background-color: var(--elements-color);
    font-family: var(--text-font);
    color: var(--text-color);
}

.btn:focus {
    outline: none !important;
    box-shadow: none;
    border: none;
    background-color: var(--elements-color);
}
</style>
