<template>
  <div
    class="mempelai"
    :style="{
      'background-image': 'url(' + background + ')',
    }"
  >
    <div class="parents">
      <div class="left-section" data-aos="fade-right" data-aos-duration="1000">
        <div>{{ wedding_information.ayah_cpw }}</div>
        <div>{{ wedding_information.ibu_cpw }}</div>
      </div>
      <div class="right-section" data-aos="fade-left" data-aos-duration="1000">
        <div>{{ wedding_information.ayah_cpp }}</div>
        <div>{{ wedding_information.ibu_cpp }}</div>
      </div>
    </div>
    <div class="content">
      <div class="text" data-aos="fade-up" data-aos-duration="1000">
        Cardially request the honor of your presence at wedding of belove child
      </div>
      <div class="mempelai-name" data-aos="fade-down" data-aos-duration="1000">
        {{ wedding_information.cpw }}
      </div>
      <div
        class="sosmed-mempelai"
        data-aos="zoom-in-down"
        data-aos-duration="1000"
      >
        <img src="@/assets/ig-mempelai.png" />
        <a :href="wedding_information.sosmed_cpw" class="sosmed">
          {{ getSosmedUsername(wedding_information.sosmed_cpw) }}
        </a>
      </div>
      <div class="divider-name" data-aos="zoom-in" data-aos-duration="1000">
        and
      </div>
      <div class="mempelai-name" data-aos="fade-down" data-aos-duration="1000">
        {{ wedding_information.cpp }}
      </div>
      <div
        class="sosmed-mempelai"
        data-aos="zoom-in-down"
        data-aos-duration="1000"
      >
        <img src="@/assets/ig-mempelai.png" />
        <a :href="wedding_information.sosmed_cpp" class="sosmed">
          {{ getSosmedUsername(wedding_information.sosmed_cpp) }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    background: String,
  },
  methods: {
    getSosmedUsername(link) {
      return link.replace("https://www.instagram.com", "").replaceAll("/", "");
    },
  },
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
  background-repeat: no-repeat;
  .parents {
    display: flex;
    justify-content: space-between;
    padding: 0px 15px;

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
      margin-bottom: 20px;
      line-height: 1.7;
    }
    .sosmed-mempelai {
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        color: #828282;
      }

      img {
        margin-right: 5px;
      }
    }
    .divider-name {
      font-size: 15px;
      font-family: "Ananda Black", sans-serif;
      margin: 25px 0;
    }
  }
}
</style>
