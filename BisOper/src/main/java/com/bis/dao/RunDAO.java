package com.bis.dao;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.bis.vo.re.TbAdhRoutepnodeupdVO;
import com.bis.vo.re.TbAdmBusCompVO;
import com.bis.vo.re.TbDmhBusrunrecVO;
import com.bis.vo.re.TbDmhTmspaceChartVO;
import com.bis.vo.re.TbDmsAllocobsrvVO;


/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 회차
 * Business Name  : BIT 관련
 * Class Name 	  : RunDAO.java
 * Description 	  : 
 * Modification History 
 *   수정일                수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2019.01.30	박주언		created new file
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
@Repository("runDAO")
public class RunDAO {
	
	@Resource
	private SqlSessionTemplate sqlSession;

	public List<TbDmhBusrunrecVO> selectBusRunList(TbDmhBusrunrecVO vo) throws SQLException{
		return sqlSession.selectList("RUN.selectBusRunList", vo);
	}

	/**
    * //운행평가 - 배차준수율통계조회
    * @return 
    * @throws SQLException
    */
	public List<TbDmsAllocobsrvVO> selectRunObeyRoutenoList(TbDmsAllocobsrvVO vo) {
		return sqlSession.selectList("RUN.selectRunObeyRoutenoList", vo);
	}


	public List<Map<String, String>> selectRunObeyDTList(TbDmsAllocobsrvVO vo) {
		return sqlSession.selectList("RUN.selectRunObeyDTList", vo);
	}


	public List<Map<String, Object>> selectRunObeyRouteStatisticsValue(TbDmsAllocobsrvVO vo) {
		return sqlSession.selectList("RUN.selectRunObeyRouteStatisticsValue", vo);
	}


	public List<TbAdmBusCompVO> selectBuscompCateList(TbDmsAllocobsrvVO vo) {
		return sqlSession.selectList("BUS.selectBuscompCateList");
	}


	public List<Map<String, Object>> selectRunObeyCompStatisticsValue(TbDmsAllocobsrvVO vo) {
		return sqlSession.selectList("RUN.selectRunObeyCompStatisticsValue", vo);
	}
	
	
	/**
	 * 운행이력조회 - 시공간 운행이력 조회
	 * @param vo
	 * @return
	 */
	public List<TbAdhRoutepnodeupdVO> selectStopListforGrid(TbAdhRoutepnodeupdVO vo) {
		return sqlSession.selectList("RUN.selectStopListforGrid", vo);
	}

	/**
	 * 운행이력조회 - 시공간 운행이력 조회
	 * @param vo
	 * @return
	 */
	public List<TbDmhTmspaceChartVO> selectTimeSpaceBusRunList(TbDmhTmspaceChartVO vo) {
		return sqlSession.selectList("RUN.selectTimeSpaceBusRunList", vo);
	}

}
