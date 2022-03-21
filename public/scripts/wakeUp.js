// Diese Funktion dient dazu, die derandy-php App aufzuwecken,
// da kostenlose Heroku Apps, wenn sie nicht benötigt sind, schlafen.
let call = "Aufwachen!";
$.ajax({
    url:"https://derandy-php.herokuapp.com/wakeUp.php",    
    type: "post",    
    dataType: 'json',
    data: {call: call},
    success:function(result){
        console.log("Der Server sagt: "+result);
    },
    error:function(){
        console.log("Der Server schläft noch...");
    }
});