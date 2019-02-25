package com.bis.vo;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;


/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 
 * Class Name 	  : UsersVO.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2017.09.20	    황중모                       최초생성
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
public class UsersVO implements UserDetails { 
	
	private static final long serialVersionUID = 1L;

	private String user_id;             //VARCHAR2    15          	 
	private String user_name;           //VARCHAR2    30          	 
	private String pwd;                 //CHAR        64  
	private String new_pwd;               
	private String regist_user_id;      //VARCHAR2    15          	 
	private String update_user_id;      //VARCHAR2    15          	 
	private String regist_dt;           //CHAR        14          	 
	private String update_dt;           //CHAR        14          	 
	private String use_flag;            //CHAR        1           	 
	private String company_id;          //NUMBER      22          	 
	private String mac_id;              //VARCHAR2    20          	 
	private String area_code;           //NUMBER      22          	 
	private String system_id;           //NUMBER      22          	 
	private String rank_id;             //CHAR        11          	 

	/* USER_RANK */
	private String remark;              //VARCHAR2    30          	 
	private String ranking;             //NUMBER      22  
	
	/* USER_MENU */
	private String menu_id;             //CHAR        11          	 
	private String program_id;          //CHAR        3           	 
	private String menu_name;           //VARCHAR2    60          	 
	private String admin_only;          //CHAR        1    
	
	/* USER_RANK_MENU */
	private String search_flag;         //CHAR        1           	 
	private String input_flag;          //CHAR        1           	 
	private String modify_flag;         //CHAR        1           	 
	private String delete_flag;         //CHAR        1     
	
	private List<String> menuList;        
	private List<String> sFlagList;               	 
	private List<String> iFlagList;                	 
	private List<String> mFlagList;                  	 
	private List<String> dFlagList;        
	
	private String company_name;
	private String rank_name;
	private String role;
	
	private List<GrantedAuthority> authorities; 
	private boolean accountNonExpired = true; 
	private boolean accountNonLocked = true; 
	private boolean credentialsNonExpired = true; 
	private boolean enabled = true; 
	
	@Override 
	public String getUsername() { 
		return user_name; 
	} 
	public void setUsername(String username) { 
		this.user_name = username; 
	} 
	
	@Override 
	public String getPassword() { 
		return pwd; 
	} 
	public void setPassword(String password) { 
		this.pwd = password; 
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
	public String getUser_id() {
		return user_id;
	}
	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}
	public String getUser_name() {
		return user_name;
	}
	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	public String getRegist_user_id() {
		return regist_user_id;
	}
	public void setRegist_user_id(String regist_user_id) {
		this.regist_user_id = regist_user_id;
	}
	public String getUpdate_user_id() {
		return update_user_id;
	}
	public void setUpdate_user_id(String update_user_id) {
		this.update_user_id = update_user_id;
	}
	public String getRegist_dt() {
		return regist_dt;
	}
	public void setRegist_dt(String regist_dt) {
		this.regist_dt = regist_dt;
	}
	public String getUpdate_dt() {
		return update_dt;
	}
	public void setUpdate_dt(String update_dt) {
		this.update_dt = update_dt;
	}
	public String getUse_flag() {
		return use_flag;
	}
	public void setUse_flag(String use_flag) {
		this.use_flag = use_flag;
	}
	public String getCompany_id() {
		return company_id;
	}
	public void setCompany_id(String company_id) {
		this.company_id = company_id;
	}
	public String getMac_id() {
		return mac_id;
	}
	public void setMac_id(String mac_id) {
		this.mac_id = mac_id;
	}
	public String getArea_code() {
		return area_code;
	}
	public void setArea_code(String area_code) {
		this.area_code = area_code;
	}
	public String getSystem_id() {
		return system_id;
	}
	public void setSystem_id(String system_id) {
		this.system_id = system_id;
	}
	public String getRank_id() {
		return rank_id;
	}
	public void setRank_id(String rank_id) {
		this.rank_id = rank_id;
	}
	public String getCompany_name() {
		return company_name;
	}
	public void setCompany_name(String company_name) {
		this.company_name = company_name;
	}
	public String getRank_name() {
		return rank_name;
	}
	public void setRank_name(String rank_name) {
		this.rank_name = rank_name;
	}
	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	} 
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public String getRanking() {
		return ranking;
	}
	public void setRanking(String ranking) {
		this.ranking = ranking;
	}
	public String getMenu_id() {
		return menu_id;
	}
	public void setMenu_id(String menu_id) {
		this.menu_id = menu_id;
	}
	public String getProgram_id() {
		return program_id;
	}
	public void setProgram_id(String program_id) {
		this.program_id = program_id;
	}
	public String getMenu_name() {
		return menu_name;
	}
	public void setMenu_name(String menu_name) {
		this.menu_name = menu_name;
	}
	public String getAdmin_only() {
		return admin_only;
	}
	public void setAdmin_only(String admin_only) {
		this.admin_only = admin_only;
	}
	public String getSearch_flag() {
		return search_flag;
	}
	public void setSearch_flag(String search_flag) {
		this.search_flag = search_flag;
	}
	public String getInput_flag() {
		return input_flag;
	}
	public void setInput_flag(String input_flag) {
		this.input_flag = input_flag;
	}
	public String getModify_flag() {
		return modify_flag;
	}
	public void setModify_flag(String modify_flag) {
		this.modify_flag = modify_flag;
	}
	public String getDelete_flag() {
		return delete_flag;
	}
	public void setDelete_flag(String delete_flag) {
		this.delete_flag = delete_flag;
	}
	public String getNew_pwd() {
		return new_pwd;
	}
	public void setNew_pwd(String new_pwd) {
		this.new_pwd = new_pwd;
	}
	public List<String> getMenuList() {
		return menuList;
	}
	public void setMenuList(List<String> menuList) {
		this.menuList = menuList;
	}
	public List<String> getsFlagList() {
		return sFlagList;
	}
	public void setsFlagList(List<String> sFlagList) {
		this.sFlagList = sFlagList;
	}
	public List<String> getiFlagList() {
		return iFlagList;
	}
	public void setiFlagList(List<String> iFlagList) {
		this.iFlagList = iFlagList;
	}
	public List<String> getmFlagList() {
		return mFlagList;
	}
	public void setmFlagList(List<String> mFlagList) {
		this.mFlagList = mFlagList;
	}
	public List<String> getdFlagList() {
		return dFlagList;
	}
	public void setdFlagList(List<String> dFlagList) {
		this.dFlagList = dFlagList;
	}
} 
