<template>
<b-form method = "get">
    <div v-for="(com, i) in comments" :key="i"
    v-show="com.comment_board_id == $store.state.boardId"
    >
    <div style=" float:left;">
      <div class="">
      <b-button variant="secondary">
      <b-badge variant="light">
        <i class="fa fa-user" aria-hidden="true"></i>
        {{com.comment_user_id}} 님
        </b-badge>
      </b-button>

      
        <span style="word-break:break-all; width:100px;"> | {{com.content}} </span>
    </div>

    </div>
        <div>
        <span style="float:right;">| {{com.date}} |
        <b-button pill variant="primary" v-show="com.comment_user_id != $session.get('userId')">답글</b-button>
        
        <!-- 댓글 수정 버튼-->
        <b-button pill variant="light" 
        v-show="com.comment_user_id = $session.get('userId')"
        @click="commentIdcheck(com.comment_id)">
        <i class="fa fa-pencil" aria-hidden="true"></i>
        </b-button>

        <!-- 댓글 삭제 버튼-->
        <b-button pill variant="light" v-show="com.comment_user_id = $session.get('userId')"
        @click="commentDelete(com.comment_id)">
        <i class="fa fa-trash-o" aria-hidden="true"></i>
        </b-button>
        </span>
        </div>
        <br>
        <br>
          

        </div>
          <!-- 답글 구역 -->


        <br>
<!--         
    </div> -->
    <div>
        <b-form-textarea
        id="textarea-state"
        v-model="comment.content"
        :state="comment.content.length >= 2"
        placeholder="댓글을 2글자 이상 작성해주세요"
        rows="3">
        </b-form-textarea>
    </div> <br>
    <div style="float:right;">
        <b-button pill v-b-modal.modal-no variant="dark" style=""
          v-show="$session.has('userId')">
            확인 </b-button>

          <b-modal id="modal-no" 
          hide-backdrop content-class="shadow" 
          title="" @ok="addComment()" >

              정말로 <code>댓글</code>을
              등록 하시겠습니까?
          </b-modal>
        <b-button pill variant="danger" style="margin-left:" @click="reset()">취소</b-button>
    </div>
</b-form>
</template>

<script>
import axios from 'axios'
export default {
    data() {
      return {
        text: '',
        comment:{
            content: '',
            comment_user_id: this.$session.get('userId'),
            comment_board_id: this.$store.state.boardId,
        },
        comments: [],
        commentUpdate: '',
        commentChecks: 0,
        checkCommentId: 0,
        commentBool: false
      }
    },
    components: {

    },
    mounted() {
        this.commentList();
    },

    methods: {
    addComment(){
        axios
          .get('/api/board/comment/add?c='+this.comment.content+'&uId='+this.comment.comment_user_id+'&bId='+this.comment.comment_board_id)
          .then(res => {
            this.comment.content = '';
            this.commentList();
          })
          .catch(err => {
            console.log(err)
            console.log(this.comment)
          });
      },

    commentList(){
        axios
          .get('/api/board/comment/list?bId='+this.comment.comment_board_id)
          .then(res => {
            console.log("comment res:",res)
            console.log("comment res.data:",res.data)
            this.commentCount();
            this.comments = res.data;
            console.log("this.comments:",this.comments[0].comment_id)
          })
          .catch(err => {
            console.log(err)
            console.log(this.comments)
          });
      },

      commentCount(){
        axios
          .get('/api/board/comment/count?bId='+this.comment.comment_board_id)
          .then(res => {
            this.$store.commit('setCommentCount', res.data)
          })
          .catch(err => {
            console.log(err)
            console.log(this.comment)
          });
      },

      commentCheck(v){
        axios
          .get('/api/board/comment/check?bId='+this.comment.comment_board_id+'&cId='+v)
          .then(res => {
            this.$store.commit('setCommentCheck', res.data)
            this.commentChecks = res.data;
            console.log(res.data)
            console.log("cCS:",this.commentChecks)
            if(res.data != null && res.data !== '' && v == res.data){
              alert('fdsaf')
              $('#commentdiv').append('<div>dsafs</div>');
            }
          })
          .catch(err => {
            console.log(err)
            console.log(v)
          });
      },

      commentDelete(v){
        axios
          .get('/api/board/comment/delete?bId='+this.comment.comment_board_id+'&cId='+v)
          .then(res => {
            alert('댓글이 삭제되었습니다')
            this.commentList();
            this.$store.dispatch('getBestList', this.$store.state.detail[0].category)
          })
          .catch(err => {
            console.log(err)
            console.log(v)
          });

      },

      reset(){
        this.comment.content = '';
      },

      commentIdcheck(v){
        this.checkCommentId = v;
        console.log(this.checkCommentId)
      }

      






    }
  }
</script>

<style>

</style>