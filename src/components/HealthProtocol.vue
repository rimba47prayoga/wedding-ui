<template>
  <div
    v-if="show"
    class="health-protocol"
    :style="{
      'background-image': 'url(' + background + ')',
    }"
  >
    <div class="left-section">
      <div class="nav-title" data-aos="zoom-in" data-aos-duration="1000">
        {{ title }}
      </div>
      <div class="text" data-aos="zoom-in" data-aos-duration="1000">
        {{ text }}
      </div>
    </div>
    <div class="right-section" data-aos="zoom-in" data-aos-duration="1000">
      <a v-if="virtual_info.zoom_link" :href="virtual_info.zoom_link" class="item zoom">
        <img src="@/assets/Zoom.png" />
      </a>
      <a a v-if="virtual_info.ig_link" :href="virtual_info.ig_link" class="item ig">
        <img src="@/assets/instagram-logo.png" />
        Instagram
      </a>
      <a a v-if="virtual_info.gmeet_link" :href="virtual_info.gmeet_link" class="item gmeet">
        <img src="@/assets/Gmeet.png" />
      </a>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    background: String,
    title: String,
    text: String
  },
  computed: {
    ...mapState(["virtual_info"]),
    show() {
      return (
        this.virtual_info.ig_link || 
        this.virtual_info.gmeet_link || 
        this.virtual_info.zoom_link
      )
    }
  }
};
</script>

<style lang="less">
.health-protocol {
  display: flex;
  align-items: center;
  max-width: 1000px !important;
  margin: 0px auto;
  padding: 20px 30px;
  background-repeat: no-repeat;

  @media (max-width: 576px) {
    display: block;
  }
  .left-section {
    width: 75%;
    display: inline-block;
    margin-right: 10%;

    @media (max-width: 576px) {
      width: 100%;
      margin: 0 0 30px 0;
    }
    .nav-title {
      font-size: 36px;
      font-family: "Ananda Black", sans-serif;
      margin-bottom: 25px;

      @media (max-width: 576px) {
        text-align: center;
      }
    }
    .text {
      @media (max-width: 576px) {
        text-align: center;
      }
    }
  }
  .right-section {
    width: 15%;
    display: inline-block;

    @media (max-width: 576px) {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    .item {
      margin: 25px 0;
      cursor: pointer;
      color: #212529 !important;
      display: block;

      &.zoom {
        img {
          @media (max-width: 576px) {
            width: 85px;
          }
        }
      }
      &.ig {
        img {
          @media (max-width: 576px) {
            width: 25px;
          }
        }
      }
      &.gmeet {
        img {
          @media (max-width: 576px) {
            width: 60px;
          }
        }
      }

      @media (max-width: 576px) {
        margin: 0;
      }
    }
  }
}
</style>
