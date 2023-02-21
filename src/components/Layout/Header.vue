<template>
  <div
    class="flex justify-center fixed w-full top-0 z-10 header"
    :style="{ backgroundColor: backgroundColor }"
  >
    <div class="relative w-card-container">
      <div class="flex justify-between content-center py-4 2xl:py-6">
        <img :src="logo" alt="" class="2xl:w-auto w-20" />
        <div
          class="hidden max-sm:flex content-center flex-wrap gap-4"
          @click="showMenu"
          :class="{ hiddenicon: isMenu }"
        >
          <ButtonLink
            class="2xl:py-4 2xl:px-6 py-2 px-4 c-blue-500 font-semibold"
            text="Menu"
          />
          <img :src="IconBar" alt="" />
        </div>
        <div class="close" v-if="isMenu" @click="hideMenu"></div>
        <div
          class="max-sm:fixed max-sm:w-full max-sm:top-20 max-sm:bg-white max-sm:left-0 max-sm:py-4 max-sm:hidden"
        >
          <div class="flex flex-row gap-4 max-sm:flex-col">
            <RouterLink to="/">
              <ButtonLink
                class="2xl:py-4 2xl:px-6 py-2 px-4 c-blue-500 font-semibold max-sm:border-b max-sm:border-gray-400 max-sm:w-full"
                text="Home"
              />
            </RouterLink>
            <ButtonLink
              class="2xl:py-4 2xl:px-6 py-2 px-4 c-blue-500 font-semibold max-sm:border-b max-sm:border-gray-400 max-sm:w-full"
              text="Solusi"
            />
            <ButtonLink
              class="2xl:py-4 2xl:px-6 py-2 px-4 c-blue-500 font-semibold max-sm:border-b max-sm:border-gray-400 max-sm:w-full"
              text="Keuntungan"
            />
            <ButtonLink
              class="2xl:py-4 2xl:px-6 py-2 px-4 c-blue-500 font-semibold max-sm:border-b max-sm:border-gray-400 max-sm:w-full"
              text="Cara Mulai"
            />
            <RouterLink to="/register" class="max-sm:px-4">
              <ButtonLink
                class="2xl:py-4 2xl:px-6 py-2 px-4 text-white b-green-500 font-semibold rounded-lg 2xl:rounded-2xl max-sm:w-full"
                text="Buat Akun"
              />
            </RouterLink>
          </div>
        </div>
        <div
          class="max-sm:fixed max-sm:w-full max-sm:top-20 max-sm:bg-white max-sm:left-0 max-sm:py-4"
          v-if="isMenu"
        >
          <div class="flex flex-row gap-4 max-sm:flex-col">
            <RouterLink to="/">
              <ButtonLink
                class="2xl:py-4 2xl:px-6 py-2 px-4 c-blue-500 font-semibold max-sm:border-b max-sm:border-gray-400 max-sm:w-full"
                text="Home"
                @click="hideMenu"
              />
            </RouterLink>
            <ButtonLink
              class="2xl:py-4 2xl:px-6 py-2 px-4 c-blue-500 font-semibold max-sm:border-b max-sm:border-gray-400 max-sm:w-full"
              text="Solusi"
              @click="hideMenu"
            />
            <ButtonLink
              class="2xl:py-4 2xl:px-6 py-2 px-4 c-blue-500 font-semibold max-sm:border-b max-sm:border-gray-400 max-sm:w-full"
              text="Keuntungan"
              @click="hideMenu"
            />
            <ButtonLink
              class="2xl:py-4 2xl:px-6 py-2 px-4 c-blue-500 font-semibold max-sm:border-b max-sm:border-gray-400 max-sm:w-full"
              text="Cara Mulai"
              @click="hideMenu"
            />
            <RouterLink to="/register" class="max-sm:px-4">
              <ButtonLink
                class="2xl:py-4 2xl:px-6 py-2 px-4 text-white b-green-500 font-semibold rounded-lg 2xl:rounded-2xl max-sm:w-full"
                text="Buat Akun"
                @click="hideMenu"
              />
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "../../../public/icon/logo.svg";
import IconBar from "../../../public/icon/IconBar.svg";
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
      isMenu: false,
      backgroundColor: "transparent",
      logo: logo,
      IconBar: IconBar,
    };
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        this.backgroundColor = "#ffffff";
      } else {
        this.backgroundColor = "transparent";
      }
    },
    showMenu() {
      this.isMenu = true;
    },
    hideMenu() {
      this.isMenu = false;
    },
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style>
.hiddenicon {
  display: none !important;
}
.close {
  position: relative;
  display: block;
  padding: 12px 16px;
}
.close:before,
.close:after {
  position: absolute;
  content: " ";
  height: 20px;
  width: 3px;
  background-color: #22578d;
  border-radius: 50px;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}
</style>
