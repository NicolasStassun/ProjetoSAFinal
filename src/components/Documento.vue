<template>
    <div style="width: 900px;" class="bg-slate-400 h-16 rounded-xl flex items-center hover:bg-white hover:border-sky-300 hover:border-2" @click="redireciona(link)">
        <h1 class="text-xl ml-8 cursor-pointer">{{ titulo }}</h1>
        <div class="flex justify-between w-full items-center">
            <p class="ml-8">{{resumo}}</p>
        </div>
    </div>
</template>
<script setup>
    const props = defineProps({
        titulo: String,
        resumo: String,
        link: String
    })
    function redireciona(link){
        window.open(link)
    };
</script>