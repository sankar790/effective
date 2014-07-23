var client_id = "485704721514222";
var redir_url = "https://m.facebook.com/connect/login_success.html";
var siteurl="http://184.107.213.34/~projects/php_apps/winbuddies/webservice?";
var device_id="";
var ContestId=0;
var GroupId="";
var accessToken="";
function FBConnect()
{
		//alert('ok2')
	if(window.plugins.childBrowser == null)
	{
		ChildBrowser.install();
	}
    
}

FBConnect.prototype.connect = function(client_id,redirect_uri,display)
{
	
	
	this.client_id = client_id;
	this.redirect_uri = redirect_uri;
    
	var authorize_url  = "https://graph.facebook.com/oauth/authorize?";
	authorize_url += "client_id=" + client_id;
	authorize_url += "&redirect_uri=" + redirect_uri;
	authorize_url += "&display="+ ( display ? display : "touch" );
	authorize_url += "&type=user_agent";
	authorize_url+="&scope=email,publish_stream,offline_access,read_stream,manage_pages,manage_notifications";
    //alert(authorize_url);
	window.plugins.childBrowser.showWebPage(authorize_url);
	var self = this;
	window.plugins.childBrowser.onLocationChange = function(loc){self.onLocationChange(loc);};
}
FBConnect.prototype.onLocationChange = function(newLoc)

{
	
	if(newLoc.indexOf(this.redirect_uri) == 0)
	{
	  // 	alert('ok')
		var result = unescape(newLoc).split("#")[1];
		result = unescape(result);
        
		// TODO: Error Check
		this.accessToken = result.split("&")[0].split("=")[1];
		accessToken=this.accessToken;
        
		this.expiresIn = result.split("&")[1].split("=")[1];		
		expiresIn = this.expiresIn;
	
		window.plugins.childBrowser.close();
		//alert("my access token="+this.accessToken);
		window.localStorage.setItem("accessToken",this.accessToken);
		window.localStorage.setItem("expiresIn",this.expiresIn);
        if(flogin==0){
		getMyinfo(this.accessToken,this.expiresIn);
        }
        else{
		getFacebookfnd();
        }
		this.onConnect();
	}
}


FBConnect.prototype.getFriends = function()
{
	var url = "https://graph.facebook.com/me/friends?access_token=" + this.accessToken;
	var req = new XMLHttpRequest();
    
	req.open("get",url,true);
	req.send(null);
	req.onerror = function(){alert("Error");};
	return req;
}

function getMyinfo(accessToken,expiresIn)
{
    $.mobile.showPageLoadingMsg();

	console.log(expiresIn);	
	var url = "https://graph.facebook.com/me?scope=email&access_token="+accessToken;	
	var req = new XMLHttpRequest();
    
	req.open("get",url,false);
	req.send(null);
	req.onerror = function(){alert("Error");};
	var result=eval("(" + req.responseText + ")");
	var fbUserId=result.id;
	var name=result.name;
	window.localStorage.setItem("user_name",name); 
	var first_name=result.first_name;//alert("myfirst_name"+first_name);
	var last_name=result.last_name;//alert("last_name"+last_name);
	var link=result.link;//alert("link"+link);
	var emailid=result.email;//alert("emailid"+emailid);
	var username=result.username;//alert("username=="+username);
	var gender=result.gender;//alert("gender"+gender);
	//var location=result.location.name;alert("location"+location);
   var name2=first_name+'  '+last_name
    window.localStorage.setItem('UName',name2);
	 window.localStorage.setItem('Fuserid',fbUserId);
	var obj={"facebook":{"id":fbUserId,"access_token":accessToken,"expiration_date":"2013-08-12T08:58:59.380Z"}}
    //$.mobile.changePage("#main");
	
	var password="";	
	var User1 = Parse.Object.extend("User");
	var user = new User1();
	//alert(cur_lat)
	user.set("lat",parseFloat(cur_lat));
	user.set("long",parseFloat(cur_lang));
	user.set("username",username);
	user.set("password",'r_password');
	user.set("email", emailid);
	user.set("Name",first_name+' '+last_name);
	user.set("authData",obj);
	user.set("Facebookid",fbUserId);
	user.set("deviceId",deviceid);
	user.signUp(null, {
                success: function(user) {
                $.mobile.hidePageLoadingMsg();
                var cuser=emailid;
               // alert('Registration Successfull');
                //navigator.notification.alert('Registration Successfull')
					localStorage.setItem('localusername',cuser);
                localStorage.setItem('login','facebook');
                 getInvitation();
                //getCurrentdata();
                
                },
                error: function(user, error) {
                $.mobile.hidePageLoadingMsg();
                
                var msg=error.message;
               // alert(msg)
                if(msg.search('already')!= -1){
                var cuser=emailid;
                localStorage.setItem('localusername',cuser);
                localStorage.setItem('login','facebook');
                getCurrentdata();
                //getInvitation();
                
                }
                }
                });
}

FBConnect.prototype.post = function(_fbType,params){	
	// Our Base URL which is composed of our request type and our localStorage facebook_token
	var url = 'https://graph.facebook.com/me/'+_fbType+'?access_token='+accessToken;
    
	// Build our URL
	for(var key in params){
		if(key == "message"){
			// We will want to escape any special characters here vs encodeURI
			url = url+"&"+key+"="+escape(params[key]);
		}else {
			url = url+"&"+key+"="+encodeURIComponent(params[key]);
		}
	}
    
	var req = self.share(url);
	alert("Successfull share your data");
}

function share(url) {
	// Create our request and open the connection
    
  	
}

FBConnect.prototype.success = function(){
	alert("Successfull share your data2");
}
// Note: this plugin does NOT install itself, call this method some time after deviceready to install it
// it will be returned, and also available globally from window.plugins.fbConnect
FBConnect.install = function()
{
		//alert('ok3')
	if(!window.plugins)
	{
		window.plugins = {};	
	}
	window.plugins.fbConnect = new FBConnect();
	return window.plugins.fbConnect;
}
FBConnect.prototype.LogOut = function()
{
		//x	alert('ok')
   window.plugins.childBrowser.LogOut();
}