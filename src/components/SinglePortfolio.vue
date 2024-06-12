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
                <p class="card-text">{{ portfolioInfo.summary }}</p>
                <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
            </div>
        </div>
    </div>
</template>