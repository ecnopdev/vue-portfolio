<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12 pa-0 ma-0">
        <div>
          <v-timeline :dense="$vuetify.breakpoint.mobile" class="pa-0 ma-0">
            <v-timeline-item
              v-for="(experience, i) in experiences"
              :key="i"
              :color="experience.color"
              :small="experience.isSmall"
            >
              <template #icon>
                <v-avatar>
                  <v-img :src="require(`@/assets/exp-icons/${experience.companyIcon}`)" />
                </v-avatar>
              </template>
              <template #opposite>
                <span
                  :class="`headline font-weight-bold ${experience.color}--text`"
                  v-text="experience.year"
                ></span>
              </template>
              <v-card class="elevation-2" dark color="green">
                <v-card-title
                  class="company-name font-weight-bold text-title text-sm-h5"
                >{{experience.company}}
                </v-card-title>
                <v-card-subtitle class="d-flex flex-column body-2 white--text">
                  <div>{{experience.position}}</div>
                  <div class="hidden-sm-and-up">{{experience.year}}</div>
                </v-card-subtitle>
                <v-card-text class="white--text">{{experience.description}}</v-card-text>
                <v-card-actions>
                  <v-icon
                    v-for="(skill,i2) in experience.skills"
                    :key="i2"
                    class="mx-1"
                    size="20"
                    :title="skill.name"
                  >{{skill.icon}}</v-icon>
                </v-card-actions>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.company-name {
  word-break: break-word;
}
</style>
<script>
export default {
  name: "ExperienceTimeline",
  data: () => ({
    experiences: [
      {
        color: "blue",
        year: "2014 - Present",
        company: "Singapore Press Holdings",
        companyIcon: "exp-sph.png",
        website: "https://sph.com.sg",
        position: "Software Engineer",
        description:
          "Design, develop and implement enterprise productivity tools and cloud-native applications for the newsroom. ",
        skills: [
          {
            icon: "fab fa-vuejs",
            name: "Vue.js, Vuetify"
          },
          { icon: "fab fa-node-js", name: "Node.js, Express" },
          {
            icon: "fab fa-google",
            name: "Google Cloud Platform, Google Apps Script, GSuite"
          },
          { icon: "fab fa-php", name: "Php" },
          { icon: "fab fa-jira", name: "Jira, Scrum" }
        ],
        isSmall: false
      },
      {
        color: "blue",
        year: "2013",
        company: "Orica Australia",
        companyIcon: "exp-orica.png",
        position: "Software Engineer",
        description:
          "Global applications developer and support for Lotus Domino applications.",
        skills: [{ icon: "fab fa-java", name: "Java Server Faces (Xpages)" }],
        isSmall: false
      },
      {
        color: "blue",
        year: "2011",
        company: "Sun Life of Canada Philippines",
        companyIcon: "exp-sun-life.png",
        position: "Software Engineer",
        description:
          "Design, develop, implement and maintain a multi-language policy contract generator.",
        skills: [{ icon: "fab fa-java", name: "Java Server Faces (Xpages)" }],
        isSmall: false
      },
      {
        color: "blue",
        year: "2011",
        company: "Abbott Laboratories",
        companyIcon: "exp-abbott.png",
        position: "Software Engineer",
        description:
          "Design, develop, implement and maintain workflow applications to support the parmaceutical operations.",
        skills: [{ icon: "fab fa-java", name: "Java Server Faces (Xpages)" }],
        isSmall: false
      },
      {
        color: "blue",
        year: "2008",
        company: "Softweb Consulting",
        companyIcon: "exp-softweb.png",
        position: "Software Engineer",
        description: "Design, develop and implement complex workflow applications for a wide-range of industries such as Manufacturing, Banking, Human Resources, and Education.",
        skills: [
          { icon: "fab fa-java", name: "Java Server Faces (Xpages)" },
          { icon: "fab fa-php", name: "Codeigniter" },
          { icon: "fab fa-jira", name: "Scrum" }
        ],
        isSmall: false
      },
      {
        color: "red",
        year: "2008",
        company: "De La Salle University - Manila",
        companyIcon: "exp-dlsu.png",
        position: "Bachelors of Science in Computer Science",
        description: "Graduated with a major in Software Technology.",
        skills: [],
        isSmall: true
      }
    ]
  })
};
</script>