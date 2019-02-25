package com.bis.vo;
/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 
 * Class Name 	  : BitColisionSensorHistoryVO.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2017.10.18					 김주암					최초생성
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
public class BitShockSensorHistoryVO {
	
	// search flag
	private String searchWord;
	private String check_all_bit;
	private String start_date_time;	
	private String end_date_time;
	
	// 조회결과
	private String bit_id;
	private String stop_name;
	private String hs_regist_dt;
	
	// TODO BIT 목록
	
	public String getSearchWord() {
		return searchWord;
	}
	public void setSearchWord(String searchWord) {
		this.searchWord = searchWord;
	}
	public String getCheck_all_bit() {
		return check_all_bit;
	}
	public void setCheck_all_bit(String check_all_bit) {
		this.check_all_bit = check_all_bit;
	}
	public String getStart_date_time() {
		return start_date_time;
	}
	public void setStart_date_time(String start_date_time) {
		this.start_date_time = start_date_time;
	}
	public String getEnd_date_time() {
		return end_date_time;
	}
	public void setEnd_date_time(String end_date_time) {
		this.end_date_time = end_date_time;
	}
	public String getBit_id() {
		return bit_id;
	}
	public void setBit_id(String bit_id) {
		this.bit_id = bit_id;
	}
	public String getStop_name() {
		return stop_name;
	}
	public void setStop_name(String stop_name) {
		this.stop_name = stop_name;
	}
	public String getHs_regist_dt() {
		return hs_regist_dt;
	}
	public void setHs_regist_dt(String hs_regist_dt) {
		this.hs_regist_dt = hs_regist_dt;
	}	
}
