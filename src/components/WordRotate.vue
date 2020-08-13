<template>
  <div class="rotate-container">
    <span v-for="(word,index) in words" :key="index" class="rotate-text">{{word}}</span>
  </div>
</template>

<script>
export default {
  name:"WordRotate",
  data() {
    return {
      words: ["for the web.", "in the cloud.", "using Vue.js.", "using Node.js.", "in Google Cloud"]
    };
  },
  methods: {}
};
</script>

<style scoped>
.rotate-container{
  position:relative;
  display:inline-block;
  overflow:visible;
  width:auto;
  width:450px;
  height:1em;
}

@media only screen and (max-width: 959px){
  .rotate-container {
    width:100%;
  }
}

.rotate-text {
  position: absolute;
  overflow: hidden;
  top:7px;
  opacity:0;
  animation: animate 10s linear infinite;
  height:130px
}

@keyframes animate {
  0% {
    opacity: 1;
    transform: translateY(-50px);
  }
  2% {
    opacity: 1;
    transform: translateY(0px);
  }
  18% {
    opacity: 1;
    transform: translateY(0px);
  }
  20% {
    opacity: 0;
    transform: translateY(50px);
  }
}

.rotate-text:nth-child(1) {
  animation-delay: 0s;
  color:black;
}
.rotate-text:nth-child(2) {
  animation-delay: 2s;
  color:black;
}
.rotate-text:nth-child(3) {
  animation-delay: 4s;
  color:#4fc08d;
}
.rotate-text:nth-child(4) {
  animation-delay: 6s;
  color:#4fc08d;
}
.rotate-text:nth-child(5) {
  animation-delay: 8s;
  color:#1a73e8;
}
</style>