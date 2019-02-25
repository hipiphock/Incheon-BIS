package com.bis.vo;


/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 
 * Class Name 	  : TbBitStatusHistoryVO.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2017.09.20	    황중모                       최초생성
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */



public class BitStatusHistoryVO 
{ 
	private String searchWord;	
	private String start_date_time;
	private String end_date_time;
	
	private String bit_id;              //NUMBER      22
	private String stop_name;	
	private String hs_regist_dt;        //CHAR        14          	 
	private String temperature;         //NUMBER      22          	 
	private String humidity;            //NUMBER      22          	 
	private String fan_state;           //CHAR        1           	 
	private String heater_state;        //CHAR        1           	 
	private String door_state;          //CHAR        1         	 
	private String memory_usage;        //NUMBER      22	
	private String action_detect_state; //CHAR        1           	 
	private String comm_state;          //CHAR        1           	 
	private String disp_state;          //CHAR        1           	 
	private String cam_state;           //CHAR        1           	 
	private String crash_state;         //CHAR        1
	
	public String getSearchWord() {
		return searchWord;
	}
	public void setSearchWord(String searchWord) {
		this.searchWord = searchWord;
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
	public String getTemperature() {
		return temperature;
	}
	public void setTemperature(String temperature) {
		this.temperature = temperature;
	}
	public String getHumidity() {
		return humidity;
	}
	public void setHumidity(String humidity) {
		this.humidity = humidity;
	}
	public String getFan_state() {
		return fan_state;
	}
	public void setFan_state(String fan_state) {
		this.fan_state = fan_state;
	}
	public String getHeater_state() {
		return heater_state;
	}
	public void setHeater_state(String heater_state) {
		this.heater_state = heater_state;
	}
	public String getDoor_state() {
		return door_state;
	}
	public void setDoor_state(String door_state) {
		this.door_state = door_state;
	}
	public String getMemory_usage() {
		return memory_usage;
	}
	public void setMemory_usage(String memory_usage) {
		this.memory_usage = memory_usage;
	}
	public String getAction_detect_state() {
		return action_detect_state;
	}
	public void setAction_detect_state(String action_detect_state) {
		this.action_detect_state = action_detect_state;
	}
	public String getComm_state() {
		return comm_state;
	}
	public void setComm_state(String comm_state) {
		this.comm_state = comm_state;
	}
	public String getDisp_state() {
		return disp_state;
	}
	public void setDisp_state(String disp_state) {
		this.disp_state = disp_state;
	}
	public String getCam_state() {
		return cam_state;
	}
	public void setCam_state(String cam_state) {
		this.cam_state = cam_state;
	}
	public String getCrash_state() {
		return crash_state;
	}
	public void setCrash_state(String crash_state) {
		this.crash_state = crash_state;
	}	
} 
