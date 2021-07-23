<template>
<div style="margin-bottom:100px;">
<div>
  <b-navbar type="dark" variant="dark">
    <div style="text-align: center">

    <!-- 사이드바 -->
    <b-button v-b-toggle.sidebar-backdrop 
    variant="outline-light"
    style="width:50px; margin-right:10px;">☰</b-button>

    <b-sidebar
      id="sidebar-backdrop"
      title="Menu"
      :backdrop-variant="dark"
      backdrop
      shadow>
      
        <b-button variant="danger" v-for="(category,i) in $store.state.category" :key="i"
        style="width:200px; margin-bottom:10px;"
        @click="$store.dispatch('getData', {name: category.name, page: 0}),
                                $store.dispatch('getCount', category.name),
                                $store.commit('changePage', {page: 1, paging: 1, startnum: 1})"
                                :to="`/board/`+category.name">
          <b-badge variant="light"
          >{{category.name}}</b-badge>
        </b-button>
        <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
    </b-sidebar>
  </div>
  <!-- 사이드바 끝-->


    <!-- 좌측 상단 작은로고와 3355 -->
      <b-navbar-brand :to="'/'" style="text-decoration:none; color: white;">
      <b-img :src="require('@/assets/logo.png')" style="width:30px"></b-img>
      3355
      </b-navbar-brand>
    <!-- 좌측 상단 작은로고와 3355 끝 -->


    <!-- 오른쪽 상단 login, join , logout 버튼-->
      <b-navbar-nav class="ml-auto" style="margin-left:auto">
      <b-navbar-nav>
        <div>
        <div>
        <router-link to="/join">
        <b-button variant="outline-light" style="margin:5px"
        v-show="$store.state.userCheck === 'false'">Join</b-button>
        </router-link>
        <router-link to="/login">
        <b-button variant="outline-light" style="margin:5px"
        v-show="$store.state.userCheck === 'false'">Login</b-button>
        </router-link>
        </div>
        
        <div>
          <span style="color:white;" v-show="$store.state.userCheck === 'true'">
            <i class="fa fa-heart" aria-hidden="true" style="margin-right:5px;"></i>  
            <!-- <i class="fa fa-id-badge" aria-hidden="true" style="margin-right:5px;"></i> -->
            <strong>{{$session.get('jwt')}}</strong>님, 안녕하세요^^* 
          </span>
          
          <b-button v-b-modal.modal-no-backdrop variant="outline-light" style="margin:5px"
          v-show="$store.state.userCheck === 'true'">
            Logout </b-button>

          <b-modal id="modal-no-backdrop" 
          hide-backdrop content-class="shadow" 
          title="" @ok="logout()" >

            
              정말로 <code>'로그아웃'</code>
              하시겠습니까?
            
          </b-modal>
        </div>
        <!-- 오른쪽 상단 login, join, logout버튼 끝-->

      </div>
      </b-navbar-nav>
    </b-navbar-nav>
  </b-navbar>
</div>

  <!-- 메인이미지 + 메인 이미지 안에 로고와 3355 -->
  <b-container fluid>
    <b-row>
      <b-col id="mainclass" v-bind:style="{ backgroundImage: 'url(' + MainImg + ')' }">
        <div>
        <router-link to="/" style="text-decoration:none; color: white;">
        <b-img :src="require('@/assets/logo.png')" style="width:50px; color: white;"
        :to="`/`"></b-img>
        3355<br>
        </router-link>
        </div>
      </b-col>
    </b-row>
  </b-container>
  <!-- 메인이미지 + 메인 이미지 안에 로고와 3355 끝 -->

</div>
</template>

<script>
export default {
  data(){
    return{
      toggleShow: false,
      dark: 'dark',
      MainImg: require('../../assets/'+this.$store.state.MainImg+'.jpg'),
    }
  },
  methods: {
    logout(){
      this.$store.commit('userCheck', 'false')
      this.$session.set('jwt', null)
      console.log("로그아웃됨 session 값:", this.$session.get('jwt'))
      alert('로그아웃 되었습니다')
    },
  }
}
</script>

<style>
#mainclass{
  width: 100%;
  height: 300px;
  /* background-image: url('../../assets/mainimage.jpg'); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  text-align: center;
  line-height: 250px;
  color: rgba(30, 5, 5, 0.952);
}
</style>