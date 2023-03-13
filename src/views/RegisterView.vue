<template>
  <div class="grid grid-cols-2 max-sm:grid-cols-1">
    <div class="w-full h-full lg:pb-28 b-grey-50 max-sm:pt-16">
      <img :src="bannerregister" alt="" />
    </div>
    <div class="flex flex-col pl-20 mt-36 2xl:mt-36 max-sm:mt-16 mr-card">
      <h4 class="title-section font-semibold c-blue-500 mb-4 2xl:mb-4">
        Daftar Waiting List
      </h4>
      <div class="mb-4">
        Jangan lewatkan untuk menjadi yang pertama mendapatkan akses aplikasi
        CIIOS. Dapatkan manfaat eksklusif seperti diskon untuk pemesanan pertama
        atau voucher maintenance untuk venue-mu.
      </div>
      <form @submit.prevent="handleSubmit">
        <div class="flex flex-col gap-4 2xl:gap-6">
          <div class="flex flex-col gap-1">
            <label for="" class="font-semibold">Nama</label>
            <input
              type="text"
              v-model="name"
              name="name"
              class="border-2 border-grey-100 rounded-lg 2xl:rounded-2xl 2xl:h-12 h-10 px-6"
            />
          </div>
          <div class="flex flex-col gap-1">
            <label for="" class="font-semibold">E-Mail</label>
            <input
              type="email"
              v-model="email"
              name="email"
              class="border-2 border-grey-100 rounded-lg 2xl:rounded-2xl 2xl:h-12 h-10 px-6"
            />
          </div>
          <div class="flex flex-col gap-1 custom-radio">
            <label for="" class="font-semibold">Kamu sebagai...</label>
          </div>

          <div class="flex flex-col gap-1 custom-radio">
            <input
              type="radio"
              id="penyewa"
              name="status"
              v-model="status"
              value="penyewa"
              checked
            />
            <label for="penyewa">Penyewa</label>
          </div>
          <div class="flex flex-col gap-1 custom-radio">
            <input
              type="radio"
              id="venueowner"
              name="status"
              v-model="status"
              value="venueowner"
            />
            <label for="venueowner">Venue Owner</label>
          </div>
          <div class="flex flex-col justify-end">
            <div class="relative">
              <input
                type="submit"
                class="py-2 px-4 2xl:py-4 2xl:px-6 text-white b-green-500 font-semibold rounded-lg 2xl:rounded-2xl float-right cursor-pointer"
                value="Buat Akun"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import ButtonLink from "../components/Button/ButtonLink.vue";
import bannerregister from "../../public/img/bannerregister.png";
import { useStore } from "@/stores/index.js";
import { ref } from "vue";

export default {
  name: "register",
  components: {
    ButtonLink,
  },
  data() {
    return {
      store: useStore(),
      email: ref(""),
      status: "penyewa",
      bannerregister: bannerregister,
    };
  },
  setup() {
    const store = useStore();

    return { store };
  },
  methods: {
    handleSubmit() {
      console.log(this.name);
      if (this.name === "" || this.name === undefined) {
        alert("Form nama tidak boleh kosong, silahkan isi terlebih dahulu");
      } else if (this.email === "" || !this.email.trim()) {
        alert("Form email tidak boleh kosong, silahkan isi terlebih dahulu");
      } else {
        this.store.inputList(this.name, this.email, this.status);
      }
    },
  },
};
</script>
<style>
[type="radio"]:checked,
[type="radio"]:not(:checked) {
  position: absolute;
  left: -9999px;
}
[type="radio"]:checked + label,
[type="radio"]:not(:checked) + label {
  position: relative;
  padding-left: 28px;
  cursor: pointer;
  line-height: 20px;
  display: inline-block;
  color: #666;
}
[type="radio"]:checked + label:before,
[type="radio"]:not(:checked) + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 20px;
  height: 20px;
  border: 2px solid #22828d;
  border-radius: 100%;
  background: #fff;
}
[type="radio"]:checked + label:after,
[type="radio"]:not(:checked) + label:after {
  content: "";
  border: 6px solid #22828d;
  width: 20px;
  height: 20px;
  background: #fff;
  /* border-width: 7.5px; */
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 100%;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
[type="radio"]:not(:checked) + label:after {
  opacity: 0;
  -webkit-transform: scale(0);
  transform: scale(0);
}
[type="radio"]:checked + label:after {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}
</style>
