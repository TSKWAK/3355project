package com.project.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.project.entity.Board;
import com.project.entity.Users;
import com.project.mybatisDAO.BoardDao;
import com.project.service.BoardService;


@RestController
@RequestMapping("/api/board/")
public class BoardController {
		
		@Autowired
		private BoardService service;
		@Autowired
		private BoardDao dao;
		
		@RequestMapping("{boardlist}")
		public List<Board> list(@PathVariable("boardlist") String boardlist, @RequestParam("page") int page) {
			List<Board> list = service.getList(boardlist, page);
			return list;
		}
		
		@RequestMapping("count/{boardlist}")
		public int getCount(@PathVariable("boardlist") String boardlist) {
			int c = service.getCount(boardlist);
			int count = (int)Math.ceil((double)c/10);
//			int[] cnt = new int[count];
//			
//			for(int i = 0; i<=(count-1); i++) {
//				cnt[i] = i+1;
//			}
			return count;
		}
		
		@RequestMapping("detail/{boardid}")
		public List<Board> detail(@PathVariable("boardid") int boardid){
			List<Board> detail = service.getDetail(boardid);
			return detail;
		}
		
		@PostMapping("write")
		public void write(@RequestBody Board board) {
			System.out.println(board.getContent());
			
			dao.addWrite(board.getTitle(), board.getContent(), board.getHit(), board.getPop(), board.getCategory());
		}
	}
