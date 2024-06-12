<script>
    import axios from 'axios';

    export default {
        name: 'PortfolioCard',
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
            <div v-for="portfolio in portfolios" class="col-4">
                <div  class="card my-3">
                    <div class="card-body">
                        <h5 class="card-title">{{ portfolio.name }}</h5>
                        <p class="card-text">{{ portfolio.summary }}</p>
                        <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    

</template>

<style scoped lang="scss">

</style>
