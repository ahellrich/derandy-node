function math(op){
    setVariables();
    $.ajax({
            url:"https://derandy-php.herokuapp.com/math.php",    
            type: "post",    
            dataType: 'json',
            data: {op: op, x: xval, y: yval},
            success:function(result){
                showResult(result);
            },
            error:function(){
				showResult("ERROR");
			}
        });
}