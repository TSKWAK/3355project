package com.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.project.entity.Users;
import com.project.mybatisDAO.AccountDao;

@Controller
@RequestMapping("/api/user")
public class AccountController {
	
	@Autowired
	AccountDao dao;
	
	@PostMapping("/accountReg")
	public void account_reg(@RequestBody Users users) {
		System.out.println(users);
		
		dao.addUserDao(users.getUserId(),users.getUserPw(),users.getUserEmail());
		
		
		
	}
	
	
}
