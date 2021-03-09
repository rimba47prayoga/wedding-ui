<template>
  <div class="pesan">
    <div class="nav-title">Pesan</div>
    <b-form @submit.prevent="submitMessage">
      <b-form-group label="Nama" label-for="nama" class="nama">
        <b-form-input v-model="nama" id="nama" placeholder="-"></b-form-input>
      </b-form-group>
      <b-form-group label="Email" label-for="email" class="email">
        <b-form-input
          v-model="email"
          id="email"
          type="email"
          placeholder="-"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Pesan" label-for="pesan">
        <b-form-textarea
          v-model="pesan"
          id="pesan"
          placeholder="-"
        ></b-form-textarea>
      </b-form-group>
      <b-button type="submit">Kirim Pesan</b-button>
    </b-form>

    <div class="container-message">
      <div v-for="(item, index) in pesan_list" :key="index" class="item">
        <div class="name">
          {{ item.nama }}
        </div>
        <div class="message">
          <img src="@/assets/kutip-atas.png" style="float: left" />
          {{ item.pesan }}
          <img src="@/assets/kutip-bawah.png" style="float: right" />
        </div>
      </div>
    </div>
    <div v-show="count > 0" class="container-pagination">
      <b-pagination
        v-model="current_page"
        :total-rows="count"
        :per-page="5"
        @change="getMessage"
        first-number
        last-number
      ></b-pagination>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import axios from "axios";
import querystring from "querystring";

export default {
  data() {
    return {
      nama: "",
      email: "",
      pesan: "",

      pesan_list: [],
      count: 0,
      current_page: 1,
    };
  },
  mounted() {
    this.getMessage(1);
  },
  methods: {
    getMessage(page) {
      if (typeof page === "string") {
        page = Number(page);
      }
      let data = {
        event_info_id: this.event_id,
        attribute: "pesan",
        limit: 5,
        offset: (page - 1) * 5,
      };
      const url = "/api/v1/invitation/get_pesan?" + querystring.stringify(data);
      axios.get(url).then((res) => {
        this.pesan_list = res.data.result;
        this.count = res.data.count_total;
      });
    },
    submitMessage() {
      let data = new FormData();
      data.append("event_info_id", this.event_id);
      data.append("attribute", "pesan");
      data.append("nama", this.nama);
      data.append("email", this.email);
      data.append("pesan", this.pesan);
      axios.post("/api/v1/invitation/pesan_amplop_hadiah", data).then(() => {
        this.getMessage(1);
      });
    },
  },
  computed: {
    ...mapState(["event_id"]),
  },
  watch: {
    event_id() {
      this.getMessage(1);
    },
  },
};
</script>

<style lang="less">
.pesan {
  max-width: 850px !important;
  margin: 0px auto;
  padding: 20px 30px;
  form {
    .form-group {
      &.nama,
      &.email {
        width: 48%;
        display: inline-block;

        @media (max-width: 576px) {
          margin: 0;
          width: 70%;
        }
      }
      &.nama {
        margin-right: 4%;
      }
    }
    button {
      background: #af8760 !important;
      border-radius: 20px;
      padding: 5px 35px;
      font-size: 16px;
      margin-top: 30px;
    }
    input,
    textarea {
      background: #f8ead8 !important;
      border: none !important;
    }
  }

  .nav-title {
    font-size: 36px;
    text-align: center;
    font-family: "Ananda Black", sans-serif;
    margin-bottom: 25px;
  }

  .container-message {
    margin-top: 55px;

    .item {
      background: #f8ead8;
      padding: 10px 20px 20px;
      margin: 15px 0;

      .name {
        font-size: 18px;
        font-weight: bold;
      }
      .message {
        color: #828282;
        padding: 12px 5px;
        font-size: 15px;
        font-style: italic;
      }
    }
  }

  .container-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    ul {
      justify-content: center;
      align-items: center;
      li {
        &:first-child {
          position: absolute;
          left: 0;
          font-size: 40px;
        }
        &:last-child {
          position: absolute;
          right: 0;
          font-size: 40px;
        }
        &:not(:last-child):not(:first-child) {
          margin-top: 10px;
        }
        &.active {
          .page-link {
            background: #f2f2f2;
          }
        }

        .page-link {
          border: none !important;
          color: #000;
          background: none;
        }
      }
    }
  }
}
</style>
