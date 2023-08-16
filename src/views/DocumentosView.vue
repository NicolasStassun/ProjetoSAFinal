<template>
  <div class="bg-slate-200">
    <BarraSuperior class="mb-16"></BarraSuperior>
    <div class="flex flex-col bg-slate-200" style="height: 862px;">
        <div class="flex justify-center  bg-slate-200" style="height: auto; min-height: 862px;">
            <div class="w-full flex flex-col bg-slate-200" style="height: auto; min-height: 66.66%; max-height: auto;">
                <div class="flex justify-center bg-slate-200" v-for="topico in topicos" :key="documento">
                  <RouterLink :to="topico.link">
                    <div class="flex items-center flex-col">
                      <img style="height: 80px; width: 80px;" :src="topico.icon">
                      <h1>{{ topico.titulo }}</h1>
                    </div>
                  </RouterLink>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>

import BarraSuperior from '../components/BarraSuperior.vue';

const topicos = [
  {
    titulo: "Leis",
    link: "/leis",
    icon: "https://cdn-icons-png.flaticon.com/512/3500/3500543.png"
  }
];


</script>
