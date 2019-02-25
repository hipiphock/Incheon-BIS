package com.bis.vo;


/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 
 * Class Name 	  : NodeVO.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2017.09.20	    황중모                       최초생성
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */



public class NodeVO {
	
	private String node_id;             //NUMBER      22          	 
	private String std_node_id;         //NUMBER      22          	 
	private String node_type;           //CHAR        3           	 
	private String node_name;           //VARCHAR2    50          	 
	private String node_shortname;      //VARCHAR2    50          	 
	private String node_angle;          //NUMBER      22          	 
	private String departure_detect_radius; //NUMBER      22          	 
	private String arrival_detect_radius; //NUMBER      22          	 
	private String turn_flag;           //CHAR        1           	 
	private String lat;                 //NUMBER      22          	 
	private String lng;                 //NUMBER      22          	 
	private String remark;              //VARCHAR2    100         	 
	private String use_flag;            //CHAR        1           	 
	private String regist_dt;           //CHAR        14          	 
	private String update_dt;           //CHAR        14          	 
	private String adm_district_id;     //NUMBER      22          	 
	private String area_code;           //NUMBER      22          	 

	private String minLng;  
	private String maxLng;  
	private String minLat;  
	private String maxLat;

	private String stop_id;
	private String stop_name;
	private String service_id; 
	private String route_ord; 
	private String route_name;
	private String route_id;
	
	public String getNode_id() {
		return node_id;
	}
	public void setNode_id(String node_id) {
		this.node_id = node_id;
	}
	public String getStd_node_id() {
		return std_node_id;
	}
	public void setStd_node_id(String std_node_id) {
		this.std_node_id = std_node_id;
	}
	public String getNode_type() {
		return node_type;
	}
	public void setNode_type(String node_type) {
		this.node_type = node_type;
	}
	public String getNode_name() {
		return node_name;
	}
	public void setNode_name(String node_name) {
		this.node_name = node_name;
	}
	public String getNode_shortname() {
		return node_shortname;
	}
	public void setNode_shortname(String node_shortname) {
		this.node_shortname = node_shortname;
	}
	public String getNode_angle() {
		return node_angle;
	}
	public void setNode_angle(String node_angle) {
		this.node_angle = node_angle;
	}
	public String getDeparture_detect_radius() {
		return departure_detect_radius;
	}
	public void setDeparture_detect_radius(String departure_detect_radius) {
		this.departure_detect_radius = departure_detect_radius;
	}
	public String getArrival_detect_radius() {
		return arrival_detect_radius;
	}
	public void setArrival_detect_radius(String arrival_detect_radius) {
		this.arrival_detect_radius = arrival_detect_radius;
	}
	public String getTurn_flag() {
		return turn_flag;
	}
	public void setTurn_flag(String turn_flag) {
		this.turn_flag = turn_flag;
	}
	public String getLat() {
		return lat;
	}
	public void setLat(String lat) {
		this.lat = lat;
	}
	public String getLng() {
		return lng;
	}
	public void setLng(String lng) {
		this.lng = lng;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public String getUse_flag() {
		return use_flag;
	}
	public void setUse_flag(String use_flag) {
		this.use_flag = use_flag;
	}
	public String getRegist_dt() {
		return regist_dt;
	}
	public void setRegist_dt(String regist_dt) {
		this.regist_dt = regist_dt;
	}
	public String getUpdate_dt() {
		return update_dt;
	}
	public void setUpdate_dt(String update_dt) {
		this.update_dt = update_dt;
	}
	public String getAdm_district_id() {
		return adm_district_id;
	}
	public void setAdm_district_id(String adm_district_id) {
		this.adm_district_id = adm_district_id;
	}
	public String getArea_code() {
		return area_code;
	}
	public void setArea_code(String area_code) {
		this.area_code = area_code;
	}
	public String getMinLng() {
		return minLng;
	}
	public void setMinLng(String minLng) {
		this.minLng = minLng;
	}
	public String getMaxLng() {
		return maxLng;
	}
	public void setMaxLng(String maxLng) {
		this.maxLng = maxLng;
	}
	public String getMinLat() {
		return minLat;
	}
	public void setMinLat(String minLat) {
		this.minLat = minLat;
	}
	public String getMaxLat() {
		return maxLat;
	}
	public void setMaxLat(String maxLat) {
		this.maxLat = maxLat;
	}
	public String getRoute_ord() {
		return route_ord;
	}
	public void setRoute_ord(String route_ord) {
		this.route_ord = route_ord;
	}
	public String getService_id() {
		return service_id;
	}
	public void setService_id(String service_id) {
		this.service_id = service_id;
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
	public String getStop_id() {
		return stop_id;
	}
	public void setStop_id(String stop_id) {
		this.stop_id = stop_id;
	}
	public String getStop_name() {
		return stop_name;
	}
	public void setStop_name(String stop_name) {
		this.stop_name = stop_name;
	} 
	
} 
