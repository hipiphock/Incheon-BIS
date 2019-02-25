package com.bis.vo.re;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 운행위반기준정보
 * Class Name 	  : TbOmmViolparamVO.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2018.01.23	   주형빈                      최초생성
 * </PRE>
 * 
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
public class TbOmmViolparamVO {
	private String app_startdt;				//DATE
	private String app_enddt;				//DATE
	private String open_run_thresdist;		//NUMBER(6,0)
	private String open_run_thresspd;		//NUMBER(4,1)
	private String overspd_thresspd;		//NUMBER(4,1)
	private String overspd_critictm;		//NUMBER(3,0)
	private String accel_thresspd;			//NUMBER(4,1)
	private String decel_thresspd;			//NUMBER(4,1)
	private String accel_decel_critictm;	//NUMBER(3,0)
	private String outroute_thresdist;		//NUMBER(6,0)
	private String outroute_threstm;		//NUMBER(3,0)
	private String volun_delay_threstm;		//NUMBER(3,0)
	private String dyna_evt_threstm;		//NUMBER(3,0)
	private String bstop_svc_thresspd;		//NUMBER(4,1)
	
	private String search_startdt;
	private String rowid;
	
	

	public String getRowid() {
		return rowid;
	}

	public void setRowid(String rowid) {
		this.rowid = rowid;
	}

	public String getApp_startdt() {
		return app_startdt;
	}

	public void setApp_startdt(String app_startdt) {
		this.app_startdt = app_startdt;
	}

	public String getApp_enddt() {
		return app_enddt;
	}

	public void setApp_enddt(String app_enddt) {
		this.app_enddt = app_enddt;
	}

	public String getOpen_run_thresdist() {
		return open_run_thresdist;
	}

	public void setOpen_run_thresdist(String open_run_thresdist) {
		this.open_run_thresdist = open_run_thresdist;
	}

	public String getOpen_run_thresspd() {
		return open_run_thresspd;
	}

	public void setOpen_run_thresspd(String open_run_thresspd) {
		this.open_run_thresspd = open_run_thresspd;
	}

	public String getOverspd_thresspd() {
		return overspd_thresspd;
	}

	public void setOverspd_thresspd(String overspd_thresspd) {
		this.overspd_thresspd = overspd_thresspd;
	}

	public String getOverspd_critictm() {
		return overspd_critictm;
	}

	public void setOverspd_critictm(String overspd_critictm) {
		this.overspd_critictm = overspd_critictm;
	}

	public String getAccel_thresspd() {
		return accel_thresspd;
	}

	public void setAccel_thresspd(String accel_thresspd) {
		this.accel_thresspd = accel_thresspd;
	}

	public String getDecel_thresspd() {
		return decel_thresspd;
	}

	public void setDecel_thresspd(String decel_thresspd) {
		this.decel_thresspd = decel_thresspd;
	}

	public String getAccel_decel_critictm() {
		return accel_decel_critictm;
	}

	public void setAccel_decel_critictm(String accel_decel_critictm) {
		this.accel_decel_critictm = accel_decel_critictm;
	}

	public String getOutroute_thresdist() {
		return outroute_thresdist;
	}

	public void setOutroute_thresdist(String outroute_thresdist) {
		this.outroute_thresdist = outroute_thresdist;
	}

	public String getOutroute_threstm() {
		return outroute_threstm;
	}

	public void setOutroute_threstm(String outroute_threstm) {
		this.outroute_threstm = outroute_threstm;
	}

	public String getVolun_delay_threstm() {
		return volun_delay_threstm;
	}

	public void setVolun_delay_threstm(String volun_delay_threstm) {
		this.volun_delay_threstm = volun_delay_threstm;
	}

	public String getDyna_evt_threstm() {
		return dyna_evt_threstm;
	}

	public void setDyna_evt_threstm(String dyna_evt_threstm) {
		this.dyna_evt_threstm = dyna_evt_threstm;
	}

	public String getBstop_svc_thresspd() {
		return bstop_svc_thresspd;
	}

	public void setBstop_svc_thresspd(String bstop_svc_thresspd) {
		this.bstop_svc_thresspd = bstop_svc_thresspd;
	}

	public String getSearch_startdt() {
		return search_startdt;
	}

	public void setSearch_startdt(String search_startdt) {
		this.search_startdt = search_startdt;
	}
	
}
