// obj要操作的对象
// target 目标值
// attr  操作的样式
function startMove(obj,target,attr){
	clearInterval( obj.timer );
	obj.timer = setInterval(function(){
		var current = 0;
		if( attr == "opacity" ){ //透明度的current值的获取
			current = parseFloat( getStyle( obj, attr ) ) * 100; 
		}else{
			current = parseInt( getStyle(obj,attr) ) ;//  Number("100px") --> NaN
		}
		var speed = (target - current)/10;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		if( target == current ){
			clearInterval( obj.timer );
		}else{
			if( attr == "opacity" ){
				obj.style.opacity = ( current + speed )/100;
			}else{
				obj.style[attr] = current + speed + "px";
			}
		}
	},30)
}

function getStyle(obj,attr){
	if( window.getComputedStyle ){
		return window.getComputedStyle(obj,false)[attr];
	}else{
		return obj.currentStyle[attr];
	}
}