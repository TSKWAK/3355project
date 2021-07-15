package com.project.service;

import java.util.List;

import com.project.entity.Board;

public interface BoardService {

	List<Board> getList(String boardlist, int page);
	
	int getCount(String boardlist);

	List<Board> getDetail(int boardid);

}
