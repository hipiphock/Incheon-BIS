/**
 * BIT관리 - 문자메세지 전송
 * 
 * @author 박경원
 * @since 2017-11-23
 */

var span_text = null;
//상단
var model1 = [
                      {onlyView: true,
                       label:"관리 ID",		name:"bitmid",			index:"bitmid",       		width: "65", 	align:"center", sorttype:"number"},
                      {label:"BIT ID",		name:"bitid",   		index:"bitid",     			width: "65", 	align:"center", sorttype:"number"},
                      {label:"단축 ID",		name:"short_bstopid",   index:"short_bstopid",      width: "65", 	align:"center", sorttype:"number"},
                      {label:"설치위치",		name:"installloc",      index:"installloc",       	width: "100", 	align:"left", 	sorttype:"text"},
                      {label:"설치구",			name:"adminnm",      	index:"adminnm",       		width: "100", 	align:"left", 	sorttype:"text"},
                      {label:"BIT 유형",		name:"bittp",      		index:"bittp",     			width: "130", 	align:"center", sorttype:"text"},
                      {label:"센터전송일시",		name:"issuedt",			index:"issuedt",   			width: "130", 	align:"center", sorttype:"number"},
                      {label:"Form ID",		name:"formid",   		index:"formid",     		width: "70", 	align:"center", sorttype:"number"},
                      {label:"메세지 순번",		name:"msgseq",    		index:"msgseq",      		width: "70", 	align:"center", sorttype:"number"},
                      {label:"서버전송일시",		name:"snddt",  			index:"snddt",     			width: "130", 	align:"center", sorttype:"number"},
                      {label:"전송결과",		name:"sndrslt",  		index:"sndrslt",     		width: "80", 	align:"center", sorttype:"text"},
                      {label:"응답일시",		name:"reply_colldt",  	index:"reply_colldt",     	width: "127", 	align:"center", sorttype:"number"},
//                      {label:"통신오류",		name:"commerr",  		index:"commerr",     		width: "80", 	align:"center", sorttype:"text"},
                      {label:"내용",			name:"msgcontent",  	index:"msgcontent",     	width: "107", 	align:"left",   sorttype:"text"}
                      ]
//하단
var model2 = [
              {label:"Form ID",		name:"formid",			index:"formid",       		width: "70", 	align:"center", sorttype:"number", type: "I"},
              {label:"Form 이름",		name:"formnm",   		index:"formnm",     		width: "100", 	align:"left", 	sorttype:"text",   type: "I"},
              {label:"표출구성",		name:"dispconfig",      index:"dispconfig",       	width: "89", 	align:"center", sorttype:"text"},
              {label:"표출방법",		name:"dispmthd",      	index:"dispmthd",       	width: "80", 	align:"center", sorttype:"text"},
              {label:"표출효과",		name:"dispeffect",      index:"dispeffect",     	width: "80", 	align:"center", sorttype:"text"},
              {label:"내용",			name:"disp_msgcontent",	index:"disp_msgcontent",   	width: "243", 	align:"center", sorttype:"text"},
              
              {name: "dispconfigcd",	index:"dispconfigcd",	hidden:true},
              {name: "dispmthdcd",		index:"dispmthdcd",		hidden:true, type: "S"},	
              {name: "dispeffectcd",	index:"dispeffectcd",	hidden:true, type: "S"},
              ]

$(document).ready(function (){
	$("#select_dispeffectcd").change(function() {
		var sel = $(this).find("option:selected").val();
		if(sel == "1") {
			$(".r_img1").css("text-align", "center");
		}else {
			$(".r_img1").css("text-align", "");
			
		}
	}).trigger("change");
	
	setCategory();
	setEvent();
	setGrid();
}) 

var prevSpan = null;

