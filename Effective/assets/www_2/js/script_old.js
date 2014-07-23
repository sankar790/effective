var cur_user ='';
var spend_money = '';
var cur_lat = '23.03360797';
var cur_lang = '72.5591448';
//var cur_lat = null;
//var cur_lang = null;
var nav = null;
var res_lat=null;
var res_long=null;
var res_adds='';
var media_type='Private';
var media_type1='';
var twitterFriendsToInvite=new Array();
var client_Parse_id='H3NMSYUEWMP23ZB4O3DB5O0ZXFFD13WZIPQF0XFGUJVP54XN';
var client_secret_id='0Z3MPDDDHZWR031JCH1BJE3DVK1V2SDKA4SZWOLV2JN14ZM2';
var verson1='';
var privateMem = new Array();
var count_friend = -1;
var cancel_invite = 0;
var a=0;
var my_client_id = "485704721514222", // YOUR APP ID
my_secret = "72b634c9b1796f3deeec306ccf213bb1", // YOUR APP SECRET 
my_redirect_uri = "http://www.facebook.com/connect/login_success.html", // LEAVE THIS
my_type ="user_agent", my_display = "touch"; // LEAVE THIS
 
var facebook_token = "fbToken"; // OUR TOKEN KEEPER
var client_browser;


function requestPosition1(){
    navigator.geolocation.getCurrentPosition(onSuccesse, onErrore);

}
function onSuccesse(position){
   // alert('succ');
    cur_lat = position.coords.latitude;
    cur_lang = position.coords.longitude;
    
}

function onErrore(){
 // alert('error')
}

function requestPosition() {

if (nav == null) {
  nav = window.navigator;
}
if (nav != null) {
  var geoloc = nav.geolocation;
  if (geoloc != null) {
      geoloc.getCurrentPosition(successCallback);
  }
  else {
      alert("geolocation not supported");
  }
}
else {
  alert("Navigator not found");
}
}

function successCallback(position)
{
// alert(position.coords.latitude)
cur_lat=position.coords.latitude;
cur_lang=position.coords.longitude;
console.log(cur_lat+'  long-->'+cur_lang);
//setText(position.coords.latitude, "latitude");
//setText(position.coords.longitude, "longitude");
}
function local_login(){
    var cuser=localStorage.getItem('localusername');
    //alert(cuser);
    if(cuser!=null){
        $.mobile.showPageLoadingMsg();
        getdata(cuser);
        getCompletedata(cuser);
        getRecentdata(cuser);
    
    }
    else{
      //  alert('ok');
    }

}

