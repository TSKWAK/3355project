<<<<<<< HEAD
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