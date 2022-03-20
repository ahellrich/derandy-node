function math(op,x,y){

    $.ajax({
            url:"https://derandy-php.herokuapp.com/"+op+".php",    //the page containing php script
            type: "post",    //request type,
            dataType: 'json',
            data: {x: x, y: y},
            success:function(result){
				
                alert(result);
            },
            error:function(){
				console.log("error");
			}
        });
}