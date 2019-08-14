<template lang="html">
  <div class="container">

  <h2>Add Guest</h2>
  <form name="guest-form" v-on:submit="handleSubmit" id="form">
    <div id="form-item">
      <label for="name" id="form-item">Name</label>
      <input type="text" v-model="name" required>
    </div>
    <div>
      <label for="email" id="form-item">Email</label>
      <input type="text" v-model="email" required>
    </div>
    <div id="form-item">
      <label for="checked_in" id="form-item">Checked in</label>
      <input type="radio" name="checked_in" v-bind:value="true" v-model="checked_in" required>
    </div>

    <div id="form-item">
      <label for="checked_in" id="form-item">Not Checked in</label>
      <input type="radio" name="checked_in" v-bind:value="false"  v-model="checked_in" required>
    </div>

    <input type="submit" value="save">

  </form>

</div>
</template>

<script>
import { eventBus } from '../main';
import GuestService from '../services/GuestService.js'

export default {
  name: 'guests-form',
  data() {
    return {
      name: "",
      email: "",
      checked_in: null
    }
  },
  methods: {
    handleSubmit(event){
      event.preventDefault();

      const payload ={
        name: this.name,
        email: this.email,
        checked_in: this.checked_in
      };
      GuestService.postGuest(payload)
      .then(guest => {
        eventBus.$emit('guest-added', guest);
      });
      event.target.reset();
    }
  }
}
</script>

<style lang="css" scoped>
#form{
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: auto;
  background-color: rgba(255,255,255, .7);
  width: 80%;
  border-radius: 5px;
}
#form-item{
  padding: 10px;
}
h2{
  color: white;
  padding-left: 130px;
}

</style>
