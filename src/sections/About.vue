<template>
  <v-container fluid style="scroll-snap-align:start;height:90vh">
    <v-row>
      <v-col cols="12" offset="1">
        <h1 id="about">About</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="1"></v-col>
      <v-col cols="10">
        <v-container>
          <v-row>
            <v-col cols="12" md="4" class="d-flex flex-row align-center justify-center">
              <div class="profile-picture-container">
                <v-img
                  class="mx-auto"
                  :src="require('@/assets/profile.jpg')"
                ></v-img>
              </div>
            </v-col>
            <v-col cols="12" md="8">
              <ul>
                <li>
                  Hi, my name <b>Jose</b>. Sometimes people call me <b>JM</b> or
                  <b>Ecnop</b> (which is my last name spelled backwards).
                </li>
                <li>
                  I am a <b>Software Engineer</b> with over a decade
                  professional experience. Aside from coding, I also enjoy
                  solving challenging problems and building things at scale.
                </li>
                <li>
                  My current technology stack comprises of <b>Vue.js</b>,
                  <b>Node.js</b> and <b>Google Cloud Platform</b>.
                </li>
                <li>
                  I'm got my Bachelor's Degree in <b>Computer Scientist</b> at
                  <b>De La Salle University Manila</b>, majoring Software
                  Technology.
                </li>
                <li>
                  I'm a gamer who likes multi-player, role-playing, and co-op
                  strategy games.
                </li>
                <li>
                  I'm a puzzle junkie especially when placed in a competitive
                  environment.
                </li>
                <li>
                  I'm an amateur multi-instrumentatlist, who plays basic
                  keyboards, guitar, harmonica and flute.
                </li>
                <li>
                  And to top all that, I'm an influencer of two beautiful kids
                  whom I teach crazy things about life.
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="1"></v-col>
    </v-row>
  </v-container>
</template>
<style>
.profile-picture-container{
  overflow:hidden;
  max-width:300px;
  height:300px;
  text-align:center;
  box-shadow: rgb(210, 210, 210) -10px 10px;
}
</style>
<script>
export default {
  name: "About",
};
</script>
