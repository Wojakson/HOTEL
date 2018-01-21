var express = require('express');
var router = express.Router();
const rooms = require('../models/room')

router.get('/', function (req, res) {
  res.send('HOTEL home page');
})

router.post('/', function(req, res) {
  console.log(req.body)
  rooms.create({
    'number': req.body.number,
    'maxNumberOfGuests' : req.body.maxNumberOfGuests
              }, (err, room) => {
                if(err) {
                  res.send(err)
                }
                else{res.send(room)}
              } )

})


module.exports = router;


