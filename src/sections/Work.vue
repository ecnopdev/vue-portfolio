<template>
  <BaseSection>
    <template #header>
      <h1 id="work">03. Some things that I've built</h1>
    </template>
    <template #content>
      <v-list two-lines>
        <v-list-item v-for="(project,i) in projects" :key="i">
          <v-list-item-content>
            <v-list-item-title>{{project.name}}</v-list-item-title>
            <v-list-item-subtitle>{{project.techStack}}</v-list-item-subtitle>
          </v-list-item-content>

          <!-- <v-list-item-action>
            <v-icon>fa-external-link-alt</v-icon>
          </v-list-item-action> -->
        </v-list-item>
      </v-list>
    </template>
  </BaseSection>
</template>
<script>
const BaseSection = () => import("@/sections/BaseSection.vue");

export default {
  components: {
    BaseSection
  },
  data() {
    return {
      projects: [
        {
          name: "Events Submission Portal",
          techStack:
            "Vue.js, Node.js, PWA, App Engine, Cloud Functions, Secret Manager"
        },
        {
          name: "Job Assignment Management System",
          techStack: "Vue.js, Google Apps Script, PWA, Firebase"
        },
        {
          name: "Equipment Tracking System (Web and Mobile)",
          techStack: "Angular.js, Ionic, Cordova, Php, MySQL"
        },
        {
          name: "Newsroom Audio Translator and Transcription Portal",
          techStack: "Vue.js, Python, Google Apps Script, Compute Engine"
        },
        {
          name: "Google SMTP Gateway",
          techStack: "Node.js, App Engine, Cloud Storage Key Management Service"
        },
        {
          name: "Approval Workflow Service",
          techStack: "Vue.js, Google Apps Script, Google Form Add-on"
        }
      ]
    };
  }
};
</script>