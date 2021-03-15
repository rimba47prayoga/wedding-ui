<template>
  <div
    class="galery"
    :style="{
      'background-image': 'url(' + segmentProps.background_photo + ')',
    }"
  >
    <div class="nav-title" data-aos="zoom-in" data-aos-duration="1000">
      Galery
    </div>
    <div class="image-container">
      <img
        v-for="(photo, index) in getPhotos"
        :key="index"
        :src="photo"
        data-aos="zoom-in"
        data-aos-duration="1000"
      />
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
  },
  computed: {
    getPhotos() {
      let photos = this.segmentProps.photo;
      if (photos.length) {
        photos.sort((a, b) => a.number - b.number);
      }
      return photos.map((item) => {
        return item.url_photo;
      });
    },
  },
};
</script>

<style lang="less">
.galery {
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
  .image-container {
    display: flex;
    flex-wrap: wrap;
    img {
      width: 30%;
      margin: 1.667%;

      @media (max-width: 576px) {
        width: 48%;
        height: 48%;
        margin: 1%;
      }
    }
  }
}
</style>
