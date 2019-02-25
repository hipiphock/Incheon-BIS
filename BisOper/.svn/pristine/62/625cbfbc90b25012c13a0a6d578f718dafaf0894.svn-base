$(document).ready(function(){
	initBox();
	initGrid();
	initEvent();
});


//basic model for bottom layer
var basic_model = [
	{label:"선택",	name:"checkbox",index:"checkbox",			width:"30",	sortable:false, editable: true, align:"center",
		formatter:'checkbox',	edittype:"checkbox", editoptions:{value:'Y:N', defaultValue:'N'}},
	{label:"구분",	name:"",	index:"",	width:"120",	align:"center",		sorttype:"text"}
];

//function for initalizing boxes - first, second
function initBox(){
	// initializing first box - bus company
	ajaxCall("./route/selectCompList.do", null, null, dealwithCompany, null);
	// initializing second box - bus route
	ajaxCall("./route/selectRouteList.do", null, null, dealwithRoute, null);
}

//function for company selection box
function dealwithCompany(data){
	var parsedData = data.companyList;
	var select = document.getElementById("busCompany");
	for(var i in parsedData){
		var opt = document.createElement("option");
		opt.value = parsedData[i].compid;
		opt.text = parsedData[i].compnm;
		select.appendChild(opt);
	}
}

//function for route selection box
function dealwithRoute(data){	
	var select = document.getElementById("busRoute");
	select.disabled = true;
	select.options.length = 0;
	var opt = document.createElement("option");
	opt.value = "";
	opt.text = "전체";
	select.appendChild(opt);
	select.options[0].selected = "selected";
	var parsedData = data.resultList;
	for(var i in parsedData){
		var opt = document.createElement("option");
		opt.value = parsedData[i].routeid;
		opt.text = parsedData[i].routeno;
		select.appendChild(opt);
	}
	select.disabled = false;
}

function initGrid(){
	
	var option = $("#busCompany option:selected").val();
	var param = {
//		compid:		option,
//		start_dt:	$("#start_date").val(),
//		end_dt:		$("#end_date").val(),
	}
	
}

function initEvent(){
	
	$("#date_month_selector").change(function(){
		if($("#date_month_selector option:selected").val() == 0){
			var to_date = document.getElementsByClassName("time_type");
			to_date[0].type = "date";
			to_date[1].type = "date";
		}
		else{
			var to_month = document.getElementsByClassName("time_type");
			to_month[0].type = "month";
			to_month[1].type = "month";
		}
	});
	
	// when you change company
	$("#busCompany").change(function(){
		var compID = $("#busCompany option:selected").val();
		if(compID == ""){
			ajaxCall("./route/selectRouteList.do", null, null, dealwithRoute, null);
		}
		else ajaxCall("./route/selectRouteListbyCompany.do", {compid:compID}, null, refreshRoute, null);
		function refreshRoute(data){
			dealwithRoute(data);
		}
	});
	
	// 새로고침
	$("#btn_refresh").click(function(){
		location.reload();
	});
}