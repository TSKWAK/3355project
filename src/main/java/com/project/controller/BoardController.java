package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.entity.Board;
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
		
		@RequestMapping("bestlist")
		public List<Board> bestlist(@RequestParam("cn") String category) {
			List<Board> list = service.getBestList(category);
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
			
			dao.addWrite(board.getTitle(), board.getContent(), board.getHit(), board.getPop(), board.getCategory(), board.getUser_id());
		}
		
		@GetMapping("dayCount")
		public int dayCount(@RequestParam("c") String boardCount) {
//			System.out.println(boardCount);
//			Map<String, Integer> map = new HashMap<>();
			int count = dao.getDayCount(boardCount);
			System.out.println(boardCount + ":" + count);
			System.out.println("============");
//			map.put(boardCount,count);
			return count;
		}
		
		@GetMapping("addpop")
		public String addPop(@RequestParam("bId") int bId, @RequestParam("uId") String uId) {
			System.out.println("bid:"+bId+","+"uid:"+uId);
			String result = dao.addPop(bId, uId);

			return result;
		}
		
		@GetMapping("popCheck")
		public String popCheck(@RequestParam("bId") int bId, @RequestParam("uId") String uId) {
			String result = dao.popCheck(bId, uId);
			
			return result;
		}
		
		@GetMapping("deletepop")
		public String deletePop(@RequestParam("bId") int bId, @RequestParam("uId") String uId) {
			String result = dao.deletePop(bId, uId);
			
			return result;
		}
		
		@GetMapping("update")
		public void update(@RequestParam("bId") int bod, @RequestParam("t") String title, @RequestParam("c") String category,
				@RequestParam("con") String content) {
			System.out.println(bod);
			System.out.println(title);
			System.out.println(category);
			System.out.println(content);
			dao.update(bod, title, category, content);
		}
		
		@GetMapping("deleteWrite")
		public void deleteWrite(@RequestParam("bId") int bId) {
			System.out.println(bId);
			dao.deleteWrite(bId);
		}
		

		
	}