function setEvent() {
	
	//텍스트 클릭
	$(".r_img1").on("click", ".msg", function(e) {
		
		$(".r_img1 .msg").removeClass("sel");
		
		$(this).addClass("sel");
		var context  = $(this).html().split("<br>")[0];
		
//		e.stopPropagation();
		span_text = $(this);
		$("#fontnm_" + span_text.css("font-family")).trigger("click");
		$("#fontsize_" + span_text.css("font-size")).trigger("click");		
		
		$("#fontcolor_" + getColorName(span_text.css("color"))).trigger("click");
		
		if(prevSpan != null && prevSpan != $(this)) {
			prevSpan.attr("contenteditable", false);
			prevSpan.blur();
		}
		
		$(this).attr("contenteditable", true);
		$(this).focus();
		
		prevSpan = $(this);
	});
	
	//파일저장
	$("#btn_excel_download").click(function() {
		execlDownload();
	})
	
	//구분
	$("#select1").on("change", function() {
		if ($(this).val() == 0) {
			$("#type_text").text("노선명");
		} else {
			$("#type_text").text("도로명");
		}
		ajaxCall("./bit/selectCategory.do", {type: $(this).val(), is_first: false}, null, success2, fail2);
	})
	
	function success2(data) {
		$("#select2").empty();
		$("#select2").append("<option value=\"\">전체</option>");
		var text = "";
		
		if ($("#select1 option:selected").val() == 0) {
			$.each(data.route_list, function (index, value) {
				text += "<option value=\"" + value.routeid + "\">" + value.routeno + "</option>";
			})
		} else {
			$.each(data.route_list, function (index, value) {
				text += "<option value=\"" + value.roadnm + "\">" + value.roadnm + " " + value.roadno + "</option>";
			})
		}
		
		$("#select2").append(text);
	}
	
	function fail2(data) {
		showAlert($("#type_text").text() + " 조회 실패");
	}
	
	//검색
	$("#btn_search").click(function() {
		//노선별
		var serverTp = $("#select_servertp option:selected").val();
		if ($("#select1 option:selected").val() == 0) {
			var param = {
					server_id : serverTp,
					routeid: $("#select2 option:selected").val(),
					bittpcd: $("#select3 option:selected").val(),
					bitid: $("#select4 option:selected").val(),
					by_route: true
			}
		
			reloadGrid("#bit_sms_list", "./bit/selectBitSmsList.do", param, "resultList");
		//도로별
		} else {
			var param = {
					server_id : serverTp,
					roadnm: $("#select2 option:selected").val(),
					bittpcd: $("#select3 option:selected").val(),
					bitid: $("#select4 option:selected").val(),
					by_route: false
			}
		
			reloadGrid("#bit_sms_list", "./bit/selectBitSmsList.do", param, "resultList");
		}
	})
	
	//초기화
	$("#btn_init").click(function() {
		span_text = null;
		$(".r_img1").empty();
		$("#input_formid").val("");
		$("#input_formnm").val("");
		$(".bittp:eq(0)").trigger("click");
		$("#fontnm_Gulim").trigger("click");
		$("#fontsize_16px").trigger("click");
		$("#fontcolor_yellow").trigger("click");
		$(".dispconfig:eq(0)").trigger("click");
		$("#select_dispmthdcd option:eq(0)").prop("selected", true);
		$("#select_dispeffectcd option:eq(1)").prop("selected", true);
		$("#select_dispeffectcd").trigger("change");
		$("#input_pageCnt").val(1);
	})
	
	$("#btn_save").click(function() {
		if($("#input_formnm").val() == "") {
			showAlert("폼 이름을 입력하세요.");
			$("#input_formnm").focus();
			return;
		}
		
		if ($("#input_formid").val() == "") {
			showConfirmDlg("새로운 메세지폼을 등록하시겠습니까?", insertConfirm);
			
			function insertConfirm() {
				
				var br_count = 0;
				var font_list = [];
				var color_list = [];
				var size_list = [];
				var contents_list = [];
				var new_line_count_list = [];
				
				$(".r_img1").children().each(function() {
					var name = $(this).context.localName;
					
					if (name == "br") {
						br_count++;
					} else if (name == "span") {
						font_list.push($(this).css("font-family"));
						color_list.push(getColorName($(this).css("color")));
						size_list.push($(this).css("font-size"));
						contents_list.push($(this).text());
						new_line_count_list.push(br_count);
						br_count = 0;
					}
				})
				
				var param = {
						formnm: $("#input_formnm").val(),
						dispconfigcd: $(".dispconfig.click").attr("id").split("_")[2],
						dispmthdcd: $("#select_dispmthdcd option:selected").val(),
						dispeffectcd: $("#select_dispeffectcd option:selected").val(),
						font_list: font_list,
						color_list: color_list,
						size_list: size_list,
						contents_list: contents_list,
						new_line_count_list: new_line_count_list
				}
				
				$.ajaxSettings.traditional = true;
				
				ajaxCall("./bit/insertMsgForm.do", param, null, insertSuccess, insertFail);
				
				function insertSuccess(data) {
					if (data.result_code != 1) {
						showAlert("등록실패");
					}else {
						showAlert("정상 저장되었습니다.");
						$("#btn_search").trigger("click");
						reloadGrid("#form_list", "./bit/selectMsgFormList.do", null, "resultList");
					}
				}
				
				function insertFail(data) {
					showAlert("삭제 실패");
					$("#btn_search").trigger("click");
					reloadGrid("#form_list", "./bit/selectMsgFormList.do", null, "resultList");
				}
			}
			
			
		} else {
			showConfirmDlg("수정한 메세지폼을 저장하시겠습니까?", updateConfirm);
			
			function updateConfirm() {
				var br_count = 0;
				var font_list = [];
				var color_list = [];
				var size_list = [];
				var contents_list = [];
				var new_line_count_list = [];
				
				$(".r_img1").children().each(function() {
					var name = $(this).context.localName;
					
					if (name == "br") {
						br_count++;
					} else if (name == "span") {
						font_list.push($(this).css("font-family"));
						color_list.push(getColorName($(this).css("color")));
						size_list.push($(this).css("font-size"));
						contents_list.push($(this).text());
						new_line_count_list.push(br_count);
						br_count = 0;
					}
				})
				
				var param = {
						formid: $("#input_formid").val(),
						formnm: $("#input_formnm").val(),
						dispconfigcd: $(".dispconfig.click").attr("id").split("_")[2],
						dispmthdcd: $("#select_dispmthdcd option:selected").val(),
						dispeffectcd: $("#select_dispeffectcd option:selected").val(),
						font_list: font_list,
						color_list: color_list,
						size_list: size_list,
						contents_list: contents_list,
						new_line_count_list: new_line_count_list
				}
				
				$.ajaxSettings.traditional = true;
				ajaxCall("./bit/updateMsgForm.do", param, null, updateSuccess, updateFail);
				
				function updateSuccess(data) {
					if (data.result_code != 1) {
						showAlert("저장 실패");
					}else {
						showAlert("정상 저장되었습니다.");
						$("#btn_search").trigger("click");
						reloadGrid("#form_list", "./bit/selectMsgFormList.do", null, "resultList");
					}
				}
				
				function updateFail(data) {
					showAlert("저장 실패");
					$("#btn_search").trigger("click");
					reloadGrid("#form_list", "./bit/selectMsgFormList.do", null, "resultList");
				}
			}
		}
		
	})
	
	// 삭제
	$("#btn_delete").click(function() {
		var row_id = $("#form_list").jqGrid("getGridParam", "selrow");
		
		if (row_id == null) {
			showAlert("메세지폼을 선택해주세요.");
			return;
		}
		
		showConfirmDlg("메세지폼[" + $("#input_formid").val() + "]을<br>삭제하시겠습니까?", deleteConfirm);
		
		function deleteConfirm() {
			ajaxCall("./bit/deleteMsgForm.do", {formid: $("#input_formid").val()}, null, deleteSuccess, deleteFail);
			
			function deleteSuccess(data) {
				if (data.result_code != 1) {
					showAlert("삭제 실패");
				}
				
				$("#btn_search").trigger("click");
				reloadGrid("#form_list", "./bit/selectMsgFormList.do", null, "resultList");
			}
			
			function deleteFail(data) {
				showAlert("삭제 실패");
				$("#btn_search").trigger("click");
				reloadGrid("#form_list", "./bit/selectMsgFormList.do", null, "resultList");
			}
		}
	})
	
	// 안내기유형
	$(".bittp").click(function() {
		$(".bittp").removeClass("click");
		$(this).addClass("click");
		
		var id = $(this).attr("id");
		var height = id.split("_")[1];
//		.r_img1_bg3 , 5단10열일 때 .r_img1_bg5
		if(height != "LCD") {
			$(".r_img1").removeClass("r_img1_bg3").removeClass("r_img1_bg5");
			
			if(height == "3") {
				$(".r_img1").addClass("r_img1_bg3");
			}else {
				$(".r_img1").addClass("r_img1_bg5");
			}
			
		}else {
			$(".r_img1").removeClass("r_img1_bg3").removeClass("r_img1_bg5");
		}
		
	});
	
	//폰트 이름
	$(".fontnm").click(function() {
		$(".fontnm").removeClass("click");
		$(this).addClass("click");
		
		if (span_text != null) {
			span_text.css("font-family", $(this).attr("id").split("_")[1]);
		}
	})
	
	//폰트 사이즈
	$(".fontsize").click(function() {
		$(".fontsize").removeClass("click");
		$(this).addClass("click");
		
		if (span_text != null) {
			span_text.css("font-size", $(this).attr("id").split("_")[1]);
		}
	})
	
	//폰트 색상
	$(".fontcolor").click(function() {
		$(".fontcolor").removeClass("click");
		$(this).addClass("click");
		
		if (span_text != null) {
			span_text.css("color", $(this).attr("id").split("_")[1]);
		}
	})
	
	//표출구성
	$(".dispconfig").click(function() {
		$(".dispconfig").removeClass("click");
		$(this).addClass("click");
	})
	
	//객체 추가
	$("#btn_obj_add").click(function() {
		if($(".r_img1").is(':empty')){
			addText();
			return;
		}
		
		$.each($(".r_img1").children(), function (index) {
			if($(this).hasClass("sel")) {
				addText($(this));
				return false;
			}
		})
	});
	
	//객체 삭제
	$("#btn_obj_del").click(function() {
		var prevBrIdx = -1;
		var prevBr = null;
		var selIndex = -1;
		var selTag = null;
		var tagLen = $(".r_img1").children().length;
		$.each($(".r_img1").children(), function (index) {
			// 마지막 요소 1: 이전 요소 개행, 2:이전요소 span
			// 중간 요소 1: 이전요소개행, 2:이전요소 span
			var name = $(this).context.localName;
			
			if(selIndex != -1 && (selIndex + 1) == index) {
				if (name == "br") {
					if(prevBr != null && prevBrIdx == (selIndex - 1)) {
						prevBr.remove();
					}
					if(selIndex == 0) {
						$(this).remove();
					}
				}
				selTag.remove();
				return;
			}
			
			if (name == "br") {
				prevBr = $(this);
				prevBrIdx = index;
			} else if (name == "span") {
				if($(this).hasClass("sel")) {
					selIndex = index;
					selTag = $(this);
					if(index == 0 && tagLen == 1) {
						selTag.remove();
						return;
					}else if(index != 0 && (index+1) == tagLen) {
						if(prevBr != null && prevBrIdx == (index - 1)) {
							prevBr.remove();
							selTag.remove();
							return;
						}
					}
				}
			}
		});
	});
	
	//다음줄
	$("#btn_obj_last").click(function() {
		if($(".r_img1").is(':empty')){
			addText();
			return;
		}
		var $last = $(".r_img1").children().last();
		if($last.context.localName == "br") {
			addText($last);
		}else {
			$(".r_img1").append("<br>");
			addText();
		}
	});
	
	
	$("#btn_send_ctrl").click(function() {
		
		var row_ids = $("#bit_sms_list").jqGrid("getGridParam", "selarrrow");
		var bit_ids = []; 
		
		if (row_ids.length == 0) {
			showAlert("BIT를 선택해주세요.");
			return;
		}
		
		var selid = $("#form_list").jqGrid('getGridParam', "selrow" ); 
		var rowData = $("#form_list").jqGrid('getRowData', selid);		
		
		var msg = "["+rowData.formid+"] 수동메시지를 전송하시겠습니까?"
		
		showConfirmDlg(msg, inquiryCtrl);
		
	});
	
}

