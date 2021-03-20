<template>
  <div
   class="countdown"
   :style="{
      'background-image': 'url(' + background + ')',
    }"
  >
   <div class="nav-title">{{ title }}</div>
   <p class="text">Sampai jumpa di hari bahagia kami</p>
   <vue-countdown :time="getTime" v-slot="{ days, hours, minutes, seconds }">
    <div class="time-container">
     <div class="time-item">
      <div class="_time">{{ days }}</div>
      <div class="_time-text">HARI</div>
     </div>
     <div class="time-item">
      <div class="_time">{{ hours }}</div>
      <div class="_time-text">JAM</div>
     </div>
     <div class="time-item">
      <div class="_time">{{ minutes }}</div>
      <div class="_time-text">MENIT</div>
     </div>
     <div class="time-item">
      <div class="_time">{{ seconds }}</div>
      <div class="_time-text">DETIK</div>
     </div>
    </div>
  </vue-countdown>
  </div>
</template>

<script>
import { mapState } from "vuex";
import VueCountdown from '@chenfengyuan/vue-countdown';
export default {
 props: {
    background: String,
    title: String
  },
 components: {
  VueCountdown
 },
 computed: {
  ...mapState(["wedding_information"]),
  getTime() {
   const now = new Date();
   const hari_bahagia = new Date(this.wedding_information.hari_bahagia);
   return hari_bahagia - now;
  }
 }
}
</script>

<style lang="less">
.countdown {
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
  .text {
   text-align: center;
  }
  .time-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 40px;
    padding: 0 120px;

    @media (max-width: 576px) {
     padding: 0;
    }

    .time-item {
     text-align: center;

     ._time {
      font-size: 18px;
     }
     ._time-text {
      color: gray;
     }
    }
  }
}
</style>