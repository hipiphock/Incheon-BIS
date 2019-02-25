package com.bis.vo.re;

import java.util.List;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 버스 노선
 * Class Name 	  : TbAdmBusrouteVO.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2017.11.07	    황중모                       최초생성
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
public class TbAdmBusrouteVO {
		
	private String routeid;//	number(9,0)
	private String routeno;//	varchar2(30 byte)
	private String runtpcd;//	varchar2(2 byte)
	private String routetpcd;//	varchar2(1 byte)
	private String routedesc;//	varchar2(50 byte)
	private String pass_bstopcnt;//	number(10,0)
	private String origin_bstopid;//	number(9,0)
	private String dest_bstopid;//	number(9,0)
	private String routelen;//	number(6,0)
	private String routecurv;//	number(5,2)
	private String runtm;//	number(10,0)
	private String rundist;//	number(10,0)
	private String lic_buscnt;//	number(4,0)
	private String rsv_buscnt;//	number(4,0)
	private String runcnt;//	number(4,0)
	private String adminnm;//	varchar2(30 byte)
	private String descr;//	varchar2(250 byte)
	private String jointallocyn;//	varchar2(1 byte)
	private String app_startdt;//	date
	private String app_enddt;//	date
	private String useyn;//	varchar2(1 byte)
	private String upddt;//	date
	private String upd_userid;//	varchar2(20 byte)
	private String pair_routeid;//	number(9,0)
	private String turn_bstopid;//	number(9,0)
	private String other_item;//	varchar2(255 byte)
	
	/* TB_BMC_BUSRUN */
	private String busid;					//NUMBER(9,0)
	private String evt_occurdt;				//DATE
	private String evttpcd;					//VARCHAR2(2 BYTE)
	private String evtsubtpcd;				//VARCHAR2(1 BYTE)
	private String mdtid;					//NUMBER(5,0)	
	private String posx;					//NUMBER(12,6)
	private String posy;					//NUMBER(12,6)
	private String heading;					//NUMBER(4,0)
	private String nodeid;					//NUMBER(10,0)
	private String llinkid;					//NUMBER(10,0)
	private String dircd;					//VARCHAR2(1 BYTE)
	private String pathseq;					//NUMBER(5,0)
	private String detect_nodecnt;			//NUMBER(5,0)
	private String rundistinctcd;			//VARCHAR2(1 BYTE)
	private String runstatcd;				//VARCHAR2(1 BYTE)
	private String lastbusyn;				//VARCHAR2(1 BYTE)
	private String emptybusyn;				//VARCHAR2(1 BYTE)
	private String chgbusyn;				//VARCHAR2(1 BYTE)
	private String openstatcd;				//VARCHAR2(1 BYTE)
	private String emgcyyn;					//VARCHAR2(1 BYTE)
	private String accidyn;					//VARCHAR2(1 BYTE)
	private String trblyn;					//VARCHAR2(1 BYTE)
	private String incidtpcd;				//VARCHAR2(2 BYTE)
	private String runvioltpcd;				//VARCHAR2(2 BYTE)
	private String runspd;					//NUMBER(4,1)
	private String real_runord;				//NUMBER(4,0)
	private String plan_runord;				//NUMBER(4,0)
	private String run_startdt;				//DATE
	private String bstop_stoptm;			//NUMBER(6,0)
	private String center_colldt;			//DATE
	private String node_arrdt;				//DATE
	private String node_depdt;				//DATE
	private String incid_alarmyn;			//VARCHAR2(1 BYTE)
	private String msgseq;					//NUMBER(10,0)
	
	/* TB_ADM_BUS */	
	private String compid;			//NUMBER(6,0)
	private String carregno;		//VARCHAR2(12 BYTE)
	private String bustpcd;			//VARCHAR2(1 BYTE)
	private String lowplateyn;		//VARCHAR2(1 BYTE)
	private String vehcapa;			//NUMBER(3,0)
	private String busstatcd;		//VARCHAR2(1 BYTE)
	private String fueltpcd;		//VARCHAR2(1 BYTE)
	private String manufnm;			//VARCHAR2(20 BYTE)
	private String manufyy;			//VARCHAR2(4 BYTE)
	private String bodyno;			//VARCHAR2(20 BYTE)
	private String frmnm;			//VARCHAR2(20 BYTE)
	private String rowseq;			//NUMBER(6,0)
	private String regymd;			//DATE
	private String scraptpcd;		//VARCHAR2(1 BYTE)
	private String treatyn;			//VARCHAR2(1 BYTE)
	private String lnkd_busid;		//NUMBER(9,0)
	
