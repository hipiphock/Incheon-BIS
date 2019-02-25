package com.bis.vo.re;

import java.util.Collection;
import java.util.List;
import java.util.Map;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 사용자
 * Class Name 	  : TbOmmUserVO.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2017.11.07	    황중모                       최초생성
 * 2017.11.15    박경원                         variable 추가
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
public class TbOmmUserVO implements UserDetails {
	private static final long serialVersionUID = 1L;
	
	private String userid;//	varchar2(20 byte)
	private String usertpcd;//	varchar2(1 byte)
	private String compid;//	number(6,0)
	private String usernm;//	varchar2(20 byte)
	private String passwd;//	varchar2(20 byte)
	private String new_passwd;
	private String orgnm;//	varchar2(20 byte)
	private String deptnm;//	varchar2(20 byte)
	private String posnnm;//	varchar2(20 byte)
	private String telno;//	varchar2(20 byte)
	private String mobileno;//	varchar2(20 byte)
	private String emailaddr;//	varchar2(30 byte)
	private String app_startdt;//	date
	private String app_enddt;//	date
	private String useyn;//	varchar2(1 byte)
	
	/* TB_OMM_USERAUTH */
	private String authid;//	varchar2(10 byte)
	private String authnm;
	
	/*TB_OMM_AUTH_MENU*/
	private String menuid;
	private String cre_authyn;
	private String read_authyn;
	private String upd_authyn;
	private String del_authyn;
	
	private Map<String, Map<String, String>> menuAuthMap;
	private List<String> menuList;        
	private List<String> cFlagList;               	 
	private List<String> rFlagList;                	 
	private List<String> uFlagList;                  	 
	private List<String> dFlagList; 
	
	/*TB_OMM_MENU*/
	private String menunm;
	private String systpcd;
	private String menulvl;
	private String high_menuid;
	
	/*TB_OMH_USERLOGIN*/
	private String histno;
	private String login_startdt;
	private String login_enddt;
	private String ipaddr;
	
	private String compnm;
	private String cdnm;
	
