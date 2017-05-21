<template>
  <div id="app">
    <router-link to="/"><button type="button" name="button">showFeeds</button></router-link>
    <router-link to="/showHistory"><button type="button" name="button">showHistory</button></router-link>
    <router-view :rooms="rooms" :booking="booking"></router-view>
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
      cancleRoom (roomID) {
        let time = new Date()
        let room = []
        this.rooms.forEach(function (element) {
          if (roomID === element['.key']) {
            room = (element['.value'])
            console.log(roomID + ' ' + room + ' ' + time.getHours() + ':' + time.getMinutes())
          }
        })
        // this.$firebaseRefs.rooms.child(roomID).set(room)
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
  margin-top: 60px;
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
