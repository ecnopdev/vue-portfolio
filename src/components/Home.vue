<template>
  <v-container fluid style="scroll-snap-align:start;height:100vh">
    <v-row>
      <v-col cols="2"></v-col>
      <v-col cols="8">
        <v-row>
          <v-col class="mb-4">
            <slot name="title"></slot>
            <div class="title green--text font-weight-bold mb-4">Hi, my name is</div>

            <h1 class="display-3 font-weight-bold mb-3">Jose Mari Ponce</h1>

            <h2 class="display-3 font-weight-bold mb-5 grey--text">I build things for the web.</h2>

            <p class="title font-weight-regular" style="max-width:450px">
              I'm a
              <span class="font-weight-bold green--text">full-stack software engineer</span>
              , an amateur multi-instrumentalist,
              a gamer,
              and a dad who finds ways to make the best of all worlds.
            </p>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="2" align="right" justify="bottom" align-self="end"></v-col>
    </v-row>
    <div class="email-address"><a href="mailto:ponce.josemari@gmail.com">ponce.josemari@gmail.com</a> --------------------------</div>
  </v-container>
</template>

<style scoped>
.email-address {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  width: 45px;
  height: 400px;
  display: block;
  position: fixed;
  right: 0px;
  bottom: 0px;
  padding-right: 16px;
}
.email-address a {
  text-decoration: none;
}
</style>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader"
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify"
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify"
      }
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com"
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com"
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify"
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs"
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify"
      }
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer"
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/layout/pre-defined"
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions"
      }
    ]
  })
};
</script>
