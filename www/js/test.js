
        $(document).on('pageinit', ".normal" , function(){

            $.getJSON("../../json/generated.json").done(function(data){

                localStorage.setItem("data", JSON.stringify(data));
              alert("ok");
              
                $.each(data, function(index, value){
                    if (data.fav = true)
                    {
                      alert("yo");
                        $("#contacts").append('<div class="case"'+
                           '<a href="../competences/' +
                            value.path +
                            '"<p>' +
                            value.title + 
                            "</p></a></div>"
                        );
                    }

                });

            });

        });
 