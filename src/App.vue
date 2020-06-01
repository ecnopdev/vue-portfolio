<template>
  <v-app>
    <v-app-bar fixed app color="white" flat>
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
        <div>
          <span>01.</span> About
        </div>
        <div>
          <span>02.</span> Experience
        </div>
        <div>
          <span>03.</span> Work
        </div>
        <div>
          <span>04.</span> Contact
        </div>
        <v-btn class="ml-3" green outlined href="Jose-Mari-Ponce-resume.pdf" target="_bank">
          Resume
        </v-btn>
      </div>
      </transition>
      <v-app-bar-nav-icon class="d-flex d-sm-none" @click="toggleDrawer()"/>
    </v-app-bar>

    <v-content style="scroll-snap-type:y proximity">
      <Home />
    </v-content>

    <RightNav ref="rightNav"/>
  </v-app>
</template>

<style>
.nav-links div {
  margin-left: 16px;
}
.nav-links span {
  color: green;
  font-weight: bold;
}
/* Enter and leave animations can use different */
/* durations and timing functions.              */
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
import Home from "./components/Home";

export default {
  name: "App",
  components: {
    RightNav,
    Home
  },

  data: () => ({
    //
  }),

  methods : {
    toggleDrawer(){
      this.$refs.rightNav.toggle();
    }
  }
};
</script>
