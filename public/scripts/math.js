function math(op){
    setVariables();
    $.ajax({
            url:"https://derandy-php.herokuapp.com/"+op+".php",    //the page containing php script
            type: "post",    //request type,
            dataType: 'json',
            data: {x: xval, y: yval},
            success:function(result){
                showResult(result);
            },
            error:function(result){
				console.log(result);
			}
        });
}