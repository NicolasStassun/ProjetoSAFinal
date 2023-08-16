<template>
    <div class="mt-8 mb-8">
        <div style="width: 900px; max-height: auto;" id="hoverBrabo" class="bg-slate-400 h-16 rounded-xl flex items-center shadow-xl hover:bg-[#f7f7f7] hover:border hover:border-2" @click="redireciona(link)">
        <h1 class="text-xl ml-8 cursor-pointer">{{ titulo }}</h1>
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
<style scoped>
    #hoverBrabo:hover{
        box-shadow: inset 0px 0px 0px 2px #007dfe;
    }
</style>