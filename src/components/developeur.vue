<script lang="ts">
import db from '../firebase'
import { doc, getDoc}  from "firebase/firestore"

export default {
     props: ['devid'],
     data(){
    return {
       dev:null,
    }
  },
  async mounted() {
      const docRef = doc(db, "developers", this.devid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
         console.log("Document data:", docSnap.data());
        this.dev = docSnap.data()
         } 
    else {
    console.log("No such document!");
    }
  }
}
</script>


<template>

<div class="card-group" v-if = "this.dev">
<div class="card box">
    <img :src="`/${this.devid}.png`" class="card-img-top" height="200" style="max-width: 23rem;" >
    <div class="card-body cols-md-2 g-4">
      <h5 class="card-title text-center top">{{this.dev.name}}</h5>
      <p class="card-title text-center">{{this.dev.description}}</p>
    </div>
  </div>
</div>



</template>


<style scoped>
.top{
    background-color: #fff;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    box-shadow: 0.8rem 0 0 #fff, -0.8rem 0 0 #fff;
    color: #002364;
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
    padding: 0 0 0.2rem;
    position: relative;
}

.box{
background-color: #172063 !important;
}

</style>