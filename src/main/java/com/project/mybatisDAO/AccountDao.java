package com.project.mybatisDAO;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.project.entity.Users;

@Mapper
public interface AccountDao {
	public List<Users> userList();
	public int viewUserDao(String userId);
	public int addUserDao(String userId, String UserPw, String UserEmail);
	public int deleteUserDao(String userId);
	public Users login(Users users);
	
}
