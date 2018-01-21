const express 		= require('express'),
	mongoose 		= require('mongoose'),
	bodyParser 		= require('body-parser'),
	path 			= require('path'),
	app 			= express(),
	http 			= require('http').Server(app),
	port 			= 8080;

app.use(bodyParser.urlencoded({ extended: true}))
	.use(bodyParser.json())
  .use(express.static(path.join(__dirname, 'dist')))

  var routes = require('./routes/index.js')

mongoose.connect("mongodb://admin:admin@ds111078.mlab.com:11078/hotel", database => {
  app.use ('/room', routes)
	http.listen(process.env.PORT || 8080, () => {
		console.log('We are live on ' + port)
	})
})
