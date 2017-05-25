<template>
  <div class="showFeeds">
    <table class="table" style="padding:32px">
      <tr v-for="room in rooms">
        <td>{{room['.key']}}</td>
        <td v-for="(time, index) in room['.value']" v-if="index >=9">
          <b style="backgroundColor:#90EE90" v-if="time == 'empty'"><b v-if="index===9">0</b>{{index}}:00</b>
          <b style="backgroundColor:#FF4040" v-else><b v-if="index===9">0</b>{{index}}:00</b>
        </td>
        <td><button type="button" @click="cancleRoom(room['.key'])" class="button is-danger">ยกเลิก</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    props: ['rooms', 'cancle'],
    name: 'showFeeds',
    methods: {
      cancleRoom (room) {
        this.cancle(room)
      }
    }
  }
</script>
