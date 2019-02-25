package com.bis.vo.re;

import org.springframework.web.multipart.MultipartFile;

/**
 * 
 * <PRE>
 * System Name		: 인천 BIS - 운영단말
 * Business Name	:
 * Class Name		: TbOmhFacilfailasVO.java
 * Description		:
 * Modification History
 * 	수정일		수정자		수정내용
 * ------	------	-------------------
 * 2017-11-18  박경원       최초생성
 * </pre>
 * @version
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
public class TbOmhFacilfailasVO {
	private String facilid; //NUMBER(22)
	private String regdt; //DATE(7)
	private String faciltpcd; //VARCHAR2(2)
	private String fail_occurdt; //DATE(7)
	private String failtpcd; //VARCHAR2(3)
	private String fail_detail; //VARCHAR2(100)
	private String reg_userid; //VARCHAR2(20)
	private String mobileno; //VARCHAR2(20)
	private String fail_treatdt; //DATE(7)
	private String failtreatcd; //VARCHAR2(3)
	private String treat_detail; //VARCHAR2(100)
	private String treat_userid; //VARCHAR2(20)
	private String treat_gubun; //VARCHAR2(2)
	
	private String faciltpnm;
	private String failtpnm;
	private String failtreattpnm;
	private String treat_gubunnm;
	
	private String bstopnm; //BIT 설치지점
	private String startdt; //조회 기준 시작
	private String enddt; //조회 기준 끝
	
	private String file_name; //장애 이미지
	private byte[] file_data;
	private MultipartFile imgFile;
	
	private String short_bstopid;
	
	private String fail_cnt;
	private String treat_cnt;
	private String fail_fail_cnt;
	private String search_startdt;
	private String search_enddt;
	private String total;
	
	private String carregno;
	private String modem_serialno;
	private String cnm;
	private String type;
	
	//v0606
	private String projecttpcd; // 사업구분
	private String fail_treatdt2; // 형식에맞게 넣기 위해 선언
	
	//v0607
	private String useyn;
	private String usecode;
	private String faccd;
	private String ascd; 
	private String dt;
	private String routeno;
	private String failcd;
	private String ocdt;
	private String facnm;
	private String compnm;
	private String ars;
	
	//v0608
	private String addr;
	private String asdt;
	private String descr; 
	
	//v0610
	private String facilnm;
	private String val1;
	private String val2;
	private String val3;
	private String val4;
	private String val5;
	private String val6;
	private String val7;
	private String val8;
	private String val9;
	private String val10;
	
	
	
	
	public String getFacilnm() {
		return facilnm;
	}
	public void setFacilnm(String facilnm) {
		this.facilnm = facilnm;
	}
	public String getVal1() {
		return val1;
	}
	public void setVal1(String val1) {
		this.val1 = val1;
	}
	public String getVal2() {
		return val2;
	}
	public void setVal2(String val2) {
		this.val2 = val2;
	}
	public String getVal3() {
		return val3;
	}
	public void setVal3(String val3) {
		this.val3 = val3;
	}
	public String getVal4() {
		return val4;
	}
	public void setVal4(String val4) {
		this.val4 = val4;
	}
	public String getVal5() {
		return val5;
	}
	public void setVal5(String val5) {
		this.val5 = val5;
	}
	public String getVal6() {
		return val6;
	}
	public void setVal6(String val6) {
		this.val6 = val6;
	}
	public String getVal7() {
		return val7;
	}
	public void setVal7(String val7) {
		this.val7 = val7;
	}
	public String getVal8() {
		return val8;
	}
	public void setVal8(String val8) {
		this.val8 = val8;
	}
	public String getVal9() {
		return val9;
	}
	public void setVal9(String val9) {
		this.val9 = val9;
	}
	public String getVal10() {
		return val10;
	}
	public void setVal10(String val10) {
		this.val10 = val10;
	}
	public String getAddr() {
		return addr;
	}
	public void setAddr(String addr) {
		this.addr = addr;
	}
	public String getAsdt() {
		return asdt;
	}
	public void setAsdt(String asdt) {
		this.asdt = asdt;
	}
	public String getDescr() {
		return descr;
	}
	public void setDescr(String descr) {
		this.descr = descr;
	}
	public String getCarregno() {
		return carregno;
	}
	public void setCarregno(String carregno) {
		this.carregno = carregno;
	}
	public String getModem_serialno() {
		return modem_serialno;
	}
	public void setModem_serialno(String modem_serialno) {
		this.modem_serialno = modem_serialno;
	}
	public String getCnm() {
		return cnm;
	}
	public void setCnm(String cnm) {
		this.cnm = cnm;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getSearch_startdt() {
		return search_startdt;
	}
	public void setSearch_startdt(String search_startdt) {
		this.search_startdt = search_startdt;
	}
	public String getSearch_enddt() {
		return search_enddt;
	}
	public void setSearch_enddt(String search_enddt) {
		this.search_enddt = search_enddt;
	}
	public String getTotal() {
		return total;
	}
	public void setTotal(String total) {
		this.total = total;
	}
	public String getFail_cnt() {
		return fail_cnt;
	}
	public void setFail_cnt(String fail_cnt) {
		this.fail_cnt = fail_cnt;
	}
	public String getTreat_cnt() {
		return treat_cnt;
	}
	public void setTreat_cnt(String treat_cnt) {
		this.treat_cnt = treat_cnt;
	}
	public String getFail_fail_cnt() {
		return fail_fail_cnt;
	}
	public void setFail_fail_cnt(String fail_fail_cnt) {
		this.fail_fail_cnt = fail_fail_cnt;
	}
	public String getUseyn() {
		return useyn;
	}
	public void setUseyn(String useyn) {
		this.useyn = useyn;
	}
	public String getUsecode() {
		return usecode;
	}
	public void setUsecode(String usecode) {
		this.usecode = usecode;
	}
	public String getFaccd() {
		return faccd;
	}
	public void setFaccd(String faccd) {
		this.faccd = faccd;
	}
	public String getAscd() {
		return ascd;
	}
	public void setAscd(String ascd) {
		this.ascd = ascd;
	}
	public String getDt() {
		return dt;
	}
	public void setDt(String dt) {
		this.dt = dt;
	}
	public String getRouteno() {
		return routeno;
	}
	public void setRouteno(String routeno) {
		this.routeno = routeno;
	}
	public String getFailcd() {
		return failcd;
	}
	public void setFailcd(String failcd) {
		this.failcd = failcd;
	}
	public String getOcdt() {
		return ocdt;
	}
	public void setOcdt(String ocdt) {
		this.ocdt = ocdt;
	}
	public String getFacnm() {
		return facnm;
	}
	public void setFacnm(String facnm) {
		this.facnm = facnm;
	}
	public String getCompnm() {
		return compnm;
	}
	public void setCompnm(String compnm) {
		this.compnm = compnm;
	}
	public String getArs() {
		return ars;
	}
	public void setArs(String ars) {
		this.ars = ars;
	}
	public String getFail_treatdt2() {
		return fail_treatdt2;
	}
	public void setFail_treatdt2(String fail_treatdt2) {
		this.fail_treatdt2 = fail_treatdt2;
	}
	public String getProjecttpcd() {
		return projecttpcd;
	}
	public void setProjecttpcd(String projecttpcd) {
		this.projecttpcd = projecttpcd;
	}
	public String getFacilid() {
		return facilid;
	}
	public void setFacilid(String facilid) {
		this.facilid = facilid;
	}
	public String getRegdt() {
		return regdt;
	}
	public void setRegdt(String regdt) {
		this.regdt = regdt;
	}
	public String getFaciltpcd() {
		return faciltpcd;
	}
	public void setFaciltpcd(String faciltpcd) {
		this.faciltpcd = faciltpcd;
	}
	public String getFail_occurdt() {
		return fail_occurdt;
	}
	public void setFail_occurdt(String fail_occurdt) {
		this.fail_occurdt = fail_occurdt;
	}
	public String getFailtpcd() {
		return failtpcd;
	}
	public void setFailtpcd(String failtpcd) {
		this.failtpcd = failtpcd;
	}
	public String getFail_detail() {
		return fail_detail;
	}
	public void setFail_detail(String fail_detail) {
		this.fail_detail = fail_detail;
	}
	public String getReg_userid() {
		return reg_userid;
	}
	public void setReg_userid(String reg_userid) {
		this.reg_userid = reg_userid;
	}
	public String getMobileno() {
		return mobileno;
	}
	public void setMobileno(String mobileno) {
		this.mobileno = mobileno;
	}
	public String getFail_treatdt() {
		return fail_treatdt;
	}
	public void setFail_treatdt(String fail_treatdt) {
		this.fail_treatdt = fail_treatdt;
	}
	public String getFailtreatcd() {
		return failtreatcd;
	}
	public void setFailtreatcd(String failtreatcd) {
		this.failtreatcd = failtreatcd;
	}
	public String getTreat_detail() {
		return treat_detail;
	}
	public void setTreat_detail(String treat_detail) {
		this.treat_detail = treat_detail;
	}
	public String getTreat_userid() {
		return treat_userid;
	}
	public void setTreat_userid(String treat_userid) {
		this.treat_userid = treat_userid;
	}
	public String getTreat_gubun() {
		return treat_gubun;
	}
	public void setTreat_gubun(String treat_gubun) {
		this.treat_gubun = treat_gubun;
	}
	public String getFaciltpnm() {
		return faciltpnm;
	}
	public void setFaciltpnm(String faciltpnm) {
		this.faciltpnm = faciltpnm;
	}
	public String getFailtpnm() {
		return failtpnm;
	}
	public void setFailtpnm(String failtpnm) {
		this.failtpnm = failtpnm;
	}
	public String getFailtreattpnm() {
		return failtreattpnm;
	}
	public void setFailtreattpnm(String failtreattpnm) {
		this.failtreattpnm = failtreattpnm;
	}
	public String getStartdt() {
		return startdt;
	}
	public void setStartdt(String startdt) {
		this.startdt = startdt;
	}
	public String getEnddt() {
		return enddt;
	}
	public void setEnddt(String enddt) {
		this.enddt = enddt;
	}
	public String getTreat_gubunnm() {
		return treat_gubunnm;
	}
	public void setTreat_gubunnm(String treat_gubunnm) {
		this.treat_gubunnm = treat_gubunnm;
	}
	public String getBstopnm() {
		return bstopnm;
	}
	public void setBstopnm(String bstopnm) {
		this.bstopnm = bstopnm;
	}
	public String getFile_name() {
		return file_name;
	}
	public void setFile_name(String file_name) {
		this.file_name = file_name;
	}
	public byte[] getFile_data() {
		return file_data;
	}
	public void setFile_data(byte[] file_data) {
		this.file_data = file_data;
	}
	public MultipartFile getImgFile() {
		return imgFile;
	}
	public void setImgFile(MultipartFile imgFile) {
		this.imgFile = imgFile;
	}
	public String getShort_bstopid() {
		return short_bstopid;
	}
	public void setShort_bstopid(String short_bstopid) {
		this.short_bstopid = short_bstopid;
	}
	
}