	/* TB_ADM_BUSCOMP */
	private String compnm;			//VARCHAR2(20 BYTE)
	private String governornm;		//VARCHAR2(20 BYTE)
	private String corpregno;		//VARCHAR2(13 BYTE)
	private String addr;			//VARCHAR2(60 BYTE)
	private String telno;			//VARCHAR2(20 BYTE)
	private String faxno;			//VARCHAR2(20 BYTE)
	private String run_routecnt;	//NUMBER(4,0)	
	private String dim;				//NUMBER(8,2)
	private String respon_userid;	//VARCHAR2(20 BYTE)	
	private String admin_cnt;		//NUMBER(4,0)
	private String equip_cnt;		//NUMBER(4,0)	
	private String uniassgbcd;		//VARCHAR2(1 BYTE)
	private String lostinfo_tel;	//VARCHAR2(20 BYTE)
	
	/* TB_ADM_BUSSTOP */
	private String bstopid;				//NUMBER(9,0)
	private String areacd;				//NUMBER(3,0)
	private String short_bstopid;		//NUMBER(5,0)
	private String bstopnm;				//VARCHAR2(40 BYTE)
	private String eng_bstopnm;			//VARCHAR2(40 BYTE)
	private String short_bstopnm;		//VARCHAR2(40 BYTE)
	private String bstoptpcd;			//VARCHAR2(1 BYTE)
	private String centerlaneyn;		//VARCHAR2(1 BYTE)	
	private String bstopfacilcd;		//VARCHAR2(1 BYTE)
	private String baytpcd;				//VARCHAR2(1 BYTE)
	private String baylen;				//NUMBER(6,2)
	private String lanecnt;				//NUMBER(2,0)
	private String linkid;				//NUMBER(10,0)	
	private String loctpcd;				//VARCHAR2(1 BYTE)
	private String dongnm;				//VARCHAR2(20 BYTE)
	private String link_posx;			//NUMBER(12,6)
	private String link_posy;			//NUMBER(12,6)
	private String detectrange;			//NUMBER(4,0)
	private String manno;				//VARCHAR2(10 BYTE)
	
	// selectMapBusList / 전체버스 조회
	private String lat; //POSY alias
	private String lng; //POSX alias
	private String bop_status;
	private String cur_status;
	private String update_dt;
	
	// selectRouteInfo / 선택 노선 정보 조회
	private String code_explain; 
	private String oper_cnt;
	private String st_stop_name;
	private String ed_stop_name;
	
	// selectRouteScheduleList / 노선 시간표 관리(왼쪽)
	private String route_type_name;
	
	private String st_stopnm;
	private String ed_stopnm;
	private String tn_stopnm;
	private String searchWord;

	//버텍스
	private String linkseq;
	private String seq;
	
	//도로
	private String roadno;
	private String roadnm;
	
	private String fmt_routelen;
	private String fmt_rundist;
	private String fmt_runtm;
	
	private List<String> pair_routeidList;

	//v0505
	private String rate; //겸합율
	private String len; //중복길이
	
	//v0506
	private String routetype; //노선유형명
	private String widearea; //광역
	
	//v0109
	private String rno; // 노선 번호
	private String cno; // 차량 번호
	private String ord; // 운행 회차
	private String tm; // 운행시작시간
	private String rundistin4cttype; //운행상태
	
	
	
