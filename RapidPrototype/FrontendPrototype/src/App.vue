<template>
  <div id="App">
    <Home :name="name"/>
  </div>
</template>

<script>
import Home from './views/Home.vue';

export default {
  components: {
    Home,
  },
  data() {
    return {
      name: 'Joel',
    };
  },
};
</script>

<style lang="scss">
  #App {
    font-family: 'Open Sans', sans-serif;
  }
</style>
