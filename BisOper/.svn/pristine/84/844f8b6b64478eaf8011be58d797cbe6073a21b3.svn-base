package com.bis.service.impl;

import java.sql.SQLException;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.bis.dao.UserDAO;
import com.bis.service.UserService;
import com.bis.util.Const;
import com.bis.vo.re.TbOmmUserVO;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 
 * Class Name 	  : UserServiceImpl.java
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
@Service("userService")
public class UserServiceImpl extends EgovAbstractServiceImpl implements UserService, UserDetailsService {

	@Resource(name = "userDAO")
	private UserDAO userDAO;
	
	/**
     * 사용자 목록 조회 
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbOmmUserVO> selectUserList(TbOmmUserVO vo) throws SQLException {
    	return userDAO.selectUserList(vo);
    }
    
    /**
     * 사용자 등급 조회 
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbOmmUserVO> selectUserRankList(TbOmmUserVO vo) throws SQLException {
    	return userDAO.selectUserRankList(vo);
    }
    
    /**
     * 사용자 별 메뉴 권한 목록 조회 
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbOmmUserVO> selectMenuRightList(TbOmmUserVO vo) throws SQLException {
    	return userDAO.selectMenuRightList(vo);
    }
    
    /**
     * 사용자 정보 조회 
     * @param vo
     * @return
     * @throws SQLException
     */
    public TbOmmUserVO selectUserInfo(TbOmmUserVO vo) throws SQLException {
    	return userDAO.selectUserInfo(vo);
    }
    
    /**
     * 사용자 등록 
     * @param vo
     * @return
     * @throws SQLException
     */
    public int insertUser(TbOmmUserVO vo) throws SQLException {
    	userDAO.insertUser(vo);
    	return userDAO.insertUserAuth(vo);
    }
    
    /**
     * 사용자 삭제
     * @param vo
     * @return
     * @throws SQLException
     */
    public int deleteUser(TbOmmUserVO vo) throws SQLException {
    	userDAO.deleteUserAuth(vo);
    	return userDAO.deleteUser(vo);
    }
    
    /**
     * 사용자 수정 
     * @param vo
     * @return
     * @throws SQLException
     */
    public int updatetUser(TbOmmUserVO vo) throws SQLException {
    	return userDAO.updatetUser(vo);
    }

    /**
     * 사용자 비밀번호 변경 / 정보 수정
     * @param vo
     * @return
     * @throws SQLException
     */
    public int modifyUser(TbOmmUserVO vo) throws SQLException {
    	if(vo.getPasswd() != null) {
    		TbOmmUserVO compareVo = userDAO.selectUserInfo(vo);
    		String oldPw = vo.getPasswd();
    		String dbPw = compareVo.getPasswd();
    		//TODO 암호화 함수
    		
    		if(oldPw.equals(dbPw) == false) { //비밀번호 변경
    			return Const.NOT_MATCH;
    		}else {
    			return userDAO.updatetUser(vo);
    		}
    	} else if(vo.getUseyn() != null){ //사용 / 중지
    		return userDAO.updatetUser(vo);
    	} else {
    		userDAO.updateUserAuth(vo); //권한 업데이트
    		return userDAO.updatetUser(vo); //정보 업데이트
    	}
    }
    
    /**
     * 등급 등록 
     * @param vo
     * @return
     * @throws SQLException
     */
    public int insertRank(TbOmmUserVO vo) throws SQLException {
    	TbOmmUserVO id = userDAO.selectNewRankId();
    	vo.setAuthid(id.getAuthid());
    	userDAO.insertRank(vo);
    	return userDAO.initUserMenu(vo);
    }
    
    /**
     * 등급 수정 
     * @param vo
     * @return
     * @throws SQLException
     */
    public int updateRank(TbOmmUserVO vo) throws SQLException {
    	return userDAO.updateRank(vo);
    }
    
    /**
     * 등급 삭제 
     * @param vo
     * @return
     * @throws SQLException
     */
    public int deleteRank(TbOmmUserVO vo) throws SQLException {
    	userDAO.deleteRank(vo);
    	return userDAO.deleteUserMenu(vo);
    }
    
    /**
     * 등급별 메뉴 권한 등록 
     * @param vo
     * @return
     * @throws SQLException
     */
    public int modifyUserMenu(List<TbOmmUserVO> list) throws SQLException {
    	for(int i=0; i < list.size(); i++) {
    		TbOmmUserVO vo = list.get(i);
    		userDAO.deleteUserMenu(vo);
    		userDAO.insertUserMenu(vo);
    	}
    	return Const.SQL_SUCCESS;
    }
    
    /**
     * 사용자별 메뉴 권한 조회
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbOmmUserVO> selectUserMenuAuth(TbOmmUserVO vo) throws SQLException {
    	return userDAO.selectUserMenuAuth(vo);
    }
    
    @Override
	public TbOmmUserVO loadUserByUsername(String userId) {
		TbOmmUserVO vo = new TbOmmUserVO(); 
		vo.setUserid(userId); 
		try {
			vo = userDAO.selectUserInfo(vo);
			vo.setHistno(userDAO.selectHistNo().getHistno());
			
			//TODO 간단한 방법 필요
			/*List<TbOmmUserVO> vo_list = userDAO.selectUserMenuAuth(vo);
			Map<String, Map<String, String>> menu_auth_map = new HashMap<String, Map<String, String>>();
			
			for (int i = 0; i < vo_list.size(); i++) {
				TbOmmUserVO temp = vo_list.get(i);
				Map<String, String> auth_map = new HashMap<String, String>();
				
				auth_map.put("creAuthYn", temp.getCre_authyn());
				auth_map.put("readAuthYn", temp.getRead_authyn());
				auth_map.put("updAuthYn", temp.getUpd_authyn());
				auth_map.put("delAuthYn", temp.getDel_authyn());
				
				menu_auth_map.put(temp.getMenuid(), auth_map);
			}
			
			vo.setMenuAuthMap(menu_auth_map);*/
			
		} catch (SQLException e) {
			System.out.println("sql " + e.toString());
			vo = null;
		}
		// 만약 데이터가 없을 경우 익셉션 
		if (vo == null) throw new UsernameNotFoundException("접속자 정보를 찾을 수 없습니다."); 
		
		return vo;
	}
    
    ///### 이하 구버전 
    /////////////////////////////////////////////////////
	
	
	/**
     * 사용자 접속이력 등록
     * @param vo
     * @return
     * @throws SQLException
     */
	public int insertUserLogin(TbOmmUserVO vo) throws SQLException {
		return userDAO.insertUserLogin(vo);
	}
	
	/**
     * 사용자 로그아웃 기록 업데이트
     * @param vo
     * @return
     * @throws SQLException
     */
    public int updateUserLogin(TbOmmUserVO vo) throws SQLException {
    	return userDAO.updateUserLogin(vo);
    }
}
