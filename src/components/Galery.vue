<template>
  <div class="galery">
    <div class="nav-title">Galery</div>
    <div class="image-container">
      <img src="@/assets/dummy-galery.png" />
      <img src="@/assets/dummy-galery.png" />
      <img src="@/assets/dummy-galery.png" />
      <img src="@/assets/dummy-galery.png" />
      <img src="@/assets/dummy-galery.png" />
      <img src="@/assets/dummy-galery.png" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [],
    };
  },
};
</script>

<style lang="less">
.galery {
  max-width: 850px !important;
  margin: 0px auto;
  padding: 20px 30px;
  .nav-title {
    font-size: 36px;
    font-family: "Ananda Black", sans-serif;
    margin-bottom: 25px;
    text-align: center;
    line-height: normal;
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
