<<<<<<< HEAD
<template>
<div style="text-align:left;">
  <hr>
<form>
  <div> 제목
<b-form-input v-model="title" placeholder="Enter your name" style="width:70%"></b-form-input>

  <hr>

<select class="form-select" aria-label="Default select example" style="width:30%" v-model="select">
  <option selected>{{select}}</option>
  <option v-for="(category, i) in $store.state.category" v-bind:key="i" :value="category.name"
  v-show="$store.state.url!=category.name">{{category.name}}</option>
</select>

  <hr>

  내용
    <b-form-textarea
    id="content" 
    placeholder="Tall textarea"
    v-model="content"
    rows="8"></b-form-textarea>

  </div>
  <button type="submit">전송</button>
</form>
  <button @click="click()">dfs</button>
</div>
</template>

<script>
export default {
  data(){
    return{
      title: '',
      content: '',
      select: "게시판 카테고리를 선택하세요",
    }
  },
  computed: {
    select: ()=> {
      return this.$store.state.url;
    }
  },
  methods: {
    click(){
      console.log(this.title, this.content, this.select)
    },
  }

}
</script>

<style>

=======
<template>
<div style="text-align:left;">
  <hr>
<form>
  <div> 제목
<b-form-input v-model="title" placeholder="Enter your name" style="width:70%"></b-form-input>

  <hr>

<select class="form-select" aria-label="Default select example" style="width:30%" v-model="select">
  <option selected>{{select}}</option>
  <option v-for="(category, i) in $store.state.category" v-bind:key="i" :value="category.name"
  v-show="$store.state.url!=category.name">{{category.name}}</option>
</select>

  <hr>

  내용
    <b-form-textarea
    id="content" 
    placeholder="Tall textarea"
    v-model="content"
    rows="8"></b-form-textarea>

  </div>
  <button type="submit">전송</button>
</form>
  <button @click="click()">dfs</button>
</div>
</template>

<script>
export default {
  data(){
    return{
      title: '',
      content: '',
      select: "게시판 카테고리를 선택하세요",
    }
  },
  computed: {
    select: ()=> {
      return this.$store.state.url;
    }
  },
  methods: {
    click(){
      console.log(this.title, this.content, this.select)
    },
  }

}
</script>

<style>

>>>>>>> refs/remotes/origin/master
</style>