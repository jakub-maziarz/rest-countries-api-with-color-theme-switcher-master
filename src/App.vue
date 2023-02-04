<template>
    <Navbar></Navbar>
    <router-view :key="$route.path"></router-view>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<style scoped></style>
