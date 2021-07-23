<<<<<<< HEAD
package com.project.mybatisDAO;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.project.entity.Board;

@Mapper
public interface BoardDao {
	List<Board> getList(String boardlist, int page);
	
	int getCount(String boardlist);

	List<Board> getDetail(int boardid);
}
=======
package com.project.mybatisDAO;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.project.entity.Board;

@Mapper
public interface BoardDao {
	List<Board> getList(String boardlist, int page);
	
	int getCount(String boardlist);

	List<Board> getDetail(int boardid);
}
>>>>>>> branch 'master' of https://github.com/TSKWAK/3355project.git
