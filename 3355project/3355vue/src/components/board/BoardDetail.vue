<<<<<<< HEAD
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
      <!-- <tbody>
        <td class="tdcontent">{{detail.content}}</td>
      </tbody> -->
		</table>
   <hr>
   <div id="content" style="text-align:left;">
     afsd{{detail.content}}
  </div>
<!--    
<div>
    <h1>디테일페이지</h1><br>
    <div v-for="(detail,i) in $store.state.detail" :key="i">
    제목 = {{detail.title}}<br>
    내용 = {{detail.content}}<br>
    날짜 = {{detail.date}}<br>
    조회수 = {{detail.hit}}<br>
    추천수 = {{detail.pop}}<br>
    </div>
</div> -->
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

=======
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
      <!-- <tbody>
        <td class="tdcontent">{{detail.content}}</td>
      </tbody> -->
		</table>
   <hr>
   <div id="content" style="text-align:left;">
     afsd{{detail.content}}
  </div>
<!--    
<div>
    <h1>디테일페이지</h1><br>
    <div v-for="(detail,i) in $store.state.detail" :key="i">
    제목 = {{detail.title}}<br>
    내용 = {{detail.content}}<br>
    날짜 = {{detail.date}}<br>
    조회수 = {{detail.hit}}<br>
    추천수 = {{detail.pop}}<br>
    </div>
</div> -->
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

>>>>>>> refs/remotes/origin/master
</style>