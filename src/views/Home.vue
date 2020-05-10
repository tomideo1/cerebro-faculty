<template>
  <div>
    <main class="tw-flex tw-flex-wrap">
      <div
        class="tw-w-full md:tw-w-3/5 tw-flex tw-items-center tw-justify-center  tw-mx-auto tw-items-top "
      >
        <section class="tw-mx-4 md:tw-mx-8 tw-text-center">
          <span class="cerebro-main tw-block">
            Welcome the Cerebro Faculty Page</span
          >
          <p class="cerebro-mini tw-block">
            Members help with verifying, mentoring and coaching developers from
            the Talent Program
          </p>
        </section>
      </div>
    </main>
    <div class="tw-flex tw-flex-wrap tw-my-4">
      <Faculty
        class="tw-w-full md:tw-w-1/3 tw-my-2"
        v-for="(faculty, index) in faculty"
        :key="index"
        :faculty="faculty"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Faculty from "../components/Faculty";
export default {
  components: {
    Faculty,
  },
  data() {
    return {
      faculty: [],
    };
  },
  methods: {
    getRow(current) {
      this.$router.push({
        name: "single",
        params: {
          items: current,
        },
      });
    },
    onCopy(e) {
      this.success("You just copied: " + e.text);
    },
    onError(e) {
      this.danger("Failed to copy texts");
    },
    success(message) {
      this.$buefy.toast.open({
        message: message,
        type: "is-primary",
      });
    },
    danger() {
      this.$buefy.toast.open({
        duration: 5000,
        message: `Something's not good, also I'm on bottom`,
        position: "is-bottom",
        type: "is-danger",
      });
    },
  },
  mounted() {
    axios
      .get("https://api.cerebro.work/v1/faculty")
      .then((res) => {
        console.log(res);
        this.faculty = res.data.data;
      })
      .catch();
  },
};
</script>
<style lang="css">
.avatar {
  width: 80px;
  height: 80px;
  border-radius: 40px; /* половина ширины и высоты */
  margin: 10px;
}
.topbar {
  z-index: -2;
  transition: -webkit-filter 0.5s;
  transition: filter 0.5s, -webkit-filter 0.5s;
  height: 70px;
  pointer-events: none;
  bottom: -35px;
  -webkit-filter: brightness(100);
  filter: brightness(100);
  background-repeat: repeat-x;
  background-position: 172px 0;
  background-image: url("../assets/brush-yellow.png");
}

.cerebro-top {
  font-weight: bold;
  font-size: 28px;
  line-height: 54px;
  /* identical to box height */

  color: #4a4edd;
}

.cerebro-main {
  font-weight: 900;
  font-size: 36px;
  line-height: 58px;
  /* or 73px */

  color: #000000;
}

.cerebro-mini {
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;

  color: #000000;
}

.cerebro-last {
  font-weight: normal;
  font-size: 12px;
  line-height: 24px;
  color: #000000;
}
</style>
