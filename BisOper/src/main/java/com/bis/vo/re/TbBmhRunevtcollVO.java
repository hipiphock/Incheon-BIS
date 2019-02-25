package com.bis.vo.re;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 이력/통계 / 운행, 돌발, 위반 이력
 * Class Name 	  : TbAdmRoutenodeVO.java
 * Description 	  : 
 * Modification History 
 *   수정일                     	수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2017.11.07	    			김주암                   최초생성
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
public class TbBmhRunevtcollVO {

	private String searchWord;
	private String start_date_time;
	private String end_date_time;
	
	private String evt_occurdt;//	date
	private String busid;//	number(9,0)
	private String evttpcd;//	varchar2(2 byte)
	private String evtsubtpcd;//	varchar2(1 byte)
	private String mdtid	;//number(5,0)
	private String routeid;//	number(9,0)
	private String posx;//	number(12,6)
	private String posy;//	number(12,6)
	private String heading;//	number(4,0)
	private String nodeid;//	number(10,0)
	private String llinkid;//	number(10,0)
	private String pathseq;//	number(5,0)
	private String detect_nodecnt;//	number(5,0)
	private String runstatcd;//	varchar2(1 byte)
	private String lastbusyn;//	varchar2(1 byte)
	private String emptybusyn;//	varchar2(1 byte)
	private String chgbusyn;//	varchar2(1 byte)
	private String openstatcd;//	varchar2(1 byte)
	private String emgcyyn;//	varchar2(1 byte)
	private String accidyn;//	varchar2(1 byte)
	private String trblyn	;// varchar2(1 byte)
	private String incidtpcd;//	varchar2(2 byte)
	private String mdtstatcd;// 	varchar2(4 byte)
	private String runvioltpcd;// 	varchar2(2 byte)
	private String runspd;// 	number(4,1)
	private String rundist;// 	number(10,0)
	private String runtm;// 	number(10,0)
	private String real_runord;// 	number(4,0)
	private String run_startdt;// 	date
	private String bstop_stoptm;// 	number(6,0)
	private String fixint_cycl;// 	number(6,0)
	private String term_delaytm;// 	number(6,0)
	private String term_snddt;// 	date
	private String center_colldt;// 	date
	private String plan_runcnt	;// number(4,0)
	private String origin_bstopid;// 	number(9,0)
	private String dest_bstopid;// 	number(9,0)
	private String loc_occurdt_1;// 	date
	private String loc_posx_1;// 	number(12,6)
	private String loc_posy_1;// 	number(12,6)
	private String loc_occurdt_2;// 	date
	private String loc_posx_2;// 	number(12,6)
	private String loc_posy_2;// 	number(12,6)
	private String loc_occurdt_3;// 	date
	private String loc_posx_3;// 	number(12,6)
	private String loc_posy_3;// 	number(12,6)
	private String commsuccnt;// 	number(6,0)
	private String msgseq;// 	number(10,0)
	private String modem_serialno;// 	varchar2(12 byte)
	private String sub_mdtid;// 	number(5,0)
	private String macaddr;// 	varchar2(20 byte)
	private String outroute_nodecnt;// 	number(5,0)
	private String rcv_trinfo_cnt;// 	number(5,0)
	private String runstatcd_1;// 	varchar2(1 byte)
	
	// selectOperationHisList / 버스 운행이력 조회
	private String collect_type;
	private String lat;
	private String lng;
	private String carregno;
	private String nodenm;
	private String routeno;
	private String event_type_name;
	
	// selectBusIncidentHisList / 버스 돌발이력 조회
	private String code_explain;
	private String compnm;
	private String dt;
	
	// selectBusViolationHisList / 버스 위반이력 조회
	private String node_type_name;
	
	// selectBusInciList / 실시간 버스 돌발 조회
	private String bic_type_name;
	private String reg_dt;
	private String incidty; 
	
	//v0108
	private String cno;  //차량번호
	private String rno;  //노선번호
	private String linkid; //링크ID
	
