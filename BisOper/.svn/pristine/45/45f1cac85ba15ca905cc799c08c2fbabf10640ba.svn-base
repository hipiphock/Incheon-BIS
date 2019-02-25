package com.bis.service.impl;

import java.sql.SQLException;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.bis.dao.DispatchDAO;
import com.bis.service.DispatchService;
import com.bis.vo.re.TbAdmRouteToComVO;
import com.bis.vo.re.TbIchDayAllocPlanVO;
import com.bis.vo.re.TbIcmRoutemjbstopVO;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS / 배차관리
 * Business Name  : 
 * Class Name 	  : DispatchServiceImpl.java
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
@Service("dispatchService")
public class DispatchServiceImpl extends EgovAbstractServiceImpl implements DispatchService{
	
	@Resource(name = "dispatchDAO")
	private DispatchDAO dispatchDAO;

	
	public List<TbIchDayAllocPlanVO> selectDispatchPlanList(TbIchDayAllocPlanVO vo) throws SQLException{
		return dispatchDAO.selectDispatchPlanList(vo);
	}


	public List<TbAdmRouteToComVO> selectCompRouteList(TbAdmRouteToComVO vo) throws SQLException {
		return dispatchDAO.selectCompRouteList(vo);
	}

	public List<TbAdmRouteToComVO> selectComplianceStatusList() throws SQLException {
		return dispatchDAO.selectComplianceStatusList();
	}

	public List<TbIcmRoutemjbstopVO> selectMainStopList(TbIcmRoutemjbstopVO vo) throws SQLException {
		return dispatchDAO.selectMainStopList(vo);
	}


	@Override
	public List<TbIchDayAllocPlanVO> selectOperRegularityList(TbIchDayAllocPlanVO vo) throws SQLException {
		return dispatchDAO.selectOperRegularityList(vo);
	}


	

}
