<template>
<div>
<center><div class="col col-lg-8 col-sm-10" id = "Box">
              <h2>회원가입</h2>
            <form id = "login-form" method = "POST" @submit.prevent="test">
                      <div class="input-group mb-4">
                          <span class="input-group-text" id="inputGroup-sizing-default">&nbsp;아이디&nbsp;&nbsp;</span>
                          <input type="text" name = "userId" class="form-control" placeholder="아이디를 입력하세요." v-model="account.userId"
                          aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                          <button type="button" class="btn btn-secondary">중복확인</button>
                        </div>

                        <div class="input-group mb-4">
                            <p class="text-danger fw-bold alreadyId">이미 사용중인 아이디입니다.</p>
                        </div>

                        <div class="input-group mb-4">
                            <span class="input-group-text" id="inputGroup-sizing-default">비밀번호</span>
                            <input type="password" name = "userPw" class="form-control" placeholder="비밀번호를 입력하세요.(8자이상, 영어+숫자+특수문자)"
                            v-model="account.userPw"
                            aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                        </div>

                        <div class="input-group mb-4">
                            <p class="text-danger fw-bold failPw">비밀번호가 규칙에 어긋났습니다.</p>
                        </div>

                        <div class="input-group mb-4">
                            <span class="input-group-text" id="inputGroup-sizing-default">비밀번호확인</span>
                            <input type="password" name = "userPw" class="form-control" placeholder="비밀번호를 다시 한번 입력하세요."
                            aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                        </div>

                        <div class="input-group mb-4">
                            <p class="text-success fw-bold correctPw">비밀번호가 일치합니다.</p>
                        </div>
                        
                        <div class="input-group mb-4">
                            <span class="input-group-text" id="inputGroup-sizing-default">이메일</span>
                            <input type="text" name = "userEmail" class="form-control" placeholder="이메일을 입력하세요."
                            v-model="account.userEmail"
                            aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                              <span class="input-group-text" id="inputGroup-sizing-default">@</span>
                              <select class="form-control" name ="mailAddr"
                              v-model="account.mailAddr">
                                <option>naver.com</option>
                                <option>nate.com</option>
                                <option>gmail.com</option>
                              </select>
                            <button type="button" class="btn btn-secondary">인증</button>
                        </div>

                        <div class="input-group mb-4">
                            <p class="text-success fw-bold emailAcc">이메일 인증완료</p>
                        </div>

                        <div class="btn_list">
                          <button type="button" class="btn btn-primary" onClick="location.href='/'">취소</button>
                          <button type="submit" class="btn btn-success" onClick="location.href='/'">확인</button>
                        </div>
                </form>
              </div></center>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
    return{
        account: {
        userId: "",
        userPw: "",
        userEmail: "",
        mailAddr: ""
        },
    }
  },
    methods:{
        test(){
            console.log(this.account);
            axios.post('/api/user/accountReg',this.account)
                .then(res=>{
                    console.log(res)
                }).catch(err=>{
                    console.log(err)
                }).finally({
                    
                });
    },
    }
}
</script>

<style>
    .joinput{
        margin-top: 40px;
    }
    button{
        margin-left: 20px;
    }

    .alreadyId{
        display:none;
    }

    .failPw{
        display:none;
    }

    .correctPw{
        display:none;
    }

    .emailAcc{
        display:none;
    }
</style>