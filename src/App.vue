<template>
  <div id="app">
    <MainHeader />
    <MainBody />
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader.vue";
import MainBody from "./components/MainBody.vue";
import MainFooter from "./components/MainFooter.vue";
export default {
  name: "App",
  components: { MainHeader, MainBody, MainFooter },
};
</script>

<style lang="scss">
@import "./assets/style/main.scss";
</style>
