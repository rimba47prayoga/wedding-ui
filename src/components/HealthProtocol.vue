<template>
  <div class="health-protocol">
    <div class="left-section">
      <div class="nav-title">Protokol Kesehatan</div>
      <div class="text">
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
    <div class="right-section">
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
export default {};
</script>

<style lang="less">
.health-protocol {
  display: flex;
  align-items: center;

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
