import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './assets/styles/main.css';
import App from './App.vue';
import router from './router';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import {faMagnifyingGlass, faLocationDot } from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(faMagnifyingGlass, faLocationDot);

const pinia = createPinia();
const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(pinia);
app.use(router);
app.mount('#app');
