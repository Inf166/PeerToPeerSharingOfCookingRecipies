<template>
  <button
    id="addnew"
    @click.prevent="addRezept($event)"
  >+ F&uuml;ge ein neues Rezept hinzu</button>
</template>

<script>
export default {
  name: 'AddNewButton',
  methods: {
    addRezept(event) {
      this.$emit(
        'neues-rezept',
        {
          name: 'Cordon Feucht', bewertung: '3/5', autor: 'Julia Fuchsig', isNew: true,
        },
      );
    },
  },
  data() {
    return {
      whatDoIReturn: 'A new Receipt!',
    };
  },
};
</script>

<style lang="scss">
#addnew {
  margin: 16px;
  padding: 8px;
  border: 2px solid red;
  font-size: 16px;
  &:hover {
    background-color: orangered;
    color: white;
  }
}
</style>
