<script>

    export default {
        name: 'SingleCard',
        props: {
            portfolioInfo: Object,
        },

        methods: {
            textCut(summary) {
                if(summary.length > 100) {
                    return summary.substr(0, 99) + '...';
                } 
                
                return summary
            
            }
        }
    }

</script>

<template>
    <div class="col-4">
        <div  class="card my-3">
            <div class="card-body">
                <h5 class="card-title">{{ portfolioInfo.name }}</h5>
                <div class="my-2" v-if="portfolioInfo.technologies.length > 0" >
                    <strong>Technologies:</strong> <span v-for="technology in portfolioInfo.technologies">{{ technology.name }} &nbsp;</span> 
                </div>
                <div class="my-2" v-if="portfolioInfo.type" >
                    <strong>Types:</strong> {{ portfolioInfo.type.name }}
                </div>
                <p class="card-text">{{ textCut(portfolioInfo.summary) }}</p>
                <router-link :to="{ name: 'single-portfolio', params: { slug: portfolioInfo.slug } }"  class="btn btn-primary">Scopri di più</router-link>
            </div>
        </div>
    </div>
</template>