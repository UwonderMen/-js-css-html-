		//改变bannerleft颜色
		var bannerLeftUL = document.getElementById("bannerLeft"),
	 	 	childrenA = bannerLeftUL.getElementsByTagName("a");
	 	circle(childrenA,function(ele){
	 		var tempChange=ChangeType(ele,"mouseenter","bannerMouseenter",function(){
	 			ele.className ="bannerMouseenter";
	 		});
	 		var tempChange1=ChangeType(ele,"mouseout"," ",function(){
	 			ele.className =" ";
	 		});
	 		tempChange();
	 		tempChange1();
	 	})
	 	// 改变bannerRight右侧鼠标经过颜色改变
	 	var bannerRightUL = document.getElementById("bannerRight"),
	 	 	childrenA1 = bannerRightUL.getElementsByTagName("a");
	 	 	circle(childrenA1,function(ele){
	 		var tempChange=ChangeType(ele,"mouseenter","bannerMouseenter",function(){
	 			ele.className +="bannerMouseenter";
	 		});
	 		var tempChange1=ChangeType(ele,"mouseout","",function(){
	 			ele.className ="";
	 		});
	 		tempChange();
	 		tempChange1();
	 	})

	 	 	// 改变主题栏颜色变化
	var headerLine = document.getElementsByClassName("headerLine")[0],
	 	 	childrenA1 = headerLine.getElementsByTagName("a");
	 	 	circle(childrenA1,function(ele){
	 		var tempChange=ChangeType(ele,"mouseenter","bannerMouseenter",function(){
	 			ele.className +="bannerMouseenter";
	 		});
	 		var tempChange1=ChangeType(ele,"mouseout","",function(){
	 			ele.className ="";
	 		});
	 		tempChange();
	 		tempChange1();
	 	})

	 	 	//改变图片位置
	var Photoes=document.getElementsByClassName("photo")[0],
		imgs=Photoes.getElementsByTagName("img"),
		displayDiv=document.getElementsByClassName("displayImg")[0],
		displayImg=displayDiv.getElementsByTagName("img")[0],
		peopleImg = document.getElementsByClassName("peopleImg")[0];
		
	//小图片的随机位置
	bitrary(imgs);

	//改变图片的上下关系
	circle(imgs,function(ele){
		var imgzIndex=ChangeType(ele,"click","zIndex",function(e){
	 		Zindex(imgs,this)
	 	});
	 	imgzIndex();
	})
	//为图片添加mouseenter事件
	circle(imgs,function(ele){
		var displayBigImg=ChangeType(ele,"mouseover","zIndex",function(e){
	 		// console.log(peopleImg.offsetTop,e.pageX,e.pageY);
	 		displayDiv.style.display = "block";
	 		x = 0;
	 		y = (e.pageY - peopleImg.offsetTop-47-210/2)+"px";
	 		console.log(x,y);
	 		situation(this,displayImg,displayDiv,x,y);
	 	});
	 	var disappearBigImg=ChangeType(ele,"mouseout","zIndex",function(e){
	 		// console.log(this,displayImg,e.clientX,e.clientY);
	 		displayDiv.style.display = "none";
	 	});
	 	displayBigImg();
	 	disappearBigImg();
	 })
	
	//给分享到注册鼠标mouseenter和mouseout事件
	var sina = document.getElementsByClassName("sina")[0],
		weixin = document.getElementsByClassName("weixin")[0],
		weibo = document.getElementsByClassName("weibo")[0],
		QQ = document.getElementsByClassName("QQ")[0];
		var sinaChange=ChangeType(sina,"mouseenter","",function(){
 			sina.style.background = "url(./image/sites.png) 2px 2px";
 		});
 		var sinaNoChange=ChangeType(sina,"mouseout","",function(){
 			sina.style.background = "url(./image/sites.png) -220px 2px";
 		});
 		sinaChange();
 		sinaNoChange();
 		var weixinChange=ChangeType(weixin,"mouseenter","",function(){
 			weixin.style.background = "url(./image/sites.png) 0px -210px";
 		});
 		var weixinNoChange=ChangeType(weixin,"mouseout","",function(){
 			weixin.style.background = "url(./image/sites.png) -223px -210px";
 		});
 		weixinChange();
 		weixinNoChange();
 		var QQChange=ChangeType(QQ,"mouseenter","",function(){
 			QQ.style.background = "url(./image/sites.png) -111px 0px";
 		});
 		var QQNoChange=ChangeType(QQ,"mouseout","",function(){
 			QQ.style.background = "url(./image/sites.png) -333px 0px";
 		});
 		QQChange();
 		QQNoChange();
 		var weiboChange=ChangeType(weibo,"mouseenter","",function(){
 			weibo.style.background = "url(./image/sites.png) 2px -68px";
 		});
 		var weiboNoChange=ChangeType(weibo,"mouseout","",function(){
 			weibo.style.background = "url(./image/sites.png) -220px -68px";
 		});
 		weiboChange();
 		weiboNoChange();
	
		//轮播图
		var mainLeft = document.getElementsByClassName("mainLeft")[0],
		arc = document.getElementsByClassName("arc")[0],
		lis = arc.children;
		mainLeftUl = mainLeft.children[0];
		animate(mainLeftUl,lis,"circleChange");

		//移动鼠标获取焦点(thum图)
	var thum = document.getElementsByClassName("thum"),
		thumDiv,
		hoverChange,
		hoverNoChange,
		arrLis,
		thumLis=[];
	for(var i = 0 , len = thum.length ; i < len ; i++){
		arrLis = thum[i].getElementsByTagName("li");
		for(var k = 0, len2 = arrLis.length ; k < len2 ;k ++ ){
			thumLis.push(arrLis[k]);
		}
	}
	for(var j = 0 , len1 = thumLis.length ; j < len1 ; j++ ){
			thumDiv = thumLis[j].getElementsByTagName("div")[0];
			hoverChange=(function(thumDiv){
				return ChangeType(thumLis[j],"mouseenter","",function(){
 			thumDiv.className = " hoverChange ";
 			});
		}(thumDiv))
 			hoverNoChange=(function(thumDiv){
 				return ChangeType(thumLis[j],"mouseout","",function(){
 				thumDiv.className = "";
 				thumDiv.style.cursor = "pointer";
 			});
 		}(thumDiv))
 		hoverChange();
 		hoverNoChange();
	}
