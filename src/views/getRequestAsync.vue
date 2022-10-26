<template>
    <div>
        <h1>Une requete GET</h1>
        <p>total vu packages: {{totalVuePackages}}</p>
    </div>
</template>

<script>
export default{
    name: 'get-request',
    data(){
        return{
            totalVuePackages:null
        }
    },
    async created(){
        const response = await fetch('https://api.npms.io/v2/search?q=vue');
        const data = await response.json()
        this.totalVuePackages=data.total;
    }
}

</script>