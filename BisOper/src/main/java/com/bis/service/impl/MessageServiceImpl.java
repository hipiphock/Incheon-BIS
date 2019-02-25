package com.bis.service.impl;

import java.sql.SQLException;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.bis.dao.MessageDAO;
import com.bis.service.MessageService;
import com.bis.vo.re.TbBmhMdtmsgVO;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - Message Manager
 * Business Name  : 
 * Class Name 	  : MessageServiceImpl.java
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
@Service("messageService")
public class MessageServiceImpl extends EgovAbstractServiceImpl implements MessageService{

	@Resource(name = "messageDAO")
	private MessageDAO messageDAO;
	
	public int sendNoticeMessage(TbBmhMdtmsgVO vo) throws SQLException {
		return messageDAO.sendNoticeMessage(vo);
	}
	
	public List<TbBmhMdtmsgVO> selectMessageList(TbBmhMdtmsgVO vo)throws SQLException {
		return messageDAO.selectMessageList(vo);
	}	
}
