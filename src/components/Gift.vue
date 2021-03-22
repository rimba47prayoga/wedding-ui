<template>
  <div class="gift">
    <template v-if="$isMobile()">
      <div class="mobile-display">
        <div class="nav-title">{{ title }}</div>
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
        <div class="amount-container">
          <p>Select the amount you want :</p>
          <div class="item-container">
            <div
              :class="{
                item: true,
                selected: selected == '100.000',
              }"
              @click="selectAmount('100.000')"
            >
              100.000
            </div>
            <div
              :class="{
                item: true,
                selected: selected == '200.000',
              }"
              @click="selectAmount('200.000')"
            >
              200.000
            </div>
            <div
              :class="{
                item: true,
                selected: selected == '300.000',
              }"
              @click="selectAmount('300.000')"
            >
              300.000
            </div>
            <div
              :class="{
                item: true,
                selected: selected == '400.000',
              }"
              @click="selectAmount('400.000')"
            >
              400.000
            </div>
            <div
              :class="{
                item: true,
                selected: selected == '500.000',
              }"
              @click="selectAmount('500.000')"
            >
              500.000
            </div>
          </div>
          <b-form-group label="Other" label-for="other" class="other">
            <b-form-input
              v-model="other"
              id="other"
              placeholder="-"
              type="number"
              @input="selected = ''"
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="bottom-container">
          <b-button @click="sendGift">Send Gift</b-button>
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
  props: {
    title: String
  },
  data() {
    return {
      other: "",
      selected: "",
    };
  },
  methods: {
    selectAmount(value) {
      this.other = "";
      if (this.selected && this.selected == value) {
        this.selected = "";
        return;
      }
      this.selected = value;
    },
    sendGift() {
      const code = this.$route.params.code;
      let amount = "";
      if (this.selected) {
        amount = this.selected;
      } else if (this.other) {
        amount = this.other;
      }
      if (amount) {
        amount = amount.toString().replace(".", "");
      }
      const payment_link = `https://amplop.bahtera.tech?code=${code}&nominal=${amount}`;
      window.open(payment_link, "_blank");
    },
  },
};
</script>

<style lang="less">
.gift {
  display: flex;
  margin: 0px auto;
  padding: 20px 100px;

  @media (max-width: 576px) {
    padding: 20px 15px;
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
    text-align: center;
    .nav-title {
      font-size: 36px;
      font-family: "Ananda Black", sans-serif;
      margin-bottom: 25px;
    }
    .bank-container {
      img {
        margin: 10px;
      }
    }
    .amount-container {
      .item-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .item {
          margin: 10px;
          padding: 5px 10px;
        }
      }
    }
    label {
      text-align: left;
    }
    input {
      background: #f8ead8 !important;
      border: none !important;
      width: 65%;
    }
    .item-container {
      .item {
        background: #f8ead8;
        cursor: pointer;

        &.selected {
          background: #af8760;
          color: #ffffff;
        }
      }
    }
    .bottom-container {
      margin-top: 30px;
      text-align: left;
      button {
        background: #af8760 !important;
        border-radius: 30px;
        padding: 5px 50px;
        font-size: 16px;
      }
    }
  }
}
</style>