function inquiryCtrl() {
	var row_ids = $("#bit_sms_list").jqGrid("getGridParam", "selarrrow");
	var strIds = "";
	for (var i = 0; i < row_ids.length; i++) {
		var rowData = $("#bit_sms_list").jqGrid("getRowData", row_ids[i]);
		if(i < (row_ids.length-1)) {
			strIds += rowData.bitid+",";
		}else {
			strIds += rowData.bitid;
		}
	}
	
	var selid = $("#form_list").jqGrid('getGridParam', "selrow" ); 
	var rowData = $("#form_list").jqGrid('getRowData', selid);	
	var param = {
			servertp : $("#select_servertp option:selected").val(),
			bitid : strIds,
			formid: rowData.formid
	}
	
	$.ajaxSettings.traditional = true;
	ajaxCall("./msgDownload.soc", param, null, sendSuccess, null);
	
	function sendSuccess(data) {
		if(data.result == "1") {
			showAlert("정상 전송되었습니다.");
		}else {
			showAlert("전송 중 오류가 발생하였습니다.");
		}
		$("#btn_search").trigger("click");
	}
	
}



function addText($obj) {
	
	var font = $("#font_kind li").find(".click").attr("id");
	var size = ($("#font_size li").find(".click").attr("id"));
	var color = $("#font_color li").find(".click").attr("id");
	var text = "<span class=\"msg\" style=\"font-family: " 
		     + font.replace("fontnm_", "") + "; font-size: " 
		     + size .replace("fontsize_", "")+ "; color: " 
		     + color.replace("fontcolor_", "") + ";\">객체</span>";
	if($obj == null) {
		$(".r_img1").append(text);
	}else {
		$obj.after(text);
	}
}

