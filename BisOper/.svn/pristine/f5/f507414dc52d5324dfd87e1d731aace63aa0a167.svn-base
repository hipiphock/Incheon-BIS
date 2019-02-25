package com.bis.dao;

import java.sql.SQLException;
import java.util.List;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.bis.vo.re.TbBmhMdtmsgVO;


/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - Message Manager
 * Business Name  : 
 * Class Name 	  : MessageDAO.java
 * Description 	  : 
 * Modification History 
 * 수정일			수정자		수정내용
 * ----------   ---------   -------------------------------
 * 2019.01.31	박주언		created new file
 * </PRE>
 * 
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
@Repository("messageDAO")
public class MessageDAO {

	@Resource
	private SqlSessionTemplate sqlSession;
	
	public int sendNoticeMessage(TbBmhMdtmsgVO vo) throws SQLException{
		return sqlSession.update("MESSAGE.sendNoticeMessage", vo);
	}
	
	public List<TbBmhMdtmsgVO> selectMessageList(TbBmhMdtmsgVO vo) throws SQLException{
		return sqlSession.selectList("MESSAGE.selectMessageList", vo);
	}
}