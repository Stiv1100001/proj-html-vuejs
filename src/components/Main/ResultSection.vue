<template>
  <section class="result">
    <div class="upper">
      <div class="container-md py-5">
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
              <h1>230</h1>
              <h4>Employees</h4>
            </div>
          </div>
          <div class="col">
            <div class="text-center">
              <h1>517</h1>
              <h4>Customers</h4>
            </div>
          </div>
          <div class="col">
            <div class="text-center">
              <h1>94</h1>
              <h4>Countries Served</h4>
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
</template>

<script>
export default {
  name: "ResultSection",
  data: () => ({
    logos: [
      require("../../assets/img/logo-1.png"),
      require("../../assets/img/logo-2.png"),
      require("../../assets/img/logo-3.png"),
      require("../../assets/img/logo-4.png"),
      require("../../assets/img/logo-5.png"),
    ],
  }),
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/partials/variables";

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
</style>
