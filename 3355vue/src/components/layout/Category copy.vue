<template>
  <div class="container-fluid">
            <center>
              <b-list-group style="width:250px">
                <h3>Category</h3><br>
                  <b-button variant="black" v-for="(category,i) in $store.state.category" :key="i"
        style="width:200px; margin-bottom:10px;"
        @click="$store.dispatch('getData', {name: category.name, page: 0}),
                                $store.dispatch('getCount', category.name),
                                $store.commit('changePage', {page: 1, paging: 1, startnum: 1})"
                                :to="`/board/`+category.name"
        >
          {{test}}
          <b-badge variant="light"
          >{{category.name}}</b-badge>
        </b-button>
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