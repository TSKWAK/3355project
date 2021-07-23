package com.project.entity;

import lombok.Data;

@Data
public class Users {
	private String userId;
	private String userPw;
	private String userEmail;
	private String mailAddr;
	
	
	
	public String getUserId() {
		return userId;
	}

	public String getUserPw() {
		return userPw;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public Users(String userId, String userPw, String userEmail, String mailAddr) {
		super();
		this.userId = userId;
		this.userPw = userPw;
		this.userEmail = userEmail + "@" + mailAddr;
	}

	@Override
	public String toString() {
		return "Users [userId=" + userId + ", userPw=" + userPw + ", userEmail=" + userEmail + "]";
	}
	
	
	
}
