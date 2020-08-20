<template>
  <v-container
    fluid
    style="scroll-snap-align:start;height:90vh;position:relative"
    class="d-flex align-start"
  >
    <v-row>
      <v-col cols="1"></v-col>
      <v-col cols="11">
        <v-container>
          <v-row>
            <v-col class="mb-4">
              <div class="title green--text font-weight-bold mb-4">Hi, my name is</div>
              <transition name="slide-fade">
                <div
                  transition="fade-transition"
                  class="text-h4 text-sm-h2 font-weight-bold mb-4"
                  v-if="showName"
                >
                  Jose Mari
                  <Typewriter />
                </div>
              </transition>
              <transition name="slide-fade">
                <h2
                  transition="fade-transition"
                  v-if="showTitle"
                  class="text-h4 text-sm-h2 font-weight-bold mb-5 grey--text"
                >
                  I build things
                  <WordRotate />
                </h2>
              </transition>
              <transition name="slide-fade">
                <p
                  transition="fade-transition"
                  v-if="showBio"
                  class="description text-body-1 font-weight-regular"
                >
                  I'm a
                  <span class="font-weight-bold green--text">full-stack software engineer</span>
                  who specializes in
                  <i>web development</i> and
                  <i>cloud engineering</i> using
                  <span style="font-weight:bold;color:#4fc08d">Vue.js</span>,
                  <span style="font-weight:bold;color:#218e49">Node.js</span> and
                  <span style="font-weight:bold;color:#1a73e8">Google Cloud Platform</span>.
                </p>
              </transition>
              <transition name="slide-fade">
                <v-btn
                  class="mt-2 pa-6"
                  v-if="showBio"
                  primary
                  dark
                  color="green"
                  target="_blank"
                  :href="mailTo"
                >
                  <v-icon class="mr-5">fa-envelope</v-icon>Get in touch
                </v-btn>
              </transition>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="1" align="right" justify="bottom" align-self="end"></v-col>
    </v-row>
    <div class="down-arrow" @click="$vuetify.goTo('#about', scrollOptions)">
      <v-icon href="#about" size="50px">fa-chevron-down</v-icon>
    </div>
  </v-container>
</template>

<style scoped>
.down-arrow {
  position: absolute;
  bottom: 0px;
  width: 80px;
  height: 80px;
  left: calc(50vw - 10px);
  animation: downArrow 0.8s linear infinite;
  opacity: 0;
}

@keyframes downArrow {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

.description {
  width: 400px;
}

@media only screen and (max-width: 599px) {
  .description {
    width: 100%;
  }
}
</style>

<script>
const Typewriter = () => import("@/components/Typewriter.vue");
const WordRotate = () => import("@/components/WordRotate.vue");

export default {
  name: "Home",
  data: () => ({
    showName: false,
    showTitle: false,
    showBio: false,
    mailTo: "mailto:ponce.josemari@gmail.com",
    scrollOptions: {
      duration: 600,
      offset: 0,
    }
  }),
  components: {
    Typewriter,
    WordRotate,
  },
  mounted: function () {
    setTimeout(() => {
      this.showName = true;
    }, 300);
    setTimeout(() => {
      this.showTitle = true;
    }, 500);
    setTimeout(() => {
      this.showBio = true;
    }, 700);
  },
};
</script>
