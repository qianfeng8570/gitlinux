//微信jssdk API 前面算法

var fs = require('fs');
var path = require("path");
var crypto = require("crypto");
var Url = require("url");
var WechatAPI = require('wechat-api');
var config = require("./config.js")();

/*function jssdk(app){
	//随便设置一个路由接口地址
	app.use("/wechat/jssdk",function(req,res){
		var callbackName = req.query['callback'];
		var data = {
			"success" : true,
			"data" : [
				{ "a" : 1 },
				{ "b" : 2 }
			]
		};
		res.send(`${callbackName}(${JSON.stringify(data)});`);

	});
}*/
// app.use()   post +get 两种
function jssdk(app,req){
	var api = new WechatAPI(config.appid, config.appsecret);
	var callbackName = req.query["callback"];
	app.use("/wechat/jssdk",function(req,res){
		var param = {
			debug:false,
			jsApiList:[
				'onMenuShareTimeline',
				'onMenuShareAppMessage'
			],
			url:'http://g22.jsccok.cn'
		};
		api.getJsConfig(param, function(err,result){
			res.send(result);
			/*if(callbackName){
				res.send(`${callbackName}(${JSON.stringify(data)})`)
			}else{
				res.send(result);
			}*/
		});
	});
}
module.exports = jssdk;