<template>
  <section class="touch">
    <div class="container-md">
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
</template>

<script>
export default {
  name: "TouchSection",
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/partials/variables";

.touch {
  .container-md {
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
