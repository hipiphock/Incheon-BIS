package com.bis.dao;

import java.sql.SQLException;
import java.util.List;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.bis.vo.re.TbAdmRouteToComVO;
import com.bis.vo.re.TbIchDayAllocPlanVO;
import com.bis.vo.re.TbIcmRoutemjbstopVO;


/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS / 배차관리
 * Business Name  : 
 * Class Name 	  : DispatchDAO.java
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
@Repository("dispatchDAO")
public class DispatchDAO {

	@Resource
	private SqlSessionTemplate sqlSession;

	
	public List<TbIchDayAllocPlanVO> selectDispatchPlanList(TbIchDayAllocPlanVO vo) throws SQLException{
		return sqlSession.selectList("DISPATCH.selectDispatchPlanList", vo);
	}

	public List<TbAdmRouteToComVO> selectCompRouteList(TbAdmRouteToComVO vo) throws SQLException{
		return sqlSession.selectList("DISPATCH.selectCompRouteList", vo);
	}
	
	public List<TbAdmRouteToComVO> selectComplianceStatusList() {
		return sqlSession.selectList("DISPATCH.selectComplianceStatusList");
	}
	
	public List<TbIcmRoutemjbstopVO> selectMainStopList(TbIcmRoutemjbstopVO vo) throws SQLException{
		return sqlSession.selectList("DISPATCH.selectMainStopList", vo);
	}

	public List<TbIchDayAllocPlanVO> selectOperRegularityList(TbIchDayAllocPlanVO vo) {
		return sqlSession.selectList("DISPATCH.selectOperRegularityList", vo);
	}
}
