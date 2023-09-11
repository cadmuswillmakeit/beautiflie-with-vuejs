<script setup>
    import { ref, computed } from "vue";
    import {getNumberProduct} from '../panier.js';
    
    const props = defineProps(['cardinalPanier'])
    const n = ref(getNumberProduct ())

    const cardinal = computed ( () => {
        return props.cardinalPanier ===  undefined ? n.value : props.cardinalPanier
    });

    function openNav() {
        document.getElementById("mySidenav").style.width = "100%"; 
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    const modalContainer = document.querySelector(".modal-container");
    const modalTriggers = document.querySelectorAll(".modal-trigger");

    modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal));

    function toggleModal(){
        modalContainer.classList.toggle("actif")
    }

</script>

<template>
    <header>
        <div class="header_section" style="height: auto !important;">
            <div class="container-fluid" style="height: auto !important;">
               <nav class="navbar navbar-light bg-light justify-content-between" style="height: auto !important;">
                  <div id="mySidenav" class="sidenav">
                     <a href="javascript:void(0)" class="closebtn" @click="closeNav()">×</a>
                     <RouterLink  to="/" @click="closeNav()">Home</RouterLink>
                     <a href="#" @click="closeNav()">Products</a>
                     <a href="#" @click="closeNav()">About</a>
                     <a href="#" @click="closeNav()">Client</a>
                     <a href="#" @click="closeNav()">Contact</a>
                     <span class="right-shopcart"><RouterLink to="/paiement" @click="closeNav()"><img src="../../public/images/bag-icon.png"><span class="right-cart-number panier right-cart-num"  style="top:15px; left:8px;"> {{cardinal}} </span></RouterLink></span>
                     <a href="#" @click="closeNav()"><img src="../../public/images/search-icon.png"></a>
                  </div>
                  <span class="toggle_icon" @click="openNav()"><img src="../../public/images/toggle-icon.png"></span>
                  <RouterLink class="logo" to="/"><img src="../../public/images/logo.png"></RouterLink>
                  <form class="form-inline ">
                     <div class="login_text">
                        <ul>
                           <li><a href="#"><img src="../../public/images/user-icon.png"></a></li>
                           <li class="right-shopcart"><RouterLink to="/paiement"><img src="../../public/images/bag-icon.png"><span class="right-cart-number panier right-cart-num">{{cardinal}}</span></RouterLink></li>
                           <li><a href="#"><img src="../../public/images/search-icon.png"></a></li>
                        </ul>
                     </div>
                  </form>
               </nav>
            </div>
         </div>
       </header>
</template>

<style scoped>
    .header_section {
        width: 100%;
        float: left;
        background-color: #fef4ec;
        height: auto;
        background-size: 100%;
    }

    .bg-light {
        background-color: transparent!important;
    }

    .toggle_icon {
        padding: 10px 0px;
    }

    .sidenav {
        height: 100%;
        width: 0;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: #111;
        overflow-x: hidden;
        transition: 0.5s;
        padding-top: 60px;
        text-align: center;
    }

    .sidenav a {
        padding: 4px 8px 4px 8px;
        text-decoration: none;
        font-size: 20px;
        color: #ffffff;
        display: block;
        transition: 0.3s;
    }

    .sidenav a:hover {
        color: #fc967e;
    }

    .sidenav .closebtn {
        position: absolute;
        top: 0;
        right: 25px;
        font-size: 36px;
        margin-left: 50px;
    }

    .sidenav {
        z-index: 99999999999999;
        background-color: rgb(0, 0, 0, 0.9);
    }

    @media screen and (max-width: 450px) {
        .sidenav {
            padding-top: 15px;
            background-color: rgb(0, 0, 0, 0.9);
        }
        .sidenav a {
            font-size: 18px;
        }
    }

    .login_text {
        width: 100%;
        float: left;
    }

    .login_text ul {
        margin: 0px;
        padding: 0px;
    }

    .login_text li {
        font-size: 18px;
        color: #ffffff;
        text-transform: uppercase;
        float: left;
        padding-left: 15px;
    }

    .login_text a {
        color: #ffffff;
    }

    .login_text a:hover {
        color: #ffffff;
    }

    .right-shopcart {
        position: relative;
    }
    .right-shopcart .right-cart-number {
        background: #ff4747;
        max-width: 25px;
        min-width: 20px;
        height: 20px;
        color: #fff;
        border-radius: 10px;
        position: absolute;
        top: -8px;
        left:30px;
        font-size: 12px;
        line-height: 20px;
        text-align: center;
        padding: 0 2px;
    }

    .navbar-light .navbar-brand {
        color: rgba(0, 0, 0, .9);
        padding-left: 90px;
        z-index: 2;
    }

</style>