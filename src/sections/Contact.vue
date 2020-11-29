<template>
  <BaseSection>
    <template #header>
      <h1 id="contact"></h1>
    </template>
    <template #content>
      <v-container class="d-flex flex-column text-center align-center">
        <div class="text-center text-h4 text-sm-h2">Get In Touch</div>
        <div
          class="grey--text ma-5 pa-5 align-center text-center text-h5 text-sm-h4"
          style="max-width: 85%"
        >
          I'll be migrating to <b>Melbourne, Australia</b> on
          <b>January, 2021</b>. I'm actively looking for interesting job
          opportunities where I can share and improve my skills further.
        </div>
        <v-btn
          dark
          class="green"
          large
          outlined
          href="mailto:ponce.josemari@gmail.com"
          target="_blank"
        >
          <v-icon class="mr-4">fa-envelope</v-icon>
          CONNECT</v-btn
        >
        <SocialIcons :isDark="isDark" class="mt-5 pt-5 hidden-sm-and-up" />
      </v-container>
    </template>
  </BaseSection>
</template>
<script>
const BaseSection = () => import("@/sections/BaseSection.vue");
const SocialIcons = () => import("@/components/SocialIcons.vue");

export default {
  name: "Contact",
  components: {
    BaseSection,
    SocialIcons,
  },
  props: { isDark: Boolean },
};
</script>