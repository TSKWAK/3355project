<template>
          <div>
            <div>
              <form class="d-flex" method = "get">
                <router-link :to="`/write`">
                  <button type="button" class="btn btn-secondary" style="height:40px">
                    write
                  </button>
                </router-link>

                <router-link :to="`/write2`">
                  <button type="button" class="btn btn-secondary" style="height:40px">
                    write2
                  </button>
                </router-link>

                <router-link :to="`/write3`">
                  <button type="button" class="btn btn-secondary" style="height:40px">
                    write3
                  </button>
                </router-link>
                
                <input class="form-control me-2" type="검색" 
                placeholder="검색어를 입력하세요" aria-label="Search"
                style="width:200px; margin-left:60%; margin-bottom:20px">
                <button class="btn btn-outline-success" type="submit" style="height:40px">
                  검색
                </button>
             </form>
            </div>
            
              <table class="type06" width="90%" style="margin-top:10px">
              <tr>
                  <th scope="row">no.</th>
                  <td class="title">title</td>
                  <td>ID</td>
                  <td>date</td>
                  <td>hit</td>
              </tr>
              <tr v-for="(boardlist,i) in $store.state.boardlist" :key="i">
                  <th scope="row">{{boardlist.rownum}}</th>
                  <td class="title" @click="$store.dispatch('getDetail', boardlist.board_id)"><router-link :to="`/detail`">
                    {{boardlist.title}}
                    </router-link>
                  </td>
                  <td style="width: 150px">name/fsdfdasfsa</td>
                  <td style="width: 200px">{{boardlist.date}}</td>
                  <td style="width: 130px">{{boardlist.hit}}</td>
              </tr>
              </table>

              <!-- 이전페이지 -->
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

                <!-- page Num-->
                  <li class="page-item" v-for="(pages,i) in 5" :key="i">
                    <a class="page-link" 
                    @click="
                    $store.commit('changePage', { startnum: $store.state.startnum, 
                    page: $store.state.startnum+i, paging: $store.state.startnum+i}),
                    $store.dispatch('getData', {name: $store.state.url, page: $store.state.page})"
                    v-if="$store.state.startnum+i <= $store.state.count">

                    {{$store.state.startnum+i}}
                    </a>
                  </li>

                <!-- 다음페이지 -->
                  <li class="page-item">
                    <a class="page-link" aria-label="Next" @click="
                    $store.commit('changePage', { startnum: $store.state.startnum+5, 
                    page: $store.state.startnum+5, paging: $store.state.startnum+5}),

                    $store.dispatch('getData', 
                    {name: $store.state.url, page: $store.state.page})
                    "
                    v-if="$store.state.startnum+5 <= $store.state.count"

                    >
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>

              page: {{$store.state.paging}} / {{$store.state.count}}
              
            </div>

</template>
<script>
export default {
  data(){
    return{
      page: 1,
      paging: 1,
      startnum: 1

    }
  },
  methods: {
    // change(v){
    //   this.page = ((v-1)*10);
    //   this.startnum = (v-(v-1)%5)
    //   this.paging = v
    // },
    // clicks(v, s){
    //   if(v>=s){
    //     alert('다음페이지가 없습니다')
    //     console.log("v:"+v)
    //     console.log("s:"+s)

    //   }
    // }
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