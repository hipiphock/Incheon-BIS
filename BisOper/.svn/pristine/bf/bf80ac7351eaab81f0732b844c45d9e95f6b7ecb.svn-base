package com.bis.dao;

import java.sql.SQLException;
import java.util.List;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.bis.vo.re.TbOmmUserVO;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 
 * Class Name 	  : UserDAO.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2017.09.20	    황중모                       최초생성
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
@Repository("userDAO")
public class UserDAO {

    @Resource
    private SqlSessionTemplate sqlSession;
    
    /**
     * 사용자 목록 조회 
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbOmmUserVO> selectUserList(TbOmmUserVO vo) throws SQLException {
    	return sqlSession.selectList("USER.selectUserList", vo);
    }
    
    /**
     * 사용자 등급 조회 
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbOmmUserVO> selectUserRankList(TbOmmUserVO vo) throws SQLException {
    	return sqlSession.selectList("USER.selectUserRankList", vo);
    }
    
    /**
     * 사용자 별 메뉴 권한 목록 조회 
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbOmmUserVO> selectMenuRightList(TbOmmUserVO vo) throws SQLException {
    	return sqlSession.selectList("USER.selectMenuRightList", vo);
    }
    
    /**
     * 사용자 등록 
     * @param vo
     * @return
     * @throws SQLException
     */
    public int insertUser(TbOmmUserVO vo) throws SQLException {
    	return sqlSession.insert("USER.insertUser", vo);
    }
    
    /**
     * 사용자 삭제
     * @param vo
     * @return
     * @throws SQLException
     */
    public int deleteUser(TbOmmUserVO vo) throws SQLException {
    	return sqlSession.insert("USER.deleteUser", vo);
    }
    
    /**
     * 사용자 수정 
     * @param vo
     * @return
     * @throws SQLException
     */
    public int updatetUser(TbOmmUserVO vo) throws SQLException {
    	return sqlSession.update("USER.updatetUser", vo);
    }
    
    /**
     * 사용자 권한 수정
     * @param vo
     * @return
     * @throws SQLException
     */
    public int updateUserAuth(TbOmmUserVO vo) throws SQLException {
    	return sqlSession.update("USER.updateUserAuth", vo);
    }
    
    /**
     * 사용자 정보 조회 
     * @param vo
     * @return
     * @throws SQLException
     */
    public TbOmmUserVO selectUserInfo(TbOmmUserVO vo) throws SQLException {
    	return sqlSession.selectOne("USER.selectUserInfo", vo);
    }
    
    /**
     * 사용자 권한 추가
     * @param vo
     * @return
     * @throws SQLException
     */
    public int insertUserAuth(TbOmmUserVO vo) throws SQLException {
    	return sqlSession.insert("USER.insertUserAuth", vo);
    }
    
    /**
     * 사용자 권한 삭제(사용자 삭제시)
     * @param vo
     * @return
     * @throws SQLException
     */
    public int deleteUserAuth(TbOmmUserVO vo) throws SQLException {
    	return sqlSession.insert("USER.deleteUserAuth", vo);
    }    
    
    /**
     * 신규 등급아이디 조회 
     * @param vo
     * @return
     * @throws SQLException
     */
    public TbOmmUserVO selectNewRankId() throws SQLException {
    	return sqlSession.selectOne("USER.selectNewRankId");
    }
    
    /**
     * 등급 등록 
     * @param vo
     * @return
     * @throws SQLException
     */
    public int insertRank(TbOmmUserVO vo) throws SQLException {
    	return sqlSession.insert("USER.insertRank", vo);
    }
    
    /**
     * 등급 수정 
     * @param vo
     * @return
     * @throws SQLException
     */
    public int updateRank(TbOmmUserVO vo) throws SQLException {
    	return sqlSession.update("USER.updateRank", vo);
    }
    
    /**
     * 등급 삭제 
     * @param vo
     * @return
     * @throws SQLException
     */
    public int deleteRank(TbOmmUserVO vo) throws SQLException {
    	return sqlSession.delete("USER.deleteRank", vo);
    }
    
    /**
     * 등급 별 메뉴 권한 초기화 
     * @param vo
     * @return
     * @throws SQLException
     */
    public int initUserMenu(TbOmmUserVO vo) throws SQLException {
    	return sqlSession.insert("USER.initUserMenu", vo);
    }
    
    /**
     * 등급 별 메뉴 권한 삭제
     * @param vo
     * @return
     * @throws SQLException
     */
    public int deleteUserMenu(TbOmmUserVO vo) throws SQLException {
    	return sqlSession.delete("USER.deleteUserMenu", vo);
    }
    
    /**
     * 등급 별 메뉴 권한 등록
     * @param vo
     * @return
     * @throws SQLException
     */
    public int insertUserMenu(TbOmmUserVO vo) throws SQLException {
    	return sqlSession.insert("USER.insertUserMenu", vo);
    }
    
    /**
     * 사용자 접속이력 등록
     * @param vo
     * @return
     * @throws SQLException
     */
    public int insertUserLogin(TbOmmUserVO vo) throws SQLException {
    	return sqlSession.insert("USER.insertUserLogin", vo);
    }
    
    /**
     * 사용자 로그아웃 기록 업데이트
     * @param vo
     * @return
     * @throws SQLException
     */
    public int updateUserLogin(TbOmmUserVO vo) throws SQLException {
    	return sqlSession.update("USER.updateUserLogin", vo);
    }
    
    /**
     * 사용자 접속기록 이력번호 조회
     * @return
     * @throws SQLException
     */
    public TbOmmUserVO selectHistNo() throws SQLException {
    	return sqlSession.selectOne("USER.selectHistNo");
    }
    
    /**
     * 사용자의 메뉴권한 조회
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbOmmUserVO> selectUserMenuAuth(TbOmmUserVO vo) throws SQLException {
    	return sqlSession.selectList("USER.selectUserMenuAuth", vo);
    }
}
