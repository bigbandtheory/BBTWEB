


const contents = ['<div className="row">'
+'<h3 class="t-center c-white col-lg-12 col-sm-12 col-xs-12 col-centered f-raleway fw-100 fs-italic mBottom30">'
+'<span class="f-robotoSlab fw-900 c-yellow fs-italic">Good</span> Music <span class="f-robotoSlab fw-900 c-yellow fs-italic">Good</span> Business</h3></div>'
+'<div class="col-lg-10 col-sm-12 col-xs-12 col-centered"><div class="col-lg-6 col-sm-6 col-xs-12 c-white">'
+'<h6 class="f-robotoSlab fw-900 c-yellow"><span class="dropCap-2 c-darkGrey">01</span>Nullam felis metus, elementum in ante et</h6>'
+'<p>Cras arcu enim, pulvinar sit amet sodales eu, egestas at dui. Curabitur placerat, enim a pretium elementum, dolor eros rhoncus lacus, varius dictum velit turpis vel nisi. Nullam felis metus, elementum.</p>'
+'</div><div class="col-lg-6 col-sm-6 col-xs-12 c-white"><h6 class="f-robotoSlab fw-900 c-yellow"><span class="dropCap-2 c-darkGrey">02</span>Sed semper dolor nec lacus consectetur</h6>'
+'<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>'
+'</div></div>'];

export const initialState = {
     artist : {
       list: [],
       carousal :{

       }
     },
     musicPlayer : {
       songs :[]
     },
     app:{
        open : false,
        loading: false,
        aboutUs: {
         slides:[
           {url:'https://scontent.fdel1-1.fna.fbcdn.net/v/t31.0-8/10496246_256013517939010_1149907190752570113_o.jpg?oh=05b83e96035a2747870c01f7695bc637&oe=5AA0DB70'},
           {url:'https://scontent.fdel1-1.fna.fbcdn.net/v/t31.0-8/12132436_424177431122617_6462045560080503229_o.jpg?oh=560bd5ccdd393907a7eed98877d48716&oe=5A933462'},
           {url:'https://scontent.fdel1-1.fna.fbcdn.net/v/t31.0-8/15129579_575391232667902_7267719905241387509_o.jpg?oh=d33fdbf952b82715ee9122c8d81be362&oe=5AD07B1A'},
           {url:'https://scontent.fdel1-1.fna.fbcdn.net/v/t31.0-8/10365447_256013534605675_2451428214336395097_o.jpg?oh=8c4dc19a200ae670a64e2e2403679f04&oe=5AD61F78'},
         ]
        },
        whatWeDo: {
          menus : [
            {name : 'curation', label : 'CURATION' , icon : 'flaticon-microphone83'},
            {name : 'event', label : 'EVENT' , icon : 'flaticon-glamour'},
            {name : 'marketing', label : 'MARKETING' , icon : 'flaticon-games37'}
          ],
          contents : contents
        },
        homeCarousal: {
         slides:[
           {image:'https://scontent-bom1-1.xx.fbcdn.net/v/t31.0-8/20728970_708928505980840_1736726774778535887_o.jpg?oh=f8590f06fe44b9ee39cbbec02ac6e429&oe=5AA471F3'},
           {image:'https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-9/16299239_609247709282254_494215141630309822_n.png?oh=6df86036fbccf512ba93a77b1d6b016d&oe=5A8A0B3D'},
           {image:'assets/images/slider/slide-01.jpg'}
         ]
        },
        teams: [
         {
           image:'assets/images/team/akshay.jpg',
           name: 'Akshay Ahuja',
           designation : 'Chief Executive Officer',
           description:'An ex Googler who believes that there is nothing like a dream job. You either have a dream or a job.Akshay started his career at Google, after 4 years of working there he decided to create a music company that would specifically support the indie circuit.'
         },{
           image:'assets/images/team/02.jpg',
           name: 'Vipul Pant',
           designation: 'Chief Technology Officer',
           description:'Europe broadened their fan base even more to become one of the most successful bands in their genre.'
         },{
           image:'assets/images/team/mansimran-singh.jpg',
           name: 'Mansimran',
           designation: 'Chief Operation Officer',
           description:'He is the co-founder in Big Band Theory and takes care of the Artist & Repertoire front at BBT. He also indulges himself in reading about musicology and its growth in India and the world.'
         },{
           image:'assets/images/team/manjot.png',
           name: 'Manjot Singh',
           designation: 'Chief Field Officer',
           description:'Europe broadened their fan base even more to become one of the most successful bands in their genre.'
         }
        ],
        socialBannerVideos:[
         {url : 'assets/videos/turntable.mp4', type: 'video/mp4'},
         {url : 'assets/videos/turntable.webm', type: 'video/webm'},
         {url : 'assets/videos/turntable.ogg', type: 'video/ogg'}
        ],
        events : [],
        contactVideos : [{url:'assets/videos/videoclip.mp4' , type: 'video/mp4'}]
     },
     client: {favList : []}
 };