var debug='brow'
$( document ).ready(function() {
      if(debug=='brow1')
      $.mobile.changePage('#venuserchpage');
      
 $(window).scroll(function () {
               if($(window).scrollTop() + $(window).height() == $(document).height()) {
                           if($.mobile.activePage.attr('id')=='privatefrdList'){
                              if(media_type1=='facebook'){
                                   getMoreFbfnd();
                  }          }
    }                                
});
     
      
      
      
      
        var autocomplete = new google.maps.places.Autocomplete($("#search_loc")[0], {});
                    
      google.maps.event.addListener(autocomplete, 'place_changed', function() {
          var place = autocomplete.getPlace();
          console.log(place.address_components);
      });
      // alert('doc_deady')
    
    $('#mappage').on('pageshow',function(){
          var myLatlng = new google.maps.LatLng(res_lat,res_long);
          var mapOptions = {
          zoom: 12,
          center: myLatlng,
          mapMaker:true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
          }
          var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
          var infowindow = new google.maps.InfoWindow({
                content:res_adds,
                maxWidth:500
          });
          var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                title: 'Hello World!'
          });
          google.maps.event.addListener(marker, 'click', function(event) {
                infowindow.open(map, marker);
          });
    });
    
    $('#mappage').on('click','.addlist',function(){
       //alert('ok');VenuTips
        //$.mobile.changePage('#datepage');
          res_lat=$(this).attr('lat')
          res_long=$(this).attr('long')
          res_adds=$(this).attr('adds');
         var venuid=$(this).attr('id');
                     a=0;
                     getvenuTips(venuid);
                   //  getvenuPhoto(venuid);
          //$.mobile.changePage('#datepage');
          
    });


    $('#facebook_reg').bind('click',function(){
      //  var fb = FBConnect.install();
     //   fb.connect(client_id,redir_url,"touch");
    //	 FB.getLoginStatus(function(response) {
    		// alert(JSON.stringify(response));
    	
    	 $.mobile.showPageLoadingMsg(); 
    	   FB.login(
                   function(response) {
                	/*   alert(JSON.stringify(response));
                	   alert(response.authResponse.accessToken);
                	   alert(response.authResponse.userId);*/
                	   window.localStorage.setItem("accessToken",response.authResponse.accessToken);
                	   var accessToken1=response.authResponse.accessToken;
                	   if (response.authResponse) {
                		     console.log('Welcome!  Fetching your information.... ');
                		     FB.api('/me', function(result) {
                		  // 	 alert(JSON.stringify(result));
                		     //  alert('Good to see you, ' + result.name + '.');
                		       
                		       var fbUserId=result.id;
                		   	var name=result.name;
                		   	window.localStorage.setItem("user_name",result.email); 
                		   	//alert("my name"+name);
                		   	var first_name=result.first_name;//alert("myfirst_name"+first_name);
                		   	var last_name=result.last_name;//alert("last_name"+last_name);
                		   	var link=result.link;//alert("link"+link);
                		   	var emailid=result.email;//alert("emailid"+emailid);
                		   	var username=result.username;//alert("username=="+username);
                		   	var gender=result.gender;//alert("gender"+gender);
                		   	//var location=result.location.name;alert("location"+location);
                		   	
                		   	var obj={"facebook":{"id":fbUserId,"access_token":accessToken1,"expiration_date":"2013-08-12T08:58:59.380Z"}}
                		   	
                		   	var password="";	
                		   	var User1 = Parse.Object.extend("User");
                		   	var user = new User1();
                		   	//user.set("username",emailid);
                		   	user.set("username",username);
                		   	user.set("password",'r_password');
                		   	user.set("email", emailid);
                		   	user.set("Name",first_name+' '+last_name);
                		   	user.set("authData",obj);
                		   	user.signUp(null, {
                		                   success: function(user) {
                		                   $.mobile.hidePageLoadingMsg();
                		                   // var userid=user.id;
                		                   //cur_user=r_eamil;
                		                   var cuser=emailid;
                		                   
                		                  // alert('Registration Successfull');
                		                   localStorage.setItem('localusername',cuser);
                		                   getCompletedata(cuser);
                		                   getRecentdata(cuser);
                		                   },
                		                   error: function(user, error) {
                		                   $.mobile.hidePageLoadingMsg();
                		                   
                		                   var msg=error.message;
                		                   if(msg.search('already')!= -1){
                		                   var cuser=emailid;
                		                   // alert('Registration Successfull')
                		                   localStorage.setItem('localusername',cuser);
                		                   getdata(cuser);
                		                   getCompletedata(cuser);
                		                   getRecentdata(cuser);
                		                   }
                		                   }
                		                   });

                		       
                		       
                		       
                		       
                		     });
                		   } else {
                		     console.log('User cancelled login or did not fully authorize.');
                		   }
                   },
                   { scope: "email" }
                   );
    });//end faceook registration
    
    $('#twitter_reg').bind('click',function(){
        $.mobile.showPageLoadingMsg();
        Twitter.init();
    });
    $('#Linked_reg').bind('click',function(){
        //  alert('ok');
        $.mobile.showPageLoadingMsg();
        var apiKey = '7j4ona8m27gd';
        var secret = 'wXUnjIBNDZJXw7oD';
        
        window.plugins.childBrowser.showWebPage("http://09php.com/mobile/Linkedin_Demo/linkedin.php?lType=initiate", { showLocationBar: true });
        window.plugins.childBrowser.onLocationChange = function(loc) {
            console.log(loc);
            console.log(loc.indexOf('oauth_authorization_expires_in'));
            if (loc.indexOf('oauth_authorization_expires_in') > -1) {
                $.ajax({
                      type: "POST",
                      url:loc,
                      dataType: "jsonp",
                      crossDomain:true,
                      success: function(response)
                      {
                       console.log(response);
                          var name = response['first-name']+' '+ response['last-name'];
                          var email = response['email-address'];
                          var User3 = Parse.Object.extend("User");
                          var user = new User3();
                          user.set("username",email);
                          user.set("password",'r_password');
                          user.set("email", email);
                          user.set("Name",name);
                          // alert(response.email+'--->');                                      
                          user.signUp(null, {
                                      success: function(user) {
                                      $.mobile.hidePageLoadingMsg();
                                      var userid=user.id;
                                      // cur_user=r_eamil;
                                      var cuser=email;
                                      navigator.notification.alert('Registration Successfull');
                                     
                                    localStorage.setItem('localusername',email);
                                      getdata(cuser);
                                      getCompletedata(cuser);
                                      getRecentdata(cuser);
                                      },
                                      error: function(user, error) {
                                      $.mobile.hidePageLoadingMsg();
                                      var msg=error.message;
                                     // alert(msg);
                                      if(msg.search('already')!= -1){
                                         var cuser=email;
                                       localStorage.setItem('localusername',email);
                                         getdata(cuser);
                                         getCompletedata(cuser);
                                         getRecentdata(cuser);
                                         $.mobile.hidePageLoadingMsg();
                                      }else{
                                         alert(error.message);
                                      }
                                      }
                          });
                          //getUserPro_linkdin(name,email);
                      }
              });
                window.plugins.childBrowser.close();
            }
        }
    });
$('.postwall').on('click',function(){
    media_type=$(this).attr('type1');
});
    $('#Gmail_reg').bind('click',function(){
                     //    alert('ok')
        window.plugins.childBrowser.showWebPage('https://accounts.google.com/o/oauth2/auth?scope=https://www.googleapis.com/auth/userinfo.email+https://www.googleapis.com/auth/userinfo.profile&redirect_uri=https://www.google.co.in/&state=profile&client_id=1020523470316.apps.googleusercontent.com&response_type=token');   
        window.plugins.childBrowser.onLocationChange = function(loc){
            if(loc.indexOf("access_token") == -1){
              
            }else{
                function gup(name){
                    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");  
                    var regexS = "[\\?&]"+name+"=([^&#]*)";  
                    var regex = new RegExp( regexS );  
                    var results = regex.exec(loc); 
                    if( results == null )    return "";  
                    else    return results[1];
                }
                var access_tkn = gup( 'access_token' );
                console.log(access_tkn);
                $.mobile.showPageLoadingMsg();
                window.plugins.childBrowser.close();
                Gmaillogin(access_tkn)
            }
            function Gmaillogin(access_tkn){
                var url1="https://www.googleapis.com/oauth2/v1/userinfo?access_token="+access_tkn;
                console.log(url1);
                $.ajax({
                        type: "GET",
                        url:url1,
                        crossDomain:true,
                        success: function(response) 
                        {
                        console.log(response);
                        var User3 = Parse.Object.extend("User");
                        var user = new User3();
                        user.set("username",response.email);
                        user.set("password",'r_password');
                        user.set("email", response.email);
                        user.set("Name",response.name);
                        // alert(response.email+'--->');                                      
                        user.signUp(null, {
                                   success: function(user) {
                                        $.mobile.hidePageLoadingMsg();
                                        var userid=user.id;
                                        // cur_user=r_eamil;
                                        var cuser=response.email;
                                       localStorage.setItem('localusername',cuser);
                                       navigator.notification.alert('Registration Successfull');
                                        getdata(cuser);
                                        getCompletedata(cuser);
                                        getRecentdata(cuser);
                                   },
                                   error: function(user, error) {
                                        $.mobile.hidePageLoadingMsg();
                                        var msg=error.message;
                                        if(msg.search('already')!= -1){
                                              
                                            var cuser=response.email;
                                           localStorage.setItem('localusername',cuser);
                                            getdata(cuser);
                                            getCompletedata(cuser);
                                            getRecentdata(cuser);
                                            $.mobile.hidePageLoadingMsg();
                                        }else{
                                            navigator.notification.alert(error.message);
                                          //alert(error.message);
                                        }
                                   }
                        });
                      },
                      error:function(data){
                      
                      console.log(data);
                       //alert(SON.stringify(response));
                      }
                       
                });
            }
        }; 
    });
    
    $('#backimg').bind('click',function(){
      $.mobile.changePage( "#main");
    });
    
    
                

}); //document on ready end here

