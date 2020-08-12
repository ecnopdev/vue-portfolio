<template>
    <div>
        <Home />
        <About />
        <Experience />
        <Work />
        <Contact />
        <div class="pb-5 text-center text-title">Designed and Built by Jose Mari Ponce</div>
    </div>
</template>
<script>
const Home = () => import("@/sections/Home.vue");
const About = () => import("@/sections/About.vue");
const Experience = () => import("@/sections/Experience.vue");
const Work = () => import("@/sections/Work.vue");
const Contact = () => import("@/sections/Contact.vue");

export default {
    components: {
        Home,
        About,
        Experience,
        Work,
        Contact
    }
}
</script>