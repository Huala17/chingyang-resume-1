
	$(document).ready(function(){
		$(".grid").masonry({
			itemSelector: ".grid-item",
			columnWidth: 200,
			gutter :20
		})
	});

	$(".imgbig").click(function(){
		var $img = $(this).children().attr("src");
		$("#bigimg").css("display","block");
		$("#bigimg").html('<img src="' + $img + '">');
	})

	function closeimg(){
		$("#bigimg").css("display","none");
	}
