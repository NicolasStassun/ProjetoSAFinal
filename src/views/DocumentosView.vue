<template>
    <div class="flex flex-col bg-slate-200 mb-16" style="height: 862px;">
        <BarraSuperior class="mb-16"></BarraSuperior>
        <div class="flex justify-center  bg-slate-200" style="height: auto; min-height: 862px;">
            <div class="w-full flex flex-col bg-slate-200" style="height: auto; min-height: 66.66%; max-height: auto;">
                <div class="flex justify-center bg-slate-200" v-for="documento in documentos" :key="documento">
                    <Documento class="cursor-pointer" :titulo="documento.titulo" :resumo="documento.descricao" :link="documento.link"></Documento>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import BarraSuperior from '../components/BarraSuperior.vue';
import Documento from '../components/Documento.vue';

const documentos = [
  {
    titulo: "2",
    descricao: "Aprenda a programar com a gente! Aqui você encontra os melhores cursos e professores...",
    link: "https://www.google.com"
  },
  {
    titulo: "3",
    descricao: "Aprenda a programar com a gente! Aqui você encontra os melhores cursos e professores...",
    link: "https://www.google.com"
  },
  {
    titulo: "4",
    descricao: "Aprenda a programar com a gente! Aqui você encontra os melhores cursos e professores...",
    link: "https://www.google.com"
  },
  {
    titulo: "5",
    descricao: "Aprenda a programar com a gente! Aqui você encontra os melhores cursos e professores...",
    link: "https://www.google.com"
  },
  {
    titulo: "6",
    descricao: "Aprenda a programar com a gente! Aqui você encontra os melhores cursos e professores...",
    link: "https://www.google.com"
  },
  {
    titulo: "7",
    descricao: "Aprenda a programar com a gente! Aqui você encontra os melhores cursos e professores...",
    link: "https://www.google.com"
  },
  {
    titulo: "8",
    descricao: "Aprenda a programar com a gente! Aqui você encontra os melhores cursos e professores...",
    link: "https://www.google.com"
  },
  {
    titulo: "8",
    descricao: "Aprenda a programar com a gente! Aqui você encontra os melhores cursos e professores...",
    link: "https://www.google.com"
  },
  {
    titulo: "8",
    descricao: "Aprenda a programar com a gente! Aqui você encontra os melhores cursos e professores...",
    link: "https://www.google.com"
  },
  
];


</script>
