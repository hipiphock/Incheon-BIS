
var oMap;
var oPolyline = null;
var oInfoWindow = null;
var oCenterMarker = null;

var STOP_MAP = new HashMap();
var STOP_INFO_MAP = new HashMap();
var STOP_ARRAY = new Array();

var ALLSTOP_MAP = new HashMap();
var ALLSTOP_INFO_MAP = new HashMap();
var ALLSTOP_ARRAY = new Array();

var BIT_MAP = new HashMap();
var BIT_INFO_MAP = new HashMap();
var BIT_ARRAY = new Array();

var NODE_MAP = new HashMap();
var NODE_INFO_MAP = new HashMap();
var NODE_ARRAY = new Array();

var BUS_MAP = new HashMap();
var BUS_INFO_MAP = new HashMap();
var BUS_ARRAY = new Array();

var ALLBUS_MAP = new HashMap();
var ALLBUS_INFO_MAP = new HashMap();
var ALLBUS_ARRAY = new Array();

var mInterval = null; //선택 마커 없애는 타임아웃

var MARKER = {
		SELECT  : "./images/icon/map_icon1.gif", 	
		BUS 	: "./images/icon/map_icon_bus.png", 			
		ALLSTOP	: "./images/icon/map_icon2.png",
		STOP 	: "./images/icon/map_icon3.png",
		BIT 	: "./images/icon/map_icon4.png",
		BIT_ERR	: "./images/icon/map_icon4_error.png",
		NODE 	: "./images/icon/map_icon5.png",
		INCI 	: "./images/icon/map_icon6.png",
		SIZE1 : {		
			W : 24,
			H : 24
		},
		SIZE2 : {	
			W : 40,
			H : 40
		}
};

/********************
 * 지도 생성
 ********************/	
function createMap(id, callback) {
	var lat = 37.455908;
	var lng = 126.705304;
	
//	var lat = 36.4473599;
//	var lng = 127.1172026;
	
	var oPoint = new naver.maps.LatLng(lat, lng);
	var opts = {
					center : oPoint, // - 지도의 중심점을 나타냅니다.
					zoom : 11, // - 초기 줌 레벨
					minZoom : 7,
					maxZoom: 13
			   };
		
	oMap = new naver.maps.Map(id, opts);
	oInfoWindow = new naver.maps.InfoWindow();
//	arriveInfoPopup = new naver.maps.InfoWindow();
	
	setMapEvent(oMap, callback);
}


/*********************************************
 * MAP EVENT
 * - bounds_changed, center_changed
 * - dblclick, click, rightclick, drag, dragend, dragstart
 * - keydown, keyup, mousedown, mouseup
 * - mouseout, mouseover, mousemove
 **********************************************/
var eventTimer;
function setMapEvent(map, callback) {
	
	naver.maps.Event.addListener(map, 'bounds_changed', function(e) {
		var zoom = oMap.getZoom();
		var bound = getMapBounds();
		//TODO 일정 배율 이상 인 경우 전체 없애야함 
		// zoom < 11 전체 정류장 숨김 
		if(eventTimer) clearTimeout(eventTimer);
		if(callback) {
			eventTimer = setTimeout(function(){callback(zoom, bound);}, 300);
		}
		
		/*if(SHOW_FLAG.all_stop && SHOW_FLAG.all_node) {
			if(callback) {
				eventTimer = setTimeout(function(){callback("ALL", zoom);}, 300);
			}
		}else if(SHOW_FLAG.all_stop) {
			if(callback) {
				eventTimer = setTimeout(function(){callback("STOP", zoom);}, 300);
			}
		}else if(SHOW_FLAG.all_node) {
			if(callback) {
				eventTimer = setTimeout(function(){callback("NODE", zoom);}, 300);
			}
		}*/
	});
	
	naver.maps.Event.addListener(map, 'center_changed', function(e) {
		var pos = map.getCenter();
		$("#txt_lat").text(" 위도 " +pos.lat());
		$("#txt_lng").text(" 경도 " +pos.lng());
//        var marker = new naver.maps.Marker({
//            position: e.coord,
//            map: map
//        });
//
//        markerList.push(marker);
    });

    naver.maps.Event.addListener(map, 'keydown', function(e) {
//        var keyboardEvent = e.keyboardEvent,
//            keyCode = keyboardEvent.keyCode || keyboardEvent.which;
//
//        var ESC = 27;
//
//        if (keyCode === ESC) {
//            keyboardEvent.preventDefault();
//
//            for (var i=0, ii=markerList.length; i<ii; i++) {
//                markerList[i].setMap(null);
//            }
//
//            markerList = [];
//
//            menuLayer.hide();
//        }
    });

    naver.maps.Event.addListener(map, 'mousedown', function(e) {
//        menuLayer.hide();
    });

    naver.maps.Event.addListener(map, 'rightclick', function(e) {
//        var coordHtml = 'Coord: '+ e.coord +'<br />Point: '+ e.point +'<br />Offset: '+ e.offset;
//
//        menuLayer.show().css({
//            left: e.offset.x,
//            top: e.offset.y
//        }).html(coordHtml);
    });
}

