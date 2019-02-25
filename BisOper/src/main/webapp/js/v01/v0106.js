$(document).ready(function(){
	/**
	 * 원본 쿼리문에서 regseq를 통해서 삭제기능을 수행하고 있습니다.
	 * concurrency를 위해서 regseq의 수정을 막았습니다.
	 * 추후에 primary key를 사용하는 등의 방법을 고려해야 할 것 같습니다.
	 */
	document.getElementById("input_regseq").disabled = true;
	appendLoader("로딩중...");
	initManager();
	initGrid();
	initEvent();
});

var workingIndex = 0;

var model = [
{label:"순번",		name:"regseq",			index:"regseq",			width:"50",		align:"center",	sorttype:"text",	type:"I"},
{label:"돌발유형",		name:"incidtpcd",		index:"incidtpcd",		width:"140",	align:"left",	sorttype:"text",	type:"I",
		formatter:incidTypeCaster},
{label:"대응유형",		name:"incidresptpcd",	index:"incidresptpcd",	width:"140",	align:"left",	sorttype:"text",	type:"I",
		formatter:incidResponseCaster},
{label:"대응내용설명",	name:"detail",			index:"detail",			width:"590",	align:"left",	sorttype:"text",	type:"I"}
];

function incidTypeCaster(cellValue, rowObject, options){
	switch(cellValue){
	case "21":
		return "고장";
	case "32":
		return "교통정체"
	case "23":
		return "긴급";
	case "34":
		return "긴급공사";
	case "33":
		return "도로폐쇠";
	case "22":
		return "사고";
	case "35":
		return "시위집회";
	case "36":
		return "자연재해";
	case "37":
		return "차량사고";
	default:
		return "null";
	}
}
function incidResponseCaster(cellValue, rowObject, options){
	switch(cellValue){
	case "6":
		return "링크관련기관통보";
	case "2":
		return "우회노선검색";
	case "3":
		return "우회지시";
	case "4":
		return "전체차량공지";
	case "5":
		return "정류소안내기공지";
	case "1":
		return "차량대응지시";
	default:
		return "null";
	}
}


function initManager(){
	$("#input_incidtpcd").val(21);
	$("#input_regseq").val(0);
	$("#input_incidresptpcd").val("");
	$("#input_detail").val("대응내용을 서술해주세요.");
}


// append selected row to the right side
function getRowData(rowid){
	workingIndex = rowid;
	var row = document.getElementById(rowid);
	var seqnum = Number(row.getElementsByTagName("td")[1].textContent);
	var detail = row.getElementsByTagName("td")[4].textContent;
	document.getElementById("input_regseq").value = Number(seqnum);
	document.getElementById("input_detail").value = detail;
	var rowData = $("#search_result").jqGrid("getRowData", rowid);
	if(rowData.incidtpcd)
		$("#select_incidtpcd option:contains('" + rowData.incidtpcd + "')").attr("selected", "selected");
	if(rowData.incidresptpcd)
		$("#select_incidresptpcd option:contains('" + rowData.incidresptpcd + "')").attr("selected", "selected");
}


function initGrid(){
	makeGrid("#search_result", model, 600, "resultList", getRowData, null, null);
	$(window).bind("resize", function(){
		$("#search_result").jqGrid("setGridHeight", $(".main_chart").height());
		$("#search_result").jqGrid("setGridWidth", $(".main_chart").width());
	}).trigger("resize");
	loadGrid();
}


function loadGrid(){
	showLoader();
	var param = {
		incidtpcd : $("#incidtpcd option:selected").val(),
		incidresptpcd : $("#incidresptpcd option:selected").val()
	};
	reloadGrid("#search_result", "./usm/selectIncidReactScnroList.do", param, "resultList");
}


function initEvent(){
	// search for data
	$("#btn_search").click(function(){
		loadGrid();
	});
	
	// reset current working data
	$("#btn_reset").click(function(){
		if(workingIndex == 0){
			initManager();
		}
		else getRowData(workingIndex);
	});
	
	
	// add new data
/*	$("#btn_new").click(function(){
		if($("#select_incidtpcd").val() == "" || $("#input_regseq").val() == "" ||
				$("#select_incidresptpcd").val() == "" || $("#input_detail").val() == "" ){
			alert("모든 항목을 채워주세요.");
			return;
		}
		var param = {
			incidtpcd : $("#select_incidtpcd").val(),
			regseq : $("#input_regseq").val(),
			incidresptpcd : $("#select_incidresptpcd").val(),
			detail : $("#input_detail").val()
		}
		ajaxCall("./usm/insertIncidReactScnro.do", param, null, insertSuccess, null);
		function insertSuccess(data){
			if(data.result == 1) showAlert("정상적으로 추가되었습니다!");
			else showAlert("Error: 추가에 실패했습니다.");
		};
	});*/
	
	
	// modify data
	$("#btn_modify").click(function(){
		showConfirmDlg("내용을 수정하시겠습니까?", modifyIncidReactScnro);
	});
	function modifyIncidReactScnro(){
		if($("#select_incidtpcd").val() == "" || $("#input_regseq").val() == "" ||
				$("#select_incidresptpcd").val() == "" || $("#input_detail").val() == "" ){
			alert("모든 항목을 채워주세요.");
			return;
		}
		var param = {
			incidtpcd : $("#select_incidtpcd").val(),
			regseq : $("#input_regseq").val(),
			incidresptpcd : $("#select_incidresptpcd").val(),
			detail : $("#input_detail").val(),
			original_regseq : $("#search_result").jqGrid("getRowData", workingIndex).regseq
		};
		console.log(param);
		ajaxCall("./usm/modifyIncidReactScnro.do", param, null, modifySuccess, null);
		function modifySuccess(data){
			if(data.result == 1){
				showAlert("정상적으로 수정되었습니다!");
				loadGrid();
			}
			else showAlert("Error: 수정에 실패했습니다.");
		};
	}

	// delete data
	$("#btn_delete").click(function(){
		showConfirmDlg("정말 삭제하시겠습니까?", deleteIncidReactScnro);
	});
	function deleteIncidReactScnro(){
		var param = {
			regseq : $("#input_regseq").val(),
		};
		ajaxCall("./usm/deleteIncidReactScnro.do", param, null, deleteSuccess, null);
		function deleteSuccess(data){
			if(data.result == 1){
				showAlert("정상적으로 삭제되었습니다!");
				loadGrid();
			}
			else showAlert("Error: 삭제에 실패했습니다.");
		};		
	}
}