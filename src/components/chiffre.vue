<script lang="ts">
import db from '../firebase'
import { collection, query, where, getDocs } from "firebase/firestore";

export default {
    data(){
    return {
       feedback:[],
       satisfaction1: null,
       satisfaction2: null,
       satisfaction3: null,
       satisfaction4: null,
       satisfaction5: null,
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

      // Filtrer la liste des feedback avec un answer.b à true
      console.log(this.feedback)
      const nombreSatisfaction2 = this.feedback.filter(f => {
          return ["Pas du tout Satisfait","Pas Satisfait", "Moyennement satisfait"].indexOf(f.answer.b) != -1
      }).length
      const nombreSatisfaction3 = this.feedback.filter(f => f.answer.c === "Satisfait").length
      const nombreSatisfaction4 = this.feedback.filter(f => f.answer.d === "Satisfait").length
      const nombreSatisfaction5 = this.feedback.filter(f => f.answer.e === "Oui").length

      
      // Calcul du % de satisfaction, en utilisant this.nombreSatisfaction et this.feedback.length
      this.satisfaction2 = nombreSatisfaction2/this.feedback.length *100
      this.satisfaction3 = nombreSatisfaction3/this.feedback.length *100
      this.satisfaction4 = nombreSatisfaction4/this.feedback.length *100
      this.satisfaction5 = nombreSatisfaction5/this.feedback.length *100
      console.log(this.satisfaction3)
  }
} 
</script>

<template>
    <div class ="col-sm-4 nbrrep "><h1>{{this.feedback.length}}</h1> personnes ont répondu</div>
    <div class ="col-sm-4 nbrrep "><h1>{{satisfaction2}}%</h1> personnes sont satisfaite de la communication</div>
    <div class ="col-sm-4 nbrrep "><h1>{{satisfaction3}}%</h1> personnes sont satisfaite du résultat</div>
    <div class ="col-sm-4 nbrrep "><h1>{{satisfaction4}}%</h1> personnes sont satisfaites du support apporté par WEB-BU</div>
    <div class ="col-sm-4 nbrrep "><h1>{{satisfaction5}}%</h1> personnes veulent refaire appel a la WEB-BU</div>
</template>