<template>
    <div class="w-full h-full flex flex-col" style="background-color: #EEF4D4;">
        <BarraSuperior></BarraSuperior>
        <div class="flex justify-center items-center" style="background-color: #EEF4D4; height: 88%; min-height: 88%;">
            <img src="../assets/right-arrow.png" class="transform rotate-180 cursor-pointer" style="height: 8%;" @click="diminuirIndex()">
            <div class="w-2/3 h-2/3 bg-slate-300 rounded-xl flex justify-center flex-wrap content-around">
                <div v-for="(documento, index) in displayedDocumentos" :key="index">
                    <Documento class="cursor-pointer" :titulo="documento.titulo" :resumo="documento.descricao" :link="documento.link" ></Documento>
                </div>
            </div>
            <img src="../assets/right-arrow.png" class="cursor-pointer" style="height: 8%;" @click="aumentarIndex()">
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import BarraSuperior from '../components/BarraSuperior.vue';
import Documento from '../components/documento.vue';

const documentos = [
  {
    titulo: "1",
    descricao: "Aqui você encontra os melhores professores para te ajudar a se tornar um programador de sucesso!",
    link: "https://www.google.com"
  },
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
  
];

const menorIndex = ref(0);
const maiorIndex = ref(2);

const displayedDocumentos = computed(() => {
    return documentos.slice(menorIndex.value, maiorIndex.value + 1);
});

const aumentarIndex = () => {
    if (menorIndex.value + 3 <= documentos.length) {
        menorIndex.value += 3;
        maiorIndex.value += 3;
    }
};

const diminuirIndex = () => {
    if (menorIndex.value >= 3) {
        menorIndex.value -= 3;
        maiorIndex.value -= 3;
    }
};
</script>
