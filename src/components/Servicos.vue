<template>
    <div class="w-5/6 flex h-[300px] drop-shadow-2xl hover:underline hover:decoration-1 hover:decoration-black/50" @click="redireciona(link)">
        <img :src="imagem" style="height: 300px; width: 400px;" class="mb-16 rounded-md">
        <div class="w-8/12 flex flex-col ml-8">
            <h1 class="text-4xl">
                {{ titulo }}
            </h1>
            <p class="text-lg text-justify">
                {{ descricao }}
            </p>
        </div>
    </div>
</template>
<script setup>
    const props = defineProps({
        titulo: String,
        imagem: String,
        descricao: String
    });
    function redireciona(link){
        window.open(link)
    };
</script>
<style scoped>
</style>