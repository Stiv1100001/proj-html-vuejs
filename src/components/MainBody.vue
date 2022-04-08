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
        <a href="#" class="btn btn-blue">get in touch</a>
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
        <a href="#" class="btn btn-blue">get in touch</a>
        <a href="#" class="btn btn-outlined-blue ms-4">read more</a>
      </div>
    </section>

    <section class="services">
      <div class="container">
        <h6 class="subtitle">Our business areas</h6>
        <h1 class="mb-4 title">
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

    <section class="company position-relative">
      <img
        :src="imgs.points"
        alt="points"
        class="points upper position-absolute"
      />
      <img
        :src="imgs.points"
        alt="points"
        class="points lower position-absolute"
      />
      <img :src="imgs.company" alt="company" class="rigth position-absolute" />
      <div class="container">
        <div class="text-place w-50">
          <h6 class="subtitle mb-4">ABout the network</h6>
          <h1 class="title mb-4"><span class="highligth">The</span> Company</h1>
          <p class="mb-5">
            For 12 years we have been providing auddit and warranty, financial
            advice, risk advice, taxes and related services tto select clients.
          </p>

          <div class="row g-2 mb-5">
            <div class="col-6" v-for="spec in companySpec" :key="spec.title">
              <div class="company-spec">
                <h4 class="mb-3">
                  <font-awesome-icon color="#038484" :icon="spec.icon" />
                  {{ spec.title }}
                </h4>
                <p>Lorem ipsum ddolor sit amet consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>

          <div class="d-flex justify-content-start">
            <a href="#" class="btn btn-blue">get in touch</a>
            <a href="#" class="btn btn-outlined-blue ms-3">read more</a>
          </div>
        </div>
      </div>
    </section>

    <section class="actions">
      <div class="container text-center">
        <div class="mb-5">
          <h6 class="subtitle mb-4">We do more for everyone</h6>
          <h1 class="title mb-4">
            Actions & <span class="highligth">Projects</span>
          </h1>
        </div>

        <div class="navbar d-flex justify-content-center w-100 mb-4">
          <ul class="d-flex justify-content-around m-0 p-0">
            <li
              v-for="action in actions"
              :key="action.text"
              class="list-unstyled text-uppercase"
              :class="{ active: action.active }"
            >
              <a href="#">{{ action.text }}</a>
            </li>
          </ul>
        </div>

        <div class="row row-cols-3 g-1">
          <div v-for="project in projects" :key="project.text" class="col">
            <div class="card-image position-relative p-4">
              <img
                :src="project.img"
                :alt="project.text"
                class="img-fluid rounded-3"
              />
              <p class="text-white position-absolute">
                {{ project.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="result">
      <div class="upper">
        <div class="container py-5">
          <div class="text-center mb-5">
            <h6 class="subtitle mb-4">We do more for everyone</h6>
            <h1 class="title alternate mb-4">
              <span class="highligth">Results</span> in Numbers
            </h1>
          </div>
          <div class="row row-cols-4 numbers">
            <div class="col">
              <div class="text-center">
                <h1>128</h1>
                <h4>Certifications</h4>
              </div>
            </div>
            <div class="col">
              <div class="text-center">
                <h1>128</h1>
                <h4>Certifications</h4>
              </div>
            </div>
            <div class="col">
              <div class="text-center">
                <h1>128</h1>
                <h4>Certifications</h4>
              </div>
            </div>
            <div class="col">
              <div class="text-center">
                <h1>128</h1>
                <h4>Certifications</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lower">
        <div
          class="logos w-100 h-100 d-flex justify-content-around align-items-center"
        >
          <img
            v-for="(logo, index) in logos"
            :key="index"
            :src="logo"
            alt="Logos"
          />
        </div>
      </div>
    </section>

    <section class="touch">
      <div class="container">
        <div class="row">
          <div class="col-8">
            <h6 class="subtitle mb-4">Send a message</h6>
            <h1 class="title mb-4">
              Get in <span class="highligth">Touch</span>
            </h1>
            <p class="mb-5">
              We will respond to your message as soon as possible
            </p>
            <form>
              <div class="row gx-2 gy-3">
                <div class="col-6">
                  <input type="text" class="form-control" placeholder="Name" />
                </div>
                <div class="col-6">
                  <input type="text" class="form-control" placeholder="Email" />
                </div>
                <div class="col-6">
                  <input type="text" class="form-control" placeholder="Phone" />
                </div>
                <div class="col-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="More info"
                  />
                </div>
                <div class="col-12 mb-4">
                  <textarea
                    type="text"
                    class="form-control"
                    placeholder="Message"
                  />
                </div>
                <div class="col-12">
                  <button class="btn btn-blue">Send</button>
                </div>
              </div>
            </form>
          </div>
          <div class="col-4">
            <h4 class="fw-bold">Example Inc.</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p class="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div class="mb-3 d-flex align-items-center">
              <font-awesome-icon
                icon="fa-solid fa-phone"
                size="lg"
                color="#038484"
                class="icon-rounded"
              />
              <span class="ms-3">+1 (305) 1234-5678 </span>
            </div>
            <div class="mb-3 d-flex align-items-center">
              <font-awesome-icon
                icon="fa-solid fa-envelope"
                size="lg"
                color="#038484"
                class="icon-rounded"
              />
              <span class="ms-3">mail@example.com</span>
            </div>
            <div class="mb-4 d-flex align-items-center">
              <font-awesome-icon
                icon="fa-solid fa-location-dot"
                size="lg"
                color="#038484"
                class="icon-rounded"
              />
              <span class="ms-3">Main Avenue, 987</span>
            </div>
            <div>
              <button class="btn btn-outlined-blue">View map</button>
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
      points: require("../assets/img/svg-0.svg"),
      company: require("../assets/img/about-4.jpg"),
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
    companySpec: [
      {
        icon: "fa-solid fa-award",
        title: "Tradition",
      },
      {
        icon: "fa-solid fa-lock",
        title: "Security",
      },
      {
        icon: "fa-solid fa-pen-to-square",
        title: "Certificate",
      },
      {
        icon: "fa-solid fa-graduation-cap",
        title: "Expertise",
      },
    ],
    actions: [
      {
        text: "all",
        active: true,
      },
      {
        text: "institutional",
        active: false,
      },
      {
        text: "social",
        active: false,
      },
      {
        text: "events",
        active: false,
      },
      {
        text: "innovation",
        active: false,
      },
      {
        text: "environment",
        active: false,
      },
      {
        text: "technology",
        active: false,
      },
    ],
    projects: [
      {
        img: require("../assets/img/project-1.jpg"),
        text: "Academic professional program in social media",
      },
      {
        img: require("../assets/img/project-2.jpg"),
        text: "President's speech at the annual meeting",
      },
      {
        img: require("../assets/img/project-3.jpg"),
        text: "International business trip in Shangai",
      },
      {
        img: require("../assets/img/project-4.jpg"),
        text: "Technology workshop with education theme",
      },
      {
        img: require("../assets/img/project-5.jpg"),
        text: "Donation of clothes and food to the partner NGO",
      },
      {
        img: require("../assets/img/project-6.jpg"),
        text: "Confraternization of the procurrent team",
      },
    ],
    logos: [
      require("../assets/img/logo-1.png"),
      require("../assets/img/logo-2.png"),
      require("../assets/img/logo-3.png"),
      require("../assets/img/logo-4.png"),
      require("../assets/img/logo-5.png"),
    ],
  }),
};
</script>