function execlDownload() {
	$("#excelDown").remove();
	
	var form = document.createElement("FORM");
	
	form.setAttribute("id", "excelDown");
	form.action = "./bit/downloadBitSmsList.do";
	form.method = "POST";
	
	var	para1 = document.createElement('INPUT');
	var name = "json";
	var row_data = $("#bit_sms_list").jqGrid("getRowData");

	var value = JSON.stringify(row_data);
	
	para1.type  = 'HIDDEN';
	para1.name  = name;
	para1.value = value;
	
	form.appendChild(para1);
	
	document.body.appendChild(form);
	inquiryFileDownload("excelDown", true);
}

function setCategory() {
	var param = {
			type: $("#select1 option:selected").val(),
			is_first: true
	};
	
	ajaxCall("./bit/selectCategory.do", param, null, success1, fail1);
	
	function success1(data) {
		$("#select2").empty();
		$("#select3").empty();
		$("#select4").empty();
		$("#select_dispmthdcd").empty();
		
		$("#select2").append("<option value=\"\">전체</option>");
		$("#select3").append("<option value=\"\">전체</option>");
		$("#select4").append("<option value=\"\">전체</option>");
		
		var text = "";
		
		if ($("#select1 option:selected").val() == 0) {
			$.each(data.route_list, function (index, value) {
				text = "<option value=\"" + value.routeid + "\">" + value.routeno + "</option>";
				$("#select2").append(text);
			})
		} else {
			$.each(data.route_list, function (index, value) {
				text = "<option value=\"" + value.roadnm + "\">" + value.roadnm + " " + value.roadno + "</option>";
				$("#select2").append(text);
			})
		}
		
		$.each(data.type_list, function (index, value) {
			var text = "<option value=\"" + value.cd + "\">" + value.cdnm + "</option>";
			$("#select3").append(text);
		})
		
		$.each(data.installloc_list, function (index, value) {
			var text = "<option value=\"" + value.facilid + "\">" + value.installloc + "</option>";
			$("#select4").append(text);
		})
		
		$.each(data.dispmethod_list, function (index, value) {
			var text = "<option value=\"" + value.cd + "\">" + value.cdnm + "</option>";
			$("#select_dispmthdcd").append(text);
		})
	}
	
	function fail1(data) {
		showAlert("카테고리 조회 실패");
	}
}

