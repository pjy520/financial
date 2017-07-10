 function setOption(dates,data,x){
        var option = {
            backgroundColor: 'rgba(43, 43, 43, 0)',
            tooltip: {
                trigger: 'axis',
                axisPointer : {
                    type : 'line',
                    animation: false,
                    lineStyle: {
                        color: '#ffffff',
                        width: 1,
                        opacity: 1
                    }
                },
                formatter: function (params) {
                    var res = "时间:"+params[0].name;
                    res += '<br/>  开盘 : ' + params[0].value[0] + '<br/>  最高 : ' + params[0].value[3];
                    res += '<br/>  收盘 : ' + params[0].value[1] + '<br/>  最低 : ' + params[0].value[2];
                    return res;
                }
            },
            data:[
            	{
            		name : '当前值',
            		yAxis : x
            	}
            ],
            grid: {
                x: 43,
                y:20,
                x2:46,
                y2:5
            },
            xAxis: {
                type: 'category',
                data: dates,
                show:false,
                axisLine: { lineStyle: { color: '#8392A5' } }
            },
            yAxis: {
                scale: true,
                axisLine: { lineStyle: { color: '#8392A5' } },
                splitLine: { show: false },
                axisTick:{
                    show:false,
                },
                splitArea: {
                    show: false
                },
                axisLabel: {
                    inside: false,
                    margin: 4
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: "#8392A5"
                    } 
                }
            },
            dataZoom: [{
			        textStyle: {
			            color: '#8392A5'
			        },
			        handleSize: '60%',
			        dataBackground: {
			            areaStyle: {
			                color: '#8392A5'
			            },
			            lineStyle: {
			                opacity: 0.8,
			                color: '#8392A5'
			            }
			        },
			        handleStyle: {
			            color: '#fff',
			            shadowBlur: 3,
			            shadowColor: 'rgba(0, 0, 0, 0.6)',
			            shadowOffsetX: 2,
			            shadowOffsetY: 2
			        }
			    },{type:'inside',show: false}],
  
            animation: false,
            series: [
                {
                    type: 'candlestick',
                    name: '',
                    data: data,
                    markLine: {
                        symbol: ['none', 'none'],
                        clickable:false,
                        data: [
                            {name: '标线2起点', value: x, xAxis: "1", yAxis: x}, //持仓均线
                            {name: '标线2终点', xAxis: "2", yAxis: x}
                        ]
                    },
                    itemStyle: {
                        normal: {
                            color: '#FD1050',
                            color0: '#0CF49B',
                            borderColor: '#FD1050',
                            borderColor0: '#0CF49B'
                        }
                    }
                }
            ]
        }
        return option;
    };