const express = require('express');
const featuredVideo = require('./constants/FeaturedVideos');
const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {

    next();
});

router.get('/all', function (req, res) {
    res.json([{
        id: 1,
        name: 'TEST DATA',
        coverImage: ''
    }]);
});

router.get(':id', function (req, res) {

});

router.get('/featured/videos', (req, res) => {
    res.json(featuredVideo);
});

router.get('/featured/tracks', function (req, res) {
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


router.get('/featured', function (req, res) {

    let responseData = [
        {id: 1, description: '', name: 'TEST 1', coverImage: 'assets/images/artist/sushant-satija.jpg'},
        {id: 2, description: '', name: 'TEST 2', coverImage: 'assets/images/artist/knight-shades.png'},
        {id: 3, description: '', name: 'TEST 3', coverImage: 'assets/images/artist/aamadd.jpg'}
    ];
    res.json(responseData);
});

router.get('/carousal', function (req, res) {

    let responseData = {
        slides: [{
            title: "Some blues with Cardamom",
            description: "A Dehradun based, western music band. Cardamom is an ensemble of one of the most experienced musicians of the city. The band plays a mix of originals and covers. The originals primarily revolves around Blues & Rock and they they cover Jazz, Country, reggae and Disco ",
            eventId: 1,
            image: "",
            video: {
                coverImage: "https://bigbandtheory.s3.ap-south-1.amazonaws.com/images/artist/Cardamom.jpg",
                url: "",
                duration: "",
                title: "",
            },
        }, {
            title: "Acoustic sessions with Rahul Ghai",
            description: 'A singer-songwriter based out of Chandigarh. His music revolves around Acoustic ,Blues ,Freestyle & Western Folk.\n' +
                'Rahul released his EP \'IK Sapna\' in 2018 and set to release a series of originals in 2019. ',
            eventId: 2,
            video: {
                coverImage: "https://bigbandtheory.s3.ap-south-1.amazonaws.com/images/artist/Rahul+Ghai.JPG",
                url: "https://bigbandtheory.s3.ap-south-1.amazonaws.com/videos/rahul-ghai-ek-sapna.mp4",
                duration: "",
                title: "Ek sapna",
                artist: "Rahul Ghai",
            },
        }, {
            title: "Some Rock `n` Roll with Knight shades",
            description: 'Fast paced, up tempo rhythm and blues played in a modern rock and roll style coupled with unlimited energy, spirited stage presence and an appreciable crowd interaction is what sums up the band Knight Shades.',
            eventId: 3,
            video: {
                coverImage: "https://bigbandtheory.s3.ap-south-1.amazonaws.com/images/artist/knight-shades.png",
                url: "https://bigbandtheory.s3.ap-south-1.amazonaws.com/videos/night_shades_happy.mp4",
                duration: "",
                title: "Happy",
                artist: "Knight Shades",
            }
        }, {
            title: "Shufiana rock with Advika",
            description: "The word simply means UNIQUE <br/> The band brings together musical essence from different parts of the country. The band plays commercial music with the flavour of Sufi and Qawwali. <br/> Highly energetic performances with uniqueness in musicality is what defines the band.",
            eventId: 4,
            video: {
                coverImage: "https://bigbandtheory.s3.ap-south-1.amazonaws.com/images/artist/Advika.jpg",
                url: "https://www.youtube.com/watch?v=Ox3fMkG_5EY",
                duration: "",
                title: "Akhiya",
                artist: "Advika",
            }
        }, {
            title: 'Bollywood night with Rayaaz',
            description: 'The band plays all kinds of music ranging from Bollywood to Indi-pop to Sufi to Retro and many more. The band keeps playing across the country. ',
            video: {
                coverImage: "https://bigbandtheory.s3.ap-south-1.amazonaws.com/images/artist/The+Rayaaz+Project.jpg",
                url: "https://bigbandtheory.s3.ap-south-1.amazonaws.com/videos/rayaaz_zinnat.mp4",
                duration: "",
                title: "Zinnat",
                artist: "Rayaaz",
            }
        }],
    };
    res.json(responseData);
});

router.get('/video/:id', (req, res) => {
    const {param: {id}} = req;

});

module.exports = router;
