<<<<<<< HEAD
package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.project.entity.Board;
import com.project.service.BoardService;


@RestController
@RequestMapping("/api/board/")
public class BoardListController {
		
		@Autowired
		private BoardService service;
		
		@RequestMapping("{boardlist}")
		public List<Board> list(@PathVariable("boardlist") String boardlist, @RequestParam("page") int page) {
			List<Board> list = service.getList(boardlist, page);
			return list;
		}
		
		@RequestMapping("count/{boardlist}")
		public int[] getCount(@PathVariable("boardlist") String boardlist) {
			int c = service.getCount(boardlist);
			int count = (int)Math.ceil((double)c/10);
			int[] cnt = new int[count];
			
			for(int i = 0; i<=(count-1); i++) {
				cnt[i] = i+1;
			}
			return cnt;
		}
		
		@RequestMapping("detail/{boardid}")
		public List<Board> detail(@PathVariable("boardid") int boardid){
			List<Board> detail = service.getDetail(boardid);
			return detail;
		}
		
		@PostMapping("login")
		@ResponseStatus(value= HttpStatus.OK)
		public String login() {
			return "(\"result\":\"userid\")";
		}
	}
=======
package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.project.entity.Board;
import com.project.service.BoardService;


@RestController
@RequestMapping("/api/board/")
public class BoardListController {
		
		@Autowired
		private BoardService service;
		
		@RequestMapping("{boardlist}")
		public List<Board> list(@PathVariable("boardlist") String boardlist, @RequestParam("page") int page) {
			List<Board> list = service.getList(boardlist, page);
			return list;
		}
		
		@RequestMapping("count/{boardlist}")
		public int[] getCount(@PathVariable("boardlist") String boardlist) {
			int c = service.getCount(boardlist);
			int count = (int)Math.ceil((double)c/10);
			int[] cnt = new int[count];
			
			for(int i = 0; i<=(count-1); i++) {
				cnt[i] = i+1;
			}
			return cnt;
		}
		
		@RequestMapping("detail/{boardid}")
		public List<Board> detail(@PathVariable("boardid") int boardid){
			List<Board> detail = service.getDetail(boardid);
			return detail;
		}
		
		@PostMapping("login")
		@ResponseStatus(value= HttpStatus.OK)
		public String login() {
			return "(\"result\":\"userid\")";
		}
	}
>>>>>>> branch 'master' of https://github.com/TSKWAK/3355project.git
