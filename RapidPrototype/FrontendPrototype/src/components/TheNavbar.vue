<template>
  <header>
    <div id="Navbar">
      <h2>{{ sayHi() }}</h2>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheNavbar',
  props: {
    name: {
      type: String,
      default: 'Neuer',
      required: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    sayHi() {
      return `Hi ${this.name}!`;
    },
  },
};
</script>

<style lang="scss">
header {
  #Navbar {
    width: 100vw;
    background-color: #457b9d;
    padding: 0;
    margin: 0;
    h2{
      color: white;
      padding: 32px;
      margin: 0;
    }
  }
}
</style>
