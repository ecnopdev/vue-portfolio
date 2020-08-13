<template>
  <v-container fluid class="section-container">
    <v-row>
      <v-col></v-col>
      <v-col cols="10">
          <slot name="header"></slot>
          <v-divider />
      </v-col>
      <v-col></v-col>
    </v-row>
    <v-row>
      <v-col class="d-none d-sm-flex" cols="12" sm="1"></v-col>
      <v-col cols="12" sm="10">
          <slot name="content"></slot>
      </v-col>
      <v-col cols="12" sm="1"></v-col>
    </v-row>
</v-container>
</template> 
<style scoped>
.section-container {
    scroll-snap-align:start;
    min-height:90vh;
}
</style>     
<script>
export default {
    name:"BaseSection"
}
</script>