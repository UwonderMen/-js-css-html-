	var	timer,
		runX=720,
		startX = 0,
		endX = -7200,
		data = 0,
	 	widthX = 7200 / 10;
	animate = function(element,lis,type){
		 	setTimeout(function(){
			 	timer=setTimeout(function(){
		 		for(var i=0,len=lis.length;i<len;i++){
					lis[i].index= i ;
					lis[i].removeAttribute("id");
				}
				lis[data].setAttribute("id",type);
		 		runX = startX - widthX*data;
		 		// runX +=startX - widthX;
		 		data = data + 1;
		 		// if(runX == endX){
		 		// 	runX=0;
		 		// }
				if(data == 10){
					data = 0 ;
				}
				element.style.left  = runX + "px";
		 	},600);
		 		animate(element,lis,type);
		 	},2000)
		 	
	}
