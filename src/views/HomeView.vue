<script setup>
import BarraSuperior from '../components/BarraSuperior.vue';
import Banner from '../components/Banner.vue';
import Topicos from '../components/Topicos.vue';

const topicos = [
{
  titulo: "Contabilidade",
  img: "https://img.imageboss.me/revista-cdn/cdn/40781/5ff7339060daf98ecfa149e9f7f21c169ad4f7ae.jpg?1657835245",
  descricao: "Aqui você encontra os melhores professores para te ajudar a se tornar um programador de sucesso!"
},
{
  titulo: "Contas",
  img: "https://avozdaindustria.com.br/sites/avozdaindustria.com/files/styles/article_featured_standard/public/Contabilidade%20para%20indstrias_principais%20pontos%20de%20ateno.png?itok=dO9FYB2o",
  descricao: "Aprenda a programar com a gente! Aqui você encontra os melhores cursos e professores para te ajudar a se tornar um programador de sucesso!"
},
{
  titulo: "Gerenciamento",
  img: "https://www.pontotel.com.br/wp-content/uploads/2023/01/contabilidade-digital.png",
  descricao: "Aqui você encontra os melhores professores para te ajudar a se tornar um programador de sucesso!"
}
];

</script>

<template>
  <main class="w-screen h-screen" style="background-color: #EEF4D4;">
      <BarraSuperior/>
      <Banner/>
      <div class="flex justify-evenly">
        <div v-for="(item, index) in topicos" :key="item">
          <div v-if="index <= 3">
            <Topicos :titulo="item.titulo" :img="item.img" :descricao="item.descricao"/>
         </div>
      </div>
    </div>
    
  </main>
</template>
