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
    <div class="tw-mx-auto tw-flex tw-justify-center tw-mt-4">
      <input
        class=" tw-w-full md:tw-w-1/3 tw-bg-white focus:tw-outline-none focus:tw-shadow-outline tw-border tw-border-gray-300 tw-rounded-lg tw-py-2 tw-px-4 tw-block tw-w-full tw-appearance-none tw-leading-normal"
        type="text"
        v-model="search"
        placeholder="Search for a faculty member"
      />
    </div>
    <div class="tw-flex tw-flex-wrap tw-my-4">
      <Faculty
        class="tw-w-full md:tw-w-1/3 tw-my-2"
        v-for="(faculty, index) in searchFaculty"
        :key="index"
        :faculty="faculty"
      />
      <section
        v-if="!loading && searchFaculty.length < 1"
        class="tw-mx-4 md:tw-mx-8 tw-text-center tw-mx-auto"
      >
        <p class="cerebro-mini tw-block">
          No faculty members match your query
        </p>
      </section>
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
  computed: {
    searchFaculty() {
      return this.faculty.filter((fac) => {
        return (
          fac.firstname.toLowerCase().match(this.search.toLowerCase()) ||
          fac.lastname.toLowerCase().match(this.search.toLowerCase())
        );
      });
    },
  },
  data() {
    return {
      faculty: [],
      search: "",
      loading: true,
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
        this.faculty = res.data.data.sort(() => Math.random() - 0.5);
        this.loading = false;
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
