<script setup>
    import {getNumberProduct} from '../panier.js';
    import { ref, computed } from "vue"
    import Header from "../components/header.vue";
    import Main from "../components/MainPaiement.vue";

    const n = ref(getNumberProduct());
    const cardinal = computed(() => {
        return n.value
    })
    function majPanier () {
        n.value = getNumberProduct()
    }
</script>

<template>
    <Header :cardinalPanier="cardinal" />
    <Main @maj-panier="majPanier"/>
</template>

<style scoped>

</style>