function setBitEvent(marker) {
	naver.maps.Event.addListener(marker, "mouseover", function(e) {
		var data = BIT_INFO_MAP.get(e.overlay._nmarker_id);
		oInfoWindow.setContent(getBitContent(data));
    	oInfoWindow.open(oMap, marker);
	});
	
	naver.maps.Event.addListener(marker, "mouseout", function(e) {
	    if (oInfoWindow.getMap()) {
	    	oInfoWindow.close();
	    } 
	});
	
	naver.maps.Event.addListener(marker, "click", function(e) {
	    var data = BIT_INFO_MAP.get(e.overlay._nmarker_id);
	   
	    $(".bitMenu").attr("id", data.bstopid);
	    $(".bitMenu").attr("lat", data.lat);
	    $(".bitMenu").attr("lng", data.lng);
	    setTimeout(function(){$(".bitMenu").trigger("click");}, 50);
	});
}

function setNodeEvent(marker) {
	naver.maps.Event.addListener(marker, "mouseover", function(e) {
		var data = NODE_INFO_MAP.get(e.overlay._nmarker_id);
    	oInfoWindow.setContent(getNodeContent(data));
    	oInfoWindow.open(oMap, marker);
	});
	
	naver.maps.Event.addListener(marker, "mouseout", function(e) {
	    if (oInfoWindow.getMap()) {
	    	oInfoWindow.close();
	    } 
	});
}

function setBusEvent(marker) {
	naver.maps.Event.addListener(marker, "mouseover", function(e) {
		var data = BUS_INFO_MAP.get(e.overlay._nmarker_id);
    	oInfoWindow.setContent(getBusContent(data));
    	oInfoWindow.open(oMap, marker);
	});
	
	naver.maps.Event.addListener(marker, "mouseout", function(e) {
	    if (oInfoWindow.getMap()) {
	    	oInfoWindow.close();
	    } 
	});
}


function setStopEvent(marker) {
	naver.maps.Event.addListener(marker, "mouseover", function(e) {
		var data1 = ALLSTOP_INFO_MAP.get(e.overlay._nmarker_id);
		var data2 = STOP_INFO_MAP.get(e.overlay._nmarker_id);
		if(data1 != null) {
			oInfoWindow.setContent(getStopContent(data1));
		}else if(data2 != null) {
			oInfoWindow.setContent(getStopContent(data2));
		}
    	oInfoWindow.open(oMap, marker);
	});
	
	naver.maps.Event.addListener(marker, "mouseout", function(e) {
	    if (oInfoWindow.getMap()) {
	    	oInfoWindow.close();
	    } 
	});
	
	naver.maps.Event.addListener(marker, "click", function(e) {
		var data1 = ALLSTOP_INFO_MAP.get(e.overlay._nmarker_id);
		var data2 = STOP_INFO_MAP.get(e.overlay._nmarker_id);
		if(data1) {
			showStopInfoPop(data1.bstopid, data1.lat, data1.lng);
		}else if(data2){
			showStopInfoPop(data2.bstopid, data2.lat, data2.lng);
		}
	});
}

/*************
 * resize map 
 *************/
function resizeMap() {
	$(window).resize(function() {
		var mapWidth = $(".map_con").width();
		var mapHeight = $(".map_con").height();
		oMap.setSize(new naver.maps.Size(mapWidth, mapHeight));
	});
}

