package com.bis.service;

import java.sql.SQLException;
import java.util.List;

import com.bis.vo.re.TbAdhPenaltyTreatVO;


/**
 * 
 * <PRE>
 * System Name 	  :	인천 BIS / 운행서비스평가 / 운행위반사항통보
 * Business Name  : 
 * Class Name 	  : PenaltyService.java
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
public interface PenaltyService {

	List<TbAdhPenaltyTreatVO> selectPenaltyProcessList(TbAdhPenaltyTreatVO vo) throws SQLException;

	int registerNewPenalty(TbAdhPenaltyTreatVO vo) throws SQLException;

	List<TbAdhPenaltyTreatVO> selectPenaltyList(TbAdhPenaltyTreatVO vo) throws SQLException; //운행횟수관리 - 운행횟수/페널티내역조회 페널티 리스트

}
