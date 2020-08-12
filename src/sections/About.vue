<template>
  <BaseSection>
        <template #header>
        <h1 id="about">01. About Me</h1>
        </template>
        <template #content>
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
            <v-col cols="12" md="8" class="px-xs-0">
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
                  I got my Bachelor's Degree in <b>Computer Science</b> at
                  <b>De La Salle University Manila</b>, majoring Software
                  Technology.
                </li>
                <li>
                  I'm a <b>gamer</b> who likes multi-player, role-playing, and co-op
                  strategy games.
                </li>
                <li>
                  I'm a <b>puzzle junkie</b> especially when placed in a competitive
                  environment.
                </li>
                <li>
                  I'm an <b>amateur multi-instrumentatlist</b>, who plays basic
                  keyboards, guitar, harmonica and flute.
                </li>
                <li>
                  And to top all that, I'm a <b>dad</b> two beautiful children 
                  whom I teach crazy things about life.
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-container>
      </template>
      </BaseSection>
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
const BaseSection = () => import('@/sections/BaseSection')
export default {
  name: "About",
  components: {
    BaseSection
  }
};
</script>
