var request = require("request")
var cheerio = require("cheerio")
		request({
	url:"https://www.qiushibaike.com/",
	method:"GET"
},function(e,r,b){
	if(e || !b){
		return
	}
	var $ = cheerio.load(b)

	// var $ = cheerio.load('<div id="main"><span class="one">我是one啊aaaaaaaaaaaaaaaaaaaaaa</span><span class="two">two</span></div>')
	var result = [];
	var titles = $('.main')
	console.log($.html())
	// for(let i=0;i<titles.length;i++){
	// 	console.log($(titles[i]).text())
	// }
})	