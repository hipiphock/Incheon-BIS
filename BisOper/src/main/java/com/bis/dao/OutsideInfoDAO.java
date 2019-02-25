package com.bis.dao;

import java.sql.SQLException;
import java.util.List;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.bis.vo.re.TbAdmLinkVO;
import com.bis.vo.re.TbEchCardcashVO;
import com.bis.vo.re.TbEchExorgincidVO;
import com.bis.vo.re.TbEchLnkdsndrcvVO;
import com.bis.vo.re.TbEchNewscollVO;
import com.bis.vo.re.TbEchWeathercollVO;


/**
 * 
 * <PRE>
 * System Name 	  : 외부연계정보
 * Business Name  : 
 * Class Name 	  : OutsideInfoDAO.java
 * Description 	  : 
 * Modification History 
 * 수정일			수정자		수정내용
 * ----------   ---------   -------------------------------
 * 2019.01.24	주형빈		created new file
 * </PRE>
 * 
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */

@Repository("outsideinfoDAO")
public class OutsideInfoDAO {
	
	@Resource
	private SqlSessionTemplate sqlSession;

	
		/**
	    * //교통카드 연계정보관리 - 교통카드 및 현금수입금 조회
	    * @return 
	    * @throws SQLException
	    */
		public List<TbEchCardcashVO> selectCardCashList(TbEchCardcashVO vo) {
			return sqlSession.selectList("OUTSIDEINFO.selectCardCashList",vo);
		}

		/**
	    * //교통카드 연계정보관리 - 내역삭제
	    * @return 
	    * @throws SQLException
	    */
		public int deleteCardCash(TbEchCardcashVO vo) {
			return sqlSession.delete("OUTSIDEINFO.deleteCardCash",vo);
		}

		/**
	    * //기상정보 수집이력조회 - 기상정보 수집이력검색
	    * @return 
	    * @throws SQLException
	    */
		public List<TbEchWeathercollVO> selectWeatherCallList(TbEchWeathercollVO vo) {
			return sqlSession.selectList("OUTSIDEINFO.selectWeatherCallList",vo);
		}

		/**
	    * //외부연계정보 - 연계정보 송수신이력조회
	    * @return 
	    * @throws SQLException
	    */
		public List<TbEchLnkdsndrcvVO> selectLinkedOutsideInfoList(TbEchLnkdsndrcvVO vo) {
			return sqlSession.selectList("OUTSIDEINFO.selectLinkedOutsideInfoList",vo);
		}
		
		/**
	    * //외부연계정보 - 교통상황 연계정보 조회 - 돌발수집이력검색
	    * @return 
	    * @throws SQLException
	    */
		public List<TbEchExorgincidVO> selectIncidRecordList(TbEchExorgincidVO vo) {
			return sqlSession.selectList("OUTSIDEINFO.selectIncidRecordList",vo);
		}

		
		/**
	    * //외부연계정보 - 교통상황 연계정보 조회 - 돌발변경이력검색
	    * @return 
	    * @throws SQLException
	    */
		public List<TbEchExorgincidVO> selectIncidChangedRecordList(TbEchExorgincidVO vo) {
			return sqlSession.selectList("OUTSIDEINFO.selectIncidChangedRecordList",vo);
		}
		
		/**
	    * //외부연계정보 - 교통상황 연계정보 조회 - 관련링크검색
	    * @return 
	    * @throws SQLException
	    */
		public List<TbAdmLinkVO> selectIncidLinkInfoList(TbAdmLinkVO vo) {
			return sqlSession.selectList("OUTSIDEINFO.selectIncidLinkInfoList",vo);
		}

		
		/**
	    * 외부연계정보 - 뉴스정보 수집이력조회
	    * @return 
	    * @throws SQLException
	    */
		public List<TbEchNewscollVO> selectNewScollList(TbEchNewscollVO vo) {
			return sqlSession.selectList("OUTSIDEINFO.selectNewScollList",vo);
		}
	   
		
	   
	   
}
