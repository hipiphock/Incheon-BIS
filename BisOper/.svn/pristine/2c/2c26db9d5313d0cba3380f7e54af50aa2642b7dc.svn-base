package com.bis.service.impl;

import java.sql.SQLException;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.bis.dao.BusrouteDAO;
import com.bis.service.BusrouteService;
import com.bis.vo.BusTimeTableVO;
import com.bis.vo.BusrouteVO;
import com.bis.vo.ProcessParameterVO;
import com.bis.vo.re.TbAdhRouteversionpdVO;
import com.bis.vo.re.TbAdmBusCompVO;
import com.bis.vo.re.TbAdmBusVO;
import com.bis.vo.re.TbAdmBusrouteVO;
import com.bis.vo.re.TbAdmNodeVO;
import com.bis.vo.re.TbAdmRouteToComVO;
import com.bis.vo.re.TbAdmRouteschedVO;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 
 * Class Name 	  : BusRouteServiceImpl.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2017.09.20	    황중모                       최초생성
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
@Service("busrouteService")
public class BusrouteServiceImpl extends EgovAbstractServiceImpl implements BusrouteService {

	@Resource(name = "busrouteDAO")
	private BusrouteDAO busrouteDAO;
	
	public List<TbAdmBusrouteVO> selectBusOperList(TbAdmBusrouteVO vo) throws SQLException {
		return busrouteDAO.selectBusOperList(vo); 
	}
	
	/**
	 * 	 v0110 도착예정시간조회  - 예정시간 누적 계산 출력 리스트
	 */
	public List<TbAdmNodeVO> selectArrivalTime(TbAdmNodeVO vo) throws SQLException {
		return busrouteDAO.selectArrivalTime(vo); 
	}
	
	/**
	 * 경로에 대한 출발/도착 정류소 정보
	 * @return 
	 * @throws SQLException
	 */
	public List<TbAdmNodeVO> selectRoutePNode(TbAdmNodeVO vo) throws SQLException {
		return busrouteDAO.selectRoutePNode();
	}

	/**
	 * 도로 조회
	 * @return
	 * @throws SQLException
	 */
	public List<TbAdmBusrouteVO> selectRoadList() throws SQLException {
		return busrouteDAO.selectRoadList();
	}
	
 	/**
 	 * 노선 검색 팝업 목록
 	 * @return
 	 * @throws SQLException
 	 */
	public List<TbAdmBusrouteVO> selectRouteList(TbAdmBusrouteVO vo) throws SQLException {
		return busrouteDAO.selectRouteList(vo);
	}

	/**
	 * 전체버스  조회
	 * @param vo
	 * @return
	 * @throws SQLException
	 */
	public List<TbAdmBusrouteVO> selectMapBusList(TbAdmBusrouteVO vo) throws SQLException {
		return busrouteDAO.selectMapBusList(vo);
	}	
    
    /**
     * 전체버스  조회
     * 기반정보 - 노선  정보 조회 
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbAdmBusrouteVO> selectRouteInfoList(TbAdmBusrouteVO vo) throws SQLException {
    	return busrouteDAO.selectRouteInfoList(vo);
    }
	
    /**
     * 기반정보 - 경유정류장(노드) 조회 
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbAdmNodeVO> selectViaNodeList(TbAdmNodeVO vo) throws SQLException {
    	return busrouteDAO.selectViaNodeList(vo);
    }
    
	/**
	 * 선택 노선의 버스위치 조회 
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbAdmBusrouteVO> selectBusLocList(TbAdmBusrouteVO vo) throws SQLException {
    	return busrouteDAO.selectBusLocList(vo);
    }
 	
 	/**
 	 * 메인- 선택 노선 정보
 	 * @return
 	 * @throws SQLException
 	 */
 	public TbAdmBusrouteVO selectRouteInfo(TbAdmBusrouteVO vo) throws SQLException {	
 		return busrouteDAO.selectRouteInfo(vo);
 	} 	

	/**
     * 기반정보 - 차량 정보 조회 
     * @param vo
     * @return
     * @throws SQLException
     */
	public List<TbAdmBusVO> selectVehicleList(TbAdmBusVO vo) throws SQLException {
		return busrouteDAO.selectVehicleList(vo);
	}	
    
    /**
     * 기반정보 - 노선 시간표 관리(왼쪽) 
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbAdmBusrouteVO> selectRouteScheduleList(TbAdmBusrouteVO vo) throws SQLException{
    	return busrouteDAO.selectRouteScheduleList(vo);
    }
    
    /**
     * 기반정보 - 노선 시간표 관리(오른쪽) 
     * @param vo
     * @return
     * @throws SQLException
     */
	public List<TbAdmRouteschedVO> selectRouteScheduleInfo(TbAdmRouteschedVO vo) throws SQLException {
		return busrouteDAO.selectRouteScheduleInfo(vo);
	}
	