// ----------- Home Page ----------- //
function getdata(usermail){
    var cur_table = Parse.Object.extend("event");
    var query = new Parse.Query(cur_table);
    query.equalTo("iUserId",usermail);
    var today = new Date();
    query.greaterThan("dEventDate",today);
    query.find({
        success: function(results) {
            $('#Crr_cnt').html('['+results.length+']')
        },
        error: function(error) {
            
            //alert("Error: " + error.code + " " + error.message);
        }
    });
}

function getCompletedata(usermail){
    var cur_table = Parse.Object.extend("event");
    var query = new Parse.Query(cur_table);
    query.equalTo("iUserId",usermail);
    var today = new Date();
    query.lessThan("dEventDate",today);
    query.find({
        success: function(results) {            
            $('#comptete_cnt').html('['+results.length+']')
            $.mobile.changePage( "#main");
        },
        error: function(error) {
            //alert("Error: " + error.code + " " + error.message);
        }
    });
}
function getRecentdata(usermail){
    var cur_table = Parse.Object.extend("event");
    var query = new Parse.Query(cur_table);
    query.equalTo("iUserId",usermail);
    var today = new Date();
    query.greaterThan("dEventDate",today);
    query.find({
          success: function(results) {
                 $('#recent_cnt').html('['+results.length+']');
                 $.mobile.changePage( "#main");
          },
          error: function(error) {
                // alert("Error: " + error.code + " " + error.message);
          }
    });
}

// ----------- Plus page  ----------- //

function eventTitleSave() {
    var eventTitle = $('#vEventTitle').val();
    window.localStorage.setItem('eventTitle',eventTitle);     
}


function searchvenu(){
                                          
         var place=$('#search_loc').val();
         var ser_type=$('#searchType').val();
         var geocoder = new google.maps.Geocoder();
         

             geocoder.geocode( { address: place }, function(results, status) {
                                                           if (status == google.maps.GeocoderStatus.OK) {
                                                           var lat = results[0].geometry.location.lat();
                                                           var lng = results[0].geometry.location.lng();
                                                            //alert(lat)
                                                           res_lat=lat; 
                                                            res_long=lng
                                                            Getserch_loc_info(lat,lng,ser_type)
                                                            
                                                            
                              
                              

                                                }
                                                           else{
                                                                res_lat=cur_lat; 
                                                                res_long=cur_lang;
                                                                 Getserch_loc_info(cur_lat,cur_lang,ser_type)

                                                           }
                                                           });

}

                                          
                function Getserch_loc_info(latt,langg,s_type){
                                          var d1=new Date();
                                          var y=d1.getFullYear()
                                          var m=d1.getMonth()+1;
                                          var d=d1.getDate();
                                          if(m<10)
                                          m='0'+m;
                                           verson1=y+''+m+''+d;
                                          var loc_url='https://api.foursquare.com/v2/venues/search?ll='+latt+','+langg+'&query='+s_type+'&client_id='+client_Parse_id+'&client_secret='+client_secret_id+'&v='+verson1;
                                          //var loc_url='https://api.foursquare.com/v2/venues/search?ll='+cur_lat+','+cur_lang+'&client_id='+client_Parse_id+'&client_secret='+client_secret_id'+&v=20130812'
                                          $.mobile.showPageLoadingMsg();
                                          console.log(loc_url);
                                          $.ajax({
                                                 type: "GET",
                                                 url:loc_url,
                                                 crossDomain:true,
                                                 success: function(response){
                                                 var res=response.response.venues;
                                                 var html='';
                                                 //alert(res.length);
                                                 if(res.length <10)
                                                 var len=res.length;
                                                 else
                                                 var len=10;
                                                 for(var i=0;i<res.length;i++){
                                                 console.log(res[i].name);
                                                 $.mobile.hidePageLoadingMsg();
                                                 var city='';
                                                 var postalCode=''
                                                 var address=''
                                                 var lat=res[i].location.lat;
                                                 //  alert(lat)
                                                 var long=res[i].location.lng;
                                                 if(res[i].location.address !=undefined){
                                                 address=res[i].location.address;
                                                 }
                                                 if(res[i].location.city !=undefined){
                                                 if(res[i].location.address ==undefined)
                                                 city=res[i].location.city;
                                                 else
                                                 city=','+res[i].location.city;
                                                 }
                                                 if(res[i].location.postalCode !=undefined){
                                                 postalCode=','+res[i].location.postalCode   
                                                 }
                                                // html+='<div class="venuadds" >'+address+city+postalCode+'</div>';
                                                 
                                                 html+='<li class="addlist venuadds" adds="'+res[i].name+address+city+postalCode+'" id='+res[i].id+' lat='+lat+' long='+long+'><a href="#"<p>'+res[i].name+'</p><p>'+address+city+postalCode+'</p></a></li>'
                                                 }
                                                 $('#locationlist1').html(html).trigger("create");
                                                 $.mobile.changePage('#mappage');
                                                 $("#locationlist1").listview("refresh");
                                                 },
                                                 error:function(error){
                                                    navigator.notification.alert('error in retrivingdata')

                                                 //alert('error in retrivingdata') ;
                                                 }
                                                 });//end ajax
                                          }

