package com.bis.dao;

import java.sql.SQLException;
import java.util.List;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

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


/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 
 * Class Name 	  : BusRouteDAO.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2017.09.20	    황중모                       최초생성
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
@Repository("busrouteDAO")
public class BusrouteDAO {

	@Resource
    private SqlSessionTemplate sqlSession;
	
	public List<TbAdmBusrouteVO> selectBusOperList(TbAdmBusrouteVO vo) throws SQLException {
		return sqlSession.selectList("ROUTE.selectBusOperList", vo); 
	}
	
	/**
	 * 	v0110 도착예정시간조회  - 예정시간 누적 계산 출력 리스트
	 */
	public List<TbAdmNodeVO> selectArrivalTime(TbAdmNodeVO vo) throws SQLException {
		return sqlSession.selectList("ROUTE.selectArrivalTime", vo); 
	}
	
	/**
	 * 경로에 대한 출발/도착 정류소 정보
	 * @return 
	 * @throws SQLException
	 */
	public List<TbAdmNodeVO> selectRoutePNode() throws SQLException {
		return sqlSession.selectList("ROUTE.selectRoutePNode");
	}
	
	
	/**
	 * 도로 조회
	 * @return
	 * @throws SQLException
	 */
	public List<TbAdmBusrouteVO> selectRoadList() throws SQLException {
		return sqlSession.selectList("ROUTE.selectRoadList");
	}
	
 	/**
 	 * 노선 검색 팝업 목록
 	 * @return
 	 * @throws SQLException
 	 */
	public List<TbAdmBusrouteVO> selectRouteList(TbAdmBusrouteVO vo) throws SQLException {
		return sqlSession.selectList("ROUTE.selectRouteList", vo);
	}

	/**
     * 기반정보 - 노선  정보 조회 
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbAdmBusrouteVO> selectRouteInfoList(TbAdmBusrouteVO vo) throws SQLException {
    	return sqlSession.selectList("ROUTE.selectRouteInfoList", vo);
    }
	
	/**
	 * 전체버스  조회
	 * @param vo
	 * @return
	 * @throws SQLException
	 */
	public List<TbAdmBusrouteVO> selectMapBusList(TbAdmBusrouteVO vo) throws SQLException {
		return sqlSession.selectList("ROUTE.selectMapBusList", vo);
	}
	
	/**
     * 기반정보 - 경유정류장(노드) 조회 
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbAdmNodeVO> selectViaNodeList(TbAdmNodeVO vo) throws SQLException {
    	return sqlSession.selectList("ROUTE.selectViaNodeList", vo);
    } 
    
    /**
     * 선택 노선의 버스위치 조회 
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<TbAdmBusrouteVO> selectBusLocList(TbAdmBusrouteVO vo) throws SQLException {
    	return sqlSession.selectList("ROUTE.selectBusLocList", vo);
    }
 	
 	/**
 	 * 메인- 선택 노선 정보
 	 * @return
 	 * @throws SQLException
 	 */
 	public TbAdmBusrouteVO selectRouteInfo(TbAdmBusrouteVO vo) throws SQLException {		
 		return sqlSession.selectOne("ROUTE.selectRouteInfo", vo);
 	}
 	
 	/**
 	 * 기반정보 - 차량 정보 조회 
 	 * @param vo
 	 * @return
 	 * @throws SQLException
 	 * author 김주암
 	 */
 	public List<TbAdmBusVO> selectVehicleList(TbAdmBusVO vo) throws SQLException {
 		return sqlSession.selectList("ROUTE.selectVehicleList", vo);
 	} 	
 	    
	/**
     * 기반정보 - 노선시간표관리>노선 리스트(왼쪽)
     * @param vo
     * @return
     * @throws SQLException
	 * author 김주암
     */
 	public List<TbAdmBusrouteVO> selectRouteScheduleList(TbAdmBusrouteVO vo) throws SQLException {		
 		return sqlSession.selectList("ROUTE.selectRouteScheduleList", vo);
 	}

	/**
     * 기반정보 - 노선시간표관리>노선 리스트(오른쪽)
     * @param vo
     * @return
     * @throws SQLException
	 * author 김주암
     */
 	public List<TbAdmRouteschedVO> selectRouteScheduleInfo(TbAdmRouteschedVO vo) throws SQLException {
 		return sqlSession.selectList("ROUTE.selectRouteScheduleInfo", vo);
 	}
 	

	
	/**
	 * 버스운행관리 / 버스운행관제 / 버스공지사항전송
	 * @return
	 * added by 박주언
	 */
	public List<TbAdmBusCompVO> selectCompList() throws SQLException{
		return sqlSession.selectList("ROUTE.selectCompList");
	}

