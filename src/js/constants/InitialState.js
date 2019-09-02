const contents = ['<div className="row">'
+ '<h3 class="t-center c-white col-lg-12 col-sm-12 col-xs-12 col-centered f-raleway fw-100 fs-italic mBottom30">'
+ '<span class="f-robotoSlab fw-900 c-yellow fs-italic">Good</span> Music <span class="f-robotoSlab fw-900 c-yellow fs-italic">Good</span> Business</h3></div>'
+ '<div class="col-lg-10 col-sm-12 col-xs-12 col-centered"><div class="col-lg-6 col-sm-6 col-xs-12 c-white">'
+ '<h6 class="f-robotoSlab fw-900 c-yellow"><span class="dropCap-2 c-darkGrey">01</span>Nullam felis metus, elementum in ante et</h6>'
+ '<p>Cras arcu enim, pulvinar sit amet sodales eu, egestas at dui. Curabitur placerat, enim a pretium elementum, dolor eros rhoncus lacus, varius dictum velit turpis vel nisi. Nullam felis metus, elementum.</p>'
+ '</div><div class="col-lg-6 col-sm-6 col-xs-12 c-white"><h6 class="f-robotoSlab fw-900 c-yellow"><span class="dropCap-2 c-darkGrey">02</span>Sed semper dolor nec lacus consectetur</h6>'
+ '<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>'
+ '</div></div>', '<div className="row">'
+ '<h3 class="t-center c-white col-lg-12 col-sm-12 col-xs-12 col-centered f-raleway fw-100 fs-italic mBottom30">'
+ '<span class="f-robotoSlab fw-900 c-yellow fs-italic">Your</span> Music <span class="f-robotoSlab fw-900 c-yellow fs-italic">is on</span> Us</h3></div>'
+ '<div class="col-lg-10 col-sm-12 col-xs-12 col-centered"><div class="col-lg-6 col-sm-6 col-xs-12 c-white">'
+ '<h6 class="f-robotoSlab fw-900 c-yellow"><span class="dropCap-2 c-darkGrey">01</span>Nullam felis metus, elementum in ante et</h6>'
+ '<p>Cras arcu enim, pulvinar sit amet sodales eu, egestas at dui. Curabitur placerat, enim a pretium elementum, dolor eros rhoncus lacus, varius dictum velit turpis vel nisi. Nullam felis metus, elementum.</p>'
+ '</div><div class="col-lg-6 col-sm-6 col-xs-12 c-white"><h6 class="f-robotoSlab fw-900 c-yellow"><span class="dropCap-2 c-darkGrey">02</span>Sed semper dolor nec lacus consectetur</h6>'
+ '<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>'
+ '</div></div>', '<div className="row">'
+ '<h3 class="t-center c-white col-lg-12 col-sm-12 col-xs-12 col-centered f-raleway fw-100 fs-italic mBottom30">'
+ '<span class="f-robotoSlab fw-900 c-yellow fs-italic">Lets</span> Give <span class="f-robotoSlab fw-900 c-yellow fs-italic">Music a</span> Change</h3></div>'
+ '<div class="col-lg-10 col-sm-12 col-xs-12 col-centered"><div class="col-lg-6 col-sm-6 col-xs-12 c-white">'
+ '<h6 class="f-robotoSlab fw-900 c-yellow">'
+ '<span class="dropCap-2 c-darkGrey">01</span>Marketing Music</h6>'
+ '<p class="text-left">We help artists in designing and running marketing campaigns for the launch of their original content. In past, we have helped artists launch their albums, singles, EP\'s and video songs on social media and other platforms. </p>'
+ '</div><div class="col-lg-6 col-sm-6 col-xs-12 c-white">'
+ '<h6 class="f-robotoSlab fw-900 c-yellow"><span class="dropCap-2 c-darkGrey">02</span>Marketing Musician</h6>'
+ '<p class="text-left">Building and increasing value of the musicians has always been our core intent. Marketing musicians becomes important for any artist to stand out. We look at our artists as products and we work as product managers. </p>'
+ '</div></div>'];

export const initialState = {
    artist: {
        list: [],
        carousal: {},
        featuredList: []
    },
    musicPlayer: {
        songs: []
    },
    app: {
        open: false,
        loading: false,
        aboutUs: {
            slides: [
                {url: 'https://bigbandtheory.s3.ap-south-1.amazonaws.com/images/extras/bbt_logo.png'},
                {url: 'https://bigbandtheory.s3.ap-south-1.amazonaws.com/images/artist/knight-shades.png'},
                {url: 'https://bigbandtheory.s3.ap-south-1.amazonaws.com/images/artist/Advika.jpg'},
                {url: 'https://bigbandtheory.s3.ap-south-1.amazonaws.com/images/artist/Advika.jpg'},
            ]
        },
        whatWeDo: {
            menus: [
                {name: 'curation', label: 'CURATION', icon: 'flaticon-microphone83'},
                {name: 'event', label: 'EVENT', icon: 'flaticon-glamour'},
                {name: 'marketing', label: 'MARKETING', icon: 'flaticon-games37'}
            ],
            contents: contents
        },
        homeCarousal: {
            slides: [
                {
                    image: 'https://bigbandtheory.s3.ap-south-1.amazonaws.com/images/home_caraousal/coverimage.jpg',
                    innerContent: '<i class="flaticon-glamour c-yellow"></i>' +
                        '<h1 class="f-raleway c-yellow fw-900">FOR THE LOVE OF <span class="c-blue">(GOOD)</span> ' +
                        '<br />MUSIC</h1><h3 class="f-robotoSlab c-yellow fw-400 mTop25">Curated 2000 shows, with 500 artist in 20 cities</h3>' +
                        '<h3 class="f-damion c-yellow fw-400"></h3>',

                },
            ]
        },
        teams: [
            {
                image: 'assets/images/team/02.jpg',
                name: 'Akshay Ahuja',
                designation: 'Chief Executive Officer',
                description: 'An ex Googler who believes that there is nothing like a dream job. You either have a dream or a job.Akshay started his career at Google, after 4 years of working there he decided to create a music company that would specifically support the indie circuit.'
            }, {
                image: 'assets/images/team/02.jpg',
                name: 'Vipul Pant',
                designation: 'Chief Technology Officer',
                description: 'Big band theory technical backbone along with his technical standpoint he also works in shadows to help big band theory to grow in business development.'
            }, {
                image: 'assets/images/team/02.jpg',
                name: 'Mansimran',
                designation: 'Chief Operation Officer',
                description: 'He is the co-founder in Big Band Theory and takes care of the Artist & Repertoire front at BBT. He also indulges himself in reading about musicology and its growth in India and the world.'
            }, {
                image: 'assets/images/team/02.jpg',
                name: 'Manjot Singh',
                designation: 'Chief Field Officer',
                description: 'Manjot is on of the sweet talker and helps big band theory to grow in Punjab reason, So whenever you are in punjab do meet and have a cold beer with him.'
            }
        ],
        socialBannerVideos: [
            {url: 'assets/videos/turntable.mp4', type: 'video/mp4'},
            {url: 'assets/videos/turntable.webm', type: 'video/webm'},
            {url: 'assets/videos/turntable.ogg', type: 'video/ogg'}
        ],
        events: [],
        contactVideos: [{url: 'assets/videos/videoclip.mp4', type: 'video/mp4'}]
    },
    client: {favList: []}
};