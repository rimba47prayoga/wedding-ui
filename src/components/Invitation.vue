<template>
  <div class="invitation">
    <div class="top-container">
      <p class="wedding-of" data-aos="fade-right" data-aos-duration="1000">
        The wedding of
      </p>
      <div
        class="mempelai-name-container"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div class="mempelai-name">{{ wedding_information.nn_cpw }}</div>
        <div class="mempelai-name">& {{ wedding_information.nn_cpp }}</div>
      </div>
      <p class="wedding-date" data-aos="fade-right" data-aos-duration="1000">
        - {{ weddingDate }} -
      </p>
    </div>
    <div class="guest-info" data-aos="fade-up" data-aos-duration="1000">
      <vue-qrcode
        class="qr-code"
        value="https://www.1stg.me"
        :color="{ dark: '#D2C4B0', light: '#ffffff' }"
        :margin="2"
      />
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
      if (this.wedding_information.hari_bahagia) {
        const date = new Date(this.wedding_information.hari_bahagia);
        return `${date.getDay()} ${getMonthName(date)} ${date.getFullYear()}`;
      }
      return "";
    },
  },
  methods: {
    openInvitation() {
      this.$emit("openInvitation");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="less">
.invitation {
  padding: 90px 0;
  @media (max-width: 576px) {
    padding: 180px 0 20px 0;
  }

  .top-container {
    @media (max-width: 576px) {
      padding: 0 30px;
    }
    .wedding-of,
    .wedding-date {
      text-align: center;

      @media (max-width: 576px) {
        text-align: left;
      }
    }
    .mempelai-name-container {
      margin-bottom: 20px;
      text-align: center;

      @media (max-width: 576px) {
        text-align: left;
      }
      .mempelai-name {
        font-size: 50px;
        font-family: "Ananda Black", sans-serif;
      }
    }
  }
  .guest-info {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;

    @media (max-width: 576px) {
      justify-content: flex-start;
      padding: 0 30px;
      margin-top: 120px;
    }
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
    @media (max-width: 576px) {
      margin-top: 120px;
    }
    button {
      background: #af8760 !important;
      border-radius: 30px;
      padding: 10px 70px;
      font-size: 16px;
    }
  }
  .logo-container {
    text-align: center;
    margin-top: 70px;
  }
}
</style>
