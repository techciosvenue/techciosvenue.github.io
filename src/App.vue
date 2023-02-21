<script>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Layout/Header.vue";
import Footer from "./components/Layout/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  name: "router",
  component: {
    RouterLink,
    RouterView,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <div class="w-page">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>
