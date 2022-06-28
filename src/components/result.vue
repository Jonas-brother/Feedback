<script lang="ts">
import db from '../firebase'
import dispore from "./disporesult.vue"
import chiffre from "./chiffre.vue"
import { collection, query, where, getDocs } from "firebase/firestore";

export default {
    data(){
    return {
       feedback:[],
       satisfaction: null,
    }
  },
  
  async mounted() {
      const q = query(collection(db, "Feedback"), where("projectid", "==", this.$route.params.id));

      const querySnapshot = await getDocs(q);
      console.log(this.$route.params.id, querySnapshot)
      console.log(querySnapshot.length)
      
      // On récupère tout les feedback
      querySnapshot.forEach((doc) => {
      this.feedback.push(doc.data())
      });
      
  }
} 
</script>

<template>

<div id ="boite" class ="container">
  <h2 class ="moyenne">En moyenne</h2>
  <div id = "inner-border2">
      <div class = "row list-inline">
        <chiffre/>
      </div>
  </div>
<br>
  
  <div class ="row">
    <dispore class ="list-inline cus col-5 justify-content-center" v-for="feed of feedback" 
      :name="feed.name"
      :answer="feed.answer"
      :comment="feed.comment">
    </dispore>
  </div>
</div>

</template>