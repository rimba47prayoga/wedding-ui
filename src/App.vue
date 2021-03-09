<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    Array.from(document.querySelectorAll("html, body, div#app")).forEach(
      (item) => {
        item.classList.add("h-100");
      }
    );
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #fbf6f3;
}
</style>
