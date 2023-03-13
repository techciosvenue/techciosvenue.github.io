<script setup></script>

<template>
  <div>
    <secion class="flex flex-wrap justify-center b-blue-50">
      <div class="relative w-card-container">
        <div
          class="grid grid-cols-2 max-sm:grid-cols-1 pb-14 pt-40 max-sm:pt-32"
        >
          <div class="flex flex-wrap content-center max-sm:text-center">
            <h1
              class="title-banner font-semibold c-blue-500 w-10/12 mb-6 max-sm:w-full"
            >
              Temukan Venue untuk Kebutuhan Kamu Selanjutnya
            </h1>
            <div
              class="desc-banner text-base font-normal w-10/12 max-sm:w-full"
            >
              Cari dan sewa venue dengan mudah dan cepat menggunakan aplikasi
              Cios.
            </div>
            <div class="mt-20 max-sm:text-center max-sm:w-full max-sm:mb-16">
              <RouterLink to="/register">
                <ButtonLink
                  class="py-4 px-6 2xl:py-4 2xl:px-6 text-white b-green-500 font-semibold rounded-lg 2xl:rounded-2xl max-sm:m-auto whitespace-nowrap"
                  text="Join Waiting List"
                />
              </RouterLink>
            </div>
          </div>
          <div class="">
            <img :src="banner" alt="" />
          </div>
        </div>
        <div
          class="grid grid-cols-4 max-sm:grid-cols-1 gap-4 relative w-full pb-14"
        >
          <div
            class="flex flex-row gap-6 py-4 px-9 font-semibold content-center align-middle bg-white c-blue-500 rounded-lg 2xl:rounded-2xl"
          >
            <img :src="Workshop" alt="" />
            Workshop
          </div>
          <div
            class="flex flex-row gap-6 py-4 px-9 font-semibold content-center align-middle bg-white c-blue-500 rounded-lg 2xl:rounded-2xl"
          >
            <img :src="Photoshoot" alt="" />
            Photoshoot
          </div>
          <div
            class="flex flex-row gap-6 py-4 px-9 font-semibold content-center align-middle bg-white c-blue-500 rounded-lg 2xl:rounded-2xl"
          >
            <img :src="Videoshoot" alt="" />
            Videoshoot
          </div>
          <div
            class="flex flex-row gap-6 py-4 px-9 font-semibold content-center align-middle bg-white c-blue-500 rounded-lg 2xl:rounded-2xl"
          >
            <img :src="Meeting" alt="" />
            Meeting
          </div>
          <div
            class="flex flex-row gap-6 py-4 px-9 font-semibold content-center align-middle bg-white c-blue-500 rounded-lg 2xl:rounded-2xl"
          >
            <img :src="LiveMusic" alt="" />
            Live Music
          </div>
          <div
            class="flex flex-row gap-6 py-4 px-9 font-semibold content-center align-middle bg-white c-blue-500 rounded-lg 2xl:rounded-2xl"
          >
            <img :src="Pesta" alt="" />
            Pesta
          </div>
          <div
            class="flex flex-row gap-6 py-4 px-9 font-semibold content-center align-middle bg-white c-blue-500 rounded-lg 2xl:rounded-2xl"
          >
            <img :src="Gathering" alt="" />
            Gathering
          </div>
          <div
            class="flex flex-row gap-6 py-4 px-9 font-semibold content-center align-middle bg-white c-blue-500 rounded-lg 2xl:rounded-2xl"
          >
            <img :src="Wedding" alt="" />
            Wedding
          </div>
        </div>
      </div>
    </secion>
    <secion class="flex flex-wrap justify-center">
      <div class="relative w-card-container">
        <div class="flex flex-col mt-28 max-sm:mt-16 mb-40">
          <h4
            class="title-section font-semibold c-blue-500 text-center mb-28 max-sm:mb-16"
          >
            Sewa Venue Menjadi Lebih Mudah di CIOS
          </h4>
          <div class="grid grid-cols-2 max-sm:grid-cols-1">
            <div
              class="flex flex-wrap content-center max-sm:order-1 max-sm:mb-16"
            >
              <div class="font-semibold c-blue-500 text-base 2xl:text-2xl mb-6">
                Sebagai Owner, kamu bisa...
              </div>
              <div
                class="desc-banner text-base 2xl:text-2xl font-normal w-10/12"
              >
                Mengatur venue yang kamu punya, menerima booking request dan
                melihat report riwayat booking dalam aplikasi CIOS.
              </div>
            </div>
            <div class="flex justify-start mb-44 max-sm:mb-16 max-sm:order-2">
              <img :src="banner2" alt="" />
            </div>
            <div class="flex justify-end max-sm:order-last">
              <img :src="banner3" alt="" />
            </div>
            <div
              class="flex flex-wrap content-center ml-32 max-sm:order-3 max-sm:ml-0 max-sm:mb-16"
            >
              <div class="font-semibold c-blue-500 text-base 2xl:text-2xl mb-6">
                Sebagai Penyewa, kamu bisa...
              </div>
              <div class="desc-banner text-base 2xl:text-2xl font-normal">
                Menemukan venue yang cocok untuk kebutuhan, melihat detail venue
                sampai melakukan booking lewat aplikasi CIOS.
              </div>
            </div>
          </div>
        </div>
      </div>
    </secion>
    <secion class="flex flex-wrap justify-center b-blue-50">
      <div class="relative w-card-container">
        <div class="flex flex-col mt-28 max-sm:mt-16 mb-40">
          <h4
            class="title-section font-semibold c-green-500 text-center mb-28 max-sm:mb-16"
          >
            Sewa Venue Menjadi Lebih Mudah di CIOS
          </h4>
          <div class="grid grid-cols-4 max-sm:grid-cols-1 gap-4">
            <div
              class="bg-white rounded-lg 2xl:rounded-2xl px-10 py-12 card-solution"
            >
              <div class="flex flex-col gap-6">
                <div>
                  <img :src="Jam" alt="" />
                </div>
                <div class="c-green-500 font-semibold text-base 2xl:text-2xl">
                  Sewa Perjam
                </div>
                <div class="font-normal 2xl:leading-7 c-grey-900">
                  Penyewa tidak perlu menyewa venue untuk satu hari jika yang
                  dibutuhkan hanya beberapa jam.
                </div>
              </div>
            </div>
            <div
              class="bg-white rounded-lg 2xl:rounded-2xl px-10 py-12 card-solution"
            >
              <div class="flex flex-col gap-6">
                <div>
                  <img :src="Opsi" alt="" />
                </div>
                <div class="c-green-500 font-semibold text-base 2xl:text-2xl">
                  Opsi yang Beragam
                </div>
                <div class="font-normal 2xl:leading-7 c-grey-900">
                  Owner bisa mendaftarkan beragam venue. Penyewa bisa dengan
                  mudah menelurusi opsi venue yang beragam.
                </div>
              </div>
            </div>
            <div
              class="bg-white rounded-lg 2xl:rounded-2xl px-10 py-12 card-solution"
            >
              <div class="flex flex-col gap-6">
                <div>
                  <img :src="Informasi" alt="" />
                </div>
                <div class="c-green-500 font-semibold text-base 2xl:text-2xl">
                  Informasi Real-time
                </div>
                <div class="font-normal 2xl:leading-7 c-grey-900">
                  Owner bisa mengupdate venuenya dan penyewa bisa langsung
                  melihat ketersediaan venue via aplikasi.
                </div>
              </div>
            </div>
            <div
              class="bg-white rounded-lg 2xl:rounded-2xl px-10 py-12 card-solution"
            >
              <div class="flex flex-col gap-6">
                <div>
                  <img :src="Management" alt="" />
                </div>
                <div class="c-green-500 font-semibold text-base 2xl:text-2xl">
                  Management Dashboard
                </div>
                <div class="font-normal 2xl:leading-7 c-grey-900">
                  Owner dapat langsung memantau dan mengelola performa melalui
                  dashboard yang ada di aplikasi.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </secion>
    <secion class="flex flex-wrap justify-center">
      <div class="relative w-card-container">
        <div class="flex flex-col mt-28 max-sm:mt-16 mb-40 max-sm:mb-0">
          <div class="grid grid-cols-2 max-sm:grid-cols-1">
            <div
              class="flex flex-col justify-start gap-4 w-8/12 max-sm:w-full max-sm:mb-16"
            >
              <div class="flex justify-center gap-4">
                <div>
                  <img :src="banner4_1" alt="" />
                </div>
                <div>
                  <img :src="banner4_2" alt="" class="mt-20" />
                </div>
              </div>
              <div class="flex justify-center">
                <img :src="banner4_3" alt="" class="max-sm:w-1/2" />
              </div>
            </div>
            <div class="flex flex-col gap-16">
              <div class="flex flex-col">
                <div
                  class="c-blue-500 text-base 2xl:text-2xl max-sm:text-2xl font-semibold mb-14 max-sm:text-center"
                >
                  Cara Sewa Venue Lewat CIOS
                </div>
                <div
                  class="flex flex-col py-4 max-sm:py-0 text-base px-6 max-sm:px-0 gap-14"
                >
                  <div class="flex flex-row gap-6">
                    <div>
                      <div
                        class="max-sm:w-6 max-sm:h-6 w-9 h-9 max-sm:text-xs text-center border flex flex-wrap content-center justify-center border-grey-900 rounded-full"
                      >
                        1
                      </div>
                    </div>
                    <div class="flex flex-col gap-3">
                      <div class="c-grey-900 font-semibold">
                        Buat Akun di CIOS
                      </div>
                      <div class="font-normal">
                        Klik tombol “<span class="font-semibold c-green-500"
                          >Buat Akun</span
                        >” untuk membuat akun di Aplikasi CIOS
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-row gap-6">
                    <div>
                      <div
                        class="max-sm:w-6 max-sm:h-6 w-9 h-9 max-sm:text-xs text-center border flex flex-wrap content-center justify-center border-grey-900 rounded-full"
                      >
                        2
                      </div>
                    </div>
                    <div class="flex flex-col gap-3">
                      <div class="c-grey-900 font-semibold">
                        Cari Venue yang Kamu Butuhkan
                      </div>
                      <div class="font-normal">
                        Kamu bisa cari venue yang kamu butuhkan. Kamu juga bisa
                        pakai fitur “Search” dan “Filter” untuk memudahkan kamu
                        dalam mencari venue.
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-row gap-6">
                    <div>
                      <div
                        class="max-sm:w-6 max-sm:h-6 w-9 h-9 max-sm:text-xs text-center border flex flex-wrap content-center justify-center border-grey-900 rounded-full"
                      >
                        3
                      </div>
                    </div>
                    <div class="flex flex-col gap-3">
                      <div class="c-grey-900 font-semibold">
                        Book Venue yang Diinginkan
                      </div>
                      <div class="font-normal">
                        Jika kamu sudah menemukan venue yang cocok, kamu bisa
                        book venue dengan memasukkan waktu yang diinginkan dan
                        informasi pendukung lainnya.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col">
                <div
                  class="c-blue-500 text-base 2xl:text-2xl max-sm:text-2xl font-semibold mb-14 max-sm:text-center"
                >
                  Cara Mendaftarkan Venue di CIOS
                </div>
                <div
                  class="flex flex-col py-4 text-base px-6 max-sm:px-0 gap-14"
                >
                  <div class="flex flex-row gap-6">
                    <div>
                      <div
                        class="max-sm:w-6 max-sm:h-6 w-9 h-9 max-sm:text-xs text-center border flex flex-wrap content-center justify-center border-grey-900 rounded-full"
                      >
                        1
                      </div>
                    </div>
                    <div class="flex flex-col gap-3">
                      <div class="c-grey-900 font-semibold">
                        Buat Akun di CIOS
                      </div>
                      <div class="font-normal">
                        Klik tombol “<span class="font-semibold c-green-500"
                          >Buat Akun</span
                        >” untuk membuat akun di Aplikasi CIOS
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-row gap-6">
                    <div>
                      <div
                        class="max-sm:w-6 max-sm:h-6 w-9 h-9 max-sm:text-xs text-center border flex flex-wrap content-center justify-center border-grey-900 rounded-full"
                      >
                        2
                      </div>
                    </div>
                    <div class="flex flex-col gap-3">
                      <div class="c-grey-900 font-semibold">
                        Daftarkan Venue
                      </div>
                      <div class="font-normal">
                        Masukkan informasi yang dibutuhkan. Jangan lupa sertakan
                        foto yang menarik dari venue kamu.
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-row gap-6">
                    <div>
                      <div
                        class="max-sm:w-6 max-sm:h-6 w-9 h-9 max-sm:text-xs text-center border flex flex-wrap content-center justify-center border-grey-900 rounded-full"
                      >
                        3
                      </div>
                    </div>
                    <div class="flex flex-col gap-3">
                      <div class="c-grey-900 font-semibold">
                        Set Jadwal dan Harga
                      </div>
                      <div class="font-normal">
                        Tentukan ketersediaan jadwal dan harga. Atur persetujuan
                        venue apakah ingin dilakukan secara otomatis atau
                        manual.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </secion>
    <secion class="flex flex-wrap justify-center">
      <div class="relative w-card-container">
        <div
          class="flex flex-col mt-28 mb-40 max-sm:mt-16 max-sm:mb-16 linier-blue-900 rounded-lg 2xl:rounded-2xl p-14 max-sm:p-6 max-sm:text-center"
        >
          <div class="grid grid-cols-2 max-sm:grid-cols-1 gap-14">
            <div class="flex flex-col justify-center">
              <img :src="banner5" alt="" />
            </div>
            <div class="flex flex-col justify-center">
              <h4 class="title-section font-semibold text-white mb-6">
                Jangan Lewatkan Untuk Menjadi Yang Pertama!
              </h4>
              <div
                class="text-base 2xl:text-2xl c-grey-50 font-normal"
                style="line-height: 150%"
              >
                Dapatkan manfaat eksklusif seperti diskon untuk pemesanan
                pertama atau voucher maintenance untuk venue-mu.
              </div>
              <div class="mt-14 max-sm:text-center max-sm:w-full">
                <RouterLink to="/register">
                  <ButtonLink
                    class="py-4 px-6 2xl:py-4 2xl:px-6 text-white b-green-500 font-semibold rounded-lg 2xl:rounded-2xl max-sm:m-auto whitespace-nowrap"
                    text="Join Waiting List"
                  />
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </secion>
  </div>
