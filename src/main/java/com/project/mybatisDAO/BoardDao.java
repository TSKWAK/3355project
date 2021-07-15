package com.project.mybatisDAO;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.project.entity.Board;

@Mapper
public interface BoardDao {
	List<Board> getList(String boardlist, int page);
	
	int getCount(String boardlist);

	List<Board> getDetail(int boardid);

	void addWrite(String title, String content, int hit, int pop, String category);
}
