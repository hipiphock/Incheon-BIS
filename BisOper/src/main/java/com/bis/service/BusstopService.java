package com.bis.service;

import java.sql.SQLException;
import java.util.List;

import com.bis.vo.BusstopVO;
import com.bis.vo.re.TbAdmBusstopVO;
import com.bis.vo.re.TbAdmNodeVO;
import com.bis.vo.re.TbBmcBstopbusarrivVO;
import com.bis.vo.re.TbBusstopVO;
import com.bis.vo.re.TbDmsPassingTimeVO;
import com.bis.vo.re.TbOmmBitVO;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 
 * Class Name 	  : BusstopService.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2017.09.20	    황중모                       최초생성
 * 2019.01.22	박주언		added new method(selectStopListwithCondition, selectStopDetailList,
 * 								selectStopDetailStatistics)
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
public interface BusstopService {
	
	List<TbAdmBusstopVO> selectBusStopComunication(TbAdmBusstopVO vo) throws SQLException;

	List<TbAdmBusstopVO> selectMapStopList(TbAdmBusstopVO vo) throws SQLException;
	
	List<TbOmmBitVO> selectStopFacilCateList() throws SQLException;
	
	List<TbAdmNodeVO> selectMapNodeList(TbAdmNodeVO vo) throws SQLException;

	List<TbBusstopVO> selectStopList(TbBusstopVO vo) throws SQLException;

	List<TbAdmBusstopVO> selectViaRouteList(TbAdmBusstopVO vo) throws SQLException;
	
	List<TbAdmBusstopVO> selectArrivalInfoList(TbAdmBusstopVO vo) throws SQLException;

	List<TbAdmBusstopVO> selectStopCateList(TbAdmBusstopVO vo) throws SQLException; //정류장 조회

	List<TbAdmBusstopVO> selectStopBasicInfoList(TbAdmBusstopVO vo) throws SQLException; // 정류장기초정보 조회

	int updateStopBasicInfo(TbAdmBusstopVO vo) throws SQLException; // 정류장기초정보 수정
	
	List<TbAdmBusstopVO> selectSearchStopList(TbAdmBusstopVO vo) throws SQLException;  //정류소정차노선조회 - 정류장검색
	
	List<TbAdmBusstopVO> selectSearchStopRouteList(TbAdmBusstopVO vo) throws SQLException;  //정류소정차노선조회 - 정차노선검색 
	
	List<TbAdmBusstopVO> selectSearchSubwayList(TbAdmBusstopVO vo) throws SQLException;  //정류소관리 - 지하철역 조회
	
	List<TbAdmBusstopVO> selectSearchTransferSubwayList(TbAdmBusstopVO vo) throws SQLException;  //정류소관리 - 환승지하철역 조회
	
	int insertTransferSubway(TbAdmBusstopVO vo) throws SQLException;  //정류소관리 - 환승지하철역 추가
	
	int deleteTransferSubway(TbAdmBusstopVO vo) throws SQLException;  //정류소관리 - 환승지하철역 삭제

	List<TbAdmBusstopVO> selectSearchStopInfoAllList() throws SQLException;  //정류소통과노선조회 - 정류소 전체조회

	List<TbAdmBusstopVO> selectSearchStopInfoList(TbAdmBusstopVO vo) throws SQLException;  //정류소통과노선조회 - 정류소 조건조회
	
	List<TbAdmBusstopVO> selectStopPassRouteList(TbAdmBusstopVO vo) throws SQLException;  //정류소통과노선조회 - 정류소통과노선조회
	
	List<TbAdmBusstopVO> selectStopListwithCondition(TbAdmBusstopVO vo) throws SQLException;	// 통과시간대비제공정보비교 - 정류소검색결과
	
	List<TbBmcBstopbusarrivVO> selectStopDetailList(TbBmcBstopbusarrivVO vo) throws SQLException;	// 통과시간대비제공정보비교 - 정류소제공정보
	
