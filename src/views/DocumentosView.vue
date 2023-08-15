<script setup>
import BarraSuperior from '../components/BarraSuperior.vue';
import Documentos from '../components/Documento.vue';

const documentos = [
{
  titulo: "Contabilidade",
  descricao: "Aqui você encontra os melhores professores para te ajudar a se tornar um programador de sucesso!",
  link: "https://www.google.com"
},
{
  titulo: "Contas",
  descricao: "Aprenda a programar com a gente! Aqui você encontra os melhores cursos e professores para te ajudar a se tornar um programador de sucesso!",
  link: "https://www.google.com"
}
];

</script>
<template>
    <div class="w-screen h-screen" style="background-color: #EEF4D4;">
        <BarraSuperior></BarraSuperior>
        <div class="flex items-center justify-center" style="height: 88%;">
            <div class="w-2/3 h-2/3 bg-slate-300 rounded-xl flex justify-center flex-wrap content-around">
                <div v-for="documento in documentos">
                    <Documentos :titulo="documento.titulo" :resumo="documento.descricao" :link="documento.link"></Documentos>
                </div>                
            </div>
        </div>
    </div>

</template>
