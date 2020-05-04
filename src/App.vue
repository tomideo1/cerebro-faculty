<template>
    <div>
        <b-navbar class="is-dark" >
            <template slot="brand">
                <b-navbar-item tag="router-link" :to="{ path: '/' }">
                    <img
                            style="max-height: 50px"
                            src="https://res.cloudinary.com/dldd8ucby/image/upload/v1587851649/cerebro/cerebrologo_2x.png"
                            alt="Cerebro Faculty"
                    />
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ path: '/' }">
                    <img
                            style="max-height: 50px"
                            src="@/assets/eic-logo.png"
                            alt="Cerebro Faculty"
                    />
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ path: '/' }" v-if="$route.path === '/member'">
                    <button class="button is-light">
                        <i class="fa fa-arrow"></i>
                        <span>Back to List</span>
                    </button>
                </b-navbar-item>
            </template>

        </b-navbar>
        <router-view/>
    </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
