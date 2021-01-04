<template>
  <div class="new recipe">
    <h1>{{ msg }}</h1>
  
  </div>
</template>

<script>
export default {
  name: "NewRecipe",
  props: {
    msg: String
  }
};
</script>


