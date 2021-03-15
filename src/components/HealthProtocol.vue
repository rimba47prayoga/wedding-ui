<template>
  <div
    class="health-protocol"
    :style="{
      'background-image': 'url(' + background + ')',
    }"
  >
    <div class="left-section">
      <div class="nav-title" data-aos="zoom-in" data-aos-duration="1000">
        Protokol Kesehatan
      </div>
      <div class="text" data-aos="zoom-in" data-aos-duration="1000">
        <p>
          Because the Covid 19 outbreak is quite unsettling and worrying, we
          apologize for not being able to invite all family, relatives, and
          friends to attend our children's contract event
        </p>
        <p>
          We plan to virtually publish our wedding via Live Streaming which can
          be viewed via the following applications:
        </p>
      </div>
    </div>
    <div class="right-section" data-aos="zoom-in" data-aos-duration="1000">
      <div class="item zoom">
        <img src="@/assets/Zoom.png" />
      </div>
      <div class="item ig">
        <img src="@/assets/instagram-logo.png" />
        Instagram
      </div>
      <div class="item gmeet">
        <img src="@/assets/Gmeet.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    background: String,
  },
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
