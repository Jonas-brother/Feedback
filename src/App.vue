<script>
import { RouterLink, RouterView } from "vue-router"
</script>

<template>
      <nav class="navbabar navbar sticky-top justify-content-center" >
        <h1 id = "title">Feed-WEBBU-Back</h1>
         <!-- <RouterLink to="/">form</RouterLink>
          <RouterLink to="/projects">test</RouterLink> -->
      </nav> 
   
  <RouterView/>
  
<!--
<video id="background-video" autoplay loop muted>
<source src="@/components/icons/data_red.mp4" type="video/mp4">
</video>

<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top">
      Bootstrap
    </a>
  </div>
</nav>
-->
</template>


<style>

/*body{
   background: linear-gradient(to bottom, #632518, #41130d);
   background-size: cover;
}*/

/*
#background-video{
position: absolute;
	top: 50%;
	left: 50%;
	min-width: 100%;
	min-height: 100%;
	z-index: -1;
	transform: translateX(-50%) translateY(-50%);
}
*/
.navbar{
 width: 100%;
 background: #dd0069;
 
}

#title{
  color: white;
}

</style>