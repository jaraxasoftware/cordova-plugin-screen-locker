var exec = require('cordova/exec');

var screenLocker = {
    unlock: function(successCallback, errorCallback, timeout) {

        if(typeof timeout == 'undefined'){
            timeout = 0;
        }
        exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'ScreenLocker', // mapped to our native Java class called "ScreenLocker"
            'unlock', // with this action name
            [{                  // and this array of custom arguments to create our entry
                "timeout": timeout
            }]
        );
     },
     lock: function(successCallback, errorCallback, timeout) {

        if(typeof timeout == 'undefined'){
            timeout = 0;
        }

        exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'ScreenLocker', // mapped to our native Java class called "ScreenLocker"
            'lock', // with this action name
            [{                  // and this array of custom arguments to create our entry
                "timeout": timeout
            }]
        );
     },
     isLocked: function(successCallback, errorCallback) {

        exec(
            function(result) {  // success callback function
                successCallback(result === "1")
            },
            errorCallback, // error callback function
            'ScreenLocker', // mapped to our native Java class called "ScreenLocker"
            'isLocked', // with this action name
            []
        );
     }
}

module.exports = screenLocker;