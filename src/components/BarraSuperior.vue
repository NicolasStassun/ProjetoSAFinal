<template>
    <div class="w-screen flex" style="background-color: #758173; height: 12%;border-bottom: 3px solid black;">
        <div class=" w-1/12 h-full flex justify-center items-center text-4xl">
            <img src="../assets/logo.svg" style="height: 80%; width: 80%;" href="/">
        </div>
        <div class="w-1/12 flex items-center text-2xl">
            <h1 href="/">Easy Accouting</h1>
        </div>
            <nav class="w-9/12 flex items-center justify-evenly">
                <RouterLink to="/">HOME</RouterLink>
                <RouterLink to="/docs">DOCUMENTOS</RouterLink>
                <RouterLink to="/servicos">SERVIÇOS</RouterLink>
                <RouterLink to="/ajuda">AJUDA</RouterLink>
            </nav>
    </div>
</template>
<script setup>
</script>
