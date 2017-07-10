//获取行情数据
//http://service.fx168.com/graph/WebServices/QueryDataJsonByCount.aspx?userCode=FX168APP&bCode=GBP&dType=Min01&clientDate=2014-9-26%200%3A00%3A00&sign=123&count=120
var hq_url = "http://service.fx168.com/graph/WebServices/QueryDataJsonByCount.aspx?userCode=FX168APP&bCode={code}&dType={type}&clientDate={clientDate}&sign=123&count={top}"
function get_f_data(code,type,top,success,error){
	 var d = new Date();
    var strDatetime = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
	var request_url = hq_url.replace("{code}",code).replace("{type}",type).replace("{clientDate}",strDatetime).replace("{top}",top);
	mui.ajax(request_url,{
		method:'get',
		dataType:'json',
		success:function(data){
			var hq = parse(data);
			success(hq);
		},
		error:function(data){
			error(data);
		}
	});
}

function parse(data){
	var datastr = data.DataListStr;
	var arr = datastr.split("^");
	var date=[],prices = [];
	for(var i = arr.length - 1;i >=0;i--){
		var tmp_arr = arr[i].split(",");

		date.push(tmp_arr[0]);
		var price = [tmp_arr[1],tmp_arr[2],tmp_arr[3],tmp_arr[4]];
		prices.push(price);

	}
	var result = {};
	result.date = date;
	result.prices = prices;
	return result;
}
