<template>
  <v-card>
    <v-navigation-drawer app temporary right v-model="drawer">
      <v-divider></v-divider>

      <v-list class="text-center">
        <v-list-item>
          <v-list-item-content>
            <v-btn
              @click="drawer = !drawer"
              icon
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-for="item in items" :key="item.title">
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item justify-content>
          <v-list-item-content >
            <v-btn
              green
              outlined
              href="Jose-Mari-Ponce-resume.pdf"
              target="_bank"
            >Resume</v-btn>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: "About", icon: "mdi-home-city" },
        { title: "Experience", icon: "mdi-account" },
        { title: "Work", icon: "mdi-account-group-outline" }
      ]
    };
  },
  methods: {
    toggle() {
      this.drawer = !this.drawer;
    }
  }
};
</script>