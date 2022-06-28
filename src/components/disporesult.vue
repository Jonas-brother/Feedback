<script>
import db from '../firebase'
export default {
    props: ['name', 'answer', 'comment']
}
</script>

<template>

<div class="container">
    <div class = "col">
        <div id ="nomuser" class ="text-center">
            <h1>
                 {{name}}
            </h1>
        </div>
        <div>
                <div>
                    <p>Qu'est-ce qui vous a poussé(e) à faire appel à nous ?</p><br>
                        <div class ="answer"> a répondu:  {{answer.a}}</div>
                        <div class = "comment">a commenté :{{comment.a}}</div><br><br>
                </div>
                
                <div>
                    <p>Etes-vous satisfait(e) de la communication ?</p><br>
                        <div class ="answer"> a répondu:  {{answer.b}}</div>
                        <div class = "comment">a commenté :{{comment.b}}</div><br><br>
                </div>

                <div>
                    <p>Etes-vous satisfait(e) du résultat de notre collaboration ?</p><br>
                        <div class ="answer"> a répondu:  {{answer.b}}</div>
                        <div class = "comment">a commenté :{{comment.c}}</div><br><br>
                </div>

                <div>
                    <p>Etes-vous satisfait(e) du support apporté par notre équipe ?</p><br>
                        <div class ="answer"> a répondu:  {{answer.d}}</div>
                        <div class = "comment">a commenté :{{comment.d}}</div><br><br>
                </div>

                <div>
                   <p>Seriez-vous prêt(e) à refaire appel à nous ?</p><br>
                       <div class ="answer"> a répondu:  {{answer.e}}</div>
                       <div class = "comment">a commenté :{{comment.e}}</div>
                </div>
         </div>
    </div>
</div>
</template>

<style>

/****** résultat form ********/

#boite{
    margin-top: 115px;
}

.moyenne{
    color: #002364 !important;
    -ms-flex-align: center;
    align-items: center !important;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 0.5rem;
    font-family: rawline,sans-serif;
    font-weight: 500;
    line-height: 1.2;
}

p{
  font-family: rawline,sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1;
  margin: 1.8rem 0 1.5rem;
  position: relative;
}

/****** résultat les réponses ********/

#nomuser{
    color:white;
    background-color: #fff;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    box-shadow: 0.8rem 0 0 #fff, -0.8rem 0 0 #fff;
    color: #002364;
}

.answer{
    background: linear-gradient(to right, #172063, #172063);
    color: #fff;
    font-size: 1rem;
    line-height: 1.5;
}

.comment{
    background: linear-gradient(to right, #172063, #172063);
    color: #fff;
    font-size: 1rem;
    line-height: 1.5;
}

.cus{
  color:white;
  font-family: Helvetica, Arial, sans-serif;
  font-weight:500;
  font-size: 18px;
  border-radius: 5px;
  line-height: 22px;
  background: linear-gradient(to right, #172063, #172063);
  border:2px solid transparent;
  transition: all 0.3s;
  padding: 13px;
  margin-bottom: 15px;
  width:100%;
  box-sizing: border-box;
  outline:0;
  max-width:420px;
  margin:50px auto;
}

.nbrrep{
    padding-right: 1em;
}

#inner-border2 {
    display: flex;
    justify-content: center;
    flex-direction: column;
	position: relative;
	border: 2px solid #172063;
    height: 100%;
    width: 100%;
    margin: auto;
}

/****** résultat responsive********/

@media screen and (max-width: 582px) {
  p{
  font-size: 1rem;
  }
}
</style>