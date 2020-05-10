<template>
  <div class="">
    <div class=" tw-container tw-mx-auto">
      <div
        class="tw-border tw-mx-6 tw-my-2 tw-rounded-lg  tw-bg-white tw-mx-auto tw-max-w-sm tw-shadow-lg tw-rounded-lg tw-overflow-hidden"
      >
        <div class="sm:tw-flex sm:tw-items-center tw-px-6 tw-py-4">
          <img
            class="tw-block tw-h-24 tw-w-24 tw-rounded-full tw-mx-auto tw-mb-4 sm:tw-mb-0 sm:tw-mr-4 sm:tw-ml-0"
            :src="faculty.profile_url"
            alt=""
          />
          <div class="tw-text-center sm:tw-text-left sm:tw-flex-grow">
            <div class="tw-mb-4">
              <p class="tw-text-xl tw-leading-tight">
                {{ faculty.firstname }} {{ faculty.lastname }}
              </p>
              <p class="tw-text-sm tw-leading-tight tw-text-grey-dark">
                {{ faculty.role[1] }}
              </p>
            </div>
            <div class="tw-flex tw-flex-wrap">
              <button
                v-clipboard:copy="faculty.faculty.data.faculty_id"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
                class=" tw-text-xs tw-font-semibold tw-rounded-full tw-px-4 tw-py-1  tw-leading-normal tw-bg-cerebro-purple tw-border tw-border-blue tw-text-white hover:tw-bg-blue hover:tw-text-white"
              >
                <small>Copy ID</small>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["faculty"],
  methods: {
    onCopy(e) {
      this.success("You just copied: " + e.text);
    },
    onError(e) {
      this.$toasted.console.error();
      "An error occured".goAway(2500);
    },
    success(message) {
      this.$toasted.success("ID Copied successfully").goAway(2500);
    },
  },
};
</script>

<style scoped></style>
