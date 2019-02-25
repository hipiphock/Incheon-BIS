package com.bis.service;

import java.sql.SQLException;
import java.util.List;

import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.bis.vo.re.TbOmmUserVO;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 
 * Class Name 	  : UserService.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2017.09.20	    황중모                       최초생성
 * 2017.11.15    박경원                        VO 변경
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
public interface UserService {

	List<TbOmmUserVO> selectUserList(TbOmmUserVO vo) throws SQLException;
	
	List<TbOmmUserVO> selectUserRankList(TbOmmUserVO vo) throws SQLException;
	
	List<TbOmmUserVO> selectMenuRightList(TbOmmUserVO vo) throws SQLException;
	
	TbOmmUserVO selectUserInfo(TbOmmUserVO vo) throws SQLException;
	
	int insertUser(TbOmmUserVO vo) throws SQLException;
	
	int deleteUser(TbOmmUserVO vo) throws SQLException;
	
	int updatetUser(TbOmmUserVO vo) throws SQLException;
	
	int modifyUser(TbOmmUserVO vo) throws SQLException;
	
	int insertRank(TbOmmUserVO vo) throws SQLException;
    
    int updateRank(TbOmmUserVO vo) throws SQLException;
	
    int deleteRank(TbOmmUserVO vo) throws SQLException;

    int modifyUserMenu(List<TbOmmUserVO> list) throws SQLException;
    
    List<TbOmmUserVO> selectUserMenuAuth(TbOmmUserVO vo) throws SQLException;
    
    TbOmmUserVO loadUserByUsername(final String userId) throws UsernameNotFoundException;
    
    int insertUserLogin(TbOmmUserVO vo) throws SQLException;
    
    int updateUserLogin(TbOmmUserVO vo) throws SQLException;
}
