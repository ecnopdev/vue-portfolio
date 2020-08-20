<template>
  <span class="type-text reverse-typewrite">{{message}}</span>
</template>

<script>
export default {
  name:"Typewriter",
  data() {
    return {
      message: "Ponce"
    };
  },
  watch: {
    message: {
      handler(newVal) {
        if (newVal === "Ponce") {
          setTimeout(() => {
            this.message = "ecnoP";
          }, 4000);
        } else {
          setTimeout(() => {
            this.message = "Ponce";
          }, 4000);
        }
      },
      immediate: true
    }
  }
};
</script>

<style scoped>
.type-text {
  width: 0em;
  display: inline-block;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid rgba(0, 0, 0, 0.75);
  top: 7px;
}

@media only screen and (max-width:599px){
  .type-text {
    top:8px
  }
}

.reverse-typewrite {
  animation: typewriter 8s steps(5) infinite forwards,
    cursorBlink 800ms steps(80) infinite normal;
}

@keyframes typewriter {
  0% {
    width: 0em;
  }
  10% {
    width: 3em;
  }
  40% {
    width: 3em;
  }
  50% {
    width: 0em;
  }
  60% {
    width: 3em;
  }
  90% {
    width: 3em;
  }
  100% {
    width: 0em;
  }
}

@keyframes cursorBlink {
  from {
    border-right-color: rgba(0, 0, 0, 0.75);
  }
  to {
    border-right-color: transparent;
  }
}
</style>