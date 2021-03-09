<template>
  <div class="story">
    <div class="img-desktop">
      <img src="@/assets/dummy-wedding.jpg" />
    </div>
    <div class="content">
      <div class="nav-title">Our Story</div>
      <div class="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat,
        urna non efficitur tempor, metus est pretium risus, id consequat elit
        leo ut tortor. Fusce ex nisl, fermentum eget congue quis, consectetur
        eget enim. Donec vitae tellus odio. Aliquam congue felis eu ipsum
        luctus, vel vestibulum velit lacinia. Nulla eget turpis et arcu
        condimentum dictum ut euismod enim. Fusce ipsum ipsum, maximus aliquam
        mollis ut, tincidunt et nisl. Nunc ac arcu metus. In nibh nibh, porta
        condimentum augue eu, consequat lacinia orci. Ut eu libero eget tellus
        scelerisque ultrices. Aenean accumsan quam vitae nulla lacinia varius.
        Etiam ut quam vitae diam iaculis dictum in at lectus. Nullam sagittis
        faucibus dui, et venenatis lorem fermentum quis.
      </div>
    </div>
    <div class="img-mobile">
      <img src="@/assets/dummy-wedding.jpg" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.story {
  margin: 0px auto;
  padding: 20px 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 576px) {
    display: block;
  }
  .img-desktop {
    @media (max-width: 576px) {
      display: none;
    }
    img {
      width: 800px;
      height: 800px;
    }
  }
  .img-mobile {
    display: none;

    @media (max-width: 576px) {
      display: block;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  .content {
    margin-left: 40px;
    @media (max-width: 576px) {
      margin: 0 0 30px 0;
    }
    .nav-title {
      font-size: 36px;
      font-family: "Ananda Black", sans-serif;
      margin-bottom: 25px;

      @media (max-width: 576px) {
        margin: 0 0 15px 0;
      }
    }
  }
}
</style>
