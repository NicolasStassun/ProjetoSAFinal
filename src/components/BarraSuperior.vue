<template>
    <div class="w-full flex bg-sky-700" style="height: 100px;border-bottom: 3px solid black;">
        <div class=" w-1/12 h-full flex justify-center items-center text-4xl">
            <img src="../assets/logo.svg" style="height: 80%; width: 80%;" href="/">
        </div>
        <div class="w-2/12 flex items-center text-2xl">
            <h1 href="/">Easy Accouting</h1>
        </div>
            <nav class="w-8/12 flex items-center justify-evenly">
                <RouterLink to="/">HOME</RouterLink>
                <RouterLink to="/docs">DOCUMENTOS</RouterLink>
                <RouterLink to="/servicos">SERVIÇOS</RouterLink>
                <RouterLink to="/ajuda">AJUDA</RouterLink>
            </nav>
    </div>
</template>
<script setup>
</script>
