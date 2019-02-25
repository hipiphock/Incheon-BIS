package com.bis.vo;


/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 
 * Class Name 	  : TbMProcessCurrentVO.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2017.09.20	    황중모                       최초생성
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */



public class MProcessCurrentVO 
{ 
	private String fusn_travel_time;    //NUMBER      22          	 
	private String fusn_service_time;   //NUMBER      22          	 
	private String kalman_travel_time;  //NUMBER      22          	 
	private String proc_dt;             //CHAR        14          	 
	private String kalman_service_time; //NUMBER      22          	 
	private String wmavg_travel_time;   //NUMBER      22          	 
	private String wmavg_service_time;  //NUMBER      22          	 
	private String ptrn_travel_time;    //NUMBER      22          	 
	private String ptrn_service_time;   //NUMBER      22          	 
	private String input_data_type;     //CHAR        3           	 
	private String route_id;            //NUMBER      22          	 
	private String proc_param_id;       //NUMBER      22          	 
	private String change_hs_no;        //NUMBER      22          	 
	private String st_node_id;          //NUMBER      22          	 
	private String ed_node_id;          //NUMBER      22
	
	// 지점별 통행시간
	private String stop_name1;
	private String stop_name2;
	
	public String getFusn_travel_time() {
		return fusn_travel_time;
	}
	public void setFusn_travel_time(String fusn_travel_time) {
		this.fusn_travel_time = fusn_travel_time;
	}
	public String getFusn_service_time() {
		return fusn_service_time;
	}
	public void setFusn_service_time(String fusn_service_time) {
		this.fusn_service_time = fusn_service_time;
	}
	public String getKalman_travel_time() {
		return kalman_travel_time;
	}
	public void setKalman_travel_time(String kalman_travel_time) {
		this.kalman_travel_time = kalman_travel_time;
	}
	public String getProc_dt() {
		return proc_dt;
	}
	public void setProc_dt(String proc_dt) {
		this.proc_dt = proc_dt;
	}
	public String getKalman_service_time() {
		return kalman_service_time;
	}
	public void setKalman_service_time(String kalman_service_time) {
		this.kalman_service_time = kalman_service_time;
	}
	public String getWmavg_travel_time() {
		return wmavg_travel_time;
	}
	public void setWmavg_travel_time(String wmavg_travel_time) {
		this.wmavg_travel_time = wmavg_travel_time;
	}
	public String getWmavg_service_time() {
		return wmavg_service_time;
	}
	public void setWmavg_service_time(String wmavg_service_time) {
		this.wmavg_service_time = wmavg_service_time;
	}
	public String getPtrn_travel_time() {
		return ptrn_travel_time;
	}
	public void setPtrn_travel_time(String ptrn_travel_time) {
		this.ptrn_travel_time = ptrn_travel_time;
	}
	public String getPtrn_service_time() {
		return ptrn_service_time;
	}
	public void setPtrn_service_time(String ptrn_service_time) {
		this.ptrn_service_time = ptrn_service_time;
	}
	public String getInput_data_type() {
		return input_data_type;
	}
	public void setInput_data_type(String input_data_type) {
		this.input_data_type = input_data_type;
	}
	public String getRoute_id() {
		return route_id;
	}
	public void setRoute_id(String route_id) {
		this.route_id = route_id;
	}
	public String getProc_param_id() {
		return proc_param_id;
	}
	public void setProc_param_id(String proc_param_id) {
		this.proc_param_id = proc_param_id;
	}
	public String getChange_hs_no() {
		return change_hs_no;
	}
	public void setChange_hs_no(String change_hs_no) {
		this.change_hs_no = change_hs_no;
	}
	public String getSt_node_id() {
		return st_node_id;
	}
	public void setSt_node_id(String st_node_id) {
		this.st_node_id = st_node_id;
	}
	public String getEd_node_id() {
		return ed_node_id;
	}
	public void setEd_node_id(String ed_node_id) {
		this.ed_node_id = ed_node_id;
	}
	public String getStop_name1() {
		return stop_name1;
	}
	public void setStop_name1(String stop_name1) {
		this.stop_name1 = stop_name1;
	}
	public String getStop_name2() {
		return stop_name2;
	}
	public void setStop_name2(String stop_name2) {
		this.stop_name2 = stop_name2;
	}	
} 
