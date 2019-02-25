/**
 * BIT관리 - BIT장애등록/이력조회
 *
 * @author 박경원
 * @since 2017-11-18
**/

var selectDlg, failDlg; //BIT 지점 선택 다이얼로그, 추가 다이얼로그
var is_add = false;

//BIT 장애 이력
var model = [
            {label:"처리 여부",		name:"treat_gubunnm",		index:"treat_gubunnm", 	width: "60",   sorttype:"text",	   		align:"center", type:"S"},
         	{label:"시설물ID",	    name:"facilid", 			index:"facilid",  		width: "80",   sorttype:"number",		align:"center", type:"I"},
         	{label:"단축 ID",	    name:"short_bstopid", 		index:"short_bstopid",  width: "80",   sorttype:"number",		align:"center", type:"I"},
         	{label:"설치 위치",   	name:"bstopnm",    			index:"bstopnm",   	 	width: "100",  sorttype:"text",		    align:"left",   type:"I"},
         	{label:"등록일시",   	name:"regdt",      			index:"regdt",      	width: "130",  sorttype:"number",       align:"center", type:"I"},
         	{label:"등록 사용자ID",	name:"reg_userid",			index:"reg_userid", 	width: "100",  sorttype:"text",	 		align:"center", type:"I"},
         	{label:"장애 발생일시",   name:"fail_occurdt",    	index:"fail_occurdt",   width: "130",  sorttype:"number",	    align:"center", type:"I"},
         	{label:"장애 유형",	    name:"failtpnm",  			index:"failtpnm",  		width: "100",  sorttype:"text",	    	align:"center", type:"I"},
         	{label:"장애 상세",	    name:"fail_detail",  		index:"fail_detail",  	width: "150",  sorttype:"text",	    	align:"left",   type:"I"},
         	{label:"장애 처리일시",	name:"fail_treatdt",      	index:"fail_treatdt",   width: "130",  sorttype:"number",		align:"center", type:"I"},
         	{label:"장애 처리유형",	name:"failtreattpnm",  		index:"failtreattpnm",  width: "100",  sorttype:"text",	    	align:"center"},
         	{label:"처리 상세내역",	name:"treat_detail",  		index:"treat_detail",  	width: "150",  sorttype:"text",	    	align:"left", 	type:"I"},
         	{label:"장애 처리자",	name:"treat_userid",		index:"treat_userid", 	width: "80",  sorttype:"text",	   		align:"center", type:"I"},
         	{label:"휴대폰 번호",	name:"mobileno",      		index:"mobileno",       width: "100",  sorttype:"number",		align:"center"},
         	
         	{name:"faciltpcd", 		index: "faciltpcd", 	hidden:true},
         	{name:"failtpcd",  		index: "failtpcd", 		hidden:true},
         	{name:"failtreatcd", 	index: "failtreatcd", 	hidden:true, type:"S"},
         	{name:"treat_gubun", 	index: "treat_gubun", 	hidden:true, type:"S"},
         	];

//BIT 지점 리스트 - dialog
var models2 = [
               //{onlyView:true, label:"시설물ID",		name:"facilid",   	index:"facilid",     	width: "70", 	align:"center", sorttype:"number"},
               {label:"단축 ID",		name:"short_bstopid",	index:"short_bstopid",   width: "70", 	align:"center", sorttype:"number"},
               {label:"BIT ID",		name:"bitid",  			index:"bitid",    		width: "60", 	align:"center", sorttype:"number"},
               {label:"설치위치",		name:"detail",      	index:"detail",     	width: "158", 	align:"left", 	sorttype:"text"}
               ]

$(document).ready(function() {
	initialize();
	setDialog();
	createGrid();
})

