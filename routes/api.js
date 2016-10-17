var express = require('express');
var router = express.Router();
 
var Bing = require('node-bing-api')({ accKey: process.env.AZURE_ACCOUNT_KEY });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'API' });
});

router.get('/:term', function(req, res, next) {
  var query = {
    skip: +req.query.offset || 0,
    top: 10
  };

  Bing.images(req.params.term, query, function(err, r, body){
    if (err)
      throw err;
    res.json(body.d.results.map(function(result, index) {
      return {
        url: result.MediaUrl,
        snippet: result.Title,
        thumbnail: result.Thumbnail.MediaUrl,
        context: result.SourceUrl
      }
    }));
  });
});

module.exports = router;