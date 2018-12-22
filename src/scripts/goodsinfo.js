
require(["../scripts/config.js"], function(){
	require(["common","jquery", "swiper", "fontscroll","sport2","public","animate"], function(com, $, Swiper ){
		


		//搜索框
		$(".leon_autosug_input").click (function(){
//			$(".leon_welcome").style.display = "none";
			$(".leon_welcome").hide();
		})
		$(".leon_autosug_input").blur (function(){
			$(".leon_welcome").show();
		})
		

		$(".my_xiu").mouseenter(function(){
			$(this).find(".myXiu_menu").css({"display":"block"})// width  	opacity 等数值的变化可以用 animate  ,属性的变化只能用 css  ，动画时间的效果需要查资料
		})
		$(".my_xiu").mouseleave(function(){
			$(this).find(".myXiu_menu").css({"display":"none"})
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
		
		
		
		$(".layer13 > a").mouseenter(function(){
//			$(this).css("position":"relative")
			$(this).find(".tiptools").show()
		})
		$(".layer13 > a").mouseleave(function(){
//			$(this).css()
			$(this).find(".tiptools").hide()
		})
		
		$(".fqfh").mouseenter(function(){
			$(this).find("em").show()
		})
		$(".fqfh").mouseleave(function(){
			$(this).find("em").hide()
		})
		
		
		
		//imgPicDiv :小框
		//bigPicDiv:大框
		//showimg:小滑块
		//bigPic:大图片
		$(function(){
			
			$("#imgPicDiv").mouseenter(function(){
				$(this).find("#bigPicDiv").show()
			
			
			
				$("#showimg").width( $("#bigPicDiv").width()/$("#bigPic").width()*$("#imgPicDiv").width() );
				$("#showimg").height( $("#bigPicDiv").height()/$("#bigPic").height()*$("#imgPicDiv").height() );
				
				$("#imgPicDiv").hover(function(){
					$("#showimg").show();
				}, function(){
					$("#showimg").hide();
				})
				
				//大图小图的比例
				var scale = $("#bigPic").height()/$("#imgPicDiv").height();
	
				$("#imgPicDiv").on("mousemove", function(e){
					var _left = e.pageX - $(this).offset().left - $("#showimg").width()/2;
					var _top = e.pageY - $(this).offset().top - $("#showimg").height()/2;
					$("#showimg").css({
						left: Math.min(Math.max(0, _left), $("#imgPicDiv").width()-$("#showimg").width()), 
						top:  Math.min(Math.max(0, _top), $("#imgPicDiv").height()-$("#showimg").height())
					})
					$("#bigPic").css({
						left : -$("#showimg").position().left*scale,
						top : -$("#showimg").position().top*scale
					})
				})
			})
			$("#imgPicDiv").mouseleave(function(){
				$(this).find("#bigPicDiv").hide()
			})
			
		})
		
		
//		var thumbsSwiper = new Swiper('#thumbs',{
//		  spaceBetween: 10,
//		  slidesPerView: 4,
//		  watchSlidesVisibility: true,//防止不可点击
//		})
//		var gallerySwiper = new Swiper('#gallery',{
//		  spaceBetween: 10,
//		  thumbs: {
//		    swiper: thumbsSwiper,
//		  }
//		})
		$(".sm_map").find("dd").mouseenter(function(){
			$(this).addClass("dc").siblings().removeClass("dc")
		})
		
//		$(".sm_map").find("dl dd:nth-child(1)").mouseenter(function(){
//			$("#imgPic").attr("src","../images/goods4.jpg")
//			$("#bigPic").attr("src","../images/goods3.jpg")
//		})
//		
//		$(".sm_map").find("dl dd:nth-child(2)").mouseenter(function(){
//			$("#imgPic").attr("src","../images/g1.jpg")
//			$("#bigPic").attr("src","../images/g2.jpg")
//		})
//		
//		$(".sm_map").find("dl dd:nth-child(3)").mouseenter(function(){
//			$("#imgPic").attr("src","../images/g5.jpg")
//			$("#bigPic").attr("src","../images/e3.jpg")
//		})
//		$(".sm_map").find("dl dd:nth-child(4)").mouseenter(function(){
//			$("#imgPic").attr("src","../images/g5.jpg")
//			$("#bigPic").attr("src","../images/g6.jpg")
//		})
//		
//		$(".sm_map").find("dl dd:nth-child(5)").mouseenter(function(){
//			$("#imgPic").attr("src","../images/g8.jpg")
//			$("#bigPic").attr("src","../images/g7.jpg")
//		})
		$(".backtop").click(function(){
			 $("body").animate({scrollTop:0},500);
		})
		
		var $nav = $(".cpmx");
			
			$(window).scroll(function(){
				
				var scrollTop = $(this).scrollTop();
//				console.log(scrollTop)
				if(scrollTop >= 748) {
					$nav.css({"position":"fixed","top":"0","left":"0","right":"0","margin":"auto"});
				}else{
					$nav.css({"position":"","margin-top":"30px"})
				}
				
				
				
			})
//		var newValue = parseInt($("#inputQuantity").attr("value"))
//		$("#plusAmount").click(function(){
//			$(this).siblings("#inputQuantity").attr(newValue++)
//			console.log(1)
//		})
		
		$("#plusAmount").click(function(){
			var oldValue = parseInt($("#inputQuantity").val());
			$("#inputQuantity").val(oldValue+1)
		})
		$("#minusAmount").click(function(){
			var oldValue = parseInt($("#inputQuantity").val());
			let cont = oldValue-1;
			if(cont <= 1){
				cont = 1;
			}
			$("#inputQuantity").val(cont);
			
		})
//		[{"name":"Burberry","price":"2099.00","info":" 男士圆盘钢带三眼日历石英表BU9800","imgsrc":"http://images.xiu.com/upload/goods20160506/52047158/520471580001/g1_315_420.jpg"}]

//		var list = JSON.parse( getCookie("productMessage") );
//		console.log(list);
//		list.forEach(function(item){
//			$(".style3").html(item.price)
//			$(".cp").find("a").html(item.name)
//			$(".p_title").find("span").find("h1").html(item.info)
//			$("#imgPicDiv").find("img").attr("src",item.imgsrc)
//			$(".dc").find("a").find("img").attr("src",item.imgsrc)
//			$("#bigPic").attr("src",item.imgsrc)
//			$("#positionPrdName").html(item.info)
//			console.log(item.imgsrc)
//			
//			$(".user_buy1").click(function(){
//				let goodsnameS = item.name;
//				let goodspriceS = item.price;
//				let goodsinfoS = item.info;
//				let imgsrcS = item.imgsrc
//				let goods = {
//					"name" : goodsnameS,
//					"price" : goodspriceS,
//					"info" : goodsinfoS,
//					"imgsrc" : imgsrcS
//				}
//				console.log(goodsnameS)
//				console.log(goodspriceS)
//				console.log(goodsinfoS)
//				console.log(imgsrcS)
//				var cookiestr = getCookie("plist");
//				if(cookiestr){
//					var list = JSON.parse(cookiestr);
//					var res = false;
//					for(var i=0;i<list.length;i++){
//						if(goods.info == list[i].info){
//							res = true;
//							break;
//						}
//					}
//					if(!res){
//						list.push(goods);
//					}
//				}else{
//					var list = [goods]
//				}
//				setCookie("plist",JSON.stringify(list),7);
//			})
//			console.log(list)
//			
//			
//		})


		var list = JSON.parse( getCookie("productMessage") );
		console.log(list);
		list.forEach(function(item){
			$(".style3").html(item.price)
			$(".cp").find("a").html(item.name)
			$(".p_title").find("span").find("h1").html(item.info)
			$("#imgPicDiv").find("img").attr("src",item.imgsrc)
			$(".dc").find("a").find("img").attr("src",item.imgsrc)
			$("#bigPic").attr("src",item.imgsrc)
			$("#positionPrdName").html(item.info)
//			console.log(item.imgsrc)

			$(".user_buy1").click(function(){
				let goodsnameS = item.name;
				let goodspriceS = item.price;
				let goodsinfoS = item.info;
				let imgsrcS = item.imgsrc;
				let goodsIdS = item.goodsid;
				var my_opation = new option(goodsnameS,goodspriceS,goodsinfoS,imgsrcS,goodsIdS);
	//			my_opation.get_str().str
				//shopCar为空
				if( my_opation.get_str().str == "" ){
					my_opation.create_obj().storage();
				}else{
					my_opation.get_str().get_json().check().storage();
				}
				//shopCar不为空
				let goods = {
					"name" : goodsnameS,
					"price" : goodspriceS,
					"info" : goodsinfoS,
					"imgsrc" : imgsrcS,
					"goodsid" : goodsIdS,
					"count" : 1
				}
				var cookiestr = getCookie("plist");
				if(cookiestr){
					var list = JSON.parse(cookiestr);
					var res = false;
					for(var i=0;i<list.length;i++){
						if(goods.goodsid == list[i].goodsid){
							res = true;
							break;
						}
					}
					if(!res){
						list.push(goods);
					}
				}else{
					var list = [goods]
				}
				setCookie("plist",JSON.stringify(list),7);
				console.log($("#inputQuantity").val())
			})
		})
		
		
		class option{
			constructor(name,price,info,img,id){
				this.str = "";//取出的cookie商品信息字符串
				this.json = [];//转换为json对象
				this.obj = {};//商品对象信息
				this.has = true;//有没有存这个商品
				this.name = name;
				this.price = price;
				this.info = info;
				this.img = img;
				this.id = id
			}
			get_str(){
				this.str = getCookie("plist");
				console.log(this.str)
				return this;
			}
			get_json(){
				this.json = JSON.parse(this.str);
				return this;
			}
			storage(){
				setCookie("plist",JSON.stringify(this.json),30);
				return this;
			}
			create_obj(){
				
				this.obj = {
//					src:$("#imgPic").attr("src"),
//					name:$(".p_title").find(".cp").find("a").html(),
//					info:$(".p_title").find("span").find("h1").html(),
//					price:$(".z1").find(".style3").html(),
//					count:1
					"name" : this.name,
					"price" : this.price,
					"info" : this.info,
					"imgsrc" : this.img,
					"goodsid" : this.id,
					"count" : 1*$("#inputQuantity").val()
				}
				this.json.push(this.obj);
				return this;
			}
			// goodsnum(){
			// 	this.json[i].count +=1*$("#inputQuantity").val();
			// }
			check(){
				console.log(2)
				
				for(var i=0;i<this.json.length;i++){
					console.log("循环")
					if( this.json[i].goodsid == this.id){
						console.log("一样")
						this.json[i].count +=1*$("#inputQuantity").val();
						this.has = false;
					}
				}
				if( this.has ){
					this.create_obj();
				}
				return this;
			}
		}
		
		
		
		
		var list = JSON.parse( getCookie("plist") );
				var arr = []
				for (let i in list) {
				    arr.push(list[i]); //属性
				    //arr.push(list[i]); //值
		}
		var otbody = document.createElement("tbody");
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
			console.log(item);
		})
		$("#shopNum").html(num)
		var totalPrice = 0;
		list.forEach(function(item){
			totalPrice += parseInt(item.price*item.count);
		})
		$("#totalprice").html(totalPrice)
		$("#num").html(num)
		$(".num").html(num)
	})
})




			
			
			
