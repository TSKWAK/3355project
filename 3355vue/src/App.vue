<template>
<div id="app">

  <Header/> <br>
      <div class="row">
          <div class="cols col-sm-5 col-md-4 col-lg-3 col-xs-0" style="margin-top: 30px">
            <Category/>

            <div>
            <Blurb/>
            </div>



          </div>

          <div class="cols col-sm-7 col-md-8 col-lg-9 col-xs-12" style="margin-top: 30px">
            <router-view/>
          </div>
      </div> 

      <Footer/>

</div>
</template>

<script>
import Header from '@/components/layout/Header.vue'
import Category from '@/components/layout/Category.vue'
import Blurb from '@/components/layout/blurb.vue'
import Footer from '@/components/layout/Footer.vue'
import axios from 'axios'

export default {
  data(){
    return{
      name: 'App',
      category2: ['freeboard', 'soccer', 'baseball', 'basketball', 'bollyball', 'tenis', 'golf']
    }
  },
  mounted(){
    this.$store.dispatch('getDayCount',)
  },
  methods:{
    //   getDayCount(){
    // for(var i=0; i<this.category2.length; i++)
    //     axios
    //     .get("/api/board/dayCount?c="+this.category2[i])
    //     .then(res => {
    //       // if(this.$store.state.dayCountt = res.data)
    //       this.$store.state.dayCount2.push(res.data)
    //         console.log("this.soccer:",this.$store.state.dayCount2)
    //         console.log("res:",res.data)
    //     })
    //     .catch(err => {
    //       console.log(err)
    //     })
    //   }
  },

  components: {
    Header,
    Category,
    Blurb,
    Footer,
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
