<template>
  <div>
    <Headers />
    <ProductDisplay />
    <Footer />
  </div>
</template>
<script>
import ProductDisplay from "./components/ProductDisplay";
import Headers from "./components/Headers";
import Footer from "./components/Footer";
export default {
  name:"App",
  components:{
    Headers,
    ProductDisplay,
    Footer
  }
}
</script>
<style>
body{
  background-color:rgb(224, 221, 221); 
}

</style>