const express = require('express');
const router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.info('At Artist Request  ---- Time: ', Date.now() )
  next();
});

router.get(function(req,res){
  res.json({});
});

router.get(':id',function(req,res){

});

router.get('/featured/tracks', function(req, res){

const songs = [
  {
    url: 'http://tegos.kz/new/mp3_full/Redfoo_-_New_Thang.mp3',
    cover: 'http://www.nossoarmario.com/blog/wp-content/uploads/2015/01/redfoo.jpg',
    artist: {
      name: 'Redfoo',
      song: 'New Thang'
    }
  },
  {
    url: 'http://a.tumblr.com/tumblr_lpoc6cHNDP1r0jthjo1.mp3',
    cover: 'http://www.cmchatlive.com/scenic/wp-content/uploads/2015/05/hugo-99-problems-country-that.jpg',
    artist: {
      name: 'Hugo',
      song: '99 Problems'
    }
  },
  {
    url: 'http://claymore.france.free.fr/momo/summer love.mp3',
    cover: 'http://myuvn.com/wp-content/uploads/2015/07/justin-timberlake-pusher-love-girl.jpg',
    artist: {
      name: 'Justin Timberlake',
      song: 'Summer Love'
    }
  },
  {
    url: 'http://a.tumblr.com/tumblr_mlyactVSyX1qejx3lo1.mp3',
    cover: 'http://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2015/06/daft-punk.jpg',
    artist: {
      name: 'Daft Punk',
      song: 'Get Lucky'
    }
  },
  {
    url: 'http://a.tumblr.com/tumblr_lxe7hpIUPA1r3ne4ro1.mp3',
    artist: {
      name: 'Michael Buble',
      song: 'Feeling Good'
    }
  },
  {
    url: 'http://dl.tak3da.com/download/1394/03/The Weeknd - Can t Feel My Face [320].mp3',
    cover: 'http://www.clickgratis.com.br/fotos-imagens/the-weekend/aHR0cDovL3d3dy5iaWxsYm9hcmQuY29tL2ZpbGVzL3N0eWxlcy9wcm9tb182NTAvcHVibGljL21lZGlhL3RoZS13ZWVrZW5kLXRoZS1oaWxscy12aWRlby1iaWxsYm9hcmQtNjUwLmpwZw==.jpg',
    artist: {
      name: 'The Weekend',
      song: 'Can\'t Fell My Face'
    }
  },
  {
    url: 'http://midnightoilco.net/sitebuildercontent/sitebuilderfiles/metallicafuel.mp3',
    cover: 'http://imagens.ailhadometal.com/2015/03/Metallica3.png',
    artist: {
      name: 'Metallica',
      song: 'Fuel'
    }
  }
];
  res.json(songs);
});



router.get('/featured' , function(req , res){
  res.json(responseData);
});

router.get('/carousal' , function(req, res){

  let responseData ={
      slides:[{
            title : "Shufiana andaaz with Sushant Satija",
            description : 'Through this setup, Sushant not only sings popular poems and dohas of the Sufi saints but also shares some very rare stories that will make our love for Sufism even stronger. ' ,
            eventId : 1
        },{
            title : "Some Rock n Roll with Knight shades",
            description : 'Fast paced, up tempo rhythm and blues played in a modern rock and roll style coupled with unlimited energy, spirited stage presence and an appreciable crowd interaction is what sums up the band Knight Shades.',
            eventId : 2
        },{
            title : 'Some classical with Aamadd',
            description: 'Their sound of music is in a genre influenced by the classical touch and forms the basis of their compositions. Experimenting with sounds, the duo and their companions enjoy sticking to the roots with a contemporary twist. Not only this, the duo plan to make music melodious, enjoyful, meaningful, thought-provoking and even philanthropic. '
        }],
      images : [
        'assets/images/artist/sushant-satija.jpg',
        'assets/images/artist/knight-shades.png',
        'assets/images/artist/aamadd.jpg'
      ]
  };
  res.json(responseData);
});

module.exports = router
