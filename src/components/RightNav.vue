<template>
  <v-card dark>
    <v-navigation-drawer
      app
      temporary
      right
      v-model="drawer"
      class="d-flex flex-column align-center"
    >
      <v-list class="text-center">
        <v-list-item>
          <v-list-item-content>
              <div>
              <v-icon @click="drawer = !drawer">mdi-close</v-icon>
              </div>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          @click="navigate(item.target)"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item justify-content>
          <v-list-item-content>
            <v-btn color="green" outlined href="Jose-Mari-Ponce-CV.pdf" target="_bank">CV</v-btn>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  name:"RightNav",
  data() {
    return {
      drawer: false,
      items: [
        { title: "About", icon: "mdi-home-city", target: "#about" },
        { title: "Experience", icon: "mdi-account", target: "#experience" },
        { title: "Work", icon: "mdi-account-group-outline", target: "#work" },
        { title: "Contact", icon: "mdi-account-group-outline", target: "#contact" }
      ],
      scrollOptions: {
        duration: 300,
        offset: 0,
        easing: "easeInOutCubic"
      }
    };
  },
  methods: {
    toggle() {
      this.drawer = !this.drawer;
    },
    navigate(target){
      this.$vuetify.goTo(target, this.scrollOptions);
      this.toggle();
    }
  }
};
</script>