<template lang="html">
  <div id="app">

<h1 align="center">Grand Budapest Hotel</h1>
<guests-form/>
<br>
<hr>
<br>
<guests-table :guests="guests" />

</div>
</template>

<script>
import GuestsForm from './components/GuestsForm.vue';
import GuestsTable from './components/GuestsTable.vue';
import GuestService from './services/GuestService.js';

import {
  eventBus
} from './main';

export default {
  name: 'app',
  data() {
    return {
      guests: []
    }
  },
  components: {
    'guests-form': GuestsForm,
    'guests-table': GuestsTable
  },
  mounted() {
    this.fetchData();

    eventBus.$on('guest-added', guest => this.guests.push(guest));

    eventBus.$on('guest-deleted', id => {
      const index = this.guests.indexOf(guest => guest.id === id);
      this.guests.splice(index, 1)
    })
  },
  methods: {
    fetchData() {
      GuestService.getGuests()
        .then(guests => this.guests = guests);
    }
  }
}
</script>

<style lang="css">
body{
  font-family: 'Roboto', sans-serif;
  background-image: url("https://blog.nationalgeographic.org/wp-content/uploads/2014/03/The-Grand-Budapest-Hotel-Still.jpg");
  background-size: cover;
}
h1{
  font-size: 42px;
  color: white;
}
hr{
  width: 70%;
  color: white;
}
</style>
