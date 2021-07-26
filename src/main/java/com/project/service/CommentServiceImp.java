package com.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.entity.Comment;
import com.project.mybatisDAO.CommentDao;

@Service
public class CommentServiceImp implements CommentService{
	
	@Autowired
	private CommentDao dao;

	@Override
	public List<Comment> getCommentList(int bId) {
		List<Comment> list = dao.getCommentList(bId);
		return list;
	}

}
