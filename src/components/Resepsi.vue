<template>
  <div
    class="resepsi"
    :style="{
      'background-image': 'url(' + background + ')',
    }"
  >
    <div class="nav-title" data-aos="fade-down" data-aos-duration="1000">
      Resepsi
    </div>
    <div class="content" data-aos="zoom-in" data-aos-duration="1000">
      <div class="date">{{ resepsi_date }}</div>
      <div class="session-time">Session II, 5.30 - 6.30 pm</div>
      <div class="address">
        {{ resepsi_info.location_info }}
      </div>
    </div>
    <div class="bottom-container" data-aos="zoom-in" data-aos-duration="1000">
      <b-button :href="resepsi_info.link_gmaps">Lihat Peta</b-button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { getDayName, getMonthName } from "@/utils";

export default {
  props: {
    background: String,
  },
  computed: {
    ...mapState(["wedding_information"]),
    resepsi_info() {
      return this.wedding_information.resepsi;
    },
    resepsi_date() {
      const date = new Date(this.resepsi_info.start_schedule);
      const day = getDayName(date);
      const month = getMonthName(date);
      return `${day}, ${date.getDay()} ${month}, ${date.getFullYear()}`;
    },
  },
};
</script>

<style lang="less">
.resepsi {
  max-width: 850px !important;
  margin: 0px auto;
  padding: 20px 30px;
  .nav-title {
    font-size: 36px;
    font-family: "Ananda Black", sans-serif;
    margin-bottom: 25px;
    text-align: center;
  }
  .content {
    text-align: center;

    .date {
      font-size: 20px;
    }
    .session-time {
      color: #828282;
      font-size: 19px;
    }
    .address {
      color: #828282;
      font-size: 15px;
    }
  }
  .bottom-container {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    a.btn {
      background: #af8760 !important;
      border-radius: 20px;
      padding: 5px 45px;
      font-size: 16px;
    }
  }
}
</style>
