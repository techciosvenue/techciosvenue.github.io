<template>
  <button class="flex flex-row gap-4">
    <img v-if="iconleft" :src="iconleft" class="" alt="" />
    <div v-if="text">{{ text }}</div>
    <img v-if="iconright" :src="iconright" class="" alt="" />
  </button>
</template>

<script>
export default {
  name: "ButtonLink",
  props: {
    text: String,
    iconleft: String,
    iconright: String,
  },
  data() {
    return {};
  },
};
</script>
