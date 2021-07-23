<<<<<<< HEAD
<template>
<div>

  <!-- 카테고리 목록 생성 -->
      <h3>Category</h3><br>
      
        <div class="text-center my-3">
          <b-button v-b-tooltip.hover.right 
          v-for="(category,i) in $store.state.category" :key="i"
           style="width:200px; margin-bottom:10px; text-decoration:none; color:white;"
            @click="$store.dispatch('getData', {name: category.name, page: 0}),
                    $store.dispatch('getBestList', category.name),
                    $store.dispatch('getCount', category.name),
                    $store.commit('changePage', {page: 1, paging: 1, startnum: 1}),
                    $store.commit('setCategoryName', category.name),
                    $store.dispatch('getDayCount', )"
                    :to="`/board/`+category.name"
          
          :title="$store.state.dayCount2[i] + '개의 새 글이 있어요!'"
           variant="dark" >{{category.name}}
           
          <b-badge variant="light" style="color:gold; float:right;" 
          v-show="$store.state.dayCount2[i] != 0"
          >
          <i class="fa fa-bell-o" aria-hidden="true"></i>
          {{$store.state.dayCount2[i]}}</b-badge>
          </b-button>
        </div>
  <!-- 카테고리 목록 생성 끝-->

  </div>
  
  
             
</template>
<script>
export default {
  data(){
    return{
      dark: "dark",
    }
  },
}

=======
<template>
  <div class="container-fluid">
            <center>
              <b-list-group style="width:250px">
                <h3>Category</h3><br>
                  <b-list-group-item v-for="(category,i) in $store.state.category" :key="i">
                    <router-link :to="`/board/`+category.name">
                    <li @click="$store.dispatch('getData', {name: category.name, page: 0}),
                                $store.dispatch('getCount', category.name)">
                    {{category.name}}
                    </li>
                    </router-link>
                  </b-list-group-item>
              </b-list-group>
            </center>
          </div>
  
             
</template>
<script>
export default {
  components: {
  }
}
      
         

>>>>>>> branch 'master' of https://github.com/TSKWAK/3355project.git
</script>