// plugins/fontawesome.js
import { defineNuxtPlugin } from "#app";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUserCircle, faArrowDown, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";


library.add(faUserCircle, faInstagram, faFacebook, faTwitter, faArrowDown, faArrowRightLong);

config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("FontAwesomeIcon", FontAwesomeIcon);
});
