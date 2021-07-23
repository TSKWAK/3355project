<template>
<div id="app">

  <Header/> <br>
      <div class="row">
          <div class="cols col-sm-5 col-md-4 col-lg-3" style="margin-top: 30px">
            <Category/>
          </div>

          <div class="cols col-sm-7 col-md-8 col-lg-9" style="margin-top: 30px">
            <router-view/>
          </div>
      </div>

</div>
</template>

<script>
import Header from '@/components/layout/Header.vue'
import Category from '@/components/layout/Category.vue'

export default {
  data(){
    return{
      name: 'App',
    }
  },

  components: {
    Header,
    Category
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