	/**
 	 * 노선 카테고리 리스트
 	 * @return
 	 * @throws SQLException
 	 */
	public List<TbAdmBusrouteVO> selectRouteCateList(TbAdmBusrouteVO vo) throws SQLException {
		return busrouteDAO.selectRouteCateList(vo);
	}
	
	/**
 	 * 노선기초정보관리 노선검색결과
 	 * @return
 	 * @throws SQLException
 	 */
	public List<TbAdmBusrouteVO> selectRouteBasicInfoList(TbAdmBusrouteVO vo) throws SQLException {
		return busrouteDAO.selectRouteBasicInfoList(vo);
	}
	
	
	/**
 	 * 노선배정버스회사
 	 * @return
 	 * @throws SQLException
 	 */
	public List<TbAdmBusrouteVO> selectRouteAllotList(TbAdmBusrouteVO vo) throws SQLException {
		return busrouteDAO.selectRouteAllotList(vo);
	}

	/**
 	 * 노선운행스케쥴 
 	 * @return
 	 * @throws SQLException
 	 */
	public List<TbAdmRouteschedVO> selectRouteRunScaduleList(TbAdmRouteschedVO vo) throws SQLException {
		return busrouteDAO.selectRouteRunScaduleList(vo);
	}

	/**
 	 * 분기노선정보 
 	 * @return
 	 * @throws SQLException
 	 */
	public List<TbAdmBusrouteVO> selectRouteBranchList(TbAdmBusrouteVO vo)throws SQLException {
		return busrouteDAO.selectRouteBranchList(vo);
	}
	
	/**
 	 * 노선기초정보수정
 	 * @return
 	 * @throws SQLException
 	 */
	public int updateRouteBasicInfo(TbAdmBusrouteVO vo) throws SQLException {
		return busrouteDAO.updateRouteBasicInfo(vo);
	}
	

	/**
 	 * 분기노선 추가
 	 * @return
 	 * @throws SQLException
 	 */
	public int insertBranchRoute(TbAdmBusrouteVO vo) throws SQLException {
		return busrouteDAO.insertBranchRoute(vo);
	}
	
	/**
 	 * 분기노선 삭제
 	 * @return
 	 * @throws SQLException
 	 */
	public int deleteRouteBranch(TbAdmBusrouteVO vo) throws SQLException {
		return busrouteDAO.deleteRouteBranch(vo);
	}
	
	/**
 	 * 노선굴곡도/경합율조회
 	 * @return
 	 * @throws SQLException
 	 */
	public List<TbAdmBusrouteVO> selectRouteRateCurv(TbAdmBusrouteVO vo)throws SQLException {
		return busrouteDAO.selectRouteRateCurv(vo);
	}
	
	
	/**
 	 * 보고서-노선현황 리스트
 	 * @return
 	 * @throws SQLException
 	 */
	public List<TbAdmBusrouteVO> selectCurrentStateList(TbAdmBusrouteVO vo) throws SQLException {
		return busrouteDAO.selectCurrentStateList(vo);
	}

	
	
	
	
	/**
 	 * v0505 하단 노선정보데이터
 	 * @return
 	 * @throws SQLException
 	 */
	public TbAdmBusrouteVO selectRouteInfoData(TbAdmBusrouteVO vo) throws SQLException {
		return busrouteDAO.selectRouteInfoData(vo);
	}
	
	
	/**
 	 * 노선광역코드별목록
 	 * @return
 	 * @throws SQLException
 	 */
	public List<TbAdmBusrouteVO> selectRouteWideareaList(TbAdmBusrouteVO vo) throws SQLException {
		return busrouteDAO.selectRouteWideareaList(vo);
	}
	
	
	/**
 	 * 노선별경유노드목록
 	 * @return
 	 * @throws SQLException
 	 */
	public List<TbAdmNodeVO> selectRouteViaNodeList(TbAdmNodeVO vo) throws SQLException {
		return busrouteDAO.selectRouteViaNodeList(vo);
	}
	
	/**
 	 * 노선버전관리-노선버전검색
 	 * @return
 	 * @throws SQLException
 	 */
	public List<TbAdhRouteversionpdVO> selectRouteVersionList(TbAdhRouteversionpdVO vo) throws SQLException {
		return busrouteDAO.selectRouteVersionList(vo);
	}
	
	/**
 	 * 노선버전관리-노선버전입력
 	 * @return
 	 * @throws SQLException
 	 */
	public int insertRouteVersionList(TbAdhRouteversionpdVO vo) throws SQLException {
		return busrouteDAO.insertRouteVersionList(vo);
	}

