<script>
import db from '../firebase'
import { doc, collection, getDocs, query, where }  from "firebase/firestore"

export default {
  data(){
    return {
       projects:[],
    }
  },
  async mounted() {
      const querySnapshot = await getDocs(collection(db, "projects"));
      querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
         console.log(doc.id, doc.data());
         this.projects.push(doc.data())
         
    }); 
  }
}
</script>

<template>
<div class = "tab">

<div v-bind:class="projects.statut ? 'statut_true': 'statut_false'">
<div v-for="project in projects" class = "line_up">
<p> Nom du projet: {{ project.name }}</p>
</div>

<div v-for="project in projects" class = "line_up">
<p> Description: {{ project.description }}</p>
</div>

<div v-for="project in projects" class = "line_up">
<p> statut: {{ project.statut }}</p>
</div>

<div v-for="project in projects" class = "line_up">
<p> retour du projet: {{ project.feedbacks }}</p>
</div>

<ul>
  <li v-for="project in projects">
   Développeur: {{ project.developers }}
  </li>
</ul>

</div>
</div>
</template>

<style scoped>
/*
body{
   background: linear-gradient(to right, white, #6EC8F2);
}
*/
.statut_true{
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, hsla(160, 100%, 37%, 1), black);
  border-radius: 50px;
  border: 4mm ridge rgba(211, 220, 50, .6);
  box-shadow: 5px 10px 8px 10px #888888;
}

.statut_false{
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #E10D0D, black);
  border-radius: 50px;
  border: 4mm ridge rgba(211, 220, 50, .6);
  box-shadow: 5px 10px 8px 10px #888888;
}

.line_up{
 box-sizing: border-box;

}

.line_up p{
  width: 100%;
  height: 100%;
  line-height: 1.6;
  padding-top: 5%;
  box-sizing: border-box;
  text-align: center;
  color: white;
}

ul{
  padding-left: 40%;
  padding-top: 5%;
}

 li{
  box-sizing: border-box;
  color: white;
}
</style>