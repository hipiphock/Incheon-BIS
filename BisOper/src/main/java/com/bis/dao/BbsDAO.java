package com.bis.dao;

import java.sql.SQLException;
import java.util.List;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.bis.vo.re.TbAdmBusCompVO;
import com.bis.vo.re.TbAdmGarageVO;
import com.bis.vo.re.TbDmhBusrunrecVO;
import com.bis.vo.re.TbIchProtestreqVO;


/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS / 버스회사,차고지
 * Business Name  : 
 * Class Name 	  : BbsDAO.java
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

@Repository("bbsDAO")
public class BbsDAO {
	
	@Resource
	private SqlSessionTemplate sqlSession;

	
		/**
	    * 운행횟수관리 - 이의신청내역조회
	    * @return 
	    * @throws SQLException
	    */
		public List<TbIchProtestreqVO> selectReqtreatcdList(TbIchProtestreqVO vo) throws SQLException {
			return sqlSession.selectList("BBS.selectReqtreatcdList",vo);
		}
	   
	   
	   
}
