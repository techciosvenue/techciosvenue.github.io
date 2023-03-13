import { defineStore } from "pinia";
import action from "./actions.js";

export const useStore = defineStore({
  id: "users",
  state: () => ({
    authuser: [],
    datalist: [],
  }),
  actions: action,
});
