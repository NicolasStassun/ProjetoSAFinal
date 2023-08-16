<template>
    <div style="height: max-content; min-height: 480px; width: 450px;" class="bg-slate-200 rounded-xl drop-shadow-xl shadow-xl" @click="redireciona(link)">
        <img style="height: 175px;width: 175px;" class="mb-8 mt-8" :src="img">
        <h1>{{ nome }}</h1>
        <div class="flex items-center justify-center">
            <p class="pb-2 pt-2 pl-2 pr-2">{{ descricao }}</p>
        </div>
        
    </div>
</template>
<script setup>
    const props = defineProps({
        img: String,
        nome: String,
        link: String,
        descricao: String
    })
    function redireciona(link){
        window.open(link)
    };
</script>