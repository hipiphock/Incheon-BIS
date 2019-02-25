package com.bis.service.impl;

import java.sql.SQLException;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.bis.dao.USMDAO;
import com.bis.service.USMService;
import com.bis.vo.re.TbBmhIncidRespVO;
import com.bis.vo.re.TbBmmIncidScnroVO;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS / 버스운행관리 / 돌발상황관리
 * Business Name  : 
 * Class Name 	  : USMServiceImpl.java
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
@Service("usmService")
public class USMServiceImpl extends EgovAbstractServiceImpl implements USMService{
	
	@Resource(name = "usmDAO")
	private USMDAO usmDAO;

	public List<TbBmhIncidRespVO> selectIncidReactHisList(TbBmhIncidRespVO vo) throws SQLException {
		return usmDAO.selectIncidReactHisList(vo);
	}

	public List<TbBmmIncidScnroVO> selectIncidReactScnroList(TbBmmIncidScnroVO vo) throws SQLException {
		return usmDAO.selectIncidReactScnroList(vo);
	}
	
	public int insertIncidReactScnro(TbBmmIncidScnroVO vo) throws SQLException {
		return usmDAO.insertIncidReactScnro(vo);
	}
	
	
	public int modifyIncidReactScnro(TbBmmIncidScnroVO vo) throws SQLException {
		return usmDAO.modifyIncidReactScnro(vo);
	}

	
	public int deleteIncidReactScnro(TbBmmIncidScnroVO vo) throws SQLException {
		return usmDAO.deleteIncidReactScnro(vo);
	}


	public List<TbBmhIncidRespVO> selectRespHistList(TbBmhIncidRespVO vo) throws SQLException {
		return usmDAO.selectRespHistList(vo);
	}

	
	public int insertReaction(TbBmhIncidRespVO vo) throws SQLException {
		return usmDAO.insertReaction(vo);
	}

	public int modifyReaction(TbBmmIncidScnroVO vo) throws SQLException {
		return usmDAO.modifyReaction(vo);
	}

}
