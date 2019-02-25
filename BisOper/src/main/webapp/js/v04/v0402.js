$(document).ready(function(){
	appendLoader("로딩중");
	initBox();
	initGrid();
	initEvent();
});

var company_model = [
//	{label:"선택",	name:"checkbox",	index:"checkbox",	width:"30",	sortable:false,	editable:true,	align:"center",
//		formatter:'checkbox',	edittype:"checkbox", editoptions:{value:'Y:N', defaultValue:'N'}},
	{label:"회사명",	name:"compnm",	index:"compnm",		width:"100",	align:"center",		sorttype:"text"},
	{label:"회사ID",	name:"compid",	index:"compid",		width:"90",		align:"center",		sorttype:"text"}
];

var basic_model = [];

function initBox(){
	ajaxCall("./route/selectCompList.do", null, null, dealwithCompany, null);
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
}

function initGrid(){
	makeMultiGrid("#bus_company_list", company_model, 600, "companyList", onSelected, null, null);
	$("#bus_company_list").jqGrid("setGridParam", {multiboxonly:false});
	
	function onSelected(rowid){
		load_violence_list();
	}
	
	$(window).bind("resize", function(){
		$("#bus_company_list").jqGrid("setGridHeight", $(".main_chart").height() - 23);
		$("#bus_company_list").jqGrid("setGridWidth", $(".main_chart").width());
	}).trigger("resize");
	load_buslist_grid();
}

function load_buslist_grid(){
	showLoader();
	var compID = $("#busCompany").val();
	reloadGrid("#bus_company_list", "./route/selectCompList.do", {compid:compID}, "companyList");
}

function load_violence_list(){
	showLoader();
}

function initEvent(){
	
	$("#date_month_selector").change(function(){
		if($("#date_month_selector option:selected").val() == 0){
			var to_date = document.getElementsByClassName("in145");
			to_date[0].type = "date";
			to_date[1].type = "date";
		}
		else{
			var to_month = document.getElementsByClassName("in145");
			to_month[0].type = "month";
			to_month[1].type = "month";
		}
	});
	
	$("#btn_refresh").click(function(){
		location.reload();
	});
	
	// when you change company
	$("#busCompany").change(function(){
		
	});
	
	// 그래프?
	$("#btn_search").click(function(){
		
	});
	
	// select all
//	$("#btn_all").click(function(){
//		$(":checkbox").each(function(){
//			this.checked = true;
//		});
//	});
}