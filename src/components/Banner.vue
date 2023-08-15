<template>
    <div class="w-full bg-slate-400" style="height: 300px;">
        <img style="height: 300px; width: 100%;" :src="src">
    </div>
</template>
<script setup>
const props = defineProps({
    src: {
        type: String,
        default: 'https://yata-apix-e20309a1-cff6-4150-bd8e-120941673ba7.s3-object.locaweb.com.br/16c405c2118749679315f5e8d5daaf49.jpg'
    }
})
</script>
