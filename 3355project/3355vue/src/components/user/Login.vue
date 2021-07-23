<<<<<<< HEAD
<template>
  <div>로그인 페이지<br>
  <form v-on:submit.prevent="loginUser()">
  <div>
    <label for="email">Email</label>
    <input id="email" type="text" v-model="user.userid">
  </div>
  <div>
    <label for="password">Password</label>
    <input id="password" type="password" v-model="user.userpw">
  </div>
  <div>
    <button type="submit">Login</button>
  </div>
</form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return{
    user: {
        userid: 'asdf',
        userpw: 'afsd',
      }
    }
  },
  methods: {
    loginUser() {
      axios.post('/api/board/login', null, {parmas: {
        headers:{
          'Content-type': 'application/x-www-form-urlencoded',
        },
        userid: this.user.userid,
        userpw: this.user.userpw
      }})
      .then((res) => {
        console.log(userid, userpw)
        console.log("res:"+ res, res.data)
      })
      .catch((err) => {
        console.log(err, this.userid, this.userpw)
      })
    }
  }
}
</script>

<style>

=======
<template>
  <div>로그인 페이지<br>
  <form v-on:submit.prevent="loginUser()">
  <div>
    <label for="email">Email</label>
    <input id="email" type="text" v-model="user.userid">
  </div>
  <div>
    <label for="password">Password</label>
    <input id="password" type="password" v-model="user.userpw">
  </div>
  <div>
    <button type="submit">Login</button>
  </div>
</form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return{
    user: {
        userid: 'asdf',
        userpw: 'afsd',
      }
    }
  },
  methods: {
    loginUser() {
      axios.post('/api/board/login', null, {parmas: {
        headers:{
          'Content-type': 'application/x-www-form-urlencoded',
        },
        userid: this.user.userid,
        userpw: this.user.userpw
      }})
      .then((res) => {
        console.log(userid, userpw)
        console.log("res:"+ res, res.data)
      })
      .catch((err) => {
        console.log(err, this.userid, this.userpw)
      })
    }
  }
}
</script>

<style>

>>>>>>> refs/remotes/origin/master
</style>