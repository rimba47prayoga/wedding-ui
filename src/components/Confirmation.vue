<template>
  <div class="confirmation">
    <div class="nav-title">Confirmation</div>
    <div class="content">
      <p class="text">
        Suatu kehormatan untuk mengundang anda untuk hadir dan merayakan
        pernikahan kami.
      </p>
      <div class="choices">
        <b-form-group v-slot="{ ariaDescribedby }">
          <b-form-checkbox-group
            id="checkbox-confirmation"
            v-model="selected"
            :options="options"
            :aria-describedby="ariaDescribedby"
            @change="onCheck"
            name="checkbox-confirmation"
          ></b-form-checkbox-group>
        </b-form-group>
      </div>
    </div>
    <div class="bottom-container">
      <b-button @click="confirm">Confirmation</b-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: [],
      options: [
        { text: "Ya. Saya akan datang", value: "yes" },
        { text: "Mungkin saya akan datang", value: "maybe" },
        { text: "Maaf, saya belum bisa datang ", value: "no" },
      ],
    };
  },
  methods: {
    onCheck(value) {
      if (value.length > 1) {
        this.selected = [value[value.length - 1]];
      }
    },
    confirm() {},
  },
};
</script>

<style lang="less">
.confirmation {
  .nav-title {
    font-size: 36px;
    font-family: "Ananda Black", sans-serif;
    margin-bottom: 25px;
    text-align: center;
  }
  .content {
    .text {
      text-align: center;
    }
    .choices {
      padding: 0 30px;
      #checkbox-confirmation {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  .bottom-container {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    button {
      background: #af8760 !important;
      border-radius: 30px;
      padding: 10px 70px;
      font-size: 16px;
    }
  }
}
</style>