/**********************************
 * bound.getSW().lat(), lng()
 * bound.getNE().lat(), lng()
 **********************************/
function getMapBounds() {
	return oMap.getBounds();
}

function getMap() {
	return oMap;
}

/******************
 * 노선 경로 그리기
 * @param list
 ******************/
function drawRoutePolyline(list){
    
    var latLngArray = new Array();
    var boundArray = new Array();
    
    var minX = 35;
	var minY = 125;
	var maxX = 38;
	var maxY = 128;
    
    $.each(list, function(index, value) {
    
    	latLngArray.push(new naver.maps.LatLng(value.lat, value.lng));    	
    	
    	if(index == 0 && value.lat != 0 && value.lng != 0) {
    		minX = value.lat;
    		maxX = value.lat;
    		minY = value.lng;
    		maxY = value.lng;
    	}else if(value.lat != 0 && value.lng != 0) {
    		minX = Math.min(minX, value.lat);
    		maxX = Math.max(maxX, value.lat);
    		minY = Math.min(minY, value.lng);
    		maxY = Math.max(maxY, value.lng);
    	}
	});
    
    if(oPolyline != null) oPolyline.setMap(null);
    
    oPolyline = new naver.maps.Polyline({	
   	 strokeColor : '#FE2E2E',
		 strokeWidth : 3,
		 strokeOpacity : 0.8,
		 strokeStyle : 'solid',
	     path: latLngArray
	});
    
    oPolyline.setMap(oMap);
    
	boundArray.push(new naver.maps.LatLng(minX, maxY));
    boundArray.push(new naver.maps.LatLng(maxX, minY));
    oMap.fitBounds(boundArray);
}

/******************
 * 정류장 그리기
 * @param list
 * @param flag : true(전체정류장), false(노선정류장)
 *****************/
function drawStopMarkers(list, flag){
	
	var markerOptions = {
	    icon: {
    		url    : flag == true ? MARKER.ALLSTOP: MARKER.STOP,
    		size   : new naver.maps.Size(MARKER.SIZE1.W, MARKER.SIZE1.H),
    		anchor : new naver.maps.Point(MARKER.SIZE1.W / 2, MARKER.SIZE1.H / 2)
	    }
	};
	
	if(flag) {
		if(ALLSTOP_ARRAY != null && ALLSTOP_ARRAY.length > 0) {
			for(var i=0; i < ALLSTOP_ARRAY.length; i++) {
				ALLSTOP_ARRAY[i].setMap(null);
			}
		}
		ALLSTOP_MAP.clear();
		ALLSTOP_INFO_MAP.clear();
		ALLSTOP_ARRAY = [];
		
		var idx = 0;
	    $.each(list, function(index, value) {
	    	if(value.bstopid == "") return true; //continue
	    	var compareMaker = STOP_MAP.get(value.bstopid); //선택 정류장 맵에 존재 여부 확인
	    	if(compareMaker == null) {
	    		ALLSTOP_ARRAY[idx] = new naver.maps.Marker(markerOptions);
	    		ALLSTOP_ARRAY[idx].setTitle(value.bstopnm);
	    		ALLSTOP_ARRAY[idx].setPosition(new naver.maps.LatLng(value.lat, value.lng));

	    		ALLSTOP_MAP.put(value.bstopid, ALLSTOP_ARRAY[idx]);
	    		ALLSTOP_INFO_MAP.put(ALLSTOP_ARRAY[idx]._nmarker_id, value);
	    		setStopEvent(ALLSTOP_ARRAY[idx]);
	    		
	    		ALLSTOP_ARRAY[idx].setMap(oMap);
	    		idx++;
	    	}
	    });
	}else {
		if(STOP_ARRAY != null && STOP_ARRAY.length > 0) {
			for(var i=0; i < STOP_ARRAY.length; i++) {
				STOP_ARRAY[i].setMap(null);
			}
		}
		STOP_MAP.clear();
		STOP_INFO_MAP.clear();
		STOP_ARRAY = [];
		
		var idx = 0;
	    $.each(list, function(index, value) {
	    	if(value.bstopid == "") return true; //continue
	    	var compareMaker = STOP_MAP.get(value.bstopid);
	    	if(compareMaker == null) {
	    		STOP_ARRAY[idx] = new naver.maps.Marker(markerOptions);
	    		STOP_ARRAY[idx].setTitle(value.bstopnm);
	    		STOP_ARRAY[idx].setPosition(new naver.maps.LatLng(value.lat, value.lng));

	    		STOP_MAP.put(value.bstopid, STOP_ARRAY[idx]);
	    		STOP_INFO_MAP.put(STOP_ARRAY[idx]._nmarker_id, value);
	    		setStopEvent(STOP_ARRAY[idx]);
	    		
	    		STOP_ARRAY[idx].setMap(oMap);
	    		idx++;
	    	}
	    });
	}
	
   
}

