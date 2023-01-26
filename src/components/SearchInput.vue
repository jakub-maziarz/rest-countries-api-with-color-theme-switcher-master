<template>
    <div class="input-group shadow-blur">
        <span class="input-group-text ps-4 fs-14" id="inputGroup-sizing-default"
            ><font-awesome-icon
                icon="fa-solid fa-magnifying-glass"
                size="lg"
                class="icon-color"
        /></span>
        <input
            type="text"
            class="form-control fs-14 text-font py-3 px-3 fw-semibold"
            placeholder="Search for a country..."
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
        />
    </div>
</template>

<style>
.input-group {
    max-width: 400px;
    border-radius: 0.375rem;
}

.input-group-text,
.form-control {
    background-color: var(--elements-color);
}

.input-group-text {
    cursor: pointer;
}

.input-group-text,
.form-control {
    border: none;
}

.form-control:focus {
    outline: none !important;
    box-shadow: none;
}
</style>
