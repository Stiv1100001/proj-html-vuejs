<template>
  <section class="company position-relative">
    <img :src="points" alt="points" class="points upper position-absolute" />
    <img :src="points" alt="points" class="points lower position-absolute" />
    <img :src="company" alt="company" class="rigth position-absolute" />
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
</template>

<script>
export default {
  name: "CompanySection",
  data: () => ({
    points: require("../../assets/img/svg-0.svg"),
    company: require("../../assets/img/about-4.jpg"),
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
  }),
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/partials/variables";

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
</style>
