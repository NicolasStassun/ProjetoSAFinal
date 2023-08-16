<template>
  <div class="bg-slate-200 w-full">
    <BarraSuperior class="mb-16"></BarraSuperior>
    <div class="flex flex-col bg-slate-200" style="height: 862px;">
        <div class="flex justify-center  bg-slate-200" style="height: auto; min-height: 862px;">
            <div class="w-full flex flex-col bg-slate-200" style="height: auto; min-height: 66.66%; max-height: auto;">
                <div class="flex bg-slate-200" v-for="assunto in assuntos" :key="assunto">
                  <Assuntos :link="assunto.link" :icon="assunto.icon" :titulo="assunto.titulo"></Assuntos>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>

import Assuntos from '../components/Assuntos.vue';
import BarraSuperior from '../components/BarraSuperior.vue';

const assuntos = [
  {
    link: "/leis",
    icon: "https://cdn-icons-png.flaticon.com/512/3500/3500543.png",
    titulo: "Leis"
  }
];


</script>
