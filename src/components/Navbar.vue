<template>
    <nav class="navbar shadow-blur">
        <div class="container-xxl px-4 px-xxl-0 py-2 justify-content-between">
            <router-link to="/"
                ><span class="navbar-brand mb-0 fw-bold fs-5"
                    >Where in the world?</span
                ></router-link
            >
            <span @click="switchTheme" class="navbar-text fw-semibold fs-6">
                <font-awesome-icon icon="fa-regular fa-moon" /> Dark Mode
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

.navbar-text {
    cursor: pointer;
}
</style>
