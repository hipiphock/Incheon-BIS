package com.bis.service;

import java.sql.SQLException;
import java.util.List;

import com.bis.vo.re.TbAdmRouteToComVO;
import com.bis.vo.re.TbIchDayAllocPlanVO;
import com.bis.vo.re.TbIcmRoutemjbstopVO;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS / 배차관리
 * Business Name  : 
 * Class Name 	  : DispatchService.java
 * Description 	  : 
 * Modification History 
 * 수정일			수정자		수정내용
 * ----------   ---------   -------------------------------
 * 2019.01.10	박주언		created new file
 * </PRE>
 * 
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
public interface DispatchService {

	List<TbIchDayAllocPlanVO> selectDispatchPlanList(TbIchDayAllocPlanVO vo) throws SQLException;

	List<TbAdmRouteToComVO> selectCompRouteList(TbAdmRouteToComVO vo) throws SQLException;
	
	List<TbAdmRouteToComVO> selectComplianceStatusList() throws SQLException;

	List<TbIcmRoutemjbstopVO> selectMainStopList(TbIcmRoutemjbstopVO vo) throws SQLException;

	List<TbIchDayAllocPlanVO> selectOperRegularityList(TbIchDayAllocPlanVO vo) throws SQLException;

	

}
