$(document).ready(function(){
   id = $(".titrefiche").attr('id');
   value = localStorage.getItem(id);
   if (value == "true")
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

   $(".bookmark").click(function(){
      id = $(".titrefiche").attr('id');
      value = localStorage.getItem(id);
      if (value == "true")
      {
         $(".fav").attr('src', '../../../img/fav_vide.png');
         $(".bookmark").css("background-color", "#59e09e");	
         $(".bookmark").css("border", "0px")
         localStorage.setItem(id, false)
      }
      else
      {
         $(".fav").attr('src', '../../../img/fav.png');
         $(".bookmark").css("background-color", "white");
         $(".bookmark").css("border", "1px solid #D3D9E4")	
         localStorage.setItem(id, true)
      }
   });

});