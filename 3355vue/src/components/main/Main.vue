
<template>
<div>
  

<br>
<center>
<h2 style="margin-bottom:45px; margin-right:25%;">카테고리별 인기글 TOP3</h2>
</center>
<div>
  
    <div class="container">
      <div class="row">
        <hr style="width:1000px;"> 
      <table class="table" style="width:300px; margin-right:50px;">
        <thead>
          <tr>
            <th scope="col" colspan="2">자유게시판
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(freeboard, i) in $store.state.freeboardBestList" :key="i">
            <th scope="row">no.{{i+1}}</th>
            <td>{{freeboard.title}}
              <span style="color:pink; float:right;">
                  <i class="fa fa-commenting-o" aria-hidden="true">
                    {{freeboard.commentCount}} </i>
                  | 
                    <i class="fa fa-heart" aria-hidden="true" style="color: #FF6464;">
                    {{freeboard.pop}}
                    </i>
                  </span>
            </td>
          </tr>
        </tbody>
      </table>

      <table class="table" style="width:300px; margin-right:50px;"
      >
        <thead>
          <tr>
            <th scope="col" colspan="2">축구게시판
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(soccer, i) in $store.state.soccerBestList" :key="i">
            <th scope="row">no.{{i+1}}</th>
            <td>{{soccer.title}}
              <span style="color:pink; float:right;">
                  <i class="fa fa-commenting-o" aria-hidden="true">
                    {{soccer.commentCount}} </i>
                  | 
                    <i class="fa fa-heart" aria-hidden="true" style="color: #FF6464;">
                    {{soccer.pop}}
                    </i>
                  </span>
            </td>
          </tr>
        </tbody>
      </table>

      <table class="table" style="width:300px;">
        <thead>
          <tr>
            <th scope="col" colspan="2">야구게시판
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(baseball, i) in $store.state.baseballBestList" :key="i">
            <th scope="row">{{i+1}}</th>
            <td>{{baseball.title}}
              <span style="color:pink; float:right;">
                  <i class="fa fa-commenting-o" aria-hidden="true">
                    {{baseball.commentCount}} </i>
                  | 
                    <i class="fa fa-heart" aria-hidden="true" style="color: #FF6464;">
                    {{baseball.pop}}
                    </i>
                  </span>
            </td>
          </tr>
        </tbody>
      </table>

      <table class="table" style="width:300px; margin-right:50px;">
        <thead>
          <tr>
            <th scope="col" colspan="2">농구게시판
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(basketball, i) in $store.state.basketballBestList" :key="i">
            <th scope="row">{{i+1}}</th>
            <td>{{basketball.title}}
              <span style="color:pink; float:right;">
                  <i class="fa fa-commenting-o" aria-hidden="true">
                    {{basketball.commentCount}} </i>
                  | 
                    <i class="fa fa-heart" aria-hidden="true" style="color: #FF6464;">
                    {{basketball.pop}}
                    </i>
                  </span>
            </td>
          </tr>
        </tbody>
      </table>

      <table class="table" style="width:300px; margin-right:50px;">
        <thead>
          <tr>
            <th scope="col" colspan="2">배구게시판
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(bollyball, i) in $store.state.bollyballBestList" :key="i">
            <th scope="row">{{i+1}}</th>
            <td>{{bollyball.title}}
              <span style="color:pink; float:right;">
                  <i class="fa fa-commenting-o" aria-hidden="true">
                    {{bollyball.commentCount}} </i>
                  | 
                    <i class="fa fa-heart" aria-hidden="true" style="color: #FF6464;">
                    {{bollyball.pop}}
                    </i>
                  </span>
            </td>
          </tr>
        </tbody>
      </table>

      <table class="table" style="width:300px;">
        <thead>
          <tr>
            <th scope="col" colspan="2">테니스게시판
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(tenis, i) in $store.state.tenisBestList" :key="i">
            <th scope="row">{{i+1}}</th>
            <td>{{tenis.title}}
              <span style="color:pink; float:right;">
                  <i class="fa fa-commenting-o" aria-hidden="true">
                    {{tenis.commentCount}} </i>
                  | 
                    <i class="fa fa-heart" aria-hidden="true" style="color: #FF6464;">
                    {{tenis.pop}}
                    </i>
                  </span>
            </td>
          </tr>
        </tbody>
      </table>

      <table class="table" style="width:300px;">
        <thead>
          <tr>
            <th scope="col" colspan="2">골프게시판
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(golf, i) in $store.state.golfBestList" :key="i">
            <th scope="row">{{i+1}}</th>
            <td>{{golf.title}}
              <span style="color:pink; float:right;">
                  <i class="fa fa-commenting-o" aria-hidden="true">
                    {{golf.commentCount}} </i>
                  | 
                    <i class="fa fa-heart" aria-hidden="true" style="color: #FF6464;">
                    {{golf.pop}}
                    </i>
                  </span>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
<hr style="width:1000px;"> 
      <br>
      
      <br>

      <!-- <div class="container" >
        <b-embed
        style="margin-right:350px; width:1000px; height:500px;"
          type="iframe"
          aspect="16by9"
          src="https://www.youtube.com/embed/D4uM926h55w"
          
          allowfullscreen
        ></b-embed>
        <br>
        <br>
      </div> -->

    </div>

    
</div>

</div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    mounted() {
      this.$store.dispatch('getMainBestList', );
    }
  }
</script>
