<template>
    <div style="width: 900px;" class="bg-slate-400 h-16 rounded-xl flex items-center">
        <h1 class="text-xl ml-8">{{ titulo }}</h1>
        <div class="flex justify-between w-full items-center">
            <p class="ml-8">{{resumo}}</p>
            <img src="../assets/component1.svg" :href="link">
        </div>
    </div>
</template>
<script setup>
    const props = defineProps({
        titulo: String,
        resumo: String,
        link: String
    })
</script>