<template>
  <div class="invitation">
    <p class="text-center">The wedding of</p>
    <div class="mempelai-name-container">
      <div class="mempelai-name">{{ wedding_information.nn_cpw }}</div>
      <div class="mempelai-name">& {{ wedding_information.nn_cpp }}</div>
    </div>
    <p class="text-center">- {{ weddingDate }} -</p>
    <div class="guest-info">
      <vue-qrcode class="qr-code" value="https://www.1stg.me" />
      <div class="guest-text">
        <div class="guest-name">{{ guest_information.guest_name }}</div>
        <div class="guest-address">{{ guest_information.guest_address }}</div>
      </div>
    </div>
    <div class="bottom-container">
      <b-button @click="openInvitation">Buka Undangan</b-button>
    </div>
    <div class="logo-container">
      <img src="@/assets/logo-atera.png" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import VueQrcode from "vue-qrcode";

import { getMonthName } from "@/utils";

export default {
  components: {
    VueQrcode,
  },
  computed: {
    ...mapState(["wedding_information"]),
    ...mapState(["guest_information"]),
    weddingDate() {
      const date = new Date(this.wedding_information.hari_bahagia);
      return `${date.getDay()} ${getMonthName(date)} ${date.getFullYear()}`;
    },
  },
  methods: {
    openInvitation() {
      this.$emit("openInvitation");
    },
  },
};
</script>

<style lang="less">
.invitation {
  padding: 90px 0;
  .mempelai-name-container {
    margin-bottom: 20px;
    .mempelai-name {
      font-size: 50px;
      font-family: "Ananda Black", sans-serif;
      text-align: center;
    }
  }
  .guest-info {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    .qr-code {
      width: 75px;
    }
    .guest-text {
      margin-left: 10px;
      .guest-name {
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
  .bottom-container {
    margin-top: 50px;
    text-align: center;
    button {
      background: #af8760 !important;
      border-radius: 30px;
      padding: 10px 70px;
      font-size: 16px;
    }
  }
  .logo-container {
    text-align: center;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
