<template>
  <div id="Home">
    <TheNavbar :name="name"/>
    <AddNewButton ref="myButton" @neues-rezept="addRezept"/>
    <ul>
      <li
        v-for="rezept in rezepte"
        :key="rezept.name"
        @click="rezept.isNew = false"
        :class="rezept.isNew ? 'recent' : 'seen'"
      >
        {{ rezept.name }}
        <span>Bewertung: {{rezept.bewertung}}</span>
        <span>Autor: {{rezept.autor}}</span>
      </li>
    </ul>
    <component :is="component"></component>
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue';
import TheFooter from '@/components/TheFooter.vue';
import AddNewButton from '@/components/AddNewButton.vue';

export default {
  props: {
    name: {
      type: String,
      default: 'Neuer',
      required: false,
    },
  },
  components: {
    AddNewButton,
    TheNavbar,
    TheFooter,
  },
  mounted() {
    console.log(`${this.$refs.myButton.whatDoIReturn}`);
  },
  name: 'Home',
  methods: {
    addRezept(neuesRezept) {
      this.rezepte.unshift(neuesRezept);
    },
  },
  data() {
    return {
      component: AddNewButton,
      rezepte: [
        {
          name: 'Cordon Bleu', bewertung: '3/5', autor: 'Julia Fuchsig', isNew: true,
        },
        {
          name: 'Cordon Reud', bewertung: '3/5', autor: 'Julia Fuchsig', isNew: true,
        },
        {
          name: 'Cordon Greud', bewertung: '3/5', autor: 'Julia Fuchsig', isNew: true,
        },
        {
          name: 'Cordon Bleud', bewertung: '3/5', autor: 'Julia Fuchsig', isNew: true,
        },
        {
          name: 'Cordon Blyat', bewertung: '3/5', autor: 'Julia Fuchsig', isNew: true,
        },
        {
          name: 'Cordon Blin', bewertung: '3/5', autor: 'Julia Fuchsig', isNew: true,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped‚>
#Home {
  ul {
    margin: 16px;
    list-style: none;
    display: flow;
    li {
      min-width: 250px;
      padding: 8px;
      margin: 5px;
      border: 2px solid lightgray;
      border-radius: 4px;
      background-color: lightgray;
      &.recent {
        background-color: lightcoral;
      }
      &:hover {
        border: 2px solid darkgray;
      }
      &:focus {
        border: 2px solid lightblue;
      }
      span {
        display: block;
        color: #264653;
      }
    }
  }
}
</style>
