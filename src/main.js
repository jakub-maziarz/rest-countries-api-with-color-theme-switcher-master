import "bootstrap/dist/css/bootstrap.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
    faMoon as faMoonSolid,
    faMagnifyingGlass,
    faChevronDown,
    faArrowLeftLong,
} from "@fortawesome/free-solid-svg-icons";
import { faMoon as faMoonRegular } from "@fortawesome/free-regular-svg-icons";
import LazyList from "./components/LazyList.vue";
import { createApp } from "vue";
import router from "./router";
import "./style.css";
import App from "./App.vue";
import store from "./store";

library.add(
    faMoonRegular,
    faMoonSolid,
    faMagnifyingGlass,
    faChevronDown,
    faArrowLeftLong
);

createApp(App)
    .use(router)
    .use(store)
    .component("font-awesome-icon", FontAwesomeIcon)
    .component("LazyList", LazyList)
    .mount("#app");

import "bootstrap/dist/js/bootstrap.js";
