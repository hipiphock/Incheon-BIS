package com.bis.service;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import com.bis.vo.re.TbDmhTmspaceVO;
import com.bis.vo.re.TbDmsBuscrowdVO;
import com.bis.vo.re.TbDmsRunonschedVO;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS / 운행서비스평가
 * Business Name  : 
 * Class Name 	  : EvaluationService.java
 * Description 	  : 
 * Modification History 
 * 수정일			수정자		수정내용
 * ----------   ---------   -------------------------------
 * 2019.01.18	박주언		created new file
 * </PRE>
 * 
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
public interface EvaluationService {

	List<TbDmhTmspaceVO> selectViolentOperHistList(TbDmhTmspaceVO vo) throws SQLException;

	// 운행평가 - 운행정시성통계조회
	List<TbDmsRunonschedVO> selectRouteColumn(TbDmsRunonschedVO vo) throws SQLException;

	List<Map<String, String>> selectOperTiming(TbDmsRunonschedVO vo) throws SQLException;

	// 운행평가 - 버스몰림율통계조회
	List<TbDmsBuscrowdVO> selectStopColumn(TbDmsBuscrowdVO vo) throws SQLException;

	List<Map<String, String>> selectCongestion(TbDmsBuscrowdVO vo) throws SQLException;

}
