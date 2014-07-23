 // GLOBAL VARS

            var oauth; // It Holds the oAuth data request
            var requestParams; // Specific param related to request
            var options = {
                consumerKey:'i6UMtub0tPdGxqaBsfwKsQ', // YOUR Twitter CONSUMER_KEY
                consumerSecret: 'JqLG7VN6UcT9NCkMppy7skIqsUbSmQFAactbZUzPcs', // YOUR Twitter CONSUMER_SECRET
                callbackUrl: "http://www.iana.org/domains/example/",
		}; // YOU have to replace it on one more Place

            var twitterKey = "twtrKey"; // This key is used for storing Information related


            var  siteUrl="";
	    var twitter_user_id="";
var cb="";
function TwitterConnect()
{
	if(window.plugins.childBrowser == null)
	{
		ChildBrowser.install();
	}
}

var Twitter = {
                init:function(){
                    TwitterConnect();
                    cb=window.plugins.childBrowser;
		    
                	//siteUrl = main;
                    // Apps storedAccessData , Apps Data in Raw format
                    var storedAccessData, rawData = localStorage.getItem(twitterKey);
                    // here we are going to check whether the data about user is already with us.
                    
                    if(localStorage.getItem(twitterKey) !== null){
                    // when App already knows data
                    storedAccessData = JSON.parse(rawData); //JSON parsing
                    options.accessTokenKey = storedAccessData.accessTokenKey; // data will be saved when user first time signin
                    options.accessTokenSecret = storedAccessData.accessTokenSecret; // data will be saved when user first first signin
                                 
                    // javascript OAuth take care of everything for app we need to provide just the options
                    oauth = OAuth(options);
		   // alert(oauth);
                    
                    oauth.get('https://api.twitter.com/1.1/account/verify_credentials.json',
                    function(data) {
                    		//alert(data);
                            var entry = JSON.parse(data.text);
                            //alert("USERNAME: " + entry.screen_name);
                            console.log("USERNAME: " + JSON.stringify(data.text));
			    console.log("twitter data"+JSON.stringify(data));
                            successfulLogin(entry);
                            }
                        );
                    }
                    else {
                  //  	alert('elsse');
                        // we have no data for save user
                        oauth = OAuth(options);
                        oauth.get('https://api.twitter.com/oauth/request_token',
                        function(data) {
			   // alert(data.text);
                        requestParams = data.text;
                        cb.showWebPage('https://api.twitter.com/oauth/authorize?'+data.text); // This opens the Twitter authorization / sign in page
                        cb.onLocationChange = function(loc){
                                 
                                  Twitter.success(loc); }; // Here will will track the change in URL of ChildBrowser
                                  },
                                  function(data) { 
                                          console.log("ERROR: "+data);
                                }
                    );
                    }
                    },
                        /*
                         When ChildBrowser's URL changes we will track it here.
                         We will also be acknowledged was the request is a successful or unsuccessful
                         */
                        success:function(loc){
                             
                            // Here the URL of supplied callback will Load
                             
                            /*
                             Here Plugin will check whether the callback Url matches with the given Url
                             */
                            
                            if (loc.indexOf("http://www.iana.org/domains/") >= 0) {
                                 
                                // Parse the returned URL
                                var index, verifier = '';
                                var params = loc.substr(loc.indexOf('?') + 1);
                                 
                                params = params.split('&');
                                for (var i = 0; i < params.length; i++) {
                                    var y = params[i].split('=');
                                    if(y[0] === 'oauth_verifier') {
                                        verifier = y[1];
                                    }
                                }
                                 
                                // Here we are going to change token for request with token for access
                                 
                                /*
                                 Once user has authorised us then we have to change the token for request with token of access
                                here we will give data to localStorage.
                                 */
                                oauth.get('https://api.twitter.com/oauth/access_token?oauth_verifier='+verifier+'&'+requestParams,
                                          function(data) {
                                          var accessParams = {};
                                          var qvars_tmp = data.text.split('&');
                                          for (var i = 0; i < qvars_tmp.length; i++) {
                                          var y = qvars_tmp[i].split('=');
                                          accessParams[y[0]] = decodeURIComponent(y[1]);
                                          }
                                        
                                          //$('#oauthStatus').html('<span style="color:green;">Success!</span>');
                                          //$('#stage-auth').hide();
                                          //$('#stage-data').show();
                                          oauth.setAccessToken([accessParams.oauth_token, accessParams.oauth_token_secret]);
                                           
                                          // Saving token of access in Local_Storage
                                          var accessData = {};
                                          accessData.accessTokenKey = accessParams.oauth_token;
                                          accessData.accessTokenSecret = accessParams.oauth_token_secret;
                                           
                                          // Configuring Apps LOCAL_STORAGE
                                          console.log("TWITTER: Storing token key/secret in localStorage");
                                          localStorage.setItem(twitterKey, JSON.stringify(accessData));
                                           
                                          oauth.get('https://api.twitter.com/1.1/account/verify_credentials.json?skip_status=true',
                                                    function(data) {
                                                    var entry = JSON.parse(data.text);
                                                    //alert("TWITTER USER: "+entry.screen_name);
                                                    
                                                    //$("#welcome").show();
                                                    //document.getElementById("welcome").innerHTML="welcome " + entry.screen_name;
						     console.log("twitter data"+JSON.stringify(data.text));
						              
                                                    successfulLogin(entry);
                                                    // Just for eg.
                                                   // Twitter.init();
                                                    },
                                                    function(data) {
                                                    console.log("ERROR: " + data); 
                                                    }
                                                    );
                                           
                                          // Now we have to close the child browser because everthing goes on track.
                                          
                                          window.plugins.childBrowser.close();
                                          },
                                          function(data) { 
                                          console.log(data);
                                           
                                           
                                          }
                                          );
                            }
                            else {
                                // Just Empty
                            }
                        },
                        tweet:function(theTweet){
                          
                            var storedAccessData, rawData = localStorage.getItem(twitterKey);
                             
                            storedAccessData = JSON.parse(rawData); // Paring Json 
                            options.accessTokenKey = storedAccessData.accessTokenKey; // it will be saved on first signin
                            options.accessTokenSecret = storedAccessData.accessTokenSecret; // it will be save on first login
                             
                            // javascript OAuth will care of else for app we need to send only the options
                            oauth = OAuth(options);
			   
                            oauth.get('https://api.twitter.com/1.1/account/verify_credentials.json?skip_status=true',
                                      function(data) {
                                      var entry = JSON.parse(data.text);
                                     
                                      Twitter.post(theTweet);
                                      }
                                      );
                        },
                        /*
                         We now have the data to tweet
                         */
                        post:function(theTweet){
                         
                              var milliseconds = new Date().getTime();
                              oauth.post('https://api.twitter.com/1.1/statuses/update.json?time='+milliseconds,
                                       { 'status' : theTweet,  // javascript OAuth encodes this
                                       'trim_user' : 'true',
                                        'wrap_links':'true'},
                                       function(data) {
                                       var entry = JSON.parse(data.text);
                                         
                                       console.log(entry);
                                        
                                       // just for eg.
                                       done();
                                       },
                                       function(data) {
					alert(JSON.stringify(data));
					console.log(JSON.stringify(data));
                                       console.log(data);
                                       }
                                       );       
                        },
			privatetweet:function(theTweet,id){
                            var storedAccessData, rawData = localStorage.getItem(twitterKey);
                             
                            storedAccessData = JSON.parse(rawData); // Paring Json 
                            options.accessTokenKey = storedAccessData.accessTokenKey; // it will be saved on first signin
                            options.accessTokenSecret = storedAccessData.accessTokenSecret; // it will be save on first login
			       console.log("storedAccessData.accessTokenSecret"+storedAccessData.accessTokenSecret);
			      console.log("storedAccessData.accessTokenKey"+storedAccessData.accessTokenKey);
                             
                            // javascript OAuth will care of else for app we need to send only the options
                            oauth = OAuth(options);
                            oauth.get('https://api.twitter.com/1.1/account/verify_credentials.json?skip_status=true',
                                      function(data) {
                                      var entry = JSON.parse(data.text);
                                      Twitter.privatepost(theTweet,id);
                                      }
                                      );
                        },
			 privatepost:function(theTweet,id){
                            console.log("user_id"+id);
			      console.log("user_id"+id);
                             
                           // oauth.post('https://api.twitter.com/1.1/direct_messages/new.json',
			   oauth.post(' https://twitter.com/direct_messages/new.json',
				      
                                       {  // javascript OAuth encodes this
                                        'user':id,
					'text':theTweet,
					 },
                                       function(data) {
                                       //var entry = JSON.parse(data.text);
                                       console.log(entry);
                                        
                                       // just for eg.
                                       done();
                                       },
                                       function(data) {
					
					 console.log("error");
					 error(JSON.stringify(data));
                                      // console.log(JSON.stringify(data));
                                       }
                                       );       
                        }
 
                    }
                     
                function done(){
                       
                    }
                     
                     
                    function successfulLogin(result){
                    	//alert("Login Successfull");
                          $.mobile.showPageLoadingMsg();
			         twitter_user_id=result.id;
                      window.localStorage.setItem("twitter_user_id",twitter_user_id);           
			
                     var twUserId=result.id;
	                 var name=result.screen_name;
                    window.localStorage.setItem("user_name",name); 
                       // alert(result.name);
                       // alert(result.screen_name);
                      //  alert(reslut.id);
                        
                        if(twttext==0){
	                var first_name=result.screen_name;//alert("myfirst_name"+first_name);
                   var last_name=result.screen_name;//alert("last_name"+last_name);
	               var link=result.url;//alert("link"+link);
	               var emailid=name;//alert("emailid"+emailid);
                        var User3 = Parse.Object.extend("User");
                        var user = new User3();
                        user.set("username",emailid);
                        user.set("password",'r_password');
                        user.set("email", emailid+'@demo.com');
                        user.set("Name",first_name);
                        user.signUp(null, {
                                    success: function(user) {
                                    $.mobile.hidePageLoadingMsg();
                                    var userid=user.id;
                                    // cur_user=r_eamil;
                                    var cuser=emailid;
                                   localStorage.setItem('localusername',cuser);
                                    localStorage.setItem('login','twitter');
                                    alert('Registration Successfull')
                                    getdata(cuser);
                                    getCompletedata(cuser);
                                    getRecentdata(cuser);
                                    },
                                    error: function(user, error) {
                                    var msg=error.message;
                                    if(msg.search('already taken')!= -1){
                                       var cuser=emailid;
                                          localStorage.setItem('localusername',cuser);
                                         localStorage.setItem('login','twitter');
                                         getdata(cuser);
                                         getCompletedata(cuser);
                                         getRecentdata(cuser);
                                         $.mobile.hidePageLoadingMsg();
                                    }
                                    else{
                                          alert(error.message);
                                       }
                                    
                                    // alert(error.message);
                                    }
                                    });
                        }//end if
                        else{
                            twitterFrd();
                        }
                    	
                    }
                     
                    function logOut(){
                        //localStorage.clear();
                        window.localStorage.removeItem(twitterKey);
                        //document.getElementById("welcome").innerHTML="Please Login to use this app";
                        //$("#loginBtn").show();
                        //$("#logoutBtn,#tweet,#tweeter,#tweetText,#tweetBtn").hide();
                      
                    }
		    
		    
	   