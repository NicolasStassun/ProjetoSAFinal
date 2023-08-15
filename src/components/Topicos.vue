<template>
    <h1 class="text-2xl font-bold" style="height:auto; width: 400px;max-height: 300px;">{{ props.titulo }}</h1>
    <img :src="img" style="height: 300px; width: 400px;">
    <p style="height:auto; width: 400px;max-height: 300px;">{{ props.descricao }}</p>
</template>
<script setup>
const props = defineProps({
    titulo: String,
    img: String,
    descricao: String
})
</script>
