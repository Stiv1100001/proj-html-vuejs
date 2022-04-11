<template>
  <section class="actions">
    <div class="container-md text-center">
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
            <font-awesome-icon
              icon="fa-solid fa-arrow-right"
              size="lg"
              color="#ffffff"
              class="arrow-icon position-absolute"
            />
            <img
              :src="project.img"
              :alt="project.text"
              class="img-fluid rounded-3"
            />
            <p class="text-white position-absolute">
              {{ project.text }}
              <span class="hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ActionsSection",
  data: () => ({
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
        img: require("../../assets/img/project-1.jpg"),
        text: "Academic professional program in social media",
      },
      {
        img: require("../../assets/img/project-2.jpg"),
        text: "President's speech at the annual meeting",
      },
      {
        img: require("../../assets/img/project-3.jpg"),
        text: "International business trip in Shangai",
      },
      {
        img: require("../../assets/img/project-4.jpg"),
        text: "Technology workshop with education theme",
      },
      {
        img: require("../../assets/img/project-5.jpg"),
        text: "Donation of clothes and food to the partner NGO",
      },
      {
        img: require("../../assets/img/project-6.jpg"),
        text: "Confraternization of the procurrent team",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/partials/variables";

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
    .arrow-icon {
      right: 3rem;
      top: 40px;
      z-index: 3;
      display: none;
      visibility: hidden;
      transition: all 0.4s;
    }

    img {
      transition: all 0.5s;
      filter: brightness(50%);
    }
    p {
      padding: 0 30px;
      font-size: 1.6rem;
      left: 0%;
      bottom: 10%;
      font-weight: bold;

      span.hidden {
        transition: all 0.3s;
        margin-top: 1rem;
        display: none;
        font-size: 1rem;
        font-weight: 500;
      }
    }

    &:hover {
      img {
        filter: brightness(30%);
      }

      .arrow-icon {
        display: inline;
        visibility: visible;
      }

      p {
        span.hidden {
          display: block;
        }
      }
    }
  }
}
</style>
