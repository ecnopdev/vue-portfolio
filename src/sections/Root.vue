<template>
  <div>
    <Home />
    <About />
    <Experience />
    <Work />
    <Contact />
    <div class="pb-5 text-center text-title font-weight-bold repo-link">
      <a href="https://github.com/ecnopdev/vue-portfolio" target="_blank">
        <v-icon class="mr-2">fab fa-github</v-icon>Designed and Built by Jose Mari Ponce
      </a>
    </div>
  </div>
</template>
<style scoped>
.repo-link a {
    text-decoration:none;
    opacity:0.8;
    color:gray;
}
.repo-link a:hover {
    text-decoration:none;
    opacity:1;
    color:rgb(70, 171, 70)
}
</style>
<script>
const Home = () => import("@/sections/Home.vue");
const About = () => import("@/sections/About.vue");
const Experience = () => import("@/sections/Experience.vue");
const Work = () => import("@/sections/Work.vue");
const Contact = () => import("@/sections/Contact.vue");

export default {
  name: "Root",
  components: {
    Home,
    About,
    Experience,
    Work,
    Contact
  }
};
</script>