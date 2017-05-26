<template>
  <div class="showFeeds">
    <table class="table" style="padding:32px">
      <tr v-for="room in rooms">
        <td style="backgroundColor:#90EE90">{{room['.key']}}</td>
        <td v-for="(time, index) in room['.value']" v-if="index >=9">
          <span class="tag is-success is-medium" v-if="time == 'empty'"><b v-if="index===9">0</b>{{index}}:00</span>
          <span class="tag" v-else><b v-if="index===9">0</b>{{index}}:00</span>
        </td>
        <td><button type="button" @click="cancleRoom(room['.key'])" class="button is-danger">ยกเลิก</button></td>
      </tr>
    </table>
      <button type="button" class="button is-danger is-outlined" name="btn_clear" @click="clear()">คืนค่าการจอง</button>
  </div>
</template>

<script>
  export default {
    props: ['rooms', 'cancle', 'clear'],
    name: 'showFeeds',
    methods: {
      cancleRoom (room) {
        this.cancle(room)
      },
      clear () {
        this.clear()
      }
    }
  }
</script>