function saveDateTime() {
      var startDate = $('#startDate').val();
      var endDate = $('#endDate').val();
      var startTime = $('#startTime').val();
      var endTime = $('#endTime').val();
      
      window.localStorage.setItem('startDate',startDate);
      window.localStorage.setItem('endDate',endDate);
      window.localStorage.setItem('startTime',startTime);
      window.localStorage.setItem('endTime',endTime);
      //postToPage
      $.mobile.changePage('#postToPage');
}

function facebookInvite() {
    media_type1='facebook'
  if(media_type=='Public')
    post_public_facebook();
  else if (media_type=='Private') {
    post_private_facebook();
  }
}

function post_public_facebook() {
    var _fbType = 'feed';
    var params = {};
    params['message'] = "";
    params['name'] = 'Invitation for effective event';
    params['description'] = "Invitation from effective to join with us..";
    params['_link'] = " ";
    params['picture'] = " ";//"http://compixels.com/wp-content/uploads/2011/04/Facebook-Logo.jpg";
    params['caption'] = ' ';
    var fb = FBConnect.install();
    fb.post(_fbType,params);
}

function post_private_facebook() {
	//$.mobile.showPageLoadingMsg();
	FB.getLoginStatus(function(response) {
		//alert(response);
		  if (response.status === 'connected') {
			  getFacebookfnd();
		  }
		  else{
			  
			   FB.login(
                       function(response) {
                    	   window.localStorage.setItem("accessToken",response.authResponse.accessToken);
    	               	   getFacebookfnd();
                       },
                       { scope: "email" }
                       );
			/*  FB.login(
	                   function(response) {
	                	 //  alert(JSON.stringify(response));
	                	  // alert(response.authResponse.accessToken);
	                	   //alert(response.authResponse.userId);
	               	   window.localStorage.setItem("accessToken",response.authResponse.accessToken);
	               	   getFacebookfnd();
		          })*/
		  }
	});
	
 /*	 FB.api('/me/friends', function(response) {
		 $.mobile.showPageLoadingMsg();
		 //alert(JSON.stringify(response));
		 $.mobile.hidePageLoadingMsg();        
           // var datadiv = document.getElementById('frienddata');
            var result=response.data;
            console.log(result[0]);
            var html='';
            if (result[0].name) {
           //var html='<ul data-role="listview" data-split-icon="gear" data-filter="true" data-theme="c">';
           //alert('ok1')
               
                for(var i=0;i<result.length;i++){
                    
                    html+='<li><a href="#" style="padding-top: 0px;padding-bottom: 0px;padding-right: 0px;padding-left: 0px;">';
                   html+='<label style="border-top-width: 0px;margin-top: 0px;border-bottom-width: 0px;margin-bottom: 0px;border-left-width: 0px;border-right-width: 0px;" data-corners="false">';
                   html+='<fieldset data-role="controlgroup"> ';
                    html+='<input type="checkbox" name="checkbox-'+i+'" id="checkbox-'+i+'" class="custom" onclick="privateChkMem('+i+')" value="'+result[i].id+'"/>';
                    html+='<label for="checkbox-'+i+'" style="border-top-width: 0px;margin-top: 0px;border-bottom-width: 0px;margin-bottom: 0px;border-left-width: 0px;border-right-width: 0px;" data-corners="false">'+result[i].name+'</label>';
                    html+='</fieldset>';
                   html+='</label>';
                    html+='</li>';
                }
               // alert('ok')
                 //html+='</ul>'
                  console.log(html)
            }else{
              $('#privatedList').html("No facebook contacts found");
            }
           $('#privateList1').html(html).trigger("create");
          // alert('ok');
           
           $.mobile.changePage("#privatefrdList");
           $('#privateList1').listview('refresh');
          
	  });
*/
	
      
}

function privateChkMem(id) {
    if($('#checkbox-'+id).is(':checked')){
      privateMem.push($('#checkbox-'+id).val());
    }
    else{
      var name = $('#checkbox-'+id).val();     
      var index = privateMem.indexOf(name);     
      privateMem.splice(index,1);
    }
    console.log(privateMem);
    if (privateMem != '') {
      $('#SendFbPrivate').html('<a href="javascript:post_toPage1();" data-role="button" data-inline="true" class="publishbutton" corner="false" style="margin-top: 2%"> Save </a>').trigger("create");
    }else{
      $('#SendFbPrivate').html(" ");
    }
    window.localStorage.setItem('privateMem',privateMem);
}

