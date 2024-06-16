<script>
    import axios from 'axios';

    export default {
        name: 'SinglePortfolio',
        data() {
            return {
                portfolio: null
            }
        },
        methods: {

            getSinglePortfolio() {
                axios.get(`http://127.0.0.1:8000/api/portfolio/${this.$route.params.slug}`)
                .then((response) => {
                    this.portfolio = response.data.portfolio 
                });
            }
        },

        mounted() {
            this.getSinglePortfolio();
        }
    }

</script>

<template>

    <div class="container">
        <div v-if="portfolio">
            <h2>{{ portfolio.name }}</h2>
            <div v-if="portfolio.cover_image">
                <img :src="`http://127.0.0.1:8000/storage/{portfolio.cover_image}`" alt="">
            </div>
            <p v-if="portfolio.summary">{{ portfolio.summary }}</p>
        </div>
    </div>
</template>