	/**
	 * 버스운행관리 / 버스운행관제 / 버스공지사항전송
	 * @return
	 * added by 박주언
	 */
	public List<TbAdmRouteToComVO> selectRouteListbyCompany(TbAdmRouteToComVO vo) throws SQLException{
		return sqlSession.selectList("ROUTE.selectRouteListbyCompany", vo);
	}

	/**
	 * 버스운행관리 / 버스운행관제 / 버스공지사항전송
	 * @return
	 * added by 박주언
	 */
	public List<TbAdmBusrouteVO> selectBusListtoNotify(TbAdmBusrouteVO vo) throws SQLException{
		return sqlSession.selectList("ROUTE.selectBusListtoNotify", vo);
	}
 	
 	
	/**
     * 노선 카테고리 리스트
     * @param vo
     * @return
     * @throws SQLException
     */
 	public List<TbAdmBusrouteVO> selectRouteCateList(TbAdmBusrouteVO vo) {
		return sqlSession.selectList("ROUTE.selectRouteCateList", vo);
	}
 	
	/**
     * 노선기초정보관리 노선검색결과
     * @param vo
     * @return
     * @throws SQLException
     */
 	public List<TbAdmBusrouteVO> selectRouteBasicInfoList(TbAdmBusrouteVO vo) {
 		return sqlSession.selectList("ROUTE.selectRouteBasicInfoList", vo);
	}

 	/**
     * 노선배정버스회사
     * @param vo
     * @return
     * @throws SQLException
     */
	public List<TbAdmBusrouteVO> selectRouteAllotList(TbAdmBusrouteVO vo) {
		return sqlSession.selectList("ROUTE.selectRouteAllotList", vo);
	}

	/**
     * 노선운행스케쥴 
     * @param vo
     * @return
     * @throws SQLException
     */
	public List<TbAdmRouteschedVO> selectRouteRunScaduleList(TbAdmRouteschedVO vo) {
		return sqlSession.selectList("ROUTE.selectRouteRunScaduleList", vo);
	}

	/**
     * 분기노선정보
     * @param vo
     * @return
     * @throws SQLException
     */
	public List<TbAdmBusrouteVO> selectRouteBranchList(TbAdmBusrouteVO vo) {
		return sqlSession.selectList("ROUTE.selectRouteBranchList", vo);
	}
 	
	/**
     * 노선기초정보수정
     * @param vo
     * @return
     * @throws SQLException
     */
	public int updateRouteBasicInfo(TbAdmBusrouteVO vo) {
		return sqlSession.update("ROUTE.updateRouteBasicInfo", vo);
	}
 	
	/**
     * 분기노선 추가
     * @param vo
     * @return
     * @throws SQLException
     */
	public int insertBranchRoute(TbAdmBusrouteVO vo) {
		return sqlSession.insert("ROUTE.insertBranchRoute", vo);
	}
	
	/**
     * 분기노선 삭제
     * @param vo
     * @return
     * @throws SQLException
     */
	public int deleteRouteBranch(TbAdmBusrouteVO vo) {
		return sqlSession.delete("ROUTE.deleteRouteBranch", vo);
	}

	/**
     * 노선굴곡도/경합율조회
     * @param vo
     * @return
     * @throws SQLException
     */
	public List<TbAdmBusrouteVO> selectRouteRateCurv(TbAdmBusrouteVO vo) {
		return sqlSession.selectList("ROUTE.selectRouteRateCurv", vo);
	}
	
	/**
     * v0505 하단 노선정보데이터
     * @param vo
     * @return
     * @throws SQLException
     */
	public TbAdmBusrouteVO selectRouteInfoData(TbAdmBusrouteVO vo) {
		return sqlSession.selectOne("ROUTE.selectRouteInfoData", vo);
	}
	
	/**
     * 노선광역코드별목록
     * @param vo
     * @return
     * @throws SQLException
     */
	public List<TbAdmBusrouteVO> selectRouteWideareaList(TbAdmBusrouteVO vo) {
		return sqlSession.selectList("ROUTE.selectRouteWideareaList", vo);
	}
	
	/**
     * 노선별경유노드목록
     * @param vo
     * @return
     * @throws SQLException
     */
	public List<TbAdmNodeVO> selectRouteViaNodeList(TbAdmNodeVO vo) {
		return sqlSession.selectList("ROUTE.selectRouteViaNodeList", vo);
	}
	
