<template>
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
          <div class="card bg-white rounded-3 border-0 position-relative">
            <div class="d-flex justify-content-between align-items-start mb-3">
              <img :src="card.icon" :alt="card.title" class="img-fluid" />
              <font-awesome-icon
                icon="fa-solid fa-arrow-right icon-lg"
                size="lg"
                color="#038484"
                class="arrow-icon position-static"
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
</template>

<script>
export default {
  name: "ServicesSection",
  data: () => ({
    servicesCard: [
      {
        icon: require("../../assets/img/svg-1.svg"),
        title: "Audit & Assurance",
      },
      {
        icon: require("../../assets/img/svg-2.svg"),
        title: "Financial Advisory",
      },
      {
        icon: require("../../assets/img/svg-3.svg"),
        title: "Analyics and M&A",
      },
      {
        icon: require("../../assets/img/svg-4.svg"),
        title: "Middle Marketing",
      },
      {
        icon: require("../../assets/img/svg-5.svg"),
        title: "Legal Consulting",
      },
      {
        icon: require("../../assets/img/svg-6.svg"),
        title: "Regulatory Rick",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/partials/variables";

.services {
  padding: 7rem 0;
  background-color: rgb(238, 244, 237);

  .services-text {
    color: $text-gray;
    font-size: 1.1rem;
  }

  .card {
    padding: 3rem 0.8rem 3rem 2rem;
    transition: transform 0.3s;

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

    .arrow-icon {
      right: 10px;
      top: 0;
      padding: 1rem;
    }

    &:hover {
      transform: translateY(-10%);

      .arrow-icon {
        background-color: #52bbb986;
        border-radius: 50%;
      }
    }
  }
}
</style>
