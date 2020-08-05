<template>
<div>
    <div class="container-fluid">
       <div class="jumbotron" id="searchbar">
         <div class="row" >
             <div class="col-sm-10">
              <select class="form-control" v-model="type">
                  <option value='Type1'>Type1</option>
                  <option value="Type2">Type2</option>
                  <option value="Type3">Type3</option>
                  <option value="Type4">Type4</option>
                  <option value="Type5">Type5</option>
                  <option value="Type6">Type6</option>
                  <option value="Type7">Type7</option>
                  <option value="Type8">Type8</option>


              </select>
             </div>
             <div class="col-sm-2">
               <button class="btn  btn-warning" type="submit" @click="searchProductType(type)">Search</button>
             </div>
         </div>
       </div>
        
    </div>
    <div class="container">        
       <div class="row">
           <div class="col-sm-3 offset-1"  v-for="product in allProducts" v-bind:key="product.id" :class="product.stock=='Out of stock'?'na':'a'" :id="product.stock=='New arrival'?'latest':''">
             <div class="card">
                 <img :src="product.img" height="250px;">
                 <h3 class="card-title">
                 {{product.name}}
                 </h3>
                 <h6 class="card-subtitle">{{product.type}}</h6>
                 <h4 class="card-text">{{product.rate}}</h4>
                 <h3 class="card-text" id="stock">{{product.stock}}</h3>
             </div>
           </div>
       </div>
    </div>
</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name:"ProductDisplay",   
    methods:{
        ...mapActions(['searchProductType']),
      
    },
    computed:mapGetters(['allProducts']) 
}
</script>
<style scoped>
.card{
    margin:20px;
    padding:20px;
    width:220px;
    box-shadow:0 0 8px 0 rgba(0,0,0,0.9);    
    background-color: rgb(248, 239, 226);
}
.card:hover{
    box-shadow:0 0 0 12px rgba(0,0,0,0.7);
}
.form-control{
    width:100%;
    margin-top:200px;
    box-shadow:0 0 20px 0 rgba(0,0,0,0.9);

}
#searchbar{
    background-image:url('../assets/wall.jpg');
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.9);
    background-size:cover;
    background-position: bottom;
    height:500px;
}
.btn{
    margin-top:200px;
    box-shadow:0 0 10px 0 rgba(0,0,0,0.9);
}
.na{
    opacity:0.4;
}
#latest{
    background-color: rgb(219, 203, 111);

}
</style>