function post_toPage1(){
        var message = "Invitation from effective to join with us..";
        var ContestImage="http://compixels.com/wp-content/uploads/2011/04/Facebook-Logo.jpg";
        var mylink="https://www.facebook.com/";
        count_friend++;
        console.log(count_friend);
        var to=privateMem[count_friend];
        if(count_friend<privateMem.length){
        var url="https://m.facebook.com/dialog/feed?app_id=485704721514222&to="+to+"&link="+mylink+"&picture="+ContestImage+"&name=Invitation from effective&caption=Reference Documentation&description="+message+"&redirect_uri="+redir_url
        //alert(url);
        window.plugins.childBrowser.showWebPage(encodeURI(url));
        window.plugins.childBrowser.onLocationChange = function(loc){
        console.log(loc);
        if(loc=="https://www.facebook.com/connect/login_success.html%23_=_"){
        cancel_invite++;
        window.plugins.childBrowser.close();
        var t=setTimeout(function(){ post_toPage1();},2000);
        
        }
        if(loc.indexOf("post_id") == -1){}else{
        
        window.plugins.childBrowser.close();
        var t=setTimeout(function(){ post_toPage1();},2000);
        //alert(to);
        // console.log(siteUrl+"action=getUserByFacebookId&vFacebookid="+to);
        
        }
        };
        }
}

//---------------------------twtter invite--------------------------------------------
                                          
function twitterInvite(){
  if(media_type=='Public')
  post_public_twitter();
  else if (media_type=='Private') {                               
    post_private_twitter();

   }
}
//-----------------------twittergetfiendprivatepost-----------------------------
var twttext=0;                                          
function post_private_twitter(){
                                          
                  media_type1='twitter'      
	  twitterFriendsToInvite=[];
      twitterNameToInvite=[];
                var user_id=window.localStorage.getItem("twitter_user_id",twitter_user_id);           
                  if(user_id==null){
                            twttext=1;             
                             Twitter.init();             
                        }
                                          var storedAccessData, rawData = localStorage.getItem(twitterKey);
                                          
                                          storedAccessData = JSON.parse(rawData); // Paring Json
                                          options.accessTokenKey = storedAccessData.accessTokenKey; // it will be saved on first signin
                                          options.accessTokenSecret = storedAccessData.accessTokenSecret; // it will be save on first login
                                          
                                          // javascript OAuth will care of else for app we need to send only the options
                                          oauth = OAuth(options);
                                          
                                          oauth.get("https://api.twitter.com/1.1/friends/list.json?user_id="+user_id,
                                                    function(data) {
                                                    var res=data.text;
                                                    var json = eval("(" + res + ")");
                                                    var users=json.users;
                                                    // alert(users.length);
                                                    var html='';
                                                   
                                                    for(var i=0;i<users.length;i++){
                                                    var name=users[i].name;
                                                    var image=users[i].profile_image_url;
                                                    //alert(name)
                                                    var id=users[i].id;
                                                    {
                                                    html+='<li><a href="#" style="padding-top: 0px;padding-bottom: 0px;padding-right: 0px;padding-left: 0px;">';
                                                    html+='<label style="border-top-width: 0px;margin-top: 0px;border-bottom-width: 0px;margin-bottom: 0px;border-left-width: 0px;border-right-width: 0px;" data-corners="false">';
                                                    html+='<fieldset data-role="controlgroup"> ';
                                                    html+='<input type="checkbox" name="checkbox-'+i+'" id="checkbox-'+i+'" class="custom" onclick="checktwtfnd(this,'+id+')" value="'+name+'"/>';
                                                    html+='<label for="checkbox-'+i+'" style="border-top-width: 0px;margin-top: 0px;border-bottom-width: 0px;margin-bottom: 0px;border-left-width: 0px;border-right-width: 0px;" data-corners="false">'+name+'</label>';
                                                    html+='</fieldset>';
                                                    html+='</label>';
                                                    html+='</li>';
                                                  
                                                    }
                                                    
                                                  
                                                    }
                                                $('#privateList1').html(html).trigger("create");
                                                    
                                                    $.mobile.changePage("#privatefrdList");
                                                    $('#privateList1').listview('refresh');
                                                    
                                                    
                                                    },
                                                    function(data) {
                                                    
                                                    }
                                                    );                             
}
                                          


