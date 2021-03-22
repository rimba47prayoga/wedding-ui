<template>
  <div
    class="galery-background"
    :style="{
      'background-image': 'url(' + segmentProps.background_photo + ')',
    }"
  >
    <div class="galery">
      <div class="nav-title" data-aos="zoom-in" data-aos-duration="1000">
        {{ title }}
      </div>
      <div class="image-container">
        <div
          v-for="(photo, index) in getPhotos"
          :key="index"
          @click="showSlide(index)"
          class="img-gallery"
          data-aos="zoom-in"
          data-aos-duration="1000"
          :style="{
            'background-image': 'url(' + photo + ')',
          }"
        />
      </div>
      <b-modal
        v-model="show_slide"
        hide-header
        hide-footer
        centered
        id="carousel-container"
      >
        <b-carousel
          id="carousel-gallery"
          v-model="slide"
          :interval="5000"
          controls
          background="#ababab"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333;"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <b-carousel-slide
          v-for="(photo, index) in getPhotos"
          :key="index"
          :img-src="photo"
          ></b-carousel-slide>
        </b-carousel>
      </b-modal>
    </div>
  </div> 
</template>

<script>
export default {
  data() {
      return {
        show_slide: false,
        slide: 0,
        sliding: null
      }
    },
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
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    },
    showSlide(index) {
      this.show_slide = true
      this.slide = index
      document.body.classList.add('modal-open')
    },
    closeSlide() {
      this.show_slide = false
      this.slide = 0
      document.body.classList.remove('modal-open')
    }
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
.galery-background {
  background-repeat: no-repeat;
}
.galery {
  max-width: 850px !important;
  margin: 0px auto;
  padding: 20px 30px;
  
  .nav-title {
    font-size: 36px;
    font-family: "Ananda Black", sans-serif;
    margin-bottom: 25px;
    text-align: center;
  }
  .image-container {
    display: flex;
    flex-wrap: wrap;
    .img-gallery {
      width: 30%;
      margin: 1.667%;
      background-size: cover;
      height: 150px;
      background-position: center;

      @media (max-width: 576px) {
        width: 48%;
        height: 100px;
        margin: 1%;
      }
    }
  }
  
}
#carousel-container {
    .modal-content {
      .modal-body {
        padding: 0;

        .carousel-control-next {
          right: -80px;
          @media (max-width: 576px) {
            right: 0;
          }
        }
        .carousel-control-prev {
          left: -80px;
          @media (max-width: 576px) {
            left: 0;
          }
        }
      }
    }
  }
</style>
