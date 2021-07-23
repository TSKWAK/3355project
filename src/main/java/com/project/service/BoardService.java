package com.project.service;

import java.util.List;
import java.util.Map;

import com.project.entity.Board;

public interface BoardService {

//	List<Board> getList(String boardlist, int page);
	
	int getCount(String boardlist);

	List<Board> getDetail(int boardid);

	List<Board> getList(String boardlist, int page);

	List<Board> getBestList(String category);


}