//---------------------------------------------------------------------

                                          function post_public_twitter() {
                                          var msg = "Invitation from effective to join with us";
                                          window.plugins.childBrowser.showWebPage("https://twitter.com/intent/tweet?text="+encodeURIComponent(msg), {showLocationBar: true });
                                          }
                                          
                                          function post_public_linkedin() {
                                          var apiKey = '7j4ona8m27gd';
                                          var secret = 'wXUnjIBNDZJXw7oD';
                                          var title = 'Invitation from effective';
                                          var msg ='Join with us';
                                          
                                          var url2="http://www.linkedin.com/cws/share?mini=true&url=http://192.168.1.12/iphone_android/effective/www/&title="+title+"&summary="+msg;
                                          window.plugins.childBrowser.showWebPage(encodeURI(url2));
                                          window.plugins.childBrowser.onLocationChange = function(loc) {
                                          // alert('k')
                                          if (loc.indexOf('oauth_authorization_expires_in') > -1) {
                                          window.plugins.childBrowser.showWebPage("http://api.linkedin.com/v1/people/~/shares", { showLocationBar: true });
                                          window.plugins.childBrowser.close();
                                          } 
                                          }
}
var tipsarray=new Array();
function getvenuTips(venuid){
//alert(venuid);
//var loc_url='https://api.foursquare.com/v2/venues/40a55d80f964a52020f31ee3/tips?sort=recent&oauth_token=MG3NV0LJU21SITYXEZUPTSEEGLIKBYL3BOAUXSFCGU0LID4H&v=20130822';
var loc_url='https://api.foursquare.com/v2/venues/'+venuid+'/tips?sort=recent&&client_id='+client_Parse_id+'&client_secret='+client_secret_id+'&v='+verson1;
                                          
              console.log(loc_url) 
                $.mobile.showPageLoadingMsg();
                console.log(loc_url);
                $.ajax({
                type: "GET",
                url:loc_url,
                crossDomain:true,
                complete:function(){
                     
                       },
               success: function(response){
                        $.mobile.hidePageLoadingMsg();
                       var thtml='';
                       var ht='';
                       tips=0;
                       var res=response.response.tips.items;
                       tipsarray=[];
                       if(res.length>0){
                        $('#tipheadid').show();
                       for(var i=0;i<res.length;i++){
                          ht='<li onclick="gotq(this)" cls="tipsbox-'+i+'" data-icon="false"><a href="#"><img src='+res[i].user.photo.prefix+'70x70'+res[i].user.photo.suffix+' /><h3>'+res[i].user.firstName+' Says...</h3><p style="font-size:16px;">'+res[i].text+'</p></a><div id="tipsbox-'+i+'" style="display:none; padding-left:4px; padding-bottom:2px;"><span style="white-space:normal;">'+res[i].text+'</span></div></li>';
                          tipsarray.push(ht);
                              if(i<20){
                         thtml+='<li onclick="gotq(this)" cls="tipsbox-'+i+'" data-icon="false"><a href="#"><img src='+res[i].user.photo.prefix+'70x70'+res[i].user.photo.suffix+' /><h3>'+res[i].user.firstName+' Says...</h3><p style="font-size:16px;">'+res[i].text+'</p></a><div id="tipsbox-'+i+'" style="display:none; padding-left:4px; padding-bottom:2px;"><span style="white-space:normal;">'+res[i].text+'</span></div></li>';
                              }
                       }
                       if(res.length>20){
                        $('#moretips').show();
                       }
                       else{
                        $('#moretips').hide();
                       }
                      $('#tipsid').html('');
                       $('#tipslistview').html(thtml).trigger("create");
                       $.mobile.changePage('#VenuTips')
                       $('#tipslistview').listview('refresh');
                       }
                       else{
                        $('#tipheadid').hide();
                         $('#moretips').hide();
                        $('#tipslistview').html('');
                        $('#tipsid').html('<center style="padding-top:40px; padding-bottom:40px;">No Tips found</center>');
                         $.mobile.changePage('#VenuTips');
                       }
                       }
                       });                                                 
}
var tips=0;
function getMoretips(){
    tips=tips+20;
    if(tips+20>tipsarray.length){
        var tiplen=tipsarray.length;
        $('#moretips').hide();
    }
    else{
       // $('#moretips').show();
        tiplen=tips+20;
    }
    var htm='';
    for(i=tips;i<tiplen;i++){
        htm+=tipsarray[i];
    }
    $('#tipslistview').append(htm);
    $('#tipslistview').listview('refresh');
}

function gotodatepage(){
    
    $.mobile.changePage('#datepage');
}

function gotq(this1){
     
  var div1=$(this1).attr('cls')
 
   if($('#'+div1).is(':visible'))
   {
      $('#'+div1).hide(500);
    }
    else{
       $('#'+div1).show(500);
    }
}

var facebookfndArray=new Array();

