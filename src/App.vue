<template>
<div>
    <AppHeader />
    <Contador />
    <ContadorInfo />
</div>
</template>

<script>
import AppHeader from "./components/shared/AppHeader.vue";
import Contador from "./components/contador/Contador.vue";
import ContadorInfo from "./components/contador/ContadorInfo.vue";

export default {
    components: {
        AppHeader,
        Contador,
        ContadorInfo,
    },
};
</script>
