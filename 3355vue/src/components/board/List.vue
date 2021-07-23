<template>
          <div container style="col-lg-12 col-md-8 col-sm-3 col-xs-1" >
            <div>
                <h1 style="margin-right:200px;">인기글 TOP3</h1>
              <form class="d-flex" method = "get">

                <!-- 인기글 리스트 테이블 -->
              <table class="type06" width="90%" style="margin-top:10px; weight:bold;">
              <tr>
                  <th scope="row">no.</th>
                  <td class="title">title</td>
                  <td>ID</td>
                  <td>date</td>
                  <td>hit</td>
              </tr>
              <tr v-for="(bestlist,i) in $store.state.bestlist" :key="i">
                  <th scope="row">best{{i+1}}</th>
                  <!-- <router-link :to="`/detail`"> -->
                  <td class="title" 
                  @click="titleCheck(bestlist.board_id)">
                    {{bestlist.title}} 
                  <span style="color:pink; float:right;">
                  <i class="fa fa-commenting-o" aria-hidden="true">
                    {{bestlist.commentCount}} </i>
                  | 
                    <i class="fa fa-heart" aria-hidden="true" style="color: #FF6464;">
                    {{bestlist.pop}}
                    </i>
                  </span>

                    
                  </td>
                  <!-- </router-link> -->
                  <td style="width: 150px">{{bestlist.user_id}}</td>
                  <td style="width: 200px">{{bestlist.date}}</td>
                  <td style="width: 130px">{{bestlist.hit}}</td>
              </tr>
              </table>
              <!-- 인기글 리스트 끝 -->
                
                <!-- 글 검색 폼 -->
                <!-- <input class="form-control me-2" type="검색" 
                placeholder="검색어를 입력하세요" aria-label="Search"
                style="width:200px; margin-left:60%; margin-bottom:20px">
                <button class="btn btn-outline-success" type="submit" style="height:40px">
                  검색
                </button> -->
                <!-- 글 검색 폼 끝 -->
             </form>
            </div>




              <!-- 리스트 테이블 -->
              <h2 style="margin-right:200px;">{{$store.state.categoryName}}</h2>

              <table class="type06" width="90%" style="margin-top:10px; weight:bold;">
              <tr>
                  <th scope="row">no.</th>
                  <td class="title">title</td>
                  <td>ID</td>
                  <td>date</td>
                  <td>hit</td>
              </tr>
              <tr v-for="(boardlist,i) in $store.state.boardlist" :key="i">
                  <th scope="row">{{boardlist.rownum}}</th>
                  <!-- <router-link :to="`/detail`"> -->
                  <td class="title" 
                  @click="titleCheck(boardlist.board_id)">
                    {{boardlist.title}} 
                  <span style="color:pink; float:right;">
                  <i class="fa fa-commenting-o" aria-hidden="true">
                    {{boardlist.commentCount}} </i>
                  | 
                    <i class="fa fa-heart" aria-hidden="true" style="color: #FF6464;">
                    {{boardlist.pop}}
                    </i>
                  </span>

                    
                  </td>
                  <!-- </router-link> -->
                  <td style="width: 150px">{{boardlist.user_id}}</td>
                  <td style="width: 200px">{{boardlist.date}}</td>
                  <td style="width: 130px">{{boardlist.hit}}</td>
              </tr>
              </table>
              <!-- 리스트 테이블 끝 -->


              <!-- 게시글 글쓰기 버튼-->
                  <div style="dispaly:inline-block; float:left;">
                <router-link :to="`/write`">
                  <button type="button" class="btn btn-dark" style="height:40px; width:80px "
                  v-show="$store.state.userCheck === 'true'">
                    <i class="fa fa-pencil" aria-hidden="true"> write</i>
                  </button>
                </router-link>
                  </div>
              <!-- 게시글 글쓰기 버튼 끝-->


              <!-- 이전페이지 -->
              <div style="text-align:center;">
              <nav aria-label="Page navigation example" style="margin-left:35%">
                <ul class="pagination" >
                  <li class="page-item">
                    <a class="page-link" aria-label="Previous"
                    @click="
                    $store.commit('changePage', { startnum: $store.state.startnum-1, 
                    page: $store.state.startnum-1, paging: $store.state.startnum-1}),

                    $store.dispatch('getData', 
                    {name: $store.state.url, page: $store.state.page})"

                    v-if="$store.state.startnum != 1">
                      <span aria-hidden="false">&laquo;</span>
                    </a>
                  </li>
                <!-- 이전페이지 끝 -->


                <!-- 페이징 넘버-->
                  <li class="page-item" v-for="(pages,i) in 5" :key="i">
                    <a class="page-link" 
                    @click="$store.commit('changePage', { startnum: $store.state.startnum, 
                    page: $store.state.startnum+i, paging: $store.state.startnum+i}),
                    $store.dispatch('getData', {name: $store.state.url, page: $store.state.page})"
                    v-if="$store.state.startnum+i <= $store.state.count">

                    {{$store.state.startnum+i}}
                    </a>
                  </li>
                 <!-- 페이징 넘버 끝-->


                 <!-- 다음페이지 -->
                  <li class="page-item">
                    <a class="page-link" aria-label="Next"
                    @click="$store.commit('changePage', { startnum: $store.state.startnum+5, 
                    page: $store.state.startnum+5, paging: $store.state.startnum+5}),
                    $store.dispatch('getData', 
                    {name: $store.state.url, page: $store.state.page})
                    "
                    v-if="$store.state.startnum+5 <= $store.state.count">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                  <!-- 다음 페이지 끝 -->
                </ul>
              </nav>
              </div>

              <span style="margin-right:130px;">page: {{$store.state.paging}} / {{$store.state.count}}</span>
              
            </div>

</template>
<script>
import Category from '@/components/layout/Category.vue'
export default {
  components:{
    Category
  },
  data(){
    return{
      page: 1,
      paging: 1,
      startnum: 1,

    }
  },
  methods: {
    titleCheck(v){
      if(this.$store.state.userCheck === 'true'){
        this.$store.dispatch('getDetail', {bId:v, uId:this.$session.get('jwt')});
        this.$store.dispatch('popCheck', {bId:v, uId: this.$session.get('jwt')})
        this.$store.commit("setBoardId", v)
        this.$router.push('/detail')
        console.log("v:",v)
      }else{
        alert('로그인을 해주세요')
        this.$router.push('/login')
      }
    },
  }
}

</script>
<style>
.title{
    width: 500px;
}

table.type06 {
  border-collapse: collapse;
  text-align: left;
  line-height: 1.5;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  margin: 20px 10px;
}
table.type06 th {
  padding: 10px;
  font-weight: bold;
  vertical-align: top;
  width: 30px;
}
table.type06 td {
  padding: 10px;
  margin-right: 50px;
  vertical-align: top;
}
 a:link { color: red; text-decoration: none;}
 a:visited { color: black; text-decoration: none;}
 a:hover { color: black; text-decoration: underline;}

</style>