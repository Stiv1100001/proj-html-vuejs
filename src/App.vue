<template>
  <div id="app">
    <MainHeader />
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader.vue";
export default {
  name: "App",
  components: { MainHeader },
};
</script>

<style lang="scss">
@import "@/assets/style/main.scss";
</style>
