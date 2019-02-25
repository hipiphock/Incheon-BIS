package com.bis.dao;

import java.sql.SQLException;
import java.util.List;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.bis.vo.ObeStatusVO;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 
 * Class Name 	  : ObeDAO.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2017.09.20	    황중모                       최초생성
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
@Repository("obeDAO")
public class ObeDAO {

	@Resource
    private SqlSessionTemplate sqlSession;
    
	/**
	 * OBE 버전 조회
	 * @return 펌웨어, 기반, 예약 버전
	 * @throws SQLException
	 */
	public List<String> selectObeVersionList() throws SQLException {
		return sqlSession.selectList("OBE.selectObeVersionList", null);
	}
	
    /**
     * OBE 상태 및 목록 조회
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<ObeStatusVO> selectObeStateList(ObeStatusVO vo) throws SQLException {
    	return sqlSession.selectList("OBE.selectObeStateList", vo);
    }
    
    
}
