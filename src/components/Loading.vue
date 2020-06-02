<template>
  <v-container fill-height align-center justify="center">
    <v-row>
      <v-col cols="12" align="center">
        <v-img
          alt="ecnopdev"
          class="shrink mr-2"
          contain
          :src="require('@/assets/logo3.svg')"
          transition="scale-transition"
          width="200"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
    mounted: function(){
        setTimeout(() =>{
            this.$router.push("/home");
        },1000);
    }
};
</script>