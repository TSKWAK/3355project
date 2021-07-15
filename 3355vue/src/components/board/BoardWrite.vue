<template>
<div style="text-align:left;">
  <hr>
<form method = "POST" @submit.prevent="write()">
  <div style="margin-right: 10%"> 제목
<b-form-input v-model="board.title" placeholder="Enter your name"></b-form-input>

  <hr>

<select class="form-select" aria-label="Default select example" style="width:30%" v-model="board.category">
  <option selected></option>
  <option v-for="(category, i) in $store.state.category" v-bind:key="i" :value="category.name">
    {{category.name}}
  </option>
</select>

  <hr>
  <div class="mb-3" style="width:30%">
  <label for="formFileSm" class="form-label"></label>
  <input class="form-control form-control-sm" id="files" ref="files" type="file">
</div>

    <b-form-textarea
    id="content" 
    placeholder="Tall textarea"
    style=""
    v-model="board.content"
    rows="8">
    </b-form-textarea>
  <br>
  <div align="right">
    <button type="submit" class="btn btn-secondary">
      <a href="/">전송</a></button>
    <button type="button" class="btn btn-secondary">
    <router-link :to="`/board/`+$store.state.url">취소</router-link>
    </button>
  </div>
  </div>
</form>

</div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      board: 
        {title: '', content: '', hit: 0, pop: 0, category: ''}
    }
  },
  methods: {
    write(){
            console.log(this.board);
            axios.post('/api/board/write',this.board)
                .then(res=>{
                    console.log(res)
                }).catch(err=>{
                    console.log(err)
                    console.log(this.board)
                }).finally({
                    
                });
    },
    clicks(){
           alert('등록되었습니다')
           
           
    },
  }
}
</script>

<style>

</style>