<template>
  <main>
    <nav
      class="container d-flex justify-content-between align-items-center pt-2 w-75 mx-auto"
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
        <h1 class="text-uppercase">
          Ready <span class="highligth">team</span>
        </h1>
        <p>
          No matter what your company needs, we will be ready to assist you in
          the best possible way.
        </p>
        <a href="#" class="btn text-uppercase get">get in touch</a>
        <a href="#" class="btn text-uppercase read ms-4">read more</a>
      </div>
    </section>

    <section class="services">
      <div class="container">
        <h6 class="text-uppercase">Our business areas</h6>
        <h1 class="mb-4">
          Excellence in <span class="highligth">Services</span>
        </h1>
        <div class="d-flex justify-content-between align-items-center mb-4">
          <p class="services-text w-75">
            We are leaders in providding consultancy services with a set of
            cutting-edge techhnologies and a team of experienced and renowed
            professionals. These are some options that you chan hire
          </p>
          <a href="#" class="btn btn-blue">SEE ALL</a>
        </div>
        <div class="row row-cols-3 g-5">
          <div v-for="card in servicesCard" :key="card.title" class="col">
            <div class="card bg-white p-5 rounded-3 border-0">
              <div
                class="d-flex justify-content-between align-items-start mb-3"
              >
                <img :src="card.icon" :alt="card.title" class="img-fluid" />
                <font-awesome-icon
                  icon="fa-solid fa-arrow-right icon-lg"
                  size="lg"
                  color="#038484"
                />
              </div>
              <div class="text">
                <h4 class="mb-4">{{ card.title }}</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
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
    servicesCard: [
      {
        icon: require("../assets/img/svg-1.svg"),
        title: "Audit & Assurance",
      },
      {
        icon: require("../assets/img/svg-2.svg"),
        title: "Financial Advisory",
      },
      {
        icon: require("../assets/img/svg-3.svg"),
        title: "Analyics and M&A",
      },
      {
        icon: require("../assets/img/svg-4.svg"),
        title: "Middle Marketing",
      },
      {
        icon: require("../assets/img/svg-5.svg"),
        title: "Legal Consulting",
      },
      {
        icon: require("../assets/img/svg-6.svg"),
        title: "Regulatory Rick",
      },
    ],
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

span.highligth {
  color: $blue-lagoon;
  background-color: $blue-bg;
  padding: 0rem 1rem;
}

.jumbotron {
  height: 80vh;
  background-image: url("@/assets/img/bg-parallax.png");
  background-size: cover;
  background-attachment: fixed;
  background-position: center -3rem;

  .jumbo-card {
    width: 31%;

    h1 {
      font-weight: 700;
      font-family: Assistant;
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

.services {
  padding: 7rem 0;
  background-color: rgb(238, 244, 237);

  h6 {
    color: $fountain-blue;
  }

  p.services-text {
    color: $text-gray;
    font-size: 1.1rem;
  }

  .card {
    img {
      height: 2rem;
      fill: $fountain-blue;
    }

    h4 {
      font-weight: 700;
    }

    .text {
      width: 95%;
    }

    p {
      color: $text-gray;
    }

    .icon-lg {
      fill: $fountain-blue;
      font-size: 2rem;
    }
  }
}
</style>
