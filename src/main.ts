
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Developeur from "./components/developeur.vue"
import Disposition from "./components/Disposition.vue"
import composant_form from "./components/composant_form.vue"
import result from "./components/result.vue";
import dispore from "./components/disporesult.vue"
import chiffre from "./components/chiffre.vue"
import border from "./components/bordercool.vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const app = createApp(App);

app.component('Disposition', Disposition)
app.component('Developeur', Developeur)
app.component('Form',composant_form)
app.component('Result',result)
app.component('dispore',dispore)
app.component('chiffre', chiffre)
app.component('border', border)

app.use(router);
app.mount("#app");