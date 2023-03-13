<template>
  <div class="flex justify-center w-full b-blue-50 py-10">
    <div class="relative w-card-container">
      <div
        class="grid max-sm:grid-cols-1 grid-cols-2 gap-4 max-sm:gap-10 items-center"
      >
        <div class="relative max-sm:order-last">
          <div class="flex align-top content-start justify-start gap-8">
            <img :src="logo" alt="" />
            <div>
              <div class="font-normal mt-4">
                CIOS adalah aplikasi untuk menyewa venue untuk berbagai
                <br />keperluan seperti photoshoot, workshop, dll.
              </div>
              <div class="c-grey-500 font-normal mt-6">
                © Copyright 2023 CIOS. All rights reserved
              </div>
            </div>
          </div>
        </div>
        <div class="relative">
          <!-- <div class="grid grid-cols-3 max-sm:grid-cols-1 gap-3 max-sm:gap-10">
            <div class="flex flex-col gap-4 max-sm:gap-2">
              <div class="c-blue-500 font-semibold">Navigasi</div>
              <div class="font-normal">Solusi</div>
              <div class="font-normal">Keuntungan</div>
              <div class="font-normal">Cara Mulai</div>
              <div class="font-normal">Buat Akun</div>
            </div>
            <div class="flex flex-col gap-4 max-sm:gap-2">
              <div class="c-blue-500 font-semibold">Social Media</div>
              <div class="font-normal">Instagram</div>
              <div class="font-normal">LinkedIn</div>
              <div class="font-normal">Facebook</div>
              <div class="font-normal">Twitter</div>
            </div>
            <div class="flex flex-col gap-4 max-sm:gap-2">
              <div class="c-blue-500 font-semibold">Kontak</div>
              <div class="font-normal">(021) 234567890</div>
              <div class="font-normal">support@cios.com</div>
              <div class="font-normal">
                X Tower Lt. 2 No. 6 Jakarta Pusat, Indonesia
              </div>
            </div>
          </div> -->
          <div class="flex flex-row gap-4 justify-end">
            <ButtonLink class="c-grey-500" text="Solusi" />
            <ButtonLink class="c-grey-500" text="Keuntungan" />
            <ButtonLink class="c-grey-500" text="Cara mulai" />
            <ButtonLink class="c-grey-500" text="Buat Akun" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonLink from "../Button/ButtonLink.vue";

import logo from "../../../public/icon/logo.svg";
export default {
  name: "footer",
  components: {
    ButtonLink,
  },
  data() {
    return {
      logo: logo,
    };
  },
};
</script>

<style></style>
