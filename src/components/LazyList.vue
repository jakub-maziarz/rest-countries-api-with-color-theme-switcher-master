<!-- HTML -->
<template>
    <div id="container" ref="container" :class="`${containerClasses}`">
        <!-- items rendering -->
        <template v-for="item in itemsToDisplay">
            <slot :item="item"></slot>
        </template>

        <template v-if="loading">
            <!-- Loading component -->
            <div v-if="defaultLoading" id="loading-wrapper">
                <Loading :color="defaultLoadingColor" />
            </div>
            <div v-else id="loading-wrapper">
                <slot name="loading"></slot>
            </div>
        </template>

        <!-- list footer -->
        <div
            v-show="page !== items.length - 1 || !loading"
            id="end-of-list"
            ref="end-of-list"
        />
    </div>
</template>

<!-- JAVASCRIPT -->
<script>
import Loading from "./Loading.vue";

const chunkArray = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
        arr.slice(i * size, i * size + size)
    );

export default {
    name: "LazyList",
    components: { Loading },
    props: {
        data: {
            type: Array,
            default: () => [],
        },
        itemsPerRender: {
            type: Number,
            default: 3,
        },
        containerClasses: {
            type: String,
            default: "",
        },
        defaultLoading: {
            type: Boolean,
            default: true,
        },
        defaultLoadingColor: {
            type: String,
            default: "#18191A",
        },
    },
    created() {
        this.updateList();
    },
    mounted() {
        window.addEventListener("scroll", this.loadItems);
    },
    beforeUnmount() {
        window.removeEventListener("scroll", this.loadItems);
    },
    data() {
        return {
            items: [],
            page: 0, // page represents the index of last small array in the list
            loading: false,
            itemsToDisplay: [], // the list of items to be rendered
        };
    },
    watch: {
        data() {
            this.updateList();
            this.page = 0;
        },
    },
    methods: {
        // set the list and update it when data changes
        updateList() {
            const chunckedArray = chunkArray(this.data, this.itemsPerRender); // chunkArray(data,itemsPerRender) to get array of small arrays
            this.items = chunckedArray;
            this.itemsToDisplay = chunckedArray[0];
        },

        // load more items when scrolling to the end of the list
        loadItems() {
            if (this.page === this.items.length - 1) return;

            const element = this.$refs["end-of-list"]; //this.endOfList;
            if (!element) return;

            const position = element.getBoundingClientRect();

            // checking whether fully visible
            if (
                position.top >= 0 &&
                position.bottom <= window.innerHeight &&
                !this.loading
            ) {
                this.loading = true;
                this.page++;
                setTimeout(() => {
                    this.itemsToDisplay = [
                        ...this.itemsToDisplay,
                        ...this.items[this.page],
                    ];
                    this.loading = false;
                    this.loadItems();
                }, 500);
            }
        },
    },
};
</script>

<style>
.hidden {
    display: none;
}

/* List container style */
#container {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    scroll-behavior: smooth;
    scrollbar-width: thin;
}
#end-of-list {
    height: 32px;
    width: 100%;
}
#loading-wrapper {
    width: 100%;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Loading style */
.dots {
    width: 3.5em;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
}
.dots div {
    width: 0.8em;
    height: 0.8em;
    border-radius: 50%;
    animation: fade 0.8s ease-in-out alternate infinite;
}
.dots div:nth-of-type(1) {
    animation-delay: -0.4s;
}
.dots div:nth-of-type(2) {
    animation-delay: -0.2s;
}
@keyframes fade {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}
@media (max-width: 480px) {
    .dots div {
        width: 0.7em;
        height: 0.7em;
    }
}
</style>
