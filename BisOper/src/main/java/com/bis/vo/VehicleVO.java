package com.bis.vo;


/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 
 * Class Name 	  : TbVehicleVO.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2017.09.20	    황중모                       최초생성
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */



public class VehicleVO { 
	private String veh_id;              //NUMBER      22          	 
	private String plate_no;            //VARCHAR2    12          	 
	private String veh_type;            //CHAR        1           	 
	private String low_flag;            //CHAR        1           	 
	private String board_limit;         //NUMBER      22          	 
	private String company_id;          //NUMBER      22          	 
	private String remark;              //VARCHAR2    30          	 
	private String use_flag;            //CHAR        1           	 
	private String obe_id;              //NUMBER      22          	 
	private String area_code;           //NUMBER      22          	 
	private String regist_dt;           //CHAR        14          	 
	private String update_dt;           //CHAR        14	
	private String veh_type_name;	
	private String company_name;
	private String searchWord;
	private String view_flag;
	
	public String getView_flag() {
		return view_flag;
	}
	public void setView_flag(String view_flag) {
		this.view_flag = view_flag;
	}
	public String getVeh_id() {
		return veh_id;
	}
	public void setVeh_id(String veh_id) {
		this.veh_id = veh_id;
	}
	public String getPlate_no() {
		return plate_no;
	}
	public void setPlate_no(String plate_no) {
		this.plate_no = plate_no;
	}
	public String getVeh_type() {
		return veh_type;
	}
	public void setVeh_type(String veh_type) {
		this.veh_type = veh_type;
	}
	public String getLow_flag() {
		return low_flag;
	}
	public void setLow_flag(String low_flag) {
		this.low_flag = low_flag;
	}
	public String getBoard_limit() {
		return board_limit;
	}
	public void setBoard_limit(String board_limit) {
		this.board_limit = board_limit;
	}
	public String getCompany_id() {
		return company_id;
	}
	public void setCompany_id(String company_id) {
		this.company_id = company_id;
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
	public String getObe_id() {
		return obe_id;
	}
	public void setObe_id(String obe_id) {
		this.obe_id = obe_id;
	}
	public String getArea_code() {
		return area_code;
	}
	public void setArea_code(String area_code) {
		this.area_code = area_code;
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
	public String getVeh_type_name() {
		return veh_type_name;
	}
	public void setVeh_type_name(String veh_type_name) {
		this.veh_type_name = veh_type_name;
	}
	public String getCompany_name() {
		return company_name;
	}
	public void setCompany_name(String company_name) {
		this.company_name = company_name;
	}
	public String getSearchWord() {
		return searchWord;
	}
	public void setSearchWord(String searchWord) {
		this.searchWord = searchWord;
	}		
} 
