<script setup>
    import { ref, computed } from "vue";
    import {saveBasket,getBasket, removeFromBasket,addbasket, changeQuantity, getNumberProduct, getTotalPrice } from '../panier.js';

    const props = defineProps(['element']);
    const emit = defineEmits(['ajoutRetrait']);
    const item = computed (() => {
        return props.element;
    })

    function modifierPanier (type) {
            emit('ajoutRetrait', item.value, type)
    }
</script>

<template>
    <div class="col-md-4">
        <div class="card h-100">
            <img :src="item.image" :alt="item.nom" class="card-img-top image_1">
            <div class="card-body">
            <h5 class="card-title">{{ item.nom }}</h5>
            <p class="card-text">{{ item.description }}</p>
            </div>
            <div class="content" :id="item.id">
                <button class="qt-minus" @click="modifierPanier(-1)">-</button>
                <span class="qt">{{ item.quantity }}</span>
                <button class="qt-plus" @click="modifierPanier(1)">+</button>
                <button class="supprimer" @click="modifierPanier(0)"><i class="bi bi-trash-fill"></i></button>
            </div>
            <div class="card-footer">
            <small class="text-muted">
                <span class="price">{{ item.prix }} $</span>
                <span class="full-price">{{ item.prix * item.quantity }} $</span>
            </small>
            </div>
        </div>
    </div>
</template>

<style scoped>

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
    /**/
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
    
    .supprimer {
        display: block;
        float: right;
        background: #fcfcfc;
        border: none;
        font-size: 30px;
        font-weight: 300;
        height: 100%;
        padding: 0 20px;
        -webkit-transition: background .2s linear;
        -moz-transition: background .2s linear;
        -ms-transition: background .2s linear;
        -o-transition: background .2s linear;
        transition: background .2s linear;
    
    }
    
    .qt, .qt-plus, .qt-minus {
        display: block;
        float: left;
    }
      
    .qt {
        font-size: 19px;
        line-height: 50px;
        width: 70px;
        text-align: center;
    }
      
    .qt-plus, .qt-minus {
        background: #fcfcfc;
        border: none;
        font-size: 30px;
        font-weight: 300;
        height: 100%;
        padding: 0 20px;
        -webkit-transition: background .2s linear;
        -moz-transition: background .2s linear;
        -ms-transition: background .2s linear;
        -o-transition: background .2s linear;
        transition: background .2s linear;
    }
      
    .qt-plus:hover {
        background: #53b5aa;
        color: #fff;
        cursor: pointer;
    }
      
    .qt-minus:hover  {
        background: red;
        color: #fff;
        cursor: pointer;
    }
    .supprimer:hover {
        color: red;
        cursor: pointer;
    
    }
    .qt-plus {
        line-height: 50px;
    }
      
    .qt-minus {
        line-height: 47px;
    }
    
    .price {
        color: #000;
        float: left;
        font-size: 15px;
        font-weight: 300;
        line-height: 49px;
        margin: 0;
        padding: 0 15px;
    }
      
    .full-price {
        background: #78b9e2;
        color: #fff;
        float: right;
        font-size: 22px;
        font-weight: 300;
        line-height: 49px;
        margin: 0;
        padding: 0 15px;
    
        -webkit-transition: margin .15s linear;
        -moz-transition: margin .15s linear;
        -ms-transition: margin .15s linear;
        -o-transition: margin .15s linear;
        transition: margin .15s linear;
    }
    
    
    @media screen and (max-width: 992px) {
        .qt-plus, .qt-minus {
            padding: 0 5px;
        }
        .supprimer {
            padding: 0 5px;
        }
        .qt {
            width: 35px;
            text-align: center;
        }
        
        
        .full-price {
            font-size: 20px;
        }
        
        
    }
</style>