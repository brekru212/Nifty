/**
 * Created by Muigai on 6/11/2016.
 */

    // init facebook js sdk
window.fbAsyncInit = function() {
    FB.init({
        appId      : '1331224416906757',
        xfbml      : true,
        version    : 'v2.6'
    });
    /** Function to check the log in status of a user */
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
//                document.getElementById('status').innerHTML = 'We are connected';
            document.getElementById('loginbtn').style.visibility = "hidden";
        } else if (response.status === 'not_authorized') {
//                document.getElementById('status').innerHTML = 'We are not logged in'
        } else {
//                document.getElementById('status').innerHTML = 'You are not logged into Fb'
        }
    })
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

/** Function to log into Facebook */
function fblogin() {
    FB.login(function(response) {
        if (response.status === 'connected') {
            document.getElementById('status').innerHTML = 'We are connected';
        } else if (response.status === 'not_authorized') {
            document.getElementById('status').innerHTML = 'We are not logged in'
        } else {
            document.getElementById('status').innerHTML = 'You are not logged into Fb'
        }
    })
}
