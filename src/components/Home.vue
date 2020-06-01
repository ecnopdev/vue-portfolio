<template>
  <v-container fluid style="scroll-snap-align:start;height:100vh" class="d-flex align-center">
    <v-row class="justify-middle">
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
              >Jose Mari Ponce</h1>
            </transition>
            <transition name="slide-fade">
              <h2
                transition="fade-transition"
                v-if="showTitle"
                class="display-3 font-weight-bold mb-5 grey--text"
              >I build things for the web.</h2>
            </transition>
            <transition name="slide-fade">
              <p
                transition="fade-transition"
                v-if="showBio"
                class="title font-weight-regular"
                style="max-width:450px"
              >
                I'm a
                <span class="font-weight-bold green--text">full-stack software engineer</span>
                , an amateur multi-instrumentalist,
                a gamer,
                and a dad who finds ways to make the best of all worlds.
              </p>
            </transition>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="1" align="right" justify="bottom" align-self="end"></v-col>
    </v-row>
    <div class="email-address d-none d-sm-flex">
      <a href="mailto:ponce.josemari@gmail.com">ponce.josemari@gmail.com</a> --------------------------
    </div>
  </v-container>
</template>

<style scoped>
.email-address {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  width: 45px;
  height: 385px;
  display: block;
  position: fixed;
  right: 16px;
  bottom: 0px;
  padding-right: 16px;
}
.email-address a {
  text-decoration: none;
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
export default {
  name: "Home",

  data: () => ({
    showName: false,
    showTitle: false,
    showBio: false
  }),
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
