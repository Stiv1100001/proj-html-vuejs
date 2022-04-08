<template>
  <footer>
    <div class="container">
      <div class="row row-cols-4 g-4">
        <div class="col">
          <div>
            <img :src="logo" :alt="Logo" class="img-fluid mb-3" />
            <p class="mb-4">
              A Functional HTML Template for Corporate & Business.
            </p>

            <div class="mb-3 d-flex align-items-center">
              <font-awesome-icon icon="fa-solid fa-phone" size="lg" />
              <span class="ms-3">+1 (305) 1234-5678 </span>
            </div>
            <div class="mb-3 d-flex align-items-center">
              <font-awesome-icon icon="fa-solid fa-envelope" size="lg" />
              <span class="ms-3">mail@example.com</span>
            </div>
            <div class="mb-4 d-flex align-items-center">
              <font-awesome-icon icon="fa-solid fa-location-dot" size="lg" />
              <span class="ms-3">Main Avenue, 987</span>
            </div>

            <a href="#" class="btn btn-outlined-blue">Get in touch</a>
          </div>
        </div>
        <div class="col">
          <div class="card rounded rounded-3">
            <h3>About</h3>
            <ul class="p-0 m-0">
              <li v-for="link in aboutList" :key="link" class="list-unstyled">
                <font-awesome-icon icon="fa-solid fa-chevron-right" />
                <a href="#" class="ms-2">{{ link }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col">
          <div class="card rounded rounded-3">
            <h3>Services</h3>
            <ul class="p-0 m-0">
              <li v-for="link in aboutList" :key="link" class="list-unstyled">
                <font-awesome-icon icon="fa-solid fa-chevron-right" />
                <a href="#" class="ms-2">{{ link }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col">
          <div class="card rounded rounded-3">
            <h3>Support</h3>
            <ul class="p-0 m-0">
              <li v-for="link in aboutList" :key="link" class="list-unstyled">
                <font-awesome-icon icon="fa-solid fa-chevron-right" />
                <a href="#" class="ms-2">{{ link }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "MainFooter",
  data: () => ({
    logo: require("../assets/img/svg-7.svg"),
    aboutList: [
      "The Company",
      "Institutional",
      "Social & Events",
      "Innovation",
      "Environment",
      "Technology",
    ],
    servicesList: [
      "Audit & Assurance",
      "Financial Advisory",
      "Analytics M&A",
      "Middle Marketing",
      "Legal Cosulting",
      "regulatory Risk",
    ],
    supportList: [
      "Responsability",
      "Term of Use",
      "About Cookies",
      "Privacy Policy",
      "Accesibility",
      "Information",
    ],
  }),
};
</script>

<style lang="scss" scoped>
@import "../assets/style/partials/variables";

$footer-color: rgb(192, 195, 208);

footer {
  padding: 7rem 0;
  background-color: $woodsmoke;

  .col {
    img {
      width: 10rem;
    }

    .btn-outlined-blue {
      color: $white;
    }
    .card {
      background-color: $shark;

      padding: 2rem 3rem;

      h3 {
        color: $white;
        font-size: 1.5rem;
        font-weight: bold;
      }

      li {
        color: $footer-color;
        margin-bottom: 10px;
        font-size: 1.2rem;
        font-weight: 500;
        a {
          color: $footer-color;
          text-decoration: none;
        }
      }
    }

    p,
    & > div {
      color: $footer-color;
      font-weight: bold;
    }
  }
}
</style>
