<template>
    <div style="height: 300px; width: 250px;" class="bg-slate-500" @click="redireciona(link)">
        <img style="height: 175px;width: 175px;" :src="img">
        <h1>{{ nome }}</h1>
    </div>
</template>
<script setup>
    const props = defineProps({
        img: String,
        nome: String,
        link: String
    })
    function redireciona(link){
        window.open(link)
    };
</script>