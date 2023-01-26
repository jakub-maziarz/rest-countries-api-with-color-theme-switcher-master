import "bootstrap/dist/css/bootstrap.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
    faMoon as faMoonSolid,
    faMagnifyingGlass,
    faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { faMoon as faMoonRegular } from "@fortawesome/free-regular-svg-icons";
import { createApp } from "vue";
import router from "./router";
import "./style.css";
import App from "./App.vue";

library.add(faMoonRegular, faMoonSolid, faMagnifyingGlass, faChevronDown);

createApp(App)
    .use(router)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount("#app");

import "bootstrap/dist/js/bootstrap.js";
