var request = require("request");
var cheerio = require("cheerio");
var fs = require("fs");

  var myhref = "new";
  var oldhref = "old";
  var i = 0;
  fs.open("CNNtemp.txt", "w");
  request({
    uri: "http://www.cnn.com/US/?hpt=sitenav",
  }, function(error, response, body) {
    var $ = cheerio.load(body);
    $("div #cnn_maincntnr .cnn_contentarea #cnn_maintoplive a").each(function(i) {
      myhref = $(this).attr("href")+"\n";
      //console.log(myhref);
      /*if (myhref.substring(0,4) !== 'http' && myhref.substring(0,6) !== '/video' && myhref !== oldhref && myhref !== '')
      {*/
      if (myhref.substring(0,1) === '/' && myhref.substring(0,6) !== "/video")
      {
        oldhref = myhref;
        myhref = "http://www.cnn.com"+myhref;
        fs.appendFile("CNNtemp.txt", myhref, function (err) {});
        //console.log(myfile);
        //console.log(myhref);
        i++;
      }
    });
  });
  request({
    uri: "http://www.cnn.com/WORLD/?hpt=sitenav",
  }, function(error, response, body) {
    var $ = cheerio.load(body);
    $("div #cnn_maincntnr .cnn_contentarea #cnn_maintoplive a").each(function(i) {
      myhref = $(this).attr("href")+"\n";
      //console.log(myhref);
      /*if (myhref.substring(0,4) !== 'http' && myhref.substring(0,6) !== '/video' && myhref !== oldhref && myhref !== '')
      {*/
      if (myhref.substring(0,1) === '/' && myhref.substring(0,6) !== "/video")
      {
        oldhref = myhref;
        myhref = "http://www.cnn.com"+myhref;
        fs.appendFile("CNNtemp.txt", myhref, function (err) {});
        //console.log(myfile);
        //console.log(myhref);
        i++;
      }
    });
  });
  request({
    uri: "http://www.cnn.com/POLITICS/?hpt=sitenav",
  }, function(error, response, body) {
    var $ = cheerio.load(body);
    $("div #cnn_maincntnr .cnn_contentarea #cnn_maintoplive a").each(function(i) {
      myhref = $(this).attr("href")+"\n";
      //console.log(myhref);
      /*if (myhref.substring(0,4) !== 'http' && myhref.substring(0,6) !== '/video' && myhref !== oldhref && myhref !== '')
      {*/
      if (myhref.substring(0,1) === '/' && myhref.substring(0,6) !== "/video")
      {
        oldhref = myhref;
        myhref = "http://www.cnn.com"+myhref;
        fs.appendFile("CNNtemp.txt", myhref, function (err) {});
        //console.log(myfile);
        //console.log(myhref);
        i++;
      }
    });
  });
  request({
    uri: "http://www.cnn.com/JUSTICE/?hpt=sitenav",
  }, function(error, response, body) {
    var $ = cheerio.load(body);
    $("div #cnn_maincntnr .cnn_contentarea #cnn_maintoplive a").each(function(i) {
      myhref = $(this).attr("href")+"\n";
      //console.log(myhref);
      /*if (myhref.substring(0,4) !== 'http' && myhref.substring(0,6) !== '/video' && myhref !== oldhref && myhref !== '')
      {*/
      if (myhref.substring(0,1) === '/' && myhref.substring(0,6) !== "/video")
      {
        oldhref = myhref;
        myhref = "http://www.cnn.com"+myhref;
        fs.appendFile("CNNtemp.txt", myhref, function (err) {});
        //console.log(myfile);
        //console.log(myhref);
        i++;
      }
    });
  });
  request({
    uri: "http://www.cnn.com/HEALTH/?hpt=sitenav",
  }, function(error, response, body) {
    var $ = cheerio.load(body);
    $("div #cnn_maincntnr .cnn_contentarea #cnn_maintoplive a").each(function(i) {
      myhref = $(this).attr("href")+"\n";
      //console.log(myhref);
      /*if (myhref.substring(0,4) !== 'http' && myhref.substring(0,6) !== '/video' && myhref !== oldhref && myhref !== '')
      {*/
      if (myhref.substring(0,1) === '/' && myhref.substring(0,6) !== "/video")
      {
        oldhref = myhref;
        myhref = "http://www.cnn.com"+myhref;
        fs.appendFile("CNNtemp.txt", myhref, function (err) {});
        //console.log(myfile);
        //console.log(myhref);
        i++;
      }
    });
  });
  request({
    uri: "http://www.cnn.com/LIVING/?hpt=sitenav",
  }, function(error, response, body) {
    var $ = cheerio.load(body);
    $("div #cnn_maincntnr .cnn_contentarea #cnn_maintoplive a").each(function(i) {
      myhref = $(this).attr("href")+"\n";
      //console.log(myhref);
      /*if (myhref.substring(0,4) !== 'http' && myhref.substring(0,6) !== '/video' && myhref !== oldhref && myhref !== '')
      {*/
      if (myhref.substring(0,1) === '/' && myhref.substring(0,6) !== "/video")
      {
        oldhref = myhref;
        myhref = "http://www.cnn.com"+myhref;
        fs.appendFile("CNNtemp.txt", myhref, function (err) {});
        //console.log(myfile);
        //console.log(myhref);
        i++;
      }
    });
  });
  request({
    uri: "http://www.cnn.com/TRAVEL/?hpt=sitenav",
  }, function(error, response, body) {
    var $ = cheerio.load(body);
    $("div #cnn_maincntnr .cnn_contentarea #cnn_maintoplive a").each(function(i) {
      myhref = $(this).attr("href")+"\n";
      //console.log(myhref);
      /*if (myhref.substring(0,4) !== 'http' && myhref.substring(0,6) !== '/video' && myhref !== oldhref && myhref !== '')
      {*/
      if (myhref.substring(0,1) === '/' && myhref.substring(0,6) !== "/video")
      {
        oldhref = myhref;
        myhref = "http://www.cnn.com"+myhref;
        fs.appendFile("CNNtemp.txt", myhref, function (err) {});
        //console.log(myfile);
        //console.log(myhref);
        i++;
      }
    });
  });