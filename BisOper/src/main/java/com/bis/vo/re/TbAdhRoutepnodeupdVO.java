package com.bis.vo.re;

public class TbAdhRoutepnodeupdVO {
	private String routeid;			//	number(9,0)			yes		1	
	private String pathseq;			//	number(5,0)			yes		2	
	private String upddt;			//	date				yes		3	
	private String nodeid;			//	number(10,0)		yes		4	
	private String nodegbcd;		//	varchar2(1 byte)	yes	0	5	
	private String dircd;			//	varchar2(1 byte)	yes		6	
	private String node_sectdist;	//	number(8,2)			yes		7	
	private String bstopseq;		//	number(5,0)			yes		8	
	private String bstop_sectdist;	//	number(8,2)			yes		9	
	private String descr;			//	varchar2(250 byte)	yes		10	
	private String updtpcd;			//	varchar2(1 byte)	yes		11	
	private String upd_userid;		//	varchar2(20 byte)	yes		12
	
	private String bstopnm;
	private String short_bstopid;
	private String search_date;
	
	public String getRouteid() {
		return routeid;
	}
	public void setRouteid(String routeid) {
		this.routeid = routeid;
	}
	public String getPathseq() {
		return pathseq;
	}
	public void setPathseq(String pathseq) {
		this.pathseq = pathseq;
	}
	public String getUpddt() {
		return upddt;
	}
	public void setUpddt(String upddt) {
		this.upddt = upddt;
	}
	public String getNodeid() {
		return nodeid;
	}
	public void setNodeid(String nodeid) {
		this.nodeid = nodeid;
	}
	public String getNodegbcd() {
		return nodegbcd;
	}
	public void setNodegbcd(String nodegbcd) {
		this.nodegbcd = nodegbcd;
	}
	public String getDircd() {
		return dircd;
	}
	public void setDircd(String dircd) {
		this.dircd = dircd;
	}
	public String getNode_sectdist() {
		return node_sectdist;
	}
	public void setNode_sectdist(String node_sectdist) {
		this.node_sectdist = node_sectdist;
	}
	public String getBstopseq() {
		return bstopseq;
	}
	public void setBstopseq(String bstopseq) {
		this.bstopseq = bstopseq;
	}
	public String getBstop_sectdist() {
		return bstop_sectdist;
	}
	public void setBstop_sectdist(String bstop_sectdist) {
		this.bstop_sectdist = bstop_sectdist;
	}
	public String getDescr() {
		return descr;
	}
	public void setDescr(String descr) {
		this.descr = descr;
	}
	public String getUpdtpcd() {
		return updtpcd;
	}
	public void setUpdtpcd(String updtpcd) {
		this.updtpcd = updtpcd;
	}
	public String getUpd_userid() {
		return upd_userid;
	}
	public void setUpd_userid(String upd_userid) {
		this.upd_userid = upd_userid;
	}
	public String getSearch_date() {
		return search_date;
	}
	public void setSearch_date(String search_date) {
		this.search_date = search_date;
	}
	public String getShort_bstopid() {
		return short_bstopid;
	}
	public void setShort_bstopid(String short_bstopid) {
		this.short_bstopid = short_bstopid;
	}
	public String getBstopnm() {
		return bstopnm;
	}
	public void setBstopnm(String bstopnm) {
		this.bstopnm = bstopnm;
	}
	
}
