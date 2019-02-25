package com.bis.service.impl;

import java.sql.SQLException;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.bis.dao.CompDAO;
import com.bis.service.BuscompService;
import com.bis.vo.re.TbAdmBusCompVO;
import com.bis.vo.re.TbAdmGarageVO;
import com.bis.vo.re.TbDmhBusrunrecVO;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 
 * Class Name 	  : BuscompServiceImpl.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2018.12.28	    		     주형빈                    최초생성
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2018 by IncheonBis All right reserved.
 */

@Service("buscompService")
public class BusCompServiceImpl extends EgovAbstractServiceImpl implements BuscompService {
	
	@Resource(name = "compDAO")
	private CompDAO compDAO;

	
	/**
	 * 버스회사 카테고리 리스트
	 * @return 버스회사 카테고리 리스트
	 * @throws SQLException
	 */
	public List<TbAdmBusCompVO> selectBuscompCateList() throws SQLException {
		return compDAO.selectBuscompCateList();
	}

	/**
	 * 버스회사 정보
	 * @return 버스회사 정보
	 * @throws SQLException
	 */
	public List<TbAdmBusCompVO> selectCompInfoList(TbAdmBusCompVO vo) throws SQLException{
		return compDAO.selectCompInfoList(vo);
	}

	/**
	 * 버스 차고지 정보
	 * @return 버스 차고지 정보
	 * @throws SQLException
	 */
	public List<TbAdmGarageVO> selectGarageInfoList(TbAdmGarageVO vo) throws SQLException {
		return compDAO.selectGarageInfoList(vo);
	}

	/**
	 * 운행횟수관리 - 버스회사별운행횟수
	 * @return 버스회사별운행횟수
	 * @throws SQLException
	 */
	public List<TbDmhBusrunrecVO> selectCompRunCount(TbDmhBusrunrecVO vo) throws SQLException {
		return compDAO.selectCompRunCount(vo);
	}
	
	
	
    
}
