var http = require('http');
var qs = require('querystring');

var search = process.argv.slice(2).join(' ').trim();

if (!search.length) {
   console.log('\n Usage: node tweets <search term> \n');
}

console.log('\n searching for: ' + search + '\n');

var options = {
   host: 'https://api.twitter.com/1.1/',
   path: 'search/tweets.json?' + qs.stringify({ q: search})
};

var req = http.request(options, function(res){
   
   var body = '';
   
   res.setEncoding('utf8');
   
   res.on('data', function(chunk){
      console.log(chunk);
      body += chunk;
   });
   
  
   
   res.on('end', function(){
      
      var obj = JSON.parse(body);
      
      obj.results.forEach(function(tweet){
         
         console.log(' \033[90m' + tweet.text + '\033[39m');
         
         console.log(' \033[94m' + tweet.from_user + '\033[39m');
         
         console.log('---');
         
      });
   });
   
   
});

req.on('error', function(e){
   console.log(e.message);
});


req.end();