function setGrid() {
	makeMultiGrid("#bit_sms_list", model1, 500, "resultList", onSelected, onCompleted, null);
	makeGrid("#form_list", model2, 500, "resultList", onSelected2, onCompleted2, null);
	$("#form_list").jqGrid("setGridParam", {scrollrows : true}).trigger("reloadGrid");
	
	//상단 목록 선택시 하단 목록에서 같은 form id 가지고 있는 row 선택
	function onSelected(row_id) {
//		var row_data = $("#bit_sms_list").jqGrid("getRowData", row_id);
//		var form_id = row_data.formid;
//		var index = -1;
//		var row_datas = $("#form_list").jqGrid("getRowData");
//		
//		for (var i = 0; i < row_datas.length; i++) {
//			var temp = row_datas[i];
//			
//			if (temp.formid == form_id) {
//				index = i;
//				break;
//			}
//		}
//		
//		if (index != -1) {
//			$("#form_list").jqGrid("setSelection", (index + 1));
//		}
	}
	
	//count
	function onCompleted(row_id) {
//		$("#bit_sms_list").jqGrid("setSelection", 1);
		$("#list_count1").text($("#bit_sms_list").jqGrid("getGridParam", "reccount"));
	}
	
	function onSelected2(row_id) {
		$(".r_img1").empty();
		
		var row_data = $("#form_list").jqGrid("getRowData", row_id);
		 
		setSelected("select_dispeffectcd", row_data.dispeffectcd, true);
		//0: 교통, 1:1단,  2:전체홍보
		$("#btn_dispconfig_"+row_data.dispconfigcd).trigger("click");
		
		ajaxCall("./bit/selectParsedMsg.do", {formid: row_data.formid}, null, parsingSuccess, parsingFail);

		function parsingSuccess(data) {
			prevSpan = null;
			var s = "";
			var lineCnt = 1;
			$.each(data.resultList, function(index, value) {
				var content = (value.content).replace(" ", "&nbsp;");
				var temp = "<span class=\"msg\" style=\"color: " + value.color + "; font-family:" + value.font + "; font-size: " + value.size + ";\">"
						+ content + "</span>";
			
				var new_line_count = value.new_line_count;
				
				while (new_line_count-- > 0) {
					s += "<br>";
					lineCnt++;
				}
				
				s += temp;
			})
			$(".r_img1").append(s);
			
			$(".r_img1 .msg:eq(0)").trigger("click");
			setPage();
		}
		
		function parsingFail(data) {
			showAlert("문자열 파싱 실패");
		}
		
		$("#btn_dispconfig_" + row_data.dispconfigcd).trigger("click");
	}
	
	//count
	function onCompleted2(row_id) {
		$("#form_list").jqGrid("setSelection", 1);
		$("#list_count2").text($("#form_list").jqGrid("getGridParam", "reccount"));
	}
	var serverTp = $("#select_servertp option:selected").val();
	
	reloadGrid("#bit_sms_list", "./bit/selectBitSmsList.do", {by_route: true, server_id:serverTp}, "resultList");
	reloadGrid("#form_list", "./bit/selectMsgFormList.do", null, "resultList");
	
	$(window).bind('resize', function() {
		$("#bit_sms_list").jqGrid('setGridHeight',$(".sms1").height() - 23);
		$("#bit_sms_list").jqGrid('setGridWidth',$(".sms1").width());
		$("#form_list").jqGrid('setGridHeight',$(".sms2_con_left").height() - 51);
		$("#form_list").jqGrid('setGridWidth',$(".sms2_con_left").width());
	}).trigger('resize');
}




/*************
 * 표출 페이지 수
 *************/
function setPage() {
	var lineCnt = 1;
	$(".r_img1").children().each(function() {
		var name = $(this).context.localName;
		
		if (name == "br") {
			lineCnt++;
		} 
	});
	var bitSize = ($("#bit_kind").find(".click").attr("id")).split("_");
	if(bitSize[1] != "LCD") {
		var page = lineCnt / bitSize[1];
		var remain = lineCnt % bitSize[1];
		
		if(remain > 0) {
			page = parseInt(page) + 1;
		}
		$("#input_pageCnt").val(page);
	}else {
		$("#input_pageCnt").val(0);
	}
}

function getColorName(string) {
	if (string == "rgb(0, 128, 0)") {
		return "green";
	} else if (string == "rgb(255, 0, 0)") {
		return "red";
	} else if (string == "rgb(255, 255, 0)"){
		return "yellow";
	}
}




