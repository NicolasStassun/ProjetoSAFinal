<template>
    <div class="w-full flex drop-shadow-2xl"
        style="height: 100px; background-color: #007dfe;">
        <RouterLink to="/" class="flex w-3/12">
            <div class=" w-1/2 flex justify-center items-center text-4xl " style="height: 97px;">
                <img src="../assets/logo.svg" style="height: 80%; width: 80%;" href="/">
            </div>
            <div class="w-1/2 flex items-center text-2xl" style="height: 97px;">
                <h1 href="/" class="text-white font-bold">Easy Accouting</h1>
            </div>
        </RouterLink>
        <nav class="w-8/12 flex items-center justify-evenly" style="height: 97px;">
            <RouterLink to="/">
                <p class="text-white font-semibold">HOME</p>
            </RouterLink>
            <RouterLink to="/docs">
                <p class="text-white font-semibold">TÓPICOS</p>
            </RouterLink>
            <RouterLink to="/servicos">
                <p class="text-white font-semibold">SERVIÇOS</p>
            </RouterLink>
            <RouterLink to="/ajuda">
                <p class="text-white font-semibold">CONTATO</p>
            </RouterLink>
    </nav>
</div></template>
<script setup>
import { RouterLink } from 'vue-router';

</script>
