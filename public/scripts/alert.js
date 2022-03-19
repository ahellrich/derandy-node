function gib_laut(){

    $.ajax({
            url:"../scripts/test.php",    //the page containing php script
            type: "post",    //request type,
            dataType: 'json',
            data: {x: 3, y: 5},
            success:function(result){
				
                alert(result);
            },
            error:function(){
				console.log("error");
			}
        });
}