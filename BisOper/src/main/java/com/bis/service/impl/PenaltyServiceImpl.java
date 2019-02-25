package com.bis.service.impl;

import java.sql.SQLException;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.bis.dao.PenaltyDAO;
import com.bis.service.PenaltyService;
import com.bis.vo.re.TbAdhPenaltyTreatVO;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * 
 * <PRE>
 * System Name 	  :	인천 BIS / 운행서비스평가 / 운행위반사항통보
 * Business Name  : 
 * Class Name 	  : PenaltyServiceImpl.java
 * Description 	  : 
 * Modification History 
 * 수정일			수정자		수정내용
 * ----------   ---------   -------------------------------
 * 2019.01.28	박주언		created new file
 * </PRE>
 * 
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
@Service("penaltyService")
public class PenaltyServiceImpl extends EgovAbstractServiceImpl implements PenaltyService{
	
	@Resource(name = "penaltyDAO")
	private PenaltyDAO penaltyDAO;

	public List<TbAdhPenaltyTreatVO> selectPenaltyProcessList(TbAdhPenaltyTreatVO vo) throws SQLException {
		return penaltyDAO.selectPenaltyProcessList(vo);
	}

	public int registerNewPenalty(TbAdhPenaltyTreatVO vo) throws SQLException {
		return penaltyDAO.registerNewPenalty(vo);
	}

	/**
    * 운행횟수관리 - 운행횟수/페널티내역조회 페널티 리스트
    * @return 
    * @throws SQLException
    */
	public List<TbAdhPenaltyTreatVO> selectPenaltyList(TbAdhPenaltyTreatVO vo)throws SQLException {
		return penaltyDAO.selectPenaltyList(vo);
	}

}
