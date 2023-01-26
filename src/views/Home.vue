<template>
    <div class="container-xxl px-4 px-xxl-0 py-4">
        <div class="row">
            <div class="col-12 d-flex justify-content-between pt-3">
                <div class="input-group shadow-blur">
                    <span
                        class="input-group-text ps-4 fs-14"
                        id="inputGroup-sizing-default"
                        ><font-awesome-icon
                            icon="fa-solid fa-magnifying-glass"
                            size="lg"
                            class="dark-gray"
                    /></span>
                    <input
                        type="text"
                        class="form-control fs-14 text-font py-3 px-3 fw-semibold"
                        placeholder="Search for a country..."
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </div>
                <!-- <select
                    class="form-select fs-14 text-font fw-semibold"
                    aria-label="Default select example"
                >
                    <option selected disabled>Filter by Region</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select> -->
                <SelectDropdown></SelectDropdown>
                <!-- 
                    select

                    .dropdown
                        .dropdown-select
                            .select
                            .icon
                        .dropdown-list
                            .dropdown-list__item
                 -->
            </div>
        </div>
    </div>
</template>

<script setup>
import SelectDropdown from "../components/SelectDropdown.vue";
</script>

<style>
.input-group {
    max-width: 400px;
    border-radius: 0.375rem;
}

.form-select {
    width: fit-content;
    cursor: pointer;
    padding-right: 60px;
    padding-left: 20px;
}

.input-group-text,
.form-control,
.form-select {
    background-color: var(--elements-color);
}

.input-group-text {
    cursor: pointer;
}

.input-group-text,
.form-control {
    border: none;
}

.form-control:focus,
.form-select:focus {
    outline: none !important;
    box-shadow: none;
}

::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: var(--input-color) !important;
    opacity: 1; /* Firefox */
}

:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: var(--input-color) !important;
}

::-ms-input-placeholder {
    /* Microsoft Edge */
    color: var(--input-color) !important;
}

.dark-gray {
    color: var(--input-color);
}
</style>
