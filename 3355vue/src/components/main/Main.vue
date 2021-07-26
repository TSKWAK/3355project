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
<div style="text-align:center;">

<h2 style="margin-bottom:45px; margin-right:110px;">카테고리별 인기글 TOP3</h2>
<div>
  
    <div class="container">
      <div class="row" style="">
      <table class="table" style="width:300px; margin-right:50px;">
        <thead>
          <tr>
            <th scope="col">no</th>
            <th scope="col">title</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>fsadf</td>
          </tr>
        </tbody>
      </table>

      <table class="table" style="width:300px; margin-right:50px;">
        <thead>
          <tr>
            <th scope="col">no</th>
            <th scope="col">title</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>fsadf</td>
          </tr>
        </tbody>
      </table>

      <table class="table" style="width:300px;">
        <thead>
          <tr>
            <th scope="col">no</th>
            <th scope="col">title</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>fsadf</td>
          </tr>
        </tbody>
      </table>
      </div>

    </div>

    
</div>

</div>
</template>

<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>
>>>>>>> branch 'develop' of https://github.com/TSKWAK/3355project.git
