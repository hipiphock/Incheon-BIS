/**
 * require jqGrid 
 */
document.write('<link rel = "stylesheet" type = "text/css" href = "./css/lib/jquery-ui.css"/>');
document.write('<link rel = "stylesheet" type = "text/css" href = "./css/lib/alertify.core.css"/>');
document.write('<link rel = "stylesheet" type = "text/css" href = "./css/lib/alertify.default.css"/>');
document.write('<link rel = "stylesheet" type = "text/css" href = "./css/lib/ui.jqgrid.css"/>');
//document.write('<link rel = "stylesheet" type = "text/css" href = "./css/lib/jquery-ui-timepicker-addon.css"/>');
document.write('<link rel = "stylesheet" type = "text/css" href = "./css/lib/jquery.timepicker.css"/>');
document.write('<link rel = "stylesheet" type = "text/css" href = "./css/lib/jquery.multiselect.css"/>');

document.write('<script type = "text/javascript" src = "./js/lib/jquery.min.js"></script>');
document.write('<script type = "text/javascript" src = "./js/lib/jquery-ui.js"></script>');
document.write('<script type = "text/javascript" src = "./js/lib/jquery.multiselect.js"></script>');
//document.write('<script type = "text/javascript" src = "./js/lib/jquery-ui-timepicker-addon.js"></script>');
//document.write('<script type = "text/javascript" src = "./js/lib/jquery-ui-timepicker-ko.js"></script>');
document.write('<script type = "text/javascript" src = "./js/lib/jquery.timepicker.min.js"></script>');
//document.write('<script type = "text/javascript" src = "./js/lib/jquery.jqGrid.min.js"></script>');
document.write('<script type = "text/javascript" src = "./js/lib/jquery.jqGrid.src.js"></script>');
document.write('<script type = "text/javascript" src = "./js/lib/jquery.fileDownload.js"></script>');
document.write('<script type = "text/javascript" src = "./js/lib/alertify.min.js"></script>');
document.write('<script type = "text/javascript" src = "./js/lib/amazonmenu.js"></script>');
document.write('<script type = "text/javascript" src = "./js/lib/bootstrap.min.js"></script>');

/*jQuery.browser = {};
(function () {
    jQuery.browser.msie = false;
    jQuery.browser.version = 0;
    if (navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
        jQuery.browser.msie = true;
        jQuery.browser.version = RegExp.$1;
    }
})();*/

/****
 * @param gridId
 * @param models
 *    type : I(input-normal), D(input-date), T(input-time)
 *           R(input-radio),  S(select),     A
 *    maxlen : input 입력 최대길이 
 *    onlyView : true|false 단순 표출 여부(컨트롤과 연계 여부 확인)
 * @param height
 * @param jsonRoot
 * @param selectCallback
 * @param completeCallback
 * @param dblClkCallback  더블클릭 이벤트 추가
 */
function makeGrid(gridId, models, height, jsonRoot, selectCallback, completeCallback, dblClkCallback) {
	$(gridId).jqGrid({
		datatype    : "local",
	    colModel    : models,   //grid data model array
        loadonce    : true,
	    sortable    : false,    //column draggable 
	    filterable  : true,
	    sortorder   : "desc",
	    height      : height,
	    width       : 335,
	    editurl     : "clientArray",
	    shrinkToFit : false, //가로 스크롤
	    rownumbers  : true,
	    viewrecords : false,
	    loadtext    : '로딩중..',
	    gridview    : true,
	    hiddengrid  : true,
	    rowNum      : 99999,
	    ondblClickRow: function(rowid) {  //double click event
	    	if(dblClkCallback != undefined) 
	    		dblClkCallback(rowid);
	    },
	    onSelectRow : function(rowid) {
	    	if(selectCallback != undefined) {selectCallback(rowid);}	
	    	if(models[0].onlyView == true) {return;}
	    	
	    	defaultOnSelected(models, gridId, rowid);
	    },
	    jsonReader: {
		    repeatitems : false,
		    root        : jsonRoot,
		    id          : "NM"
	    },
		loadBeforeSend: function(){
		},
	    loadComplete: function(data) {
	    	$(this).jqGrid('hideCol', 'rn'); //row number hide
	    	if(data.rows.length == 0){
	    		$(gridId +">tbody").append("<tr id=\"search_none\" style='height:120px;'><td align='center' colspan='"+models.length+"'>검색 결과가 없습니다.</td></tr>");
	    	}

	    	if(completeCallback != undefined) completeCallback(data);	
	    }
	});	
	
	if(models[0].btn!= undefined)
		setButtonEvent(models[0].btn);	
	
//	$(gridId).sortableRows();   
}

/**
 * 
 */
