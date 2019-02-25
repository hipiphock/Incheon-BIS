package com.bis.vo;


/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 
 * Class Name 	  : TbProcessParameterVO.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2017.09.20	    황중모                       최초생성
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
public class ProcessParameterVO { 
	// process parameter
	private String proc_param_id;       //NUMBER      22          	 
	private String ptrn_rate;           //NUMBER      22          	 
	private String change_hs_no;        //NUMBER      22          	 
	private String kalman_rate;         //NUMBER      22          	 
	private String weight_1;            //NUMBER      22          	 
	private String weight_2;            //NUMBER      22          	 
	private String weight_3;            //NUMBER      22          	 
	private String weight_4;            //NUMBER      22          	 
	private String weight_5;            //NUMBER      22          	 
	private String weight_6;            //NUMBER      22          	 
	private String weight_7;            //NUMBER      22          	 
	private String weight_8;            //NUMBER      22          	 
	private String weight_9;            //NUMBER      22          	 
	private String weight_10;           //NUMBER      22          	 
	private String vailid_clct_time;    //NUMBER      22          	 
	private String remark;              //VARCHAR2    30
	private String input_data_type;     //CHAR        3           	 
	
	// route process parameter
	private String route_name;
	private String route_id;
	private String route_ord;
	private String st_node_name;
	private String ed_node_name; 
	private String st_node_id;   
	private String ed_node_id;
	public String getProc_param_id() {
		return proc_param_id;
	}
	
	public void setProc_param_id(String proc_param_id) {
		this.proc_param_id = proc_param_id;
	}
	public String getPtrn_rate() {
		return ptrn_rate;
	}
	public void setPtrn_rate(String ptrn_rate) {
		this.ptrn_rate = ptrn_rate;
	}
	public String getChange_hs_no() {
		return change_hs_no;
	}
	public void setChange_hs_no(String change_hs_no) {
		this.change_hs_no = change_hs_no;
	}
	public String getKalman_rate() {
		return kalman_rate;
	}
	public void setKalman_rate(String kalman_rate) {
		this.kalman_rate = kalman_rate;
	}
	public String getWeight_1() {
		return weight_1;
	}
	public void setWeight_1(String weight_1) {
		this.weight_1 = weight_1;
	}
	public String getWeight_2() {
		return weight_2;
	}
	public void setWeight_2(String weight_2) {
		this.weight_2 = weight_2;
	}
	public String getWeight_3() {
		return weight_3;
	}
	public void setWeight_3(String weight_3) {
		this.weight_3 = weight_3;
	}
	public String getWeight_4() {
		return weight_4;
	}
	public void setWeight_4(String weight_4) {
		this.weight_4 = weight_4;
	}
	public String getWeight_5() {
		return weight_5;
	}
	public void setWeight_5(String weight_5) {
		this.weight_5 = weight_5;
	}
	public String getWeight_6() {
		return weight_6;
	}
	public void setWeight_6(String weight_6) {
		this.weight_6 = weight_6;
	}
	public String getWeight_7() {
		return weight_7;
	}
	public void setWeight_7(String weight_7) {
		this.weight_7 = weight_7;
	}
	public String getWeight_8() {
		return weight_8;
	}
	public void setWeight_8(String weight_8) {
		this.weight_8 = weight_8;
	}
	public String getWeight_9() {
		return weight_9;
	}
	public void setWeight_9(String weight_9) {
		this.weight_9 = weight_9;
	}
	public String getWeight_10() {
		return weight_10;
	}
	public void setWeight_10(String weight_10) {
		this.weight_10 = weight_10;
	}
	public String getVailid_clct_time() {
		return vailid_clct_time;
	}
	public void setVailid_clct_time(String vailid_clct_time) {
		this.vailid_clct_time = vailid_clct_time;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public String getInput_data_type() {
		return input_data_type;
	}
	public void setInput_data_type(String input_data_type) {
		this.input_data_type = input_data_type;
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
	public String getRoute_ord() {
		return route_ord;
	}
	public void setRoute_ord(String route_ord) {
		this.route_ord = route_ord;
	}
	public String getSt_node_name() {
		return st_node_name;
	}
	public void setSt_node_name(String st_node_name) {
		this.st_node_name = st_node_name;
	}
	public String getEd_node_name() {
		return ed_node_name;
	}
	public void setEd_node_name(String ed_node_name) {
		this.ed_node_name = ed_node_name;
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
} 