function initialize() {
	//클릭 불가능
	$(".bit_right_chart_body").css("pointer-events", "none");
	$(".con2_r").css("pointer-events", "none");
	
	//장애처리유형, BIT장애등록 팝업 장애유형 selectbox 생성
	ajaxCall("./bit/selectFailTreatTypeList.do", null, null, success, null);
	
	function success(data) {
		$("#select_failtreatcd").empty();
		$("#select_pop_failtpnm").empty();
		
		//장애 처리 유형
		$.each(data.failTreatTypeList, function(index, value) {
			var option = "<option value=\"" + value.failtreatcd + "\">" + value.failtreattpnm + "</option>";
			$("#select_failtreatcd").append(option);	
		})
		
		//장애 유형
		$.each(data.failTypeList, function(index, value) {
			var option = "<option value=\"" + value.failtpcd + "\">" + value.failtpnm + "</option>";
			$("#select_pop_failtpnm").append(option);	
		})
	}
	
	//장애 처리 일시
	initCalendar("input_fail_treatdate", YEAR_FORMAT1, false);
	initTimePicker("input_fail_treattime", TIME_FORMAT1, false);
	//조회기간
	initCalendar("st_date", YEAR_FORMAT1, false);
	initCalendar("ed_date", YEAR_FORMAT1, true);
	
	var today = new Date();
	var prev = new Date(Date.parse(today) - 1000 * 60 * 60 * 24); //1일 전
	
	setCalendar("st_date", YEAR_FORMAT1, prev);
	
	//이미지 업로드
	$("#btn_add_img").click(function(){		
		$("#input_img").trigger("click");
	});
	$("#btn_del_img").click(function(){
		
		showConfirmDlg("이미지를 삭제하시겠습니까?", function() {
			
			var param = {
					facilid: $("#input_facilid").val(),
					regdt: $("#input_regdt").val()
			};

			ajaxCall("./bit/deleteFaultImg.do", param, null, delSuccess, null);
			
			function delSuccess(data) {
				if (data.result != 1) {
					showAlert("이미지 삭제 오류");
				}else {
					showAlert("이미지가 삭제 되었습니다.");
					$("#input_img").val("");
					$('#fail_img').attr("src","./images/no-img.png");
				}
			}
		});
	});
	
	$("#btn_save_img").click(function(){
		showConfirmDlg("이미지를 저장하시겠습니까?", function() {
			var formData = new FormData();
			formData.append("facilid", $("#input_facilid").val()); 		 
			formData.append("regdt", $("#input_regdt").val()); 	
			formData.append("imgFile", $("#input_img")[0].files[0]); 			
			
			$.ajax({
				url: "./bit/insertFaultImg.do",
				data: formData,
				dataType: 'json',
				contentType: false,
				processData: false,
				type: 'POST',
				beforeSend: function() {
					console.log("##ajax try")
				},	
				success: function (data) {
					if(data && data.result){
						if(data.result == 1){
							console.log("##ajax success");
							showAlert("등록되었습니다.");
						}else{
							console.log("##ajax error");
							showAlert("오류가 발생했습니다.");
						}
					}
				},	
				error: function() {
					console.log("##ajax error");
					showAlert("오류가 발생했습니다.");
				}
			});
		});
		
	});
	$("#input_img").change(function(){
		if(this.files[0].name.length > 50){
			showAlert("파일명이 너무 깁니다.(50자 이내)");
			$("#btn_del_img").trigger("click");
			return; 
		}
		
		imageChecker(this);
	});
	
	//파일저장
	$("#btn_excel_download").click(function() {
		execlDownload();
	})
	
	//새로고침
	$("#btn_refresh").click(function() {
		var params = {
				startdt : $("#st_date").val().replace(/-/g,""),
				enddt : $("#ed_date").val().replace(/-/g,""),
				treat_gubun: $("#sel_treatyn option:selected").val(),
				detail: $("#input_stop_name").val()
			}
		
		reloadGrid("#bit_fail_list", "./bit/selectBitFailList.do", params, "resultList");
	})
	
	//선택
	$("#btn_choice").click(function() {
		selectDlg.dialog("open");
	})
	
	//clear
	$("#btn_clear").click(function() {
		window.location.reload();
	})
	
	//검색
	$("#btn_search").click(function() {
		if (checkTermEffective($("#st_date"), $("#ed_date"))) {
			var params = {
					startdt : $("#st_date").val().replace(/-/g,""),
					enddt : $("#ed_date").val().replace(/-/g,""),
					treat_gubun: $("#sel_treatyn option:selected").val(),
					detail: $("#input_stop_name").val()
				}

			reloadGrid("#bit_fail_list", "./bit/selectBitFailList.do", params, "resultList");
		} else {
			showAlert("조회기간을 잘못 설정하였습니다.");
		}
	});

	//추가
	$("#btn_add").click(function() {
		is_add = true;
		failDlg.dialog("open");
	})

	//수정
	$("#btn_mod").click(function() {
		var row_id = $("#bit_fail_list").jqGrid("getGridParam", "selrow");
		
		if (row_id == null) {
			showAlert("BIT 장애 이력을 선택해주세요.");
			return;
		}
		
		showAlert("수정모드로 전환합니다.");
		$(".bit_right_chart_body").css("pointer-events", "auto");
		$(".con2_r").css("pointer-events", "auto");
		$("#btn_save").removeClass("disabled"); //저장버튼 활성화
		$("#btn_cancel").removeClass("disabled"); //취소버튼 활성화
	})
	
	//저장
	$("#btn_save").click(function() {
		var row_id = $("#bit_fail_list").jqGrid("getGridParam", "selrow");
		var row_data = $("#bit_fail_list").jqGrid("getRowData", row_id);
		
		showConfirmDlg(row_data.facilid + "의 장애 및 처리 정보를 저장합니다.<br>계속하시겠습니까?", saveConfirm);
		
		function saveConfirm() {
			var param = {
					facilid: $("#input_facilid").val(),
					regdt: $("#input_regdt").val(),
					fail_treatdt: $("#input_fail_treatdate").val() + " " + $("#input_fail_treattime").val(),
					failtreatcd: $("#select_failtreatcd option:selected").val(),
					treat_detail: $("#input_treat_detail").val(),
					treat_gubun: $("#select_treat_gubun").val()
			};
			console.log(param);

			ajaxCall("./bit/updateBitFail.do", param, null, updateSuccess, updateFail);
			
			function updateSuccess(data) {
				if (data.result_code != 1) {
					showAlert("저장 실패");
				}else {
					showAlert("정상 처리 되었습니다.");
					loadGrid();
				}
			}
			
			function updateFail(data) {
				showAlert("저장 실패");
				loadGrid();
			}
			
			$(".bit_right_chart_body").css("pointer-events", "none");
			$(".con2_r").css("pointer-events", "none");
			$("#btn_save").addClass("disabled"); //저장버튼 비활성
			$("#btn_cancel").addClass("disabled"); //취소버튼 비활성	
		}
		
	})
	
	//취소
	$("#btn_cancel").click(function() {
		showConfirmDlg("저장하지 않은 데이터는  원상 복구 됩니다.<br>조회모드로 전환하시겠습니까?", cancelConfirm);
		
		function cancelConfirm() {
			console.log("cancel");
			$(".bit_right_chart_body").css("pointer-events", "none");
			$(".con2_r").css("pointer-events", "none");
			$("#btn_save").addClass("disabled"); //저장버튼 비활성
			$("#btn_cancel").addClass("disabled"); //취소버튼 비활성
			var row_id = $("#bit_fail_list").jqGrid("getGridParam", "selrow"); 
			$("#bit_fail_list").jqGrid("setSelection", row_id);
		}
	})
}

