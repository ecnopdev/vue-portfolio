<template>
  <BaseSection>
    <template #header>
      <h1 id="contact"></h1>
    </template>
    <template #content>
      <v-container class="d-flex flex-column text-center align-center">
        <div class="text-center text-h4 text-sm-h2">Get In Touch</div>
        <v-btn
          dark
          class="green"
          large
          outlined
          href="mailto:ponce.josemari@gmail.com"
          target="_blank"
        >
        ></v-btn>
          <v-btn>
          <v-icon class="mr-4">fa-envelope</v-icon>
          CONNECT</v-btn>
        >
        <SocialIcons :isDark="isDark" class="mt-5 pt-5 hidden-sm-and-up" />
      </v-container>
    </template>
  </BaseSection>
</template>
<script>
const BaseSection = () => import("@/sections/BaseSection.vue");
const SocialIcons = () => import("@/components/SocialIcons.vue");
a
export default {
  name: "Contact",
  components: {
    BaseSection,
    SocialIcons,
  },
  props: { isDark: Boolean },
};
</script>