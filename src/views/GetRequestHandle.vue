<template>
    <div>
        <h1>Une requete GET</h1>
        <p>total vu packages: {{totalVuePackages}}</p>
        <p>message d'erreur: {{errorMessage}}</p>
    </div>
</template>

<script>
export default{
    name: 'get-request',
    data(){
        return{
            totalVuePackages:null,
            errorMessage: null
        }
    },
    created(){
        fetch('https://api.npms.io/')
        .then(async response =>{
            const data = await response.json();
            // on check si erreur
            if(!response.ok){
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
            this.totalVuePackages = data.total;
        })
        .catch(error=>{
            this.errorMessage = error;
            console.error('Alerte y\'a une couille dans le paté', error)
        })
    }
}

</script>