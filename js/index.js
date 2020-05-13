//PC端
$(".J-hero-titles").on("click", "li", function() {
	var index=$(this).index();
	$(this).addClass("curr").siblings().removeClass("curr");
	$(".J-hero-cont").eq(index).css("display","block").siblings(".J-hero-cont").css("display","none");
	// $(".game-menu-son").hide();
});
$(".J-hero-titles2").on("click", "li", function() {
	var index=$(this).index();
	$(this).addClass("curr").siblings().removeClass("curr");
	$(".J-hero-cont").eq(index+4).css("display","block").siblings(".J-hero-cont").css("display","none");
	$(".J-hero-titles li").removeClass("curr");
});
//手机端
$(".J-hero-titles-m").on("click", "li", function() {
	var index=$(this).index();
	$(this).addClass("curr").siblings().removeClass("curr");
	$(".J-hero-cont-m").eq(index).css("display","block").siblings(".J-hero-cont-m").css("display","none")
	// $(".game-menu-son-m").hide();
});
$(".J-hero-titles-m2").on("click", "li", function() {
	var index=$(this).index();
	$(this).addClass("curr").siblings().removeClass("curr");
	$(".J-hero-cont-m").eq(index+4).css("display","block").siblings(".J-hero-cont-m").css("display","none");
	$(".J-hero-titles-m li").removeClass("curr");
});

//展示更多
$(".show-game-menu").click(function () {
	$(".game-menu-son").toggle();
	$(".J-hero-titles li").removeClass("curr");
});
$(".show-game-menu-m").click(function () {
	$(".game-menu-son-m").toggle();
	$(".J-hero-titles-m2 li").removeClass("curr");
});