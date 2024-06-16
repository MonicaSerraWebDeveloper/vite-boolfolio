<script>

    import PortfolioCard from './components/PortfolioCard.vue';
    import AppHeader from './components/AppHeader.vue';

    export default {
        components: {
            PortfolioCard,
            AppHeader
        }
    }

</script>

<template>

    <AppHeader></AppHeader>
    <router-view></router-view>

</template>

<style lang="scss">

    @use './style/generic';

</style>