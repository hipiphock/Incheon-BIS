package com.bis.dao;

import java.sql.SQLException;
import java.util.List;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.bis.vo.re.TbAdhPenaltyTreatVO;


/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS / 운행서비스평가 / 운행위반사항통보
 * Business Name  : 
 * Class Name 	  : PenaltyDAO.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2019.01.28	박주언		created new file
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
@Repository("penaltyDAO")
public class PenaltyDAO {
	
	@Resource
	private SqlSessionTemplate sqlSession;

	public List<TbAdhPenaltyTreatVO> selectPenaltyProcessList(TbAdhPenaltyTreatVO vo) throws SQLException{
		return sqlSession.selectList("PENALTY.selectPenaltyProcessList", vo);
	}

	public int registerNewPenalty(TbAdhPenaltyTreatVO vo) {
		return sqlSession.insert("registerNewPenalty", vo);
	}

	
	/**
	    * 운행횟수관리 - 운행횟수/페널티내역조회 페널티 리스트
	    * @return 
	    * @throws SQLException
	    */
	public List<TbAdhPenaltyTreatVO> selectPenaltyList(TbAdhPenaltyTreatVO vo) {
		return sqlSession.selectList("PENALTY.selectPenaltyList", vo);
	}

}
