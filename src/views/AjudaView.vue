<template>
    <main class="w-full bg-slate-200" style="min-height: 100%; height: auto;">
        <BarraSuperior></BarraSuperior>
        <div style="height: 550px;" class="w-full bg-slate-200 flex items-center justify-around">
            <div class="flex justify-center bg-slate-200" v-for="contato in contatos" :key="contato">
                  <Contato :img="contato.img" :nome="contato.nome" :link="contato.link"></Contato>
            </div>
        </div>
    </main>
    
    
</template>
<script setup>
import BarraSuperior from '../components/BarraSuperior.vue';
import Contato from '../components/contato.vue';

const contatos = [
    {
        img: "",
        nome: "",
        link: ""
    },
    {
        img: "",
        nome: "",
        link: ""
    },
    {
        img: "",
        nome: "",
        link: ""
    }
]

</script>