<template>
    <main class="w-full bg-slate-200" style="min-height: 100%; height: auto;">
        <BarraSuperior></BarraSuperior>
        <div style="height: 830px;" class="w-full bg-slate-200 flex justify-around items-center">
            <div class="flex justify-cente" v-for="contato in contatos" :key="contato">
                  <Contato class="flex items-center flex-col" :img="contato.img" :nome="contato.nome" :link="contato.link" :descricao="contato.descricao"></Contato>
            </div>
        </div>
    </main>
    
    
</template>
<script setup>
import BarraSuperior from '../components/BarraSuperior.vue';
import Contato from '../components/Contato.vue';

const contatos = [
    {
        img: "https://img.freepik.com/icones-gratis/instagram_318-577012.jpg",
        nome: "Instagram",
        link: "https://www.instagram.com/easyaccouting",
        descricao: "No nosso perfil do Instagram, oferecemos uma abordagem única para a contabilidade, combinando conteúdo informativo com uma pitada de criatividade visual. Compartilhamos infográficos intuitivos, citações inspiradoras relacionadas a finanças, e bastidores da nossa equipe. Seguir nosso perfil no Instagram é uma maneira divertida de aprender sobre contabilidade e ficar conectado com o Easy Accounting."
    },
    {
        img: "https://seeklogo.com/images/T/twitter-x-logo-0339F999CF-seeklogo.com.png?v=638264860180000000",
        nome: "X",
        link: "https://www.twitter.com/easyaccouting",
        descricao: "Em um mundo onde as mudanças acontecem rapidamente, o nosso perfil no Twitter mantém você atualizado com notícias contábeis de última hora, atualizações fiscais e mudanças nas regulamentações. Com mensagens concisas e links diretos para artigos e recursos, nosso Twitter é o seu parceiro para informações contábeis instantâneas e oportunas."
    },
    {
        img: "https://i.pinimg.com/originals/af/f8/b7/aff8b7fc9b281f1a56a619955c285730.png",
        nome: "Youtube",
        link: "https://www.youtube.com/channel/UC9Jxk0Xc7QZBQXv9X1ZxX0A",
        descricao: "Nossa biblioteca de vídeos no YouTube é uma coleção de recursos contábeis e financeiros que você pode acessar a qualquer momento. De tutoriais de software a dicas de contabilidade, você encontrará uma variedade de vídeos para ajudá-lo a gerenciar suas finanças com mais eficiência."
    }
]

</script>