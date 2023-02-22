<template>
  <div class="grid grid-cols-2 max-sm:grid-cols-1">
    <div class="w-full h-full lg:pb-28 b-grey-50 max-sm:pt-16">
      <img :src="bannerregister" alt="" />
    </div>
    <div class="flex flex-col pl-20 mt-36 2xl:mt-40 max-sm:mt-16 mr-card">
      <h4 class="title-section font-semibold c-blue-500 mb-6 2xl:mb-9">
        Buat Akun
      </h4>
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
          <div class="flex flex-col gap-1">
            <label for="" class="font-semibold">Password</label>
            <input
              type="password"
              v-model="password"
              name="password"
              class="border-2 border-grey-100 rounded-lg 2xl:rounded-2xl 2xl:h-12 h-10 px-6"
            />
          </div>
          <div class="flex flex-col gap-1">
            <label for="" class="font-semibold">Masukkan Ulang Password</label>
            <input
              type="password"
              v-model="samepassword"
              class="border-2 border-grey-100 rounded-lg 2xl:rounded-2xl 2xl:h-12 h-10 px-6"
            />
          </div>
          <div class="flex flex-col justify-end">
            <div class="relative">
              <input
                type="submit"
                class="py-2 px-4 2xl:py-4 2xl:px-6 text-white b-green-500 font-semibold rounded-lg 2xl:rounded-2xl float-right"
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

export default {
  name: "RegisterView",
  components: {
    ButtonLink,
  },
  data() {
    return { bannerregister: bannerregister };
  },
};
</script>

<style></style>

<script setup>
import { ref } from "vue";
import supabase from "../supabase";
import router from "@/router";

const email = ref("");
const password = ref("");
const name = ref("");
const samepassword = ref("");

async function handleSubmit() {
  try {
    if (name.value === "" || !name.value.trim()) {
      alert("Form nama tidak boleh kosong, silahkan isi terlebih dahulu");
    } else if (email.value === "" || !email.value.trim()) {
      alert("Form email tidak boleh kosong, silahkan isi terlebih dahulu");
    } else if (password.value === "" || !password.value.trim()) {
      alert("Form password tidak boleh kosong, silahkan isi terlebih dahulu");
    } else if (samepassword.value === "" || !samepassword.value.trim()) {
      alert(
        "Form ulangi password tidak boleh kosong, silahkan isi terlebih dahulu"
      );
    } else if (password.value != samepassword.value) {
      alert(
        "Form password dan ulangi password harus sama, silahkan cek terlebih dahulu"
      );
    } else {
      let { users, session, error } = await supabase.auth.signUp({
        email: email.value,
        password: password.value,
      });
      console.log("users", users);
      console.log("session", session);
      console.log("error", error);
      router.push("/success");
    }
  } catch (error) {
    alert(error);
  }
}
</script>