function loadGrid() {
	var params = {
		startdt : $("#st_date").val().replace(/-/g,""),
		enddt : $("#ed_date").val().replace(/-/g,""),
		treat_gubun: $("#sel_treatyn option:selected").val(),
		detail: $("#input_stop_name").val()
	}
	reloadGrid("#bit_fail_list", "./bit/selectBitFailList.do", params, "resultList");
}


function setDialog() {
	failDlg = getDialog("pop_fail", "container");
	
	$("#txt_title").text("BIT 지점 선택");
	selectDlg = getDialog("pop_choice", "container");
	
	makeGrid("#pop_list", models2, 300, "resultList", null, null, onDoubleClicked);
	
	//더블 클릭 시 선택 후 닫기
	function onDoubleClicked(rowId) {
		var rowData = $("#pop_list").jqGrid("getRowData", rowId);
		
		if (is_add) {
			$("#input_pop_facilid").val(rowData.facilid);
			$("#input_pop_faciltpnm").val("BIT");
			$("#input_pop_detail").val(rowData.detail);
		} else {
			$("#input_stop_name").val(rowData.detail);
			$("#input_bit_id").val(rowData.bitid);
		}
		selectDlg.dialog("close");
	}
	
	reloadGrid("#pop_list", "./bit/selectBitLocationList.do", null, "resultList");
	
	$("#pop_list").jqGrid('setGridHeight',223);
	$("#pop_list").jqGrid('setGridWidth',320);

	
	initCalendar("input_pop_stdate", YEAR_FORMAT1, true);
	initTimePicker("input_pop_sttime", TIME_FORMAT1, true);
	
	//BIT 장애 등록 선택 버튼
	$("#btn_pop_choice").click(function() {
		selectDlg.dialog("open");
	})
	
	//장애 등록 저장
	$("#btn_save2").click(function() {
		if ($("#input_pop_facilid").val() == "") {
			showAlert("시설물 ID를 선택해주세요.");
			return;
		}
		
		showConfirmDlg("BIT 장애 정보가 추가됩니다.<br>계속하시겠습니까?", addConfirm);
		
		function addConfirm() {
			var params = {
					facilid: $("#input_pop_facilid").val(),
					faciltpcd: "12",
					fail_occurdt: $("#input_pop_stdate").val() + " " + $("#input_pop_sttime").val(),
					failtpcd: $("#select_pop_failtpnm option:selected").val(),
					fail_detail: $("#input_pop_fail_detail").val()
			}
			
			ajaxCall("./bit/insertBitFail.do", params, null, insertSuccess, insertError);
			
			function insertSuccess(data) {
				if (data.result_code != 1) {
					showAlert("추가 실패");
				}
				is_add = false;
				failDlg.dialog("close");
				
				var params = {
						startdt : $("#st_date").val().replace(/-/g,""),
						enddt : $("#ed_date").val().replace(/-/g,""),
						treat_gubun: $("#sel_treatyn option:selected").val(),
						detail: $("#input_stop_name").val()
					}
				reloadGrid("#bit_fail_list", "./bit/selectBitFailList.do", params, "resultList");
				
			}
			
			function insertError(data) {
				showAlert("추가 실패");
			}
		}
	});
	
	//장애 등록 닫기
	$("#btn_close2").click(function() {
		is_add = false;
		failDlg.dialog("close");
	});
	
	//닫기
	$("#btn_close").click(function() {
		selectDlg.dialog("close");
	});
	
	//정류장 엔터 검색
	$("#input_pop_word").on("keydown", function(key) {
		if (key.keyCode == 13) {
			$("#btn_pop_search").trigger("click");
		}
	})
	
	//정류장 검색
	$("#btn_pop_search").click(function() {
		var params = {
				searchWord : $("#input_pop_word").val()
		}
		console.log(params);
		reloadGrid("#pop_list", "./bit/selectBitLocationList.do", params, "resultList");
	});
}

