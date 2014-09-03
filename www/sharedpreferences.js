// JavaScript Document
var exec = require('cordova/exec');

var sharedpreferences = {
	getSharedPreferences : function(file, mode, successCallback, errorCallback){
		cordova.exec(successCallback, errorCallback, 'SharedPreferences', 'getSharedPreferences', [file, mode])
	}
}

module.exports =  sharedpreferences;
