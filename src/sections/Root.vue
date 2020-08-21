<template>
  <div :class="theme">
    <Home :isDark="isDark" />
    <About :isDark="isDark"/>
    <Experience />
    <Work :isDark="isDark"/>
    <Contact />
    <div :class="[theme,'pb-5','text-center','text-title','font-weight-bold','repo-link']">
      <a href="https://github.com/ecnopdev/vue-portfolio" target="_blank">
        <v-icon :dark="isDark" class="mr-2">fab fa-github</v-icon>
        <span>Designed and Built by Jose Mari Ponce</span>
      </a>
    </div>
  </div>
</template>
<style scoped>
.white-text {
  color:white;
}
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
  props: {'isDark':Boolean},
  components: {
    Home,
    About,
    Experience,
    Work,
    Contact
  },
  computed: {
    theme(){
      return this.isDark ? ['secondary','white-text'] : '';    
    }
  }
};
</script>