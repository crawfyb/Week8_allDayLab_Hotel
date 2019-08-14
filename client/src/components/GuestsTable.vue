<template lang="html">

  <div>
    <div >
      <table id="table">
        <tr>
          <th align="left">Name</th>
          <th align="left">Email</th>
          <th align="left">Checked In?</th>
          <th align="left">Manage Booking</th>
          <th align="left">Delete</th>
        </tr>
        <tr v-for= "guest in guests">
          <td>{{guest.name}}</td>
          <td>{{guest.email}}</td>
          <td v-if="guest.checked_in === true">Yes</td>
          <td v-else>No</td>
          <td v-if="guest.checked_in === true"><button v-on:click="handleUpdate(guest._id, guest)" > Check Out</button></td>
          <td v-else><button v-on:click="handleUpdate(guest._id, guest)" > Check in</button></td>
          <td><button v-on:click="handleDelete(guest._id)">Delete </button></td>
        </tr>
      </table>
    </div>

  </div>

</template>

<script>
import {
  eventBus
} from '../main';
import GuestService from '../services/GuestService';
export default {
  name: 'guests-table',
  props: ['guests'],
  methods: {
    handleDelete(id) {
      GuestService.deleteGuest(id)
        .then(res => eventBus.$emit('guest-deleted', id));

    },

    handleUpdate(id, guest) {
      guest.checked_in = !guest.checked_in
      GuestService.updateGuest(id, guest)
    }
  }

}
</script>

<style lang="css" scoped>
#table{
  margin-top: 25px;
  align-items: center;
  justify-content: space-around;
  margin: auto;
  background-color: rgba(255,255,255, .7);
  width: 80%;
  border-radius: 5px;
}
th, td {
  font-size: 18px;
  padding: 5px;
}
</style>
