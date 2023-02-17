<template>
  <div
    class="flex justify-center fixed w-full top-0 z-10"
    :style="{ backgroundColor: backgroundColor }"
  >
    <div class="relative" style="width: 1520px">
      <div class="flex justify-between content-center py-6">
        <img :src="logo" alt="" />

        <div class="flex flex-row gap-4">
          <RouterLink to="/">
            <ButtonLink
              class="py-4 px-6 c-blue-500 font-semibold"
              text="Home"
            />
          </RouterLink>
          <ButtonLink
            class="py-4 px-6 c-blue-500 font-semibold"
            text="Solusi"
          />
          <ButtonLink
            class="py-4 px-6 c-blue-500 font-semibold"
            text="Keuntungan"
          />
          <ButtonLink
            class="py-4 px-6 c-blue-500 font-semibold"
            text="Cara Mulai"
          />
          <RouterLink to="/register">
            <ButtonLink
              class="py-4 px-6 text-white b-green-500 font-semibold rounded-2xl"
              text="Buat Akun"
            />
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "../../../public/icon/logo.svg";
import ButtonLink from "../Button/ButtonLink.vue";

export default {
  name: "header",
  components: {
    ButtonLink,
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },

  data() {
    return {
      backgroundColor: "transparent",
      logo: logo,
    };
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        this.backgroundColor = "#ffffff";
      } else {
        this.backgroundColor = "transparent";
      }
    },
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style></style>
