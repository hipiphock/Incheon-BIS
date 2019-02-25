package com.bis.vo;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 
 * Class Name 	  : ArrivalTrustVO.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2017.10.31	    			  김주암                 최초생성
 * </PRE>
 * 
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */

public class ArrivalTrustVO {
	private String start_date_time;
	private String end_date_time;
	private String start_range;
	private String end_range;
	private String check_all;
	

	// selectArrivalITrustList
	private String bit_id;
	private String stop_name;
	private String service_id;
	private String stop_id;
	private String err_01;
	private String err_12;
	private String err_23;
	private String err_3;
	private String err_4;
	private String total_cnt;
	private String trust;
	private String area_code;

	// selectArrivalTrustInfo
	private String route_name;
	private String route_id;
	private String rest_stop;
	private String current_stop;
	private String current_service_id;
	private String current_stop_id;
	private String send_dt;
	private String arrival_dt;
	private String provide_time;
	private String arrival_time;
	private String estimate_dt;
	private String error;
	private String error_pass_flag;
	private String plate_no;
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
	public String getService_id() {
		return service_id;
	}
	public void setService_id(String service_id) {
		this.service_id = service_id;
	}
	public String getStop_id() {
		return stop_id;
	}
	public void setStop_id(String stop_id) {
		this.stop_id = stop_id;
	}
	public String getErr_01() {
		return err_01;
	}
	public void setErr_01(String err_01) {
		this.err_01 = err_01;
	}
	public String getErr_12() {
		return err_12;
	}
	public void setErr_12(String err_12) {
		this.err_12 = err_12;
	}
	public String getErr_23() {
		return err_23;
	}
	public void setErr_23(String err_23) {
		this.err_23 = err_23;
	}
	public String getErr_3() {
		return err_3;
	}
	public void setErr_3(String err_3) {
		this.err_3 = err_3;
	}
	public String getErr_4() {
		return err_4;
	}
	public void setErr_4(String err_4) {
		this.err_4 = err_4;
	}
	public String getTotal_cnt() {
		return total_cnt;
	}
	public void setTotal_cnt(String total_cnt) {
		this.total_cnt = total_cnt;
	}
	public String getTrust() {
		return trust;
	}
	public void setTrust(String trust) {
		this.trust = trust;
	}
	public String getRoute_name() {
		return route_name;
	}
	public void setRoute_name(String route_name) {
		this.route_name = route_name;
	}
	public String getRoute_id() {
		return route_id;
	}
	public void setRoute_id(String route_id) {
		this.route_id = route_id;
	}
	public String getRest_stop() {
		return rest_stop;
	}
	public void setRest_stop(String rest_stop) {
		this.rest_stop = rest_stop;
	}
	public String getCurrent_stop() {
		return current_stop;
	}
	public void setCurrent_stop(String current_stop) {
		this.current_stop = current_stop;
	}
	public String getCurrent_service_id() {
		return current_service_id;
	}
	public void setCurrent_service_id(String current_service_id) {
		this.current_service_id = current_service_id;
	}
	public String getCurrent_stop_id() {
		return current_stop_id;
	}
	public void setCurrent_stop_id(String current_stop_id) {
		this.current_stop_id = current_stop_id;
	}
	public String getSend_dt() {
		return send_dt;
	}
	public void setSend_dt(String send_dt) {
		this.send_dt = send_dt;
	}
	public String getArrival_dt() {
		return arrival_dt;
	}
	public void setArrival_dt(String arrival_dt) {
		this.arrival_dt = arrival_dt;
	}
	public String getProvide_time() {
		return provide_time;
	}
	public void setProvide_time(String provide_time) {
		this.provide_time = provide_time;
	}
	public String getArrival_time() {
		return arrival_time;
	}
	public void setArrival_time(String arrival_time) {
		this.arrival_time = arrival_time;
	}
	public String getEstimate_dt() {
		return estimate_dt;
	}
	public void setEstimate_dt(String estimate_dt) {
		this.estimate_dt = estimate_dt;
	}
	public String getError() {
		return error;
	}
	public void setError(String error) {
		this.error = error;
	}
	public String getError_pass_flag() {
		return error_pass_flag;
	}
	public void setError_pass_flag(String error_pass_flag) {
		this.error_pass_flag = error_pass_flag;
	}
	public String getPlate_no() {
		return plate_no;
	}
	public void setPlate_no(String plate_no) {
		this.plate_no = plate_no;
	}
	public String getStart_range() {
		return start_range;
	}
	public void setStart_range(String start_range) {
		this.start_range = start_range;
	}
	public String getEnd_range() {
		return end_range;
	}
	public void setEnd_range(String end_range) {
		this.end_range = end_range;
	}
	public String getArea_code() {
		return area_code;
	}
	public void setArea_code(String area_code) {
		this.area_code = area_code;
	}
	public String getCheck_all() {
		return check_all;
	}
	public void setCheck_all(String check_all) {
		this.check_all = check_all;
	}	
}
