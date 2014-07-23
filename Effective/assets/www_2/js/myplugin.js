
function MyCustomPlugin() {
};
MyCustomPlugin.prototype.data = function(str, callback) {
        cordova.exec(callback, function(err) {
            callback('Nothing to echo.');
        }, "MyCustomPlugin", "data", [str]);
    };
/**
* Load Plugin
*/
if(!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.myCustomPlugin) {
    window.plugins.myCustomPlugin = new MyCustomPlugin();
}


/*

window.plugins.myCustomPlugin.data("data", function(echoValue) {
	//alert(echoValue);
                                       deviceid=echoValue; // your data is in your hand
                                       });


*/