<script>
import Developeur from "./developeur.vue"
import border from "./bordercool.vue"
export default {
  props: ['name', 'description', 'statut', 'developers', 'feedbacks', 'question', 'id'],

  methods: {
    moveform() {
      this.$router.push(`/projects/${this.id}/form`)
    },

    moveretour() {
      this.$router.push(`/projects/${this.id}/feedback`)
    }
  },

}
</script>

<template>

    <div id ="descri" class = "col-sm">
      <div class ="container">
        <div class="col"></div>

        <div id ="nomprojet">
          <span> Vous avez travaillé sur le projet</span> <span id = "nomprojet2" v-bind:class= "statut ? 'statut_true': 'statut_false'">{{name}}</span>
        </div>

        <div class="col"></div>

        <div class = "row custom">
          <div id ="descriptionprojet" >
            {{description}}
          </div>
        </div>
      </div>
    </div>
    

      <div id = "devpart">
        <div id ="" class = "container">
          <div class = "col-sm custom">
            <div id= "work_with" class = "row text-center">
              <div>Vous avez travaillé avec:</div>
            </div>
          </div>


          <div class = "row custom col-sm">
            <div id = "devprojet"  class = "d-flex justify-content-around">
              <Developeur v-for="dev of developers"
                  :devid ="dev">
              </Developeur> 
            </div>
          </div>
        </div>
      </div>

      <div class = "row part2">
        <div class = "col-sm-6">
          <img id ="img-ty" class="img-fluid" src = "../components/icons/feed.jpg">
        </div>

          <div class = "row col-sm-6">
            <div class ="text-center thanks">Merci d'évaluer la prestation de notre équipe</div>
            <p class ="text-center">Recevoir vos retours est très importants pour nous.</p>
          </div>

          <div class = "text-center">
            <button  @click="moveform" class = "btn btn-primary " type ="submit">Donner votre retour</button>
          </div>

          <div class = "text-center">
            <button @click="moveretour" class="btn btn-primary" type = "submit">Voir les feedbacks</button>
          </div>

      </div>

</template>


<style scoped>

/*********** INFO PROJET *****************/

.row{
  --bs-gutter-x: none;
}

#descri{
  background-image: url('../components/icons/working.png');
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover;
  width: 100%;
  padding-top: 20%;
}

#nomprojet{ 
  text-align: center;
  color: #fff;
  font-family: rawline,sans-serif;
  font-size: 3rem;
  font-weight: 600;
  line-height: 1.5;
  margin: 1.8rem 0 1.5rem;
  position: relative;
  background: #172063;
}

#nomprojet2{ 
  text-align: center;
  padding-top: 0.5vh;
  padding-left: 1vh;
  color: #fff;
  font-family: rawline,sans-serif;
  font-size: 3rem;
  font-weight: 600;
  line-height: 0.5;
  margin: 1.8rem 0 1.5rem;
  position: relative;
}

#descriptionprojet{ 
  text-align: center; 
  color: #fff;
  font-family: rawline,sans-serif;
  font-size: 2.5rem;
  font-weight: 200;
  line-height: 1.5;
  margin: 1.8rem 0 1.5rem;
  position: relative;
  background: #172063;
}

.statut_true{
  color: green;
}

.statut_false{
  color: red;
}

/*********** INFO PROJET RESPONSIVE *****************/

@media screen and (max-width: 582px) {
  #nomprojet {
    font-size: 1.5rem;
  }
}
@media screen and (max-width: 582px) {
  #nomprojet2{
      font-size: 1.5rem;
    }
}

@media screen and (max-width: 582px) {
  #descriptionprojet{
  font-size: 1rem;
  }
}

/*********** INFO DEV *****************/

#devpart{
  padding-top: 10px;
  border-top: 4px blue;
}

#devprojet{
  padding-top: 17.5vh;
  color: white;
}

#work_with{
  padding-top:10vh;
  font-size: 3em;
  text-decoration: underline;
  color:#172063;
}

#part1{
  width: 80%;
  box-shadow: 20px 20px rgba(0,0,0,.15);
}

#part1:hover {
  border-radius: 0% 0% 50% 50% / 0% 0% 5% 5% ;
  box-shadow: 10px 10px rgba(0,0,0,.25);
}

/*********** INFO DEV responsive *****************/

@media screen and (max-width: 582px) {
    .d-flex{
        flex-direction: column;
        align-items: center;
    }
}

/*********** Lien Form *****************/
.part2{
color:white;
font-family: Helvetica, Arial, sans-serif;
font-weight:500;
font-size: 18px;
border-radius: 5px;
background:#172063 ;
background-size: cover;
transition: all 0.3s;
box-sizing: border-box;
width: 80%;
outline:0;
margin:50px auto;
}

.thanks{
  color: #fff;
  font-family: rawline,sans-serif;
  font-size: 3rem;
  font-weight: 600;
  line-height: 1;
  margin: 1.8rem 0 1.5rem;
  position: relative;
}

img{
 box-sizing: border-box;
}

[type="submit"] {
  transition: all .3s;
  background: #dd0069;
  border: 0.2rem solid #002364;
  border-radius: 0.3rem;
  color: #fff;
  font-family: rawline,sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 1.4;
  overflow: hidden;
  padding: 0.75rem 2.5rem;
  position: relative;
  white-space: normal;
  z-index: 1;
}

/*********** Responsive Lien-form *****************/

@media screen and (min-width: 582px) {
  [type="submit"] {
    margin-left: 50%;
  }
}

@media screen and (max-width: 582px) {
  [type="submit"] {
    margin-top: 10%;
  }
}

@media screen and (min-width: 582px) {
   .thanks{
    margin-top: 20%;
    font-size: 30px;
  }
}

@media screen and (max-width: 582px) {
   .thanks{
    margin-top: 20%;
    font-size: 1em;
  }
}

@media screen and (min-width: 582px) {
  #img-ty {
    height: 130%;
  }
}

</style>