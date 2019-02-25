package com.bis.vo.re;

public class TbAdmRouteToComVO {
	
	private String routeid;			//number(9,0)		yes		1	
	private String compid;			//number(6,0)		yes		2	
	private String jointallocyn;	//varchar2(1 byte)	yes	0	3	
	private String upddt;			//date				yes		4	
	private String upd_userid;		//varchar2(20 byte)	yes		5
	
	// TB_ADM_BUSROUTE
	private String routeno;			//	varchar2(30 byte)
	private String runtpcd;			//	varchar2(2 byte)
	private String routetpcd;		//	varchar2(1 byte)
	private String routedesc;		//	varchar2(50 byte)
	private String pass_bstopcnt;	//	number(10,0)
	private String origin_bstopid;	//	number(9,0)
	private String dest_bstopid;	//	number(9,0)
	private String routelen;		//	number(6,0)
	private String routecurv;		//	number(5,2)
	private String runtm;			//	number(10,0)
	private String rundist;			//	number(10,0)
	private String lic_buscnt;		//	number(4,0)
	private String rsv_buscnt;		//	number(4,0)
	private String runcnt;			//	number(4,0)
	private String adminnm;			//	varchar2(30 byte)
	private String descr;			//	varchar2(250 byte)
	private String app_startdt;		//	date
	private String app_enddt;		//	date
	private String useyn;			//	varchar2(1 byte)
	private String pair_routeid;	//	number(9,0)
	private String turn_bstopid;	//	number(9,0)
	private String other_item;		//	varchar2(255 byte)
	
	// TB_ADM_BUSCOMP	
	private String compnm;			// varchar2(20 byte)	yes							2
	private String governornm;		// varchar2(20 byte)	yes							3
	private String corpregno;		// varchar2(13 byte)	yes							4	
	private String addr;			// varchar2(60 byte)	yes							5	
	private String telno;			// varchar2(20 byte)	yes							6	
	private String faxno;			// varchar2(20 byte)	yes							7	
	private String run_routecnt;	// number(4,0)			yes							8	
	private String dim;				// number(8,2)			yes							11	
	private String respon_userid;	// varchar2(20 byte)	yes							13	
	private String admin_cnt;		// number(4,0)			yes				0			19	
	private String equip_cnt;		// number(4,0)			yes				0			20	
	private String posx;			// number(12,6)			yes							21
	private String posy;			// number(12,6)			yes							22
	
	public String getCompnm() {
		return compnm;
	}
	public void setCompnm(String compnm) {
		this.compnm = compnm;
	}
	public String getGovernornm() {
		return governornm;
	}
	public void setGovernornm(String governornm) {
		this.governornm = governornm;
	}
	public String getCorpregno() {
		return corpregno;
	}
	public void setCorpregno(String corpregno) {
		this.corpregno = corpregno;
	}
	public String getAddr() {
		return addr;
	}
	public void setAddr(String addr) {
		this.addr = addr;
	}
	public String getTelno() {
		return telno;
	}
	public void setTelno(String telno) {
		this.telno = telno;
	}
	public String getFaxno() {
		return faxno;
	}
	public void setFaxno(String faxno) {
		this.faxno = faxno;
	}
	public String getRun_routecnt() {
		return run_routecnt;
	}
	public void setRun_routecnt(String run_routecnt) {
		this.run_routecnt = run_routecnt;
	}
	public String getDim() {
		return dim;
	}
	public void setDim(String dim) {
		this.dim = dim;
	}
	public String getRespon_userid() {
		return respon_userid;
	}
	public void setRespon_userid(String respon_userid) {
		this.respon_userid = respon_userid;
	}
	public String getAdmin_cnt() {
		return admin_cnt;
	}
	public void setAdmin_cnt(String admin_cnt) {
		this.admin_cnt = admin_cnt;
	}
	public String getEquip_cnt() {
		return equip_cnt;
	}
	public void setEquip_cnt(String equip_cnt) {
		this.equip_cnt = equip_cnt;
	}
	public String getPosx() {
		return posx;
	}
	public void setPosx(String posx) {
		this.posx = posx;
	}
	public String getPosy() {
		return posy;
	}
	public void setPosy(String posy) {
		this.posy = posy;
	}
	public String getUniassgbcd() {
		return uniassgbcd;
	}
	public void setUniassgbcd(String uniassgbcd) {
		this.uniassgbcd = uniassgbcd;
	}
	public String getLostinfo_tel() {
		return lostinfo_tel;
	}
	public void setLostinfo_tel(String lostinfo_tel) {
		this.lostinfo_tel = lostinfo_tel;
	}
	private String uniassgbcd;		// varchar2(1 byte)		yes							23	
	private String lostinfo_tel;	// varchar2(20 byte)	yes							24
	
