<template>
  <main>
    <NavBar />

    <JumboTron />

    <ServicesSection />

    <CompanySection />

    <ActionsSection />

    <ResultSection />

    <TouchSection />
  </main>
</template>

<script>
import ServicesSection from "./Main/ServicesSection.vue";
import CompanySection from "./Main/CompanySection.vue";
import ActionsSection from "./Main/ActionsSection.vue";
import ResultSection from "./Main/ResultSection.vue";
import TouchSection from "./Main/TouchSection.vue";
import NavBar from "./Main/NavBar.vue";
import JumboTron from "./Main/JumboTron.vue";
export default {
  name: "MainBody",
  components: {
    ServicesSection,
    CompanySection,
    ActionsSection,
    ResultSection,
    TouchSection,
    NavBar,
    JumboTron,
  },
};
</script>

<style lang="scss" scoped></style>
