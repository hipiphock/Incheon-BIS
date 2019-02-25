package com.bis.vo;


/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 
 * Class Name 	  : BitProvideDetailHistoryVO.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2017.09.20	    황중모                       최초생성
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
public class BitProvideDetailHistoryVO { 
	private String bit_id;              //NUMBER      22          	 
	private String hs_regist_dt;        //CHAR        14          	 
	private String ord;                 //NUMBER      22          	 
	private String provide_type;        //CHAR        1           	 
	private String route_id;            //NUMBER      22          	 
	private String node_id;             //NUMBER      22          	 
	private String rest_stop_count;     //NUMBER      22          	 
	private String arrivalestimatetime; //NUMBER      22          	 
	private String departure_time;      //CHAR        4           	 
	private String dest_name;           //VARCHAR2    30          	 
	private String veh_id;              //NUMBER      22          	 
	private String departure_type;      //CHAR        1           	 
	private String operation_type;      //CHAR        1           	 
	private String plate_no;            //CHAR        12          	 
	private String route_name;          //VARCHAR2    30          	 
	private String bit_name;            //VARCHAR2    100     
	
	private String node_name; 
	private String code_explain; 
	private String incoming_time; 
	private String service_id;
	private String st_dt;
	private String ed_dt;
	
	public String getBit_id() {
		return bit_id;
	}
	public void setBit_id(String bit_id) {
		this.bit_id = bit_id;
	}
	public String getHs_regist_dt() {
		return hs_regist_dt;
	}
	public void setHs_regist_dt(String hs_regist_dt) {
		this.hs_regist_dt = hs_regist_dt;
	}
	public String getOrd() {
		return ord;
	}
	public void setOrd(String ord) {
		this.ord = ord;
	}
	public String getProvide_type() {
		return provide_type;
	}
	public void setProvide_type(String provide_type) {
		this.provide_type = provide_type;
	}
	public String getRoute_id() {
		return route_id;
	}
	public void setRoute_id(String route_id) {
		this.route_id = route_id;
	}
	public String getNode_id() {
		return node_id;
	}
	public void setNode_id(String node_id) {
		this.node_id = node_id;
	}
	public String getRest_stop_count() {
		return rest_stop_count;
	}
	public void setRest_stop_count(String rest_stop_count) {
		this.rest_stop_count = rest_stop_count;
	}
	public String getArrivalestimatetime() {
		return arrivalestimatetime;
	}
	public void setArrivalestimatetime(String arrivalestimatetime) {
		this.arrivalestimatetime = arrivalestimatetime;
	}
	public String getDeparture_time() {
		return departure_time;
	}
	public void setDeparture_time(String departure_time) {
		this.departure_time = departure_time;
	}
	public String getDest_name() {
		return dest_name;
	}
	public void setDest_name(String dest_name) {
		this.dest_name = dest_name;
	}
	public String getVeh_id() {
		return veh_id;
	}
	public void setVeh_id(String veh_id) {
		this.veh_id = veh_id;
	}
	public String getDeparture_type() {
		return departure_type;
	}
	public void setDeparture_type(String departure_type) {
		this.departure_type = departure_type;
	}
	public String getOperation_type() {
		return operation_type;
	}
	public void setOperation_type(String operation_type) {
		this.operation_type = operation_type;
	}
	public String getPlate_no() {
		return plate_no;
	}
	public void setPlate_no(String plate_no) {
		this.plate_no = plate_no;
	}
	public String getRoute_name() {
		return route_name;
	}
	public void setRoute_name(String route_name) {
		this.route_name = route_name;
	}
	public String getBit_name() {
		return bit_name;
	}
	public void setBit_name(String bit_name) {
		this.bit_name = bit_name;
	}
	public String getNode_name() {
		return node_name;
	}
	public void setNode_name(String node_name) {
		this.node_name = node_name;
	}
	public String getCode_explain() {
		return code_explain;
	}
	public void setCode_explain(String code_explain) {
		this.code_explain = code_explain;
	}
	public String getIncoming_time() {
		return incoming_time;
	}
	public void setIncoming_time(String incoming_time) {
		this.incoming_time = incoming_time;
	}
	public String getService_id() {
		return service_id;
	}
	public void setService_id(String service_id) {
		this.service_id = service_id;
	}
	public String getSt_dt() {
		return st_dt;
	}
	public void setSt_dt(String st_dt) {
		this.st_dt = st_dt;
	}
	public String getEd_dt() {
		return ed_dt;
	}
	public void setEd_dt(String ed_dt) {
		this.ed_dt = ed_dt;
	}

	
} 
