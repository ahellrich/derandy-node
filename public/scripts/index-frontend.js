document.addEventListener("DOMContentLoaded", function(event){
   require("math.js");
   require("onclick.js");
   require("vars.js");
   require("showResult.js");
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