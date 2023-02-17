<template>
  <div class="flex justify-center w-full b-blue-50 py-16">
    <div class="relative" style="width: 1520px">
      <div class="grid grid-cols-2 gap-4">
        <div class="relative">
          <img :src="logo" alt="" />
          <div class="font-normal mt-4">
            CIOS adalah aplikasi untuk menyewa venue untuk berbagai
            <br />keperluan seperti photoshoot, workshop, dll.
          </div>
          <div class="c-grey-500 font-normal mt-6">
            © Copyright 2023 CIOS. All rights reserved
          </div>
        </div>
        <div class="relative">
          <div class="grid grid-cols-3 gap-3">
            <div class="flex flex-col gap-4">
              <div class="c-blue-500 font-semibold">Navigasi</div>
              <div class="font-normal">Solusi</div>
              <div class="font-normal">Keuntungan</div>
              <div class="font-normal">Cara Mulai</div>
              <div class="font-normal">Buat Akun</div>
            </div>
            <div class="flex flex-col gap-4">
              <div class="c-blue-500 font-semibold">Social Media</div>
              <div class="font-normal">Instagram</div>
              <div class="font-normal">LinkedIn</div>
              <div class="font-normal">Facebook</div>
              <div class="font-normal">Twitter</div>
            </div>
            <div class="flex flex-col gap-4">
              <div class="c-blue-500 font-semibold">Kontak</div>
              <div class="font-normal">(021) 234567890</div>
              <div class="font-normal">support@cios.com</div>
              <div class="font-normal">
                X Tower Lt. 2 No. 6 Jakarta Pusat, Indonesia
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "../../../public/icon/logo.svg";
export default {
  name: "footer",
  data() {
    return {
      logo: logo,
    };
  },
};
</script>

<style></style>
