package com.bis.vo.re;

public class TbBmcBusRunVO {
	
	private String busid;			//	number(9,0)			yes		1	
	private String evt_occurdt;		//	date				yes		2	
	private String evttpcd;			//	varchar2(2 byte)	yes		3	
	private String evtsubtpcd;		//	varchar2(1 byte)	yes		4	
	private String mdtid;			//	number(5,0)			yes		5	
	private String routeid;			//	number(9,0)			yes		6	
	private String posx;			//	number(12,6)		yes		7	
	private String posy;			//	number(12,6)		yes		8	
	private String heading;			//	number(4,0)			yes		9	
	private String nodeid;			//	number(10,0)		yes		10	
	private String llinkid;			//	number(10,0)		yes		11	
	private String dircd;			//	varchar2(1 byte)	yes		12	
	private String pathseq;			//	number(5,0)			yes		13	
	private String detect_nodecnt;	//	number(5,0)			yes		14	
	private String rundistinctcd;	//	varchar2(1 byte)	yes		15	
	private String runstatcd;		//	varchar2(1 byte)	yes		16	
	private String lastbusyn;		//	varchar2(1 byte)	yes		17	
	private String emptybusyn;		//	varchar2(1 byte)	yes		18	
	private String chgbusyn;		//	varchar2(1 byte)	yes		19	
	private String openstatcd;		//	varchar2(1 byte)	yes		20	
	private String emgcyyn;			//	varchar2(1 byte)	yes		21	
	private String accidyn;			//	varchar2(1 byte)	yes		22	
	private String trblyn;			//	varchar2(1 byte)	yes		23	
	private String incidtpcd;		//	varchar2(2 byte)	yes		24	
	private String runvioltpcd;		//	varchar2(2 byte)	yes		25	
	private String runspd;			//	number(4,1)			yes		26	
	private String rundist;			//	number(10,0)		yes		27	
	private String runtm;			//	number(10,0)		yes		28	
	private String real_runord;		//	number(4,0)			yes		29	
	private String plan_runord;		//	number(4,0)			yes		30	
	private String run_startdt;		//	date				yes		31	
	private String bstop_stoptm;	//	number(6,0)			yes		32	
	private String center_colldt;	//	date				yes		33	
	private String node_arrdt;		//	date				yes		34	
	private String node_depdt;		//	date				yes		35	
	private String incid_alarmyn;	//	varchar2(1 byte)	yes	0	36	
	private String msgseq;			//	number(10,0)		yes		37	
	private String remain_seat;		//	number(3,0)			yes		38	
	private String congestion;		//	varchar2(2 byte)	yes		39	
	
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
	public String getRemain_seat() {
		return remain_seat;
	}
	public void setRemain_seat(String remain_seat) {
		this.remain_seat = remain_seat;
	}
	public String getCongestion() {
		return congestion;
	}
	public void setCongestion(String congestion) {
		this.congestion = congestion;
	}

}
