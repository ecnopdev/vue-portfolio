<template>
  <v-app>
    <v-app-bar hide-on-scroll fixed app color="white" flat v-if="$route.name != 'loading'">
      <div class="d-flex align-center">
        <v-btn href="https://ecnop.dev" icon>
        <v-img
          alt="ecnopdev"
          class="shrink mr-2"
          contain
          :src="require('@/assets/logo3.svg')"
          transition="scale-transition"
          width="40"
        />
        </v-btn>
      </div>

      <v-spacer></v-spacer>
      <transition name="slide-fade">
      <div class="d-none d-sm-flex flex-row nav-links align-center">
        <div @click="$vuetify.goTo('#about', scrollOptions)">
          <span>01.</span> About 
        </div>
        <div @click="$vuetify.goTo('#experience', scrollOptions)">
          <span>02.</span> Experience
        </div>
        <div @click="$vuetify.goTo('#work', scrollOptions)">
          <span>03.</span> Work
        </div>
        <div @click="$vuetify.goTo('#contact', scrollOptions)">
          <span>04.</span> Contact
        </div>
        <v-btn class="ml-3" green outlined href="Jose-Mari-Ponce-CV.pdf" target="_bank">
          CV
        </v-btn>
      </div>
      </transition>
      <v-app-bar-nav-icon class="d-flex d-sm-none" @click="toggleDrawer()"/>
    </v-app-bar>

    <v-main style="scroll-snap-type:y proximity">
      <router-view></router-view>
    </v-main>

    <div class="social-links d-none d-sm-flex">
          <SocialIcons />
    </div>

    <RightNav ref="rightNav"/>
  </v-app>
</template>

<style>
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
  text-align: center;
}

.nav-links div {
  margin-left: 16px;
  cursor:pointer
}
.nav-links span {
  color: green;
  font-weight: bold;
}
.nav-links div:hover {
  text-decoration: underline;
}
/* Enter and leave animations can use different */
/* durations and timing functions.*/
.slide-fade-enter-active {
  transition: all 0.8s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>

<script>
import RightNav from '@/components/RightNav'

export default {
  name: "App",
  components: {
    RightNav
  },

  data: () => ({
    scrollOptions:{
      duration: 600,
      offset: 0,
      easing: 'easeInOutCubic'
    }
  }),

  methods : {
    toggleDrawer(){
      this.$refs.rightNav.toggle();
    }
  }
};
</script>
