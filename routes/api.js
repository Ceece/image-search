var express = require('express');
var router = express.Router();
 
var Bing = require('node-bing-api')({ accKey: process.env.AZURE_ACCOUNT_KEY });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'API' });
});

router.get('/search/:term', function(req, res, next) {
  var db = req.db;
  var query = {
    skip: +req.query.offset || 0,
    top: 10
  };

  var search = {
    term: req.params.term,
    when: new Date
  };

  db.collection('searches').insert(search);

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

router.get('/latest', function(req, res, next) {
  var db = req.db;
  db.collection('searches').find({}, {
    fields: { _id: 0},
    sort: {when: -1},
    limit: 20
  }).then((docs) => {
    res.json(docs)
  })
});

module.exports = router;