function makeMultiGrid(gridId, models, height, jsonRoot, selectCallback, completeCallback, dblClkCallback) {
	$(gridId).jqGrid({
		datatype    : "local",
	    colModel    : models,   //grid data model array
        loadonce    : true,
	    sortable    : false,    //column draggable 
	    filterable  : true,
	    sortorder   : "desc",
	    height      : height,
	    width       : 335,
	    editurl     : "clientArray",
	    shrinkToFit : false, //가로 스크롤
	    rownumbers  : false,
	    viewrecords : false,
	    loadtext    : '로딩중..',
	    gridview    : true,
	    hiddengrid  : true,
	    rowNum      : 99999,
	    multiselect : true,
	    multiboxonly: true,
	    beforeSaveCell: function(rowid,celname,value,iRow,iCol) {
	        log('New cell value: "'+value+'"');
	    },
	    ondblClickRow: function(rowid) {  //double click event
	    	if(dblClkCallback != undefined) 
	    		dblClkCallback(rowid);
	    },
	    onSelectRow : function(rowid) {
	    	if(selectCallback != undefined) {selectCallback(rowid);}	
	    	if(models[0].onlyView == true) {return;}
	    	
	    	defaultOnSelected(models, gridId, rowid);
	    },
	    jsonReader: {
		    repeatitems : false,
		    root        : jsonRoot,
		    id          : "NM"
	    },
		loadBeforeSend: function(){
		},
	    loadComplete: function(data) {
	    	if(data.rows.length == 0){
	    		$(gridId +">tbody").append("<tr style='height:120px;'><td align='center' colspan='"+models.length+"'>검색 결과가 없습니다.</td></tr>");
	    	}

	    	if(completeCallback != undefined) completeCallback(data);	
	    }
	});	
	if(models[0].btn!= undefined)
		setButtonEvent(models[0].btn);	
}


/**
 * 
 */