	public String getOrd() {
		return ord;
	}
	public void setOrd(String ord) {
		this.ord = ord;
	}
	public String getTm() {
		return tm;
	}
	public void setTm(String tm) {
		this.tm = tm;
	}
	public String getRundistin4cttype() {
		return rundistin4cttype;
	}
	public void setRundistin4cttype(String rundistin4cttype) {
		this.rundistin4cttype = rundistin4cttype;
	}
	public String getCno() {
		return cno;
	}
	public void setCno(String cno) {
		this.cno = cno;
	}
	public String getRno() {
		return rno;
	}
	public void setRno(String rno) {
		this.rno = rno;
	}
	public String getRoutetype() {
		return routetype;
	}
	public void setRoutetype(String routetype) {
		this.routetype = routetype;
	}
	public String getWidearea() {
		return widearea;
	}
	public void setWidearea(String widearea) {
		this.widearea = widearea;
	}
	public String getLen() {
		return len;
	}
	public void setLen(String len) {
		this.len = len;
	}
	public String getRate() {
		return rate;
	}
	public void setRate(String rate) {
		this.rate = rate;
	}
	public List<String> getPair_routeidList() {
		return pair_routeidList;
	}
	public void setPair_routeidList(List<String> pair_routeidList) {
		this.pair_routeidList = pair_routeidList;
	}
	public String getFmt_routelen() {
		return fmt_routelen;
	}
	public void setFmt_routelen(String fmt_routelen) {
		this.fmt_routelen = fmt_routelen;
	}
	public String getFmt_rundist() {
		return fmt_rundist;
	}
	public void setFmt_rundist(String fmt_rundist) {
		this.fmt_rundist = fmt_rundist;
	}
	public String getFmt_runtm() {
		return fmt_runtm;
	}
	public void setFmt_runtm(String fmt_runtm) {
		this.fmt_runtm = fmt_runtm;
	}
	public String getBusid() {
		return busid;
	}
	public void setBusid(String busid) {
		this.busid = busid;
	}
	public String getEvt_occurdt() {
		return evt_occurdt;
	}
	public void setEvt_occurdt(String evt_occurdt) {
		this.evt_occurdt = evt_occurdt;
	}
	public String getEvttpcd() {
		return evttpcd;
	}
	public void setEvttpcd(String evttpcd) {
		this.evttpcd = evttpcd;
	}
	public String getEvtsubtpcd() {
		return evtsubtpcd;
	}
	public void setEvtsubtpcd(String evtsubtpcd) {
		this.evtsubtpcd = evtsubtpcd;
	}
	public String getMdtid() {
		return mdtid;
	}
	public void setMdtid(String mdtid) {
		this.mdtid = mdtid;
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
	public String getHeading() {
		return heading;
	}
	public void setHeading(String heading) {
		this.heading = heading;
	}
	public String getNodeid() {
		return nodeid;
	}
	public void setNodeid(String nodeid) {
		this.nodeid = nodeid;
	}
	public String getLlinkid() {
		return llinkid;
	}
	public void setLlinkid(String llinkid) {
		this.llinkid = llinkid;
	}
	public String getDircd() {
		return dircd;
	}
	public void setDircd(String dircd) {
		this.dircd = dircd;
	}
	public String getPathseq() {
		return pathseq;
	}
	public void setPathseq(String pathseq) {
		this.pathseq = pathseq;
	}
	public String getDetect_nodecnt() {
		return detect_nodecnt;
	}
	public void setDetect_nodecnt(String detect_nodecnt) {
		this.detect_nodecnt = detect_nodecnt;
	}
	public String getRundistinctcd() {
		return rundistinctcd;
	}
	public void setRundistinctcd(String rundistinctcd) {
		this.rundistinctcd = rundistinctcd;
	}
	public String getRunstatcd() {
		return runstatcd;
	}
	public void setRunstatcd(String runstatcd) {
		this.runstatcd = runstatcd;
	}
	public String getLastbusyn() {
		return lastbusyn;
	}
	public void setLastbusyn(String lastbusyn) {
		this.lastbusyn = lastbusyn;
	}
	public String getEmptybusyn() {
		return emptybusyn;
	}
	public void setEmptybusyn(String emptybusyn) {
		this.emptybusyn = emptybusyn;
	}
	public String getChgbusyn() {
		return chgbusyn;
	}
	public void setChgbusyn(String chgbusyn) {
		this.chgbusyn = chgbusyn;
	}
	public String getOpenstatcd() {
		return openstatcd;
	}
	public void setOpenstatcd(String openstatcd) {
		this.openstatcd = openstatcd;
	}
	public String getEmgcyyn() {
		return emgcyyn;
	}
	public void setEmgcyyn(String emgcyyn) {
		this.emgcyyn = emgcyyn;
	}
	public String getAccidyn() {
		return accidyn;
	}
	public void setAccidyn(String accidyn) {
		this.accidyn = accidyn;
	}
	public String getTrblyn() {
		return trblyn;
	}
	public void setTrblyn(String trblyn) {
		this.trblyn = trblyn;
	}
	public String getIncidtpcd() {
		return incidtpcd;
	}
	public void setIncidtpcd(String incidtpcd) {
		this.incidtpcd = incidtpcd;
	}
	public String getRunvioltpcd() {
		return runvioltpcd;
	}
	public void setRunvioltpcd(String runvioltpcd) {
		this.runvioltpcd = runvioltpcd;
	}
	public String getRunspd() {
		return runspd;
	}
	public void setRunspd(String runspd) {
		this.runspd = runspd;
	}
	public String getReal_runord() {
		return real_runord;
	}
	public void setReal_runord(String real_runord) {
		this.real_runord = real_runord;
	}
	public String getPlan_runord() {
		return plan_runord;
	}
	public void setPlan_runord(String plan_runord) {
		this.plan_runord = plan_runord;
	}
	public String getRun_startdt() {
		return run_startdt;
	}
	public void setRun_startdt(String run_startdt) {
		this.run_startdt = run_startdt;
	}
	public String getBstop_stoptm() {
		return bstop_stoptm;
	}
	public void setBstop_stoptm(String bstop_stoptm) {
		this.bstop_stoptm = bstop_stoptm;
	}
	public String getCenter_colldt() {
		return center_colldt;
	}
	public void setCenter_colldt(String center_colldt) {
		this.center_colldt = center_colldt;
	}
	public String getNode_arrdt() {
		return node_arrdt;
	}
	public void setNode_arrdt(String node_arrdt) {
		this.node_arrdt = node_arrdt;
	}
	public String getNode_depdt() {
		return node_depdt;
	}
	public void setNode_depdt(String node_depdt) {
		this.node_depdt = node_depdt;
	}
	public String getIncid_alarmyn() {
		return incid_alarmyn;
	}
	public void setIncid_alarmyn(String incid_alarmyn) {
		this.incid_alarmyn = incid_alarmyn;
	}
	public String getMsgseq() {
		return msgseq;
	}
	public void setMsgseq(String msgseq) {
		this.msgseq = msgseq;
	}
	public String getCompid() {
		return compid;
	}
	public void setCompid(String compid) {
		this.compid = compid;
	}
	public String getCarregno() {
		return carregno;
	}
	public void setCarregno(String carregno) {
		this.carregno = carregno;
	}
	public String getBustpcd() {
		return bustpcd;
	}
	public void setBustpcd(String bustpcd) {
		this.bustpcd = bustpcd;
	}
	public String getLowplateyn() {
		return lowplateyn;
	}
	public void setLowplateyn(String lowplateyn) {
		this.lowplateyn = lowplateyn;
	}
	public String getVehcapa() {
		return vehcapa;
	}
	public void setVehcapa(String vehcapa) {
		this.vehcapa = vehcapa;
	}
	public String getBusstatcd() {
		return busstatcd;
	}
	public void setBusstatcd(String busstatcd) {
		this.busstatcd = busstatcd;
	}
	public String getFueltpcd() {
		return fueltpcd;
	}
	public void setFueltpcd(String fueltpcd) {
		this.fueltpcd = fueltpcd;
	}
	public String getManufnm() {
		return manufnm;
	}
	public void setManufnm(String manufnm) {
		this.manufnm = manufnm;
	}
	public String getManufyy() {
		return manufyy;
	}
	public void setManufyy(String manufyy) {
		this.manufyy = manufyy;
	}
	public String getBodyno() {
		return bodyno;
	}
	public void setBodyno(String bodyno) {
		this.bodyno = bodyno;
	}
	public String getFrmnm() {
		return frmnm;
	}
	public void setFrmnm(String frmnm) {
		this.frmnm = frmnm;
	}
	public String getRowseq() {
		return rowseq;
	}
	public void setRowseq(String rowseq) {
		this.rowseq = rowseq;
	}
	public String getRegymd() {
		return regymd;
	}
	public void setRegymd(String regymd) {
		this.regymd = regymd;
	}
	public String getScraptpcd() {
		return scraptpcd;
	}
	public void setScraptpcd(String scraptpcd) {
		this.scraptpcd = scraptpcd;
	}
	public String getTreatyn() {
		return treatyn;
	}
	public void setTreatyn(String treatyn) {
		this.treatyn = treatyn;
	}
	public String getLnkd_busid() {
		return lnkd_busid;
	}
	public void setLnkd_busid(String lnkd_busid) {
		this.lnkd_busid = lnkd_busid;
	}
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
	public String getBstopid() {
		return bstopid;
	}
	public void setBstopid(String bstopid) {
		this.bstopid = bstopid;
	}
	public String getAreacd() {
		return areacd;
	}
	public void setAreacd(String areacd) {
		this.areacd = areacd;
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
	public String getEng_bstopnm() {
		return eng_bstopnm;
	}
	public void setEng_bstopnm(String eng_bstopnm) {
		this.eng_bstopnm = eng_bstopnm;
	}
	public String getShort_bstopnm() {
		return short_bstopnm;
	}
	public void setShort_bstopnm(String short_bstopnm) {
		this.short_bstopnm = short_bstopnm;
	}
	public String getBstoptpcd() {
		return bstoptpcd;
	}
	public void setBstoptpcd(String bstoptpcd) {
		this.bstoptpcd = bstoptpcd;
	}
	public String getCenterlaneyn() {
		return centerlaneyn;
	}
	public void setCenterlaneyn(String centerlaneyn) {
		this.centerlaneyn = centerlaneyn;
	}
	public String getBstopfacilcd() {
		return bstopfacilcd;
	}
	public void setBstopfacilcd(String bstopfacilcd) {
		this.bstopfacilcd = bstopfacilcd;
	}
	public String getBaytpcd() {
		return baytpcd;
	}
	public void setBaytpcd(String baytpcd) {
		this.baytpcd = baytpcd;
	}
	public String getBaylen() {
		return baylen;
	}
	public void setBaylen(String baylen) {
		this.baylen = baylen;
	}
	public String getLanecnt() {
		return lanecnt;
	}
	public void setLanecnt(String lanecnt) {
		this.lanecnt = lanecnt;
	}
	public String getLinkid() {
		return linkid;
	}
	public void setLinkid(String linkid) {
		this.linkid = linkid;
	}
	public String getLoctpcd() {
		return loctpcd;
	}
	public void setLoctpcd(String loctpcd) {
		this.loctpcd = loctpcd;
	}
	public String getDongnm() {
		return dongnm;
	}
	public void setDongnm(String dongnm) {
		this.dongnm = dongnm;
	}
	public String getLink_posx() {
		return link_posx;
	}
	public void setLink_posx(String link_posx) {
		this.link_posx = link_posx;
	}
	public String getLink_posy() {
		return link_posy;
	}
	public void setLink_posy(String link_posy) {
		this.link_posy = link_posy;
	}
	public String getDetectrange() {
		return detectrange;
	}
	public void setDetectrange(String detectrange) {
		this.detectrange = detectrange;
	}
	public String getManno() {
		return manno;
	}
	public void setManno(String manno) {
		this.manno = manno;
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
	public String getUpdate_dt() {
		return update_dt;
	}
	public void setUpdate_dt(String update_dt) {
		this.update_dt = update_dt;
	}
	public String getOper_cnt() {
		return oper_cnt;
	}
	public void setOper_cnt(String oper_cnt) {
		this.oper_cnt = oper_cnt;
	}
	public String getSt_stop_name() {
		return st_stop_name;
	}
	public void setSt_stop_name(String st_stop_name) {
		this.st_stop_name = st_stop_name;
	}
	public String getEd_stop_name() {
		return ed_stop_name;
	}
	public void setEd_stop_name(String ed_stop_name) {
		this.ed_stop_name = ed_stop_name;
	}
	public String getBop_status() {
		return bop_status;
	}
	public void setBop_status(String bop_status) {
		this.bop_status = bop_status;
	}
	public String getCur_status() {
		return cur_status;
	}
	public void setCur_status(String cur_status) {
		this.cur_status = cur_status;
	}
	public String getCode_explain() {
		return code_explain;
	}
	public void setCode_explain(String code_explain) {
		this.code_explain = code_explain;
	}
	public String getRouteid() {
		return routeid;
	}
	public void setRouteid(String routeid) {
		this.routeid = routeid;
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
	public String getJointallocyn() {
		return jointallocyn;
	}
	public void setJointallocyn(String jointallocyn) {
		this.jointallocyn = jointallocyn;
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
	public String getSt_stopnm() {
		return st_stopnm;
	}
	public void setSt_stopnm(String st_stopnm) {
		this.st_stopnm = st_stopnm;
	}
	public String getEd_stopnm() {
		return ed_stopnm;
	}
	public void setEd_stopnm(String ed_stopnm) {
		this.ed_stopnm = ed_stopnm;
	}
	public String getTn_stopnm() {
		return tn_stopnm;
	}
	public void setTn_stopnm(String tn_stopnm) {
		this.tn_stopnm = tn_stopnm;
	}
	public String getSearchWord() {
		return searchWord;
	}
	public void setSearchWord(String searchWord) {
		this.searchWord = searchWord;
	}
	public String getLinkseq() {
		return linkseq;
	}
	public void setLinkseq(String linkseq) {
		this.linkseq = linkseq;
	}
	public String getSeq() {
		return seq;
	}
	public void setSeq(String seq) {
		this.seq = seq;
	}
	public String getRoute_type_name() {
		return route_type_name;
	}
	public void setRoute_type_name(String route_type_name) {
		this.route_type_name = route_type_name;
	}
	public String getRoadno() {
		return roadno;
	}
	public void setRoadno(String roadno) {
		this.roadno = roadno;
	}
	public String getRoadnm() {
		return roadnm;
	}
	public void setRoadnm(String roadnm) {
		this.roadnm = roadnm;
	}
}