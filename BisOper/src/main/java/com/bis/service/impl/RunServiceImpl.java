package com.bis.service.impl;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.bis.dao.RunDAO;
import com.bis.service.RunService;
import com.bis.vo.re.TbAdhRoutepnodeupdVO;
import com.bis.vo.re.TbAdmBusCompVO;
import com.bis.vo.re.TbDmhBusrunrecVO;
import com.bis.vo.re.TbDmhTmspaceChartVO;
import com.bis.vo.re.TbDmsAllocobsrvVO;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 회차
 * Business Name  : BIT 관련
 * Class Name 	  : RunServiceImpl.java
 * Description 	  : 
 * Modification History 
 *   수정일                수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2019.01.30	박주언		created new file
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
@Service("runService")
public class RunServiceImpl extends EgovAbstractServiceImpl implements RunService{

	@Resource(name="runDAO")
	private RunDAO runDAO;
	
	public List<TbDmhBusrunrecVO> selectBusRunList(TbDmhBusrunrecVO vo) throws SQLException {
		return runDAO.selectBusRunList(vo);
	}

	
	/**
 	 * 운행평가 - 배차준수율통계조회 - 그리드/차트 데이터
 	 * @return
 	 * @throws SQLException
 	 */
	public List<Map<String, String>> selectRunObey(TbDmsAllocobsrvVO vo) throws SQLException {
		List<Map<String, String>> resultMList = new ArrayList<Map<String,String>>();//리턴할 리스트
		List<Map<String, Object>> valueMList = new ArrayList<Map<String,Object>>();
		resultMList = runDAO.selectRunObeyDTList(vo); 
		if(resultMList.size() <= 0){
			return null;
		}
		
		//버스회사 선택 - routeid 가져오기 - 리턴 데이터 저장
		if(vo.getCompid()!= null && !vo.getCompid().equals("")){ //버스회사 선택
			List<TbDmsAllocobsrvVO> routeidList = runDAO.selectRunObeyRoutenoList(vo);//id가져오기
				for (TbDmsAllocobsrvVO tbDmsAllocobsrvVO : routeidList) {
					String key = tbDmsAllocobsrvVO.getRouteid();
					vo.setRouteid(key);
					vo.setCompid("");//compid 초기화
					valueMList = runDAO.selectRunObeyRouteStatisticsValue(vo);
					for(int i=0;i<resultMList.size();i++){
						String val = String.valueOf(valueMList.get(i).get(key));
						resultMList.get(i).put(key, val);
					}
				}
		//전체검색 - compid 가져오기 - 리턴 데이터 저장 
		} else { 
			List<TbAdmBusCompVO> compidList = runDAO.selectBuscompCateList(vo);
			for (TbAdmBusCompVO tbAdmBusCompVO : compidList) {
				String key = tbAdmBusCompVO.getCompid();
				vo.setCompid(key);
				valueMList = runDAO.selectRunObeyCompStatisticsValue(vo);
				for(int i=0;i<valueMList.size();i++){
					String val = String.valueOf(valueMList.get(i).get(key));
					resultMList.get(i).put(key, val);
				}
			}
		}
		return resultMList;
	}

	
	/**
 	 * 운행평가 - 배차준수율통계조회 -노선명 출력 리스트
 	 * @return
 	 * @throws SQLException
 	 */
	public List<TbDmsAllocobsrvVO> selectRunObeyRoutenoList(TbDmsAllocobsrvVO vo) throws SQLException {
		return runDAO.selectRunObeyRoutenoList(vo);
	}
	
	
	/**
	 * 이력통계/분석 - 운행이력조회 - 시공간 운행이력 조회
	 */
	public List<TbAdhRoutepnodeupdVO> selectStopListforGrid(TbAdhRoutepnodeupdVO vo) throws SQLException {
		return runDAO.selectStopListforGrid(vo);
	}

	
	/**
	 * 이력통계/분석 - 운행이력조회 - 시공간 운행이력 조회
	 */
	public List<TbDmhTmspaceChartVO> selectTimeSpaceBusRunList(TbDmhTmspaceChartVO vo) throws SQLException {
		return runDAO.selectTimeSpaceBusRunList(vo);
	}
}