<style lang="scss" scoped>
@import "../assets/style/partials/variables";
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
        color: $woodsmoke;
        text-decoration: none;
      }
    }
  }
}

.jumbotron {
  height: 80vh;
  background-image: url("../assets/img/bg-parallax.png");
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
  }
}

.services {
  padding: 7rem 0;
  background-color: rgb(238, 244, 237);

  .services-text {
    color: $text-gray;
    font-size: 1.1rem;
  }

  .card {
    img {
      height: 3rem;
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

.company {
  height: 80vh;
  background-color: $woodsmoke;
  z-index: -1;

  .points {
    left: 50%;
    z-index: 2;

    &.upper {
      top: 0;
      transform: translate(-55%, -25%);
    }

    &.lower {
      bottom: 0;
      transform: translate(-55%, 75%);
    }
  }

  img.rigth {
    right: 0;
    height: 80vh;
    width: 50vw;
    z-index: 0;
    object-fit: cover;
  }

  .text-place {
    padding: 7rem 0 7rem 10%;

    color: $white;

    h6 {
      color: $blue-lagoon;
    }

    p {
      color: $text-gray;
    }

    .company-spec {
      h4 {
        font-weight: bold;
      }
    }
  }
}

.actions {
  padding: 7rem 0;

  .navbar {
    li {
      padding: 0.3rem 1.3rem;

      a {
        color: $text-gray;
        font-weight: bold;
        text-decoration: none;
        transition: color 0.3s;

        &:hover {
          color: $fountain-blue;
        }
      }

      &.active {
        background-color: $blue-bg;

        a {
          color: $blue-lagoon;
        }
      }
    }
  }

  .card-image {
    img {
      filter: brightness(50%);
    }
    p {
      padding: 0 30px;
      font-size: 1.6rem;
      left: 0%;
      bottom: 10%;
      font-weight: bold;
    }
  }
}

.result {
  height: 70vh;
  background-color: $shark;

  .upper {
    height: 75%;
    background-image: url("@/assets/img/bg-7.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;

    h6 {
      color: $fountain-blue;
    }

    .numbers {
      color: $white;
      padding-top: 3rem;

      h1 {
        color: $fountain-blue;
      }

      h4 {
        font-weight: bold;
      }
    }
  }

  .lower {
    height: 25%;

    padding: 0 15%;

    img {
      filter: invert(1) brightness(90%);
      height: 1.7rem;
    }
  }
}

.touch {
  .container {
    padding: 7rem 9rem;

    p {
      color: $text-gray;
    }

    form {
      input[type="text"],
      textarea {
        background-color: rgb(236, 236, 236);
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
      }
    }

    .icon-rounded {
      background-color: rgb(218, 236, 237);
      padding: 0.5rem;
      border-radius: 50%;
    }
  }
}
</style>
