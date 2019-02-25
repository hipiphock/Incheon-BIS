package com.bis.service.impl;

import java.sql.SQLException;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.bis.dao.ObeDAO;
import com.bis.service.ObeService;
import com.bis.vo.ObeStatusVO;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 
 * Class Name 	  : ObeServiceImpl.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2017.09.20	    황중모                       최초생성
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
@Service("obeService")
public class ObeServiceImpl extends EgovAbstractServiceImpl implements ObeService {

	@Resource(name = "obeDAO")
	private ObeDAO obeDAO;
	
	/**
	 * OBE 버전 조회
	 * @return 펌웨어, 기반 , 예약 버전
	 * @throws SQLException
	 */
	public List<String> selectObeVersionList() throws SQLException {
		return obeDAO.selectObeVersionList();
	}
	
	/**
     * OBE 상태 및 목록 조회
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<ObeStatusVO> selectObeStateList(ObeStatusVO vo) throws SQLException {
    	return obeDAO.selectObeStateList(vo);
    }
}
