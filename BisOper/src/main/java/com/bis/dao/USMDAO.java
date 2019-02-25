package com.bis.dao;

import java.sql.SQLException;
import java.util.List;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.bis.vo.re.TbBmhIncidRespVO;
import com.bis.vo.re.TbBmmIncidScnroVO;


/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS / 버스운행관리 / 돌발상황관리
 * Business Name  : 
 * Class Name 	  : USMDAO.java
 * Description 	  : Unexpected Situation Manager
 * Modification History 
 * 수정일			수정자		수정내용
 * ----------   ---------   -------------------------------
 * 2019.01.14	박주언		created new file
 * </PRE>
 * 
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
@Repository("usmDAO")
public class USMDAO {

	@Resource
	private SqlSessionTemplate sqlSession;

	public List<TbBmhIncidRespVO> selectIncidReactHisList(TbBmhIncidRespVO vo) throws SQLException{
		return sqlSession.selectList("USM.selectIncidReactHisList", vo);
	}

	public List<TbBmmIncidScnroVO> selectIncidReactScnroList(TbBmmIncidScnroVO vo) throws SQLException{
		return sqlSession.selectList("USM.selectIncidReactScnroList", vo);
	}

	public int insertIncidReactScnro(TbBmmIncidScnroVO vo) {
		return sqlSession.update("USM.insertIncidReactScnro");
	}
	
	public int modifyIncidReactScnro(TbBmmIncidScnroVO vo) {
		return sqlSession.update("USM.modifyIncidReactScnro", vo);
	}

	public int deleteIncidReactScnro(TbBmmIncidScnroVO vo) {
		return sqlSession.update("USM.deleteIncidReactScnro", vo);
	}

	
	public List<TbBmhIncidRespVO> selectRespHistList(TbBmhIncidRespVO vo) throws SQLException{
		return sqlSession.selectList("USM.selectRespHistList", vo);
	}

	public int insertReaction(TbBmhIncidRespVO vo) throws SQLException {
		return sqlSession.update("USM.insertReaction", vo);
	}

	public int modifyReaction(TbBmmIncidScnroVO vo) throws SQLException{
		return sqlSession.update("USM.modifyReaction", vo);
	}
}
