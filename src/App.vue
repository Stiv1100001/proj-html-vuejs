<template>
  <div id="app">
    <MainHeader />
    <MainBody />
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader.vue";
import MainBody from "./components/MainBody.vue";
export default {
  name: "App",
  components: { MainHeader, MainBody },
};
</script>

<style lang="scss">
@import "@/assets/style/main.scss";
</style>