function makeFilterGrid(gridId, models, height, jsonRoot, selectCallback, completeCallback, dblClkCallback) {
	var $grid = $(gridId);
	var getColumnIndexByName = function (columnName) {
        var cm = $(this).jqGrid('getGridParam', 'colModel'), i, l = cm.length;
        for (i = 0; i < l; i += 1) {
            if (cm[i].name === columnName) {
                return i; // return the index
            }
        }
        return -1;
    };
   
    var modifySearchingFilter = function (separator) {
        var i, l, rules, rule, parts, j, group, str, iCol, cmi, cm = this.p.colModel,
            filters = $.parseJSON(this.p.postData.filters);
        if (filters && filters.rules !== undefined && filters.rules.length > 0) {
            rules = filters.rules;
            for (i = 0; i < rules.length; i++) {
                rule = rules[i];
                iCol = getColumnIndexByName.call(this, rule.field);
                cmi = cm[iCol];
                if (iCol >= 0 &&
                        ((cmi.searchoptions === undefined || cmi.searchoptions.sopt === undefined)
                            && (rule.op === myDefaultSearch)) ||
                        (typeof (cmi.searchoptions) === "object" &&
                            $.isArray(cmi.searchoptions.sopt) &&
                            cmi.searchoptions.sopt[0] === rule.op)) {
                    // make modifications only for the 'contains' operation
                    parts = rule.data.split(separator);
                    if (parts.length > 1) {
                        if (filters.groups === undefined) {
                            filters.groups = [];
                        }
                        group = {
                            groupOp: 'OR',
                            groups: [],
                            rules: []
                        };
                        filters.groups.push(group);
                        for (j = 0, l = parts.length; j < l; j++) {
                            str = parts[j];
                            if (str) {
                                // skip empty '', which exist in case of two separaters of once
                                group.rules.push({
                                    data: parts[j],
                                    op: rule.op,
                                    field: rule.field
                                });
                            }
                        }
                        rules.splice(i, 1);
                        i--; // to skip i++
                    }
                }
            }
            this.p.postData.filters = JSON.stringify(filters);
        }
    };
	
    function setSearchSelect(columnName) {
    	$grid.jqGrid('setColProp', columnName, {
            stype: 'select',
            searchoptions: {
                sopt: ['eq', 'ne'],
                multipleSearch: true,
                multipleGroup: true,
                recreateFilter: true,
                closeOnEscape: true,
                closeAfterSearch: true,
                value: buildSearchSelect(getUniqueNames(columnName)),
                attr: { multiple: 'multiple', size: 2 },
                dataInit: dataInitMultiselect
            }
    	});
    }
    
    function buildSearchSelect(uniqueNames) {
        var values = '';
        $.each(uniqueNames, function () {
            if (this.length > 0) {
                values += this + ":" + this + ";";
            }
        });

        if (values != null) {
            values = values.substr(0, values.length - 1);
        }

        return values;
    };

    function getUniqueNames(columnName) {
        var texts = $grid.jqGrid('getCol', columnName);
        var uniqueTexts = [];
        var textsLength = texts.length;
        var text;
        var textsMap = {};
        var i;

        for (i = 0; i < textsLength; i++) {
            text = texts[i];
            if (text !== undefined && textsMap[text] === undefined) {
                // to test whether the texts is unique we place it in the map.
                textsMap[text] = true;
                uniqueTexts.push(text);
            }
        }

        uniqueTexts.sort();
        return uniqueTexts;
    };

    function dataInitMultiselect(elem) {
    	setTimeout(function () {
            var $elem = $(elem), id = elem.id,
                inToolbar = typeof id === "string" && id.substr(0, 3) === "gs_",
                options = {
                    selectedList: 2,
                    height: "auto",
                    checkAllText: "All",
                    uncheckAllText: "No",
                    noneSelectedText: "Any",
                    open: function () {
                        var $menu = $(".ui-multiselect-menu:visible");
                        $menu.width("auto");
                        return;
                    }
                },
                $options = $elem.find("option");
            if ($options.length > 0 && $options[0].selected) {
                $options[0].selected = false; // unselect the first selected option
            }
            if (inToolbar) {
                options.minWidth = 'auto';
            }
            $elem.multiselect(options);
            $elem.siblings('button.ui-multiselect').css({
                width: inToolbar ? "98%" : "100%",
                marginTop: "1px",
                marginBottom: "1px",
                paddingTop: "3px"
            });
        }, 50);
    };
    
    $grid.jqGrid({
		datatype    : "local",
	    colModel    : models,   //grid data model array
        loadonce    : true,
	    sortable    : false,    //column draggable 
	    filterable  : true,
	    sortorder   : "desc",
	    height      : height,
	    width       : 335,
	    editurl     : "clientArray",
	    shrinkToFit : false, //가로 스크롤
	    rownumbers  : false,
	    viewrecords : false,
	    loadtext    : '로딩중..',
	    gridview    : true,
	    hiddengrid  : true,
	    multiselect : true,
	    multiboxonly: true,
	    rowNum      : 99999,
	    beforeRequest: function () {
            modifySearchingFilter.call(this, ',');
        },
	    ondblClickRow: function(rowid) {  //double click event
	    	if(dblClkCallback != undefined) 
	    		dblClkCallback(rowid);
	    },
	    onSelectRow : function(rowid) {
	    	if(selectCallback != undefined) {selectCallback(rowid);}	
	    	if(models[0].onlyView == true) {return;}
	    	
	    	defaultOnSelected(models, gridId, rowid);
	    },
	    jsonReader: {
		    repeatitems : false,
		    root        : jsonRoot,
		    id          : "NM"
	    },
		loadBeforeSend: function(){
		},
	    loadComplete: function(data) {
	    	if(data.rows.length == 0){
	    		$(gridId +">tbody").append("<tr style='height:120px;'><td align='center' colspan='"+models.length+"'>검색 결과가 없습니다.</td></tr>");
	    	}
	    	$.each(models, function(index, value) {
	    		setSearchSelect(value.name);
	    	});
	    	$grid.jqGrid('filterToolbar', {
	    		stringResult: true, searchOnEnter: true, autosearch: true, defaultSearch: "cn"
	    	});
	    	if(completeCallback != undefined) completeCallback(data);	
	    }
	});	
    $grid.jqGrid('hideCol','cb'); //multi select hide
    if(models[0].btn!= undefined)
		setButtonEvent(models[0].btn);
    
    /* 필터툴바 초기화용 */
    $.jgrid.extend({
        destroyFilterToolbar: function () {
            "use strict";
            return this.each(function () {
                if (!this.ftoolbar) {
                    return;
                }
                this.triggerToolbar = null;
                this.clearToolbar = null;
                this.toggleToolbar = null;
                this.ftoolbar = false;
                $(this.grid.hDiv).find("table thead tr.ui-search-toolbar").remove();
            });
        }
    });
}

/************************************
 * grid grouping
 * @param gridId
 * @param name : group field name
 * @param groupText : '<strong> {0} - {1} Item(s)</strong>'
 ************************************/
function groupingGrid(gridId, name, groupText) {
	
	var groupOption = new Object();

	groupOption.groupField = [name];
	groupOption.groupColumnShow = [true];
	groupOption.groupCollapse = true;
	groupOption.groupText = [groupText];
	groupOption.groupOrder = ['asc'];
	
//	$(gridId).jqGrid("setGridParam", {sortname : name});
	$(gridId).jqGrid("setGridParam", {groupingView : groupOption});
	$(gridId).jqGrid("setGridParam", {grouping : true});
	$(gridId).trigger("reloadGrid"); 
}

