<template>
  <div class="gift">
    <template v-if="$isMobile()">
      <div class="mobile-display">
        <div class="nav-title">Gift</div>
        <div class="text">
          <p>
            We are very grateful for the prayers and wedding greetings that you
            have given to us.
          </p>
          <p>
            However, if you want to give gifts and envelopes, you can use the
            following features. We provide digital envelopes for the
            convenience, security, and convenience of sending envelopes.
          </p>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="left-section">
        <div class="bank-container">
          <img src="@/assets/mandiri.png" />
          <img src="@/assets/bca.png" />
          <img src="@/assets/bni.png" />
          <img src="@/assets/bri.png" />
          <img src="@/assets/permata.png" />
          <img src="@/assets/qris.png" />
          <img src="@/assets/ovo.png" />
          <img src="@/assets/dana.png" />
          <img src="@/assets/linkaja.png" />
          <img src="@/assets/shopee.png" />
        </div>
      </div>
      <div class="right-section">
        <div class="nav-title">Gift</div>
        <div class="text">
          <p>
            We are very grateful for the prayers and wedding greetings that you
            have given to us.
          </p>
          <p>
            However, if you want to give gifts and envelopes, you can use the
            following features. We provide digital envelopes for the
            convenience, security, and convenience of sending envelopes.
          </p>
        </div>
        <div class="bottom-container">
          <b-button @click="sendGift">Send Gift</b-button>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  methods: {
    sendGift() {},
  },
};
</script>

<style lang="less">
.gift {
  display: flex;
  margin: 0px auto;
  padding: 20px 100px;

  @media (max-width: 576px) {
    padding: 20px 30px;
  }
  .left-section {
    background: #f8ead8;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    text-align: center;

    .bank-container {
      img {
        margin: 10px;
      }
    }
  }
  .right-section {
    padding: 30px 40px;
    .nav-title {
      font-size: 36px;
      font-family: "Ananda Black", sans-serif;
      margin-bottom: 25px;
    }
    .bottom-container {
      margin-top: 30px;
      button {
        background: #af8760 !important;
        border-radius: 30px;
        padding: 10px 70px;
        font-size: 16px;
      }
    }
  }
  .mobile-display {
    .nav-title {
      font-size: 36px;
      font-family: "Ananda Black", sans-serif;
      margin-bottom: 25px;
    }
  }
}
</style>
