<template>
    <div class="input-group rounded-1 shadow-blur">
        <span class="input-group-text ps-4 fs-7" id="inputGroup-sizing-default"
            ><font-awesome-icon icon="fa-solid fa-magnifying-glass" size="lg"
        /></span>
        <input
            type="text"
            class="form-control fs-7 py-3 px-3 fw-semibold"
            placeholder="Search for a country..."
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        />
    </div>
</template>
<script setup>
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>

<style scoped>
.input-group {
    max-width: 400px;
}

.input-group-text,
.form-control {
    background-color: var(--elements-color);
    color: var(--input-color);
    border: none;
    font-family: var(--text-font);
}

.input-group-text {
    cursor: pointer;
}

.form-control:focus {
    outline: none !important;
    box-shadow: none;
}
</style>
