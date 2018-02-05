var request = require("request")
var cheerio = require("cheerio")
for(let i=0;i<11;i++){
		request({
	url:"https://movie.douban.com/top250?start="+(i*25)+"&filter=",
	method:"GET"
},function(e,r,b){
	if(e || !b){
		return
	}
	var $ = cheerio.load(b)
	// var $ = cheerio.load('<div id="main"><span class="one">我是one啊aaaaaaaaaaaaaaaaaaaaaa</span><span class="two">two</span></div>')
	var result = [];
	var titles = $('.grid_view .item .info .hd .title')
	for(let i=0;i<titles.length;i++){
		console.log($(titles[i]).text())
	}
})	
}