	private String role;
	private List<GrantedAuthority> authorities; 
	private boolean accountNonExpired = true; 
	private boolean accountNonLocked = true; 
	private boolean credentialsNonExpired = true; 
	private boolean enabled = true; 
	
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getUsertpcd() {
		return usertpcd;
	}
	public void setUsertpcd(String usertpcd) {
		this.usertpcd = usertpcd;
	}
	public String getCompid() {
		return compid;
	}
	public void setCompid(String compid) {
		this.compid = compid;
	}
	public String getUsernm() {
		return usernm;
	}
	public void setUsernm(String usernm) {
		this.usernm = usernm;
	}
	public String getPasswd() {
		return passwd;
	}
	public void setPasswd(String passwd) {
		this.passwd = passwd;
	}
	public String getOrgnm() {
		return orgnm;
	}
	public void setOrgnm(String orgnm) {
		this.orgnm = orgnm;
	}
	public String getDeptnm() {
		return deptnm;
	}
	public void setDeptnm(String deptnm) {
		this.deptnm = deptnm;
	}
	public String getPosnnm() {
		return posnnm;
	}
	public void setPosnnm(String posnnm) {
		this.posnnm = posnnm;
	}
	public String getTelno() {
		return telno;
	}
	public void setTelno(String telno) {
		this.telno = telno;
	}
	public String getMobileno() {
		return mobileno;
	}
	public void setMobileno(String mobileno) {
		this.mobileno = mobileno;
	}
	public String getEmailaddr() {
		return emailaddr;
	}
	public void setEmailaddr(String emailaddr) {
		this.emailaddr = emailaddr;
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
	public String getAuthid() {
		return authid;
	}
	public void setAuthid(String authid) {
		this.authid = authid;
	}
	public String getAuthnm() {
		return authnm;
	}
	public void setAuthnm(String authnm) {
		this.authnm = authnm;
	}
	public String getMenuid() {
		return menuid;
	}
	public void setMenuid(String menuid) {
		this.menuid = menuid;
	}
	public String getCre_authyn() {
		return cre_authyn;
	}
	public void setCre_authyn(String cre_authyn) {
		this.cre_authyn = cre_authyn;
	}
	public String getRead_authyn() {
		return read_authyn;
	}
	public void setRead_authyn(String read_authyn) {
		this.read_authyn = read_authyn;
	}
	public String getUpd_authyn() {
		return upd_authyn;
	}
	public void setUpd_authyn(String upd_authyn) {
		this.upd_authyn = upd_authyn;
	}
	public String getDel_authyn() {
		return del_authyn;
	}
	public void setDel_authyn(String del_authyn) {
		this.del_authyn = del_authyn;
	}
	public String getMenunm() {
		return menunm;
	}
	public void setMenunm(String menunm) {
		this.menunm = menunm;
	}
	public String getSystpcd() {
		return systpcd;
	}
	public void setSystpcd(String systpcd) {
		this.systpcd = systpcd;
	}
	public String getMenulvl() {
		return menulvl;
	}
	public void setMenulvl(String menulvl) {
		this.menulvl = menulvl;
	}
	public String getHigh_menuid() {
		return high_menuid;
	}
	public void setHigh_menuid(String high_menuid) {
		this.high_menuid = high_menuid;
	}
	public String getHistno() {
		return histno;
	}
	public void setHistno(String histno) {
		this.histno = histno;
	}
	public String getLogin_startdt() {
		return login_startdt;
	}
	public void setLogin_startdt(String login_startdt) {
		this.login_startdt = login_startdt;
	}
	public String getLogin_enddt() {
		return login_enddt;
	}
	public void setLogin_enddt(String login_enddt) {
		this.login_enddt = login_enddt;
	}
	public String getIpaddr() {
		return ipaddr;
	}
	public void setIpaddr(String ipaddr) {
		this.ipaddr = ipaddr;
	}
	public String getCompnm() {
		return compnm;
	}
	public void setCompnm(String compnm) {
		this.compnm = compnm;
	}
	public String getCdnm() {
		return cdnm;
	}
	public void setCdnm(String cdnm) {
		this.cdnm = cdnm;
	}
	public String getNew_passwd() {
		return new_passwd;
	}
	public void setNew_passwd(String new_passwd) {
		this.new_passwd = new_passwd;
	}
	@Override 
	public String getUsername() { 
		return usernm; 
	} 
	public void setUsername(String username) { 
		this.usernm = username; 
	} 
	
	@Override 
	public String getPassword() { 
		return passwd; 
	} 
	public void setPassword(String password) { 
		this.passwd = password; 
	}
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return this.authorities;
	}
	public void setAuthorities(List<GrantedAuthority> authorities) { 
		this.authorities = authorities; 
	} 
	
	@Override 
	public boolean isAccountNonExpired() { 
		return this.accountNonExpired; 
	} 
	public void setAccountNonExpired(boolean accountNonExpired) { 
		this.accountNonExpired = accountNonExpired; 
	} 
	
	@Override public boolean isAccountNonLocked() { 
		return this.accountNonLocked; 
	} 
	
	public void setAccountNonLocked(boolean accountNonLocked) { 
		this.accountNonLocked = accountNonLocked; 
	} 
	
	@Override 
	public boolean isCredentialsNonExpired() { 
		return this.credentialsNonExpired; 
	} 
	
	public void setCredentialsNonExpired(boolean credentialsNonExpired) { 
		this.credentialsNonExpired = credentialsNonExpired; 
	} 
	
	@Override 
	public boolean isEnabled() { 
		return this.enabled; 
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public List<String> getMenuList() {
		return menuList;
	}
	public void setMenuList(List<String> menuList) {
		this.menuList = menuList;
	}
	public List<String> getcFlagList() {
		return cFlagList;
	}
	public void setcFlagList(List<String> cFlagList) {
		this.cFlagList = cFlagList;
	}
	public List<String> getrFlagList() {
		return rFlagList;
	}
	public void setrFlagList(List<String> rFlagList) {
		this.rFlagList = rFlagList;
	}
	public List<String> getuFlagList() {
		return uFlagList;
	}
	public void setuFlagList(List<String> uFlagList) {
		this.uFlagList = uFlagList;
	}
	public List<String> getdFlagList() {
		return dFlagList;
	}
	public void setdFlagList(List<String> dFlagList) {
		this.dFlagList = dFlagList;
	}
	public Map<String, Map<String, String>> getMenuAuthMap() {
		return menuAuthMap;
	}
	public void setMenuAuthMap(Map<String, Map<String, String>> menuAuthMap) {
		this.menuAuthMap = menuAuthMap;
	}
	
}