</template>
<script>
import banner from "../../public/img/banner.png";
import banner2 from "../../public/img/banner2.png";
import banner3 from "../../public/img/banner3.png";
import banner4_1 from "../../public/img/banner4_1.png";
import banner4_2 from "../../public/img/banner4_2.png";
import banner4_3 from "../../public/img/banner4_3.png";
import banner5 from "../../public/img/banner5.png";
import Workshop from "../../public/icon/Workshop.svg";
import Photoshoot from "../../public/icon/Photoshoot.svg";
import Videoshoot from "../../public/icon/Videoshoot.svg";
import Meeting from "../../public/icon/Meeting.svg";
import LiveMusic from "../../public/icon/LiveMusic.svg";
import Pesta from "../../public/icon/Pesta.svg";
import Gathering from "../../public/icon/Gathering.svg";
import Wedding from "../../public/icon/Wedding.svg";
import Jam from "../../public/icon/Jam.svg";
import Opsi from "../../public/icon/Opsi.svg";
import Informasi from "../../public/icon/Informasi.svg";
import Management from "../../public/icon/Management.svg";

import ButtonLink from "../components/Button/ButtonLink.vue";
import { useStore } from "@/stores/index.js";

export default {
  name: "HomeView",
  components: { ButtonLink },
  data() {
    return {
      banner: banner,
      banner2: banner2,
      banner3: banner3,
      banner4_1: banner4_1,
      banner4_2: banner4_2,
      banner4_3: banner4_3,
      banner5: banner5,
      Workshop: Workshop,
      Photoshoot: Photoshoot,
      Videoshoot: Videoshoot,
      Meeting: Meeting,
      LiveMusic: LiveMusic,
      Pesta: Pesta,
      Gathering: Gathering,
      Wedding: Wedding,
      Jam: Jam,
      Opsi: Opsi,
      Informasi: Informasi,
      Management: Management,
    };
  },
  setup() {
    const store = useStore();

    return { store };
  },
};
</script>
