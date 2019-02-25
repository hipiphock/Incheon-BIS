package com.bis.vo.re;

public class TbDmsPassingTimeVO {
	private String bstopid;						//	number(10,0)		yes		1	
	private String regdt;						//	date				yes		2	
	private String bstopnm;						//	varchar2(40 byte)	yes		3	
	private String bstop_passing_start_time;	//	date				yes		4	
	private String bstop_passing_end_time;		//	date				yes		5	
	private String all_specimem_cnt;			//	number(10,0)		yes		6	
	private String permit_err_over_cnt;			//	number(10,0)		yes		7	
	private String rate;						//	float				yes		8	
	private String err_abs_ave;					//	float				yes		9	
	private String equiv_coef;					//	float				yes		10
	
	public String getBstopid() {
		return bstopid;
	}
	public void setBstopid(String bstopid) {
		this.bstopid = bstopid;
	}
	public String getRegdt() {
		return regdt;
	}
	public void setRegdt(String regdt) {
		this.regdt = regdt;
	}
	public String getBstopnm() {
		return bstopnm;
	}
	public void setBstopnm(String bstopnm) {
		this.bstopnm = bstopnm;
	}
	public String getBstop_passing_start_time() {
		return bstop_passing_start_time;
	}
	public void setBstop_passing_start_time(String bstop_passing_start_time) {
		this.bstop_passing_start_time = bstop_passing_start_time;
	}
	public String getBstop_passing_end_time() {
		return bstop_passing_end_time;
	}
	public void setBstop_passing_end_time(String bstop_passing_end_time) {
		this.bstop_passing_end_time = bstop_passing_end_time;
	}
	public String getAll_specimem_cnt() {
		return all_specimem_cnt;
	}
	public void setAll_specimem_cnt(String all_specimem_cnt) {
		this.all_specimem_cnt = all_specimem_cnt;
	}
	public String getPermit_err_over_cnt() {
		return permit_err_over_cnt;
	}
	public void setPermit_err_over_cnt(String permit_err_over_cnt) {
		this.permit_err_over_cnt = permit_err_over_cnt;
	}
	public String getRate() {
		return rate;
	}
	public void setRate(String rate) {
		this.rate = rate;
	}
	public String getErr_abs_ave() {
		return err_abs_ave;
	}
	public void setErr_abs_ave(String err_abs_ave) {
		this.err_abs_ave = err_abs_ave;
	}
	public String getEquiv_coef() {
		return equiv_coef;
	}
	public void setEquiv_coef(String equiv_coef) {
		this.equiv_coef = equiv_coef;
	}
}
