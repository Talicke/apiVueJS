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
    created(){
            const headers = {"Content-Type": "application/json"};
            fetch('https://api.npms.io/v2/search?q=vue')
            .then(response=> response.json())
            .then(data=>(this.totalVuePackages=data.total))
        }
}

</script>