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
              small
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
                  >{{skill}}</v-icon>
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
  data: () => ({
    experiences: [
      {
        color: "blue",
        year: "2014 - Present",
        company: "Singapore Press Holdings",
        position: "Software Engineer",
        description:
          "Design, develop and implement enterprise productivity tools for the newsroom",
        skills: [
          "fab fa-vuejs",
          "fab fa-node-js",
          "fab fa-google",
          "fab fa-php"
        ]
      },
      {
        color: "red",
        year: "2013",
        company: "Orica",
        position: "Software Engineer",
        description:
          "Global applications support for Lotus Domimo applications",
        skills: ["fab fa-java"]
      },
      {
        color: "blue",
        year: "2011",
        company: "Sun Life of Canada Philippines",
        position: "Software Engineer",
        description:
          "Design, develop and implement a multi-language policy contract generator.",
        skills: ["fab fa-java"]
      },
      {
        color: "blue",
        year: "2011",
        company: "Abbott Laboratories",
        position: "Software Engineer",
        description:
          "Design, develop and implement inventory and workflow applications",
        skills: ["fab fa-java"]
      },
      {
        color: "red",
        year: "2008",
        company: "Softweb Consulting",
        position: "Software Engineer",
        description: "Design, develop and implement for various ",
        skills: ["fab fa-java", "fab fa-php"]
      }
    ]
  })
};
</script>