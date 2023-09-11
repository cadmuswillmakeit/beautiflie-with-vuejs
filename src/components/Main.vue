<script setup>
    import { ref, computed } from "vue";
    import {saveBasket,getBasket, removeFromBasket,addbasket, changeQuantity, getNumberProduct, getTotalPrice } from '../panier.js';
    import CardArticle from "./CardArticle.vue";
    import AboutSection from "./AboutSection.vue";
    import AvisConsommateurs from "./AvisConsommateurs.vue";
    import SectionContact from "./SectionContact.vue";
    import ModalPanier from "./ModalPanier.vue";

    document.title = "Beautiflie";
    const articlesTab = [
    {
        "id": 1,
        "nom": "Beauty Bursh 1",
        "prix": 15,
        "description": "incididunt ut labore et dolore magna aliqua. Ut enim",
        "image": "./images/img-1.png"
    },
    {
        "id": 2,
        "nom": "Beauty Bursh 2",
        "prix": 15,
        "description": "incididunt ut labore et dolore magna aliqua. Ut enim",
        "image": "./images/img-2.png"
    },
    {
        "id": 3,
        "nom": "Beauty Bursh 3",
        "prix": 15,
        "description": "incididunt ut labore et dolore magna aliqua. Ut enim",
        "image": "./images/img-3.png"
    },
    {
        "id": 4,
        "nom": "Beauty Bursh 4",
        "prix": 15,
        "description": "incididunt ut labore et dolore magna aliqua. Ut enim",
        "image": "./images/img-4.png"
    },
    {
        "id": 5,
        "nom": "Beauty Bursh 5",
        "prix": 20,
        "description": "incididunt ut labore et dolore magna aliqua. Ut enim",
        "image": "./images/img-5.png"
    },
    {
        "id": 6,
        "nom": "Beauty Bursh 6",
        "prix": 20,
        "description": "incididunt ut labore et dolore magna aliqua. Ut enim",
        "image": "./images/img-6.png"
    },
    {
        "id": 7,
        "nom": "Beauty Bursh 7",
        "prix": 20,
        "description": "incididunt ut labore et dolore magna aliqua. Ut enim",
        "image": "./images/img-7.png"
    },
    {
        "id": 8,
        "nom": "Beauty Bursh 8",
        "prix": 20,
        "description": "incididunt ut labore et dolore magna aliqua. Ut enim",
        "image": "./images/img-8.png"
    },
    {
        "id": 9,
        "nom": "Beauty Bursh 9",
        "prix": 30,
        "description": "incididunt ut labore et dolore magna aliqua. Ut enim",
        "image": "./images/img-9.png"
    },
    {
        "id": 10,
        "nom": "Beauty Bursh 10",
        "prix": 30,
        "description": "incididunt ut labore et dolore magna aliqua. Ut enim",
        "image": "./images/img-10.png"
    },
    {
        "id": 11,
        "nom": "Beauty Bursh 11",
        "prix": 30,
        "description": "incididunt ut labore et dolore magna aliqua. Ut enim",
        "image": "./images/img-11.png"
    },
    {
        "id": 12,
        "nom": "Beauty Bursh 12",
        "prix": 30,
        "description": "incididunt ut labore et dolore magna aliqua. Ut enim",
        "image": "./images/img-12.png"
    }
    ]
    const sousTab1 = articlesTab.slice(0,4);
    const sousTab2 = articlesTab.slice(4,8);
    const sousTab3 = articlesTab.slice(8,12);

    const emit = defineEmits(['majPanier']);
    const produit = ref("");
    const produitSelectionne = computed (() => {
        return produit.value
    })
    const showModal = ref(false);
    const produitAjoute = ref(undefined);
    const titreModal = computed (() => {
        return produitAjoute.value !== undefined ? "Retrait du panier" : "Ajout au panier"
    })

    const contenuModal = computed (() => {
        return produitAjoute.value !== undefined ? `Vous avez retiré ${produitSelectionne.value} de votre panier` : `Vous venez d'ajouter ${produitSelectionne.value} à votre panier`
    })

    function gestionPanier (element) {
        const panierArticle = ref(getBasket());
        const produitDejaAjoute = panierArticle.value.find(p => p.id == element.id);
        produitAjoute.value = produitDejaAjoute;

        produit.value = element.nom;
        if (produitDejaAjoute !== undefined) {
            removeFromBasket(element);
        } else {
            addbasket(element);
        } 
        panierArticle.value = getBasket();
        emit('majPanier');
        showModal.value = true;
    } 

</script>

<template>
    <main>
        <div class="banner_section layout_padding">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div>
                    <div class="container">
                        <div class="row">
                        <div class="col-sm-6">
                            <h1 class="banner_taital">Beauty <br>Kit</h1>
                            <p class="banner_text">Ncididunt ut labore et
    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    ullamco laboris nisi ut aliquip ex ea commodo</p>
                            <div class="read_bt"><a href="#">Buy Now</a></div>
                        </div>
                        <div class="col-sm-6">
                            <div class="banner_img"><img src="../../public/images/banner-img.png"></div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div class="product_section layout_padding">
            <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h1 class="product_taital">Our Products</h1>
                    <p class="product_text">incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                </div>
            </div>
            <div class="product_section_2 layout_padding">
                <div class="row">
                    <CardArticle v-for="item in sousTab1" :key="item.id" :item="item" @ajout-retrait="gestionPanier"/>
                </div>
                <div class="row">
                    <CardArticle v-for="item in sousTab2" :key="item.id" :item="item" @ajout-retrait="gestionPanier"/>
                </div>
                <div class="row">
                    <CardArticle v-for="item in sousTab3" :key="item.id" :item="item" @ajout-retrait="gestionPanier"/>
                </div>

                <div class="seemore_bt"><a href="#">See More</a></div>
            </div>
            </div>
        </div>
        <AboutSection />
        <AvisConsommateurs />
        <SectionContact />
        <ModalPanier :showModal="showModal" :titreModal="titreModal" :contenuModal="contenuModal" @fermer-modal="showModal = false"/>
    </main>
</template>

<style scoped>
    .banner_section {
        width: 100%;
        float: left;
        background-image: url(../../public/images/banner-bg.png);
        height: auto;
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }

    .banner_taital {
        width: 100%;
        margin: 0 auto;
        font-size: 100px;
        color: #000;
        line-height: 90px;
        padding-top: 20px;
        font-family: 'Great Vibes', cursive;
    }

    .banner_text {
        width: 100%;
        float: left;
        font-size: 16px;
        color: #000;
        margin: 20px 0px;
    }

    .read_bt {
        width: 170px;
        float: left;
        padding-top: 30px;
    }

    .read_bt a {
        width: 100%;
        float: left;
        font-size: 16px;
        color: #ffffff;
        background-color: #252525;
        text-align: center;
        padding: 10px 0px;
        border-radius: 5px;
        text-transform: uppercase;
    }

    .read_bt a:hover {
        color: #ffffff;
        background-color: #f5ddb6;
    }


    .product_section {
        width: 100%;
        float: left;
        padding-bottom: 90px;
    }

    .product_section_2 {
        width: 100%;
        float: left;
        padding-top: 30px;
      }
    .product_taital {
        width: 100%;
        float: left;
        font-size: 40px;
        text-transform: uppercase;
        text-align: center;
        color: #232322;
        font-weight: bold;
    }

    .product_text {
        width: 100%;
        float: left;
        font-size: 16px;
        text-align: center;
        color: #50504f;
        margin: 0px;
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

    .seemore_bt a:hover {
        color: #ffffff;
        background-color: #f5ddb6;
    }

</style>