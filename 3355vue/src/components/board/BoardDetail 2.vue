<template>
  <div>
    <div v-for="(detail,i) in $store.state.detail" :key="i">

   <hr>

   <table class="table" style="width:98%">
			<thead>
				<tr class="table-active">
					<th scope="col" style="text-align:left;">[{{$store.state.url}}] 제목:{{detail.title}}<br>
          {{detail.date}}</th>
          <th scope="col" style="text-align:right;">작성자:username<br>
          조회: {{detail.hit}} / 댓글수: 0 / 추천수: 0</th>
				</tr>
			</thead>
		</table>

   <hr>
<div>
     <Viewer ref="toastuiEditor" height="1000px" :initialValue="content"/>
</div>
   <div id="content" style="text-align:left; height: 300px">
     <!-- {{detail.content}} -->
    </div>

    <div>댓글
      <table border="1">
        <tr>
          <td>ddd</td>
          <td>ddd</td>
        </tr>
        <tr>
          <td style="width:50%">ffffff</td>
        </tr>

      </table>
    </div>

</div>

</div>
</template>

<script>
export default {
  data(){
    return{
      content: 'fsdafs',
      conten: [0],
      con: this.$store.state.board.content
    }
  },
  mounted(){
    console.log(this.content)
    fetch('/api/board/details/287')
    .then(response => {
      if(response.ok){
        return response.json();
      } else {
        throw response;
      }
    }).then(data => {
      this.content=data;
      console.log("data:",data)
      console.log("content:",this.content)
  });
  }

  
}
</script>

<style>
#content{
  word-break:break-word;
}
.tdcontent{
  word-break:break-word;
}

</style>