	public String getRouteid() {
		return routeid;
	}
	public void setRouteid(String routeid) {
		this.routeid = routeid;
	}
	public String getCompid() {
		return compid;
	}
	public void setCompid(String compid) {
		this.compid = compid;
	}
	public String getJointallocyn() {
		return jointallocyn;
	}
	public void setJointallocyn(String jointallocyn) {
		this.jointallocyn = jointallocyn;
	}
	public String getUpddt() {
		return upddt;
	}
	public void setUpddt(String upddt) {
		this.upddt = upddt;
	}
	public String getUpd_userid() {
		return upd_userid;
	}
	public void setUpd_userid(String upd_userid) {
		this.upd_userid = upd_userid;
	}
	public String getRouteno() {
		return routeno;
	}
	public void setRouteno(String routeno) {
		this.routeno = routeno;
	}
	public String getRuntpcd() {
		return runtpcd;
	}
	public void setRuntpcd(String runtpcd) {
		this.runtpcd = runtpcd;
	}
	public String getRoutetpcd() {
		return routetpcd;
	}
	public void setRoutetpcd(String routetpcd) {
		this.routetpcd = routetpcd;
	}
	public String getRoutedesc() {
		return routedesc;
	}
	public void setRoutedesc(String routedesc) {
		this.routedesc = routedesc;
	}
	public String getPass_bstopcnt() {
		return pass_bstopcnt;
	}
	public void setPass_bstopcnt(String pass_bstopcnt) {
		this.pass_bstopcnt = pass_bstopcnt;
	}
	public String getOrigin_bstopid() {
		return origin_bstopid;
	}
	public void setOrigin_bstopid(String origin_bstopid) {
		this.origin_bstopid = origin_bstopid;
	}
	public String getDest_bstopid() {
		return dest_bstopid;
	}
	public void setDest_bstopid(String dest_bstopid) {
		this.dest_bstopid = dest_bstopid;
	}
	public String getRoutelen() {
		return routelen;
	}
	public void setRoutelen(String routelen) {
		this.routelen = routelen;
	}
	public String getRoutecurv() {
		return routecurv;
	}
	public void setRoutecurv(String routecurv) {
		this.routecurv = routecurv;
	}
	public String getRuntm() {
		return runtm;
	}
	public void setRuntm(String runtm) {
		this.runtm = runtm;
	}
	public String getRundist() {
		return rundist;
	}
	public void setRundist(String rundist) {
		this.rundist = rundist;
	}
	public String getLic_buscnt() {
		return lic_buscnt;
	}
	public void setLic_buscnt(String lic_buscnt) {
		this.lic_buscnt = lic_buscnt;
	}
	public String getRsv_buscnt() {
		return rsv_buscnt;
	}
	public void setRsv_buscnt(String rsv_buscnt) {
		this.rsv_buscnt = rsv_buscnt;
	}
	public String getRuncnt() {
		return runcnt;
	}
	public void setRuncnt(String runcnt) {
		this.runcnt = runcnt;
	}
	public String getAdminnm() {
		return adminnm;
	}
	public void setAdminnm(String adminnm) {
		this.adminnm = adminnm;
	}
	public String getDescr() {
		return descr;
	}
	public void setDescr(String descr) {
		this.descr = descr;
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
	public String getUseyn() {
		return useyn;
	}
	public void setUseyn(String useyn) {
		this.useyn = useyn;
	}
	public String getPair_routeid() {
		return pair_routeid;
	}
	public void setPair_routeid(String pair_routeid) {
		this.pair_routeid = pair_routeid;
	}
	public String getTurn_bstopid() {
		return turn_bstopid;
	}
	public void setTurn_bstopid(String turn_bstopid) {
		this.turn_bstopid = turn_bstopid;
	}
	public String getOther_item() {
		return other_item;
	}
	public void setOther_item(String other_item) {
		this.other_item = other_item;
	}
}
