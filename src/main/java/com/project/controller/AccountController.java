package com.project.controller;

import java.util.Random;

import javax.mail.MessagingException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.entity.Users;
import com.project.mybatisDAO.AccountDao;

@RestController
@RequestMapping("/api/user")
public class AccountController {
	
	@Autowired
	private JavaMailSender javaMailSender;
	
	@Autowired
	AccountDao dao;
	
	@PostMapping("/accountReg")
	public void account_reg(@RequestBody Users users) {
		System.out.println(users);
		
		dao.addUserDao(users.getUserId(),users.getUserPw(),users.getUserEmail());
	}
	
	@GetMapping("/checkEmail")
	public String checkEmail(String userEmailAddr) {
		Random random = new Random();
		String key="";
		
		System.out.println(userEmailAddr);
		
		for(int i=0; i<3; i++) {
			int index = random.nextInt(25)+65;
			key+=(char)index;
		}
		int numIndex = random.nextInt(9999)+1000;
		
		key += numIndex;
		
		MimeMessage msg = javaMailSender.createMimeMessage();
		
		try {
			MimeMessageHelper messageHelper = new MimeMessageHelper(msg,true,"UTF-8");
			messageHelper.setSubject("3355 인증번호");
	        messageHelper.setText("인증번호 : " + key);
	        messageHelper.setTo(userEmailAddr);
            msg.setRecipients(MimeMessage.RecipientType.TO , InternetAddress.parse(userEmailAddr));
            javaMailSender.send(msg);
	        
		} catch (MessagingException e) {
			e.printStackTrace();
		}
		
		/*
		 * SimpleMailMessage message = new SimpleMailMessage();
		 * message.setTo(userEmailAddr);
		 * 
		 * 
		 * 
		 * message.setSubject("3355 인증번호"); message.setText("인증번호 : " + key);
		 * javaMailSender.send(message);
		 */
		
		return key;
	}
	
	
	@GetMapping("/checkUserId")
	public int check_UserId(String userId) {
		System.out.println(userId);
		int cnt = dao.viewUserDao(userId);
		System.out.println(cnt);
		
		return cnt;
	}
	
	
}
