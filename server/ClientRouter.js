const express = require('express');
const router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.info('At Client Request  ---- Time: ', Date.now() )
  next();
});

router.get('/featured' , function(req , res){

  var responseData = [
    {
      name : 'Hard Rock Cafe',
      image: 'assets/images/clients/05.png'
    },{
      name : 'Blue Frog',
      image: 'assets/images/clients/05.png'
    },{
      name : 'World Intigrety Center',
      image: 'assets/images/clients/05.png'
    },{
      name : 'Dug Out',
      image: 'assets/images/clients/05.png'
    },{
      name : 'BlueO',
      image: 'assets/images/clients/05.png'
    },{
      name : 'Cross Bar',
      image: 'assets/images/clients/05.png'
    }];
  res.json(responseData);
});

module.exports = router