<script lang="ts">
import Disposition from "./Disposition.vue"
import border from "./bordercool.vue"
import db from '../firebase'
import { doc, collection, getDocs, getDoc, query, where }  from "firebase/firestore"

export default {
  computed: {
    id() {
      return this.$route.params.id
    },
  },
  
  data(){
    return {
       projects:[],
    }
  },
  async mounted() {
      const docRef = doc(db, "projects", this.$route.params.id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        this.projects.push(docSnap.data())
      } 
    else {
    console.log("No such document!");
    }
  },
}
</script>

<template>
  <Disposition 
    v-for="project of projects" 
    :name="project.name"
    :description="project.description"
    :statut="project.statut"
    :developers="project.developers" 
    :feedbacks="project.feedbacks"
    :question="project.question"
    :id = "this.$route.params.id">
  </Disposition>
</template>