	// v0109
	private String rt; // 위반사항
	private String lnm; //위반구역
	private String nnm; //위반지점
	
	
	
	public String getLinkid() {
		return linkid;
	}
	public void setLinkid(String linkid) {
		this.linkid = linkid;
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
	public String getRt() {
		return rt;
	}
	public void setRt(String rt) {
		this.rt = rt;
	}
	public String getLnm() {
		return lnm;
	}
	public void setLnm(String lnm) {
		this.lnm = lnm;
	}
	public String getNnm() {
		return nnm;
	}
	public void setNnm(String nnm) {
		this.nnm = nnm;
	}
	public String getIncidty() {
		return incidty;
	}
	public void setIncidty(String incidty) {
		this.incidty = incidty;
	}
	public String getSearchWord() {
		return searchWord;
	}
	public void setSearchWord(String searchWord) {
		this.searchWord = searchWord;
	}
	public String getEvt_occurdt() {
		return evt_occurdt;
	}
	public void setEvt_occurdt(String evt_occurdt) {
		this.evt_occurdt = evt_occurdt;
	}
	public String getBusid() {
		return busid;
	}
	public void setBusid(String busid) {
		this.busid = busid;
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
	public String getRouteid() {
		return routeid;
	}
	public void setRouteid(String routeid) {
		this.routeid = routeid;
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
	public String getMdtstatcd() {
		return mdtstatcd;
	}
	public void setMdtstatcd(String mdtstatcd) {
		this.mdtstatcd = mdtstatcd;
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
	public String getRundist() {
		return rundist;
	}
	public void setRundist(String rundist) {
		this.rundist = rundist;
	}
	public String getRuntm() {
		return runtm;
	}
	public void setRuntm(String runtm) {
		this.runtm = runtm;
	}
	public String getReal_runord() {
		return real_runord;
	}
	public void setReal_runord(String real_runord) {
		this.real_runord = real_runord;
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
	public String getFixint_cycl() {
		return fixint_cycl;
	}
	public void setFixint_cycl(String fixint_cycl) {
		this.fixint_cycl = fixint_cycl;
	}
	public String getTerm_delaytm() {
		return term_delaytm;
	}
	public void setTerm_delaytm(String term_delaytm) {
		this.term_delaytm = term_delaytm;
	}
	public String getTerm_snddt() {
		return term_snddt;
	}
	public void setTerm_snddt(String term_snddt) {
		this.term_snddt = term_snddt;
	}
	public String getCenter_colldt() {
		return center_colldt;
	}
	public void setCenter_colldt(String center_colldt) {
		this.center_colldt = center_colldt;
	}
	public String getPlan_runcnt() {
		return plan_runcnt;
	}
	public void setPlan_runcnt(String plan_runcnt) {
		this.plan_runcnt = plan_runcnt;
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
	public String getLoc_occurdt_1() {
		return loc_occurdt_1;
	}
	public void setLoc_occurdt_1(String loc_occurdt_1) {
		this.loc_occurdt_1 = loc_occurdt_1;
	}
	public String getLoc_posx_1() {
		return loc_posx_1;
	}
	public void setLoc_posx_1(String loc_posx_1) {
		this.loc_posx_1 = loc_posx_1;
	}
	public String getLoc_posy_1() {
		return loc_posy_1;
	}
	public void setLoc_posy_1(String loc_posy_1) {
		this.loc_posy_1 = loc_posy_1;
	}
	public String getLoc_occurdt_2() {
		return loc_occurdt_2;
	}
	public void setLoc_occurdt_2(String loc_occurdt_2) {
		this.loc_occurdt_2 = loc_occurdt_2;
	}
	public String getLoc_posx_2() {
		return loc_posx_2;
	}
	public void setLoc_posx_2(String loc_posx_2) {
		this.loc_posx_2 = loc_posx_2;
	}
	public String getLoc_posy_2() {
		return loc_posy_2;
	}
	public void setLoc_posy_2(String loc_posy_2) {
		this.loc_posy_2 = loc_posy_2;
	}
	public String getLoc_occurdt_3() {
		return loc_occurdt_3;
	}
	public void setLoc_occurdt_3(String loc_occurdt_3) {
		this.loc_occurdt_3 = loc_occurdt_3;
	}
	public String getLoc_posx_3() {
		return loc_posx_3;
	}
	public void setLoc_posx_3(String loc_posx_3) {
		this.loc_posx_3 = loc_posx_3;
	}
	public String getLoc_posy_3() {
		return loc_posy_3;
	}
	public void setLoc_posy_3(String loc_posy_3) {
		this.loc_posy_3 = loc_posy_3;
	}
	public String getCommsuccnt() {
		return commsuccnt;
	}
	public void setCommsuccnt(String commsuccnt) {
		this.commsuccnt = commsuccnt;
	}
	public String getMsgseq() {
		return msgseq;
	}
	public void setMsgseq(String msgseq) {
		this.msgseq = msgseq;
	}
	public String getModem_serialno() {
		return modem_serialno;
	}
	public void setModem_serialno(String modem_serialno) {
		this.modem_serialno = modem_serialno;
	}
	public String getSub_mdtid() {
		return sub_mdtid;
	}
	public void setSub_mdtid(String sub_mdtid) {
		this.sub_mdtid = sub_mdtid;
	}
	public String getMacaddr() {
		return macaddr;
	}
	public void setMacaddr(String macaddr) {
		this.macaddr = macaddr;
	}
	public String getOutroute_nodecnt() {
		return outroute_nodecnt;
	}
	public void setOutroute_nodecnt(String outroute_nodecnt) {
		this.outroute_nodecnt = outroute_nodecnt;
	}
	public String getRcv_trinfo_cnt() {
		return rcv_trinfo_cnt;
	}
	public void setRcv_trinfo_cnt(String rcv_trinfo_cnt) {
		this.rcv_trinfo_cnt = rcv_trinfo_cnt;
	}
	public String getRunstatcd_1() {
		return runstatcd_1;
	}
	public void setRunstatcd_1(String runstatcd_1) {
		this.runstatcd_1 = runstatcd_1;
	}
	public String getCollect_type() {
		return collect_type;
	}
	public void setCollect_type(String collect_type) {
		this.collect_type = collect_type;
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
	public String getCarregno() {
		return carregno;
	}
	public void setCarregno(String carregno) {
		this.carregno = carregno;
	}
	public String getNodenm() {
		return nodenm;
	}
	public void setNodenm(String nodenm) {
		this.nodenm = nodenm;
	}
	public String getRouteno() {
		return routeno;
	}
	public void setRouteno(String routeno) {
		this.routeno = routeno;
	}
	public String getEvent_type_name() {
		return event_type_name;
	}
	public void setEvent_type_name(String event_type_name) {
		this.event_type_name = event_type_name;
	}
	public String getStart_date_time() {
		return start_date_time;
	}
	public void setStart_date_time(String start_date_time) {
		this.start_date_time = start_date_time;
	}
	public String getEnd_date_time() {
		return end_date_time;
	}
	public void setEnd_date_time(String end_date_time) {
		this.end_date_time = end_date_time;
	}
	public String getCode_explain() {
		return code_explain;
	}
	public void setCode_explain(String code_explain) {
		this.code_explain = code_explain;
	}
	public String getCompnm() {
		return compnm;
	}
	public void setCompnm(String compnm) {
		this.compnm = compnm;
	}
	public String getDt() {
		return dt;
	}
	public void setDt(String dt) {
		this.dt = dt;
	}
	public String getNode_type_name() {
		return node_type_name;
	}
	public void setNode_type_name(String node_type_name) {
		this.node_type_name = node_type_name;
	}
	public String getBic_type_name() {
		return bic_type_name;
	}
	public void setBic_type_name(String bic_type_name) {
		this.bic_type_name = bic_type_name;
	}
	public String getReg_dt() {
		return reg_dt;
	}
	public void setReg_dt(String reg_dt) {
		this.reg_dt = reg_dt;
	}
}
