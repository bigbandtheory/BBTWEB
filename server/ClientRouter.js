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
      image: 'assets/images/clients/Hard_Rock_Cafe.png'
    },{
      name : 'Ghanta Ghar',
      image: 'assets/images/clients/Ghanta_Ghar.png'
    },{
      name : 'Firangi Dhaba',
      image: 'assets/images/clients/firangi_dhaba2.png'
    },{
      name : 'Dug Out',
      image: 'assets/images/clients/Dugout.png'
    },{
      name : 'Great Indian Pub',
      image: 'assets/images/clients/GIP.jpg'
    },{
      name : 'Blue Frog',
      image: 'assets/images/clients/BlueFrog.jpg'
    },{
      name : 'Hyatt Regency',
      image: 'assets/images/clients/Hyatt-Regency-logo.png'
    },{
      name : 'World Intigrety Center',
      image: 'assets/images/clients/WIC.jpg'
    }
  ];


  res.json(responseData);
});

module.exports = router