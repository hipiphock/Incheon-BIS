package com.bis.vo.re;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 뉴스정보 수집이력
 * Class Name 	  : TbEchNewscollVO.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2019.02.20	   주형빈                      최초생성
 * </PRE>
 * 
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */

public class TbEchNewscollVO {

	private String relatorgid;      //VARCHAR2(8)    
	private String colldt;          //DATE           
	private String newscontent;     //VARCHAR2(4000) 
	private String news_fileloc;    //VARCHAR2(30)   
	private String news_filenm;     //VARCHAR2(30)   

	private String relatorgnm;
	private String search_startdt;
	private String search_enddt;
	
	
	
	public String getRelatorgnm() {
		return relatorgnm;
	}
	public void setRelatorgnm(String relatorgnm) {
		this.relatorgnm = relatorgnm;
	}
	public String getRelatorgid() {
		return relatorgid;
	}
	public void setRelatorgid(String relatorgid) {
		this.relatorgid = relatorgid;
	}
	public String getColldt() {
		return colldt;
	}
	public void setColldt(String colldt) {
		this.colldt = colldt;
	}
	public String getNewscontent() {
		return newscontent;
	}
	public void setNewscontent(String newscontent) {
		this.newscontent = newscontent;
	}
	public String getNews_fileloc() {
		return news_fileloc;
	}
	public void setNews_fileloc(String news_fileloc) {
		this.news_fileloc = news_fileloc;
	}
	public String getNews_filenm() {
		return news_filenm;
	}
	public void setNews_filenm(String news_filenm) {
		this.news_filenm = news_filenm;
	}
	public String getSearch_startdt() {
		return search_startdt;
	}
	public void setSearch_startdt(String search_startdt) {
		this.search_startdt = search_startdt;
	}
	public String getSearch_enddt() {
		return search_enddt;
	}
	public void setSearch_enddt(String search_enddt) {
		this.search_enddt = search_enddt;
	}
	
	
}
