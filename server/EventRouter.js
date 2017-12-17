const express = require('express');
const router = express.Router();




router.get('/' , (req , res) =>{
  let today = new Date().toLocaleDateString();
  var responseData = [
    {
      venue : 'Hard Rock Cafe',
      name : 'Adele Tribute',
      date : today,
      price : 0,
      location : 'Gurgaon',
      image: 'assets/images/clients/05.png'
    },{
      venue : 'Blue Frog',
      name : 'Sufiana Andaaz',
      date : today,
      price : 0,
      location : 'Banglore',
      image: 'assets/images/clients/05.png'
    },{
      venue : 'World Intigrety Center',
      name : 'Sufi Night',
      date : today,
      price : 0,
      location : 'Gurgaon',
      image: 'assets/images/clients/05.png',
    },{
      name : 'Rock and Roll Night',
      price : 0,
      date : today,
      location : 'Dehradun',
      venue : 'Dug Out',
      image: 'assets/images/clients/05.png'
    }];
  res.json(responseData);
});


router.get('/{:id}', (req , res)=>{


});

module.exports = router;