<script lang="ts">
import db from '../firebase'
import { doc, getDoc, updateDoc, addDoc, collection}  from "firebase/firestore"

export default {
    methods: {
        async senddata() {

        if (!this.nom) {
            console.log("ERROR");
            var popup = document.getElementById("myPopup2");
            popup.classList.toggle("show");
        } else{

            // Add a new document with a generated id.
            const docRef = await addDoc(collection(db, "Feedback"), {
            name: this.nom,
            answer:this.reponse,
            comment: this.commentaire,
            projectid: this.$route.params.id,
            });
            console.log("Document written with ID: ", docRef.id);
            /*docRef.stopPropagation();*/
            // When the user clicks on <div>, open the popup
            var popup = document.getElementById("myPopup");
            popup.classList.toggle("show");
         }
       }
    },

    data(){
        return {
        nom: null,
        reponse: {a:null,b:null,c:null,d:null,e:null},
        commentaire: {a:null,b:null,c:null,d:null},
        }
    },

}   
</script>

<template>

  <form @submit.prevent>     
      <input name="nom" v-model = "nom" type="text" id ="identi" class="feedback-input" placeholder="enter your name" required />

      <div id = "question1" class = "questions">Qu'est-ce qui vous a poussé(e) à faire appel à nous ?</div>   
      <textarea name="text"  v-model = "reponse.a" class="feedback-input" placeholder="Answer" required></textarea>

      <div id = "question3" class = "questions">Etes-vous satisfait(e) de la communication ?</div>   
      <input type="radio" name="sat" value= "Très satisfait" v-model = "reponse.b" required> <label> Très satisfait(e)</label><br>  
      <input type="radio" name="sat1" value= "Satisfait" v-model = "reponse.b" required> <label> Satisfait(e)</label><br>
      <input type="radio" name="sat2" value= "Moyennement satisfait" v-model = "reponse.b" required > <label> Moyennement satisfait(e)</label><br>  
      <input type="radio" name="sat3" value= "Pas Satisfait" v-model = "reponse.b" required > <label> Pas Satisfait(e)</label><br>
      <input type="radio" name="sat3" value= "Pas du tout Satisfait" v-model = "reponse.b" required > <label> Pas du tout Satisfait(e)</label><br><br>
      <textarea name="text"  v-model = "commentaire.a" class="feedback-input" placeholder="Comment"></textarea>

      <div id = "question4" class = "questions">Etes-vous satisfait(e) du résultat de notre collaboration ?</div>   
      <!-- <input name="quest?" v-model = "reponse.a" type="text" class="feedback-input" placeholder="Answer" required /> -->
      <input type="radio" name="sat4" value= "Très satisfait" v-model = "reponse.c" required> <label> Très satisfait(e)</label><br>  
      <input type="radio" name="sat5" value= "Satisfait" v-model = "reponse.c" required> <label> Satisfait(e)</label><br>
      <input type="radio" name="sat5" value= "Moyennement satisfait" v-model = "reponse.c" required > <label> Moyennement satisfait(e)</label><br>  
      <input type="radio" name="sat6" value= "Pas Satisfait" v-model = "reponse.c" required> <label> Pas Satisfait(e)</label><br>
      <input type="radio" name="sat3" value= "Pas du tout Satisfait" v-model = "reponse.c" required > <label> Pas du tout Satisfait(e)</label><br><br> 
      <textarea name="text"  v-model = "commentaire.b" class="feedback-input" placeholder="Comment"></textarea>

      <div id = "question5" class = "questions">Etes-vous satisfait(e) du support apporté par notre équipe ?</div>   
      <input type="radio" name="sat7" value= "Très satisfait" v-model = "reponse.d" required> <label> Très satisfait(e)</label><br>  
      <input type="radio" name="sat8" value= "Satisfait" v-model = "reponse.d" required> <label> Satisfait(e)</label><br>
      <input type="radio" name="sat9" value= "Moyennement satisfait" v-model = "reponse.d" required> <label> Moyennement satisfait(e)</label><br>  
      <input type="radio" name="sat10" value= "Pas Satisfait" v-model = "reponse.d" required> <label> Pas Satisfait(e)</label><br>
      <input type="radio" name="sat3" value= "Pas du tout Satisfait" v-model = "reponse.d" required > <label> Pas du tout Satisfait(e)</label><br><br>
      <textarea name="text"  v-model = "commentaire.c" class="feedback-input" placeholder="Comment"></textarea>

      <div id = "question2" class = "questions">Seriez-vous prêt(e) à refaire appel à nous ?</div>   
      <input type="radio" name="oui" value="Oui" v-model = "reponse.e" required> <label> Oui</label><br>  
      <input type="radio" name="non" value="Non" v-model = "reponse.e" required> <label> Non</label><br><br> 
      <textarea name="text"  v-model = "commentaire.d" class="feedback-input" placeholder="Comment"></textarea>

    <!-- <input  @click="senddata" type="submit" value="SUBMIT"/>  -->
      <button @click="senddata" class="popup" type="submit">SUBMIT
        <span class="popuptext" id="myPopup">Merci pour votre retour</span>
        <span class="popuptext" id="myPopup2">Veuillez répondre a toutes les questions.</span>
    </button>
    
  </form>

</template>

<style scoped>

/************ Formulaire **************/

form { 
    max-width:420px;
    margin:50px auto;
    background-image: linear-gradient(to right, white , #fff);
}

#identi{
  margin-top: 75px;
  margin-bottom: 15px;
}


.questions{
  color:#172063;
  font-family: Helvetica, Arial, sans-serif;
  font-weight:500;
  font-size: 18px;
  border-radius: 5px;
  line-height: 22px;
  border:2px solid transparent;
  transition: all 0.3s;
  margin-bottom: 15px;
  width:100%;
  box-sizing: border-box;
  outline:0;
  text-align: center;
}


.feedback-input {
  color:#fff;
  font-family: Helvetica, Arial, sans-serif;
  font-weight:500;
  font-size: 18px;
  border-radius: 5px;
  line-height: 22px;
  background: #172063;
  border:2px solid transparent;
  transition: all 0.3s;
  padding: 15px;
  margin-bottom: 15px;
  width:100%;
  box-sizing: border-box;
  outline:0;
}

.feedback-input:focus { 
    border:2px solid transparent;
}

label{
    color: #172063;
}

textarea {
  height: 150px;
  line-height: 150%;
  resize:vertical;
}

[type="submit"] {
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  width: 100%;
  background: #dd0069;
  border-radius:5px;
  border:0;
  color:white;
  font-size:24px;
  padding-top:10px;
  padding-bottom:10px;
  transition: all 0.3s;
  margin-top:-4px;
  font-weight:700;
}


/************ Pop-up **************/

.popup {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.popup .popuptext {
  visibility: hidden;
  width: 160px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 8px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -80px;
}

.popup .popuptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.popup .show {
  visibility: visible;
  -webkit-animation: fadeIn 1s;
  animation: fadeIn 1s
}


@-webkit-keyframes fadeIn {
  from {opacity: 0;}
  to {opacity: 1;}
}

@keyframes fadeIn {
  from {opacity: 0;}
  to {opacity:1 ;}
}
</style>