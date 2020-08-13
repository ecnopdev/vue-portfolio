<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="d-flex>">
          <v-timeline :dense="$vuetify.breakpoint.mobile">
            <v-timeline-item
              v-for="(experience, i) in experiences"
              :key="i"
              :color="experience.color"
              :small="experience.isSmall"
            >
              <template v-slot:opposite>
                <span
                  :class="`headline font-weight-bold ${experience.color}--text`"
                  v-text="experience.year"
                ></span>
              </template>
              <v-card class="elevation-2">
                <v-card-title
                  class="company-name font-weight-bold text-title text-sm-h5"
                >{{experience.company}}</v-card-title>
                <v-card-subtitle class="d-flex flex-column body-2">
                  <div class="green--text">{{experience.position}}</div>
                  <div class="hidden-sm-and-up">{{experience.year}}</div>
                </v-card-subtitle>
                <v-card-text>{{experience.description}}</v-card-text>
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
  name: "Timeline",
  data: () => ({
    experiences: [
      {
        color: "blue",
        year: "2014 - Present",
        company: "Singapore Press Holdings",
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
        company: "Orica",
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
        position: "Software Engineer",
        description: "Design, develop and implement for complex workflow applications for a wide-range of industries such as Manufacturing, Banking, Human Resources, and Education.",
        skills: [
          { icon: "fab fa-java", name: "Java Server Faces (Xpages)" },
          { icon: "fab fa-php", name: "Codeigniter" },
          { icon: "fab fa-jira", name: "Jira, Scrum" }
        ],
        isSmall: false
      },
      {
        color: "red",
        year: "2008",
        company: "De La Salle University - Manila",
        position: "Bachelors of Science in Computer Science",
        description: "Graduated with a major in Software Technology.",
        skills: [],
        isSmall: true
      }
    ]
  })
};
</script>