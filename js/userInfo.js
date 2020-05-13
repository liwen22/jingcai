$(".tabList").on("click", "li", function() {
	$(this).children().addClass("active").parent().siblings().children().removeClass("active");
});

//用户中心用户信息修改切页显示
$("#m_u_1").click(function() {
	$(".member_right_content1").show();
	$(".member_right_content2").hide();
	$(".member_right_content3").hide();
	$(".member_right_content4").hide();
});

$("#m_u_2").click(function() {
	$(".member_right_content2").show();
	$(".member_right_content1").hide();
	$(".member_right_content3").hide();
	$(".member_right_content4").hide();
});

$("#m_u_3").click(function() {
	$(".member_right_content3").show();
	$(".member_right_content1").hide();
	$(".member_right_content2").hide();
	$(".member_right_content4").hide();
});
$("#m_u_4").click(function() {
	$(".member_right_content4").show();
	$(".member_right_content1").hide();
	$(".member_right_content2").hide();
	$(".member_right_content3").hide();
});


// 资料编辑
function uploadImg(file) {
	var fileTypes = [".jpg"];
	var fileSize = 0;
	var fileMaxSize = 1024; //1M
	var filePath = file.value;
	var id = file.id;
	//当括号里面的值为0、空字符、false 、null 、undefined的时候就相当于false
	if (filePath) {
		var isNext = false;
		var fileEnd = filePath.substring(filePath.indexOf("."));
		for (var i = 0; i < fileTypes.length; i++) {
			if (fileTypes[i] == fileEnd) {
				isNext = true;
				break;
			}
		}
		if (!isNext) {
			alert("只接受" + fileTypes + "类型图片！", {
				icon: 2
			});
			file.value = "";
			return false;
		}
		var arr = filePath.split('\\');
		var fileName = arr[arr.length - 1];
		$(".showFileName").html(fileName);
		$(".showFileName").val(fileName);
		fileSize = file.files[0].size;
		var size = fileSize / 1024;
		if (size > fileMaxSize) {
			alert("文件大小不能大于1M！", {
				icon: 2
			});
			file.value = "";
			return false;
		} else if (size <= 0) {
			alert("文件大小不能为0M！", {
				icon: 2
			});
			file.value = "";
			return false;
		}
	} else {
		return false;
	}
	getFile();
};

function getFile() {
	var formData = new FormData();
	formData.append("file_data", $("#propagateUrl").get(0).files[0]);
	$.ajax({
		url: "xxxxx",
		type: "post",
		enctype: 'multipart/form-data',
		data: formData,
		async: false,
		processData: false,
		contentType: false,
		success: function(msg) {

		},
		error: function(e) {
			console.log(JSON.stringify(e));
		}
	});
};