	/**
     * 노선버전관리 - 노선버전검색
     * @param vo
     * @return
     * @throws SQLException
     */
	public List<TbAdhRouteversionpdVO> selectRouteVersionList(TbAdhRouteversionpdVO vo) {
		return sqlSession.selectList("ROUTE.selectRouteVersionList", vo);
	}
	
	/**
     * 노선버전관리 - 노선버전입력
     * @param vo
     * @return
     * @throws SQLException
     */
	public int insertRouteVersionList(TbAdhRouteversionpdVO vo) {
		return sqlSession.insert("ROUTE.insertRouteVersionList", vo);
	}
	
	/**
     * 노선버전관리 - 노선버전수정
     * @param vo
     * @return
     * @throws SQLException
     */
	public int updateRouteVersionList(TbAdhRouteversionpdVO vo) {
		return sqlSession.update("ROUTE.updateRouteVersionList", vo);
	}
	
	/**
     * 노선버전관리 - 노선버전삭제
     * @param vo
     * @return
     * @throws SQLException
     */
	public int deleteRouteVersionList(TbAdhRouteversionpdVO vo) {
		return sqlSession.delete("ROUTE.deleteRouteVersionList",vo);
	}

	/**
     * 보고서-노선현황 리스트
     * @param vo
     * @return
     * @throws SQLException
     */
	public List<TbAdmBusrouteVO> selectCurrentStateList(TbAdmBusrouteVO vo) {
		return sqlSession.selectList("ROUTE.selectCurrentStateList",vo);
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
    	return sqlSession.selectList("ROUTE.selectRouteVtxList", vo);
    }

    /**
     * 기반정보 - 경로정보 상세(위) 조회 
     * @param vo
     * @return
     * @throws SQLException
     */
    public List<BusrouteVO> selectExploreUpList(BusrouteVO vo) throws SQLException {
    	return sqlSession.selectList("ROUTE.selectExploreUpList", vo);
    }

	/**
     * 기반정보 - 노선시간표관리>노선 리스트(오른쪽) / insert 편집
     * @param vo
     * @return
     * @throws SQLException
	 * author 김주암
     */
	public final int insertRouteScheduleInfo(BusTimeTableVO vo) {
		return sqlSession.insert("ROUTE.insertRouteScheduleInfo", vo);
	}

	/**
     * 기반정보 - 노선시간표관리>노선 리스트(오른쪽) / delete 편집
     * @param vo
     * @return
     * @throws SQLException
	 * author 김주암
     */
	public final int deleteRouteScheduleInfo(BusTimeTableVO vo) {
		return sqlSession.delete("ROUTE.deleteRouteScheduleInfo", vo);
	} 	
 	
 	/**
 	 * 분석/가공 - 가공 파라미터/파라미터 리스트
 	 * @return
 	 * @throws SQLException
 	 */
	public List<ProcessParameterVO> selectProcParamList(ProcessParameterVO vo) throws SQLException {
		return sqlSession.selectList("ROUTE.selectProcParamList", vo);
	}

 	/**
 	 * 분석/가공 - 가공 파라미터/노선 파라미터 리스트
 	 * @return
 	 * @throws SQLException
 	 */
	public List<ProcessParameterVO> selectRouteProcParamList(ProcessParameterVO vo) throws SQLException {
		return sqlSession.selectList("ROUTE.selectRouteProcParamList", vo);
	}

	/**
 	 * 노선도 - 노선 목록 조회
 	 * @return
 	 * @throws SQLException
 	 */
	public List<TbAdmBusrouteVO> selectImgRouteList(TbAdmBusrouteVO vo) throws SQLException {
		return sqlSession.selectList("ROUTE.selectImgRouteList", vo);
	}
	
	/**
 	 * 노선도 - 경유 노드 목록 조회
 	 * @return
 	 * @throws SQLException
 	 */
	public List<TbAdmNodeVO> selectRouteNodeList(TbAdmNodeVO vo) throws SQLException {
		return sqlSession.selectList("ROUTE.selectRouteNodeList", vo);
	}
	
	/**
 	 * 노선도 - 노선별 버스 위치 정보 조회
 	 * @return
 	 * @throws SQLException
 	 */
	public List<TbAdmNodeVO> selectBusOperInfoList(TbAdmNodeVO vo) throws SQLException {
		return sqlSession.selectList("ROUTE.selectBusOperInfoList", vo);
	}

	
}
