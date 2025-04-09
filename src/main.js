import { createApp } from 'vue';
import './assets/styles/main.css';
import App from './App.vue';
import router from './router';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { } from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add();

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.mount('#app');
