<template>
    <div style="height: 130px; width: 100px;" id="hoverBrabo" class="bg-slate-50 flex justify-center items-center rounded-xl drop-shadow-xl">
        <RouterLink :to="link">
            <div class="flex items-center flex-col">
                <img style="height: 80px; width: 80px;" :src="icon">
                <h1>{{ titulo }}</h1>
            </div>
        </RouterLink>
    </div>
</template>
<script setup>
const props = defineProps({
        link: String,
        icon: String,
        titulo: String
})
</script>
<style scoped>
    #hoverBrabo:hover{
        box-shadow: inset 0px 0px 0px 2px #334155;
    }
</style>