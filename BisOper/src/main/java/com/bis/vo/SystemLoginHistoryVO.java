package com.bis.vo;


/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 
 * Class Name 	  : TbSystemLoginHistoryVO.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2017.09.20	    황중모                       최초생성
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
public class SystemLoginHistoryVO { 
	private String system_id;           //CHAR        11          	 
	private String session_id;          //NUMBER      22          	 
	private String user_id;             //VARCHAR2    15          	 
	private String host_name;           //VARCHAR2    15          	 
	private String host_ip;             //VARCHAR2    15          	 
	private String conn_dt;             //CHAR        14      
	private String connect_dt;
	private String disconnect_dt;       //CHAR        14          	 
	private String keepalive_dt;        //CHAR        14          	 
	private String hs_type;             //CHAR        1      
	
	private String code_explain;
	private String st_date;   
	private String ed_date;
	
	public String getSystem_id() {
		return system_id;
	}
	public void setSystem_id(String system_id) {
		this.system_id = system_id;
	}
	public String getSession_id() {
		return session_id;
	}
	public void setSession_id(String session_id) {
		this.session_id = session_id;
	}
	public String getUser_id() {
		return user_id;
	}
	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}
	public String getHost_name() {
		return host_name;
	}
	public void setHost_name(String host_name) {
		this.host_name = host_name;
	}
	public String getHost_ip() {
		return host_ip;
	}
	public void setHost_ip(String host_ip) {
		this.host_ip = host_ip;
	}
	public String getConn_dt() {
		return conn_dt;
	}
	public void setConn_dt(String conn_dt) {
		this.conn_dt = conn_dt;
	}
	public String getDisconnect_dt() {
		return disconnect_dt;
	}
	public void setDisconnect_dt(String disconnect_dt) {
		this.disconnect_dt = disconnect_dt;
	}
	public String getKeepalive_dt() {
		return keepalive_dt;
	}
	public void setKeepalive_dt(String keepalive_dt) {
		this.keepalive_dt = keepalive_dt;
	}
	public String getHs_type() {
		return hs_type;
	}
	public void setHs_type(String hs_type) {
		this.hs_type = hs_type;
	}
	public String getSt_date() {
		return st_date;
	}
	public void setSt_date(String st_date) {
		this.st_date = st_date;
	}
	public String getEd_date() {
		return ed_date;
	}
	public void setEd_date(String ed_date) {
		this.ed_date = ed_date;
	}
	public String getCode_explain() {
		return code_explain;
	}
	public void setCode_explain(String code_explain) {
		this.code_explain = code_explain;
	}
	public String getConnect_dt() {
		return connect_dt;
	}
	public void setConnect_dt(String connect_dt) {
		this.connect_dt = connect_dt;
	}
	
	

} 
