<template>
  <div
    class="tw-font-sans  tw-antialiased tw-w-full tw-bg-white tw-z-10"
    id="app"
  >
    <nav
      class="tw-flex tw-items-center tw-justify-between tw-flex-wrap tw-py-2 tw-px-8"
    >
      <div
        class="tw-flex tw-items-center tw-flex-no-shrink tw-text-white tw-mr-6"
      >
        <router-link to="/">
          <div
            class="tw-flex tw-items-center tw-flex-no-shrink tw-text-black tw-mr-6"
          >
            <img
              class="inline m-1 my-img"
              src="https://res.cloudinary.com/dldd8ucby/image/upload/v1587851649/cerebro/cerebrologo_2x.png"
            />
          </div>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggle() {
      console.log(this.open);
      this.open = !this.open;
    },
  },
};
</script>

<style scoped>
.nav-button {
  /* font-family: Poppins; */
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  text-align: center;

  color: #555555;
}

.v-application a {
  color: white;
}

.signup {
  color: #4a4edd !important;
}
</style>
