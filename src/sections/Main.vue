<template>
    <div>
        <Home />
        <About />
    </div>
</template>
<script>
const Home = () => import("@/sections/Home.vue");
const About = () => import("@/sections/About.vue");

export default {
    components: {
        Home,
        About
    }
}
</script>