
const FB_APP_ID = process.env.FB_APP_ID;

export default function initFB(callback){

  window.fbAsyncInit = function() {
    FB.init({
      appId            : FB_APP_ID,
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v2.10'
    });
    FB.AppEvents.logPageView();
    callback();
  };
  loadFBScript(document, 'script', 'facebook-jssdk');
}

function loadFBScript(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = `https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.5&appId=${FB_APP_ID}`;
  fjs.parentNode.insertBefore(js, fjs);
}