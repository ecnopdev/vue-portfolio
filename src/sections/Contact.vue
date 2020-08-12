<template>
  <BaseSection>
    <template #header>
      <h1 id="contact"></h1>
    </template>
    <template #content>
      <v-container class="d-flex flex-column text-center align-center">
        <div class="text-center text-h2">Let's work together</div>
        <div
          class="grey--text pa-5 align-center text-center text-h4"
          style="max-width:650px"
        >I'll be migrating to Melbourne, Australia on December 2, 2020. I'm actively looking for interesting opportunities where I can share my and improve my skills further.</div>
        <v-btn
          dark
          class="green"
          large
          outlined
          href="mailto:ponce.josemari@gmail.com"
          target="_blank"
        >Say Hello</v-btn>
      </v-container>
    </template>
  </BaseSection>
</template>
<script>
const BaseSection = () => import("@/sections/BaseSection.vue");

export default {
  components: {
    BaseSection
  }
};
</script>