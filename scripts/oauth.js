function snOauth(){
	var jso = new JSO({
       providerID: "helpmedo",
       client_id: "0884c4f24d230300ff087e2d53711801",
       redirect_uri: "https://helpmedo.herokuapp.com/home.html",
       authorization: "https://dev18947.service-now.com/oauth_auth.do",
    });
    jso.callback();
	jso.getToken(function(token) {
       alert("I got the token: ", token);
       alert("Access token string itself:", token.access_token);
  });
  jso.wipeTokens();
}