function getFacebookfnd(){
	
	accessToken=window.localStorage.getItem("accessToken");
   // alert(accessToken)
 //new Date(response.authResponse.expiresIn * 1000 +    (new Date()).getTime()).toJSON()
	facebookFriendsToInvite=[];
        facebookfndArray=[];
    FbkNameToInvite=[];
   $('#friendList').html(" ");
   //facebookFriendsToInvite=[];
   console.log("https://graph.facebook.com/me/friends?access_token="+accessToken);
   $.mobile.showPageLoadingMsg();
   $.ajax({
       type: "GET",
       url: "https://graph.facebook.com/me/friends?access_token="+accessToken,
       dataType: "json",
       crossDomain:true,
       success: function(response) 
       {
        $.mobile.hidePageLoadingMsg();        
          // var datadiv = document.getElementById('frienddata');
           var result=response.data;
           console.log(result[0]);
           var html='';
           var htl='';
           ffnd=0;
           if (result[0].name) {
          //var html='<ul data-role="listview" data-split-icon="gear" data-filter="true" data-theme="c">';
          //alert('ok1')
              
               for(var i=0;i<result.length;i++){
                   htl='';
           htl+='<li><a href="javascript:void(0)" style="padding-top: 0px;padding-bottom: 0px;padding-right: 0px;padding-left: 0px;">';
           htl+='<label style="border-top-width: 0px;margin-top: 0px;border-bottom-width: 0px;margin-bottom: 0px;border-left-width: 0px;border-right-width: 0px;" data-corners="false">';
           htl+='<fieldset data-role="controlgroup"> ';
           htl+='<input type="checkbox" name="checkbox-'+i+'" id="checkbox-'+i+'" class="custom" onclick="checkfbkfnd(this,'+result[i].id+')" value="'+result[i].name+'"/>';
           htl+='<label for="checkbox-'+i+'" style="border-top-width: 0px;margin-top: 0px;border-bottom-width: 0px;margin-bottom: 0px;border-left-width: 0px;border-right-width: 0px;" data-corners="false">'+result[i].name+'</label>';
           htl+='</fieldset>';
           htl+='</label>';
           htl+='</li>';
           facebookfndArray.push(htl);
                      if(i<10){
           
                    html+='<li><a href="javascript:void(0)" style="padding-top: 0px;padding-bottom: 0px;padding-right: 0px;padding-left: 0px;">';
                   html+='<label style="border-top-width: 0px;margin-top: 0px;border-bottom-width: 0px;margin-bottom: 0px;border-left-width: 0px;border-right-width: 0px;" data-corners="false">';
                   html+='<fieldset data-role="controlgroup"> ';
                    html+='<input type="checkbox" name="checkbox-'+i+'" id="checkbox-'+i+'" class="custom" onclick="checkfbkfnd(this,'+result[i].id+')" value="'+result[i].name+'"/>';
                    html+='<label for="checkbox-'+i+'" style="border-top-width: 0px;margin-top: 0px;border-bottom-width: 0px;margin-bottom: 0px;border-left-width: 0px;border-right-width: 0px;" data-corners="false">'+result[i].name+'</label>';
                    html+='</fieldset>';
                   html+='</label>';
                    html+='</li>';
                    }
                }
                               //html+='</ul>'
                  console.log(html)
           }else{
             $('#privatedList').html("No facebook contacts found");
           }
          $('#privateList1').html(html).trigger("create");
          
          $.mobile.changePage("#privatefrdList");
          $('#privateList1').listview('refresh');
          //alert('ok')
       },
       error:function(data){
       $.mobile.hidePageLoadingMsg();
      }
   });

}
/*
function addAddressBook() {
	//alert('ok');
	 AddbookToInvite=[];
     AddbooknameToInvite=[];
    $.mobile.showPageLoadingMsg();
    var options = new ContactFindOptions();
    options.filter="";
    options.multiple=true;
    var filter = [ "displayName", "phoneNumbers", "emails" ];
    navigator.contacts.find(filter, onSuccess, onError, options); 
    function onSuccess(contacts) {
      var a= JSON.stringify(contacts);      
      var html ='';
      if (contacts[0].emails[0].value != null) {
         
          for(var i=0;i<contacts.length;i++)
          {
            if(contacts[i].emails[0].value !=null){
              var email_val = contacts[i].emails[0].value;
              html+='<li><a href="javascript:void(0)" style="padding-top: 0px;padding-bottom: 0px;padding-right: 0px;padding-left: 0px;">';
              html+='<label style="border-top-width: 0px;margin-top: 0px;border-bottom-width: 0px;margin-bottom: 0px;border-left-width: 0px;border-right-width: 0px;" data-corners="false">';
              html+='<fieldset data-role="controlgroup"> ';
              html+='<input type="checkbox" name="checkbox-'+i+'" id="checkbox-'+i+'" class="custom" onclick="check_contactfnd(this);" value="'+id+'"/>';
              html+='<label for="checkbox-'+i+'" style="border-top-width: 0px;margin-top: 0px;border-bottom-width: 0px;margin-bottom: 0px;border-left-width: 0px;border-right-width: 0px;" data-corners="false">'+name+'</label>';
              html+='</fieldset>';
              html+='</label>';
              html+='</li>';
            }
          }
         
      }else{
          $('#friendList').html("No contacts found in addressbook");
      }
      $('#privateList1').html(html).trigger("create");
      
      $.mobile.changePage("#privatefrdList");
      $('#privateList1').listview('refresh');
    }
    function onError(contactError) {
      alert("onError")
      console.log('onError');
    }
    $.mobile.hidePageLoadingMsg();
    $.mobile.changePage("#friendsListPage");
}

*/
function addAddressBook() {
    media_type1='addbook'
    $.mobile.showPageLoadingMsg();
    var options = new ContactFindOptions();
    options.filter="";
    options.multiple=true;
    var filter = [ "displayName", "phoneNumbers", "emails" ];
    navigator.contacts.find(filter, onSuccess, onError, options); 
    function onSuccess(contacts) {
    var a= JSON.stringify(contacts);      
    var html ='';
    AddbookToInvite=[];
    AddbooknameToInvite=[];

    for(var i=0;i<contacts.length;i++)
    {
    
    if(contacts[i].emails !=null){
    var id=contacts[i].emails[0].value;
    var name=contacts[i].displayName;
   // alert(contacts[i].emails[0].value);
    html+='<li><a href="javascript:void(0)" style="padding-top: 0px;padding-bottom: 0px;padding-right: 0px;padding-left: 0px;">';
    html+='<label style="border-top-width: 0px;margin-top: 0px;border-bottom-width: 0px;margin-bottom: 0px;border-left-width: 0px;border-right-width: 0px;" data-corners="false">';
    html+='<fieldset data-role="controlgroup"> ';
    html+='<input type="checkbox" name="checkbox-'+i+'" id="checkbox-'+i+'" class="custom" onclick="check_contactfnd(this);" value="'+id+'"/>';
    html+='<label for="checkbox-'+i+'" style="border-top-width: 0px;margin-top: 0px;border-bottom-width: 0px;margin-bottom: 0px;border-left-width: 0px;border-right-width: 0px;" data-corners="false">'+name+'</label>';
    html+='</fieldset>';
    html+='</label>';
    html+='</li>';
    }
    
    }
    $.mobile.hidePageLoadingMsg();
    $('#privateList1').html(html).trigger("create");
    
    $.mobile.changePage("#privatefrdList");
    $('#privateList1').listview('refresh');
  
    }
    function onError(contactError) {
    alert("onError")
    console.log('onError');
    }
    
  
}
var  AddbookToInvite=new Array();
var  AddbooknameToInvite=new Array();
function check_contactfnd(event){
                                         console.log($(event).val());
                                         var name=$(event).val();
                                         var fid=$(event).val();
                                         if(event.checked){
                                         if(AddbookToInvite.indexOf(fid) == -1) {
                                         AddbookToInvite.push(fid);
                                         AddbooknameToInvite.push(name);
                                         }
                                         }else{
                                         if(AddbookToInvite.indexOf(fid) != -1) {
                                         AddbookToInvite.pop(fid);
                                         AddbooknameToInvite.pop(name);
                                         }   
                                         }
                           }
    var twitterNameToInvite=new Array();                              
   function checktwtfnd(event,id){
                                         // alert('ok');
                                         var name=$(event).val();
                                         console.log($(event).val());
                                         var fid=id;
                                         if(event.checked){
                                         if(twitterFriendsToInvite.indexOf(fid) == -1) {
                                         twitterFriendsToInvite.push(fid);
                                         twitterNameToInvite.push(name)
                                         }
                                         }else{
                                         if(twitterFriendsToInvite.indexOf(fid) != -1) {
                                         twitterFriendsToInvite.pop(fid);
                                         twitterNameToInvite.pop(name)
                                         }   
                                         }
                                         console.log(twitterNameToInvite.length);
                                         console.log(twitterFriendsToInvite.length);
                       }
                                         
                                        
