import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAlignRight,
  faComment,
  faPaperclip,
  faClock,
  faCheckSquare,
  faPlus,
  faTasks,
  faTable
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faAlignRight,
  faComment,
  faPaperclip,
  faClock,
  faCheckSquare,
  faPlus,
  faTasks,
  faTable
);
Vue.component("font-awesome-icon", FontAwesomeIcon);
