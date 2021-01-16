<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Komponente lädt</h2>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

