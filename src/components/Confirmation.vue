<template>
  <div
    v-if="show"
    class="confirmation"
    :style="{
      'background-image': 'url(' + background + ')',
    }"
  >
    <div class="nav-title" data-aos="zoom-in" data-aos-duration="1000">
      Confirmation
    </div>
    <div class="content" data-aos="zoom-in" data-aos-duration="1000">
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
            :stacked="$isMobile()"
          ></b-form-checkbox-group>
        </b-form-group>
      </div>
    </div>
    <div class="bottom-container" data-aos="zoom-in" data-aos-duration="1000">
      <b-button @click="confirm">Confirmation</b-button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";

export default {
  props: {
    background: String,
  },
  data() {
    return {
      selected: [],
      options: [
        { text: "Ya. Saya akan datang", value: "yes" },
        { text: "Mungkin saya akan datang", value: "maybe" },
        { text: "Maaf, saya belum bisa datang ", value: "no" },
      ],
      show: true
    };
  },
  mounted() {
    if (this.guest_information.is_confirmed) {
      let checkboxValue = "no";
      if (this.guest_information.is_attend) {
        checkboxValue = "yes";
      }
      this.selected.push(checkboxValue);
    }
  },
  methods: {
    onCheck(value) {
      if (value.length > 1) {
        this.selected = [value[value.length - 1]];
      }
    },
    confirm() {
      const guest_id = this.$store.state.guest_information.guest_id;
      const is_attendant = this.selected[0] == "yes";
      let data = new FormData();
      data.append("is_attendant", is_attendant);
      axios.put(`/api/v1/data_tamu/confirmation/${guest_id}`, data).then(() => {
        this.$bvToast.toast("Terima kasih atas konfirmasinya.", {
          title: "Notification",
          toaster: "b-toaster-top-center",
          solid: true,
          appendToast: true,
        });
        this.show = false;
      });
    },
  },
  computed: {
    ...mapState(["guest_information"]),
  },
};
</script>

<style lang="less">
.confirmation {
  max-width: 850px !important;
  margin: 0px auto;
  padding: 20px 30px;
  background-repeat: no-repeat;

  @media (max-width: 576px) {
    padding: 20px 15px;
  }
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
      @media (max-width: 576px) {
        display: flex;
        justify-content: center;
      }
      #checkbox-confirmation {
        display: flex;
        justify-content: space-between;

        @media (max-width: 576px) {
          display: block;
        }
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
