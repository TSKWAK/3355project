package com.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.entity.Users;
import com.project.mybatisDAO.AccountDao;

@Service
public class AccountService {
	@Autowired
	private AccountDao dao;

	public Users login(Users users) {
		Users user = dao.login(users);
		return user;
	}

}
