<template>
  <div class="base-container">
    <div class="segment">
      <Mempelai />
    </div>
    <div class="segment">
      <Akad />
    </div>
    <div class="segment">
      <Resepsi />
    </div>
    <div class="segment">
      <HealthProtocol />
    </div>
    <div class="segment">
      <Confirmation />
    </div>
    <div class="segment">
      <Message />
    </div>
  </div>
</template>

<script>
import axios from "axios";

import Mempelai from "@/components/Mempelai.vue";
import Akad from "@/components/Akad.vue";
import Resepsi from "@/components/Resepsi.vue";
import HealthProtocol from "@/components/HealthProtocol.vue";
import Confirmation from "@/components/Confirmation.vue";
import Message from "@/components/Message.vue";

export default {
  name: "Index",
  components: {
    Mempelai,
    Akad,
    Resepsi,
    Confirmation,
    Message,
    HealthProtocol,
  },
  created() {
    const code = this.$route.params.code;
    const guest = this.$route.params.guest;
    axios
      .get(`/api/v3/invitation/attribute?code=${code}&qr_unique_name=${guest}`)
      .then((res) => {
        if (res.data.result.length) {
          const data = res.data.result[0];
          const informasi_wedding = data.informasi_wedding[0];
          if (informasi_wedding.akad.length) {
            informasi_wedding.akad = informasi_wedding.akad[0];
          }
          if (informasi_wedding.resepsi.length) {
            informasi_wedding.resepsi = informasi_wedding.resepsi[0];
          }
          this.$store.dispatch("setEventID", data.event_info_id);
          this.$store.dispatch("setWeddingInfo", informasi_wedding);
        } else {
          // redirect to 404 page.
        }
      });
  },
};
</script>

<style>
@import url("http://fonts.cdnfonts.com/css/ananda-black");
</style>
<style lang="less">
.base-container {
  max-width: 850px !important;
  margin: 0px auto;
  padding: 20px 30px;
  height: 100%;
  position: relative;

  .segment {
    margin-bottom: 100px;
  }
}
</style>