	List<TbDmsPassingTimeVO> selectStopDetailStatistics(TbDmsPassingTimeVO vo) throws SQLException;	// 통과시간대비제공정보비교조회 - 정류소제공정보(통계 결과만 보기)
	
	List<TbAdmBusstopVO> selectSearchPermissionList(TbAdmBusstopVO vo) throws SQLException;  //정류소기초인허가정보 - 정류소인허가검색
	
	int updateMasterPermstat(TbAdmBusstopVO vo) throws SQLException;  //정류소기초인허가정보 - 마스터 적용
	
	//#############################v0110
	List<TbAdmNodeVO> selectStopsLists(TbAdmNodeVO vo) throws SQLException;
	
	
	
	
	////
	////
	List<BusstopVO> selectRouteStopList(BusstopVO vo) throws SQLException;
	
	//##############################v305
	List<TbAdmBusstopVO> selectBusPopup(TbAdmBusstopVO vo) throws SQLException;
	
	List<TbAdmBusstopVO> selectStopPopup(TbAdmBusstopVO vo) throws SQLException;
	
	public int updateMsg(TbAdmBusstopVO vo) throws SQLException;
    //##############################v306
	List<TbAdmBusstopVO> selectBstopList(TbAdmBusstopVO vo) throws SQLException;
	
	List<TbAdmBusstopVO> selectBstopInfo(TbAdmBusstopVO vo) throws SQLException;
	
	List<TbAdmBusstopVO> selectBittpcdList() throws SQLException;
	
	//#########################v706
	List<TbAdmBusstopVO> selectBusEvent(TbAdmBusstopVO vo) throws SQLException;
	
	//#########################v707
	List<TbAdmBusstopVO> selectBusStopEvent(TbAdmBusstopVO vo) throws SQLException;

	//#########################v708
	List<TbAdmBusstopVO> selectCompList() throws SQLException;

	List<TbAdmBusstopVO> selectRouteListWithComp(TbAdmBusstopVO vo) throws SQLException;
	
	List<TbAdmBusstopVO> selectCarRegNo(TbAdmBusstopVO vo) throws SQLException;
	
	List<TbAdmBusstopVO> selectBusEventLog(TbAdmBusstopVO vo) throws SQLException;
	
	//#########################v709
	
	List<TbAdmBusstopVO> selectRouteAvgPercnt(TbAdmBusstopVO vo) throws SQLException;
	
	List<TbAdmBusstopVO> selectBusAvgPercnt(TbAdmBusstopVO vo) throws SQLException;
	
	//#########################v611
	List<TbAdmBusstopVO> selectBusMdtEvent(TbAdmBusstopVO vo) throws SQLException;
	
	//#########################v612
	List<TbAdmBusstopVO> selectRouteList() throws SQLException;
	
	List<TbAdmBusstopVO> selectBusListWithBusrun(TbAdmBusstopVO vo) throws SQLException;
	
	List<TbAdmBusstopVO> selectBusMdtCollEvent(TbAdmBusstopVO vo) throws SQLException;
	
	
	//#########################v614
	List<TbAdmBusstopVO> selectRouteRunList(TbAdmBusstopVO vo) throws SQLException;
		
	List<TbAdmBusstopVO> selectBusRunList(TbAdmBusstopVO vo) throws SQLException;
	
	//#########################v615
	List<TbAdmBusstopVO> selectBusWithStat(TbAdmBusstopVO vo) throws SQLException;
	
	List<TbAdmBusstopVO> selectBusRunEvent(TbAdmBusstopVO vo) throws SQLException;
	
	//#########################v616
	List<TbAdmBusstopVO> selectBusWithStat2(TbAdmBusstopVO vo) throws SQLException;
		
	List<TbAdmBusstopVO> selectStartArrivTimeList(TbAdmBusstopVO vo) throws SQLException;

	

	
}