/******************
 * 노드 그리기
 * @param list
 *****************/
function drawNodeMarkers(list){
	
	if(NODE_ARRAY != null && NODE_ARRAY.length > 0) {
		for(var i=0; i < NODE_ARRAY.length; i++) {
			NODE_ARRAY[i].setMap(null);
		}
	}
	NODE_MAP.clear();
	NODE_INFO_MAP.clear();
	NODE_ARRAY = [];
    var markerOptions = {
    	    icon: {
        		url    : MARKER.NODE,
        		size   : new naver.maps.Size(MARKER.SIZE1.W, MARKER.SIZE1.H),
        		anchor : new naver.maps.Point(MARKER.SIZE1.W / 2, MARKER.SIZE1.H / 2)
    	    }
    	};
    var idx = 0;
    $.each(list, function(index, value) {
    	var compareMaker = NODE_MAP.get(value.nodeid);
    	if(compareMaker == null) {
    		NODE_ARRAY[idx] = new naver.maps.Marker(markerOptions);
    		NODE_ARRAY[idx].setTitle(value.nodenm);
    		NODE_ARRAY[idx].setPosition(new naver.maps.LatLng(value.lat, value.lng));
    		
    		NODE_MAP.put(value.nodeid, NODE_ARRAY[idx]);
    		NODE_INFO_MAP.put(NODE_ARRAY[idx]._nmarker_id, value);
    		setNodeEvent(NODE_ARRAY[idx]);

    		NODE_ARRAY[idx].setMap(oMap);
    	
    		idx++;
    	}
    });
}

/******************
 * 버스 그리기
 * @param list
 *****************/
function drawBusMarkers(list){
	
	if(BUS_ARRAY != null && BUS_ARRAY.length > 0) {
		for(var i=0; i < BUS_ARRAY.length; i++) {
			BUS_ARRAY[i].setMap(null);
		}
	}
	BUS_MAP.clear();
	BUS_INFO_MAP.clear();
	BUS_ARRAY = [];
	
    var markerOptions = {
    	    icon: {
        		url    : MARKER.BUS,
        		size   : new naver.maps.Size(MARKER.SIZE1.W, MARKER.SIZE1.H),
        		anchor : new naver.maps.Point(MARKER.SIZE1.W / 2, MARKER.SIZE1.H / 2)
    	    }
    	};
    $.each(list, function(index, value) {
    	
		BUS_ARRAY[index] = new naver.maps.Marker(markerOptions);
		BUS_ARRAY[index].setTitle(value.carregno);
		BUS_ARRAY[index].setPosition(new naver.maps.LatLng(value.lat, value.lng));
		
		BUS_MAP.put(value.veh_id, BUS_ARRAY[index]);
		BUS_INFO_MAP.put(BUS_ARRAY[index]._nmarker_id, value);
		setBusEvent(BUS_ARRAY[index]);

		BUS_ARRAY[index].setMap(oMap);
    });
}

/******************
 * BIT 그리기
 * @param list
 *****************/
