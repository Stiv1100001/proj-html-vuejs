<template>
  <main>
    <nav
      class="container d-flex justify-content-between align-items-center py-2 w-75 mx-auto"
    >
      <img :src="imgs.logo" alt="Logo" />
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
        <a href="#" class="btn text-uppercase">get in touch</a>
      </div>
    </nav>
    <section class="jumbotron d-flex align-items-center justify-content-center">
      <div class="jumbo-card text-center">
        <h1 class="text-uppercase">Ready <span>team</span></h1>
        <p>
          No matter what your company needs, we will be ready to assist you in
          the best possible way.
        </p>
        <a href="#" class="btn text-uppercase get">get in touch</a>
        <a href="#" class="btn text-uppercase read ms-4">read more</a>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "MainBody",
  data: () => ({
    imgs: {
      logo: require("../assets/img/svg-7.svg"),
    },
    menuItems: ["Home", "Services", "about", "projects", "results"],
  }),
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/partials/variables";
nav {
  height: 8vh;

  img {
    height: 5vh;
  }

  a.btn {
    background-color: $blue-lagoon;
    color: $white;
    &:hover {
      background-color: $fountain-blue;
    }
  }

  ul {
    li {
      font-weight: 500;
      a {
        color: black;
        text-decoration: none;
      }
    }
  }
}

.jumbotron {
  height: 80vh;
  background-image: url("@/assets/img/bg-parallax.png");
  background-size: cover;
  background-attachment: fixed;
  background-position: center;

  .jumbo-card {
    width: 31%;

    h1 {
      font-weight: 700;
      font-family: Assistant;

      span {
        color: $blue-lagoon;
        background-color: $blue-bg;
        padding: 0rem 1rem;
      }
    }

    p {
      color: $pumice;
      font-size: 1.18rem;
    }

    a.get {
      background-color: $blue-lagoon;
      color: $white;
    }

    a.read {
      border: 1px solid $blue-lagoon;
      color: $blue-lagoon;
    }
  }
}
</style>
