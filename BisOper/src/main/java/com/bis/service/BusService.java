package com.bis.service;

import java.sql.SQLException;
import java.util.List;

import com.bis.vo.re.TbAdmBusVO;
import com.bis.vo.re.TbAdmBusrouteVO;
import com.bis.vo.re.TbAdmGarageVO;
import com.bis.vo.re.TbBmcMdtstatVO;
import com.bis.vo.re.TbBmhIncidRespVO;
import com.bis.vo.re.TbBmhRunevtcollVO;
import com.bis.vo.re.TbBmmIncidScnroVO;
import com.bis.vo.re.TbDmhBusrunrecVO;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 
 * Class Name 	  : BusService.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2017.010.20	    			 김주암                    최초생성
 * 2019.01.09	박주언		added new method: selectIncidReactHisList
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */

public interface BusService {
	
	
	List<TbBmhRunevtcollVO> selectViolRunList(TbBmhRunevtcollVO vo) throws SQLException;
	
	List<TbAdmBusVO> selectBusList(TbAdmBusVO vo) throws SQLException;
	
	List<TbBmhRunevtcollVO> selectBusViolList(TbBmhRunevtcollVO vo) throws SQLException;

	List<TbAdmGarageVO> selectGarageCateList() throws SQLException;
	
	TbAdmGarageVO selectMaxGarageapid() throws SQLException;
	
	List<TbBmcMdtstatVO> selectMdtStat(TbBmcMdtstatVO vo) throws SQLException;
	
	List<TbAdmBusVO> selectWirelessUpgradeBusList(TbAdmBusVO vo) throws SQLException;
	
	List<TbAdmBusVO> selectBusTerminalUpgrade(TbAdmBusVO vo) throws SQLException;
	
	List<TbAdmBusVO> selectWirelessUpgrade(TbAdmBusVO vo) throws SQLException;
	
	List<TbAdmBusVO> selectMdtUpgrade(TbAdmBusVO vo) throws SQLException;
	
	List<TbBmhRunevtcollVO> selectOperationHisList(TbBmhRunevtcollVO vo) throws SQLException;	
	
	List<TbBmhRunevtcollVO> selectBusIncidentHisList(TbBmhRunevtcollVO vo) throws SQLException;
	
	List<TbBmhRunevtcollVO> selectBusViolationHisList(TbBmhRunevtcollVO vo) throws SQLException;
	
	List<TbBmhRunevtcollVO> selectBusInciList() throws SQLException;

	List<TbBmhIncidRespVO> selectIncidReactHisList(TbBmhIncidRespVO vo) throws SQLException;

	List<TbBmmIncidScnroVO> selectIncidReactScnroList(TbBmmIncidScnroVO vo) throws SQLException;

	List<TbBmhIncidRespVO> selectRespHistList(TbBmhIncidRespVO vo)throws SQLException;

		
	List<TbAdmBusrouteVO> selectBusBasicInfoList(TbAdmBusrouteVO vo) throws SQLException; // 차량기초정보 조회

	int updateBusTreatyn(TbAdmBusrouteVO vo) throws SQLException; // 처리여부 변경

	List<TbAdmBusVO> selectSearchPermList(TbAdmBusVO vo) throws SQLException; //기반정보관리 - 인허가관리 - 인허가 검색

	List<TbDmhBusrunrecVO> selectOneDayBusRunRecList(TbDmhBusrunrecVO vo) throws SQLException; //보고서 - 일일버스운행정보
	
	
	/***************************** 이하 DB 변경 전 *****************************/
	
}
