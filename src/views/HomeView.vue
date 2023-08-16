<script setup>
import BarraSuperior from '../components/BarraSuperior.vue';
import Topicos from '../components/Topicos.vue';

const topicos = [
  {
    titulo: "Contabilidade especializada",
    img: "https://img.imageboss.me/revista-cdn/cdn/40781/5ff7339060daf98ecfa149e9f7f21c169ad4f7ae.jpg?1657835245",
    descricao: "Aqui você encontra os melhores professores para te ajudar a se tornar um programador de sucesso!"
  },
  {
    titulo: "Consultoria Especializada",
    img: "https://avozdaindustria.com.br/sites/avozdaindustria.com/files/styles/article_featured_standard/public/Contabilidade%20para%20indstrias_principais%20pontos%20de%20ateno.png?itok=dO9FYB2o",
    descricao: "Aprenda a programar com a gente! Aqui você encontra os melhores cursos e professores para te ajudar a se tornar um programador de sucesso!"
  },
  {
    titulo: "BPO Financeiro Especializado",
    img: "https://www.pontotel.com.br/wp-content/uploads/2023/01/contabilidade-digital.png",
    descricao: "Henrique, Davi e Stassun"
  }
];
function redireciona(link){
  window.location.href = link;
}

</script>

<template>
  <main class="w-full bg-slate-200" style="min-height: 100%; height: auto;">
    <BarraSuperior />
    <div class="w-full flex" style="height: 920px;">
      <div class="flex flex-col w-1/2 justify-center text-justify items-center">
        <h1 class="text-4xl mb-8 font-bold">Easy Accouting</h1>
        <div style="height: auto; width: 550px;" class="flex flex-col items-center">
          <p class="text-xl mb-8">
            Bem-vindo ao Easy Accounting: sua solução descomplicada para todas as suas necessidades contábeis!
            Nosso site é dedicado a fornecer serviços de consultoria contábil de alta qualidade, projetados para
            simplificar
            e otimizar suas operações financeiras. Seja você um empreendedor individual, proprietário de uma pequena
            empresa ou parte de uma grande corporação,
            estamos aqui para ajudar a aliviar o fardo da complexidade contábil.
          </p>
          <RouterLink class="bg-sky-700 rounded-3xl items-center flex justify-center hover:bg-sky-600" style="width: 450px; height: 40px" to="/servicos">Veja nossos serviços</RouterLink>
        </div>
      </div>
      <div class="w-1/2">
        <img src="../assets/HomeContavel.svg" style="height: 100%; width: 100%;">
      </div>

    </div>

    <div class="flex justify-evenly mt-16">
      <div v-for="(item, index) in topicos" :key="item">
        <div v-if="index <= 3">
          <Topicos :titulo="item.titulo" :img="item.img" :descricao="item.descricao" />
        </div>
      </div>
    </div>

  </main>
</template>
