<template>
    <nav class="navbar shadow-blur">
        <div
            class="container-xxl px-3 px-sm-4 px-xxl-0 py-2 justify-content-between flex-nowrap"
        >
            <router-link to="/"
                ><h1 class="navbar-brand mb-0 fw-bold fs-5">
                    Where in the world?
                </h1></router-link
            >
            <span @click="switchTheme" class="navbar-text fw-semibold fs-6">
                <font-awesome-icon
                    :icon="`${
                        theme === 'light' ? 'fa-regular' : 'fa-solid'
                    } fa-moon`"
                    class="pe-1"
                />
                {{ theme.charAt(0).toUpperCase() + theme.slice(1) }} Mode
            </span>
        </div>
    </nav>
</template>
<script setup>
import { ref } from "vue";

const theme = ref("light");

function switchTheme() {
    if (theme.value === "light") {
        theme.value = "dark";
    } else {
        theme.value = "light";
    }
    document.documentElement.className = theme.value;
}
</script>

<style scoped>
.navbar {
    background-color: var(--elements-color);
}
.navbar-brand,
.navbar-text {
    color: var(--text-color);
    font-family: var(--text-font);
}

.navbar-brand {
    white-space: normal;
}

.navbar-text {
    cursor: pointer;
}

@media only screen and (max-width: 768px) {
    .navbar h1 {
        font-size: 1rem !important;
    }

    .navbar-text {
        font-size: 0.9rem !important;
    }
}
</style>
