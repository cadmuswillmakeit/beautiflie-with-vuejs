// OUR ROUTE RULES
import { createRouter, createWebHistory } from "vue-router";
import Accueil from "../views/Accueil.vue";
import Paiement from "../views/Paiement.vue";

const router = createRouter({
    history : createWebHistory(import.meta.env.BASE_URL),
    routes : [
        {
            path: '/',
            name: "Beautiflie",
            component: Accueil
        },
         {
            path:'/paiement',
            name:"Paiement des produits",
            component: Paiement
         }
    ]
})


export default router