<template>
    <main class="w-full bg-slate-200" style="min-height: 100%; height: auto;">
        <div>
            <BarraSuperior></BarraSuperior>
            <div style="height: 830px;" class="w-full bg-slate-200 flex justify-around items-center">
                <div class="flex justify-cente" v-for="contato in contatos" :key="contato">
                    <Contato class="flex items-center flex-col cursor-pointer" :img="contato.img" :nome="contato.nome" :link="contato.link"
                        :descricao="contato.descricao"></Contato>
                </div>
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
        descricao: "No nosso perfil do Instagram, posts e informações sobre contabilidade são postados diariamente."
    },
    {
        img: "https://seeklogo.com/images/T/twitter-x-logo-0339F999CF-seeklogo.com.png?v=638264860180000000",
        nome: "X",
        link: "https://www.twitter.com/easyaccouting",
        descricao: "Nosso perfil no Twitter mantém você atualizado com notícias contábeis de última hora."
    },
    {
        img: "https://i.pinimg.com/originals/af/f8/b7/aff8b7fc9b281f1a56a619955c285730.png",
        nome: "Youtube",
        link: "https://www.youtube.com/channel/UC9Jxk0Xc7QZBQXv9X1ZxX0A",
        descricao: "Nosso YouTube é uma coleção de recursos contábeis e financeiros que você pode acessar a qualquer momento."
    }
]

</script>