/************************************
 * reload grid 
 * @param gridId, url, params, jsonRoot
 ************************************/
function reloadGrid(gridId, url, params, jsonRoot) {
	$(gridId).jqGrid("clearGridData");
	ajaxCall(url, params, null, onLoadSuccess, null);
	//TODO error
	function onLoadSuccess(data) { 
		hideLoader();
		$(gridId).jqGrid("setGridParam", {data : data[jsonRoot]});	
		$(gridId).trigger("reloadGrid");
	}
}

/*****************************
 * filter toolbar show/hide
 * @param id, mode(show/hide)
 *****************************/
function setFilter(id, mode) {
	if(mode == true)
		$("#gview_" + id).find(".ui-search-toolbar").show();
	else
		$("#gview_" + id).find(".ui-search-toolbar").hide();
}


function setInputValue(name, $gridObj, rowid){
	var val = $gridObj.jqGrid("getCell", rowid, name);
	$("#input_"+ name).val(val);
}

function setSelectValue(name, $gridObj, rowid){
	var val = $gridObj.jqGrid("getCell", rowid, name);
	setSelected("select_"+name, val, false);
}

function setCheckValue(name, $gridObj, rowid){
	var val = $gridObj.jqGrid("getCell", rowid, name);
	if(val == "1" || val == true) setCheckBoxChecked("check_"+ name, true);
	else                          setCheckBoxChecked("check_"+ name, false);
}
function setRadioValue(name, $gridObj, rowid){
	var val = $gridObj.jqGrid("getCell", rowid, name);
	setRadioChecked(name, val, true);
}

function setSelected(name, val, isChange) {
	$("#"+name + " option[value='"+val+"']").prop("selected", true);
	if(isChange) $("#"+name).trigger("change");
}

function setCheckBoxChecked(name, checked) {
	$("#"+name).prop("checked", checked);
}

function setRadioChecked(name, val, checked) {
	if(checked == true)
		$("input[name="+name+"][value="+val+"]").prop("checked", checked);	
	else
		$("input[name="+name+"]").prop("checked", checked);	
}

/**************************
 * grid default onSelected
 ***************************/
function defaultOnSelected(models, gridId, rowid) {
	$.each(models, function(index, value) {
		if(value.type == undefined) return true;
		if(value.type == "I" || value.type == "D" ||value.type == "T") {
			setInputValue(value.name, $(gridId), rowid);
		}else if(value.type == "S") {
			setSelectValue(value.name, $(gridId), rowid);
		}else if(value.type == "C") {
			setCheckValue(value.name, $(gridId), rowid);
		}else if(value.type == "R") {
			setRadioValue(value.name, $(gridId), rowid);
		}else if(value.type == "O") {
			value.val = $(gridId).jqGrid("getCell", rowid, value.name);
			log("Grid  Object id " +value.name + " type = " + value.val);
		}
	});
	
	setEditMode(models[0].btn, false, gridId);
}

/*****************
 * set button mode 
 *****************/
function setEditMode(btnName, val, gridid) {
	if(btnName === "" || btnName === undefined) return;
	if(val == true) {  
		$(btnName+"_new").prop("disabled", val);
		$(btnName+"_mod").prop("disabled", val);
		$(btnName+"_del").prop("disabled", val);
		$(btnName+"_save").prop("disabled", !val);
		$(btnName+"_cancel").prop("disabled", !val);
		
		$(btnName+"_new").addClass("disabled");
		$(btnName+"_mod").addClass("disabled");
		$(btnName+"_del").addClass("disabled");
		$(btnName+"_save").removeClass("disabled");
		$(btnName+"_cancel").removeClass("disabled");
		
	}else {
		$(btnName+"_new").prop("disabled", !val);
		$(btnName+"_mod").prop("disabled", !val);
		$(btnName+"_del").prop("disabled", !val);
		$(btnName+"_save").prop("disabled", val);
		$(btnName+"_cancel").prop("disabled", val);
		
		$(btnName+"_new").removeClass("disabled");
		$(btnName+"_mod").removeClass("disabled");
		$(btnName+"_del").removeClass("disabled");
		$(btnName+"_save").addClass("disabled");
		$(btnName+"_cancel").addClass("disabled");
	}
}	

/*********************
 * set button event
 *********************/
function setButtonEvent(btnName) {
	setEditMode(name, false);
	$(btnName+"_mod").bind("click", function(){
		setEditMode(btnName, true);
	});
	
	$(btnName+"_cancel").bind("click", function(){
		setEditMode(btnName, false);
	});
}









