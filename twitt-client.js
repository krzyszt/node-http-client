var req = require('superagent');

req.get('https://api.twitter.com/1.1/search/tweets.json')
   .send({ q: 'pink floyd'})
   .set('Date', new Date)
   .end(function(res){ console.log(res.body);});