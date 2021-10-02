var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/greeting" ,(req, res) => { 
console.log('hello')
const user = req.body.username
return res.status(200).json("Welcome" + user)
})


module.exports = router;
