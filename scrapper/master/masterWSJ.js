var request = require("request");
var cheerio = require("cheerio");
var fs = require("fs");

var todo = 0;
//////////////////////////
/////This is for wsj////
//////////////////////////
	function getURLwsj()
	{
	  var array = [];
	  var myhref = "new";
	  var oldhref = "old";
	  var i = 0;
	  
	  todo++;
	  request({
		uri: "http://online.wsj.com/home-page",
	  }, function(error, response, body) {
		var $ = cheerio.load(body);
		var tarray = array;
		var ttodo = $("body a").length;
		$("body a").each(function(i) {
		  ttodo--;
		  myhref = $(this).attr("href");
		  //console.log(myhref.substring(11,22));
		  /*if (myhref.substring(0,4) !== 'http' && myhref.substring(0,6) !== '/video' && myhref !== oldhref && myhref !== '')
		  {*/
          if( myhref !== undefined){
          
          console.log(myhref.substring(14,29));
		  if (myhref.substring(14,29) === "wsj.com/article" && oldhref !== myhref)
		  {
			oldhref = myhref;
			//myhref = "http://www.wsj.com"+myhref;
			tarray.push(myhref);
			//console.log(myfile);
			//console.log(myhref);
			i++;
		  }
          }
			//console.log(ttodo);
			if(ttodo == 0){
			  //console.log("im here");
			  todo--;
			  if(todo == 0){
				getArticlewsj(tarray);
			  }
			}
		});
	  });
    }
	  
	function getArticlewsj(array){
	  var j = 0;
	  var filedescriptor = [];
	  console.log(array);
	  while (j<array.length-1)
	  {
		var tmyfile = j.toString()+".txt";
        //console.log(tmyfile);
		fd = fs.openSync("Articles/WSJ/WSJ_"+tmyfile, "w");
		fs.closeSync(fd);
		
		request({
		  uri: array[j] + "?&tldrj=" + j,
		}, function(error, response, body) {
		
		  var $ = cheerio.load(body);
		  
		  var pathname = this.uri.query;
		  
		  //if blank, dont do anything
		  if(!pathname) return;
		  
		  var k = pathname.substring(pathname.indexOf("tldrj=") + 6);
		  //console.log(k);
		  
		  k = parseInt(k);
		
		//console.log(j);
		var myfile = k.toString()+".txt";
		//console.log(array[j]);
		//console.log(filedescriptor);
        //console.log(myfile);
        //console.log(array[k]);
		fs.appendFile("Articles/WSJ/WSJ_"+myfile, array[k]+"\n", function (err) {});
	
		  //console.log(array[k]);
		  /*$("div div div div div img").each(function(element) {
			//console.log(myfile);
			var paragraph = $(this);
			var text = paragraph.attr("src")+"\n";
			//console.log(text);
			fs.appendFile("Articles/WSJ/WSJ_"+myfile, text, function (err) {});
		  });*/
		  $("div div div div div h1").each(function(element) {
			//console.log("hello2");
			var paragraph = $(this);
			var text = paragraph.text()+"\n";
			console.log(text);
			fs.appendFile("Articles/WSJ/WSJ_"+myfile, text, function (err) {});
		  });
		  $("#article_story_body div ul").each(function(element) {
			//console.log(myfile);
			var paragraph = $(this);
			var text = paragraph.text()+"\n";
			fs.appendFile("Articles/WSJ/WSJ_"+myfile, text, function (err) {});
		  });
		  $("#article_story_body div p").each(function(element) {
			//console.log(myfile);
			var paragraph = $(this);
			var text = "\n"+paragraph.text()+"\n";
			fs.appendFile("Articles/WSJ/WSJ_"+myfile, text, function (err) {});
		  });
		});
		j++;
        //console.log(j);
	  }
	}
	getURLwsj();