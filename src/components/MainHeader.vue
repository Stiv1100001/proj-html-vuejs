<template>
  <header class="vw-100">
    <div
      class="container-md d-flex justify-content-between align-items-center py-2"
    >
      <div class="opening">
        <font-awesome-icon icon="fa-solid fa-clock" />
        <span class="ms-1">Open Hours: Mon - Sat - 9:00 - 18:00</span>
      </div>
      <div class="contact d-flex justify-content-around">
        <div class="phone">
          <font-awesome-icon icon="fa-solid fa-phone" />
          <span class="ms-1">+1 (305) 1234-5678</span>
        </div>
        <div class="mail ms-4">
          <font-awesome-icon icon="fa-solid fa-envelope" />
          <span class="ms-1">hello@example.com</span>
        </div>
        <div class="social ms-4">
          <a href="#">
            <font-awesome-icon icon="fa-brands fa-facebook-f" />
          </a>
          <a href="#">
            <font-awesome-icon icon="fa-brands fa-twitter" />
          </a>
          <a href="#">
            <font-awesome-icon icon="fa-brands fa-linkedin-in" />
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainHeader",
};
</script>

<style lang="scss" scoped>
@import "../assets/style/partials/variables";
header {
  background-color: $big-stone;
  color: $white;
  font-size: 1rem;

  .container-md {
    height: 100%;

    .social {
      a {
        margin: 0 1rem;
        color: $white;
        text-decoration: none;
      }
    }
  }
}
</style>
