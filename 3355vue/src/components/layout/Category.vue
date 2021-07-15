<template>
  <div class="container-fluid">
            <center>
              <b-list-group style="width:250px">
                <h3>Category</h3><br>
                  <b-list-group-item v-for="(category,i) in $store.state.category" :key="i">
                    <router-link :to="`/board/`+category.name">
                    <li @click="$store.dispatch('getData', {name: category.name, page: 0}),
                                $store.dispatch('getCount', category.name),
                                $store.commit('changePage', {page: 1, paging: 1, startnum: 1})">
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
      
         

</script>