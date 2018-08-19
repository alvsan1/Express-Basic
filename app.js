const express = require("express")
const app = express()
const router = express.Router()
const bodyParser = require('body-parser')
const cors = require('cors');
const request = require('supertest');

app.use(express.static('public'))
//app.use(cors({  
//    origin: ["http://10.0.2.15:3001"],
//    methods: ["GET", "POST"]}))

//const CORSConfig = { origin: "*" }

//app.post('/', cors(), function (req, res, next) {
  //req.header('Access-Control-Allow-Origin', '*')
//  console.log(req);
//  console.log("dfsfsdfsdfd");//	
//  console.log(next);
//	
//	
//  res.json({text : req.text});
//})
app.use(cors())

router.post('/', function(req, res) {
  	//res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')

  //	res.setHeader('Access-Control-Allow-Origin', req.header('origin') || req.header('x-forwarded-host') || req.header('referer') || req.header('host'));
//  	req.header('Origin')
	//res.header('Access-Control-Allow-Origin', '*')
	console.log(req.body);
	res.json({text : req.body.text});  
	//res.json({text : "Chau!"});
});

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json({type: '*/*'}));

app.use(router);

app.listen(4000, () => {
  console.log('Express server listening on port 4000');
})

module.exports = app

