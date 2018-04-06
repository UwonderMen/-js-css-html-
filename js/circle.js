// 循环伪数组
	circle =function(arr,fn){
	var i=0,
		len=arr.length;
	for(i;i<len;i++){
		fn(arr[i]); 	
	}
}

	// 随机生成图片位置
	bitrary = function(arr){
		var left,top;
		circle(arr,function(ele){
			left = Math.floor(Math.random()*160)+"px";
			top = Math.floor(Math.random()*200)+"px";
			ele.style.position = "absolute";
			ele.style.left = left;
			ele.style.top=top;
		})
	}

	//点击那张图片谁的z-index最高
	Zindex = function(arr,element){
		circle(arr,function(ele){
			ele.style.zIndex = 1;
		});
		element.style.zIndex = 300;
	}

	//修改大相框的位置
	situation = function(ele,ele1,ele2,left,top){
		var str=ele.src;//./upload/people-12-min.jpg
		var str1=str.split("-")[1];
		ele1.src="./upload/people"+str1+".jpg"
		ele2.style.left = (-310-left) + "px";
		ele2.style.top = top
	}
