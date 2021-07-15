package com.project.entity;

public class Board {
	private int board_id;
	private int rownum;
	private String title;
	private String content;
	private int hit;
	private int pop;
	private String date;
	private String category;
	private int page;
	
	public Board() {}

	public Board(int board_id, int rownum, String title, String content, int hit, int pop, String date, String category, int page) {
		super();
		this.board_id = board_id;
		this.rownum = rownum;
		this.title = title;
		this.content = content;
		this.hit = hit;
		this.pop = pop;
		this.date = date;
		this.category = category;
		this.page = page;
		
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public int getHit() {
		return hit;
	}

	public void setHit(int hit) {
		this.hit = hit;
	}

	public int getPop() {
		return pop;
	}

	public void setPop(int pop) {
		this.pop = pop;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public int getBoard_id() {
		return board_id;
	}

	public void setBoard_id(int board_id) {
		this.board_id = board_id;
	}

	public int getRownum() {
		return rownum;
	}

	public void setRownum(int rownum) {
		this.rownum = rownum;
	}

	public int getPage() {
		return page;
	}

	public void setPage(int page) {
		this.page = page;
	}

}
