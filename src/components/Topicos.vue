<template>
    <div class="mb-16">
        <img :src="img" style="height: 300px; width: 400px;" class="mb-4 rounded-md shadow-2xl">
        <div class="p-1 flex flex-col" style="height: 150px;">
            <h1 class="text-2xl font-bold mb-4" style="width: 350px;max-height: 250px;">{{ props.titulo }}</h1>
            <p style="width: 350px;max-height: 250px;">{{ props.descricao }}</p>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    titulo: String,
    img: String,
    descricao: String
})

</script>
