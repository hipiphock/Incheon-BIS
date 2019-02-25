package com.bis.service;

import java.sql.SQLException;
import java.util.List;

import com.bis.vo.BusTimeTableVO;
import com.bis.vo.BusrouteVO;
import com.bis.vo.ProcessParameterVO;
import com.bis.vo.re.TbAdhRouteversionpdVO;
import com.bis.vo.re.TbAdmBusCompVO;
import com.bis.vo.re.TbAdmBusVO;
import com.bis.vo.re.TbAdmBusrouteVO;
import com.bis.vo.re.TbAdmNodeVO;
import com.bis.vo.re.TbAdmRouteToComVO;
import com.bis.vo.re.TbAdmRouteschedVO;


/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 
 * Class Name 	  : BusrouteService.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2017.09.20	    황중모                       최초생성
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
public interface BusrouteService {
	
	List<TbAdmBusrouteVO> selectBusOperList(TbAdmBusrouteVO vo) throws SQLException;
	
	List<TbAdmNodeVO> selectArrivalTime(TbAdmNodeVO vo) throws SQLException;
	
	List<TbAdmNodeVO> selectRoutePNode(TbAdmNodeVO vo) throws SQLException;
	
	List<TbAdmBusrouteVO> selectRoadList() throws SQLException;
	
	List<TbAdmBusrouteVO> selectRouteList(TbAdmBusrouteVO vo) throws SQLException;
	
	List<TbAdmBusrouteVO> selectMapBusList(TbAdmBusrouteVO vo) throws SQLException;
	
	List<TbAdmBusrouteVO> selectBusLocList(TbAdmBusrouteVO vo) throws SQLException;	

	TbAdmBusrouteVO selectRouteInfo(TbAdmBusrouteVO vo) throws SQLException;		

	List<TbAdmBusrouteVO> selectRouteInfoList(TbAdmBusrouteVO vo) throws SQLException;
	
	List<TbAdmNodeVO> selectViaNodeList(TbAdmNodeVO vo) throws SQLException;
	
	List<TbAdmBusVO> selectVehicleList(TbAdmBusVO vo) throws SQLException; // 김주암 / 차량 정보조회
	
	List<TbAdmBusrouteVO> selectRouteScheduleList(TbAdmBusrouteVO vo) throws SQLException; // 김주암 / 노선시간표관리(왼쪽)    

	List<TbAdmRouteschedVO> selectRouteScheduleInfo(TbAdmRouteschedVO vo) throws SQLException; // 김주암 / 노선시간표관리(오른쪽)
	
	List<TbAdmBusrouteVO> selectRouteCateList(TbAdmBusrouteVO vo) throws SQLException; //노선 카테고리 리스트
	
	List<TbAdmBusrouteVO> selectRouteBasicInfoList(TbAdmBusrouteVO vo) throws SQLException; //노선기초정보관리 노선검색결과

	List<TbAdmBusrouteVO> selectRouteAllotList(TbAdmBusrouteVO vo) throws SQLException; //노선배정버스회사

	List<TbAdmRouteschedVO> selectRouteRunScaduleList(TbAdmRouteschedVO vo) throws SQLException; //노선운행스케쥴

	List<TbAdmBusrouteVO> selectRouteBranchList(TbAdmBusrouteVO vo) throws SQLException; // 분기노선정보
	
	int updateRouteBasicInfo(TbAdmBusrouteVO vo) throws SQLException; //노선기본정보수정
	
	int insertBranchRoute(TbAdmBusrouteVO vo) throws SQLException; //분기노선 추가	
	
	int deleteRouteBranch(TbAdmBusrouteVO vo) throws SQLException; // 분기노선 삭제
	
	List<TbAdmBusrouteVO> selectRouteRateCurv(TbAdmBusrouteVO vo) throws SQLException; // 노선굴곡도/경합율조회
	
	TbAdmBusrouteVO selectRouteInfoData(TbAdmBusrouteVO vo) throws SQLException; // v0505 하단 노선정보데이터
	
	List<TbAdmBusrouteVO> selectRouteWideareaList(TbAdmBusrouteVO vo) throws SQLException; // 노선광역코드별 목록

	List<TbAdmNodeVO> selectRouteViaNodeList(TbAdmNodeVO vo) throws SQLException; // 노선별 경유노드 조회
	
	List<TbAdhRouteversionpdVO> selectRouteVersionList(TbAdhRouteversionpdVO vo) throws SQLException; // 노선버전관리 - 노선버전검색
	
	int insertRouteVersionList(TbAdhRouteversionpdVO vo) throws SQLException; // 노선버전관리 - 노선버전입력
	
	int updateRouteVersionList(TbAdhRouteversionpdVO vo) throws SQLException; // 노선버전관리 - 노선버전수정
	
	int deleteRouteVersionList(TbAdhRouteversionpdVO vo) throws SQLException; // 노선버전관리 - 노선버전삭제

	List<TbAdmBusrouteVO> selectCurrentStateList(TbAdmBusrouteVO vo) throws SQLException; //보고서-노선현황 리스트
	
	List<TbAdmBusCompVO> selectCompList() throws SQLException;	// 박주언 / 버스공지사항전송
	
	List<TbAdmRouteToComVO> selectRouteListbyCompany(TbAdmRouteToComVO vo) throws SQLException;	// 박주언 / 버스공지사항전송
	
	List<TbAdmBusrouteVO> selectBusListtoNotify(TbAdmBusrouteVO vo) throws SQLException;	// 박주언 / 버스공지사항전송
	
	
	
	/***************************** 이하 구버전 DB 변경 전 *****************************/	
	
	
	List<TbAdmBusrouteVO> selectRouteVtxList(TbAdmBusrouteVO vo) throws SQLException;
	
    List<BusrouteVO> selectExploreUpList(BusrouteVO vo) throws SQLException;
    
 	int insertRouteScheduleInfo(BusTimeTableVO vo) throws SQLException;
	
	int deleteRouteScheduleInfo(BusTimeTableVO vo) throws SQLException;
	
// 	List<NodeVO> selectViaNodeList(NodeVO vo) throws SQLException;
 	
	List<ProcessParameterVO> selectProcParamList(ProcessParameterVO vo) throws SQLException;
	
	List<ProcessParameterVO> selectRouteProcParamList(ProcessParameterVO vo) throws SQLException;	
	
	/**
 	 * 노선도 - 노선 목록 조회
 	 * @return
 	 * @throws SQLException
 	 */
	List<TbAdmBusrouteVO> selectImgRouteList(TbAdmBusrouteVO vo) throws SQLException;
	
	List<TbAdmNodeVO> selectRouteNodeList(TbAdmNodeVO vo) throws SQLException;
	
	List<TbAdmNodeVO> selectBusOperInfoList(TbAdmNodeVO vo) throws SQLException;

	



	

	

	

	

	

	

	

	

	

	

	

	

	
	


}
