<script>
    import axios from 'axios';
    import SingleCard from '../components/SingleCard.vue';

    export default {
        name: 'PortfolioCard',
        components: {
            SingleCard,
        },

        data() {
            return {
                portfolios: [] 
            }
        },

        methods: {
            getPortfolio() {
                axios.get('http://127.0.0.1:8000/api/portfolio')
                .then((response) => {
                    this.portfolios = response.data.results 
                });
            }
        },

        mounted() {
            this.getPortfolio();
        }
    }

</script>

<template>
    <div class="container">
        <h2>Portfolio</h2>
    </div>
    <div class="container d-flex flex-wrap gap-3">
        <div class="row">
            <SingleCard v-for="portfolio in portfolios" :portfolioInfo="portfolio" :key="portfolio.id"></SingleCard>
        </div>
    </div>
    

</template>

<style scoped lang="scss">

</style>
