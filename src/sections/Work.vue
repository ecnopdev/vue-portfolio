<template>
  <BaseSection>
    <template #header>
      <div id="work" class="text-h5 text-sm-h4">
        <span class="green--text"> 03. </span>
        Projects and Skills
      </div>
    </template>
    <template #content>
      <v-row>
        <v-col cols="12" md="7">
          <v-list
            two-lines
            avatar
            three-line
            color="transparent"
            :dark="isDark"
          >
            <v-list-item v-for="(project, i) in projects" :key="i">
              <v-list-item-avatar>
                <v-icon>fa-folder-open</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="green--text title text-wrap">{{
                  project.name
                }}</v-list-item-title>
                <v-list-item-subtitle class="text-wrap">{{
                  project.company
                }}</v-list-item-subtitle>
                <v-list-item-content class="caption text-wrap">{{
                  project.techStack
                }}</v-list-item-content>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="12" md="5" class="px-sm-7 px-md-0" fill-height>
          <v-row class="skill-group-container green lighten-5">
            <v-col
              cols="1"
              class="green skill-header-container d-flex flex-column align-center justify-center"
            >
              <div class="skill-header">Front-End</div>
            </v-col>
            <v-col col="11" class="skill-container">
              <div class="skill">Vue.js</div>
              <div class="skill">Vuetify</div>
              <div class="skill">SPA</div>
              <div class="skill">PWA</div>
              <div class="skill">ES6</div>
              <div class="skill">TypeScript</div>
              <div class="badge">
                <a
                  href="https://www.testdome.com/cert/64074e8503944ea1bfc94a76262c0b58"
                  title="Vue.js (Hard) - View Certificate"
                >
                  <img
                    width="80px"
                    :src="require('@/assets/rsz_1rsz_testdome_icon_small.png')"
                  />
                </a>
              </div>
            </v-col>
          </v-row>
          <v-row class="skill-group-container brown lighten-5">
            <v-col cols="1" class="brown skill-header-container">
              <div class="skill-header">Back-End</div>
            </v-col>
            <v-col col="11" class="skill-container">
              <div class="skill">Node.js</div>
              <div class="skill">Express</div>
              <div class="skill">Google Apps Script</div>
              <div class="skill">Php</div>
              <div class="badge">
                <a
                  href="https://www.hackerrank.com/certificates/fc0052f09b74"
                  target="_blank"
                  style="text-decoration: none"
                  title="Rest API (Intermediate) - View Certificate"
                >
                  <v-icon size="60" color="green">fab fa-hackerrank</v-icon>
                </a>
              </div>
            </v-col>
          </v-row>
          <v-row class="skill-group-container amber lighten-5">
            <v-col cols="1" class="amber skill-header-container">
              <div class="skill-header">Storage</div>
            </v-col>
            <v-col col="11" class="skill-container">
              <div class="skill">Firebase</div>
              <div class="skill">MySQL</div>
              <div class="skill">Cloud Storage</div>
              <div class="skill">Memorystore</div>
              <div class="skill">Google Drive</div>
              <div class="skill">Elasticsearch</div>
            </v-col>
          </v-row>
          <v-row class="skill-group-container blue lighten-5">
            <v-col cols="1" class="blue skill-header-container">
              <div class="skill-header">DevOps</div>
            </v-col>
            <v-col col="11" class="skill-container">
              <div class="skill">Github</div>
              <div class="skill">Docker</div>
              <div class="skill">Cloud SDK</div>
              <div class="skill">Cloud Build</div>
              <div class="skill">App Engine</div>
              <div class="skill">Cloud Functions</div>
              <div class="skill">Compute Engine</div>
              <div class="skill">Secret Manager</div>
              <div class="skill">Key Management Service</div>
              <div class="badge">
                <a
                  href="https://www.credential.net/b1ecebb6-4578-473e-8d38-88d8e94feabd"
                  target="_blank"
                  title="Associate Cloud Engineer - View Certificate"
                >
                  <img
                    src="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/23739250"
                  />
                </a>
              </div>
            </v-col>
          </v-row>
          <v-row class="skill-group-container red lighten-5">
            <v-col cols="1" class="red skill-header-container">
              <div class="skill-header">Tools</div>
            </v-col>
            <v-col col="11" class="skill-container">
              <div class="skill">SCRUM</div>
              <div class="skill">JIRA</div>
              <div class="skill">Confluence</div>
              <div class="skill">Google Workplace</div>
              <div class="skill">VSCode</div>
              <div class="badge">
                <a
                  href="Jose Mari Ponce-ScrumAlliance_CSM_Certificate.pdf"
                  target="_blank"
                  title="Certified Scrum Master - View Certificate"
                >
                  <img :src="require('@/assets/seal-csm.png')" />
                </a>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </template>
  </BaseSection>
</template>
<style>
.skill-group-container {
  min-height: 100px;
  display: flex;
  flex-direction: row;
}
.skill-header-container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center !important;
  align-items: center !important;
}
.skill-header {
  position: relative;
  color: white;
  font-weight: bold;
  transform: rotate(90deg);
  display: block;
  width: 80px;
  text-align: center;
}
.skill-container {
  align-self: center;
}
.skill {
  display: inline-block;
  padding: 5px;
  margin: 5px;
  background-color: rgb(58, 58, 58);
  border: 1px rgb(80, 80, 80) solid;
  font-size: 1em;
  color: rgb(252, 252, 252);
}

.badge img {
  width: 60px;
}

/* Set the image to fill its parent and make transparent */
.center-cropped img {
  min-height: 100%;
  min-width: 100%;
  /* IE 8 */
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  /* IE 5-7 */
  filter: alpha(opacity=0);
  /* modern browsers */
  opacity: 0;
}
</style>
<script>
const BaseSection = () => import("@/sections/BaseSection.vue");

export default {
  name: "Work",
  components: {
    BaseSection,
  },
  props: { isDark: Boolean },
  data() {
    return {
      projects: [
        {
          name: "Events Submission Portal",
          techStack:
            "Vue.js, Express, App Engine, Cloud Functions, Secret Manager",
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
          techStack:
            "Node.js, App Engine, Cloud Storage Key Management Service",
          company: "Singapore Press Holdings",
        },
        {
          name: "Approval Workflow (Google Form Add-on)",
          techStack: "Vue.js, Google Apps Script, Google Form Add-on",
          company: "Singapore Press Holdings",
        },
      ],
    };
  },
};
</script>