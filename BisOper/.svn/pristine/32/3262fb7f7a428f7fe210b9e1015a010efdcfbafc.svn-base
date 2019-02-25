$(document).ready(function(){
	initBox();
	initGrid();
	initEvent();
});

function initBox(){
	ajaxCall("./route/selectBitParamDepth2List.do", {cate_flag:"1"}, null, createSelectList, null);
	function createSelectList(data){
		var select = document.getElementById("road_selector");
		var parsedData = data.roadnm;
		for(var i in parsedData){
			var opt = document.createElement("option");
			opt.value = parsedData[i].roadnm;
			opt.text = parsedData[i].roadnm;
			select.appendChild(opt);
		}
	}
}

function initGrid(){
	
}

function initEvent(){
	// 새로고침
	$("#btn_refresh").click(function(){
		location.reload();
	})
}