function drawBitMarkers(list) {
	
	if(BIT_ARRAY != null && BIT_ARRAY.length > 0) {
		for(var i=0; i < BIT_ARRAY.length; i++) {
			BIT_ARRAY[i].setMap(null);
		}
	}
	
	BIT_MAP.clear();
	BIT_INFO_MAP.clear();
	BIT_ARRAY = [];
	
    var img;
    var idx = 0;
    $.each(list, function(index, value) {
    	if(value.comm_statyn == "1")	img = MARKER.BIT;   
    	else                        img = MARKER.BIT_ERR;

    	var markerOptions = {
    			icon: {
    				url    : img,
    				size   : new naver.maps.Size(MARKER.SIZE1.W, MARKER.SIZE1.H),
    				anchor : new naver.maps.Point(MARKER.SIZE1.W / 2, MARKER.SIZE1.H / 2)
    			}
    	};
    	
    	var compareMaker = BIT_MAP.get(value.bitid);
    	
    	if(compareMaker == null) {
    		BIT_ARRAY[idx] = new naver.maps.Marker(markerOptions);
    		BIT_ARRAY[idx].setTitle(value.bstopnm);
    		BIT_ARRAY[idx].setPosition(new naver.maps.LatLng(value.lat, value.lng));
    		
    		BIT_MAP.put(value.node_id, BIT_ARRAY[idx]);
    		BIT_INFO_MAP.put(BIT_ARRAY[idx]._nmarker_id, value);
    		setBitEvent(BIT_ARRAY[idx]);

    		BIT_ARRAY[idx].setMap(oMap);
    	
    		idx++;
    	}
    });
}

/**********************************
 * @param type BIT, STOP, NODE, BUS
 **********************************/
function showMarkers(type) {
	switch (type) {
	case "BIT":
		if(BIT_ARRAY != null && BIT_ARRAY.length > 0) {
			for(var i=0; i < BIT_ARRAY.length; i++) {
				BIT_ARRAY[i].setMap(oMap);
			}
		}
		break;

	default:
		break;
	}
}

function hideMarkers(type) {
	switch (type) {
	case "BIT":
		if(BIT_ARRAY != null && BIT_ARRAY.length > 0) {
			for(var i=0; i < BIT_ARRAY.length; i++) {
				BIT_ARRAY[i].setMap(null);
			}
		}
		break;
	case "ALLSTOP":
		if(ALLSTOP_ARRAY != null && ALLSTOP_ARRAY.length > 0) {
			for(var i=0; i < ALLSTOP_ARRAY.length; i++) {
				ALLSTOP_ARRAY[i].setMap(null);
			}
		}
		ALLSTOP_ARRAY = [];
		ALLSTOP_MAP.clear();
		ALLSTOP_INFO_MAP.clear();
		break;
	case "STOP":
		if(STOP_ARRAY != null && STOP_ARRAY.length > 0) {
			for(var i=0; i < STOP_ARRAY.length; i++) {
				STOP_ARRAY[i].setMap(null);
			}
		}
		STOP_ARRAY = [];
		STOP_MAP.clear();
		STOP_INFO_MAP.clear();
		break;
	case "NODE":
		if(NODE_ARRAY != null && NODE_ARRAY.length > 0) {
			for(var i=0; i < NODE_ARRAY.length; i++) {
				NODE_ARRAY[i].setMap(null);
			}
		}
		NODE_ARRAY = [];
		NODE_MAP.clear();
		NODE_INFO_MAP.clear();
		break;
	case "BUS":
		if(BUS_ARRAY != null && BUS_ARRAY.length > 0) {
			for(var i=0; i < BUS_ARRAY.length; i++) {
				BUS_ARRAY[i].setMap(null);
			}
		}
		BUS_ARRAY = [];
		BUS_MAP.clear();
		BUS_INFO_MAP.clear();
		break;
		
	default:
		break;
	}
}

function setCenterPosition(lat, lng) {
	oMap.setCenter(new naver.maps.LatLng(lat, lng));
	oMap.setZoom(12);
	drawCenter(lat, lng);
}

function drawCenter(lat, lng){
	if(mInterval) clearTimeout(mInterval);
	if(oCenterMarker == null) {
		var markerOptions = {
				icon: {
					url    : MARKER.SELECT,
					size   : new naver.maps.Size(MARKER.SIZE2.W, MARKER.SIZE2.H),
					anchor : new naver.maps.Point(MARKER.SIZE2.W / 2, MARKER.SIZE2.H / 2)
				}
		};
		oCenterMarker = new naver.maps.Marker(markerOptions);
	}

	oCenterMarker.setPosition(new naver.maps.LatLng(lat, lng));
    oCenterMarker.setMap(oMap);
    
    mInterval = setTimeout(function(){
    	oCenterMarker.setMap(null);
    }, 4000);
}

