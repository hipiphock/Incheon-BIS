/**
 * require highchart
 */
document.write('<script type = "text/javascript" src = "./js/lib/chart/highcharts.js"></script>');
document.write('<script type = "text/javascript" src = "./js/lib/chart/highcharts-more.js"></script>');
document.write('<script type = "text/javascript" src = "./js/lib/chart/highcharts-3d.js"></script>');
document.write('<script type = "text/javascript" src = "./js/lib/chart/exporting.js"></script>');

/**************************
 * draw High Chart 2d
 * @param container
 * @param chartType
 * @param chartOpt
 ***************************/
function setChart2d(container, chartType, chartOpt){
	
	$("#"+container).highcharts({
		chart: {  
            type: chartType    //TODO 차트 타입  : 'column' , 'spline'
		},
        title: {
            text: chartOpt.title,
            x: -20 //center
        },
        subtitle: {
            text: chartOpt.subtitle,
            x: -20
        },
        xAxis: chartOpt.xAxis,
        yAxis: chartOpt.yAxis,
        tooltip: {
            valueSuffix: ''
        },
        legend: {
            layout        : 'horizontal',
            align         : 'center',
            verticalAlign : 'top',
            borderWidth   : 0
        },
        series: chartOpt.series
    });
	
	return $(container);
};

function setChart2dEx(container, chartType, chartOpt){
	
	$("#"+container).highcharts({
		chart: {  
            type: chartType
		},
        title: {
            text: chartOpt.title,
            x: -20 //center
        },
        subtitle: {
            text: chartOpt.subtitle,
            x: -20
        },
        xAxis: {
        	/*startOnTick: true,
            endOnTick: true,
            showLastLabel: true*/
        },
        yAxis: chartOpt.yAxis,
        tooltip: {
            valueSuffix: ''
        },
        legend: {
        	layout        : 'vertical',
            align         : 'right',
            verticalAlign : 'middle',
            borderWidth   : 0
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 3,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                }
            }
        },
        
        series: chartOpt.series
    });
	
	return $("#"+container);
};

/*************************
 * draw High Chart 3d
 * @param container
 * @param chartType
 * @param chartOpt
 *************************/
function setChart3d(container, chartType, chartOpt){
	
	$("#"+container).highcharts({
		chart: {  
            type: chartType,    //TODO 3d 차트 타입  : 'column' 
            margin: 75,
            options3d: {
				enabled: true,
                alpha: 15,
                beta: 15,
                depth: 50
            }
		},
		plotOptions: {
            column: {
                depth: 25
            }
        },
        title: {
            text: chartOpt.title,
            x: -20 //center
        },
        subtitle: {
            text: chartOpt.subtitle,
            x: -20
        },
        xAxis: {
            categories: chartOpt.xAxis.categories
        },
        yAxis: chartOpt.yAxis,
        tooltip: {
            valueSuffix: ''
        },
        legend: {
            layout        : 'vertical',
            align         : 'right',
            verticalAlign : 'middle',
            borderWidth   : 0
        },
        series: chartOpt.series
    });
	
	return $("#"+container);
};


/**
 * change chart Type
 * Types : Area chart, Bar chart,
 */
function changeChartType(container, type) {
	$("#"+container).series.update({
        type: type
    });
}




