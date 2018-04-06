//注册监听事件
	ChangeType = function(element,event,targetType,fn){
		targetType = targetType || "";
			if(element.attachEvent){
				return function(){
					element.attachEvent("on"+event,fn,true);
				}
			}else if(element.addEventListener){
				return function(){
					element.addEventListener(event, fn,true);
				}
			}else {
				return function(){
					var event="on"+event;
					element.event = fn;
				}
			}
		}
