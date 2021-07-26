package com.project.service;

import java.util.List;

import com.project.entity.Comment;

public interface CommentService {

	List<Comment> getCommentList(int bId);

}
