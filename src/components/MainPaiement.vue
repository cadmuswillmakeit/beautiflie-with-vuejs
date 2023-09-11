<script setup>
    import { ref, computed } from "vue";
    import {saveBasket,getBasket, removeFromBasket,addbasket, changeQuantity, getNumberProduct, getTotalPrice } from '../panier.js';
    import CardPanier from "./CardPanier.vue";
    import ModalPaiement from "./ModalPaiement.vue";

    document.title = "Paiement des produits";    
    
    const emit = defineEmits(['majPanier']);
    const showModal = ref(false);
    const n = ref(getNumberProduct ());
    const tab = ref([]);
    const tabPanier = computed ( () =>  {
        return tab.value;
    } )
    const cardinal = computed ( () => {
        return n.value
    });

    const panierVide = computed ( () => {
        return cardinal.value === 0 ? "okay" : "";
    } )
    function genererTableau () {
        tab.value = [];
        const tableau = getBasket()
        const quotient = Math.floor(getNumberProduct() / 3)
        const reste = getNumberProduct() % 3;
        let pas = 3;
        let sousTableau = [];
        let j = 0;
        for (let i = 0; i < quotient; i++) {
            sousTableau = tableau.slice(j, pas);
            tab.value.push(sousTableau);
            j = pas;
            pas +=3;
        }
        if (reste > 0) {
            sousTableau = tableau.slice((quotient*3), tableau.length);
            tab.value.push(sousTableau);
        }
    }
    genererTableau();

    const titreModal = computed (() => {
        return cardinal.value === 0 ? "Commande non valide !" : "Commmande Validée"
    })

    const contenuModal = computed (() => {
        return cardinal.value === 0 ? "Votre panier est vide :(" : "Votre commande a été bien reçue, vous serez livré dans un bref délai"
    })

    const passerCommande = async () => {

        showModal.value = true;
        await new Promise((resolve) => {
            const interval = setInterval(() => {
            if (!showModal.value) {
                clearInterval(interval);
                resolve();
            }
            }, 100); // Vérifie toutes les 100 millisecondes si showModal est false
        });
        const panier = getBasket()
        for (let item of panier) {
            console.log(`je retire ${item}`)
            removeFromBasket(item);
        }
        n.value = getNumberProduct();
        tab.value = getBasket();
        emit('majPanier');
    }

    function gestionPanier (item, typeOperation) {
        if (typeOperation === -1 || typeOperation === 1) {
            changeQuantity(item, typeOperation)
        } else if (typeOperation === 0) {
            removeFromBasket(item);
        }
        n.value = getNumberProduct();
        genererTableau();
        emit('majPanier');
    }



</script>

<template>
    <main>
        <div class="container py-4">
            <div class="row">
                <div class="col-sm-12 py-4 text-center">
                    <h1 class="product_taital">Articles ({{cardinal}})</h1>
                        <RouterLink to="/" class="btn  bg-danger">Retourner à la boutique</RouterLink>
                </div>
            </div>  
        </div> 
        <div class="container" id="containerElement">
            <div v-if="panierVide" class=" row">
                <div class="col">
                    <p class="text-center">Oups ! :( <br>
                        Votre panier est vide. <br>Vos articles séléctionnés apparaîtront ici</p>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-md-3 g-4 mb-4" v-for="(sousTab, index) in tabPanier" :key="index">
                <CardPanier v-for="element in sousTab" :key="element.id" :element="element" @ajout-retrait="gestionPanier"/>
            </div>    
        </div>  
        <div class="container">
            <div class="row py-4">
                <div class="col">
                    <div class="text-center montotal py-3">
                        <h1 class="total">Total: <span class="total-course">{{ getTotalPrice() }}</span>$</h1>
                        <button type="button" class="btn commander modal-trigger" @click="passerCommande">Commander</button>                        
                    </div>
                </div>
            </div>   
        </div> 
        <ModalPaiement :showModal="showModal" :titreModal="titreModal" :contenuModal="contenuModal" @fermer-modal="showModal = false"/> 
   </main>
</template>

<style scoped>
    .montotal {
        background: #246e96;
        color: #fff;
        font-size: 22px;
        font-weight: 300;
        line-height: 49px;
        margin: 0;
        padding: 0 30px;

    }

    .montotal .btn {
        background: #53b5aa;
    }

    a:hover {
        color: black;
    }

    .content {
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        padding: 0 20px;
    }
    .content.content {
        height: 50px;
        margin: 6px 0 0 0;
        padding: 0;
    }    
</style>