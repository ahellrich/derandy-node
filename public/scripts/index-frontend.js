document.addEventListener("DOMContentLoaded", function(event){
    require("../scripts/wakeUp.js");
    require("../scripts/math.js");
    require("../scripts/onclick.js");
    require("../scripts/vars.js");
    require("../scripts/showResult.js");
   
  });

function require(script) {
    $.ajax({
        url: script,
        dataType: "script",
        async: false,           // <-- This is the key
        success: function () {
            // all good...
        },
        error: function () {
            throw new Error("Could not load script " + script);
        }
    });
}