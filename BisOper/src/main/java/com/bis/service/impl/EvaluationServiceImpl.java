package com.bis.service.impl;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.bis.dao.EvaluationDAO;
import com.bis.service.EvaluationService;
import com.bis.vo.re.TbAdmBusCompVO;
import com.bis.vo.re.TbAdmBusstopVO;
import com.bis.vo.re.TbDmhTmspaceVO;
import com.bis.vo.re.TbDmsBuscrowdVO;
import com.bis.vo.re.TbDmsRunonschedVO;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

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
@Service("evaluationService")
public class EvaluationServiceImpl extends EgovAbstractServiceImpl implements EvaluationService{
	
	@Resource(name = "evaluationDAO")
	private EvaluationDAO evaluationDAO;

	public List<TbDmhTmspaceVO> selectViolentOperHistList(TbDmhTmspaceVO vo) throws SQLException {
		return evaluationDAO.selectViolentOperHistList(vo);
	}
	
	
	// 운행평가 - 운행정시성통계조회
	public List<TbDmsRunonschedVO> selectRouteColumn(TbDmsRunonschedVO vo) throws SQLException {
		return evaluationDAO.selectOperTimingRoute(vo);
	}

	public List<Map<String, String>> selectOperTiming(TbDmsRunonschedVO vo) throws SQLException {
		
		// list to return
		List<Map<String, String>> resultMapList = new ArrayList<Map<String, String>>();
		// list that stores value elemnets
		List<Map<String, Object>> valueMapList = new ArrayList<Map<String, Object>>();
		
		// "구분" column을 가져온다.
		resultMapList = evaluationDAO.selectOperTimingDate(vo);
		System.out.println(resultMapList);
		if(resultMapList.size() <= 0){
			return null;
		}
		
		// case: company selected - get routeid
		if(vo.getCompid() != null && !vo.getCompid().equals("")){
			// get route list
			List<TbDmsRunonschedVO> routeList = evaluationDAO.selectOperTimingRoute(vo);
			// get data for each route
			for(TbDmsRunonschedVO elements : routeList){
				String key = elements.getRouteid();
				vo.setRouteid(key);
				vo.setCompid("");
				valueMapList = evaluationDAO.selectOperTimingRouteStaTistics(vo);
				for(int i = 0; i < valueMapList.size(); i++){
					String val = String.valueOf(valueMapList.get(i).get(key));
					resultMapList.get(i).put(key, val);
				}
			}
		}
		
		// case: no company selected - get all of the company
		else{
			// get company list
			List<TbDmsRunonschedVO> compList = evaluationDAO.selectOperTimingComp(vo);
			// get data for each company
			for(TbDmsRunonschedVO elements : compList){
				String key = elements.getCompid();
				vo.setCompid(key);
				valueMapList = evaluationDAO.selectOperTimingCompStaTistics(vo);
				for(int i = 0; i < valueMapList.size(); i++){
					String val = String.valueOf(valueMapList.get(i).get(key));
					resultMapList.get(i).put(key, val);
				}
			}
		}
		System.out.println(resultMapList);
		return resultMapList;
	}
	

	// 운행평가 - 버스몰림율통꼐조회
	public List<TbDmsBuscrowdVO> selectStopColumn(TbDmsBuscrowdVO vo) throws SQLException {
		return evaluationDAO.selectStopColumn(vo);
	}

	public List<Map<String, String>> selectCongestion(TbDmsBuscrowdVO vo) throws SQLException {
		// list to return
		List<Map<String, String>> resultMapList = new ArrayList<Map<String, String>>();
	
		Map<String, String> map1 = new HashMap<String, String>();
		map1.put("basic_col", "몰림율지표(%)");
		Map<String, String> map2 = new HashMap<String, String>();
		map2.put("basic_col", "평균운행간격(분)");
		resultMapList.add(map1);
		resultMapList.add(map2);
		
		List<TbDmsBuscrowdVO> dataList = evaluationDAO.selectCongestionStatistics(vo);
		for(TbDmsBuscrowdVO elements : dataList){
			String key = elements.getPathseq();
			String val1 = elements.getVal1();
			String val2 = elements.getVal2();
			resultMapList.get(0).put(key, val1);
			resultMapList.get(1).put(key, val2);
		}
		
		System.out.println(resultMapList);
		return resultMapList;
	}
}
