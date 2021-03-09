<template>
  <div class="mempelai">
    <div class="parents">
      <div class="left-section">
        <div>{{ wedding_information.ayah_cpw }}</div>
        <div>{{ wedding_information.ibu_cpw }}</div>
      </div>
      <div class="right-section">
        <div>{{ wedding_information.ayah_cpp }}</div>
        <div>{{ wedding_information.ibu_cpp }}</div>
      </div>
    </div>
    <div class="content">
      <div class="text">
        Cardially request the honor of your presence at wedding of belove child
      </div>
      <div class="mempelai-name">{{ wedding_information.cpw }}</div>
      <div class="divider-name">and</div>
      <div class="mempelai-name">{{ wedding_information.cpp }}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["wedding_information"]),
  },
};
</script>

<style lang="less">
.mempelai {
  max-width: 850px !important;
  margin: 0px auto;
  padding: 20px 30px;
  .parents {
    display: flex;
    justify-content: space-between;
    padding: 0px 15px 0 90px;

    @media (max-width: 576px) {
      padding: 0;
    }
  }
  .content {
    text-align: center;
    .text {
      color: #828282;
      margin: 50px 0;
    }
    .mempelai-name {
      font-size: 36px;
      font-family: "Ananda Black", sans-serif;
    }
    .divider-name {
      font-size: 15px;
      font-family: "Ananda Black", sans-serif;
      margin: 50px 0;
    }
  }
}
</style>
