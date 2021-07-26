<template>
  <div>
    <div>
    <b-form method = "POST" @submit.prevent="write()">

      <!-- <select class="form-select" aria-label="Default select example" style="width:30%" v-model="board.category">
        <option selected></option>
        <option v-for="(category, i) in $store.state.category" v-bind:key="i" :value="category.name">
          {{category.name}}
        </option>
</select> -->
      <!-- <label for="feedback-user" style="margin-right:95%;">제목</label> -->
      <b-form-input v-model="board.title" :state="validation" id="feedback-user" style="width: 95%"
      placeholder="제목을 입력하세요">
      </b-form-input>
      <b-form-invalid-feedback :state="validation">
        <div style="float: left;">1글자 이상 입력해주세요</div>
      </b-form-invalid-feedback>
      <b-form-valid-feedback :state="validation">
      </b-form-valid-feedback>

      <br>
      <select class="form-select" aria-label="Default select example" style="width:30%" v-model="board.category">
        <option selected>{{board.category}}</option>
        <option 
        v-for="(category, i) in $store.state.category" v-bind:key="i" :value="category.name" 
        v-show="board.category != category.name">
          {{category.name}}
        </option>
      </select>
  
  <br>
    
    <Editor style="width:95%; text-align: left; height:700px;"
    :initialValue="this.board.content" ref="toastuiEditor"
      initialEditType="wysiwyg"
      previewStyle="vertical"
      text-align="left"
      placeholer="내용을 입력하세요"/>
          <br>
        <div style="margin-left:75%">
          <b-button type="submit" pill variant="dark">확인</b-button>
          <router-link :to="`/board/`+$store.state.url">
          <b-button pill variant="danger" style="margin-left:5px;">취소</b-button>
          </router-link>

        </div>
</b-form>

    </div>
  </div>
</template>
 
<script>
import axios from 'axios'
 
export default {
  components: {
  },
    data(){
      return{
        str: '카테고리를 선택해주세요',
        selected: null,
        options: [
          { value: null, text: '게시판 카테고리 선택'},
          { value: 'freeboard', text: 'freeboard' },
          { value: 'soccer', text: 'soccer' },
          { value: 'baseball', text: 'baseball' },
          { value: 'basketball', text: 'basketball'},
          { value: 'bollyball', text: 'bollyball'},
          { value: 'tenis', text: 'tenis'},
          { value: 'golf', text: 'golf'}
        ],
          board: {
            title: '', 
            content:'', 
            hit: 0, 
            pop: 0, 
            category: '카테고리를 선택해주세요', 
            user_id: 'jinhyun'},
      }
  },
    computed: {
      validation() {
        return this.board.title.length > 1 && this.board.title.length < 50
      },
  },
    methods: {
    write(){
      if(this.board.title.length > 1 && this.board.category != this.str){
            this.getHtml();
            this.setContent();
            console.log(this.board);
            axios.post('/api/board/write',this.board)
                .then(res=>{
                    alert('게시글이 등록되었습니다')
                    this.$store.dispatch('getData', {name: this.board.category, page: 1})
                    this.$store.dispatch('getCount', this.board.category)
                    var router = this.$router;
                    router.push('/board/'+this.board.category)
                }).catch(err=>{
                    alert(err+' 다시 등록해주세요')
                    var router = this.$router;
                    router.push('/')
                })
      }else if(this.board.title.length < 1){
        alert('제목을 입력해주세요')
      }else if(this.board.category === this.str){
        alert('카테고리를 선택해주세요')
      }else if(this.board.title.length < 1 && this.board.category === this.str){
        alert('제목과 카테고리를 입력해주세요')
      }
    },
    getHtml(){
      this.board.content = this.$refs.toastuiEditor.invoke('getMarkdown');
      var content = this.$refs.toastuiEditor.invoke('getMarkdown');
    },
    setContent(content) {
      this.$refs.toastuiEditor.invoke('setMarkdown', content)
    },
}
}
</script>