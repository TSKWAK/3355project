<<<<<<< HEAD
<template>
<div>
  <h3>메인페이지입니다</h3>
<router-link :to="`/board/`+freeboard">
<button @click="$store.dispatch('getData', {name: freeboard, page: 0})">board이동시험버튼</button>
</router-link>
</div>
</template>

<script>
  export default {
    name: 'Home',
    data(){
      return{
      freeboard: 'freeboard'
      }
    }
  }
</script>
=======
<template>
<div>
  <h3>메인페이지입니다</h3>
<router-link :to="`/board/`+freeboard">
<button @click="$store.dispatch('getData', {name: freeboard, page: 0})">board이동시험버튼</button>
</router-link>
</div>
</template>

<script>
  export default {
    name: 'Home',
    data(){
      return{
      freeboard: 'freeboard'
      }
    }
  }
</script>
>>>>>>> refs/remotes/origin/master
