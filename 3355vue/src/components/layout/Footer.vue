<template>
  <div>
      <div class="container-fluid" id="footer"
      v-if="$store.state.MainImg = 'soccer'"
       v-bind:style="{ backgroundImage: 'url('+soccerImg+')' }">
      </div>

      
</div>
</template>

<script>
export default {
   data(){
        return{
            soccerImg: require('../../assets/soccer.jpg'),
        }
    },
    methods:{
    },
    // computed:{
    //   changeUrl(){
    //      return this.$store.state.MainImg
    //   },
    //   watch:{
    //     changeUrl(val){
    //       this.mainImg = val
    //     },
      
      
    

}
</script>

<style>
.container-fluid{
  width: 100%;
  height: 200px;
  /* background-image: url('../../assets/mainimage.jpg'); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  text-align: center;
  line-height: 250px;
  color: rgba(30, 5, 5, 0.952);
}
</style>