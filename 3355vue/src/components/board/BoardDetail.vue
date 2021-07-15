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

   <div id="content" style="text-align:left; height: 300px">
     {{detail.content}}
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