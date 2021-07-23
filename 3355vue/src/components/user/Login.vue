<template>
<center>
  <form v-on:submit.prevent="loginUser()">
  <!-- <div>
    <label for="email">Email</label>
    <input id="userid" type="text" v-model="users.userId">
  </div>
  <div>
    <label for="password">Password</label>
    <input id="userpw" type="password" v-model="users.userPw">
  </div> -->
  <div class="col col-lg-8 col-sm-10">
    <h2>로그인</h2><br>
    <div>
    <!-- <i class="fa fa-id-badge fa-2x" aria-hidden="true" style="float:left;"></i> -->
    <!-- <i class="fa fa-user-circle-o fa-2x" aria-hidden="true" style="float:left;"></i> -->
    <i class="fa fa-user-o fa-2x" aria-hidden="true" style="float:left;"></i>
    <div>
    <b-form-input
      id="userId"
      v-model="users.userId"
      :state="nameState"
      aria-describedby="input-live-help input-live-feedback"
      placeholder="아이디를 입력해주세요"
      trim
      style="width:90%"
    ></b-form-input>
    </div>
    </div>

    <br>
    <div>
      <!-- <i class="fa fa-unlock-alt fa-2x" aria-hidden="true" style="float:left;"></i> -->
      <i class="fa fa-key fa-2x" aria-hidden="true" style="float:left;"></i>
    </div>
    <b-form-input
      id="userPw"
      v-model="users.userPw"
      :state="nameState"
      type="password"
      aria-describedby="input-live-help input-live-feedback"
      placeholder="비밀번호를 입력해주세요"
      trim
      style="width:90%"
    ></b-form-input>
    </div>
    <br>


<div>
  <b-button block variant="danger" type="submit">
    <b-badge variant="light">로그인</b-badge></b-button>
</div>
</form>
</center>
</template>

<script>
import axios from 'axios';
export default {
  computed:{
      nameState() {
        return this.users.userId.length > 2 ? true : false
    }
  },
  data(){
    return{
    users: {
        userId: '',
        userPw: '',
      },
      name: ''
    }
  },
  methods: {
    loginUser() {
      if(this.users.userId.length > 2){
      axios.post('/api/user/login', this.users)
      .then((res) => {
        if(res.data !== ''){
          console.log("res:",res.data)
          console.log("userid:", res.data)
          this.$session.start()
          this.$session.set('jwt', res.data)
          this.$store.commit('userCheck', 'true')
          console.log(this.$session.get('jwt'))
          alert('로그인 되었습니다')
          this.$router.push('/')
        }else{
          alert('아이디와 비밀번호를 확인해주세요')
        }
      })
      .catch((err) =>{
        console.log(err)
      })
      }else{
        alert('아이디와 비밀번호 글자수를 확인해주세요')
      }
    },
  }
}

</script>

<style>

</style>