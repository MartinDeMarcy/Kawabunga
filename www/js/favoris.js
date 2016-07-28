$(document).ready(function(){
	data = JSON.parse(localStorage.getItem("data"));
	$.each(data, function(index, value){
			id = $(".titrefiche").attr('id');
			if (id == value.index)
			{
				if (value.fav == true)
				{
					$(".fav").attr('src', '../../../img/fav.png');
					$(".bookmark").css("background-color", "white");
					$(".bookmark").css("border", "1px solid #D3D9E4")
				}
				else
				{
					$(".fav").attr('src', '../../../img/fav_vide.png');
					$(".bookmark").css("background-color", "#59e09e");	
					$(".bookmark").css("border", "0px")
				}
			}
			data[index] = value;
		});
	$(".bookmark").click(function(){
		$.each(data, function(index, value){
			id = $(".titrefiche").attr('id');
			if (id == value.index)
			{
				if (value.fav == true)
				{
					$(".fav").attr('src', '../../../img/fav_vide.png');
					$(".bookmark").css("background-color", "#59e09e");	
					$(".bookmark").css("border", "0px")		
					value.fav = false;
				}
				else
				{
					$(".fav").attr('src', '../../../img/fav.png');
					$(".bookmark").css("background-color", "white");
					$(".bookmark").css("border", "1px solid #D3D9E4")	
					value.fav = true;
				}
			}
			data[index] = value;
		});
		localStorage.setItem("data", JSON.stringify(data));
    })
});