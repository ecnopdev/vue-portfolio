<template>
  <v-container fluid style="scroll-snap-align:start;height:90vh" class="d-flex align-center">
    <v-row>
      <v-col cols="1"></v-col>
      <v-col cols="10">
        <v-row>
          <v-col class="mb-4">
            <div class="title green--text font-weight-bold mb-4">Hi, my name is</div>
            <transition name="slide-fade">
              <h1
                transition="fade-transition"
                v-if="showName"
                class="display-3 font-weight-bold mb-3"
              >Jose Mari <Typewriter />
              </h1>
            </transition>
            <transition name="slide-fade">
              <h2
                transition="fade-transition"
                v-if="showTitle"
                class="display-3 font-weight-bold mb-5 grey--text"
              >I build things <WordRotate /></h2>
            </transition>
            <transition name="slide-fade">
              <p
                transition="fade-transition"
                v-if="showBio"
                class="title font-weight-regular"
                style="max-width:500px"
              >
                I'm a
                <span class="font-weight-bold green--text">full-stack software engineer</span>
                who specializes in <i>web development</i> and <i>cloud engineering</i> using <span style="font-weight:bold;color:#4fc08d">Vue.js</span>, <span style="font-weight:bold;color:#218e49">Node.js</span> and <span style="font-weight:bold;color:#1a73e8">Google Cloud Platform</span>.
              </p>
            </transition>
            <transition name="slide-fade">
              <v-btn class="mt-2 pa-6" v-if="showBio" primary dark color="green" target="_blank" :href="mailTo">
                <v-icon class="mr-5">fa-envelope</v-icon>
                Get in touch
              </v-btn>
            </transition>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="1" align="right" justify="bottom" align-self="end"></v-col>
    </v-row>
    <div class="social-links d-none d-sm-flex">
      <SocialIcons />
    </div>
  </v-container>
</template>

<style scoped>
.social-links {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  width: 45px;
  height: 75vh;
  display: block;
  position: fixed;
  right: 16px;
  bottom: 0px;
  padding-right: 16px;
  text-align:center;
}
</style>

<script>
const Typewriter = () => import('@/components/Typewriter.vue');
const WordRotate = () => import('@/components/WordRotate.vue');
const SocialIcons = () => import('@/components/SocialIcons.vue');

export default {
  name: "Home",

  data: () => ({
    showName: false,
    showTitle: false,
    showBio: false,
    mailTo: "mailto:ponce.josemari@gmail.com"
  }),
  components: {
    Typewriter,
    WordRotate,
    SocialIcons
  },
  mounted: function() {
    setTimeout(() => {
      this.showName = true;
    }, 300);
    setTimeout(() => {
      this.showTitle = true;
    }, 500);
    setTimeout(() => {
      this.showBio = true;
    }, 700);
  }
};
</script>
