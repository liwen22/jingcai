
$(document).ready(function() {
	//取消预测
	$(".tou_button2").click(function() {
		$(".tou_window_max").css("display", "none");
		$("body").css("padding-bottom", "0px");
		$(".jincai_fz_item_list span").css("background", "").css("color", "#f7a934");
		$(".jincai_fz_item_list span").attr("id", "sszda");

		//停止
		// clearInterval(resulthandle);

		return false;
		//window.location.reload();//刷新当前页面
	});

	$(".jincai_fz_item_list span").click(function() {
		$(".jincai_fz_item_list span").css("background", "").css("color", "#f7a934");
		$(".jincai_fz_item_list span").attr("id", "sszda");

		$(this).css("background", "#ffa114");
		$(this).css("color", "#ffffff");
		$(this).attr("id", "szda");

		var is_tou = $(this).attr("data-tou");
		if (is_tou == 0) {
			alert("很抱歉！本竞赛已经停止预测!");
			$(".tou_window_max").css("display", "none");
			$("body").css("padding-bottom", "0px");
			$(".jincai_fz_item_list span").css("background", "").css("color", "#f7a934");
			$(".jincai_fz_item_list span").attr("id", "sszda");
			return false;
		}


		var g = parseFloat($(".tou_item1").attr("pl"));
		var number = $("#tou_number").val();
		var total = g * number;
		$(".tou_item2_win").html("中奖可赢：" + parseFloat(total).toFixed(2));


		//预测项目标题
		var t1 = $(this).parent().parent().children().eq(0).find("font").text();
		var t1_1 = $(this).parent().parent().children().eq(0).find("i.jc_key").text();
		//var t1_2 = $(this).parent().parent().children().eq(0).find("i").eq(1).text();

		t1 = "" + t1 + "";
		$(".tou_window_head").find("span").html(t1);
		$(".tou_window_head").find("i.jc_key").html(t1_1);
		//$(".tou_window_head").find("i.jc_zt").html(t1_2);
		//$(".tou_window_head").find("font").html(game_num);


		//预测项目倍付
		var t2 = $(this).attr("data-name");
		var t3 = $(this).attr("data-pei");
		var t5 = $(this).attr("data-da");
		var t6 = $(this).attr("data-id");
		var t7 = $(this).attr("data-fid");
		$(".tou_item1").text("选择：" + t2);
		$(".tou_pe").text("倍付：" + t3);
		$(".tou_item1").attr("pl", t3); // 倍付
		$(".tou_item1").attr("da", t5); // 答案
		$(".tou_item1").attr("mid", t6); // id
		$(".tou_item1").attr("fid", t7); // id
		$(".tou_item1").attr("name", t2); // id


		if ($(".tou_window_max").css("display") == "none") {
			$(".tou_window_max").css("display", "block");
			//$("body").css("padding-bottom","220px");

		} else {
			// PLData()
			$(".tou_window_max").css("display", "block");
			//$("body").css("padding-bottom","220px");
			//$(".layer").css("display","block");
		}
	});

	//确定预测
	$(".tou_button").click(function() {

	});
});

var speed = 30;
var colee2 = document.getElementById("colee2");
var colee1 = document.getElementById("colee1");
var colee = document.getElementById("colee");
colee2.innerHTML = colee1.innerHTML; //克隆colee1为colee2
function Marquee1() {
	//当滚动至colee1与colee2交界时
	if (colee2.offsetTop - colee.scrollTop <= 0) {
		colee.scrollTop -= colee1.offsetHeight; //colee跳到最顶端
	} else {
		colee.scrollTop++;
	}
}
var MyMar1 = setInterval(Marquee1, speed) //设置定时器
//鼠标移上时清除定时器达到滚动停止的目的
colee.onmouseover = function() {
	clearInterval(MyMar1)
}
//鼠标移开时重设定时器
colee.onmouseout = function() {
	MyMar1 = setInterval(Marquee1, speed)
}