	/**
 	 * 노선버전관리-노선버전수정
 	 * @return
 	 * @throws SQLException
 	 */
	public int updateRouteVersionList(TbAdhRouteversionpdVO vo) throws SQLException {
		return busrouteDAO.updateRouteVersionList(vo);
	}
	
	
	/**
 	 * 노선버전관리-노선버전삭제
 	 * @return
 	 * @throws SQLException
 	 */
	public int deleteRouteVersionList(TbAdhRouteversionpdVO vo) throws SQLException {
		return busrouteDAO.deleteRouteVersionList(vo);
	}


	

	/**
	 * 버스운행관제 - 버스공지사항 전송
	 * @return
	 * @throws SQLException
	 * added by 박주언
	 */
	public List<TbAdmBusCompVO> selectCompList() throws SQLException {
		return busrouteDAO.selectCompList();
	}

	/**
	 * 버스운행관제 - 버스공지사항 전송
	 * @return
	 * @throws SQLException
	 * added by 박주언
	 */
	public List<TbAdmRouteToComVO> selectRouteListbyCompany(TbAdmRouteToComVO vo)
			throws SQLException {
		return busrouteDAO.selectRouteListbyCompany(vo);
	}

	/**
	 * 버스운행관제 - 버스공지사항 전송
	 * @return
	 * @throws SQLException
	 * added by 박주언
	 */
	public List<TbAdmBusrouteVO> selectBusListtoNotify(TbAdmBusrouteVO vo)
			throws SQLException {
		return busrouteDAO.selectBusListtoNotify(vo);
	}
	
	
	

	//################ 이하 구버전 소스 ################
    //################ 수정 된 코드는 위에 작성 ################
	
	
    /**
     * 노선 버텍스  조회
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbAdmBusrouteVO> selectRouteVtxList(TbAdmBusrouteVO vo) throws SQLException {
    	return busrouteDAO.selectRouteVtxList(vo);
    }

    /**
     * 기반정보 - 경로정보 상세(위) 조회 
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<BusrouteVO> selectExploreUpList(BusrouteVO vo) throws SQLException {
    	return busrouteDAO.selectExploreUpList(vo);
    }

	 /**
     * 기반정보 - 노선 시간표 관리(오른쪽) / insert 편집
     * @param vo
     * @return
     * @throws SQLException
     */
	public final int insertRouteScheduleInfo(BusTimeTableVO vo) throws SQLException {
		return busrouteDAO.insertRouteScheduleInfo(vo);
	}

    /**
     * 기반정보 - 노선 시간표 관리(오른쪽) / delete 편집
     * @param vo
     * @return
     * @throws SQLException
     */
	public final int deleteRouteScheduleInfo(BusTimeTableVO vo) throws SQLException {
		return busrouteDAO.deleteRouteScheduleInfo(vo);
	}

	/**
 	 * 매인 - 선택노선 경유지 목록 조회 
 	 * @param vo
 	 * @return
 	 * @throws SQLException
 	 */
 	/*public List<NodeVO> selectViaNodeList(NodeVO vo) throws SQLException {
 		return busrouteDAO.selectViaNodeList(vo);
 	} 	*/

 	/**
 	 * 분석/가공 - 가공 파라미터/파라미터 리스트
 	 * @return
 	 * @throws SQLException
 	 */
	public List<ProcessParameterVO> selectProcParamList(ProcessParameterVO vo) throws SQLException {
		return busrouteDAO.selectProcParamList(vo);
	}
	
 	/**
 	 * 분석/가공 - 가공 파라미터/노선 파라미터 리스트
 	 * @return
 	 * @throws SQLException
 	 */
	public List<ProcessParameterVO> selectRouteProcParamList(ProcessParameterVO vo) throws SQLException {
		return busrouteDAO.selectRouteProcParamList(vo);
	}  
	
	/**
 	 * 노선도 - 노선 목록 조회
 	 * @return
 	 * @throws SQLException
 	 */
	public List<TbAdmBusrouteVO> selectImgRouteList(TbAdmBusrouteVO vo) throws SQLException {
		return busrouteDAO.selectImgRouteList(vo);
	}
	
	public List<TbAdmNodeVO> selectRouteNodeList(TbAdmNodeVO vo) throws SQLException {
		return busrouteDAO.selectRouteNodeList(vo);
	}
	
	/**
 	 * 노선도 - 노선별 버스 위치 정보 조회
 	 * @return
 	 * @throws SQLException
 	 */
	public List<TbAdmNodeVO> selectBusOperInfoList(TbAdmNodeVO vo) throws SQLException {
		return busrouteDAO.selectBusOperInfoList(vo);
	}

	


	
	
}
