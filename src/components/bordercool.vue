<script>
import Developeur from "./developeur.vue"
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
    <div class="outer-border">
        <div class="mid-border">
        <div class="inner-border">
            <img class="corner-decoration corner-left-top" src="https://i.ibb.co/4mKvK3N/corner-decoration.jpg">
            <img class="corner-decoration corner-right-top" src="https://i.ibb.co/4mKvK3N/corner-decoration.jpg">
            <img class="corner-decoration corner-right-bottom" src="https://i.ibb.co/4mKvK3N/corner-decoration.jpg">
            <img class="corner-decoration corner-left-bottom" src="https://i.ibb.co/4mKvK3N/corner-decoration.jpg">
            <img class="vertical-decoration top" src="https://i.ibb.co/JRTK9z4/horizontally-centered-vertical-decoration.png">
            <img class="vertical-decoration bottom" src="https://i.ibb.co/JRTK9z4/horizontally-centered-vertical-decoration.png">
            </div>
        </div>
    </div>
</template>


<style scoped>
.inner-border {
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.outer-border {
	border: 2px solid #DE9B72;
   	height: 99%;
    width: 98%;
    padding: 6px;
    margin: 0 auto;
}

@media (min-width: 992px) {
	.outer-border {
		height: 94%;
	}
}

.mid-border {
    border: 6px solid #DE9B72;
    height: 100%;
    width: 100%;
    padding: 6px;
    margin: auto;
}

.inner-border {
	position: relative;
	border: 2px solid #DE9B72;
    height: 100%;
    width: 100%;
    margin: auto;
}


/* Decorations */
.corner-decoration {
	position: absolute;
    width: 3em;
    margin: -3px;
}

@media (min-width: 768px) {
	.corner-decoration {
		width: 3.5em;
	  	margin: -4px;
	}
}

@media (min-width: 992px) {
	.corner-decoration {
		width: 4em;
	  	margin: -5px;
	}
}

@media (min-width: 1200px) {
	.corner-decoration {
		width: 5em;
	  	margin: -6px;
	}
}

.corner-decoration.corner-left-top {
	left: 0;
	top: 0;
}

.corner-decoration.corner-right-top {
	top: 0;
	right: 0;
	 -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}

.corner-decoration.corner-right-bottom {
	right: 0;
	bottom: 0;
	 -webkit-transform: scale(-1);
  	transform: scale(-1);
}

.corner-decoration.corner-left-bottom {
	left: 0;
	bottom: 0;
	-webkit-transform: scaleY(-1);
  	transform: scaleY(-1);
}


.vertical-decoration {
	position: absolute;
	left: 0;
	right: 0;
	margin: auto;
	width: 11em;
}


@media (min-width: 768px) {
	.vertical-decoration {
		width: 16em;
	}
}


@media (min-width: 992px) {
	.vertical-decoration {
		width: 20em;
	}
}

@media (min-width: 1200px) {
	.vertical-decoration {
		width: 27em;
	}
}

.vertical-decoration.top {
	top: 0;

}

.vertical-decoration.bottom {
	bottom: 0;
	-webkit-transform: scaleY(-1);
  	transform: scaleY(-1);
}
</style>