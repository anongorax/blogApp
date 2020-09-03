var express = require('express');
var router = express.Router();
const cool = require('cool-ascii-faces');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: cool() });
});

router.get('/cool',(req, res)=>{
  res.send(cool());
})

module.exports = router;
