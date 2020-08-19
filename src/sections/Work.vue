<template>
  <BaseSection>
    <template #header>
      <div id="work" class="text-h5 text-sm-h4">
        <span class="green--text">03.</span>
        Recent Projects
      </div>
    </template>
    <template #content>
      <v-list two-lines avatar three-line>
        <v-list-item v-for="(project,i) in projects" :key="i">
          <v-list-item-avatar>
              <v-icon>fa-folder-open</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="green--text title text-wrap">{{project.name}}</v-list-item-title>
            <v-list-item-subtitle class="text-wrap">{{project.company}}</v-list-item-subtitle>
            <v-list-item-content class="caption text-wrap">
                {{project.techStack}}
            </v-list-item-content>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </template>
  </BaseSection>
</template>
<script>
const BaseSection = () => import("@/sections/BaseSection.vue");

export default {
  name: "Work",
  components: {
    BaseSection
  },
  data() {
    return {
      projects: [
        {
          name: "Events Submission Portal",
          techStack:
            "Vue.js, Node.js, Express, App Engine, Cloud Functions, Secret Manager",
          company: "Singapore Press Holdings",
        },
        {
          name: "Job Assignment Management System",
          techStack: "Vue.js, Google Apps Script, PWA, Firebase, Php",
          company: "Singapore Press Holdings",
        },
        {
          name: "Equipment Tracking System (Web and Mobile)",
          techStack: "Angular.js, Ionic, Cordova, Php, MySQL",
          company: "Singapore Press Holdings",
        },
        {
          name: "Interview Translator and Transcription Portal",
          techStack: "Vue.js, Python, Google Apps Script, Compute Engine",
          company: "Singapore Press Holdings",
        },
        {
          name: "Google SMTP Gateway",
          techStack: "Node.js, App Engine, Cloud Storage Key Management Service",
          company: "Singapore Press Holdings",
        },
        {
          name: "Approval Workflow (Google Form Add-on)",
          techStack: "Vue.js, Google Apps Script, Google Form Add-on",
          company: "Singapore Press Holdings",
        }
      ]
    };
  }
};
</script>