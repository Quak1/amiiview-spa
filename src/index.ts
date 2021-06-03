import router from "./routes/index"
import './styles/styles.scss'

console.log("Hola mundo");

window.addEventListener('load', router);
window.addEventListener('hashchange', router)