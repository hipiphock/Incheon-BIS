package com.bis.service.impl;

import java.sql.SQLException;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.bis.dao.BbsDAO;
import com.bis.dao.CompDAO;
import com.bis.service.BbsService;
import com.bis.service.BuscompService;
import com.bis.vo.re.TbAdmBusCompVO;
import com.bis.vo.re.TbAdmGarageVO;
import com.bis.vo.re.TbDmhBusrunrecVO;
import com.bis.vo.re.TbIchProtestreqVO;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 
 * Class Name 	  : BbsServiceImpl.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2019.01.16	    		     주형빈                    최초생성
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2018 by IncheonBis All right reserved.
 */

@Service("bbsService")
public class BbsServiceImpl extends EgovAbstractServiceImpl implements BbsService {
	
	@Resource(name = "bbsDAO")
	private BbsDAO bbsDAO;

	/**
	 * 운행횟수관리-이의신청내역조회
	 * @return 이의신청내역
	 * @throws SQLException
	 */
	public List<TbIchProtestreqVO> selectReqtreatcdList(TbIchProtestreqVO vo) throws SQLException {
		return bbsDAO.selectReqtreatcdList(vo);
	}
	
	
	
    
}
