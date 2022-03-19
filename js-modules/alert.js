function alert_fun(){
    var popup = require('popups');
        popup.alert({
      content: 'Hello!'
    });
}

module.exports = { alert_fun };