<template>
    <div class="bg-slate-200">
      <BarraSuperior class="mb-16"></BarraSuperior>
      <div class="flex flex-col bg-slate-200" style="height: 862px;">
          <div class="flex justify-center  bg-slate-200" style="height: auto; min-height: 862px;">
              <div class="w-full flex flex-col bg-slate-200" style="height: auto; min-height: 66.66%; max-height: auto;">
                  <div class="flex justify-center bg-slate-200" v-for="documento in documentos" :key="documento">
                      <Documento class="cursor-pointer" :titulo="documento.titulo" :resumo="documento.descricao" :link="documento.link"></Documento>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </template>
  
  <script setup>
  
  import BarraSuperior from '../components/BarraSuperior.vue';
  import Documento from '../components/Documento.vue';
  
  const documentos = [
    {
      titulo: "Lei. 14133",
      link: "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14133.htm"
    }
  ];
  
  
  </script>
  