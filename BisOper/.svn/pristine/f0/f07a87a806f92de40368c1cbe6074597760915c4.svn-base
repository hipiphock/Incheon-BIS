$(document).ready(function(){
	appendLoader("조희중..")
	ajaxCall("./sys/selectCodeList.do", {cdcategid:'BITTPCD'}, null, load_cd_list, null);
	ajaxCall("./bit/selectBitInstallLocList.do",null, null, load_install_list,null); 
	initGrid(); 
	initEvent(); 
});

var selected_lat;
var selected_lng;

function load_cd_list(data) {
	$.each(data.resultList, function(index, value){
		var temp = document.createElement('option');
		temp.innerHTML = value.cdnm; 
		temp.value = value.cd; 
		$("#cd_option").append(temp);
	});
}

function load_install_list(data) {
	$.each(data.resultList, function(index, value){
		var temp = document.createElement('option');
		temp.innerHTML = value.installloc; 
		temp.value = value.bitid; 
		$("#installloc_option").append(temp);
	});
}

var models = [
              {label:"관리ID",		name:"cpviewbitid",	index:"cpviewbitid",	width: "75", align:"center", sorttype:"text"},
              {label:"안내기ID",		name:"bitid",		index:"bitid",			width: "75", align:"center", sorttype:"text"},
              {label:"설치장소",		name:"bstopnm",		index:"bstopnm",		width: "100", align:"center", sorttype:"text"},
              {label:"안내기유형",		name:"bittp",		index:"bittp",			width: "150", align:"center", sorttype:"text"},
         
              {name:"posy",		index:"posy",	  hidden: true},
              {name:"posx",		index:"posx",	  hidden: true}
              ];

function initGrid() {
	makeMultiGrid("#main_table", models, 300, "resultList",onSelected,onComplete,null ); 
	
	function onSelected(data) {
		var rowData = $("#main_table").jqGrid('getRowData',data);
		selected_lat = rowData.posy;
		selected_lng = rowData.posx;
	}
	
	function onComplete(data) { 
		hideLoader(); 
		$(".sub_title").find("h3").text("안내기 검색결과 "+data.records+ " 건");
	}
	
	$(window).bind('resize',function() {
		$("#main_table").jqGrid('setGridHeight', $(".main_chart").height()-55);
		$("#main_table").jqGrid('setGridWidth', $(".main_chart").width());
	}).trigger('resize');
	
	$("#main_table").jqGrid('filterToolbar',
    {
					autosearch: true,
					stringResult: true,
					searchOnEnter: true,
					defaultSearch: "cn"
    });
	setFilter("main_table", true);
}

function initEvent() {
	$("#btn_search").click(function () {
		showLoader(); 
		var bittpcd = $("#cd_option option:selected").val(); 
		var bitid = $("#installloc_option option:selected").val(); 
		var input_bitid = $("#input").val(); 
		
		if(bittpcd == "-1")
			bittpcd = ""; 
		if(input_bitid =="" && bitid == "-1")
			bitid = ""; 
		else if(input_bitid =="" || bitid == "-1"){
			if(bitid == "-1")
				bitid = input_bitid; 
		}
		reloadGrid("#main_table", "./bit/selectBitLocation.do",{bittpcd:bittpcd, bitid:bitid},"resultList");
	});
	
	$(".topBtn_map").click(function () {
		if(selected_lat == null && selected_lng == null) {
			showAlert("안내기를 선택하세요.");
		}
		else {
			opener.setCenterPosition(selected_lat, selected_lng);
			selected_lat = null;
			selected_lng = null;
		}
	});
}