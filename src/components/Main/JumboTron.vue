<template>
  <section class="jumbotron d-flex align-items-center justify-content-center">
    <div class="jumbo-card text-center">
      <h1 class="text-uppercase">Ready <span class="highligth">team</span></h1>
      <p>
        No matter what your company needs, we will be ready to assist you in the
        best possible way.
      </p>
      <a href="#" class="btn btn-blue">get in touch</a>
      <a href="#" class="btn btn-outlined-blue ms-4">read more</a>
    </div>
  </section>
</template>

<script>
export default {
  name: "jumboTron",
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/partials/variables";

.jumbotron {
  height: 80vh;
  background-image: url("../../assets/img/bg-parallax.png");
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
</style>
