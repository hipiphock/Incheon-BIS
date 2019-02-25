package com.bis.service;

import java.sql.SQLException;
import java.util.List;

import com.bis.vo.re.TbAdmLinkVO;
import com.bis.vo.re.TbEchCardcashVO;
import com.bis.vo.re.TbEchExorgincidVO;
import com.bis.vo.re.TbEchLnkdsndrcvVO;
import com.bis.vo.re.TbEchNewscollVO;
import com.bis.vo.re.TbEchWeathercollVO;



/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 
 * Class Name 	  : OutsideInfoService.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2019.01.24    			 주형빈                    최초생성
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */

public interface OutsideInfoService {

	List<TbEchCardcashVO> selectCardCashList(TbEchCardcashVO vo) throws SQLException; //교통카드 연계정보관리 - 교통카드 및 현금수입금 조회

	int deleteCardCash(TbEchCardcashVO vo) throws SQLException; //교통카드 연계정보관리 - 내역삭제

	List<TbEchWeathercollVO> selectWeatherCallList(TbEchWeathercollVO vo) throws SQLException;  //기상정보 수집이력조회 - 기상정보 수집이력검색 

	List<TbEchLnkdsndrcvVO> selectLinkedOutsideInfoList(TbEchLnkdsndrcvVO vo) throws SQLException; //외부연계정보 - 연계정보 송수신이력조회

	List<TbEchExorgincidVO> selectIncidRecordList(TbEchExorgincidVO vo) throws SQLException; //외부연계정보 - 교통상황 연계정보 조회 - 돌발수집이력검색

	List<TbEchExorgincidVO> selectIncidChangedRecordList(TbEchExorgincidVO vo) throws SQLException; //외부연계정보 - 교통상황 연계정보 조회 - 돌발변경이력검색

	List<TbAdmLinkVO> selectIncidLinkInfoList(TbAdmLinkVO vo) throws SQLException; //외부연계정보 - 교통상황 연계정보 조회 - 관련링크검색

	List<TbEchNewscollVO> selectNewScollList(TbEchNewscollVO vo) throws SQLException; //외부연계정보 - 뉴스정보 수집이력조회

	

	
}
