<template>
    <div class="dots">
        <div :style="`background-color: ${color}`"></div>
        <div :style="`background-color: ${color}`"></div>
        <div :style="`background-color: ${color}`"></div>
    </div>
</template>

<script>
export default {
    name: "Loading",
    props: {
        color: {
            type: String,
            default: "#18191A",
        },
    },
};
</script>
