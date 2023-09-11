<script setup>
    import { ref, computed } from "vue";
    import {saveBasket,getBasket, removeFromBasket,addbasket, changeQuantity, getNumberProduct, getTotalPrice } from '../panier.js';

    const {item} = defineProps(['item']);
    const emit = defineEmits(['ajoutRetrait']);

    const panierArticle = ref(getBasket());
    const produitDejaAjoutee = ref(panierArticle.value.find(p => p.id == item.id));

    const boutonPanierTexte = computed( () => {
        return produitDejaAjoutee.value !== undefined ? "Retirer du panier" : "Ajouter du panier"
    });

    const boutonPanierStyle = computed( () => {
        return produitDejaAjoutee.value !== undefined ? {background: 'red'} : {}
    })

    function gererCarteArticle () {
        emit ('ajoutRetrait', item);
        panierArticle.value = getBasket();
        produitDejaAjoutee.value = panierArticle.value.find(p => p.id == item.id)
    }

</script>

<template>
    <div class="col-lg-3 col-sm-6">
        <div class="product_box">
        <h4 class="bursh_text">{{item.nom}}</h4>
        <p class="lorem_text">{{item.description}}</p>
        <img :src="item.image" class="image_1">
        <div class="btn_main">
            <div class="buy_bt">
                <ul>
                    <li class="active modal-trigger produits" :id="item.id" @click="gererCarteArticle"><button :style="boutonPanierStyle" type="button">{{ boutonPanierTexte }}</button></li>
                </ul>
            </div>
            <h3 class="price_text">Price ${{item.prix}}</h3>
        </div>
        </div>
    </div>
</template>

<style scoped>
    .product_section_2 {
        width: 100%;
        float: left;
        padding-top: 30px;
    }

    .product_box {
        width: 100%;
        background-color: #ffffff;
        height: auto;
        border: 1px solid #7d7d7c;
        padding: 20px 0px 0px 0px;
        margin-top: 30px;
    }

    .bursh_text {
        width: 100%;
        font-size: 20px;
        text-align: center;
        color: #1a1c1b;
        font-weight: 600;
    }

    .lorem_text {
        width: 100%;
        font-size: 14px;
        text-align: center;
        color: #50504f;
        margin: 0px;
    }

    .image_1 {
        width: 100%;
        text-align: center;
        margin: 20px 0px;
        padding: 0px 20px;
        height: 200px;
    }

    .btn_main {
        width: 100%;
        display: flex;
        background-color: #000;
        height: auto;
        padding: 20px 10px 13px 10px;
    }

    .buy_bt {
        float: left;
        width: 100%;
    }

    .buy_bt ul {
        margin: 0px;
        padding: 0px;
    }

    .buy_bt li a, .buy_bt li button {
        float: left;
        font-size: 12px;
        color: #252525;
        padding: 5px 10px;
        background-color: #ffffff;
        text-transform: uppercase;
        margin-right: 5px;
        border-radius: 40px;
    }

    /*.buy_bt li a:hover {
        background-color: #f5ddb6;
        color: #ffffff;
    }*/

    .buy_bt li.active button {
        background-color: #f5ddb6;
        color: #fff;
    }

    .price_text {
        font-size: 16px;
        color: #fefefd;
        width: 42%;
        padding-top: 5px;
        text-align: right;
    }

    .seemore_bt {
        width: 170px;
        margin: 0 auto;
        padding-top: 60px;
    }

    .seemore_bt a {
        width: 100%;
        float: left;
        font-size: 16px;
        color: #ffffff;
        background-color: #252525;
        text-align: center;
        padding: 10px 0px;
        border-radius: 5px;
        font-weight: bold;
        text-transform: uppercase;
    }

</style>