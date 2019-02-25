package com.bis.vo.re;

public class TbIcmRoutemjbstopVO {
	
	private String routeid;			//	number(9,0)			yes		1	
	private String rowseq;			//	number(6,0)			yes		2	
	private String app_startdt;		//	date				yes		3	
	private String bstopid;			//	number(9,0)			yes		4	
	private String dircd;			//	varchar2(1 byte)	yes		5	
	private String mjspotyn;		//	varchar2(1 byte)	yes		6	
	private String mjspotnm;		//	varchar2(20 byte)	yes		7	
	private String sectdist;		//	number(8,2)			yes		8	
	private String descr;			//	varchar2(250 byte)	yes		9	
	private String app_enddt;		//	date				yes		10
	
	public String getRouteid() {
		return routeid;
	}
	public void setRouteid(String routeid) {
		this.routeid = routeid;
	}
	public String getRowseq() {
		return rowseq;
	}
	public void setRowseq(String rowseq) {
		this.rowseq = rowseq;
	}
	public String getApp_startdt() {
		return app_startdt;
	}
	public void setApp_startdt(String app_startdt) {
		this.app_startdt = app_startdt;
	}
	public String getBstopid() {
		return bstopid;
	}
	public void setBstopid(String bstopid) {
		this.bstopid = bstopid;
	}
	public String getDircd() {
		return dircd;
	}
	public void setDircd(String dircd) {
		this.dircd = dircd;
	}
	public String getMjspotyn() {
		return mjspotyn;
	}
	public void setMjspotyn(String mjspotyn) {
		this.mjspotyn = mjspotyn;
	}
	public String getMjspotnm() {
		return mjspotnm;
	}
	public void setMjspotnm(String mjspotnm) {
		this.mjspotnm = mjspotnm;
	}
	public String getSectdist() {
		return sectdist;
	}
	public void setSectdist(String sectdist) {
		this.sectdist = sectdist;
	}
	public String getDescr() {
		return descr;
	}
	public void setDescr(String descr) {
		this.descr = descr;
	}
	public String getApp_enddt() {
		return app_enddt;
	}
	public void setApp_enddt(String app_enddt) {
		this.app_enddt = app_enddt;
	}
	
	
}
