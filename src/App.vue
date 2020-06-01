<template>
  <v-app>
    <v-app-bar app color="transparent" flat>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="require('@/assets/logo3.svg')"
          transition="scale-transition"
          width="40"
        />
      </div>

      <v-spacer></v-spacer>

      <div class="d-flex flex-row nav-links align-center">
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
    </v-app-bar>

    <v-content style="scroll-snap-type:y proximity">
      <Home />
    </v-content>
  </v-app>
</template>

<style scoped>
.nav-links div {
  margin-left: 16px;
}
.nav-links span {
  color: green;
  font-weight: bold;
}
</style>

<script>
import Home from "./components/Home";

export default {
  name: "App",
  components: {
    Home
  },

  data: () => ({
    //
  })
};
</script>
