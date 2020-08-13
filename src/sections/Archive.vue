<template>
  <BaseSection>
    <template #header>
      <div id="archive" class="text-h5 text-sm-h4">
        A list of things that I've built
      </div>
    </template>
    <template #content>
      <v-list two-lines avatar :dense="$vuetify.breakpoint.mobile">
        <v-list-item v-for="(project,i) in projects" :key="i">
          <v-list-item-avatar>
              <v-icon>fa-code</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="blue--text title text-wrap">{{project.name}}</v-list-item-title>
            <v-list-item-subtitle class="text-wrap">{{project.company}}</v-list-item-subtitle>
            <v-list-item-body class="body text-wrap">
                {{project.techStack}}
            </v-list-item-body>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </template>
  </BaseSection>
</template>
<script>
const BaseSection = () => import("@/sections/BaseSection.vue");

export default {
  name:"Archive",
  components: {
    BaseSection
  },
  data() {
    return {
      projects: [
        {
          name: "Events Submission Portal",
          techStack:
            "Vue.js, Node.js, PWA, App Engine, Cloud Functions, Secret Manager",
          company: "Singapore Press Holdings",
        },
        {
          name: "Job Assignment Management System",
          techStack: "Vue.js, Google Apps Script, PWA, Firebase",
          company: "Singapore Press Holdings",
        },
        {
          name: "Equipment Tracking System (Web and Mobile)",
          techStack: "Angular.js, Ionic, Cordova, Php, MySQL",
          company: "Singapore Press Holdings",
        },
        {
          name: "Interview Translator and Transcription Service",
          techStack: "Vue.js, Python, Google Apps Script, Compute Engine",
          company: "Singapore Press Holdings",
        },
        {
          name: "Google SMTP Gateway",
          techStack: "Node.js, App Engine, Cloud Storage Key Management Service",
          company: "Singapore Press Holdings",
        },
        {
          name: "Approval Workflow Service",
          techStack: "Vue.js, Google Apps Script, Google Form Add-on",
          company: "Singapore Press Holdings",
        },
        {
          name: "Messenger App",
          techStack: "Angular.js, Ionic, Node.js, Socket.io",
          company: "Singapore Press Holdings",
        },
        {
          name: "Editorial Productivity System",
          techStack: "Java Server Faces, jQuery, Dojo Toolkit, Managed Beans",
          company: "Singapore Press Holdings",
        },
        {
          name: "Editorial Systems Access Request",
          techStack: "App Maker, Google Drive",
          company: "Singapore Press Holdings",
        },
        {
          name: "Stylebook",
          techStack: "App Maker, Google Drive",
          company: "Singapore Press Holdings",
        },
        {
          name: "Policy Contract Generator - Bahasa",
          techStack: "Java Enterprise, Adobe",
          company: "Sun Life Financial",
        },
      ]
    };
  }
};
</script>