//------------------------common ios and android------------------------------------------------
var FbkFriendsToInvite=new Array();
var FbkNameToInvite=new Array();
function checkfbkfnd(event,id){
                                           var name=$(event).val();
                                        var fid=id;
                                         if(event.checked){
                                         if(FbkFriendsToInvite.indexOf(fid) == -1) {
                                         FbkFriendsToInvite.push(fid);
                                         FbkNameToInvite.push(name);
                                         }
                                         }else{
                                         if(FbkFriendsToInvite.indexOf(fid) != -1) {
                                         FbkFriendsToInvite.pop(fid);
                                         FbkNameToInvite.pop(name);
                                         }   
                                         }
                                         console.log(FbkFriendsToInvite.length);
                                       
}
function getInvitefnd(){
   /*alert(twitterFriendsToInvite.length+twitterNameToInvite.length);
   alert(FbkFriendsToInvite.length+FbkNameToInvite.length);
   alert(AddbookToInvite.length+AddbooknameToInvite.length);*/
       var html='';
      for(var i=0; i<AddbooknameToInvite.length;i++) {
               html+='<li><a href="#"><img src="images/addsbook.png"  class="ui-li-icon">'+AddbooknameToInvite[i]+'</a></li>'
                                        
       }
     for(var i=0; i<FbkNameToInvite.length;i++) {
                html+='<li><a href="#"><img src="images/facebook_r.png"  class="ui-li-icon">'+FbkNameToInvite[i]+'</a></li>'
      }
     for(var i=0; i<twitterNameToInvite.length;i++) {
           html+='<li><a href="#"><img src="images/twitter_r.png"  class="ui-li-icon">'+twitterNameToInvite[i]+'</a></li>'
      } 
      var thmladd='<li data-icon="false" class="venuadds"><a href="javascript:void(0)"<p style="white-space:normal;">'+res_adds+'</p></a></li>'
         //var thmladd='<div class="venuadds1">'+res_adds+'</div>'
         $('#conformvenu1').html(thmladd)
         $('#invited_fndlist').html(html).trigger('create');
         $.mobile.changePage('#pollpage');
         $('#conformvenu1').listview('refresh');
         $('#invited_fndlist').listview('refresh');
}


function Change_page(){
   // alert(page1)
  $.mobile.changePage('#postToPage');
}

function getDatetime(){
                            //              alert($('#startDate').val());
  $.mobile.changePage('#polldatepage');
  $('#pstartDate').val($('#startDate').val());
 $('#pendDate').val($('#endDate').val());
 $('#pstartTime').val($('#startTime').val());
 $('#pendTime').val($('#endTime').val());

}

function psaveDateTime(){

  $("#timeokli .ui-icon").addClass("ui-icon-check").removeClass("ui-icon-arrow-r");
  var startDate = $('#pstartDate').val();
  var endDate = $('#pendDate').val();
  var startTime = $('#pstartTime').val();
  var endTime = $('#pendTime').val();
  window.localStorage.setItem('startDate',startDate);
  window.localStorage.setItem('endDate',endDate);
  window.localStorage.setItem('startTime',startTime);
  window.localStorage.setItem('endTime',endTime);
  $.mobile.changePage('#poll_datetime');
}  
function Selec_spend(evt){
  var on_fnd=$("#invited_fndlist li").length;
  var todal=on_fnd*parseInt($(evt).val());
  $('#Tot_spend').val(todal+' $')
}

function gobackPoll_spend(){
  $("#spendli .ui-icon").addClass("ui-icon-check").removeClass("ui-icon-arrow-r");
  $.mobile.changePage('#poll_datetime');
}

function getSend(){
var on_fnd=$("#invited_fndlist li").length;
    $('#Tot_spend').val(on_fnd+' $')
    $.mobile.changePage('#pollspend');
}
function gobackPoll_note(){
  $("#userQesli .ui-icon").addClass("ui-icon-check").removeClass("ui-icon-arrow-r");
  $.mobile.changePage('#poll_datetime');

}

var ffnd=0;                                     
function getMoreFbfnd(){
         ffnd=ffnd+10;
                                          $.mobile.showPageLoadingMsg();
                                          var htm='';
                                          if(ffnd+10>facebookfndArray.length){
                                          var tiplen=facebookfndArray.length;
                                            
                                          }
                                          else{
                                          // $('#moretips').show();
                                          var tiplen=ffnd+10;
                                          }
                                       for(i=ffnd;i<tiplen;i++){
                                            htm+=facebookfndArray[i];
                                          }
                                        
                                          $('#privateList1').append(htm).trigger("create");
                                          $('#privateList1').listview('refresh');
                                           $.mobile.hidePageLoadingMsg();

}


function venuscount() {
  
  var on_fnd=$("#invited_fndlist li").length;
  //alert(on_fnd);
  if (on_fnd > 0) {
    $('#membersId').val(on_fnd);
  }else{
    $('#membersId').val(0);
  }
  
  var evt= $("#selectspend").val();
  
  spend_money = on_fnd * parseInt(evt);
  
  if (spend_money > 0) {
    $('#dollerId').val(spend_money+' $');
  }else{
    $('#dollerId').val('0 $');
  }
  $.mobile.changePage('#venusPage');
}

function saveDiscount() {
  var disc = $("#Discount").val();
  var text_val = $("#testNewId").val();
  window.localStorage.setItem('Discount',disc);
  window.localStorage.setItem('Discount_test',text_val);
}