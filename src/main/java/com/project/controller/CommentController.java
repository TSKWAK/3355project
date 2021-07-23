package com.project.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.entity.Comment;
import com.project.mybatisDAO.CommentDao;
import com.project.service.CommentService;

@RestController
@RequestMapping("/api/board/comment/")
public class CommentController {
	
	@Autowired
	CommentDao dao;
	@Autowired
	CommentService service;
	
	@GetMapping("add")
	public void addComment(@RequestParam("c") String content,
			@RequestParam("uId") String uId, @RequestParam("bId") int bId){
		System.out.println(content);
		System.out.println(uId);
		System.out.println(bId);
		System.out.println("==");
		dao.addComment(content, uId, bId);
	}
	
	@GetMapping("list")
	public List<Comment> getCommentList(@RequestParam("bId") int bId){
		System.out.println(bId);
		System.out.println("==");
		List<Comment> list = service.getCommentList(bId);
		for(Comment i : list) {
			System.out.println(i.toString());
		}
		System.out.println(list.toString());
		
		return list;
	}
	
	@GetMapping("count")
	public int getCommentCount(@RequestParam("bId") int bId){
		int commentCount = dao.getCommentCount(bId);
		System.out.println(bId);
		System.out.println(commentCount);
		
		return commentCount;
	}
	
	@GetMapping("delete")
	public void commentDelete(@RequestParam("bId") int bId, @RequestParam("cId") int cId){
		dao.commentDelete(bId, cId);
	}
	
	@GetMapping("check")
	public int commentCheck(@RequestParam("bId") int bId, @RequestParam("cId") int cId){
		int check = dao.commentCheck(bId, cId);
		System.out.println(check);
		return check;
	}
	
	

}