function imageChecker(input){
	var img_checker = false;

	if (input.files && input.files[0]) {			
		var reader = new FileReader();
		
		reader.onload = function() {
			var array = new Uint8Array(this.result);
			
		    // jpg checker
		    if(array[0] == 0xFF && array[1] == 0xD8 && array[2] == 0xFF )
		    	img_checker = true;			    
		    // png checker
		    if(array[0] == 0x89 && array[1] == 0x50 && array[2] == 0x4E )
		    	img_checker = true;
		    
		    if(img_checker){
		    	imagePreview();
		    }else{
		    	showAlert("파일이 올바르지 않습니다.")
		    	$("#btn_file_delete").trigger("click");
		    }
		}		
		reader.readAsArrayBuffer(input.files[0]);			
	}
	
	function imagePreview(){
		var reader = new FileReader();            
		reader.onload = function() {
			$('#fail_img').attr('src', this.result);			
		}            
		reader.readAsDataURL(input.files[0]);		
	}	
}

function execlDownload() {
	$("#excelDown").remove();
	
	var form = document.createElement("FORM");
	
	form.setAttribute("id", "excelDown");
	form.action = "./bit/downloadBitFailExcel.do";
	form.method = "POST";
	
	var	para1 = document.createElement('INPUT');     
	var rowData = $("#bit_fail_list").jqGrid("getRowData");
	var value = JSON.stringify(rowData);
	
	para1.type  = 'HIDDEN';
	para1.name  = 'json';
	para1.value = value;

	
	form.appendChild(para1);
	
	document.body.appendChild(form);
	inquiryFileDownload("excelDown", true);
}

function createGrid() {
	makeGrid("#bit_fail_list", model, 500, "resultList", onSelect, onComplete, null);
	
	function onSelect(rowid) {
		var row_data = $("#bit_fail_list").jqGrid("getRowData", rowid);
		
		if (row_data.treat_gubun == "1") {
			$("#btn_mod").css("pointer-events", "none");
			$("#btn_mod").addClass("disabled");
		} else {
			$("#btn_mod").css("pointer-events", "auto");
			$("#btn_mod").removeClass("disabled");
		}
		
		if (row_data.fail_treatdt != "") {
			var date_arr = row_data.fail_treatdt.split(' ');
//			setCalendar("input_fail_treatdate", YEAR_FORMAT1, new Date(date_arr[0]));
//			$("#input_fail_treattime").timepicker("setTime", date_arr[1]);
			$("#input_fail_treatdate").val(date_arr[0]);
			$("#input_fail_treattime").val(date_arr[1]);
		} else {
			$("#input_fail_treatdate").val("");
			$("#input_fail_treattime").val("");
		}
		//TODO get img
		$("#fail_img").attr("src", "./bit/getFaultImage.do?facilid="+row_data.facilid+"&regdt="+row_data.regdt);
		$("#input_img").val("");
	}
	
	function onComplete(rowid) {
		$("#bit_fail_list").jqGrid("setSelection", 1);
	}
	
	var params = {
		startdt : $("#st_date").val().replace(/-/g,""),
		enddt : $("#ed_date").val().replace(/-/g,""),
		treat_gubun: $("#sel_treatyn option:selected").val()
	}

	reloadGrid("#bit_fail_list", "./bit/selectBitFailList.do", params, "resultList");
	
	$(window).bind('resize', function() {
		$("#bit_fail_list").jqGrid('setGridHeight',$(".bit_left_chart_body").height() - 23);
		$("#bit_fail_list").jqGrid('setGridWidth',$(".bit_left_chart_body").width());
	}).trigger('resize');
}