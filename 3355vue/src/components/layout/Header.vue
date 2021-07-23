<<<<<<< HEAD
<template>
<div>
<div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <router-link to="/">
      <b-navbar-brand>
      <b-img :src="require('@/assets/logo.png')" style="width:30px"></b-img>
      3355
      </b-navbar-brand>
    </router-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#">Link</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto" style="margin-left:auto">
      <b-navbar-nav>
        <router-link to="/join">
        <b-button variant="outline-light" style="margin:5px">Join</b-button>
        </router-link>
        <router-link to="/login">
        <b-button variant="outline-light" style="margin:5px">Login</b-button>
        </router-link>
      </b-navbar-nav>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>


  <b-container fluid>
    <b-row>
      <b-col id="mainclass">
        <router-link to="/">
        <b-img :src="require('@/assets/logo.png')" style="width:50px; color: white;"></b-img>
        3355<br>
        </router-link>
      </b-col>
      
    </b-row>

  </b-container>
</div>
</template>
<script>
export default {
}
</script>
<style>
#mainclass{
  width: 100%;
  height: 300px;
  background-image: url('../../assets/mainimage.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  text-align: center;
  line-height: 250px;
  color: rgba(30, 5, 5, 0.952);
}
=======
<template>
<div>
<div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <router-link to="/">
      <b-navbar-brand>
      <b-img :src="require('@/assets/logo.png')" style="width:30px"></b-img>
      3355
      </b-navbar-brand>
    </router-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#">Link</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto" style="margin-left:auto">
      <b-navbar-nav>
        <router-link to="/join">
        <b-button variant="outline-light" style="margin:5px">Join</b-button>
        </router-link>
        <router-link to="/login">
        <b-button variant="outline-light" style="margin:5px">Login</b-button>
        </router-link>
      </b-navbar-nav>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>


  <b-container fluid>
    <b-row>
      <b-col id="mainclass">
        <router-link to="/">
        <b-img :src="require('@/assets/logo.png')" style="width:50px; color: white;"></b-img>
        3355<br>
        </router-link>
      </b-col>
      
    </b-row>

  </b-container>
</div>
</template>
<script>
export default {
}
</script>
<style>
#mainclass{
  width: 100%;
  height: 300px;
  background-image: url('../../assets/mainimage.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  text-align: center;
  line-height: 250px;
  color: rgba(30, 5, 5, 0.952);
}
>>>>>>> branch 'master' of https://github.com/TSKWAK/3355project.git
</style>