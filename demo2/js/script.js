var lineChartData = {
	//X轴
	labels : ["周一","周二","周三","周四","周五","周六","周日"],
	datasets : [
		{	
			//曲线和X轴之间的填充色
			fillColor : "rgba(0,255,0,0.5)",
			//曲线的颜色
			strokeColor : "rgba(0,0,255,1)",
			//点的颜色
			pointColor : "black",
			//点的线框颜色
			pointStrokeColor : "black",
			//鼠标放置后显示的颜色
			pointHighlightFill : "red",
			//鼠标放置后点的线框颜色
			pointHighlightStroke : "yellow",
			//Y轴数据
			data : [1,2,3,4,5,5,6,7,8,8,9,9]
		},
		{
			fillColor : "rgba(255,255,255,0)",
			strokeColor : "rgba(92, 184, 92, 1)",
			pointColor : "rgba(23, 126, 23, 1)",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "rgba(151,187,205,1)",
			data : [2,2,1,4,2,4,5,7,8,8,4,3]
		}
	]

}

window.onload = function(){
	var ctx = document.getElementById("canvasChart").getContext("2d");
	window.myLine = new Chart(ctx).Line(lineChartData, {
		responsive: true
	});
}