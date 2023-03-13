<template>
  <secion class="flex flex-wrap justify-center">
    <div class="relative w-card-container">
      <div class="flex pt-72 pb-56 text-center">
        <div class="flex flex-col justify-center">
          <div class="mb-9">
            <img :src="IconCheck" alt="" class="mx-auto" />
          </div>
          <h4 class="title-section font-semibold c-blue-500 mb-6">
            Terima Kasih Telah Bergabung!
          </h4>
          <div
            class="font-normal leading-7 2xl:leading-9 mb-9 max-sm:w-full 2xl:text-2xl w-1/2 mx-auto"
          >
            Kami akan menghubungi kamu segera setelah aplikasi kami tersedia.
            Kami akan memberikan voucher perawatan untuk venue mu dari mitra
            kami yang bisa ditukar setelah aplikasi tersedia.
          </div>
          <div class="relative text-center">
            <RouterLink to="/">
              <ButtonLink
                class="font-semibold c-green-500 w-auto mx-auto 2xl:text-base"
                text="Kembali Ke Home"
              />
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </secion>
</template>

<script>
import IconCheck from "../../public/icon/IconCheck.svg";

import ButtonLink from "../components/Button/ButtonLink.vue";
import { useStore } from "@/stores/index.js";
import { ref } from "vue";

export default {
  name: "SuccessView",
  components: {
    ButtonLink,
  },
  data() {
    return { IconCheck: IconCheck };
  },
};
</script>

<style></style>