function clearOverlay() {
	if(mInterval) clearTimeout(mInterval);
	if(oCenterMarker && oCenterMarker.getMap()) oCenterMarker.setMap(null);
	
	if(STOP_ARRAY != null && STOP_ARRAY.length > 0) {
		for(var i=0; i < STOP_ARRAY.length; i++) {
			STOP_ARRAY[i].setMap(null);
		}
	}
	STOP_MAP.clear();
	STOP_ARRAY = [];
	
	oPolyline.setMap(null);
	oPolyline = null;

	if(BUS_ARRAY != null && BUS_ARRAY.length > 0) {
		for(var i=0; i < BUS_ARRAY.length; i++) {
			BUS_ARRAY[i].setMap(null);
		}
	}
	BUS_MAP.clear();
	BUS_ARRAY = [];

}

/**********************
 * infowindow content
 *********************/
function getBitContent(data) {
	var strTemp = "<div class='map_pop pop_bitname'>";
	if(data.comm_statyn != "1") {
		strTemp += "<h1 class='red'>"+data.bstopnm+"</h1>";
	}else {
		strTemp += "<h1 class='green'>"+data.bstopnm+"</h1>";
	}
    strTemp += "<table class='map_pop_table'>";
	strTemp += "<tr>";
	strTemp += "<th>종류</th>";
	strTemp += "<td>"+data.cdnm+"</td>";
	strTemp += "</tr>";
	strTemp += "<tr>";
	strTemp += "<th>아이디</th>";
	strTemp += "<td>"+data.bitid+"</td>";
	strTemp += "</tr>";
	strTemp += "<tr>";
	strTemp += "<th>모바일</th>";
	strTemp += "<td>"+data.short_bstopid+"</td>";
	strTemp += "</tr>";
	strTemp += "<tr>";
	strTemp += "<th>온도</th>";
	strTemp += "<td>"+data.temper+"</td>";
	strTemp += "</tr>";
	strTemp += "<tr>";
	strTemp += "<th>도어상태</th>";
	strTemp += "<td>"+((data.door_onoff=="0") ? "닫힘":"열림")+"</td>";
	strTemp += "</tr>";
	strTemp += "<tr>";
	strTemp += "<th>화면상태</th>";
	strTemp += "<td>"+((data.disp_state=="1") ? "켜짐":"꺼짐")+"</td>";
	strTemp += "</tr>";
    strTemp += "</table>";
	strTemp += "</div>";
	
	return strTemp;
}  

function getNodeContent(data) {
	var strTemp = "<div class='map_pop pop_gyo'>";
    strTemp += "<h1>"+data.node_name+"</h1>";
	strTemp += "<table class='map_pop_table'>";
	strTemp += "<tr>";
	strTemp += "<th>표준ID</th>";
	strTemp += "<td>"+data.std_node_id+"</td>";
	strTemp += "</tr> ";
	strTemp += "</table>";
	strTemp += "</div>";
	
	return strTemp;
}  

function getStopContent(data) {
	var strTemp = "<div class='map_pop pop_busname'>";
    strTemp += "<h1>"+data.bstopnm+"</h1>";
	strTemp += "<table class='map_pop_table'>";
	strTemp += "<tr>";
	strTemp += "<th>모바일</th>";
	strTemp += "<td>"+data.short_bstopid+"</td>";
	strTemp += "</tr> ";
	strTemp += "<th>표준ID</th>";
	strTemp += "<td>"+data.bstopid+"</td>";
	strTemp += "</tr> ";
	strTemp += "</table>";
	strTemp += "</div>";

	return strTemp;
}  

function getBusContent(data) {
	var strTemp = "<div class='map_pop pop_busnumber'>";
    strTemp += "<h1>"+data.carregno+"</h1>";
	strTemp += "<table class='map_pop_table'>";
	strTemp += "<tr>";
	strTemp += "<th>노선ID</th>";
	strTemp += "<td>"+data.routeid+"</td>";
	strTemp += "</tr> ";
	strTemp += "<th>노선번호</th>";
	strTemp += "<td>"+data.routeno+"</td>";
	strTemp += "</tr> ";
	strTemp += "<th>속도</th>";
	strTemp += "<td>"+data.runspd+"</td>";
	strTemp += "</tr> ";
	strTemp += "</table>";
	strTemp += "</div>";
	
	return strTemp;
}  



