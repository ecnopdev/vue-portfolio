<template>
  <BaseSection>
    <template #header>
      <div id="about" class="text-h5 text-sm-h4">
        <span class="green--text">01.</span>
        About Me
      </div>
    </template>
    <template #content>
      <v-container>
        <v-row>
          <v-col cols="12" md="4" class="d-flex flex-row align-center justify-center">
            <div class="profile-picture-container">
              <v-img
                class="mx-auto"
                :src="require('@/assets/profile.jpg')"
                :lazy-src="require('@/assets/profile.jpg')"
              ></v-img>
            </div>
          </v-col>
          <v-col cols="12" md="8" class="px-xs-0">
            <v-list color="transparent" :dark="isDark">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="green">fa-user-tag</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <p>
                    Hi, my name
                    <b>Jose</b>. Sometimes people call me
                    <b>JM</b> or
                    <b>Ecnop</b> (which is my last name spelled backwards).
                  </p>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="green">fa-briefcase</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <p>
                    I am a
                    <b>Software Engineer</b> based in <b>Singapore</b> (moving to <b>Melbourne</b> soon) specializing in <b>web development</b> and <b>cloud engineering</b>. Aside from
                    <b>coding</b>, I also enjoy
                    <b>solving puzzles</b> and
                    <b>building things</b> at scale.
                  </p>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="green">fa-tools</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <p>
                    My current technology stack comprises of
                    <b>Vue.js</b>,
                    <b>Node.js</b> and
                    <b>Google Cloud Platform</b>.
                  </p>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="green">fa-graduation-cap</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <p>
                    I got my Bachelor's Degree in
                    <b>Computer Science</b> at
                    <b>De La Salle University Manila</b>, specializing in Software
                    Technology. I'm currently taking up a
                    <b>Master's Degree</b> in
                    <b>Information Systems</b> at
                    <b>University of the Philippines Open University</b>
                  </p>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="green">far fa-thumbs-up</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <p>
                    I'm a
                    <b>dad</b> of two, a
                    <b>gamer</b> and an
                    <b>amateur multi-instrumentatlist</b>, who plays basic
                    keyboards, guitar, harmonica and flute.
                  </p>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </BaseSection>
</template>
<style>
.profile-picture-container {
  overflow: hidden;
  max-width: 300px;
  height: 300px;
  text-align: center;
  box-shadow: rgb(210, 210, 210) -10px 10px;
}
</style>
<script>
const BaseSection = () => import("@/sections/BaseSection");
export default {
  name: "About",
  props: {isDark:Boolean},
  components: {
    BaseSection,
  },
};
</script>
