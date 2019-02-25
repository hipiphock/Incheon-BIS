package com.bis.dao;

import java.sql.SQLException;
import java.util.List;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.bis.vo.re.TbAdmBusCompVO;
import com.bis.vo.re.TbAdmGarageVO;
import com.bis.vo.re.TbDmhBusrunrecVO;


/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS / 버스회사,차고지
 * Business Name  : 
 * Class Name 	  : CompDAO.java
 * Description 	  : 
 * Modification History 
 * 수정일			수정자		수정내용
 * ----------   ---------   -------------------------------
 * 2019.01.16	주형빈		created new file
 * </PRE>
 * 
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */

@Repository("compDAO")
public class CompDAO {
	
	@Resource
	private SqlSessionTemplate sqlSession;

	
		/**
	    * 버스회사 카테고리 리스트
	    * @return 
	    * @throws SQLException
	    */
	   public List<TbAdmBusCompVO> selectBuscompCateList() throws SQLException {
	      return sqlSession.selectList("BUS.selectBuscompCateList");
	   }


	   /**
	    * 버스회사 검색 정보
	    * @param vo
	    * @return 
	    * @throws SQLException
	    */
	   public List<TbAdmBusCompVO> selectCompInfoList(TbAdmBusCompVO vo) throws SQLException{
	      return sqlSession.selectList("BUS.selectCompInfoList",vo);
	   }

	   /**
	    * 버스 차고지 검색 정보
	    * @param vo
	    * @return 
	    * @throws SQLException
	    */
	   public List<TbAdmGarageVO> selectGarageInfoList(TbAdmGarageVO vo) throws SQLException{
	      return sqlSession.selectList("BUS.selectGarageInfoList",vo);
	   }
	   
	   /**
	    * 운행횟수관리 - 버스회사별운행횟수
	    * @param vo
	    * @return 
	    * @throws SQLException
	    */
	   public List<TbDmhBusrunrecVO> selectCompRunCount(TbDmhBusrunrecVO vo) throws SQLException{
		   return sqlSession.selectList("BUS.selectCompRunCount",vo);
		}
	   
	   
	   
}
