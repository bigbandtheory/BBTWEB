const express = require('express');
const router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.info('At Client Request  ---- Time: ', Date.now() );
  next();
});

router.get('/featured' , function(req , res){

  const responseData = [
    {
      name : "Hard Rock Cafe",
      image: 'https://bigbandtheory.s3.ap-south-1.amazonaws.com/images/clients/Hard_Rock_Cafe.png',
    },{
      name : "Katman's",
      image: "https://bigbandtheory.s3.ap-south-1.amazonaws.com/images/clients/Katmans.png",
    },{
      name : "Leisure Hotels",
      image: "https://bigbandtheory.s3.ap-south-1.amazonaws.com/images/clients/leisure_hotels.jpg",
    },{
      name : 'Kappa TV Music mojo',
      image: 'https://bigbandtheory.s3.ap-south-1.amazonaws.com/images/clients/Music+Mojo.jpg'
    },{
      name : 'International Yoga Festival',
      image: 'https://bigbandtheory.s3.ap-south-1.amazonaws.com/images/clients/International+Yog+Festival.jpg'
    },{
      name : 'Blue Frog',
      image: 'https://bigbandtheory.s3.ap-south-1.amazonaws.com/images/clients/BlueFrog.jpg',
    },{
      name : 'Hyatt Regency',
      image: 'https://bigbandtheory.s3.ap-south-1.amazonaws.com/images/clients/Hyatt-Regency-logo.png'
    },{
      name : 'World Intigrety Center',
      image: 'https://bigbandtheory.s3.ap-south-1.amazonaws.com/images/clients/WIC.jpg'
    }
  ];
  res.json(responseData);
});

module.exports = router;