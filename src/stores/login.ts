import { ref, computed } from "vue";
import { defineStore } from "pinia";
import http from "@/helpers/http";

export const useloginStore = defineStore("login", {
  state: () => ({ numTest: 0, stringTest: "thodeptraivailoz" }),
  getters: {
    doubleCount: (state) => state.numTest * 2,
  },
  actions: {
    async login(memberAccount: string, memberPassword: string) {
      return http
        .post("/signin", {
          memberAccount,
          memberPassword,
        })
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
