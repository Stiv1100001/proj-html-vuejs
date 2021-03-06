import Vue from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faClock,
  faPhone,
  faEnvelope,
  faArrowRight,
  faAward,
  faLock,
  faPenToSquare,
  faGraduationCap,
  faLocationDot,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

Vue.config.productionTip = false;

import "bootstrap";

library.add(
  faClock,
  faPhone,
  faEnvelope,
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faArrowRight,
  faAward,
  faLock,
  faPenToSquare,
  faGraduationCap,
  faLocationDot,
  faChevronRight
);
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
