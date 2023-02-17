<template>
  <div class="grid grid-cols-2">
    <img :src="bannerregister" alt="" />
    <div class="flex flex-col pl-20 mt-40" style="margin-right: 200px">
      <h4 class="title-section font-semibold c-blue-500 mb-9">Buat Akun</h4>
      <form @submit.prevent="handleSubmit">
        <div class="flex flex-col gap-6">
          <div class="flex flex-col gap-1">
            <label for="" class="font-semibold">Nama</label>
            <input
              type="text"
              v-model="name"
              name="name"
              class="border-2 border-grey-100 rounded-2xl h-12 px-6"
            />
          </div>
          <div class="flex flex-col gap-1">
            <label for="" class="font-semibold">E-Mail</label>
            <input
              type="email"
              v-model="email"
              name="email"
              class="border-2 border-grey-100 rounded-2xl h-12 px-6"
            />
          </div>
          <div class="flex flex-col gap-1">
            <label for="" class="font-semibold">Password</label>
            <input
              type="password"
              v-model="password"
              name="password"
              class="border-2 border-grey-100 rounded-2xl h-12 px-6"
            />
          </div>
          <div class="flex flex-col gap-1">
            <label for="" class="font-semibold">Masukkan Ulang Password</label>
            <input
              type="password"
              class="border-2 border-grey-100 rounded-2xl h-12 px-6"
            />
          </div>
          <div class="flex flex-col justify-end">
            <div class="relative">
              <input
                type="submit"
                class="py-4 px-6 text-white b-green-500 font-semibold rounded-2xl float-right"
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

async function handleSubmit() {
  try {
    let { users, session, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    });
    console.log("users", users);
    console.log("session", session);
    console.log("error", error);
    router.push("/success");

    // if (user) {
    //   if (user.id) {
    //     //user successfully created
    //     //add user profile to database
    //     try {
    //       let { data, error } = await supabase.from("user_detail").insert([
    //         {
    //           user_id: user.id,
    //           name: name.value,
    //         },
    //       ]);
    //       if (data) {
    //         alert("new user has been added");
    //         router.push("/");
    //       }
    //       if (error) {
    //         alert(error.message);
    //       }
    //     } catch (error) {
    //       alert(error);
    //     }
    //   }
    //   console.log(user);
    // }
    // if (session) {
    //   // alert(session)
    //   console.log(session);
    // }
    // if (error) {
    //   alert(error.message);
    // }
  } catch (error) {
    alert(error);
  }
}
</script>
