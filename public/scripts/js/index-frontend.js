document.addEventListener("DOMContentLoaded", function(event){
   $alert = require("../../scripts/js/alert.js");
   $alert.gib_laut();
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