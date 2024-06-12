<script>

    export default {
        name: 'SinglePortfolio',
        props: {
            portfolioInfo: Object,
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
                <p class="card-text">{{ portfolioInfo.summary }}</p>
                <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
            </div>
        </div>
    </div>
</template>