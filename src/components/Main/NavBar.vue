<template>
  <nav
    class="container d-flex justify-content-between align-items-center pt-2 w-75 mx-auto"
  >
    <img :src="logo" alt="Logo" />
    <div class="d-flex">
      <ul class="d-flex align-items-center m-0 p-0">
        <li
          v-for="item in menuItems"
          :key="item"
          class="list-unstyled text-uppercase mx-4"
        >
          <a href="#">{{ item }}</a>
        </li>
      </ul>
      <a href="#" class="btn btn-blue">get in touch</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data: () => ({
    logo: require("../../assets/img/svg-7.svg"),
    menuItems: ["Home", "Services", "about", "projects", "results"],
  }),
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/partials/variables";

nav {
  height: 8vh;

  img {
    height: 5vh;
  }

  // a.btn {
  //   background-color: $blue-lagoon;
  //   color: $white;
  //   &:hover {
  //     background-color: $fountain-blue;
  //   }
  // }

  ul {
    li {
      font-weight: 500;
      a {
        color: $woodsmoke;
        text-decoration: none;
      }
    }
  }
}
</style>
