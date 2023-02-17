<template>
  <secion class="flex flex-wrap justify-center">
    <div class="relative" style="width: 1520px">
      <div
        class="grid grid-cols-2"
        style="padding-top: 227px; padding-bottom: 213px"
      >
        <div class="flex flex-col">
          <div class="mb-9">
            <img :src="IconCheck" alt="" />
          </div>
          <h4 class="title-section font-semibold c-blue-500 mb-6">
            Terima Kasih!
          </h4>
          <div class="font-normal leading-9 mb-9 w-10/12">
            Kami senang dapat membantu kamu untuk <br />menemukan venue yang
            cocok untuk keperluan kamu.
          </div>
          <div class="relative">
            <RouterLink to="/">
              <ButtonLink
                class="font-semibold c-green-500"
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
