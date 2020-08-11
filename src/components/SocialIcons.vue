<template>
  <div>
    <a
      v-for="(item,index) in icons"
      :key="index"
      class="social-icon-container"
      target="_blank"
      :href="item.link"
    >
      <v-icon :title="item.name" class="social-icon mb-5" size="30">{{item.icon}}</v-icon>
    </a>
  </div>
</template>
<style scoped>
.social-icon:hover{
    color:#4fc08d;
    font-size:45px !important;
}

.social-icon-container {
  animation: animate 1s linear forwards;
  opacity: 0;
  text-decoration: none;
}

@keyframes animate {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
<script>
export default {
  data() {
    return {
      icons: [ 
        {
          name: "LinkedIn",
          icon: "fa-linkedin",
          link: "https://www.linkedin.com/in/ecnopdev/"
        },
        {
          name: "Github",
          icon: "fa-github",
          link: "https://github.com/ecnopdev"
        },
        {
          name: "Stack Overflow",
          icon: "fa-stack-overflow",
          link: "https://stackoverflow.com/users/11275461/ecnopdev"
        },
        {
          name: "Twitter",
          icon: "fa-twitter",
          link: "https://twitter.com/ecnopdev"
        },
        {
          name: "Instagram",
          icon: "fa-instagram",
          link: "https://www.instagram.com/ecnopdev/"
        },
        {
          name: "Medium",
          icon: "fa-medium",
          link: "https://medium.com/@ecnopdev"
        },
        {
          name: "Codepen",
          icon: "fa-codepen",
          link: "https://codepen.io/ecnopdev"
        }
      ]
    };
  },
  methods: {
    gotoLink(url) {
      document.location = url;
    }
  }
};
</script>