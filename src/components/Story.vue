<template>
  <div
    class="story"
    :style="{
      'background-image': 'url(' + segmentProps.background_photo + ')',
    }"
  >
    <div
      class="img-desktop"
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-offset="0"
      data-aos-delay="300"
    >
      <img :src="getPhoto" />
    </div>
    <div class="content">
      <div class="nav-title" data-aos="zoom-in" data-aos-duration="1000">
        {{ title }}
      </div>
      <div class="text" data-aos="fade-down" data-aos-duration="1000">
        {{ segmentProps.text }}
      </div>
    </div>
    <div
      class="img-mobile"
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-offset="0"
      data-aos-delay="500"
    >
      <img :src="getPhoto" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    segmentProps: {
      type: Object,
      required: true,
      default: () => ({
        photo: [{ url_photo: "" }],
        background_photo: "",
        text: "",
      }),
    },
    title: String
  },
  computed: {
    getPhoto() {
      return this.segmentProps.photo[0].url_photo;
    },
  },
};
</script>

<style lang="less">
.story {
  margin: 0px auto;
  padding: 20px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;

  @media screen and (max-width: 576px), screen and (max-width: 768px) {
    display: block;
    padding: 20px 0px;
  }
  .img-desktop {
    @media screen and (max-width: 576px), screen and (max-width: 768px) {
      display: none;
    }
    img {
      width: 800px;
      height: 800px;
    }
  }
  .img-mobile {
    display: none;

    @media screen and (max-width: 576px), screen and (max-width: 768px) {
      display: block;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  .content {
    margin-left: 40px;
    @media screen and (max-width: 576px), screen and (max-width: 768px) {
      margin: 0 0 30px 0;
      padding: 0 30px;
    }
    .nav-title {
      font-size: 36px;
      font-family: "Ananda Black", sans-serif;
      margin-bottom: 25px;

      @media screen and (max-width: 576px), screen and (max-width: 768px) {
        margin: 0 0 15px 0;
      }
    }
  }
}
</style>
