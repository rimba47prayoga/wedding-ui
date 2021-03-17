<template>
  <div class="base-container">
    <template v-if="isOpen">
      <div v-if="isActive('story')" class="segment">
        <Story :segmentProps="getSegmentProps('story')" />
      </div>
      <div v-if="isActive('mempelai')" class="segment">
        <Mempelai :segmentProps="getSegmentProps('mempelai')" />
      </div>
      <div v-if="isActive('akad')" class="segment">
        <Akad :background="getBackground('akad')" />
      </div>
      <div v-if="isActive('resepsi')" class="segment">
        <Resepsi :background="getBackground('resepsi')" />
      </div>
      <div v-if="isActive('livestreaming')" class="segment">
        <HealthProtocol :background="getBackground('livestreaming')" />
      </div>
      <div v-if="isActive('countdown')" class="segment">
        <Countdown :background="getBackground('countdown')" />
      </div>
      <div v-if="isActive('galeri')" class="segment">
        <Galery :segmentProps="getSegmentProps('galeri')" />
      </div>
      <div v-if="isActive('konfirmasi')" class="segment">
        <Confirmation :background="getBackground('konfirmasi')" />
      </div>
      <div v-if="isActive('pesan')" class="segment">
        <Message :background="getBackground('pesan')" />
      </div>
      <div v-if="isActive('gift')" class="segment">
        <Gift />
      </div>
      <footer>
        <div class="atera-sosmed">
          <img src="@/assets/logo-atera.png" />
          <a :href="footer.url_ig">
            <img src="@/assets/atera-ig.png" />
          </a>
          <a :href="footer.url_globe">
            <img src="@/assets/atera-globe.png" />
          </a>
          <a :href="footer.url_fb">
            <img src="@/assets/atera-fb.png" />
          </a>
        </div>
        <div class="copyright">
          Copyright © 2021 Atera Powered by Bahtera Indonesia. All rights
          reserved.
        </div>
      </footer>
    </template>
    <div
      v-else
      :style="{
        'background-image': 'url(' + getCoverImage + ')',
      }"
    >
      <Invitation @openInvitation="openInvitation" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

import Invitation from "@/components/Invitation.vue";
import Story from "@/components/Story.vue";
import Mempelai from "@/components/Mempelai.vue";
import Akad from "@/components/Akad.vue";
import Resepsi from "@/components/Resepsi.vue";
import HealthProtocol from "@/components/HealthProtocol.vue";
import Countdown from "@/components/Countdown.vue";
import Galery from "@/components/Galery.vue";
import Confirmation from "@/components/Confirmation.vue";
import Message from "@/components/Message.vue";
import Gift from "@/components/Gift.vue";

export default {
  name: "Index",
  components: {
    Invitation,
    Story,
    Mempelai,
    Akad,
    Resepsi,
    Confirmation,
    Message,
    HealthProtocol,
    Countdown,
    Galery,
    Gift,
  },
  data() {
    return {
      isOpen: false,
      footer: {
        url_ig: "",
        url_fb: "",
        url_globe: "",
      },
      segments: [],
      segment_mapping: {
        cover: Invitation,
        story: Story,
        mempelai: Mempelai,
        akad: Akad,
        resepsi: Resepsi,
        galeri: Galery,
        konfirmasi: Confirmation,
        hadiah: Gift,
        pesan: Message,
      },
    };
  },
  created() {
    const code = this.$route.params.code;
    const guest = this.$route.params.guest;
    axios
      .get(`/api/v3/invitation/attribute?code=${code}&qr_unique_name=${guest}`)
      .then((res) => {
        if (res.data.result.length) {
          const data = res.data.result[0];
          const informasi_wedding = data.informasi_wedding[0];
          if (informasi_wedding.akad.length) {
            informasi_wedding.akad = informasi_wedding.akad[0];
          }
          if (informasi_wedding.resepsi.length) {
            informasi_wedding.resepsi = informasi_wedding.resepsi[0];
          }
          this.segments = data.segmentasi.map((item) => {
            if (item.background_photo) {
              item.background_photo = this.fixUrlPhoto(item.background_photo);
            }
            if (item.photo.length) {
              item.photo = item.photo.map((item_photo) => {
                item_photo.url_photo = this.fixUrlPhoto(item_photo.url_photo);
                return item_photo;
              });
            }
            return item;
          });
          this.$store.dispatch("setEventID", data.event_info_id);
          this.$store.dispatch("setWeddingInfo", informasi_wedding);
          this.$store.dispatch("setGuestInfo", data.guest_information[0]);
          // this.$store.dispatch("setVirtualInfo", data.virtual_info);
          const footer = data.footer_atera;
          this.footer.url_ig = footer.url_instagram;
          this.footer.url_fb = footer.url_facebook;
          this.footer.url_globe = footer.url_globe;
        } else {
          // redirect to 404 page.
        }
      });
  },
  methods: {
    openInvitation() {
      this.isOpen = true;
      // Array.from(document.querySelectorAll("html, body, div#app")).forEach(
      //   (item) => {
      //     item.classList.remove("h-100");
      //   }
      // );
    },
    getPureSegment(segment) {
      const base_segment = {
        segmentasi: "",
        on_off: true,
        photo: [],
        text: null,
        background_photo: null,
        number: null,
      };
      return (
        this.segments.filter((item) => {
          return item.segmentasi == segment;
        })[0] || base_segment
      );
    },
    getSegmentProps(segment) {
      let base_segment = this.getPureSegment(segment);
      if (this.$isMobile()) {
        segment = `${segment}_mobile`;
        let mobile_segment = this.getPureSegment(segment);
        if (mobile_segment.text) {
          base_segment.text = mobile_segment.text;
        }
        if (mobile_segment.photo.length) {
          base_segment.photo = mobile_segment.photo;
        }
        if (mobile_segment.background_photo) {
          base_segment.background_photo = mobile_segment.background_photo;
        }
      }
      return base_segment;
    },
    getBackground(segment) {
      return this.getSegmentProps(segment).background_photo;
    },
    fixUrlPhoto(path) {
      return "https://docs-api.bahtera.tech" + path.replace("/uploads", "");
    },
    isActive(segment) {
      return this.getSegmentProps(segment).on_off;
    },
  },
  computed: {
    getCoverImage() {
      return this.getBackground("cover");
    },
  },
};
</script>

<style>
@import url("http://fonts.cdnfonts.com/css/ananda-black");
@import url("https://fonts.googleapis.com/css?family=Crete+Round");
</style>
<style lang="less">
.base-container {
  height: 100%;
  position: relative;
  font-family: "Crete Round";

  .segment:not(:last-child) {
    margin-bottom: 100px;
    background-repeat: no-repeat;
  }
  footer {
    text-align: center;
    padding: 20px 0;

    .atera-sosmed {
      margin-bottom: 15px;

      img {
        margin: 0 10px;
      }
    }
    .copyright {
      font-weight: bold;
    }
  }
}
</style>
