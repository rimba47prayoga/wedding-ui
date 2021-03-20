<template>
  <div
    class="akad"
    :style="{
      'background-image': 'url(' + background + ')',
    }"
  >
    <div class="nav-title" data-aos="zoom-in" data-aos-duration="1000">
      {{ title }}
    </div>
    <div class="content" data-aos="zoom-in" data-aos-duration="1000">
      <div class="date">{{ akad_date }}</div>
      <div class="session-time">Session II, 5.30 - 6.30 pm</div>
      <div class="address">
        {{ akad_info.location_info }}
      </div>
    </div>
    <div class="bottom-container" data-aos="zoom-in" data-aos-duration="1000">
      <b-button :href="akad_info.link_gmaps">Lihat Peta</b-button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { getDayName, getMonthName } from "@/utils";

export default {
  props: {
    background: String,
    title: String
  },
  computed: {
    ...mapState(["wedding_information"]),
    akad_info() {
      return this.wedding_information.akad;
    },
    akad_date() {
      const date = new Date(this.akad_info.start_schedule);
      const day = getDayName(date);
      const month = getMonthName(date);
      return `${day}, ${date.getDay()} ${month}, ${date.getFullYear()}`;
    },
  },
};
</script>

<style lang="less">
.akad {
  max-width: 850px !important;
  margin: 0px auto;
  padding: 20px 30px;
  background-repeat: no-repeat;
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
    a.btn,
    button {
      background: #af8760 !important;
      border-radius: 20px;
      padding: 5px 45px;
      font-size: 16px;
    }
  }
}
</style>
