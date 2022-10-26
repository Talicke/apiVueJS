<template>
    <div>
        <h1>Une requete post</h1>
        <p>l'Id : {{postid}}</p>
    </div>
</template>

<script>
export default{
    name: 'post-request',
    data(){
        return{
            postid:null
        }
    },
    created(){
        const requestOptions = {
            method:'POST',
            headers:{'Content-Type':"application/json"},
            body: JSON.stringify({title:'Vue Post request Exemple'})
        };
        fetch('https://jsonplaceholder.typecode.com/posts', requestOptions)
        .then(response=>response.json())
        .then(data=>(this.postid = data.id))
    }
}
</script>