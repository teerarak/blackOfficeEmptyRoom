﻿<template>
  <div id="app">
    <nav class="nav" style="backgroundColor:#008b8b">
    <div class="nav-left">
      <a class="nav-item">
        <img src="../header.png">
      </a>
    </div>
    <div class="nav-right ">
      <a class="nav-item">
        <router-link to="/"><button type="button" class="button" name="button">แสดงสถานะ</button></router-link>
      </a>
      <a class="nav-item">
      <router-link to="/showHistory"><button type="button" class="button" name="button">แสดงประวัติ</button></router-link>
      </a>
    </div>
    </nav>
    <router-view :rooms="rooms" :booking="booking" :cancle="cancleRoom" :clear="clear"></router-view>
  </div>
</template>

<script>
  import firebase from 'firebase'
  let firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyDVZThvTokq7kbiZe_mXTnjv3QUq5MbMMk',
    authDomain: 'emptyroom-5e725.firebaseapp.com',
    databaseURL: 'https://emptyroom-5e725.firebaseio.com',
    projectId: 'emptyroom-5e725',
    storageBucket: 'emptyroom-5e725.appspot.com',
    messagingSenderId: '289945777511'
  })
  let db = firebaseApp.database()
  export default {
    name: 'app',
    data () {
      return {
        rooms: [],
        booking: [],
        users: []
      }
    },
    methods: {
      clear () {
        let vm = this
        var room = {
          9: 'empty',
          10: 'empty',
          11: 'empty',
          12: 'empty',
          13: 'empty',
          14: 'empty',
          15: 'empty',
          16: 'empty',
          17: 'empty',
          18: 'empty'
        }
        console.log('test')
        for (var n = 0; n < vm.rooms.length; n++) {
          if (n < 9) {
            this.$firebaseRefs.rooms.child('Tutor' + ('0' + (n + 1))).set(room)
          } else {
            this.$firebaseRefs.rooms.child('Tutor' + (n + 1)).set(room)
          }
        }
      },
      cancleRoom (roomID) {
        let time = new Date()
        let room = []
        let currentDate = time.getDate() + '/' + parseInt(time.getMonth() + 1) + '/' + parseInt(time.getYear() + 1900)
        let checkDate
        let end, uid, start, facebookID, stdId
        this.rooms.forEach(function (element) {
          if (roomID === element['.key']) {
            room = (element['.value'])
            console.log(roomID + ' ' + room + ' ' + time.getHours() + ' ' + currentDate)
          }
        })
        this.booking.forEach(function (element) {
          if (element.room === roomID && element.date === currentDate && element.status === 'active' && element.startTime <= 18) {
            checkDate = element.date
            end = element.endTime
            start = element.startTime
            stdId = element.stdId
            facebookID = element.facebookId
            uid = element['.key']
            console.log(uid + ' ' + checkDate + ' ' + roomID + ' ' + start + ' ' + stdId + ' ' + facebookID)
          }
        })
        for (let i = 0; i < room.length; i++) {
          if (i < end && i > time.getHours()) {
            room[i] = 'empty'
          }
        }
        console.log(uid)
        this.$firebaseRefs.rooms.child(roomID).set(room)
        this.$firebaseRefs.booking.child(uid).set({
          date: checkDate,
          endTime: end,
          facebookId: facebookID,
          room: roomID,
          startTime: start,
          status: 'finish',
          stdId: stdId
        })
      }
    },
    mounted () {
      let vm = this
      vm.$bindAsArray('booking', db.ref('Booking'))
      vm.$bindAsArray('rooms', db.ref('Rooms'))
      vm.$bindAsArray('users', db.ref('Users'))
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.card {
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 60%;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
</style>
