
require(["../scripts/config.js"], function(){
	require(["common","jquery", "swiper", "fontscroll","sport2","public","animate"], function(com, $, Swiper ){
		
//		var input = document.getElementsByClassName("leon_autosug_input") ;
//			var leon_welcome = document.getElementsByclassName("leon_welcome") 
//		input.onclick = function(){
//			leon_welcome.style.display = "none";
//		}


//		$(".leon_autosug_input").click = (()=>{
////			$(".leon_welcome").style.display = "none";
//			$(".leon_welcome").hide();
//		})

		//搜索框
		$(".leon_autosug_input").click (function(){
//			$(".leon_welcome").style.display = "none";
			$(".leon_welcome").hide();
		})
		$(".leon_autosug_input").blur (function(){
			$(".leon_welcome").show();
		})
		//导航
		var $nav = $(".black_nav");
			
			$(window).scroll(function(){
				
				var scrollTop = $(this).scrollTop();
//				console.log(scrollTop)
				if(scrollTop >= 624) {
					$nav.css({"position":"fixed","top":"0","left":"0","right":"0","margin":"auto"});
				}else{
					$nav.css({"position":""})
				}
				
				var index =  Math.floor((scrollTop-624)/1700);
//				console.log(index);
				$(".black_nav ul li").eq(index).find("span").addClass("active");
				$(".black_nav ul li").eq(index).siblings().find("span").removeClass("active");
				
			})
			
			
		
		$(".big_pic").mouseenter(function(){
			$(this).addClass("curr")
		})
		$(".big_pic").mouseleave(function(){
			$(this).removeClass("curr")
		})
		
		$(".big_pic").mouseenter(function(){
			$(this).find(".fixname").stop().animate({"bottom":"-25px"},500)
			$(this).find(".zytus_size").stop().animate({"top":"-72px"},200)
		})
		$(".big_pic").mouseleave(function(){
			$(".fixname").stop().animate({"bottom":"0px"},500)
			$(".zytus_size").stop().animate({"top":"0px"},300)
		})
		
		//页面中id名是唯一的，不要重复命名
//		var mySwiper = new Swiper('.swiper-container',{
//			pagination: {
//			    el: '.swiper-pagination',
//			  },
//			loop : true,
//		})

		$(".my_xiu").mouseenter(function(){
			$(this).find(".myXiu_menu").css({"display":"block"})// width  	opacity 等数值的变化可以用 animate  ,属性的变化只能用 css  ，动画时间的效果需要查资料
		})
		$(".my_xiu").mouseleave(function(){
			$(this).find(".myXiu_menu").css({"display":"none"})
		})


		
		//轮播图
//		var _timer = setInterval( autoPlay , 2500 );
//		var index = 0;
//		var oList = document.getElementById("uu").children;
//		var uList = document.getElementById("box").children;
//		function autoPlay(){
//			index++;
//			if( index == oList.length ){
//				index = 0;
//			}
//			for( var i = 0 ; i < oList.length ; i++ ){
//				oList[i].className = "";
//				startMove( uList[i] , 0 , "opacity" );
//			}
//			oList[index].className = "current";
//			startMove( uList[index] , 100 , "opacity" );
//		}
//		for( let i= 0 ; i <oList.length ; i++ ){
//			oList[i].onmouseover = function(){
//				clearInterval( _timer );
//				index = i - 1;
//				autoPlay();
//			}
//			uList[i].onmouseover = function(){
//				clearInterval( _timer );
//				
//			}
//			oList[i].onmouseout = function(){
//				_timer = setInterval( autoPlay , 2500 );
//			}
//			uList[i].onmouseout = function(){
//				_timer = setInterval( autoPlay , 2500 );
//			}
//		}


		function ImgScroller(id){
			this.init = function(){
				this.currentIndex = 0;
				this.ele  = document.querySelector(id);
				this.imgWrapper = this.ele.children[0];
				this.navs = Array.from(this.ele.children[1].children);
				this.addEvents();
			}
			this.addEvents = function(){
				var $this = this;
				this.ele.addEventListener("mouseenter",()=>{
					clearInterval(this.timer);
				})
				this.ele.addEventListener("mouseleave",()=>{
					this.start()
				})
				this.navs.forEach(function(item,index){
					item.addEventListener("click",function(){
						$this.currentIndex = index;
						$this.tabImg();
						$this.tabNav();
					})
				})
			}
			this.start = function(){
				this.timer  = setInterval(()=>{
					++this.currentIndex == 4 ? this.currentIndex = 0 :"";
					this.tabImg();
					this.tabNav();
				},3000)
			}
			this.tabImg = function(){
				animate(this.imgWrapper,{left:-this.currentIndex*1000})
			}
			this.tabNav = function(){
				this.navs.forEach(function(item){
					item.className = "";
				})
				this.navs[this.currentIndex].className = "active"
			}
		}
		var imgscroller = new ImgScroller(".box")
		imgscroller.init();
		imgscroller.start();

		
		com.randomColor();
		

		
//		$.ajax({
//			url : "/abcdefg",
//			success : function(data){
//				console.log(data);
//			}
//		})

//http://my.xiu.com/v3/activityExt/goodsList?jsoncallback=jQuery172046212822454981506_1544413986733&sns=3I103749%2C3I122148%2C3Q031849%2C3Q025217%2C3Q031384%2C3I119639%2C52047923%2C3O052242%2C3O061280%2C3I122502%2C3I122499%2C3I122517%2C3I083837%2C3I096621%2C3I122532%2C3I122531%2C3I122541%2C3I122539%2C3I122538%2C3I122522%2C3I109107%2C52048626%2C52048619%2C52048692%2C52047158%2C5D015014%2C3Q023377%2C3Q023386%2C3Q023381%2C3Q023379&_=1544413986956
		$(function(){
			$.ajax({
				url:  "http://my.xiu.com/v3/activityExt/goodsList?sns=3I103749%2C3I122148%2C3Q031849%2C3Q025217%2C3Q031384%2C3I119639%2C52047923%2C3O052242%2C3O061280%2C3I122502%2C3I122499%2C3I122517%2C3I083837%2C3I096621%2C3I122532%2C3I122531%2C3I122541%2C3I122539%2C3I122538%2C3I122522%2C3I109107%2C52048626%2C52048619%2C52048692%2C52047158%2C5D015014%2C3Q023377%2C3Q023386%2C3Q023381%2C3Q023379&_=1544413986956",
				dataType: 'jsonp',
				jsonp: 'jsoncallback',
				success : function(data){
					
//					console.log(data[0]);
//					var jsonData = JSON.stringify(data);// 转成JSON格式
//					var result = $.parseJSON(jsonData);// 转成JSON对象
//					 var json =JSON.stringify(data[0]) ;
					
//					var person = {fname:"John", lname:"Doe", age:25}; 
//					var text = "";
//					var x;
//					for (x in person) {
//					    text += person[x];
//					}
					
					var jsonArr = data[0];
//					var x;
//					var json = [];
//					for(x in jsonArr){
//						json += jsonArr[x];
//					}
//					 console.log(json);
					 
					var json = []
					for (let i in jsonArr) {
//					    let o = {};
//					    o[i] = jsonArr[i];
//					    json.push(o)
						json.push(jsonArr[i])
					}
//					console.log(json);
					 
					var information = ""
			//		如何根据数据,渲染页面
//					console.log(json.length)
					for(var i=0;i<8;i++){
//						console.log(json[i].price)
						information +=  
					
					`<div class="zt_bigpic">
						<ul class="ztul">
							<li class="big_pic">
							<div class="banzi"></div>
								<ol id="flag_stock_211856_3I103749">
									<li class="zt_tus" goodsid = "${json[i].goodsId}">
										<a href="goodsinfo.html" class="Img">
											<img src="${json[i].goodsImg}" style="display: inline;" />
										</a>
										<div class="fixname" style="bottom: 0px;">
											<p>
												参加满减<span></span>
											</p>
										</div>
										<div  class="zytus_size" style="top: 0px;">
											<p class="zytus_size_tit">可选配置：</p>
											<ul class="zytus_size_lie clearfix J_sizeArea">
												<li class="ssl_item"><span>31mm</span></li>
											</ul>
										</div>
									</li>
									<li class="tit tit1">${json[i].brandEnName}</li>
									<li class="tit tit2"><a href="#" > ${json[i].goodsName}</a></li>
									<li class="price"><ins class="showprice">${json[i].finalPrice}</ins>
									<!--<a href="javascript:void(0);" class="addshopcar"></a>-->
									</li>
									
								</ol>
							</li>
						</ul>
					</div>`
						
					}
					
					$(".w22").append(information)
//					$(".w2").innerHTML = information;
					
//					var jsonStr = data;
//					 var jsonObj =  JSON.parse(jsonStr)
//   				   console.log(jsonObj)
//   				    var jsonStr1 = JSON.stringify(jsonObj)
//					     console.log(jsonStr1+"jsonStr1")
//					     var jsonArr = [];
//					     for(var i =0 ;i < jsonObj.length;i++){
//					            jsonArr[i] = jsonObj[i];
//					     }
//					     console.log(typeof(jsonArr))


//				$(function(){
//					$(".big_pic").mouseenter(function(){
//						$(this).addClass("curr")
//						$(this).find(".fixname").stop().animate({"bottom":"-25px"},500)
//						$(this).find(".zytus_size").stop().animate({"top":"-72px"},200)
//					})
//					$(".big_pic").mouseleave(function(){
//						$(this).removeClass("curr")
//						$(".fixname").stop().animate({"bottom":"0px"},500)
//						$(".zytus_size").stop().animate({"top":"0px"},300)
//					})
//				})
//					$(".clearfix").mouseenter(function(){
//						$(this).find(".big_pic").addClass("curr")
//						$(this).find(".fixname").stop().animate({"bottom":"-25px"},500)
//						$(this).find(".zytus_size").stop().animate({"top":"-72px"},200)
//					})
//					$(".clearfix").mouseleave(function(){
//						$(this).find(".big_pic").removeClass("curr")
//						$(".fixname").stop().animate({"bottom":"0px"},500)
//						$(".zytus_size").stop().animate({"top":"0px"},300)
//					})
					
//					$(function() {
//						$('.clearfix').hoverdir();
//					});
//					$.fn.hoverdir = function(){
//						$(this).on("mouseenter", function(){
//							$(this).find(".big_pic").addClass("curr")
//							$(this).find(".fixname").stop().animate({"bottom":"-25px"},500)
//							$(this).find(".zytus_size").stop().animate({"top":"-72px"},200)
//					//		console.log("evtype:"+evType+",dir:"+direction);
//						});
//						$(this).on("mouseleave", function(){
//							$(this).find(".big_pic").removeClass("curr")
//							$(".fixname").stop().animate({"bottom":"0px"},500)
//							$(".zytus_size").stop().animate({"top":"0px"},300)
//						});
//					}
//				$(document).on("mouseout","#suggestion"+num,function(){
//			       $('#dialogTable'+num).dialog('close');
//			    });
				
				
				
//				var arr2 = json.slice(21,22);
//				var arr3 = json.slice(28,29);
//				var arr4 = json.slice(12,13);
//				var arr5 = json.slice(14,15);
//				var arr6 = json.slice(6,7);
//				var arr7 = json.slice(26,27);
//				var arr = new Array(6);
//				arr.concat(arr2,arr3,arr4,arr5,arr6,arr7);
////				arr.push(arr3);
				
				
				var arr2 = json.slice(21,29);
				var nzss = ""
//				console.log(arr2)
			//		如何根据数据,渲染页面
//					console.log(json.length)
					for(var i=0;i<8;i++){
//						console.log(json[i].price)
						nzss +=  
					
					`<div class="zt_bigpic">
						<ul class="ztul">
							<li class="big_pic">
							<div class="banzi"></div>
								<ol id="flag_stock_211856_3I103749">
									<li class="zt_tus" goodsid = "${json[i].goodsId}">
										<a href="#">
											<img src="${arr2[i].goodsImg}" style="display: inline;" />
										</a>
										<div class="fixname" style="bottom: 0px;">
											<p>
												参加满减<span></span>
											</p>
										</div>
										<div  class="zytus_size" style="top: 0px;">
											<p class="zytus_size_tit">可选配置：</p>
											<ul class="zytus_size_lie clearfix J_sizeArea">
												<li class="ssl_item"><span>40cm+2cm</span></li>
											</ul>
										</div>
									</li>
									<li class="tit">${arr2[i].brandEnName}</li>
									<li class="tit"><a href="#" > ${arr2[i].goodsName}</a></li>
									<li class="price"><ins class="showprice">${arr2[i].finalPrice}</ins></li>
									
								</ol>
							</li>
						</ul>
					</div>`
						
					}
					$(".w23").append(nzss)

				$(".big_pic").mouseenter(function(){
					$(this).addClass("curr")
				})
				$(".big_pic").mouseleave(function(){
					$(this).removeClass("curr")
				})
				
				$(".big_pic").mouseenter(function(){
					$(this).find(".fixname").stop().animate({"bottom":"-25px"},500)
					$(this).find(".zytus_size").stop().animate({"top":"-72px"},200)
				})
				$(".big_pic").mouseleave(function(){
					$(".fixname").stop().animate({"bottom":"0px"},500)
					$(".zytus_size").stop().animate({"top":"0px"},300)
				})
				

//				// 点击商品进入详情页,将点击的这个商品信息存进cookie,供详情页使用
				$(".w22").on("click",".Img",function(){
					removeCookie("productMessage")
					let goodsname = $(this).parents(".zt_tus").siblings(".tit1").text()
					let goodsinfo = $(this).parents(".zt_tus").siblings(".tit2").find("a").text()
					let imgsrc = $(this).find("img").attr("src")
					let goodsprice = $(this).parents(".zt_tus").siblings(".price").find(".showprice").text()
					let goodsId = $(this).parents(".zt_tus").attr("goodsid")
//					console.log(goodsname)
//					console.log(goodsinfo)
//					console.log(imgsrc)
//					console.log(goodsprice)
//					console.log(goodsId)
					let productGoods={
						"name" : goodsname,
						"price" : goodsprice,
						"info" : goodsinfo,
						"imgsrc" : imgsrc,
						"goodsid" : goodsId
					}
					let newJson=[productGoods];
					
					setCookie("productMessage", JSON.stringify(newJson));
				})
	
	
//	<tr><td><a rel="nofollow" href="http://portal.xiu.com/business/prdUrlCmd?langId=-7&amp;storeId=10154&amp;catalogId=10101&amp;goodsId=46558538&amp;goodsSn=3Q023379&amp;sellType=5" target="_blank"><img width="48" height="48" src="http://images.xiu.com/upload/goods20161103/3Q023379/3Q0233790001/g1_50_50.jpg" onerror="this.src='http://www.xiustatic.com/static/img/default/default.50_50.jpg'"></a></td><td><p><a rel="nofollow" href="http://portal.xiu.com/business/prdUrlCmd?langId=-7&amp;storeId=10154&amp;catalogId=10101&amp;goodsId=46558538&amp;goodsSn=3Q023379&amp;sellType=5" title="signature系列时尚椎体浅粉色宝石女士耳饰 颜色:金色 尺码:均码 " target="_blank">Arts &amp; Crafts<br>signature系列时尚椎体浅粉色宝石女士耳饰 颜色:金色 尺码:均码 </a></p><span>￥289.00 x 2</span></td><td valign="top"><a class="delex" href="#" rel="nofollow" onclick="$._xiu_login.removeCart(this,'3Q0233790001');return false;">删除</a></td></tr>
				var list = JSON.parse( getCookie("plist") );
				var arr = []
				for (let i in list) {
				    arr.push(list[i]); //属性
				    //arr.push(list[i]); //值
				}
//				console.log(list)
//				console.log(arr[0]);
				var otbody = document.createElement("tbody");
//				list.forEach(function(item){
//					var otr = document.createElement("tr");
//					otbody.appendChild(otr)
//				
////				var otr = document.createElement("tr");
//					list.forEach(function(item,index){
//						console.log(item)
//						console.log(index)
//						var otd = document.createElement("td");
//						otd.innerHTML += '<a href="" target="_blank"><img src="'+ item.imgsrc +'"width = "48" height = "48" /></a>';
//						otd.innerHTML += "<p><a rel='nofollow' href='' title = "+item.info+" target='_blank'>"+item.name+"<br><span>"+ item.info +"</span></a></p><span>"+item.price+"</span>";
//	
//						otd.innerHTML += "<a class= 'delex' href='#' rel='nofollow'>删除</a>";
//						
//				// 		var btn = document.createElement("button");
//				// 		oli.appendChild(btn);
//						
//						otr.appendChild(otd);
//					})	
//				})
//				console.log(list)
				for(var i=0;i<list.length;i++){
					var otr = document.createElement("tr");
					otbody.appendChild(otr)
					
//					var otr = document.createElement("tr");
					for(var j=i;j<i+1;j++){
						var otd = document.createElement("td");
						otd.innerHTML += '<a href="" target="_blank"><img src="'+ list[j].imgsrc +'"width = "48" height = "48" /></a>';
						otd.innerHTML += "<p><a rel='nofollow' href='' title = "+list[j].info+" target='_blank'>"+list[j].name+"<br><span>"+ list[j].info +"</span></a></p><span>"+list[j].price+' × '+list[i].count+"</span>";
	
						otd.innerHTML += "<a class= 'delex' href='#' rel='nofollow'>删除</a>";
												
						otr.appendChild(otd);
					}
				}
				
//				$("#mybagw").find("tbody").append(otr);
				$("#mybagw").find("table").append(otbody);

				$(".delex").click(function() {
					
//					$(this).parents("td").parents("tr").remove();
					 
						//删除掉当前点击的这个商品
						//先获取这个商品的NO
//						console.log($(this))
						let info = $(this).siblings("p").find("a").find("span").html()
//						console.log(info)
						let list = JSON.parse( getCookie("plist") );
						
						// console.log(list);
						
						let newlist = list.filter(function(item){
							return item.info != info;
						})
						// console.log(newlist)
						
						setCookie("plist", JSON.stringify(newlist), 7);
						
						//删除掉Li
						$(this).parents("td").parents("tr").remove();
					
					
				})
				
				}
				
	
					
				
			})
		})
		$(".m4").mouseenter(function(){
			$(this).find(".submenu").show()
			$(this).find(".submenu").stop().animate({"opacity":"1"},300)
			$(this).addClass("selected")
		})
		$(".m4").mouseleave(function(){
			$(this).find(".submenu").hide()
			$(this).find(".submenu").stop().animate({"opacity":"0"},300)
			$(this).removeClass("selected")
		})
		$(".m2").mouseenter(function(){
			$(this).find(".submenu").show()
			$(this).find(".submenu").stop().animate({"opacity":"1"},300)
			$(this).addClass("selected")
		})
		$(".m2").mouseleave(function(){
			$(this).find(".submenu").hide()
			$(this).find(".submenu").stop().animate({"opacity":"0"},300)
			$(this).removeClass("selected")
		})
		
		$(".closed").click(function(){
			$(this).parent("#backtop").hide()
		})
//		var backtop = document.querySelector(".backtop")
//		var timer;
//		backtop.onclick = function(){
//			console.log(1)
//			console.log(document.documentElement.scrollTop+document.body.scrollTop)//火狐支持document.documentElement.scrollTop；谷歌支持document.body.scrollTop
//			clearInterval(timer)
//			timer = setInterval(function(){
//				if(document.body.scrollTop == 0){
//					clearInterval(timer)
//				}else{
//					document.body.scrollTop -= 200;
//				}
//			},30)
//		}
		
		$(".backtop").click(function(){
			 $("body").animate({scrollTop:0},500);//火狐兼容问题，无法回到顶部
		})
		
//		var searchInput = document.getElementById("J_searchTerm");
//		var droplist = document.getElementsByClassName("droplist")[0];
//		
//		searchInput.addEventListener("keyup",function(){
//			var _script = document.createElement("script");
//			_script.src = `http://suggestion.baidu.com/su?wd=${this.value}&cb=cbk`; //ajax不能跨域，但用模板字符串 scripts标签的形式，请求百度返回json数据
//			document.body.appendChild(_script);
//		})
//		function cbk(data){
//			console.log(data.s)
//			droplist.innerHTML = "";
//			var words = data.s;
//			words.forEach(element=>{
//				var oLi = document.createElement("li");
//				oLi.innerHTML = element;
//				droplist.appendChild(oLi);
//			})
//		}
		var searchInput = document.getElementById("J_searchTerm");
		var droplist = document.getElementsByClassName("droplist")[0];
		searchInput.addEventListener("keyup",function(){
			
				
				$.ajax({
					url:  `http://suggestion.baidu.com/su?wd=${this.value}`,
					dataType: 'jsonp',
					jsonp: 'cb',
					success : function(data){
//						console.log(data.s)
						droplist.innerHTML = "";
						var words = data.s;
						words.forEach(element=>{
							var oLi = document.createElement("li");
							oLi.innerHTML = element;
							droplist.appendChild(oLi);
						})
					}
				})
			
		})
//		if($(".leon_autosug_input").value){
//			$(".leon_welcome").hide()
//		}
//		if($("#J_searchTerm").value){
//			$(this).siblings(".leon_welcome").hide()
//		}
		$(".relax").mouseenter(function(){
			$(this).find(".myBag_con").show()
		})
		$(".relax").mouseleave(function(){
			$(this).find(".myBag_con").hide()
		})
		$("#bag").mouseenter(function(){
			$(this).find("#new_bag").addClass("active")
		})
		$("#bag").mouseleave(function(){
			$(this).find("#new_bag").removeClass("active")
		})
		
		var list = JSON.parse( getCookie("plist") );
//		console.log(list);
//		list.forEach(function(item){
//			$("#shopNum").html(item.count)
//		})
		var num = 0;
		list.forEach(function(item){
			num += item.count;
			// console.log(item);
		})
		$("#shopNum").html(num)
		var totalPrice = 0;
		list.forEach(function(item){
			totalPrice += parseInt(item.price*item.count);
		})
		$("#totalprice").html(totalPrice)
		$("#num").html(num)
		$(".num").html(num)
		
//		list.forEach(function(item){
//			num += item.count;
//			console.log(item);
//		})
		var state = JSON.parse( getCookie("user") );
		// console.log(state);
		state.forEach(function(item){
			console.log(item.onoff)
			if(item.onoff == 1){
				$("#logindiv").html(
				'<span style="display:inline-block;color:#d7d7d7;vertical-align:top;">您好，</span><a style="font-weight: bold;white-space:nowrap;display:inline-block;overflow:hidden;text-overflow:ellipsis;" href="http://my.xiu.com/v3/" title="xiu_1013952954403">'+item.name+'</a> <a class="logout" rel="nofollow" href="javascript:$._xiu_login.logout();">[ 退出 ]</a>')
			}else{
				$("#logindiv").html('<a title="登录/注册" href="register.html" url="https://login.xiu.com/?s_id=xiu-login">登录/注册</a>')
			}
		})
		// $(function () { 
		// 	$(".logout").click(function(){
		// 		var onoff2 = JSON.parse( getCookie("user") );
		// 			console.log(onoff2);
		// 			onoff2.forEach(function(item){
		// 				item.onoff = 0;
		// 			})
		// 			setCookie("user", JSON.stringify(onoff2), 7 );
		// 	})
		// })
	})
})




			
			
			
