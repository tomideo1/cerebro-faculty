<template>
  <div><Header /><router-view /></div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "App",
  components: { Header },
};
</script>

<style>
div {
  font-family: "Mukta" !important;
}

.my-img {
  width: 90px;
  height: 90px;
  margin: auto;
}
</style>
