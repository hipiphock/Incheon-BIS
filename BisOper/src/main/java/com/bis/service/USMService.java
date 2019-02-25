package com.bis.service;

import java.sql.SQLException;
import java.util.List;

import com.bis.vo.re.TbBmhIncidRespVO;
import com.bis.vo.re.TbBmmIncidScnroVO;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS / 버스운행관리 / 돌발상황관리
 * Business Name  : 
 * Class Name 	  : USMService.java
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
public interface USMService {

	List<TbBmhIncidRespVO> selectIncidReactHisList(TbBmhIncidRespVO vo) throws SQLException;

	List<TbBmmIncidScnroVO> selectIncidReactScnroList(TbBmmIncidScnroVO vo) throws SQLException;
	
	int insertIncidReactScnro(TbBmmIncidScnroVO vo) throws SQLException;
	
	int modifyIncidReactScnro(TbBmmIncidScnroVO vo) throws SQLException;

	int deleteIncidReactScnro(TbBmmIncidScnroVO vo) throws SQLException;
	
	List<TbBmhIncidRespVO> selectRespHistList(TbBmhIncidRespVO vo) throws SQLException;

	int insertReaction(TbBmhIncidRespVO vo) throws SQLException ;

	int modifyReaction(TbBmmIncidScnroVO vo) throws SQLException;

}
