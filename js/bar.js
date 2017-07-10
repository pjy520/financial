
var Bar = Class.extend({
  flag:false,//0：非新
  close:0,
  low:0,
  high:0,
  open:0,
  time:-1,
  xtime: '',
  ctor:function(_open,_high,_low,_close){
    this.open = _open;
    this.high = _high;
    this.low = _low;
    this.close = _close;
    
  },
  tick:function(price,time,min){
    /*
    1、获取当前时间戳
    2、比较time与当前时间
    */
    if(this.isNew(time,min)){
      this.flag = true;
    }else{
      this.flag = false;
    }
    this.time = time;
    if(this.flag){
      this.open = price;
      this.high = price;
      this.low = price;
      this.close = price;
    }else{
      if(price > this.high){
        this.high = price;
      }
      if(price < this.low){
        this.low = price;
      }
      this.close = price;
    }

  },
  isNew:function(time, min){
  	var lasttime = time - time% (60000 * min);
  	if(lasttime > this.time){
  		return true;
  	}else{
  		return false;
  	}
//  var temp = new Date();
//  var tempMin = temp.getMinutes() ;
//  tempMin = tempMin < 10 ? '0' + tempMin : tempMin;
//  var getMonth = temp.getMonth() < 9 ? '0' + ( temp.getMonth() + 1 ) : temp.getMonth() + 1;
//  var getDate = temp.getDate() < 10 ? '0' + temp.getDate() : temp.getDate();
//  var getHours = temp.getHours() < 10 ? '0' + temp.getHours() : temp.getHours();
//  var last = temp.getFullYear()+"/"+ getMonth + "/" + getDate + " " + getHours + ":" + tempMin+":00";
//  var next = temp.getFullYear()+"/"+ getMonth + "/" + getDate + " " + getHours + ":" + (tempMin+1)+":00";
//	this.xtime = last;
//  console.log(next);
//  var lasttime =new Date(last).getTime();
//  var nexttime =new Date(next).getTime();
//  console.log(time, lasttime, nexttime);
//  if(time < nexttime && time > lasttime){
//    return false;
//  }else{
//    return true;
//  }

  },
  toArray:function(){
    return [this.open,this.close,this.low,this.high];
  }

});