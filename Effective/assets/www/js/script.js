function linkedin(){
alert('ok')
var apiKey = 'bszdp1xlaa4o';
    var secret = 'miJSGPcUQduwjAQ9';
    
    window.plugins.childBrowser.showWebPage("http://192.168.2.4/Linkedin_Demo/linkedin.php?lType=initiate", { showLocationBar: true });
}

var friendsarray_bar=[];
var pushNotification;
var m_evetuser='';
var AttendfnnArray=[];
var noti_eventid='';
var mulQuestionobject='';
var deviceid='';
var evntExpD='';
var evntExpH='';
var evntExpM='';
var e_event=[];
var eventid='';
var timezone='';
var flogin = 0;
var cur_user = '';
var spend_money = '';
var cur_lat = '23.03360797';
var cur_lang = '72.5591448';
var m_lat='';
var m_long='';
var m_adds='';
var nav = null;
var res_lat = null;
var res_long = null;
var venuelat=null;
var venulong=null;
var res_adds = '';
var eventname = '';
var media_type = 'Private';
var media_type1 = '';
var twitterFriendsToInvite = new Array();
var client_Parse_id = 'H3NMSYUEWMP23ZB4O3DB5O0ZXFFD13WZIPQF0XFGUJVP54XN';
var client_secret_id = '0Z3MPDDDHZWR031JCH1BJE3DVK1V2SDKA4SZWOLV2JN14ZM2';
var verson1 = '';
var privateMem = new Array();
var facebookfndArray = new Array();
var addressfndArray = new Array();
var twitterfndArray = new Array();
var count_friend = -1;
var cancel_invite = 0;
var a = 0;
var curdetail=0;
var ev_objid='';
var tipsarray = new Array();
var tips = 0;
var FbkFriendsToInvite = new Array();
var FbkNameToInvite = new Array();
var ques='';
var addPoll=0;
var liIndex=0;
var options='';
var markers1=[];
var info_content1=[];
var index=0;
var friendarray_geo=[];
var tq='';
var Anserides='';
var ansarray=[];
var ansfndArray=[];
var tm=0;
var html1='';
var obid=[];
var obval=[];
var idarray=[];
var textques_id='';
var Euserid=''
var mulans1=null;
var ansFriens=null;
var friendsarray1=null
var idarray1=[];
var tm1=0;
var html11='';
my_secret = "72b634c9b1796f3deeec306ccf213bb1", // YOUR APP SECRET
my_redirect_uri = "http://www.facebook.com/connect/login_success.html", // LEAVE THIS
my_type = "user_agent", my_display = "touch"; // LEAVE THIS

var facebook_token = "fbToken"; // OUR TOKEN KEEPER
var client_browser;
var app = {
    // Application Constructor
initialize: function () {
	this.bindEvents();
},
	
bindEvents: function () {
	document.addEventListener('deviceready', this.onDeviceReady, false);
},
	
onDeviceReady: function () {
	app.receivedEvent('deviceready');
},
	
receivedEvent: function (id) {
	// FB.init({ appId: "381703731957783", nativeInterface: CDV.FB, useCachedDialogs: false });
	//requestPosition();
	//local_login();
	setInterval(function(){requestPosition1()},1000000);
	

	window.plugins.myCustomPlugin.data("data", function(echoValue) {
	
                                       deviceid=echoValue; // your data is in your hand
                                       });
	
	
    navigator.geolocation.getCurrentPosition(onSuccess2, onError2);
	
	 
	 window.plugins.webintent.hasExtra("com.parse.Data",
	 function(has) {
		 //alert('ok');
	 if(has) {
	 window.plugins.webintent.getExtra("com.parse.Data",
	 function(d) {
	 var a = eval('(' + d + ')');
	    if(a['eventid'] !=undefined){
	    	noti_eventid=a['eventid'];
	    	var mes1=a['alert'];
	    	var res = mes1.replace("Click now to respond","");
	    	var mes= res+'\nDo you want to go?';
	    	navigator.notification.confirm(
	    			  mes,  // message
	    			  onattendnotiConfirm,              // callback to invoke with index of button pressed
                    'Alert',            // title
                    'Yes,No'          // buttonLabels
                    );
	    }//END IF
	    else if(a['oneH_eventid'] !=undefined){
	    	         var eid=a['oneH_eventid'];
	    	        gotoEventDetail(eid)
	    }
	    else{
	    	 local_login();
	    }
	 
	 }, function() {
	 console.log('There was no extra supplied.');
	 }
	 );
	 }else
		 {
		 local_login();
		 }
	 }, function() {
		 local_login();
	 }
	 );
	 
	 
	
    //  gApp.DeviceReady = true;
    //  window.plugins.GCM.register("1031118000597", "GCM_Event", GCM_Success, GCM_Fail );
}
};
//--------------------------code for android-------------------------------------
function onattendnotiConfirm(b){
	if(b==1){
		//alert(noti_eventid)
        var GetEvent=Parse.Object.extend('event');
        var query=new Parse.Query(GetEvent);
        query.equalTo('objectId',noti_eventid)
        query.find({
                   success:function(result){
                   //alert(result.length);
                   //alert(result[0].get('AttendFnd'))
                   var accpetarray=[];
                   if(result[0].get('AttendFnd') !=undefined){
                   accpetarray=result[0].get('AttendFnd');
                   accpetarray.push(window.localStorage.getItem('Fuserid'));
                   }else{
                   accpetarray.push(window.localStorage.getItem('Fuserid'));
                   }
                   save_event=new GetEvent();
                   save_event.id=result[0].id;
                   save_event.set('AttendFnd',accpetarray);
                   sendnotificationAccept(noti_eventid);
                   save_event.save();
                   local_login();
                   }
                   
                   });
        
	}else{
        local_login();
		
	}
	
}


//-------------------------------------------------------------------------

function onSuccess2(position) {
	
	cur_lat=position.coords.latitude;
	cur_lang=position.coords.longitude;
	
}

function onError2(){
	//alert('error')
	
    
}
function sendNotifiaction5(){
    
    
    
    var GetEvent=Parse.Object.extend('event');
    var query=new Parse.Query(GetEvent);
    query.equalTo('objectId',ev_objid)
    query.find({
               success:function(result){
               //alert(result.length);
               
               
               }
               
               });
    
    
    
}

function sendnotificationAccept(eventid){
    var aceptname=window.localStorage.getItem('UName');
    var Getevet=Parse.Object.extend("event");
    var query = new Parse.Query(Getevet);
    query.equalTo("objectId",eventid);
    query.find({
               success:function(res){
               //console.log(FbkFriendsToInvite)
               //alert(res.length)
               var acceptfnd=[];
               var acceptfnd1=res[0].get('AttendFnd');
               var ev_createrid=res[0].get('UserFBId');
               var evname=res[0].get('vEventName');
               if(acceptfnd1 !=undefined){
               acceptfnd=acceptfnd1;
               acceptfnd.push(ev_createrid.toString())
               }
               else{
               acceptfnd.push(ev_createrid.toString())
               }
               
               var message1=aceptname+'   has join the group '+evname;
               var GetUser=Parse.Object.extend("User");
               var query1 = new Parse.Query(GetUser);
               query1.find({
                           success:function(res1){
                           // alert(acceptfnd)
                           //alert(res.length)
                           for(var i=0;i<res1.length;i++){
                           if(acceptfnd.indexOf(res1[i].get('Facebookid').toString()) !=-1){
                           var d_id=res1[i].get('deviceId');
                           //alert(d_id);
                           var query = new Parse.Query(Parse.Installation);
                           Parse.Push.send({
                                           channels: [d_id],
                                           data: {
                                           alert: message1,
                                           //eventid:eventid,
                                           },
                                           //  push_time:sankar
                                           },
                                           
                                           {
                                           success: function() {
                                           //savenotifaction()
                                           //alert('send succes')
                                           // Push was successful
                                           },
                                           error: function(error) {
                                           // alert('send error')
                                           console.log(JSON.stringify(error));
                                           }
                                           });
                           
                           
                           }
                           
                           }
                           
                           }
                           });
               }
               });
    
}
function sendNotifiactionEventExp(evt,eday,ehour,emin){
	
	
}
function sendNotifiaction(evt,eday,ehour,emin){
    
    // gameScore.set("score", 1337);
    
    
    
    
    var Name= localStorage.getItem('UName');
    if(eday !='' ||  ehour !='' || emin !=''){
      	sendNotifiactionEventExp(evt,eday,ehour,emin)
        var expmessage='. and you have '+eday+' Days,'+ehour+' Hours,'+emin+' Minuets to decide';
    }
    else{
        var expmessage='';
    }
    var message1 = Name+' created an event '+evt+' using effectiv.'+expmessage;
    //- You have been invited to an event and have [time trigger] to decide. Click now to respond.

    var message12=Name+' have  invited you for an event '+evt;
    var message13=expmessage+'. Click now to respond'
    var message1=message12+message13;
    //alert(message1)
    var Enotification = Parse.Object.extend("event");
    var enotification = new Enotification();
    enotification.id=eventid;
    enotification.set("ECreateNoti",message1);
    enotification.save();
    
    
    //alert(FbkFriendsToInvite.length);
    
    var GetUser=Parse.Object.extend("User");
	var query = new Parse.Query(GetUser);
	query.find({
               success:function(res){
               console.log(FbkFriendsToInvite)
               //alert(res.length)
               for(var i=0;i<res.length;i++){
               if(FbkFriendsToInvite.indexOf(parseInt(res[i].get('Facebookid'))) !=-1){
               ///alert(res[i].get('Facebookid'));
               if(res[i].get('deviceId') !=undefined){
               var d_id=res[i].get('deviceId');
               // alert(d_id);
               var query = new Parse.Query(Parse.Installation);
               Parse.Push.send({
                               channels: [d_id],
                               data: {
                               alert: message1,
                               eventid:eventid,
                               },
                               //  push_time:sankar
                               },
                               
                               {
                               success: function() {
                               // alert('send succes')
                               // Push was successful
                               },
                               error: function(error) {
                               // alert('send error')
                               console.log(JSON.stringify(error));
                               }
                               });
               
               
               }
               
               
               
               }
               }
               
               }
               })
    
}

function sendNotifiactionTextQues(ques,opt){
	//alert('ok');
	var Name= localStorage.getItem('UName');
    //var message1 = Name+"  Answered Poll questions using effectiv. Check it out!.";
    var message1=Name+" Responded "+opt+" to "+ques;
    var GetUser=Parse.Object.extend("User");
	var query = new Parse.Query(GetUser);
	query.find({
               success:function(res){
               console.log(friendsarray1)
               var friendsarray12=friendsarray1;
               friendsarray12.push(parseInt(m_evetuser));
               //  alert(friendsarray12)
               //alert(res.length)
               for(var i=0;i<res.length;i++){
               // alert(friendsarray1)
               if(friendsarray12.indexOf(parseInt(res[i].get('Facebookid'))) !=-1){
               // alert(res[i].get('Facebookid'));
               if(res[i].get('deviceId') !=undefined){
               if(res[i].get("Notification") !="OFF"){
               if(AttendfnnArray !=undefined){
               AttendfnnArray.push( window.localStorage.getItem('Fuserid').toString());
               // AttendfnnArray.push(m_evetuser.toString());
               var	 AttendfnnArray2=AttendfnnArray;
               AttendfnnArray2.push(m_evetuser.toString())
               //  alert(res[i].get('Facebookid').toString());
               if(AttendfnnArray2.indexOf(res[i].get('Facebookid').toString()) !=-1){
               var did=res[i].get('deviceId');
               // alert(did)
               //  alert(AttendfnnArray);
               var query = new Parse.Query(Parse.Installation);
               Parse.Push.send({
                               channels: [did],
                               data: {
                               alert: message1,
                               //eventid:eventid,
                               
                               },
                               //  push_time:sankar
                               },
                               
                               {
                               success: function() {
                               //alert('send succes')
                               // Push was successful
                               },
                               error: function(error) {
                               alert('send error')
                               console.log(JSON.stringify(error));
                               }
                               });
               }//end if attend
               }//end atttend if undefiend
               }//end if notifai off
               }
               
               
               }
               }
               
               }
               })   
    
    
    
    var EvntFnd=Parse.Object.extend('EnvitedFriends');
    
    // gameScore.id =result[0].id;
    var queryE=new Parse.Query(EvntFnd);
    queryE.equalTo("Eventid",ev_objid);
    queryE.find({
                success:function(Eres){
                // alert('suc')
                //(Eres.length)
                for(var i=0;i<Eres.length;i++){
                var notiArray=[];
                if(Eres[i].get('ETextAnswer') !=undefined){
                
                notiArray=Eres[i].get('ETextAnswer');
                }
                notiArray.push(message1);
                var eventfnd=new EvntFnd();
                eventfnd.id=Eres[i].id;
                eventfnd.set('ETextAnswer',notiArray);
                eventfnd.save();
                }
                },
                error:function(error){
                
                }
                });
    
    
    
    
    
}


function sendNotifiactionPoll(ques,opt,exp,mul_Qid){
	alert(ques)
	var Name= localStorage.getItem('UName');
    if(exp[0] =='' && exp[1] =='' && exp[2] ==''){
        var exptime='';
    }
    else
        var exptime='Poll questions will be expired in '+exp[0]+' Days,'+exp[1]+' hour,'+exp[2]+'min';
    var message1 = Name+"  Answered Poll questions using effectiv.See the results by clicking now";
   // var s_message1=Name+"  Answered Poll questions using effectiv
    var message11=Name+" Voted "+opt+" for "+ques+' '+exptime;
  //  alert(message11)
  //  var message1=message11+'. See the results by clicking now';
  //  alert(message1)
    var GetUser=Parse.Object.extend("User");
	var query = new Parse.Query(GetUser);
	query.find({
               success:function(res){
               console.log(friendsarray1)
               var friendsarray12=friendsarray1;
               friendsarray12.push(parseInt(m_evetuser));
               //  alert(friendsarray12)
               //alert(res.length)
               for(var i=0;i<res.length;i++){
               // alert(friendsarray1)
               if(friendsarray12.indexOf(parseInt(res[i].get('Facebookid'))) !=-1){
               // alert(res[i].get('Facebookid'));
               if(res[i].get('deviceId') !=undefined){
               if(res[i].get("Notification") !="OFF"){
               if(AttendfnnArray !=undefined){
               AttendfnnArray.push( window.localStorage.getItem('Fuserid').toString());
               // AttendfnnArray.push(m_evetuser.toString());
               var	 AttendfnnArray2=AttendfnnArray;
               AttendfnnArray2.push(m_evetuser.toString())
               //  alert(res[i].get('Facebookid').toString());
               if(AttendfnnArray2.indexOf(res[i].get('Facebookid').toString()) !=-1){
               var did=res[i].get('deviceId');
               var query = new Parse.Query(Parse.Installation);
               Parse.Push.send({
                               channels: [did],
                               data: {
                               alert: message1,
                               oneH_eventid:eventid,
                               mqid:mul_Qid
                               
                               },
                               //  push_time:sankar
                               },
                               
                               {
                               success: function() {
                               //alert('send succes')
                               // Push was successful
                               },
                               error: function(error) {
                               alert('send error')
                               console.log(JSON.stringify(error));
                               }
                               });
               }//end if attend
               }//end atttend if undefiend
               }//end if notifai off
               }
               
               
               }
               }
               
               }
               })   
    
    
    
    
    var EvntFnd=Parse.Object.extend('EnvitedFriends');
    
    // gameScore.id =result[0].id;
    var queryE=new Parse.Query(EvntFnd);
    queryE.equalTo("Eventid",ev_objid);
    queryE.find({
                success:function(Eres){
                //alert(Eres.length)
                for(var i=0;i<Eres.length;i++){
                var notiArray=[];
                if(AttendfnnArray  !=undefined){
                if(AttendfnnArray.indexOf(Eres[i].get('FriendsId').toString()) !=-1){
                if(Eres[i].get('EMulAnswer') !=undefined){
                notiArray=Eres[i].get('EMulAnswer');
                }
                notiArray.push(message11);
                var eventfnd=new EvntFnd();
                eventfnd.id=Eres[i].id;
                //alert('ok1')
                eventfnd.set('EMulAnswer',notiArray);
                eventfnd.save();
                }
                }
                }
                },
                error:function(error){
                
                }
                });
}

function sendNotifiactionDeleteEvent(){
    
	var Name= localStorage.getItem('UName');
	var message1 = Name+"  deleted an event using effectiv. Check it out!.";
    var GetUser=Parse.Object.extend("User");
	var query = new Parse.Query(GetUser);
	query.find({
               success:function(res){
               console.log(friendsarray1)
               var friendsarray12=friendsarray1;
               friendsarray12.push(parseInt(m_evetuser));
               for(var i=0;i<res.length;i++){
               if(friendsarray12.indexOf(parseInt(res[i].get('Facebookid'))) !=-1){
               //alert(res[i].get('Facebookid'));
               if(res[i].get('deviceId') !=undefined){
               if(AttendfnnArray  !=undefined){
               // alert('ok')
               var	 AttendfnnArray2=AttendfnnArray;
               AttendfnnArray2.push(m_evetuser.toString())
               //  alert(res[i].get('Facebookid').toString());
               if(AttendfnnArray2.indexOf(res[i].get('Facebookid').toString()) !=-1){
               var did=res[i].get('deviceId');
               //alert(did);
               var query = new Parse.Query(Parse.Installation);
               Parse.Push.send({
                               channels: [did],
                               data: {
                               alert: message1,
                               newsItem:'goog'
                               },
                               //  push_time:sankar
                               },
                               
                               {
                               success: function() {
                               //alert('send succes')
                               // Push was successful
                               },
                               error: function(error) {
                               alert('send error')
                               console.log(JSON.stringify(error));
                               }
                               });
               
               
               }
               
               }
               }
               }
               }
               
               }
               })    
}


function sendNotifiactionExp(extime,evnt){
	
	console.log('extime')
	console.log(extime)
	var Name= localStorage.getItem('UName');
	var tday=Date.parse(new Date());
	var td= tday+10000
	var sendtime=extime;
	var sankar=new Date(sendtime);
	console.log('sankar'+sankar)
	
	var message1 =evnt+" event Poll is expired";
    
    
    
    var GetUser=Parse.Object.extend("User");
	var query = new Parse.Query(GetUser);
	query.find({
               success:function(res){
               console.log(friendsarray1)
               var friendsarray12=friendsarray1;
               friendsarray12.push(parseInt(m_evetuser));
               for(var i=0;i<res.length;i++){
               if(friendsarray12.indexOf(parseInt(res[i].get('Facebookid'))) !=-1){
               //alert(res[i].get('Facebookid'));
               if(res[i].get('deviceId') !=undefined){
               var did=res[i].get('deviceId');
               //alert(did);
               var query = new Parse.Query(Parse.Installation);
               Parse.Push.send({
                               channels: [did],
                               data: {
                               alert: message1,
                               newsItem:'goog'
                               },
                               //  push_time:sankar
                               },
                               
                               {
                               success: function() {
                               //alert('send succes')
                               // Push was successful
                               },
                               error: function(error) {
                               alert('send error')
                               console.log(JSON.stringify(error));
                               }
                               });
               
               
               }
               
               
               
               }
               }
               
               }
               })    
}
function sendnotificationAllAnsred(eventname){
	var Name= localStorage.getItem('UName');
    var MulOptions=Parse.Object.extend("MulOptions");
	var mulOptions = new MulOptions();
	var query2 = new Parse.Query(MulOptions);
	query2.equalTo("Qeventid", ev_objid);
    query2.equalTo("mulquestion","Is date and time OK?Ê")
	query2.find({
                
                success:function(result){
                No_of_Yes=0;
                No_of_No=0;
                for(var i=0;i<result.length;i++){
                if(result[i].get('options')=='yes'){
                No_of_Yes= result[i].get('noofok')
                
                }else{
                No_of_No= result[i].get('noofok')
                } 
                }
                sendnotificationAllAnsred1(eventname,No_of_Yes,No_of_No)
                }
                });
}


function sendnotificationAllAnsred1(eventname,No_of_Yes,No_of_No){
	
    if(No_of_Yes==undefined){
        No_of_Yes=0;
    }
    if(No_of_No==undefined){
        No_of_No=0;
    }
    var mes=No_of_Yes+" Answers Yes,"+No_of_No+" Answered NO";
    var message1 = "All the friend answered the poll of event"+eventname+"."+mes;
    // alert(message1)
    //4473e673-fb47-4e80-869a-ee9e75dd3d97
	var query = new Parse.Query(Parse.Installation);
	query.equalTo('deviceType','android');
	query.equalTo('channels', "");
	Parse.Push.send({
                    // where: query,
                    channels: [ "" ],
                    data: {
                    alert: message1,
                    //newsItem:'goog',
                    // sound: "cheering.caf",
                    }
                    }, {
                    success: function() {
                    //alert('send succes')
                    console.log('createPush answer all was successful');
                    },
                    error: function(error) {
                    //alert('send error')
                    console.log(JSON.stringify(error));
                    }
                    });
    
    
    
}

function sendnotifiactionBeforeStart(ev_starttime,evnt){
    //	alert('ok');
    var Name= localStorage.getItem('UName');
	var tday=Date.parse(new Date());
	var td= tday+10000
	var sendtime=ev_starttime*1000-3600000;
	var sankar=new Date(sendtime);
	console.log('sankar'+sankar)
	
	var message1 =evnt+" event is going to start in 1 hr ";
    var GetUser=Parse.Object.extend("User");
	var query = new Parse.Query(GetUser);
	query.find({
               success:function(res){
               console.log(FbkFriendsToInvite)
               //alert(res.length)
               for(var i=0;i<res.length;i++){
               if(FbkFriendsToInvite.indexOf(parseInt(res[i].get('Facebookid'))) !=-1){
               ///alert(res[i].get('Facebookid'));
               if(res[i].get('deviceId') !=undefined){
               var d_id=res[i].get('deviceId');
               var query = new Parse.Query(Parse.Installation);
               Parse.Push.send({
                               channels: [d_id],
                               data: {
                               alert: message1,
                               oneH_eventid:eventid,
                               
                               },
                               push_time:sankar
                               },
                               
                               {
                               success: function() {
                               // alert('eeesend succes')
                               // Push was successful
                               },
                               error: function(error) {
                               // alert('send error')
                               console.log(JSON.stringify(error));
                               }
                               });
               
               
               }
               
               
               
               }
               }
               
               }
               })
    
    
    
}


function requestPosition1() {
	var cuser = localStorage.getItem('localusername');
	if (cuser != null) {
		
		navigator.geolocation.getCurrentPosition(onSuccesse, onErrore);
	}
}

function onSuccesse(position) {
	//console.log('ok')
	cur_lat = position.coords.latitude;
	cur_lang = position.coords.longitude;
	var cuser = localStorage.getItem('localusername');
	var GameScore=Parse.Object.extend("User");
	var gameScore = new GameScore();
	var query = new Parse.Query(GameScore);
	query.equalTo("email", cuser);
	query.find({
               
               success:function(result){
               console.log(result[0].id)
               gameScore.id =result[0].id;
               gameScore.set('lat',cur_lat)
               gameScore.set('long',cur_lang)
               //gameScore.save();
               gameScore.save(null, {
                              success: function (save_evt) {
                              console.log(cuser)
                              console.log(cur_lat);
                              console.log(cur_lang)
                              },
                              error:function(error){
                              console.log("Error: " + error.code + " " + error.message);
                              }
                              });
               
               
               },
               error:function(error){
               console.log('geolocation error')
               }
               })
	/*
	 var query = new Parse.Query(GameScore);
	 query.equalTo("MQuestionid", id);
	 query.find({*/
}

function onErrore() {
	
}

function requestPosition() {
	
    navigator.geolocation.getCurrentPosition(successCallback, onError);
}

function successCallback(position) {
	cur_lat = position.coords.latitude;
	cur_lang = position.coords.longitude;
	console.log(cur_lat + '  long-->' + cur_lang);
}

function local_login() {
	var cuser = localStorage.getItem('localusername');
	if (cuser == null || cuser=='') {
		/* $.mobile.showPageLoadingMsg();
		 getCurrentdata()
         getdata(cuser);
		 getCompletedata(cuser);
		 getRecentdata(cuser);*/
	} else {
		$.mobile.showPageLoadingMsg();
		getCurrentdata()
		
	}
}

//---------- Registration Page --------------
var debug = 'brow11'
$(document).ready(function () {
                  //test1();
                  var now = new Date();
                  
                  timezone = now.getTimezoneOffset() / 60;
                  //alert(now)
                  
                  String.prototype.replaceAt = function (index, char) {
                  return this.substr(0, index) + char + this.substr(index + char.length);
                  };
                  
                  $('#startDate').mobiscroll().datetime({
                                                        // dateFormat:'dd/mm/yyyy',
                                                        minDate: new Date(now.getFullYear(), now.getMonth(), now.getDate('dd/mm/yyyy')),
                                                        theme: 'ios',
                                                        display: 'bottom',
                                                        mode: 'scroller',
                                                        endYear: 2050,
                                                        stepMinute: 5,
                                                        dateOrder: 'ddMyyyy',
                                                        dateFormat: 'dd/mm/yyyy',
                                                        dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                                                        onSelect: function (html, inst) {
                                                        
                                                        var va = $('#startDate').mobiscroll('getValue')
                                                        $('#pstartDate').mobiscroll('setValue', va, true)
                                                        $('#endDate5').mobiscroll('setValue', va, true)
                                                        console.log(va)
                                                        var hr = parseInt(va[3]);
                                                        if (hr < 11) {
                                                        hr = hr + 1;
                                                        }
                                                        va[3] = hr;
                                                        $('#endDate').mobiscroll('setValue', va, true)
                                                        $('#pendDate').mobiscroll('setValue', va, true)
                                                        
                                                        }
                                                        });
                  $('#endDate5').mobiscroll().datetime({
                                                       // dateFormat:'dd/mm/yyyy',
                                                       minDate: new Date(now.getFullYear(), now.getMonth(), now.getDate('dd/mm/yyyy')),
                                                       theme: 'ios',
                                                       display: 'bottom',
                                                       
                                                       mode: 'scroller',
                                                       endYear: 2050,
                                                       stepMinute: 5,
                                                       dateOrder: 'ddMyyyy',
                                                       dateFormat: 'dd/mm/yyyy',
                                                       dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                                                       onSelect: function (html, inst) {
                                                       
                                                       
                                                       }
                                                       });
                  
                  
                  $('#endDate').mobiscroll().datetime({
                                                      // dateFormat:'dd/mm/yyyy',
                                                      minDate: new Date(now.getFullYear(), now.getMonth(), now.getDate('dd/mm/yyyy')),
                                                      theme: 'ios',
                                                      display: 'bottom',
                                                      
                                                      mode: 'scroller',
                                                      endYear: 2050,
                                                      stepMinute: 5,
                                                      dateOrder: 'ddMyyyy',
                                                      dateFormat: 'dd/mm/yyyy',
                                                      dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                                                      onSelect: function (html, inst) {
                                                      var va = $('#endDate').mobiscroll('getValue')
                                                      $('#pendDate').mobiscroll('setValue', va, true)
                                                      
                                                      }
                                                      });
                  
                  
                  $('#pstartDate').mobiscroll().datetime({
                                                         // dateFormat:'dd/mm/yyyy',
                                                         minDate: new Date(now.getFullYear(), now.getMonth(), now.getDate('dd/mm/yyyy')),
                                                         theme: 'ios',
                                                         display: 'bottom',
                                                         mode: 'scroller',
                                                         endYear: 2050,
                                                         stepMinute: 5,
                                                         dateOrder: 'ddMyyyy',
                                                         dateFormat: 'dd/mm/yyyy',
                                                         dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
                                                         });
                  $('#pendDate').mobiscroll().datetime({
                                                       // dateFormat:'dd/mm/yyyy',
                                                       minDate: new Date(now.getFullYear(), now.getMonth(), now.getDate('dd/mm/yyyy')),
                                                       theme: 'ios',
                                                       display: 'bottom',
                                                       mode: 'scroller',
                                                       endYear: 2050,
                                                       stepMinute: 5,
                                                       dateOrder: 'ddMyyyy',
                                                       dateFormat: 'dd/mm/yyyy',
                                                       dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
                                                       });
                  
                  $('#pstartDate11').mobiscroll().datetime({
                                                           // dateFormat:'dd/mm/yyyy',
                                                           minDate: new Date(now.getFullYear(), now.getMonth(), now.getDate('dd/mm/yyyy')),
                                                           theme: 'ios',
                                                           display: 'bottom',
                                                           mode: 'scroller',
                                                           endYear: 2050,
                                                           stepMinute: 5,
                                                           dateOrder: 'ddMyyyy',
                                                           dateFormat: 'dd/mm/yyyy',
                                                           dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
                                                           });
                  $('#pendDate11').mobiscroll().datetime({
                                                         // dateFormat:'dd/mm/yyyy',
                                                         minDate: new Date(now.getFullYear(), now.getMonth(), now.getDate('dd/mm/yyyy')),
                                                         theme: 'ios',
                                                         display: 'bottom',
                                                         mode: 'scroller',
                                                         endYear: 2050,
                                                         stepMinute: 5,
                                                         dateOrder: 'ddMyyyy',
                                                         dateFormat: 'dd/mm/yyyy',
                                                         dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
                                                         });
                  
                  
                  $(window).scroll(function () {
                                   /*  if ($(window).scrollTop() + $(window).height() == $(document).height()) {
                                    if ($.mobile.activePage.attr('id') == 'privatefrdList') {
                                    if (media_type1 == 'facebook') {
                                    getMoreFbfnd();
                                    } else if (media_type1 == 'addbook') {
                                    getMoreAddbookfnd();
                                    } else if (media_type1 == 'twitter') {
                                    getMoretwitterfnd();
                                    }
                                    }
                                    }*/
                                   });
                  var autocomplete = new google.maps.places.Autocomplete($("#search_loc")[0], {});
                  google.maps.event.addListener(autocomplete, 'place_changed', function () {
                                                var place = autocomplete.getPlace();
                                                console.log(place.address_components);
                                                });
                  
                  $('#mappage').on('pageshow', function () {
                                   // alert(res_lat);
                                   //  alert(res_long)
                                   var myLatlng = new google.maps.LatLng(res_lat, res_long);
                                   var mapOptions = {
                                   zoom: 12,
                                   center: myLatlng,
                                   mapMaker: true,
                                   mapTypeId: google.maps.MapTypeId.ROADMAP
                                   }
                                   var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
                                   var infowindow = new google.maps.InfoWindow({
                                                                               content: res_adds,
                                                                               maxWidth: 500
                                                                               });
                                   var marker = new google.maps.Marker({
                                                                       position: myLatlng,
                                                                       map: map,
                                                                       title: 'Hello World!'
                                                                       });
                                   google.maps.event.addListener(marker, 'click', function (event) {
                                                                 infowindow.open(map, marker);
                                                                 });
                                   });
                  
                  
                  
                  
                  $('#Eventmappage').on('pageshow', function () {
                                        
                                        
                                        var map;
                                        var bounds = new google.maps.LatLngBounds();
                                        var mapOptions = {
                                        mapTypeId: 'roadmap'
                                        };
                                        
                                        // Display a map on the page
                                        map = new google.maps.Map(document.getElementById("map_canvas2"), mapOptions);
                                        map.setTilt(45);
                                        
                                        var markers =markers1;
                                        
                                        console.log(markers)
                                        
                                        
                                        // Info Window Content
                                        /* var infoWindowContent = [
                                         ['<div class="info_content"><img src="https://graph.facebook.com/100001905072366/picture?type=normal" heigth="30px" width="30px"/></div>'],
                                         ];  */
                                        var infoWindowContent= info_content1
                                        console.log(infoWindowContent)
                                        // Display multiple markers on a map
                                        var infoWindow = new google.maps.InfoWindow(), marker, i;
                                        
                                        // Loop through our array of markers & place each one on the map
                                        for( i = 0; i < markers.length; i++ ) {
                                        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
                                        bounds.extend(position);
                                        marker = new google.maps.Marker({
                                                                        position: position,
                                                                        map: map,
                                                                        icon:  'images/'+i+'.png',
                                                                        title: markers[i][0]
                                                                        });
                                        
                                        // Allow each marker to have an info window
                                        google.maps.event.addListener(marker, 'click', (function(marker, i) {
                                                                                        return function() {
                                                                                        infoWindow.setContent(infoWindowContent[i][0]);
                                                                                        infoWindow.open(map, marker);
                                                                                        }
                                                                                        })(marker, i));
                                        
                                        // Automatically center the map fitting all markers on the screen
                                        map.fitBounds(bounds);
                                        }
                                        
                                        // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
                                        var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
                                                                                           //this.setZoom(4);
                                                                                           google.maps.event.removeListener(boundsListener);
                                                                                           });
                                        
                                        });
                  
                  
                  
                  
                  $('#mappage').on('click', '.addlist', function () {
                                   
                                   venuelat=$(this).attr('lat')
                                   venulong= $(this).attr('long');
                                   //alert(venuelat);
                                   // alert(venulong);
                                   res_lat = $(this).attr('lat')
                                   res_long = $(this).attr('long')
                                   res_adds = $(this).attr('adds');
                                   var venuid = $(this).attr('id');
                                   a = 0;
                                   getvenuTips(venuid);
                                   });
                  
                  $('#facebook_reg').bind('click', function () {
                                          //alert('ok')
                                          if(debug=='brow'){
                                          $.mobile.changePage("#main");
                                          window.localStorage.setItem("accessToken","CAAG5vvFkPu4BAH7czDBLtvcJn3HJN7BSABsQFYvGmSkzBfI1cOqQK9vrZAZAIW9ZBJpKMJOcFA2WAxUZBL7xWZC7DzsqUlC6uldWlQJe2IvP7pzogqfyqrmEW3z1Er4rv7c1urkZCyEVsSvx7yC2GsceO2IbmO7f5EZAIWZB3lh4vK9GVHwib6EM");
                                          }
                                          else{
                                          //alert(redir_url)
                                          var fb = FBConnect.install();
                                          fb.connect(client_id, redir_url, "touch");
                                          }
                                          });
                  
                  $('#backimg').bind('click', function () {
                                     $.mobile.changePage("#main");
                                     });
                  
                  $('.eventlist').bind('click', function () {
                                       $.mobile.changePage("#eventDetailPage");
                                       });
                  
                  
                  $('#settingpage').on('pageshow', function () {
                                       
						               var fts=$('#flip-b')
                                       fts.val('on');
                                       fts.slider('refresh');
                                       });
                  
                  }); //document on ready end here


// ----------- Home Page ----------- //
function getCurrentdata(){
	var EnvitedEvnet=Parse.Object.extend("EnvitedFriends");
	var query=new Parse.Query(EnvitedEvnet);
	query.equalTo("FriendsId",parseInt(window.localStorage.getItem('Fuserid')));
	query.find({
               success: function(results1) {
               
               console.log('Invitedlength-->'+results1.length)
               e_event=[];
               for(var i=0;i<results1.length;i++){
               e_event.push(results1[i].get('Eventid'));
               //  alert(e_event)
               }
               var Eventdata = Parse.Object.extend("event");
               var query1 = new Parse.Query(Eventdata);
               var now=new Date();
               
               query1.find({
                           success: function(results) {
                           var cur=0;
                           var rec=0;
                           var completed=0;
                           //  alert("Successfully retrieved " + results.length + " scores.");
                           // Do something with the returned Parse.Object values
                           for (var i = 0; i < results.length; i++) {
                           var object = results[i];
                           //   console.log('Invitedlength--11>'+e_event.indexOf("ygiekVYmi6"))
                           console.log(e_event.length)
                           var accpe_taarry=[];
                           if(e_event.indexOf(object.id) !=-1){
                           console.log('Invitedlength-->'+results.length)
                           if(object.get('AttendFnd') !=undefined){
                           accpe_taarry=object.get('AttendFnd');
                           accpe_taarry.push(object.get('UserFBId'))
                           }
                           else{
                           accpe_taarry.push(object.get('UserFBId'))
                           }
                           
                           //	  if(accpe_taarry.indexOf( window.localStorage.getItem('Fuserid').toString()) !=-1){
                           var s_time=object.get('sDates');
                           var e_time=object.get('eDates');
                           var tday=Date.parse(new Date());
                           
                           // var tday1= $('#endDate5').mobiscroll('getDate');
                           // alert(tday1)
                           //var tday=Date.parse(tday1);
                           
                           tday=Math.floor(tday/1000);
                           console.log('----------------------------');
                           console.log(s_time);
                           console.log(tday);
                           console.log(e_time);
                           console.log('----------------------------');
                             if(tday< e_time){
                           cur++;
                           }
                           rec++;
                           
                           if(tday>e_time){
                           completed++;
                           
                           }
                           //}//end aaceptfnd
                           }
                           }//end for
                           
                           $('#recent_cnt').html('[' + rec + ']');
                           $('#Crr_cnt').html('[' + cur + ']');
                           $('#comptete_cnt').html('[' + completed + ']');
                           
                           $.mobile.changePage("#main");
                           },
                           error: function(error) {
                           //alert("Error: " + error.code + " " + error.message);
                           // $.mobile.changePage("#main");
                           }
                           });
               
               }
               });
	
	/*
	 //$.mobile.changePage("#main");
	 var Eventdata = Parse.Object.extend("event");
	 var query = new Parse.Query(Eventdata);
	 var now=new Date();
	 
	 query.find({
	 success: function(results) {
	 var cur=0;
	 var completed=0;
	 //  alert("Successfully retrieved " + results.length + " scores.");
	 // Do something with the returned Parse.Object values
	 for (var i = 0; i < results.length; i++) {
	 var object = results[i];
	 var s_time=object.get('sDates');
	 var e_time=object.get('eDates');
	 var tday=Date.parse(new Date());
	 
	 // var tday1= $('#endDate5').mobiscroll('getDate');
	 // alert(tday1)
	 //var tday=Date.parse(tday1);
	 
	 tday=Math.floor(tday/1000);
	 console.log('----------------------------');
	 console.log(s_time);
	 console.log(tday);
	 console.log(e_time);
	 console.log('----------------------------');
	 /*  if(s_time<tday  &&  tday< e_time){
	 cur++;
	 }*/
	
	/*
	 if(tday>e_time){
	 completed++;
	 
	 }
	 
	 }
	 
	 $('#recent_cnt').html('[' + results.length + ']');
	 $('#Crr_cnt').html('[' + results.length + ']');
	 $('#comptete_cnt').html('[' + completed + ']');
	 
	 $.mobile.changePage("#main");
	 },
	 error: function(error) {
	 //alert("Error: " + error.code + " " + error.message);
	 // $.mobile.changePage("#main");
	 }
	 });
	 */
}

function getCurrentList(){
	
	$.mobile.showPageLoadingMsg();
	var Eventdata = Parse.Object.extend("event");
	
	var query = new Parse.Query(Eventdata);
    query.descending("createdAt");
	query.find({
               success: function(results) {
               $.mobile.hidePageLoadingMsg();
               var cur=0;
               var html='';
               //  alert("Successfully retrieved " + results.length + " scores.");
               // Do something with the returned Parse.Object values
               for (var i = 0; i < results.length; i++) {
               var object = results[i];
               
               var accpe_taarry=[];
               if(e_event.indexOf(object.id) !=-1){
               if(object.get('AttendFnd') !=undefined){
               accpe_taarry=object.get('AttendFnd');
               accpe_taarry.push(object.get('UserFBId'))
               }
               else{
               accpe_taarry.push(object.get('UserFBId'))
               }
               
               //  if(accpe_taarry.indexOf( window.localStorage.getItem('Fuserid').toString()) !=-1){
               var s_time=object.get('sDates');
               var e_time=object.get('eDates');
               var tday=Date.parse(new Date());
               tday=Math.floor(tday/1000);
               
               console.log(s_time);
               console.log(tday);
               console.log(e_time);
               
                if(tday< e_time){
               //cur++;
               
               var object = results[i];
               var objid=object.id;
               var E_name=object.get('vEventName')
               html +='<li data-icon="arrow-r" onclick="getCurDetail(this)" data-obid='+objid+' obid='+objid+'><a href="#">'+E_name+'</a></li>'
               
                  }
                else{
                //alert('not ok')
                }
               // } end accpet fnd condtion
               }
               }
               $('#c_eventlist').html(html);
               //$('#c_eventlist').listview('refresh')
               $.mobile.changePage("#eventListPage");
               $('#c_eventlist').listview('refresh')
               },
               error: function(error) {
               alert("Error: " + error.code + " " + error.message);
               $.mobile.hidePageLoadingMsg();
               }
               });
}
function getCompletedList() {
	$.mobile.showPageLoadingMsg();
	var Eventdata = Parse.Object.extend("event");
	var query = new Parse.Query(Eventdata);
	query.find({
               success: function(results) {
               $.mobile.hidePageLoadingMsg();
               var cur=0;
               var html='';
               //  alert("Successfully retrieved " + results.length + " scores.");
               // Do something with the returned Parse.Object values
               for (var i = 0; i < results.length; i++) {
               if(e_event.indexOf(results[i].id) !=-1){
               var object = results[i];
               var s_time=object.get('sDates');
               var e_time=object.get('eDates');
               var tday=Date.parse(new Date());
               tday=Math.floor(tday/1000);
               
               console.log(s_time);
               console.log(tday);
               console.log(e_time);
               
               if(  tday>e_time){
               //cur++;
               
               var object = results[i];
               var objid=object.id;
               var E_name=object.get('vEventName')
               html +='<li data-icon="arrow-r" onclick="getCompletedDetail(this)" data-obid='+objid+' obid='+objid+'><a href="#">'+E_name+'</a></li>'
               
               }
               else{
               //alert('not ok')
               }
               
               }
               
               }
               $('#c_eventlist').html(html);
               //$('#c_eventlist').listview('refresh')
               $.mobile.changePage("#eventListPage");
               $('#c_eventlist').listview('refresh')
               },
               error: function(error) {
               alert("Error: " + error.code + " " + error.message);
               $.mobile.hidePageLoadingMsg();
               }
               });
}

function getCurDetail(event){
	ev_objid=$(event).data('obid');
	$('#ansPollQesBtn').show();
	$('#giveanswerid').show();
	
	var GameScore = Parse.Object.extend("event");
	var query = new Parse.Query(GameScore);
	query.equalTo("objectId", $(event).data('obid'));
	query.find({
               success: function(results) {
               // Do something with the returned Parse.Object values
               for (var i = 0; i < results.length; i++) {
               var object = results[i];
               var venue=object.get('eVenue');
               var eDate=object.get('endDate');
               var sDate=object.get('startDate');
               var e_name=object.get('vEventName');
               friendsarray1=object.get('friendId');
               friendsarray_bar=object.get('friendId');
               localStorage.setItem('fnd',friendsarray_bar);
               Euserid=object.get('iuserId');
               m_lat=object.get('lat');
               m_long=object.get('long');
               m_adds=object.get('eVenue');
               m_evetuser=object.get('UserFBId');
               AttendfnnArray=object.get('AttendFnd');
               }
               $('#c_evnetname').html(e_name);
               $('#Detail_sdate').html(sDate);
               $('#Detail_edate').html(eDate);
               curdetail=1;
               $.mobile.changePage('#CurrentDetailpage');
               },
               error: function(error) {
               alert("Error: " + error.code + " " + error.message);
               }
               });
	
}
function getCompletedDetail(event){
	ev_objid=$(event).data('obid');
	$('#ansPollQesBtn').hide();
	$('#giveanswerid').hide();
	curdetail=0;
	ev_objid=$(event).data('obid');
	var GameScore = Parse.Object.extend("event");
	var query = new Parse.Query(GameScore);
	query.equalTo("objectId", $(event).data('obid'));
	query.find({
               success: function(results) {
               // Do something with the returned Parse.Object values
               for (var i = 0; i < results.length; i++) {
               var object = results[i];
               var venue=object.get('eVenue');
               var eDate=object.get('endDate');
               var sDate=object.get('startDate');
               var e_name=object.get('vEventName');
               friendsarray1=object.get('friendId');
               Euserid=object.get('iuserId');
               m_lat=object.get('lat');
               m_long=object.get('long');
               m_adds=object.get('eVenue');
               //alert(Euserid)
               }
               
               $('#c_evnetname').html(e_name);
               $('#Detail_sdate').html(sDate);
               $('#Detail_edate').html(eDate);
               
               $.mobile.changePage('#CurrentDetailpage');
               },
               error: function(error) {
               alert("Error: " + error.code + " " + error.message);
               }
               });
	
	
}

function gotoPluspage(){
	$('#searchType').val('');
	$('#search_loc').val('')
	$.mobile.changePage('#pluspage')
}


function getRecentDetail(event){
	$('#ansPollQesBtn').hide();
	$('#giveanswerid').hide();
	curdetail=0;
	ev_objid=$(event).data('obid');
	var GameScore = Parse.Object.extend("event");
	var query = new Parse.Query(GameScore);
	query.equalTo("objectId", $(event).data('obid'));
	query.find({
               success: function(results) {
               // Do something with the returned Parse.Object values
               for (var i = 0; i < results.length; i++) {
               var object = results[i];
               var venue=object.get('eVenue');
               var eDate=object.get('endDate');
               var sDate=object.get('startDate');
               var e_name=object.get('vEventName');
               friendsarray1=object.get('friendId');
               Euserid=object.get('iuserId');
               m_lat=object.get('lat');
               m_long=object.get('long');
               m_adds=object.get('eVenue');
               
               }
               $('#c_evnetname').html(e_name);
               $('#Detail_sdate').html(sDate);
               $('#Detail_edate').html(eDate);
               
               $.mobile.changePage('#CurrentDetailpage');
               },
               error: function(error) {
               alert("Error: " + error.code + " " + error.message);
               }
               });
	
	
	
}

function getRecentdata(usermail) {
	var cur_table = Parse.Object.extend("event");
	var query = new Parse.Query(cur_table);
	query.equalTo("iUserId", usermail);
	var dt = new Date();
	var today = dt.getMonth() + 1 + "/" + dt.getDate() + "/" + dt.getFullYear();
	query.lessThan("eDate", today);
    //var last30day = new Date().setDate(today.getDate()-30)
    //alert(last30day);
    //query.greaterThan("dEventDate",last30day);
	query.find({
               success: function (results) {
               $('#recent_cnt').html('[' + results.length + ']');
               $.mobile.changePage("#main");
               },
               error: function (error) {
               
               }
               });
}

function getRecentList() {
	$.mobile.showPageLoadingMsg();
	var Eventdata = Parse.Object.extend("event");
	var query = new Parse.Query(Eventdata);
	query.find({
               success: function(results) {
               //  alert("Successfully retrieved " + results.length + " scores.");
               // Do something with the returned Parse.Object values
               var html=''
               for (var i = 0; i < results.length; i++) {
               $.mobile.hidePageLoadingMsg();
               
               var object = results[i];
               if(e_event.indexOf(object.id) !=-1){
               var objid=object.id;
               var E_name=object.get('vEventName')
               html +='<li data-icon="arrow-r" onclick="getRecentDetail(this)" data-obid='+objid+'><a href="#">'+E_name+'</a></li>'
               //alert(objid)
               
               
               
               }
               }
               $('#c_eventlist').html(html);
               //$('#c_eventlist').listview('refresh')
               $.mobile.changePage("#eventListPage");
               $('#c_eventlist').listview('refresh')
               },
               error: function(error) {
               alert("Error: " + error.code + " " + error.message);
               
               }
               });
}





function getRecentList11() {
    // $.mobile.changePage("#eventListPage");
}

//---------- Plush Page --------------

function searchvenu() {
	var place = $('#search_loc').val();
	var ser_type = $('#searchType').val();
	var geocoder = new google.maps.Geocoder();
	geocoder.geocode({
                     address: place
                     }, function (results, status) {
                     if (status == google.maps.GeocoderStatus.OK) {
                     var lat = results[0].geometry.location.lat();
                     var lng = results[0].geometry.location.lng();
                     //alert(lat)
                     res_lat = lat;
                     res_long = lng
                     Getserch_loc_info(lat, lng, ser_type)
                     } else {
                     res_lat = cur_lat;
                     res_long = cur_lang;
                     Getserch_loc_info(cur_lat, cur_lang, ser_type)
                     }
                     });
}

function Getserch_loc_info(latt, langg, s_type) {
	var d1 = new Date();
	var y = d1.getFullYear()
	var m = d1.getMonth() + 1;
	var d = d1.getDate();
	if (d < 10)
		d = '0' + d;
	if (m < 10)
		m = '0' + m;
	verson1 = y + '' + m + '' + d;
	var loc_url = 'https://api.foursquare.com/v2/venues/search?ll=' + latt + ',' + langg + '&query=' + s_type + '&client_id=' + client_Parse_id + '&client_secret=' + client_secret_id + '&v=' + verson1;
	$.mobile.showPageLoadingMsg();
	console.log(loc_url);
	$.ajax({
           type: "GET",
           url: loc_url,
           crossDomain: true,
           success: function (response) {
           var res = response.response.venues;
           var html = '';
           
           if (res.length < 10)
           var len = res.length;
           else
           var len = 10;
           
           for (var i = 0; i < res.length; i++) {
           console.log(res[i].name);
           //eventname=res[i].name;
           $.mobile.hidePageLoadingMsg();
           var city = '';
           var postalCode = ''
           var address = ''
           var lat = res[i].location.lat;
           var long = res[i].location.lng;
           if (res[i].location.address != undefined) {
           address = res[i].location.address;
           }
           if (res[i].location.city != undefined) {
           if (res[i].location.address == undefined)
           city = res[i].location.city;
           else
           city = ',' + res[i].location.city;
           }
           if (res[i].location.postalCode != undefined) {
           postalCode = ',' + res[i].location.postalCode
           }
           html += '<li class="addlist venuadds" adds="' + res[i].name + ',' + address + city + postalCode + '" id=' + res[i].id + ' lat=' + lat + ' long=' + long + '><a href="#"<p>' + res[i].name + '</p><p>' + address + city + postalCode + '</p></a></li>'
           }
           $('#locationlist1').html(html).trigger("create");
           $.mobile.changePage('#mappage');
           $("#locationlist1").listview("refresh");
           },
           error: function (error) {
           navigator.notification.alert('error in retrivingdata')
           }
           }); //end ajax
}

function saveDateTime() {
	var startDate = $('#startDate').val();
	var endDate = $('#endDate').val();
    var eday=$('#daysid').val();
    var eHour=$('#hourtext').val();
    var eMin=$('#mintext').val();
    
    evntExpD=eday;
    evntExpH=eHour
    evntExpM=eMin
	window.localStorage.setItem('startDate', startDate);
	window.localStorage.setItem('endDate', endDate);
    
    
    
	if(startDate==null || startDate==''){
		navigator.notification.alert('Please add a date and time for your event')
	}
	else{
		getFacebookfnd();
	}
	
}

//---------------------------------------------------------------------



function getvenuTips(venuid) {
	var loc_url = 'https://api.foursquare.com/v2/venues/' + venuid + '/tips?sort=recent&&client_id=' + client_Parse_id + '&client_secret=' + client_secret_id + '&v=' + verson1;
	console.log(loc_url)
	$.mobile.showPageLoadingMsg();
	console.log(loc_url);
	$.ajax({
           type: "GET",
           url: loc_url,
           crossDomain: true,
           complete: function () {},
           success: function (response) {
           $.mobile.hidePageLoadingMsg();
           var thtml = '';
           var ht = '';
           tips = 0;
           var res = response.response.tips.items;
           tipsarray = [];
           if (res.length > 0) {
           $('#tipheadid').show();
           for (var i = 0; i < res.length; i++) {
           ht = '<li onclick="gotq(this)" cls="tipsbox-' + i + '" data-icon="false"><a href="#">'+res[i].text+'</a><div id="tipsbox-' + i + '" style="display:none; padding-left:4px; padding-bottom:2px;"><span style="white-space:normal;">' + res[i].text + '</span></div></li>';
           tipsarray.push(ht);
           if (i < 20) {
           thtml+='<li onclick="gotq(this)" cls="tipsbox-' + i + '" data-icon="false"><a href="#">'+res[i].text+'</a><div id="tipsbox-' + i + '" style="display:none; padding-left:4px; padding-bottom:2px;"><span style="white-space:normal;">' + res[i].text + '</span></div></li>'
           
           //    thtml += '<li onclick="gotq(this)" cls="tipsbox-' + i + '" data-icon="false"><a href="#"><img src=' + res[i].user.photo.prefix + '70x70' + res[i].user.photo.suffix + ' /><h3>' + res[i].user.firstName + ' Says...</h3><p style="font-size:16px;">' + res[i].text + '</p></a><div id="tipsbox-' + i + '" style="display:none; padding-left:4px; padding-bottom:2px;"><span style="white-space:normal;">' + res[i].text + '</span></div></li>';
           }
           }
           if (res.length > 20) {
           $('#moretips').show();
           } else {
           $('#moretips').hide();
           }
           $('#tipsid').html('');
           $('#tipslistview').html(thtml).trigger("create");
           $.mobile.changePage('#VenuTips')
           $('#tipslistview').listview('refresh');
           } else {
           $('#tipheadid').hide();
           $('#moretips').hide();
           $('#tipslistview').html('');
           $('#tipsid').html('<center style="padding-top:40px; padding-bottom:40px;">No Tips found</center>');
           $.mobile.changePage('#VenuTips');
           }
           }
           });
}



function getMoretips() {
	tips = tips + 20;
	if (tips + 20 > tipsarray.length) {
		var tiplen = tipsarray.length;
		$('#moretips').hide();
	} else {
		tiplen = tips + 20;
	}
	var htm = '';
	for (i = tips; i < tiplen; i++) {
		htm += tipsarray[i];
	}
	$('#tipslistview').append(htm);
	$('#tipslistview').listview('refresh');
}

function gotodatepage() {
	
	$('#startDate').val('')
	$('#endDate').val('')
	$('#daysid').val('')
    $('#hourtext').val('')
    $('#mintext').val('')
	$.mobile.changePage('#datepage');
}

function gotodatepagesdf() {
    //$.mobile.changePage('#datepage');
}


function gotq(this1) {
	var div1 = $(this1).attr('cls')
	if ($('#' + div1).is(':visible')) {
		$('#' + div1).hide(500);
	} else {
		$('#' + div1).show(500);
	}
}

function getFacebookfnd() {
	flogin = 0;
	$('#selectedFrdListDiv1').html('');
	facebookfndArray = [];
	FbkFriendsToInvite=[];
	FbkNameToInvite=[];
	media_type1 = 'facebook'
    //alert(facebookfndArray.length)
	var farry=localStorage.getItem('local_facebook');
	farry='';
	if(farry==null || farry=='' || farry=='null'){
		accessToken = window.localStorage.getItem("accessToken");
		if (accessToken == '' || accessToken == null) {
			flogin = 1;
			var fb = FBConnect.install();
			fb.connect(client_id, redir_url, "touch");
		}
		console.log(accessToken)
		facebookfndArray = [];
		$('#friendList').html(" ");
		console.log("https://graph.facebook.com/me/friends?access_token=" + accessToken);
		$.mobile.showPageLoadingMsg("a", "Just one moment while we access your friends.");
		$.ajax({
               type: "GET",
               url: "https://graph.facebook.com/me/friends?access_token=" + accessToken,
               dataType: "json",
               crossDomain: true,
               success: function (response) {
               
               var result = response.data;
               console.log(result[0]);
               var html = '';
               var htl = '';
               ffnd = 0;
               if (result[0].name) {
               for (var i = 0; i < result.length; i++) {
               var fid = result[i].id.toString();
               htl = '';
               htl += '<li><a href="javascript:void(0)" style="padding-top: 0px;padding-bottom: 0px;padding-right: 0px;padding-left: 0px;">';
               htl += '<label style="border-top-width: 0px;margin-top: 0px;border-bottom-width: 0px;margin-bottom: 0px;border-left-width: 0px;border-right-width: 0px;" data-corners="false">';
               htl += '<fieldset data-role="controlgroup"> ';
               htl += '<input type="checkbox" name="checkbox-' + i + '" id="checkbox-' + i + '" class="custom" onclick="checkfbkfnd(this,' + result[i].id + ' )" value="' + result[i].name + '"/>';
               htl += '<label for="checkbox-' + i + '" style="border-top-width: 0px;margin-top: 0px;border-bottom-width: 0px;margin-bottom: 0px;border-left-width: 0px;border-right-width: 0px;" data-corners="false">' + result[i].name + '</label>';
               htl += '</fieldset>';
               htl += '</label>';
               htl += '</li>';
               facebookfndArray.push(htl);
               html += '<li><a href="javascript:void(0)" style="padding-top: 0px;padding-bottom: 0px;padding-right: 0px;padding-left: 0px;">';
               html += '<label style="border-top-width: 0px;margin-top: 0px;border-bottom-width: 0px;margin-bottom: 0px;border-left-width: 0px;border-right-width: 0px;" data-corners="false">';
               html += '<fieldset data-role="controlgroup"> ';
               html += '<input type="checkbox" name="checkbox-' + i + '" id="checkbox-' + i + '" class="custom" onclick="checkfbkfnd(this,' + result[i].id + ')" value="' + result[i].name + '"/>';
               html += '<label for="checkbox-' + i + '" style="border-top-width: 0px;margin-top: 0px;border-bottom-width: 0px;margin-bottom: 0px;border-left-width: 0px;border-right-width: 0px;" data-corners="false">' + result[i].name + '</label>';
               html += '</fieldset>';
               html += '</label>';
               html += '</li>';
               
               
               }
               } else {
               $.mobile.hidePageLoadingMsg();
               $('#privatedList').html("No facebook contacts found");
               }
               $.mobile.hidePageLoadingMsg();
               localStorage.setItem('local_facebook',html)
               $('#privateList1').html(html).trigger("create");
               $.mobile.changePage("#privatefrdList");
               $('#privateList1').listview('refresh');
               },
               error: function (data) {
               $.mobile.hidePageLoadingMsg();
               }
               });
	}
	else{
        
		$.mobile.showPageLoadingMsg("a", "Just one moment while we access your friends.");
		$('#privateList1').html(farry).trigger("create");
		$.mobile.changePage("#privatefrdList");
		$('#privateList1').listview('refresh');
		$.mobile.hidePageLoadingMsg();
        
		
	}//end else
}



function checkfbkfnd(event, id) {
	var name = $(event).val();
	console.log("name="+name);
	var fid = id;
	if (event.checked) {
		if (FbkFriendsToInvite.indexOf(fid) == -1) {
			FbkFriendsToInvite.push(fid);
			FbkNameToInvite.push(name);
		}
	} else {
		if (FbkFriendsToInvite.indexOf(fid) != -1) {
			var index1 = FbkFriendsToInvite.indexOf(fid);
			FbkFriendsToInvite.splice(index1, 1);
			var index = FbkNameToInvite.indexOf(name);
			FbkNameToInvite.splice(index, 1);
		}
	}
	$("#selectedFrdListDiv1").html(" ")
	for (var i=0; i<FbkNameToInvite.length;i++) {
        $("#selectedFrdListDiv1").append('<li class="sec_fnd_li">'+FbkNameToInvite[i]+'</li>');
        $("#selectedFrdListDiv1").listview('refresh')
	}
	console.log(FbkFriendsToInvite);
	console.log(FbkFriendsToInvite.length);
}

function addAddressBookFrd() {
	ffnd = 0;
	media_type1 = 'addbook'
	$.mobile.showPageLoadingMsg();
	var options = new ContactFindOptions();
	options.filter = "";
	options.multiple = true;
	var filter = ["displayName", "phoneNumbers", "emails"];
	navigator.contacts.find(filter, onSuccess, onError, options);
	
	function onSuccess(contacts) {
		var a = JSON.stringify(contacts);
		var html = '';
		AddbookToInvite = [];
		AddbooknameToInvite = [];
		addressfndArray = [];
		var j = 0;
		for (var i = 0; i < contacts.length; i++) {
			if (contacts[i].emails != null) {
				var id = contacts[i].emails[0].value;
				var name = contacts[i].displayName;
				if (name == '' || name == null) {
					name = contacts[i].emails[0].value;
				}
				j++;
				var htm = '';
				htm += '<li><a href="javascript:void(0)" style="padding-top: 0px;padding-bottom: 0px;padding-right: 0px;padding-left: 0px;">';
				htm += '<label style="border-top-width: 0px;margin-top: 0px;border-bottom-width: 0px;margin-bottom: 0px;border-left-width: 0px;border-right-width: 0px;" data-corners="false">';
				htm += '<fieldset data-role="controlgroup"> ';
				htm += '<input type="checkbox" name="checkbox-' + i + '" id="checkbox-' + i + '" class="custom" onclick="check_contactfnd(this);" value="' + id + '"/>';
				htm +='<label for="checkbox-' + i + '" style="border-top-width: 0px;margin-top: 0px;border-bottom-width: 0px;margin-bottom: 0px;border-left-width: 0px;border-right-width: 0px;" data-corners="false">' + name + '</label>';
				htm += '</fieldset>';
				htm += '</label>';
				htm += '</li>';
				addressfndArray.push(htm);
				if (j < 11) {
					html += '<li><a href="javascript:void(0)" style="padding-top: 0px;padding-bottom: 0px;padding-right: 0px;padding-left: 0px;">';
					html += '<label style="border-top-width: 0px;margin-top: 0px;border-bottom-width: 0px;margin-bottom: 0px;border-left-width: 0px;border-right-width: 0px;" data-corners="false">';
					html += '<fieldset data-role="controlgroup"> ';
					html += '<input type="checkbox" name="checkbox-' + i + '" id="checkbox-' + i + '" class="custom" onclick="check_contactfnd(this);" value="' + id + '"/>';
					html += '<label for="checkbox-' + i + '" style="border-top-width: 0px;margin-top: 0px;border-bottom-width: 0px;margin-bottom: 0px;border-left-width: 0px;border-right-width: 0px;" data-corners="false">' + name + '</label>';
					html += '</fieldset>';
					html += '</label>';
					html += '</li>';
				}
			}
		}
		$.mobile.hidePageLoadingMsg();
		$('#privateList1').html(html).trigger("create");
		$.mobile.changePage("#privatefrdList");
		$('#privateList1').listview('refresh');
	}
	
	function onError(contactError) {
		alert("onError")
	}
}

var AddbookToInvite = new Array();
var AddbooknameToInvite = new Array();

function check_contactfnd(event) {
	console.log($(event).val());
	var name = $(event).val();
	var fid = $(event).val();
	if (event.checked) {
		if (AddbookToInvite.indexOf(fid) == -1) {
			AddbookToInvite.push(fid);
			AddbooknameToInvite.push(name);
		}
	} else {
		if (AddbookToInvite.indexOf(fid) != -1) {
			AddbookToInvite.pop(fid);
			AddbooknameToInvite.pop(name);
		}
	}
}


function getInvitefnd() {
	var html = '';
	
	$.mobile.showPageLoadingMsg();
	for (var i = 0; i < AddbooknameToInvite.length; i++) {
		var adb = 'adsfad';
		html += '<li><a href="#"><img src="images/addsbook.png"  class="ui-li-icon" />' + AddbooknameToInvite[i] + '</a><a style="margin-top:-1px;" href="#"   ids=' + AddbooknameToInvite[i] + '         onclick="deleteadds(this);">adsf</a></li>'
	}
	for (var i = 0; i < FbkNameToInvite.length; i++) {
		html += '<li><a href="#"><img src="images/facebook_r.png"  class="ui-li-icon" />' + FbkNameToInvite[i] + '</a><a style="margin-top:-1px;" href="#" onclick="delete1(this,' + FbkFriendsToInvite[i] + ');"></a></li>'
	}
	var thmladd = '<li data-icon="false" class="venuadds"><a href="javascript:void(0)"<p style="white-space:normal;">' + res_adds + '</p></a><a href="#" onclick="delete1();"></a></li>'
	
	$('#conformvenu1').html(thmladd)
	$('#invited_fndlist').html(html).trigger('create');
	$.mobile.changePage('#pollpage');
	$('#conformvenu1').listview('refresh');
	$('#invited_fndlist').listview('refresh');
	$.mobile.hidePageLoadingMsg();
}

function postToprivate() {
	for (var i=0; i<FbkFriendsToInvite.length;i++) {
        console.log(FbkFriendsToInvite[i])
        var evtstdate = window.localStorage.getItem('startDate');
        var evtedate = window.localStorage.getItem('endDate');
        var to = FbkFriendsToInvite[i];
        var redir_url = "http://effective.com/";
        var title = 'Invitation from Effectiv';
        var mylink= 'https://play.google.com/store/apps/details?id=com.appsolutejobs.smartphone';
        var ContestImage = 'http://09php.com/mobile/effective/effect_logo.png';
        var message="Venus Address : "+res_adds+" Start Date-Time : "+evtstdate+" End Date-Time : "+evtedate;
        var name = 'Effective Invitation';
        //console.log("Data"+message+mylink)
        var fburl = "https://www.facebook.com/dialog/feed?%20app_id=485704721514222&to="+to+"&link="+encodeURIComponent(mylink)+"&picture="+encodeURIComponent(ContestImage)+"&name="+encodeURIComponent(name)+"&caption="+encodeURIComponent(title)+"&description="+encodeURIComponent(message)+"&redirect_uri="+encodeURIComponent(redir_url);
		
        window.plugins.childBrowser.showWebPage(fburl);
        
        window.plugins.childBrowser.onLocationChange = function(loc){
			console.log("Location="+loc);
            if(loc.indexOf("post_id")!=-1){
                console.log("Post id="+loc.indexOf("post_id"));
                console.log("childBrowser close")
                window.plugins.childBrowser.close();
            }
        }
	}
	window.plugins.childBrowser.close();
	$.mobile.changePage('#main');
}



function getDatetime() {
	
	$.mobile.changePage('#polldatepage');
	$('#poll_dt').show();
	$('#poll_hiddendate').hide();
	$('#pstartDate1').val($('#startDate').val());
	$('#pendDate1').val($('#endDate').val());
	$('#pstartTime1').val($('#startTime').val());
	$('#pendTime1').val($('#endTime').val());
	
}

function psaveDateTime() {
	$("#timeokli .ui-icon").addClass("ui-icon-check").removeClass("ui-icon-arrow-r");
	var startDate = $('#pstartDate').val();
	var endDate = $('#pendDate').val();
	var startTime = $('#pstartTime').val();
	var endTime = $('#pendTime').val();
	window.localStorage.setItem('pstartDate', startDate);
	window.localStorage.setItem('pendDate', endDate);
	window.localStorage.setItem('pstartTime', startTime);
	window.localStorage.setItem('pendTime', endTime);
	
	$('#timeokli').data('p_days',$('#daysid1').val())
	$('#timeokli').data('p_hour',$('#hourtext1').val())
	$('#timeokli').data('p_mins',$('#mintext1').val())
	$.mobile.changePage('#poll_datetime');
	
}
var ffnd = 0;

function getMoreFbfnd() {
	ffnd = ffnd + 10;
	$.mobile.showPageLoadingMsg();
	var htm = '';
	if (ffnd + 10 > facebookfndArray.length) {
		var tiplen = facebookfndArray.length;
	} else {
		var tiplen = ffnd + 10;
	}
	
	for (i = ffnd; i < tiplen; i++) {
		htm += facebookfndArray[i];
	}
	
	$('#privateList1').append(htm).trigger("create");
	$('#privateList1').listview('refresh');
	$.mobile.hidePageLoadingMsg();
}

function getMoreAddbookfnd() {
	ffnd = ffnd + 10;
	$.mobile.showPageLoadingMsg();
	var htm = '';
	if (ffnd + 10 > addressfndArray.length) {
		var tiplen = addressfndArray.length;
	} else {
		var tiplen = ffnd + 10;
	}
	
	for (i = ffnd; i < tiplen; i++) {
		htm += addressfndArray[i];
	}
	$('#privateList1').append(htm).trigger("create");
	$('#privateList1').listview('refresh');
	$.mobile.hidePageLoadingMsg();
}
function convertTo24Hour(time) {
	var hours = parseInt(time.substr(0, 2));
	if(time.indexOf('am') != -1 && hours == 12) {
		time = time.replace('12', '0');
	}
	if(time.indexOf('pm')  != -1 && hours < 12) {
		time = time.replace(hours, (hours + 12));
	}
	return time.replace(/(am|pm)/, '');
}


function savedata_go_publish() {
    //alert($('#pollQeslistview  li').length);
    //alert(FbkFriendsToInvite.length)
	count_friend = -1;
	cancel_invite = 0;
    if( FbkFriendsToInvite.length>0){
		var SD11 = $('#endDate5').mobiscroll('getDate');
		var SD21 = $('#endDate').mobiscroll('getDate');
		var curdate1=new Date();
		console.log('-----------dt-------------------')
		console.log(SD11)
		console.log(SD21)
		console.log(new Date())
		console.log('-----------dt-------------------')
		
		
		var SD1=Date.parse(SD11);
		var SD2=Date.parse(SD21);
		var curdate=Date.parse(curdate1);
		if(SD1==SD2){
			SD2=SD2+3600000
            // alert('ok')
		}
		console.log(SD1+'----->'+SD2)
		var SD1=Math.floor(SD1/1000)
		var SD2=Math.floor(SD2/1000)
		curdate=Math.floor(curdate/1000)
		console.log(SD1+'----->'+SD2)
		
        //var SD1 = 10;
        //var SD2 = 20;
		var quesarray=[];
		var optionarry=[];
		var qtype=[]
		var pollExp=[];
        
        //	if($('#pollQeslistview  li').length>1){
		$("#pollQeslistview li").each(function() {
                                      var pday=$(this).data('p_days')
                                      var ph=$(this).data('p_hour')
                                      var pm=$(this).data('p_mins')
                                      //alert($(this).data('option'));
                                      
                                      //alert(pday)
                                      
                                      pollExp.push(pday+'s8888'+ph+'s8888'+pm)
                                      quesarray.push($(this).text());
                                      optionarry.push($(this).data('option'));
                                      qtype.push($(this).data('mulval'));
                                      
                                      });
		
        //}
		
        //	alert('ok');
		var EId="Eid"+Date.parse(new Date());
		var startDate = $('#startDate').val();
		var endDate = $('#endDate').val();
		var sp = res_adds.split(",");
		var evnt = sp[0];
		var venue = res_adds;
		var cuser = localStorage.getItem('localusername');
		var tz=timezone.toString();
		var Save_evt = Parse.Object.extend("event");
		var save_evt = new Save_evt();
        
        save_evt.set("Name",window.localStorage.getItem('UName'));
        save_evt.set("UserFBId",window.localStorage.getItem('Fuserid'))
        save_evt.set("EexpDays",evntExpD)
        save_evt.set("EexpHours",evntExpH)
        save_evt.set("EexpMins",evntExpM)
		save_evt.set("sDates", SD1);
		save_evt.set("eDates", SD2);
		save_evt.set("curdate", curdate);
        // alert(curdate)
		save_evt.set("eventid", EId);
		save_evt.set("pollExp",pollExp);
		save_evt.set("CreateDate", new Date());
		save_evt.set("friendId", FbkFriendsToInvite);
		save_evt.set("friendName",FbkNameToInvite);
		save_evt.set("OptionArray", optionarry);
		save_evt.set("QuesArray", quesarray);
		save_evt.set("QuesTarray", qtype);
        //save_evt.set("Create_evDate", new Date().toString());
		save_evt.set("Timezone", tz);
		save_evt.set("eVenue", venue);
		save_evt.set("endDate", endDate);
		save_evt.set("iuserId", cuser);
		save_evt.set("startDate", startDate);
		save_evt.set("vEventName", evnt);
		save_evt.set("lat",venuelat);
		save_evt.set("long",venulong);
        $.mobile.showPageLoadingMsg();
		
		
		
		save_evt.save(null, {
                      success: function (save_evt) {
                      $.mobile.hidePageLoadingMsg();
                      eventid=save_evt.id;
                      var t=setTimeout(function(){savemuloptions(eventid)},3000)
                      navigator.notification.alert('Your event has been sent!');
                      for(var i=0;i<quesarray.length;i++){
                      var Save_evt1 = Parse.Object.extend("MulQuestion");
                      var save_evt1 = new Save_evt1();
                      ques=qtype[i]
                      console.log('ques'+ques)
                      var expt=pollExp[i];
                      var expt1=expt.split('s8888')
                      //for()
                      save_evt1.set("expDay",expt1[0])
                      save_evt1.set("expHour",expt1[1])
                      save_evt1.set("expMin",expt1[2])
                      
                      save_evt1.set("expTime",pollExp[i])
                      save_evt1.set("Qeventid", eventid);
                      
                      save_evt1.set("qtype", optionarry[i]);
                      save_evt1.set("mulquestion", quesarray[i]);
                      save_evt1.set("options", qtype[i]);
                      save_evt1.save(null, {
                                     success: function (save_evt1) {
                                     $.mobile.hidePageLoadingMsg();
                                     //alert(ques);
                                     //  console.log('-----ok-->'+ques[i])
                                     
                                     }
                                     });
                      
                      }
                      console.log('------>sankar------>')
                      var newFbkFriendsToInvite=FbkFriendsToInvite;
                      newFbkFriendsToInvite.push(window.localStorage.getItem('Fuserid'));
                      
                      console.log('sankar------>'+newFbkFriendsToInvite.length)
                      
                      console.log('asdfsadf')
                      console.log(pollExp[0])
                      //start if main for exp poll
                      if(pollExp[0] !='s8888s8888'){
                      var exptimes=pollExp[0].split('s8888')
                      console.log(exptimes[0]);
                      console.log(exptimes[1]);
                      console.log(exptimes[2]);
                      var expD=0;
                      var expH=0;
                      var expM=0;
                      if(exptimes[0] ==null || exptimes[0] ==''){
                      expD=0
                      }
                      else{
                      console.log('ok')
                      expD=parseInt(exptimes[0]);
                      }
                      if(exptimes[1] ==null || exptimes[1] ==''){
                      expH=0;
                      }
                      else{
                      console.log('ok2')
                      expH=parseInt(exptimes[1]);
                      }
                      if(exptimes[2] ==null || exptimes[2] ==''){
                      expM=0;
                      }
                      else{
                      /// console.log('ok3')
                      expM=parseInt(exptimes[2]);
                      }
                      
                      
                      var ctime=Date.parse(new Date());
                      console.log(ctime)
                      console.log(expD);
                      console.log(expH);
                      console.log(expM);
                      expD=expD*86400000;
                      expH=expH*3600000;
                      expM=expM*60000;
                      ctime=ctime+expD+expH+expM;
                      console.log(ctime)
                      sendNotifiactionExp(ctime,evnt)
                      
                      }//end main if for exp poll
                      
                      
                      var Name= localStorage.getItem('UName');
                      if(evntExpD !='' ||  evntExpH !='' || evntExpH !=''){
                      var expmessage='Invitations will be expired in '+evntExpD+' Days,'+evntExpH+' Hours,'+evntExpH+' Minuets';
                      }
                      else
                      var expmessage='';
                      
                      var message1 = Name+' created an event '+evnt+' using effectiv.'+expmessage;
                      
                      
                      for(var j=0;j<newFbkFriendsToInvite.length;j++){
                      console.log('sankar------>'+newFbkFriendsToInvite[j])
                      var Save_evt2 = Parse.Object.extend("EnvitedFriends");
                      var save_evt2 = new Save_evt2();
                      save_evt2.set("Eventid",eventid);
                      save_evt2.set("FriendsId",parseInt(newFbkFriendsToInvite[j]));
                      save_evt2.set("EcreateNoti",message1);
                      save_evt2.save();
                      
                      
                      }
                      sendnotifiactionBeforeStart(SD1,evnt);
                      sendNotifiaction(evnt,evntExpD,evntExpH,evntExpH);
                      getCurrentdata();
                      console.log('------------------sankar---------------------')
                      post_toPage1();
                      
                      /*
                       evntExpD
                       postonfacebook();
                       //sendnotifiacion();
                       count_friend=-1;
                       cancel_invite=0;
                       post_toPage1();
                       */
                      },
                      error: function (save_evt, error) {
                      
                      navigator.notification.alert('Failed to create new Event, with error code: ' + error.description);
                      }
                      });
		
	}//end if
	else{
		
		navigator.notification.confirm(
                                       'Would you like to publish this event to your Facebook wall as a public event?',  // message
                                       onConfirm,              // callback to invoke with index of button pressed
                                       'You have not added friends to this event.',            // title
                                       'Yes,No'          // buttonLabels
                                       );
	}
	
}


function savemuloptions(evid){
    //alert(evid)
	
	var GameScore = Parse.Object.extend("MulQuestion");
	var query = new Parse.Query(GameScore);
	query.equalTo("Qeventid", evid);
	query.equalTo("qtype","multiple");
	query.find({
               success: function(results) {
               for (var i = 0; i < results.length; i++) {
               var object = results[i];
               // alert(object)
               var objid=object.id;
               var options=object.get('options');
               var exptimes=object.get('expTime');
               var mulquess=object.get('mulquestion');
               if(options !=''){
            	  // alert(options)
               var options1=options.split('s8888')
               var exptime=exptimes.split('s8888')
               for(j=0;j<options1.length;j++){
               
               var Save_evt1 = Parse.Object.extend("MulOptions");
               var save_evt1 = new Save_evt1();
               save_evt1.set("Qeventid", eventid);
               save_evt1.set("MQuestionid",objid);
               save_evt1.set("mulquestion",mulquess);
               save_evt1.set("expday",exptime[0]);
               save_evt1.set("exphour",exptime[1]);
               save_evt1.set("expmin",exptime[2]);
               //  save_evt1.set("mulquestion", quesarray[i]);
               save_evt1.set("options", options1[j]);
               save_evt1.save();
           /*    save_evt1.save(null, {
                              success: function (save_evt1) {
                             // $.mobile.hidePageLoadingMsg();
                              //alert(ques);
                              }
                              });
                              */
               
               }
               
               }
               
               }
               },
               error: function(error) {
               alert("Error: " + error.code + " " + error.message);
               }
               });
	
	
}


function onConfirm(button){
    if(button == 2){
		saveDateTime();
		
	}
	else{
        var SD11 = $('#endDate5').mobiscroll('getDate');
		var SD21 = $('#endDate').mobiscroll('getDate');
		var curdate1=new Date();
		console.log('-----------dt-------------------')
		console.log(SD11)
		console.log(SD21)
		console.log(new Date())
		console.log('-----------dt-------------------')
		
		
		var SD1=Date.parse(SD11);
		var SD2=Date.parse(SD21);
		var curdate=Date.parse(curdate1);
		if(SD1==SD2){
			SD2=SD2+3600000
            // alert('ok')
		}
		console.log(SD1+'----->'+SD2)
		var SD1=Math.floor(SD1/1000)
		var SD2=Math.floor(SD2/1000)
		curdate=Math.floor(curdate/1000)
		console.log(SD1+'----->'+SD2)
		
        //var SD1 = 10;
        //var SD2 = 20;
		var quesarray=[];
		var optionarry=[];
		var qtype=[]
		var pollExp=[];
        
        //	if($('#pollQeslistview  li').length>1){
		$("#pollQeslistview li").each(function() {
                                      var pday=$(this).data('p_days')
                                      var ph=$(this).data('p_hour')
                                      var pm=$(this).data('p_mins')
                                      //alert($(this).data('option'));
                                      
                                      //alert(pday)
                                      
                                      pollExp.push(pday+'s8888'+ph+'s8888'+pm)
                                      quesarray.push($(this).text());
                                      optionarry.push($(this).data('option'));
                                      qtype.push($(this).data('mulval'));
                                      
                                      });
		
        //}
		
        //	alert('ok');
		var EId="Eid"+Date.parse(new Date());
		var startDate = $('#startDate').val();
		var endDate = $('#endDate').val();
		var sp = res_adds.split(",");
		var evnt = sp[0];
		var venue = res_adds;
		var cuser = localStorage.getItem('localusername');
		var tz=timezone.toString();
		var Save_evt = Parse.Object.extend("event");
		var save_evt = new Save_evt();
        
        save_evt.set("Name",window.localStorage.getItem('UName'));
        save_evt.set("UserFBId",window.localStorage.getItem('Fuserid'))
        save_evt.set("EexpDays",evntExpD)
        save_evt.set("EexpHours",evntExpH)
        save_evt.set("EexpMins",evntExpM)
		save_evt.set("sDates", SD1);
		save_evt.set("eDates", SD2);
		save_evt.set("curdate", curdate);
        // alert(curdate)
		save_evt.set("eventid", EId);
		save_evt.set("pollExp",pollExp);
		save_evt.set("CreateDate", new Date());
		save_evt.set("friendId", FbkFriendsToInvite);
		save_evt.set("friendName",FbkNameToInvite);
		save_evt.set("OptionArray", optionarry);
		save_evt.set("QuesArray", quesarray);
		save_evt.set("QuesTarray", qtype);
        //save_evt.set("Create_evDate", new Date().toString());
		save_evt.set("Timezone", tz);
		save_evt.set("eVenue", venue);
		save_evt.set("endDate", endDate);
		save_evt.set("iuserId", cuser);
		save_evt.set("startDate", startDate);
		save_evt.set("vEventName", evnt);
		save_evt.set("lat",venuelat);
		save_evt.set("long",venulong);
        $.mobile.showPageLoadingMsg();
		
		//alert('ok');
		
		save_evt.save(null, {
                      success: function (save_evt) {
                      $.mobile.hidePageLoadingMsg();
                      eventid=save_evt.id;
                      var t=setTimeout(function(){savemuloptions(eventid)},3000)
                      navigator.notification.alert('Your event has been sent!');
                      for(var i=0;i<quesarray.length;i++){
                      var Save_evt1 = Parse.Object.extend("MulQuestion");
                      var save_evt1 = new Save_evt1();
                      ques=qtype[i]
                      console.log('ques'+ques)
                      var expt=pollExp[i];
                      var expt1=expt.split('s8888')
                      //for()
                      save_evt1.set("expDay",expt1[0])
                      save_evt1.set("expHour",expt1[1])
                      save_evt1.set("expMin",expt1[2])
                      
                      save_evt1.set("expTime",pollExp[i])
                      save_evt1.set("Qeventid", eventid);
                      
                      save_evt1.set("qtype", optionarry[i]);
                      save_evt1.set("mulquestion", quesarray[i]);
                      save_evt1.set("options", qtype[i]);
                      save_evt1.save(null, {
                                     success: function (save_evt1) {
                                     $.mobile.hidePageLoadingMsg();
                                     //alert(ques);
                                     //  console.log('-----ok-->'+ques[i])
                                     
                                     }
                                     });
                      
                      }
                      console.log('------>sankar------>')
                      var newFbkFriendsToInvite=FbkFriendsToInvite;
                      newFbkFriendsToInvite.push(window.localStorage.getItem('Fuserid'));
                      
                      console.log('sankar------>'+newFbkFriendsToInvite.length)
                      for(var j=0;j<newFbkFriendsToInvite.length;j++){
                      console.log('sankar------>'+newFbkFriendsToInvite[j])
                      var Save_evt2 = Parse.Object.extend("EnvitedFriends");
                      var save_evt2 = new Save_evt2();
                      save_evt2.set("Eventid",eventid);
                      save_evt2.set("FriendsId",parseInt(newFbkFriendsToInvite[j]));
                      save_evt2.save();
                      
                      
                      }
                      console.log('asdfsadf')
                      console.log(pollExp[0])
                      //start if main for exp poll
                      if(pollExp[0] !='s8888s8888'){
                      var exptimes=pollExp[0].split('s8888')
                      console.log(exptimes[0]);
                      console.log(exptimes[1]);
                      console.log(exptimes[2]);
                      var expD=0;
                      var expH=0;
                      var expM=0;
                      if(exptimes[0] ==null || exptimes[0] ==''){
                      expD=0
                      }
                      else{
                      console.log('ok')
                      expD=parseInt(exptimes[0]);
                      }
                      if(exptimes[1] ==null || exptimes[1] ==''){
                      expH=0;
                      }
                      else{
                      console.log('ok2')
                      expH=parseInt(exptimes[1]);
                      }
                      if(exptimes[2] ==null || exptimes[2] ==''){
                      expM=0;
                      }
                      else{
                      console.log('ok3')
                      expM=parseInt(exptimes[2]);
                      }
                      
                      
                      var ctime=Date.parse(new Date());
                      console.log(ctime)
                      console.log(expD);
                      console.log(expH);
                      console.log(expM);
                      expD=expD*86400000;
                      expH=expH*3600000;
                      expM=expM*60000;
                      ctime=ctime+expD+expH+expM;
                      console.log(ctime)
                      sendNotifiactionExp(ctime,evnt)
                      
                      }//end main if for exp poll
                      
                      sendnotifiactionBeforeStart(SD1,evnt);
                      sendNotifiaction(evnt,evntExpD,evntExpH,evntExpH);
                      getCurrentdata();
                      console.log('------------------sankar---------------------')
                      post_toPage1();
                      
                      /*
                       evntExpD
                       postonfacebook();
                       //sendnotifiacion();
                       count_friend=-1;
                       cancel_invite=0;
                       post_toPage1();
                       */
                      },
                      error: function (save_evt, error) {
                      
                      alert('Failed to create new Event, with error code: ' + error.description);
                      }
                      });
    }
}

function showhhidendate() {
	$('#P_dateok').show();
	$('#p_dateEdit').hide();
	$('#poll_hiddendate').show();
	$('#poll_dt').hide();
}

function p_radioClick(Event) {
	var val = $(Event).val();
	if (val == 'No') {
		$('#p_dateEdit').show();
		$('#P_dateok').hide();
	}
	
}

function addmoreQues() {
    
	var htm = '<input type="text" />'
	$('#add_queDiv1').append(htm).trigger('create');
}

var pollQesArray = [];
var multipleques='';


function addQesOk() {
    var txtval=''
	//alert('ok');
	var p_days=$('#p_daysid').val();
	var p_hour=$('#p_hourtext').val();
	var p_mins=$('#p_mintext').val();
	
    
	
	if($('#radio-mini-1').is(':checked')){
		var opttion='multiple';
		$('#add_queDiv2').html('')
	}
	else{
		var opttion='text';
		multipleques='';
		txtval= $('#textval_t').val();
		$('#add_queDiv1').html('');
	}
	if(opttion=='multiple'){
		
	}
    
	multipleques='';
	var t=0;
	$('input[type=text]', '#add_queDiv1').each(function() {
                                               t++;
                                               value=$(this).val();
                                               // alert(value);
                                               if(value=='' ||value==null){}
                                               else{
                                               if(t==1)
                                               multipleques=value;
                                               else
                                               multipleques=multipleques+"s8888"+value;
                                               }
                                               
                                               })
	
    
    
	if ($('#questiontext-0').val() == '' || $('#questiontext-0').val() == null) {
		
		navigator.notification.alert("Please Enter your Question")
		
	}
	else if(opttion=='multiple' && multipleques==''){
        //alert( multipleques );
        navigator.notification.alert("Please add Question options")
	}
	else{
		
		if(addPoll==0){
			var len= $('#pollQeslistview  li').length;
			
			var htm = '<li  data-icon="check" id="que'+len+'" onclick="pollLIclicktest(this)" data-textval="'+txtval+'" data-option="'+opttion+'" data-mulval="'+multipleques+'" data-p_days="'+p_days+'" data-p_hour="'+p_hour+'"  data-p_mins="'+p_mins+'" ques="'+$('#questiontext-0').val()+'" ><a href="javascript:void(0);">' + $('#questiontext-0').val() + '</a></li>'
			$('#pollQeslistview').append(htm)
			$('#pollQeslistview').listview('refresh')
			$.mobile.changePage('#poll_datetime')
		}
		else{
			addPoll=0;
			var GameScore = Parse.Object.extend("event");
			var query = new Parse.Query(GameScore);
			query.equalTo("objectId", ev_objid);
			query.find({
                       success: function(results) {
                       // Do something with the returned Parse.Object values
                       for (var i = 0; i < results.length; i++) {
                       var object = results[i];
                       var venue=object.get('eVenue');
                       var eDate=object.get('endDate');
                       var sDate=object.get('startDate');
                       var e_name=object.get('vEventName');
                       var quesA=object.get('QuesArray');
                       var quesOP=object.get('OptionArray');
                       var qestext=object.get('QuesTarray');
                       console.log(quesA);
                       
                       quesA.push( $('#questiontext-0').val());
                       quesOP.push(opttion);
                       qestext.push(multipleques)
                       var Point = Parse.Object.extend("event");
                       var point = new Point();
                       point.id = ev_objid;
                       point.set("OptionArray", quesOP);
                       point.set("QuesArray", quesA);
                       point.set("QuesTarray", qestext);
                       
                       // Set a new value on quantity
                       //point.set("vEventName", 'sankar');
                       
                       // Save
                       point.save(null, {
                                  success: function(point) {
                                  navigator.notification.alert('Added succesfully')
                                  //	  alert('Poll Added succesfully');
                                  $.mobile.changePage('#main')
                                  },
                                  error: function(point, error) {
                                  alert('err')
                                  // The save failed.
                                  // error is a Parse.Error with an error code and description.
                                  }
                                  });
                       
                       }
                       
                       }
                       })
			
		}
	}
	
}
function gotoSettings(){
	var htm='<img src="https://graph.facebook.com/'+window.localStorage.getItem('Fuserid')+'/picture?type=normal" />'
	$('#username').html('Name:-  '+localStorage.getItem('UName')).trigger('create');
	$('#userphoto').html(htm).trigger('create');
	$('#useremail').html('Email:-  '+localStorage.getItem('localusername')).trigger('create');
	
	
	
	$.mobile.changePage('#settingpage')
}

function pollLIclick(evnt) {
	var pol = $(evnt).attr('attr1');
	var polArr = pol.split(",,");
	var htm = '<div data-role="fieldcontain" id="ques_pollfield5" >'
	htm += '<input type="text" value="' + polArr[1] + '" id="editquestion-0" />'
	htm += '</div>'
	htm += '<fieldset data-role="controlgroup" data-mini="true">'
	htm += '<input type="radio" name="radio-editquestion-0" id="radio-editquestion-Y-0" value="Yes" onclick="p_radioClick(this)" checked="checked" />'
	htm += '<label for="radio-editquestion-Y-0">Yes</label>'
	htm += '<input type="radio" name="radio-editquestion-0" id="radio-editquestion-N-0" value="No" onclick="p_radioClick(this)" />'
	htm += ' <label for="radio-editquestion-N-0">No</label>'
	
	for (var i = 2; i < polArr.length; i++) {
		htm += '<input type="radio" name="radio-editquestion-0" id="radio-editquestion-N-0' + i + '" value="No" onclick="p_radioClick(this)" />'
		htm += ' <label for="radio-editquestion-N-0' + i + '">' + polArr[i] + '</label>'
	}
	htm += '</fieldset>'
	console.log(htm)
	$('#edit_queDiv').html(htm).trigger('create');
	
	$.mobile.changePage('#poll_qes_edit')
}

function Addpoolqes() {
	
    //alert(addPoll)
	
	$('#add_queDiv1').html('')
	$('#add_queDiv2').html('')
	$('#questiontext-0').val('')
	$('#p_daysid').val('');
	$('#p_hourtext').val('');
	$('#p_mintext').val('');
	$.mobile.changePage('#AddQuestion')
	
	
}

function goPublish(){
	$.mobile.changePage('#publishpage');
}

function CreateNewpoll(){
	addPoll=1;
	$('#add_queDiv1').html('')
	$('#add_queDiv2').html('')
	$('#questiontext-0').val('')
	$('#p_daysid').val('');
	$('#p_hourtext').val('');
	$('#p_mintext').val('');
	$.mobile.changePage('#AddQuestion')
	$( "#popupBasic" ).popup( "close" );
	
}

function gotoPoll() {
    //alert('ok')
    
	$('#pollQeslistview').html('');
	$('#pollQeslistview').append('<li id="timeokli" data-option="multiple" data-mulval="yess8888No" data-p_days="" data-p_mins="" data-p_hour=""><a href="#" onclick="getDatetime()" >Is date and time OK?</a></li>')
	
	$.mobile.changePage('#poll_datetime')
	$('#pollQeslistview').listview('refresh');
}

function delete1(evnt, ids) {
	var ele = $(evnt).parent().get(0);
	$(ele).remove();
	$("#invited_fndlist").listview("refresh");
	if (FbkFriendsToInvite.indexOf(ids) != -1) {
		FbkFriendsToInvite.pop(ids);
		FbkNameToInvite.splice(FbkFriendsToInvite.indexOf(ids), 1);
	}
	if (AddbookToInvite.indexOf(ids) != -1) {
		AddbookToInvite.pop(ids)
		AddbooknameToInvite.splice(FbkFriendsToInvite.indexOf(ids), 1)
	}
}

function deleteadds(ev) {
	var ids = $(ev).attr('ids')
	ele = $(ev).parent().get(0);
	$(ele).remove();
	if (AddbookToInvite.indexOf(ids) != -1) {
		AddbookToInvite.pop(ids)
		AddbooknameToInvite.splice(FbkFriendsToInvite.indexOf(ids), 1)
	}
}

function poll_Ttype(Event){
    $('#add_queDiv').html('<textarea id=pollqesid></textarea>').trigger('create');
	
}
function poll_mtype(Event){
	
	var htm = '<div data-role="fieldcontain" id="ques_pollfield" >'
	htm += '<input type="text" id="questiontext-0" />'
	htm += '</div>'
	htm += '<fieldset data-role="controlgroup" data-mini="true">'
	htm += '<input type="radio" name="radio-addqes-0" id="radio-addquestion-Y-0" value="Yes" onclick="p_radioClick(this)" checked="checked" />'
	htm += '<label for="radio-addquestion-Y-0">Yes</label>'
	htm += '<input type="radio" name="radio-addqes-0" id="radio-addquestion-N-0" value="No" onclick="p_radioClick(this)" />'
	htm += ' <label for="radio-addquestion-N-0">No</label>'
	htm += '</fieldset>'
	htm +='<a href="#" data-role="button" data-icon="plus" onclick="addmoreQues()" data-iconpos="notext">Delete</a>'
	$('#add_queDiv').html(htm).trigger('create');
	
}

function hideplushpage(){
    
    
    
}

function showplus(){
	$('#plusiconid').show();
	$('#add_queDiv2').html('')
	$('#questiontext-0').attr("placeholder","Type your question here");
}

function hideplus(){
	$('#questiontext-0').attr("placeholder","Type your comment here");
    $('#plusiconid').hide();
	$('#add_queDiv1').html('')
	$('#add_queDiv2').html('');
	//$('#add_queDiv2').html('<input type="text" id="textval_t"/>').trigger('create');
}

function getevnetdata1(){
	
	var Eventdata = Parse.Object.extend("event");
	var query = new Parse.Query(Eventdata);
	query.find({
               success: function(results) {
               //  alert("Successfully retrieved " + results.length + " scores.");
               // Do something with the returned Parse.Object values
               for (var i = 0; i < results.length; i++) {
               //var object = results[i];
               $('#Crr_cnt').html('[' + results.length + ']')
               }
               },
               error: function(error) {
               alert("Error: " + error.code + " " + error.message);
               }
               });
}

function pollLIclicktest(event){
	
    //alert($(event).attr('id'))
	/*
     $('#p_days').val('sankar');
	 $('#p_hour').val('samn');
	 $('#p_mins').val('manga');
     */
	
    $('#Ep_daysid').val($(event).data('p_days'));
    $('#Ep_hourtext').val($(event).data('p_hour'));
    $('#Ep_pintext').val($(event).data('p_mins'));
	$('#textval').val($(event).data('textval'));
    //alert($(event).data('textval'));
    
	options=$(event).data('mulval');
	if($(event).data('option')=='text'){
		//alert('ok');
		$('#multiplediveditshow1').show();
		$('#multiplediveditshow').hide();
	}
	else{
		
		$('#multiplediveditshow1').hide();
		$('#multiplediveditshow').show();
		
	}
	
	liIndex= $(event).index();
	var o_list=options.split("s8888")
	var htm='';
	for(var i=0; i<o_list.length;i++){
		
		if(o_list[i]=='' || o_list[i]==null){}
		else{
			htm+='<input type="text" value="'+o_list[i]+'" >'
		}
	}
	
	
	
	$('#multipledivedit').html(htm).trigger('create')
	$('#editpollQues').val($(event).text())
	$.mobile.changePage('#editpollques')
	
}

function gotopolllist(){
	var multipleques1='';
    var ded= $('#pollQeslistview li:eq('+liIndex+')');
	var id=$(ded).attr('id');
    //alert('ok')
	$('#'+id+" a"  ).text($('#editpollQues').val())
    //
	
	if($('#rid').is(':checked')){
		var opttion1='multiple';
	}
	else{
		var opttion1='text';
		multipleques1='';
	}
	
	var t=0;
	$('input[type=text]', '#multipledivedit').each(function() {
                                                   t++;
                                                   value=$(this).val();
                                                   if(value=='' ||value==null){}
                                                   else{
                                                   if(t==1)
                                                   multipleques1=value;
                                                   else
                                                   multipleques1=multipleques1+"s8888"+value;
                                                   }
                                                   
                                                   })
    // alert(multipleques1)
	
    // $(ded).attr('mulval','asdfas')
	if(opttion1=='text'){
		multipleques1='';
	}
    // alert(multipleques1);
    
    
    $(ded).data('p_days',$('#Ep_daysid').val());
    $(ded).data('p_mins',$('#Ep_pintext').val());
    $(ded).data('p_hour',$('#Ep_hourtext').val());
	$(ded).data('mulval',multipleques1);
	$(ded).data('option', opttion1);
	$(ded).data("icon","check");
	
	$.mobile.changePage('#poll_datetime')
	$('#pollQeslistview').listview('refresh')
	
}

function hidemulti(){
	$('#multiplediveditshow').hide();
	$('#multiplediveditshow1').show();
}

function showmulti(){
	$('#multiplediveditshow').show();
	$('#multiplediveditshow1').hide();
	
	
}
function addmoreqaues(){
	$('#multipledivedit').append('<input type="text" >').trigger('create')
}


function postonfacebook() {
    var token= window.localStorage.getItem("accessToken");
	var text='I have created an event using effectiv. Check it out!'
	var url1= "http://effectiv.mobi/";
	var image="http://effectiv.mobi/item/521a94b9e4b09bd519e064fb?format=1500w";
	$.ajax({
           type: 'POST',
           url: "https://graph.facebook.com/me/feed",
           data: {
           message: text,
           picture: image,
           link: url1,
           access_token: token,
           format: "json"
           },
           success: function (data) {
           /*   navigator.notification.alert(
            'Thank you for sharing on Facebook.',
            function() {},
            'Thank you',
            'OK'
            );*/
           },
           error:function(error){
           //alert('error')
           },
           dataType: "json",
           // timeout: 1000
           });
}

function showPopup(){
    //  $('#popupdiv').show();
	$.mobile.changePage('#pluspage')
}
function showpopup(){
	
	if(curdetail==1){
		$( "#popupBasic" ).popup( "open" )
        //$( "#popupBasic" ).popup( "close" )
	}
	else{
		
		$.mobile.changePage('#pluspage')
	}
}

function closepopup(){
	$( "#popupBasic" ).popup( "close" )
}
function createevent(){
	$.mobile.changePage('#pluspage')
	$( "#popupBasic" ).popup( "close" )
    
	
}

function gotopollpage(){
	
	
}


function sendnotifiacion(){
    //alert('ok');
    //alert(FbkFriendsToInvite[0])
	for(var i=0;i<FbkFriendsToInvite.length;i++){
		url='https://graph.facebook.com/'+FbkFriendsToInvite[i]+'/notifications'
		var formData = {access_token:"485704721514222|72b634c9b1796f3deeec306ccf213bb1",href:"index.html",template:"have created an event using effectiv. Check it out!."}; //Array
		
		$.ajax({
               url : url,
               type: "POST",
               data : formData,
               success: function(data, textStatus, jqXHR)
               {
               //alert('success')
               console.log(data)
               console.log(textStatus)
               console.log(jqXHR)
               },
               error: function (jqXHR, textStatus, errorThrown)
               {
               console.log(jqXHR);
               console.log(textStatus)
               console.log(errorThrown)
               
               }
               });
		
	}
	
    //var to='';
	
}

var count_friend=-1;
var cancel_invite=0;
function post_toPage1() {
    //alert(FbkFriendsToInvite.length)
	var Name= localStorage.getItem('UName');
	
	
	var message1 = Name+"  created an event using effectiv. Check it out!.";
	var ContestImage = "http://effectiv.mobi/item/521a94b9e4b09bd519e064fb?format=1500w";
	var mylink = "http://effectiv.mobi/";
    //count_friend++;
    //    console.log(count_friend);
	
	
	count_friend++;
	var evtstdate = $('#startDate').val();
	var evtedate =$('#endDate').val();
    //	 var to = FbkFriendsToInvite[i];
	var redir_url = "http://effectiv.mobi/";
	var redir_url = "https://m.facebook.com/connect/login_success.html";
	var title = 'Invitation from Effectiv';
	var mylink= 'http://effectiv.mobi/';
	var ContestImage = 'http://effectiv.mobi/item/521a94b9e4b09bd519e064fb?format=1500w';
	var message=message1+"Venus Address : "+res_adds+" Start Date-Time : "+evtstdate+" End Date-Time : "+evtedate;
	var name = 'Effectiv Invitation';
	
    //console.log("Data"+message+mylink)
	var to = FbkFriendsToInvite[count_friend];
	
    //	 var fburl = "https://www.facebook.com/dialog/feed?%20app_id=485704721514222&to="+to+"&link="+encodeURIComponent(mylink)+"&picture="+encodeURIComponent(ContestImage)+"&name="+encodeURIComponent(name)+"&caption="+encodeURIComponent(title)+"&description="+encodeURIComponent(message)+"&redirect_uri="+encodeURIComponent(redir_url);
	
    //alert(count_friend)
    //alert(FbkFriendsToInvite.length)
	if (count_friend < FbkFriendsToInvite.length-1) {
		var url = "https://m.facebook.com/dialog/feed?app_id=485704721514222&to=" + to + "&link=" + mylink + "&picture=" + ContestImage + "&name=Invitation from effectiv&description=" + message + "&redirect_uri=" +redir_url
		window.plugins.childBrowser.showWebPage(encodeURI(url));
		window.plugins.childBrowser.onLocationChange = function (loc) {
			console.log(loc);
			if (loc == "https://m.facebook.com/connect/login_success.html%23_=_" || loc =="https://m.facebook.com/connect/login_success.html#_=_") {
				cancel_invite++;
				window.plugins.childBrowser.close();
				var t = setTimeout(function () {
                                   post_toPage1();
                                   }, 2000);
			}
			if (loc.indexOf("post_id") == -1) {} else {
				window.plugins.childBrowser.close();
				var t = setTimeout(function () {
                                   post_toPage1();
                                   }, 2000);
			}
		};
	}
}

function post_toPage2() {
	
	var Name= localStorage.getItem('UName');
	
	
	var message1 = Name+"  created an event using effectiv. Check it out!.";
	var ContestImage = "http://effectiv.mobi/item/521a94b9e4b09bd519e064fb?format=1500w";
	var mylink = "http://effectiv.mobi/";
    //count_friend++;
    //    console.log(count_friend);
	
	
	count_friend++;
	var evtstdate = $('#startDate').val();
	var evtedate =$('#endDate').val();
    //	 var to = FbkFriendsToInvite[i];
	var redir_url = "http://effectiv.mobi/";
	var title = 'Invitation from Effectiv';
	var mylink= 'http://effectiv.mobi/';
	var ContestImage = 'http://effectiv.mobi/item/521a94b9e4b09bd519e064fb?format=1500w';
	var message=message1+"Venus Address : "+res_adds+" Start Date-Time : "+evtstdate+" End Date-Time : "+evtedate;
	var name = 'Effectiv Invitation';
	
    //console.log("Data"+message+mylink)
	var to = FbkFriendsToInvite[count_friend];
	
    //	 var fburl = "https://www.facebook.com/dialog/feed?%20app_id=485704721514222&to="+to+"&link="+encodeURIComponent(mylink)+"&picture="+encodeURIComponent(ContestImage)+"&name="+encodeURIComponent(name)+"&caption="+encodeURIComponent(title)+"&description="+encodeURIComponent(message)+"&redirect_uri="+encodeURIComponent(redir_url);
	
	
	
	if (count_friend < FbkFriendsToInvite.length) {
		
		
		
        // var url3="https://www.facebook.com/dialog/send?app_id=123050457758183&link=http://www.nytimes.com/2011/06/15/arts/people-argue-just-to-win-scholars-assert.html&redirect_uri=https://www.bancsabadell.com/cs/Satellite/SabAtl/"
		
		var url = "https://www.facebook.com/dialog/send?app_id=485704721514222&to=" + to + "&link=" + mylink + "&redirect_uri=" +redir_url
		window.plugins.childBrowser.showWebPage(url);
		window.plugins.childBrowser.onLocationChange = function (loc) {
			console.log(loc);
			if (loc == "http://effectiv.mobi/%23_=_") {
				cancel_invite++;
				window.plugins.childBrowser.close();
				var t = setTimeout(function () {
                                   post_toPage1();
                                   }, 2000);
			}
			if (loc.indexOf("post_id") == -1) {} else {
				window.plugins.childBrowser.close();
				var t = setTimeout(function () {
                                   post_toPage1();
                                   }, 2000);
			}
		};
	}
}

function getPollquesToans(){
	
	$.mobile.showPageLoadingMsg();
	var GameScore = Parse.Object.extend("MulQuestion");
	var query = new Parse.Query(GameScore);
	query.equalTo("Qeventid", ev_objid);
	query.find({
               success: function(results) {
               var qhtml='';
               idarray1=[];
               tm1=0;
               html11='';
               obid=[];
               
               for (var i = 0; i < results.length; i++) {
               
               var object = results[i];
               var ques=object.get('mulquestion')
               if(object.get('qtype')=='multiple'){
               var ev_objid1=object.id;
               idarray1.push(ev_objid1)
               console.log('ok-----'+ev_objid1)
               // console.log(qhtml)
               }
               
               
               
               }
               
               getHtml1(idarray1[0])
               }
               
               });
	
	
	
	
	
}

function getHtml1(id){
	
	if(idarray1.length>0){
		tm1++
        //alertAnwserid)
		var GameScore = Parse.Object.extend("MulOptions");
		var query = new Parse.Query(GameScore);
		query.equalTo("MQuestionid", Anserides);
        query.ascending("createdAt");
		query.find({
                   success: function(results) {
                   //alert(results.length)
                   html11='';
                   //html11 +='<fieldset><input type="text" data-mid="'+Anserides+'" value="'+results[0].get('mulquestion')+'" readyonly="ture"></fieldset>'
                    html11 +='<div class="bar_graph1" id="mulq_a" data-mid="'+Anserides+'">'+results[0].get('mulquestion')+'</div>'
                   html11 += '<fieldset data-role="controlgroup" data-mini="true">'
                   for (var i = 0; i < results.length; i++) {
                   var object = results[i];
                   var ques=object.get('options')
                   var ids=object.id;
                   if(i==0){
                   html11 +='<input type="radio" name="poll'+tm1+'" id="'+ids+'" value="'+ques+'" checked="checked" />'
                   }
                   else{
                   html11 +='<input type="radio" name="poll'+tm1+'" id="'+ids+'" value="'+ques+'"  />'
                   }
                   
                   html11 +=' <label for="'+ids+'">'+ques+'</label>'
                   
                   }
                   html11 +='</fieldset>'
                   if(tm1<idarray.length){
                   getHtml1(idarray[tm1])
                   }
                   else{
                   $.mobile.hidePageLoadingMsg();
                   $('#Anwserid').html(html11).trigger('create')
                   //alert('sankar')
                   $.mobile.changePage('#pollAnwserpage');
                   
                   }
                   }
                   
                   });
	}
	else{
		$.mobile.hidePageLoadingMsg();
		$.mobile.changePage('#pollbargaphpage');
	}
	
	
}



function getPollques(){
	
    //ev_objid=$(event).data('obid');
	var GameScore = Parse.Object.extend("event");
	var query = new Parse.Query(GameScore);
	query.equalTo("objectId", ev_objid);
	query.find({
               success: function(results) {
               // Do something with the returned Parse.Object values
               for (var i = 0; i < results.length; i++) {
               var object = results[i];
               var venue=object.get('eVenue');
               
               var eDate=object.get('endDate');
               var sDate=object.get('startDate');
               var e_name=object.get('vEventName');
               var quesA=object.get('QuesArray');
               var quesOP=object.get('OptionArray');
               var qestext=object.get('QuesTarray');
               mulans1=object.get('mulAns');
               ansFriens=object.get('AnsedFnd');
               friendsarray1=object.get('friendId');
               
               var qhtml='';
               for(var j=1;j<quesA.length;j++){
               if(quesOP[j] !='text'){
               qhtml+='<fieldset><input type="text" data-mid="'+object.id+'" value="'+quesA[j]+'" readyonly="ture"></fieldset>'
               //
               // alert(qestext[j]);
               
               qhtml+= '<fieldset data-role="controlgroup" data-mini="true">'
               /*		  qhtml+=' <input type="radio" name="poll'+j+'" id="R-ans-y'+j+'" value="Yes" onclick="" checked="checked" />'
                qhtml+=' <label for="R-ans-y'+j+'">Yes</label>'
                qhtml+='<input type="radio" name="poll'+j+'" id="R-ans-n'+j+'" value="No" onclick="" />'
                qhtml+=' <label for="R-ans-n'+j+'">No</label>'
                */
               
               var mqc=qestext[j].split('s8888')
               
               for(k=0;k<mqc.length;k++){
               if(mqc[k] ==null || mqc[k] ==''){}
               else{
               console.log('---->' +mqc[k] )
               qhtml+='<input type="radio" name="poll'+j+'" id="R-ans-n'+j+k+'" value="'+mqc[k]+'" onclick="" />'
               qhtml+=' <label for="R-ans-n'+j+k+'">'+mqc[k]+'</label>'
               }
               
               }
               qhtml+=' </fieldset>'
               }
               }
               $('#Anwserid').html(qhtml).trigger('create')
               }
               $.mobile.changePage('#pollAnwserpage');
               },
               error: function(error) {
               alert("Error: " + error.code + " " + error.message);
               }
               });
	
	
	
}

function getPollques1(){
	
    //ev_objid=$(event).data('obid');
	var GameScore = Parse.Object.extend("event");
	var query = new Parse.Query(GameScore);
	query.equalTo("objectId", ev_objid);
	query.find({
               success: function(results) {
               // Do something with the returned Parse.Object values
               for (var i = 0; i < results.length; i++) {
               var object = results[i];
               var venue=object.get('eVenue');
               var eDate=object.get('endDate');
               var sDate=object.get('startDate');
               var e_name=object.get('vEventName');
               var quesA=object.get('QuesArray');
               var quesOP=object.get('OptionArray');
               var qestext=object.get('QuesTarray');
               console.log(quesA);
               //alert(quesA)
               var qhtml='';
               for(var j=1;j<quesA.length;j++){
               if(quesOP[j] !='text'){
               qhtml+='<fieldset><input type="text" value="'+quesA[j]+'" readyonly="ture"></fieldset>'
               //
               // alert(qestext[j]);
               
               qhtml+= '<fieldset data-role="controlgroup" data-mini="true">'
               /*		  qhtml+=' <input type="radio" name="poll'+j+'" id="R-ans-y'+j+'" value="Yes" onclick="" checked="checked" />'
                qhtml+=' <label for="R-ans-y'+j+'">Yes</label>'
                qhtml+='<input type="radio" name="poll'+j+'" id="R-ans-n'+j+'" value="No" onclick="" />'
                qhtml+=' <label for="R-ans-n'+j+'">No</label>'
                */
               
               var mqc=qestext[j].split('s8888')
               
               for(k=0;k<mqc.length;k++){
               if(mqc[k] ==null || mqc[k] ==''){}
               else{
               console.log('---->' +mqc[k] )
               qhtml+='<input type="radio" name="poll'+j+'" id="R-ans-n'+j+k+'" value="'+mqc[k]+'" onclick="" />'
               qhtml+=' <label for="R-ans-n'+j+k+'">'+mqc[k]+'</label>'
               }
               
               }
               qhtml+=' </fieldset>'
               }
               }
               $('#Anwserid').html(qhtml).trigger('create')
               }
               $.mobile.changePage('#pollAnwserpage');
               },
               error: function(error) {
               alert("Error: " + error.code + " " + error.message);
               }
               });
	
	
	
}




function getTextQest(){
    //ev_objid=$(event).data('obid');
	var GameScore = Parse.Object.extend("MulQuestion");
	var query = new Parse.Query(GameScore);
	query.equalTo("Qeventid", ev_objid);
	query.equalTo("qtype", 'text');
	query.find({
               success: function(results) {
               // Do something with the returned Parse.Object values
               var at=0;
               qhtml='';
               for (var i = 0; i < results.length; i++) {
               var object = results[i];
               var venue=object.get('mulquestion');
               at++;
               qhtml+='<li><a href="#" data-ids="'+object.id+'"  data-ques="'+venue+'" onclick="gettextDeatils(this)">'+venue+'</a></li>'
               }
               if(at!=0){
               $('#text-ans-list').html(qhtml).trigger('create')
               $.mobile.changePage('#pollAnwsertextqes');
               $('#text-ans-list').listview('refresh')
               }
               else{
               navigator.notification.confirm(
                                              'There are no text questions',  // message
                                              onAddtextOk,              // callback to invoke with index of button pressed
                                              'Alert',            // title
                                              'New,Cancel'          // buttonLabels
                                              );
               
               }
               },
               error: function(error) {
               alert("Error: " + error.code + " " + error.message);
               }
               });
	
	
	
	
}

function gettextDeatils(event){
    //detailquestiontextid
	textques_id=$(event).data('ids')
	var GameScore = Parse.Object.extend("TestQuesDetails");
	var query = new Parse.Query(GameScore);
	query.equalTo("Questionid", textques_id);
	query.find({
               success: function(results) {
               var html='';
               for(var i=0;i<results.length;i++){
               var imgsrc='https://graph.facebook.com/'+results[i].get('frinendsid')+'/picture?type=normal'
               html+='<li ><a href="#" style="white-space:normal; font-size: small"><img src="'+imgsrc+'"/>'+results[i].get('Answers')+'</a></li>';
               
               }
               $('#testquesanslist').html(html)
               $('#detailquestiontextid').val($(event).data('ques'));
               $('#answertextbox').val('')
               $.mobile.changePage('#TextQuesDetail')
               $('#testquesanslist').listview('refresh')
               }
               
               });
	
	
	
	
    //alert($(event).data('ids'))
	
}
function savetext_ans(){
	if($('#answertextbox').val()=='' || $('#answertextbox').val()==null){
		
		navigator.notification.alert('Please enter your answer')
	}
	else{
		var SavetextAns = Parse.Object.extend("TestQuesDetails");
		var savetextAns = new SavetextAns();
		savetextAns.set('Answers',$('#answertextbox').val())
		savetextAns.set('Questionid',textques_id);
		savetextAns.set('questions',	$('#detailquestiontextid').val());
		savetextAns.set('frinendsid',	window.localStorage.getItem('Fuserid'));
		savetextAns.save(null, {
                         success: function (savetextAns) {
                         $.mobile.hidePageLoadingMsg();
                         navigator.notification.alert('Your answer send successfully')
                         $.mobile.changePage('#pollAnwsertextqes')
                         
                         
                         }
                         })
		
    }
}

function onAddtextOk(btn){
	
	if(btn==1){
		CreateNewpoll();
	}
	
	
	
}

function getPollbargraph(){
	$.mobile.showPageLoadingMsg();
	var GameScore = Parse.Object.extend("MulQuestion");
	var query = new Parse.Query(GameScore);
	query.equalTo("Qeventid", ev_objid);
	query.find({
               success: function(results) {
               var qhtml='';
               idarray=[];
               tm=0;
               html1='';
               obid=[];
               obval=[];
               // alert('a')
               for (var i = 0; i < results.length; i++) {
               
               var object = results[i];
               var ques=object.get('mulquestion')
               if(object.get('qtype')=='multiple'){
               var ev_objid1=object.id;
               idarray.push(ev_objid1)
               
               // console.log(qhtml)
               }
               
               
               
               }
               
               getHtml(idarray[0])
               $( "#progressbar" ).progressbar({
                                               value:0
                                               });
               $( "#progressbar1" ).progressbar({
                                                value:0
                                                });
               }
               
               });
	
	
}

function getHtml(id){
	if(idarray.length>0){
		//alert('a1');
		tm++
		var GameScore = Parse.Object.extend("MulOptions");
		var query = new Parse.Query(GameScore);
		query.equalTo("MQuestionid", id);
		query.find({
                   success: function(results) {
                   
                   //html1 +='<div class="quality_main1"><div data-ides="'+id+'" onclick="getAnseredFnd(this)">'+results[0].get('mulquestion')+'</div></div>'
                   html1+='<div class="quality_main1"><a href="#" data-ides="'+id+'" onclick="getAnseredFnd(this)" data-role="button" data-iconpos="right" data-icon="arrow-r">'+results[0].get('mulquestion')+'</a></div>'
                   
                   for (var i = 0; i < results.length; i++) {
                   var object = results[i];
                   var ques=object.get('options')
                   
                   html1 +='<div class="quality_main1">'
                   html1 +='<div class="quality_left1">'+ques+'</div>'
                   var ids='progressbar'+object.id;
                   html1 +='<div class="quality_right1" ><div id="'+ids+'" style="height:20px; -webkit-border-radius: 0em; border-radius: 0em; margin-left:20px;"></div></div> </div>'
                   obid.push(ids)
                   //alert(friendsarray1.length)
                   var total_no=object.get('noofok')*100/friendsarray_bar.length;
                   obval.push(total_no)
                   console.log(obval)
                   }
                   if(tm<idarray.length){
                   getHtml(idarray[tm])
                   }
                   else{
                   //alert('a3')
                   $.mobile.hidePageLoadingMsg();
                   $('#dynamicans').html(html1).trigger('create')
                   // alert('1')
                   $.mobile.changePage('#pollbargaphpage');
                   for(var k2=0;k2<obid.length;k2++){
                   $( '#'+obid[k2]).progressbar({
                                                value: obval[k2]
                                                });
                   }
                   }
                   }
                   
                   });
	}
	else{
		$.mobile.hidePageLoadingMsg();
		//alert('2')
		$.mobile.changePage('#pollbargaphpage');
	}
}




function savepollAns(){
    //alert('ok')
	var f_userid=window.localStorage.getItem('Fuserid')
	console.log('---->'+Euserid)
	console.log('---->'+window.localStorage.getItem('localusername'))
	
	var ff_userid=parseInt(f_userid)
	if(Euserid==window.localStorage.getItem('localusername')){
		navigator.notification.alert('You cannot answer because you created the event.')
		$.mobile.changePage('#CurrentDetailpage')
	}
	else if(friendsarray1.indexOf(ff_userid)==-1){
		navigator.notification.alert('You are not invited for this event')
		$.mobile.changePage('#CurrentDetailpage')
		
	}
	else{
        mulQuestionobject='';
		
		
        mulQuestionobject=$('#mulq_a').data('mid');
         alert(mulQuestionobject);
		var	MulQuestion=Parse.Object.extend("MulQuestion");
        var mulQuestion = new MulQuestion();
        mulQuestion.id = mulQuestionobject;
        var mulquery = new Parse.Query(MulQuestion);
        mulquery.equalTo("objectId", mulQuestionobject);
        mulquery.find({
                      success: function(res) {
                      //alert(res[0].get('mulquestion'));
                      //res[0].get(ansfnd);
                      if(res[0].get('ansfnd') !=undefined){
                      var ansfid= res[0].get('ansfnd');
                      if(ansfid.indexOf(window.localStorage.getItem('Fuserid'))==-1){
                      var aarry=ansfid;
                      aarry.push(window.localStorage.getItem('Fuserid'))
                      ansPoll(mulQuestion,aarry);
                      }
                      else{
                      navigator.notification.alert('you have already Answered');
                      }
                      }
                      else{
                      
                      var aarry=[];
                      aarry.push(window.localStorage.getItem('Fuserid'))
                      
                      ansPoll(mulQuestion,aarry);
                      }
                      }
                      
                      
                      });
        
        
    }
}


function ansPoll(mulQuestion,aarry){
    var mulq=''
 /*   $('input[type=text]', '#Anwserid').each(function() {
                                            mulq=$(this).val();
                                            });
                                            */
    mulq=$('#mulq_a').text();
	//alert(mulq)
	mulQuestion.set('ansfnd',aarry);
	mulQuestion.save();
	var EventGameScore = Parse.Object.extend("event");
	var eventgameScore = new EventGameScore();
	eventgameScore.id = ev_objid;
	var eventquery = new Parse.Query(EventGameScore);
	eventquery.equalTo("objectId", ev_objid);
	eventquery.find({
                    success: function(results2) {
                    if(results2[0].get('AnsedFnd') ==undefined){
                    // alert('here')
                    var f_userid=window.localStorage.getItem('Fuserid')
                    var farray=[];
                    
                    
                    farray.push(f_userid)
                    eventgameScore.set('AnsedFnd',farray)
                    eventgameScore.save();
                    $('input[type=radio]', '#Anwserid').each(function() {
                                                             if($(this).is(':checked')){
                                                             //  alert($(this).attr('id'))
                                                             var GameScore = Parse.Object.extend("MulOptions");
                                                             var gameScore = new GameScore();
                                                             gameScore.id = $(this).attr('id');
                                                             var query = new Parse.Query(GameScore);
                                                             query.equalTo("objectId", $(this).attr('id'));
                                                             query.find({
                                                                        success: function(results) {
                                                                        var invitedfrnd=results2[0].get('friendId');
                                                                        var options=results[0].get('options');
                                                                        var mul_quesid=results[0].get('MQuestionid');
                                                                        // var mqid=
                                                                        if(invitedfrnd.length==aarry.length){
                                                                        sendnotificationAllAnsred(results2[0].get('vEventName'));
                                                                        }
                                                                        if(results[0].get('noofok')  !=undefined){
                                                                        //	 console.log(''results[0].get('noofok'))
                                                                        var answeredfnd=results[0].get('answerefriends');
                                                                        var answeredfnd1=[];
                                                                        var f_userid1=window.localStorage.getItem('Fuserid');
                                                                        var answeredfnd=results[0].get('answerefriends');
                                                                        if(answeredfnd !=undefined){
                                                                        answeredfnd1=answeredfnd;
                                                                        answeredfnd1.push(f_userid1)
                                                                        }
                                                                        else{
                                                                        
                                                                        answeredfnd1.push(f_userid1)
                                                                        }
                                                                        
                                                                        //	alert('--1--'+answeredfnd)
                                                                        gameScore.set("answerefriends", answeredfnd);
                                                                        var no_ok=results[0].get('noofok') +1;
                                                                        gameScore.set("noofok", no_ok);
                                                                        
                                                                        gameScore.save();
                                                                        var options=results[0].get('options')
                                                                        var eDay=results[0].get('expday')
                                                                        var eHour=results[0].get('exphour')
                                                                        var eMin=results[0].get('expmin')
                                                                        var exparray=[];
                                                                        exparray.push(eDay)
                                                                        exparray.push(eHour)
                                                                        exparray.push(eMin)
                                                                        sendNotifiactionPoll(mulq,options,exparray,mul_quesid);
                                                                        
                                                                        }
                                                                        else{
                                                                        var answeredfnd1=[];
                                                                        var f_userid1=window.localStorage.getItem('Fuserid');
                                                                        var answeredfnd=results[0].get('answerefriends');
                                                                        if(answeredfnd !=undefined){
                                                                        answeredfnd1=answeredfnd;
                                                                        answeredfnd1.push(f_userid1)
                                                                        }
                                                                        else{
                                                                        
                                                                        answeredfnd1.push(f_userid1)
                                                                        }
                                                                        
                                                                        //answeredfnd1.push(f_userid1)
                                                                        //alert('--2-'+answeredfnd1)
                                                                        gameScore.set("answerefriends", answeredfnd1);
                                                                        gameScore.set("noofok", 1);
                                                                        gameScore.save();
                                                                        var options=results[0].get('options')
                                                                        var eDay=results[0].get('expday')
                                                                        var eHour=results[0].get('exphour')
                                                                        var eMin=results[0].get('expmin')
                                                                        var exparray=[];
                                                                        exparray.push(eDay)
                                                                        exparray.push(eHour)
                                                                        exparray.push(eMin)
                                                                        sendNotifiactionPoll(mulq,options,exparray,mul_quesid);
                                                                        
                                                                        }
                                                                        }
                                                                        });
                                                             
                                                             }
                                                             
                                                             
                                                             
                                                             })//end for each
                    navigator.notification.alert('Your answered send succussfully');
                    $.mobile.changePage('#CurrentDetailpage')
                    }
                    else{
                    //alert('here2')
                    var farray1=results2[0].get('AnsedFnd')
                    //if(farray1.indexOf(window.localStorage.getItem('Fuserid')) !=-1){
                    if(3>5){
                    alert('You have already answered')
                    $.mobile.changePage('#CurrentDetailpage')
                    // alert('here2')
                    }
                    else{
                    //alert('here3')
                    
                    var invitedfrnd=results2[0].get('friendId');
                    if(invitedfrnd.length==aarry.length){
                    sendnotificationAllAnsred(results2[0].get('vEventName'));
                    }
                    farray1.push(window.localStorage.getItem('Fuserid'))
                    eventgameScore.set('AnsedFnd',farray1)
                    eventgameScore.save();
                    $('input[type=radio]', '#Anwserid').each(function() {
                                                             if($(this).is(':checked')){
                                                             //  alert($(this).attr('id'))
                                                             var GameScore = Parse.Object.extend("MulOptions");
                                                             var gameScore = new GameScore();
                                                             gameScore.id = $(this).attr('id');
                                                             var query = new Parse.Query(GameScore);
                                                             query.equalTo("objectId", $(this).attr('id'));
                                                             query.find({
                                                                        success: function(results) {
                                                                        // Do something with the returned Parse.Object values
                                                                        //	console.log(results[0].get('options'))
                                                                        var mul_quesid=results[0].get('MQuestionid');
                                                                        if(results[0].get('noofok')  !=undefined){
                                                                        //	 console.log(''results[0].get('noofok'))
                                                                        var answeredfnd=results[0].get('answerefriends');
                                                                        var answeredfnd1=[];
                                                                        var f_userid1=window.localStorage.getItem('Fuserid');
                                                                        var answeredfnd=results[0].get('answerefriends');
                                                                        if(answeredfnd !=undefined){
                                                                        answeredfnd1=answeredfnd;
                                                                        answeredfnd1.push(f_userid1)
                                                                        }
                                                                        else{
                                                                        
                                                                        answeredfnd1.push(f_userid1)
                                                                        }
                                                                        
                                                                        
                                                                        //alert('--3--'+answeredfnd)
                                                                        gameScore.set("answerefriends", answeredfnd);
                                                                        var no_ok=results[0].get('noofok') +1;
                                                                        gameScore.set("noofok", no_ok);
                                                                        gameScore.save();
                                                                        var options=results[0].get('options')
                                                                        
                                                                        var eDay=results[0].get('expday')
                                                                        var eHour=results[0].get('exphour')
                                                                        var eMin=results[0].get('expmin')
                                                                        var exparray=[];
                                                                        exparray.push(eDay)
                                                                        exparray.push(eHour)
                                                                        exparray.push(eMin)
                                                                        sendNotifiactionPoll(mulq,options,exparray,mul_quesid);																							  //	sendNotifiactionPoll();
                                                                        }
                                                                        else{
                                                                        //	var answeredfnd=results[0].get('answerefriends');
                                                                        var answeredfnd1=[];
                                                                        var answeredfnd1=[];
                                                                        var f_userid1=window.localStorage.getItem('Fuserid');
                                                                        var answeredfnd=results[0].get('answerefriends');
                                                                        //	alert('--40-'+answeredfnd)
                                                                        if(answeredfnd !=undefined){
                                                                        answeredfnd1=answeredfnd;
                                                                        answeredfnd1.push(f_userid1)
                                                                        }
                                                                        else{
                                                                        
                                                                        answeredfnd1.push(f_userid1)
                                                                        }
                                                                        
                                                                        
                                                                        //alert('--4-'+answeredfnd1)
                                                                        gameScore.set("answerefriends", answeredfnd1);
                                                                        gameScore.set("noofok", 1);
                                                                        gameScore.save();
                                                                        var options=results[0].get('options')
                                                                        var eDay=results[0].get('expday')
                                                                        var eHour=results[0].get('exphour')
                                                                        var eMin=results[0].get('expmin')
                                                                        var exparray=[];
                                                                        exparray.push(eDay)
                                                                        exparray.push(eHour)
                                                                        exparray.push(eMin)
                                                                        sendNotifiactionPoll(mulq,options,exparray,mul_quesid);																							  
                                                                        }
                                                                        }
                                                                        });
                                                             
                                                             }
                                                             
                                                             
                                                             
                                                             })//end for each
                    navigator.notification.alert('Your answered send succussfully');
                    $.mobile.changePage('#CurrentDetailpage')
                    
                    }
                    
                    
                    }
                    
                    
                    }
                    
                    })
	
    
    
}

function geto(){
	var Post = Parse.Object.extend("MulQuestion");
	var Comment = Parse.Object.extend("MulOptions");
    //var Comment1 = Parse.Object.extend("Comment1");
	var query = new Parse.Query(Comment);
	var post = new Post();
    //post.id = "OQmTVuP6KM";
	query.equalTo("objectId", post);
	
    //query.doesNotMatchQuery("post", innerQuery);
	query.find({
               success: function(Comment) {
               console.log(Comment)
               //   alert('ok')
               // comments now contains the comments for posts without images.
               }
               });
	
	
}


function getAnseredFnd(id){
    //alert($(id).data('ides'))
	var MulOptions1 = Parse.Object.extend("MulOptions");
	var query = new Parse.Query(MulOptions1);
    //var post = new Post();
    //	MulOptions1.id = "OQmTVuP6KM";
	query.equalTo("MQuestionid", $(id).data('ides'));
	
    //query.doesNotMatchQuery("post", innerQuery);
	query.find({
               success: function(Comment) {
               var html='';
               for(var i=0;i<Comment.length;i++){
               html+='<p>'+Comment[i].get('options')+'</p>';
               var ans_fnd=Comment[i].get('answerefriends');
               //ss  console.log(ans_fnd)
               if(ans_fnd !=undefined){
               for(var j=0;j<ans_fnd.length;j++){
               console.log(ans_fnd[j])
               html+='<img src="https://graph.facebook.com/'+ans_fnd[j]+'/picture?type=normal" heigth="40px" width="40px"/>'
               }
               }
               
               }
               $('#answeredcontainid').html(html);
               $.mobile.changePage('#mulAnswerFnd')
               
               },
               error:function(){
               alert('error occured')
               }
               });
	
}


function getpollquestions(){
	var MulQuestion = Parse.Object.extend("MulQuestion");
	var query = new Parse.Query(MulQuestion);
	query.ascending("createdAt");
	query.equalTo("Qeventid",ev_objid);
	query.find({
               success: function(result) {
               testhtml='';
               multiplehtml=''
               for(var i=0;i<result.length;i++){
               var ob_id=result[i].id;
               var questions=result[i].get('mulquestion')
               if(result[i].get('qtype')=='text'){
               testhtml+='<li onclick="GetTxtQues(this)" data-ides="'+ob_id+'" data-txtques="'+questions+'"><a href="#">'+questions+'</a></li>'
               }
               else if(result[i].get('qtype')=='multiple'){
               multiplehtml+='<li  onclick="GetMulQues(this)" data-ides="'+ob_id+'"><a href="#">'+questions+'</a></li>'
               }
               }
	           $('#mulquestionsid').html(multiplehtml).trigger('create')
               $('#testquestionsid').html(testhtml).trigger('create')
	           $.mobile.changePage('#Questionlistpage')
               $('#mulquestionsid').listview('refresh')
               $('#testquestionsid').listview('refresh')
               
               },
               error:function (error){
               
               }
               
               });
	
}

/*
 function GetMulQues(event){
 var id=$(event).data('ides');
 Anserides=id;
 var MulQuestion = Parse.Object.extend("MulOptions");
 var query = new Parse.Query(MulQuestion);
 query.equalTo("MQuestionid",id);
 query.find({
 success: function(result) {
 // alert(result.length)
 var htm=''
 htm +='<fieldset><input type="text" value="'+result[0].get('mulquestion')+'" readyonly="true"></fieldset>'
 //  htm += '<fieldset data-role="controlgroup" data-mini="true">'
 for(var i=0;i<result.length;i++){
 var ques=result[i].get('options')
 var ids='poll1'+i;
 //  htm +='<input type="radio" name="poll" id="'+ids+'" value="'+ques+'" checked="checked" />'
 //  htm +=' <label for="'+ids+'">'+ques+'</label>'
 }
 //  htm +='</fieldset>'
 $('#mul-quesans').html(htm).trigger('create');
 $.mobile.changePage('#M_QuesDetail')
 },
 error:function(error){
 
 }
 
 });
 
 
 }
 */

function GetMulQues(event){
	var id=$(event).data('ides');
	Anserides=id;
	var GameScore = Parse.Object.extend("MulOptions");
	var query = new Parse.Query(GameScore);
    query.ascending("createdAt");
	query.equalTo("MQuestionid", id);
	query.find({
               success: function(results) {
               $('#dynamicans').html('');
               var  html1=''
               obval=[];
               obid=[];
            //   html1 +='<div class="quality_main1"><fieldset><input type="text" value="'+results[0].get('mulquestion')+'"  data-ides="'+id+'" readyonly="ture" onclick="getAnseredFndasfas(this)"></fieldset></div>'
                html1 +='<div class="bar_graph1">'+results[0].get('mulquestion')+'</div>'
               for (var i = 0; i < results.length; i++) {
               var object = results[i];
               var ques=object.get('options')
               var ans_fnds=object.get('answerefriends')
               // alert(ans_fnds)
               // html1+='<div class="bar_graph">'
               html1 +='<div class="quality_main1">'
               html1 +='<div class="quality_left1"></div>'
               var ids='progressbar'+object.id;
               html1 +='<div class="quality_right1" >'+ques+'</div> </div>'
               // obid.push(ids)
               html1 +='<div class="quality_main1">'
               html1 +='<div class="quality_left1"></div>'
               //var ids='progressbar'+object.id;
               html1 +='<div class="quality_right1" ><div id="'+ids+'" style="height:20px; -webkit-border-radius: 0em; border-radius: 0em;"></div></div> </div>'
               obid.push(ids)
               // var htm2='';
               html1 +='<div class="quality_main1">'
               html1 +='<div class="quality_left1"></div>'
               html1 +='<div class="quality_right1" >'
               if(ans_fnds  !=undefined){
               for(var k=0;k<ans_fnds.length;k++){
               //  console.log(ans_fnds[k])
               // if( window.localStorage.getItem('Fuserid') != ans_fnds[k]){
               
               html1 +='<img src="https://graph.facebook.com/'+ans_fnds[k]+'/picture?type=small" style="width:30px; height:30px; padding-left:2%" heigth="30px" width="30px"/>'
               
               //}
               }
               }
               html1 +='</div></div>'
               var av= localStorage.getItem('fnd');
               var total_no=object.get('noofok')*100/friendsarray_bar.length;
               obval.push(total_no)
               console.log(obval)
               }
               // var a=[];
               // alert(total_no);
               //alert(av.length);
               // alert(localStorage.setItem('fnd',friendsarray_bar););
               $.mobile.hidePageLoadingMsg();
               $('#dynamicans').html(html1).trigger('create')
               //alert('3ss')
               //alert(friendsarray1.length);
               $.mobile.changePage('#pollbargaphpage');
               for(var k2=0;k2<obid.length;k2++){
               console.log(obid[k2])
               console.log(obval[k2])
               $( '#'+obid[k2]).progressbar({
                                            value: obval[k2]
                                            });
               
               }
               //$.mobile.hidePageLoadingMsg();
               //$.mobile.changePage('#pollbargaphpage');
               }
               
               });
	
}





function GetMulQues1(){
	var id=Anserides;
	var MulQuestion = Parse.Object.extend("MulOptions");
	var query = new Parse.Query(MulQuestion);
	query.equalTo("MQuestionid",id);
	query.find({
               success: function(result) {
               // alert(result.length)
               var htm=''
               htm +='<fieldset><input type="text" value="'+result[0].get('mulquestion')+'" readyonly="true"></fieldset>'
               htm += '<fieldset data-role="controlgroup" data-mini="true">'
               for(var i=0;i<result.length;i++){
               var ques=result[i].get('options')
               var ids='poll1'+i;
               htm +='<input type="radio" name="poll" id="'+ids+'" data-ides="'+result[i].id+'" value="'+ques+'" checked="checked" />'
               htm +=' <label for="'+ids+'">'+ques+'</label>'
               }
               htm +='</fieldset>'
               $('#ans-mul-ques').html(htm).trigger('create');
               $.mobile.changePage('#Ansmulquespage')
               },
               error:function(error){
               
               }
               
               });
	
	
}

function saveansers(){
	
	/*if(Euserid==window.localStorage.getItem('localusername')){
	 navigator.notification.alert('You cannot answer because you created the event.')
	 $.mobile.changePage('#main')
	 }
	 else{
	 
	 }*/
	
	var GameScore = Parse.Object.extend("MulQuestion");
	var gameScore = new GameScore();
	gameScore.id = Anserides
	var query = new Parse.Query(GameScore);
	query.equalTo("objectId",Anserides);
	query.find({
               success: function(results) {
               var arrey=[];
               if(results[0].get('ansfnd')==undefined){
               arrey.push(window.localStorage.getItem('Fuserid'))
               // alert('not ok');
               }
               else{
               arrey= results[0].get('ansfnd')
               arrey.push(window.localStorage.getItem('Fuserid'))
               //alert('ok');
               }
               
               gameScore.set("ansfnd", arrey);
               gameScore.save();
               $.mobile.changePage('#CurrentDetailpage');
               navigator.notification.alert('Your answere send successfully')
               // Do something with the returned Parse.Object values
               /*
                alert('--3--'+answeredfnd)
                gameScore.set("answerefriends", answeredfnd);
                var no_ok=results[0].get('noofok') +1;
                gameScore.set("noofok", no_ok);
                gameScore.save();
                }
                */
               }
               });
	
}


function GetTxtQues(event){
	var qus=$(event).data('txtques');
	tq=qus;
	var id=$(event).data('ides');
	Anserides=id;
	var MulQuestion = Parse.Object.extend("TestQuesDetails");
	var query = new Parse.Query(MulQuestion);
	query.equalTo("Questionid",id);
	query.find({
               success: function(result) {
               //alert(result.length)
               if(result.length==0){
               var htm='<fieldset style="padding-bottom:5%;"><input type="text" value="'+qus+'" readyonly="true"></fieldset>'
               //alert('ok')
               $('#Testques').html(htm).trigger('create');
               $.mobile.changePage('#T_QuesDetail')
               }
               else{
               var fnds=''
               var ans='';
               for(var i=0;i<result.length;i++){
               var htm=''
               var htms='';
               htm +='<fieldset style="padding-bottom:5%;"><input type="text" value="'+result[0].get('questions')+'" readyonly="true"></fieldset>'
               //if(result[i].get('frinendsid')!= window.localStorage.getItem('Fuserid')){
               htms='<img src="https://graph.facebook.com/'+result[i].get('frinendsid')+'/picture?type=normal" />'
               // }
               // else{
               //  htmls='';
               // }
               
               ans+='<li  data-icon="false"><a href="#" style="white-space: normal;">'+htms+result[i].get('Answers')+'</a></li>'
               
               }
               /*  if(result[0].get('ansfnd')  !=undefined){
                var af=result[0].get('ansfnd');
                for (var i=0;i<af.length;i++){
                htm+='<img src="https://graph.facebook.com/'+af[i]+'/picture?type=normal" />'
                }
                }*/
               //}//end for
               //  htm += '<fieldset data-role="controlgroup" data-mini="true">'
               //  for(var i=0;i<result.length;i++){
               //  var ques=result[i].get('options')
               //  var ids='poll1'+i;
               //  htm +='<input type="radio" name="poll" id="'+ids+'" value="'+ques+'" checked="checked" />'
               //  htm +=' <label for="'+ids+'">'+ques+'</label>'
               // }
               //  htm +='</fieldset>'
               $('#Testques').html(htm).trigger('create');
               $('#imageid').html(fnds).trigger('create')
               $('#listviw_ans').html(ans).trigger('create')
               $.mobile.changePage('#T_QuesDetail')
               $('#listviw_ans').listview('refresh')
               }
               // $('#Testques').html(htm).trigger('create');
               
               },
               error:function(error){
               
               }
               
               });
	
	
	
}


function givetextans(){
	
	$('#txtques').val(tq)
	$('#txtans').val('');
	$.mobile.changePage('#T_giveans')
	
}

function sendans(){
	
	if($('#txtans').val()==null || $('#txtans').val()==''){
		navigator.notification.alert('Please write your answer')
	}
	else{// Anserides=id;
        
        var MulQuestionmain = Parse.Object.extend("MulQuestion");
        var query1 = new Parse.Query(MulQuestionmain);
        query1.equalTo("objectId",Anserides);
        query1.find({
                    success: function(resultmain) {
                    
                    //  alert(resultmain[0].get('expDay'));
                    
                    var MulQuestion = Parse.Object.extend("TestQuesDetails");
                    var gameScore = new MulQuestion();
                    //var gameScore1 = new MulQuestion();
                    gameScore.set('Answers',$('#txtans').val());
                    gameScore.set("Questionid",Anserides)
                    gameScore.set("frinendsid",window.localStorage.getItem('Fuserid'))
                    gameScore.set("questions",tq);
                    gameScore.save(null, {
                                   success: function (gameScore) {
                                   sendNotifiactionTextQues($('#txtques').val(),$('#txtans').val())
                                   navigator.notification.alert('Your answer Send successfully')
                                   
                                   $.mobile.changePage('#CurrentDetailpage');
                                   $.mobile.hidePageLoadingMsg();
                                   },
                                   error:function (error){
                                   alert('error')
                                   }
                                   });
                    
                    }//end main success
                    });//end main query
	}//end else
}



function deleteRecord(){
    //alert('ok')
	var GameScore = Parse.Object.extend("DeviceReg");
	var gameScore = new GameScore();
	gameScore.id ='uIaUSeNEI6'
	gameScore.destroy({
                      success:function(myobj){
                      alert('suc')
                      },
                      error:function(error){
                      alert('error')
                      }
                      
                      
                      });
	
}


function deleteEvent(){
	
	if(localStorage.getItem('localusername')==Euserid){
        //alert(ev_objid)
		navigator.notification.confirm(
                                       'Are you sure to Delete ?',  // message
                                       ondelConfirm,              // callback to invoke with index of button pressed
                                       'Alert',            // title
                                       'Yes,No'          // buttonLabels
                                       );
	}
	else{
		
		navigator.notification.alert('You cannot delete this event')
		
	}
	
	
}


function ondelConfirm(button){
	
	if(button==1){
		var GameScore = Parse.Object.extend("event");
		var gameScore = new GameScore();
		gameScore.id =ev_objid
		gameScore.destroy({
                          success:function(myobj){
                          navigator.notification.alert('Event is deleted')
                          getCurrentdata();
                          sendNotifiactionDeleteEvent();
                          getdeloptiondata(ev_objid)
                          DelMuldata();
                          DelInvtiedfnd();
                          //alert('suc')
                          },
                          error:function(error){
                          navigator.notification.alert('error')
                          }
                          
                          
                          });
		
		
	}
	else{
        //alert('no')
	}
	
	
}

function getdeloptiondata(ab){
	
	var GameScore = Parse.Object.extend("MulOptions");
	var gameScore = new GameScore();
	gameScore.Qeventid =ev_objid
	var query = new Parse.Query(GameScore);
	query.equalTo("Qeventid", ev_objid);
	query.find({
               success: function(results) {
               console.log(results.length)
               for(var i=0;i<results.length;i++){
               var GameScore1 = Parse.Object.extend("MulOptions");
               var gameScore1 = new GameScore1();
               gameScore1.id =results[i].id
               gameScore1.destroy({
                                  success:function(myobj){
                                  console.log('option is deleted')
                                  //getCurrentdata();
                                  // getdeloptiondata(ev_objid)
                                  //alert('suc')
                                  },
                                  error:function(error){
                                  navigator.notification.alert('error')
                                  }
                                  
                                  
                                  });
               }//end for
               },
               error:function(error){
               navigator.notification.alert('error')
               }
               
               
               });
	
	
}
function DelInvtiedfnd(){
    var GameScore = Parse.Object.extend("EnvitedFriends");
	var gameScore = new GameScore();
	gameScore.Eventid =ev_objid
	var query = new Parse.Query(GameScore);
	query.equalTo("Eventid", ev_objid);
	query.find({
               success: function(results) {
               console.log(results.length)
               for(var i=0;i<results.length;i++){
               var GameScore1 = Parse.Object.extend("EnvitedFriends");
               var gameScore1 = new GameScore1();
               gameScore1.id =results[i].id
               gameScore1.destroy({
                                  success:function(myobj){
                                  console.log('fnd is deleted')
                                  //getCurrentdata();
                                  // getdeloptiondata(ev_objid)
                                  //alert('suc')
                                  },
                                  error:function(error){
                                  navigator.notification.alert('error')
                                  }
                                  
                                  
                                  });
               }//end for
               },
               error:function(error){
               navigator.notification.alert('error')
               }
               
               
               });
    
}

function DelMuldata(){
	
	var GameScore = Parse.Object.extend("MulQuestion");
	var gameScore = new GameScore();
	gameScore.Qeventid =ev_objid
	var query = new Parse.Query(GameScore);
	query.equalTo("Qeventid", ev_objid);
	query.find({
               success: function(results) {
               console.log(results.length)
               for(var i=0;i<results.length;i++){
               var GameScore1 = Parse.Object.extend("MulQuestion");
               var gameScore1 = new GameScore1();
               gameScore1.id =results[i].id
               gameScore1.destroy({
                                  success:function(myobj){
                                  console.log('option is deleted')
                                  //getCurrentdata();
                                  // getdeloptiondata(ev_objid)
                                  //alert('suc')
                                  },
                                  error:function(error){
                                  navigator.notification.alert('error')
                                  }
                                  
                                  
                                  });
               }//end for
               },
               error:function(error){
               //navigator.notification.alert('error')
               }
               
               
               });
	
	
}

//['<div class="info_content"><img src="https://graph.facebook.com/100001905072366/picture?type=normal" heigth="30px" width="30px"/></div>'],

function showeventmap(){
    //alert('ok')
	$.mobile.showPageLoadingMsg("a", "Please wait ...");
	var Event_getfnd = Parse.Object.extend("event");
	var query = new Parse.Query(Event_getfnd);
	query.equalTo("objectId",ev_objid);
	query.find({
               success: function(result) {
               friendarray_geo=result[0].get('friendId')
               markers1=[];
               info_content1=[];
               index=0;
               var fid=friendarray_geo[0].toString();
               var Event_getuser = Parse.Object.extend("User");
               var query1 = new Parse.Query(Event_getuser);
               query1.equalTo("Facebookid",fid);
               query1.find({
                           success:function(res){
                           index++;
                           var arr1=[];
                           var arr2=[];
                           arr2.push('<div class="info_content"><p>'+m_adds+'</p></div>')
                           arr1.push('test');
                           arr1.push(parseFloat(m_lat));
                           arr1.push(parseFloat(m_long));
                           markers1[0]=arr1;
                           info_content1[0]=arr2;
                           if(res.length>0){
                           markers1[1]=[];
                           var innerarr=[];
                           var innerarr1=[];
                           if(res[0].get('lat') !=undefined){
                           innerarr.push("item1");
                           innerarr.push(res[0].get('lat'));
                           innerarr.push(res[0].get('long'));
                           innerarr1.push('<div class="info_content"><img src="https://graph.facebook.com/'+fid+'/picture?type=normal"></div>')
                           markers1[1]=innerarr;
                           info_content1[1]=innerarr1;
                           //  alert(res[0].get('lat'));
                           //  alert(res[0].get('long'));
                           console.log(markers1)
                           }
                           getmoreData();
                           }
                           else{
                           getmoreData();
                           }
                           }
                           })
               }
               });
	
    //$.mobile.changePage('#Eventmappage')
}


function getmoreData(){
	if(friendarray_geo.length>index){
		
		var fid=friendarray_geo[index].toString();
		var Event_getuser = Parse.Object.extend("User");
		var query1 = new Parse.Query(Event_getuser);
		query1.equalTo("Facebookid",fid);
		query1.find({
                    success:function(res){
                    index++;
                    if(res.length>0){
                    if(res[0].get('lat') !=undefined){
                    var innerarr=[];
                    var innerarr1=[];
                    innerarr.push("item1");
                    innerarr.push(res[0].get('lat'));
                    innerarr.push(res[0].get('long'));
                    markers1[markers1.length]=innerarr;
                    innerarr1.push('<div class="info_content"><img src="https://graph.facebook.com/'+fid+'/picture?type=normal" /></div>')
                    
                    info_content1[info_content1.length]=innerarr1;
                    }
                    //  alert(res[0].get('lat'));
                    //  alert(res[0].get('long'));
                    console.log(markers1)
                    console.log(info_content1)
                    getmoreData();
                    }
                    else{
                    getmoreData();
                    }
                    }
                    })
		
	}
	else{
		$.mobile.hidePageLoadingMsg();
		console.log('===='+m_lat)
        //setTimeout(getit(),1000)
		$.mobile.changePage('#Eventmappage')
	}
	
}

function getit(){
	$.mobile.changePage('#Eventmappage')
}

function LogOut(event){
    //window.plugins.childBrowser.LogOut();
    //alert('ok')
	
	console.log($(event).val());
	
	window.localStorage.setItem('startDate', '');
	window.localStorage.setItem('endDate', '');
    window.localStorage.setItem('pstartDate', '');
	window.localStorage.setItem('pendDate', '');
	window.localStorage.setItem('pstartTime', '');
	window.localStorage.setItem('pendTime', '');
	localStorage.setItem('local_facebook','')
	window.localStorage.setItem("user_name",'');
	window.localStorage.setItem('UName','');
	window.localStorage.setItem('Fuserid','');
	localStorage.setItem('localusername','');
	localStorage.setItem('login','facebook');
	localStorage.setItem('localusername','');
    //localStorage.setItem('login','facebook');
	
	/*
	 
	 $("#myPage").live("pageshow", function () {
	 var flag = "yes"
	 if ((flag != null) && (flag != undefined)) {
     if (isTrackSet == "no") {
	 $("#optionSlider", "#myPage").val("no");
     } else {
	 $("#optionSlider", "#myPage").val("yes");
     }
	 }
	 }
	 
	 */
	
	
	eventid='';
	timezone='';
	flogin = 0;
	cur_user = '';
	spend_money = '';
	cur_lat = '23.03360797';
	cur_lang = '72.5591448';
	m_lat='';
    m_long='';
    m_adds='';
    //var cur_lat = null;
    //var cur_lang = null;
	nav = null;
	res_lat = null;
	res_long = null;
	venuelat=null;
	venulong=null;
	res_adds = '';
	eventname = '';
	media_type = 'Private';
	media_type1 = '';
	twitterFriendsToInvite = [];
	client_Parse_id = 'H3NMSYUEWMP23ZB4O3DB5O0ZXFFD13WZIPQF0XFGUJVP54XN';
	client_secret_id = '0Z3MPDDDHZWR031JCH1BJE3DVK1V2SDKA4SZWOLV2JN14ZM2';
	verson1 = '';
	privateMem = [];
	facebookfndArray = [];
	addressfndArray =[];
	twitterfndArray = [];
	count_friend = -1;
	cancel_invite = 0;
	a = 0;
	curdetail=0;
	ev_objid='';
	tipsarray = [];
	tips = 0;
	FbkFriendsToInvite = [];
	FbkNameToInvite = [];
	ques='';
	addPoll=0;
	liIndex=0;
	options='';
	markers1=[];
	info_content1=[];
	index=0;
	friendarray_geo=[];
	tq='';
	Anserides='';
	ansarray=[];
	ansfndArray=[];
	tm=0;
	html1='';
	obid=[];
	obval=[];
	idarray=[];
	textques_id='';
	Euserid=''
	mulans1=null;
	ansFriens=null;
	friendsarray1=null
	idarray1=[];
	tm1=0;
	html11='';
    //console.log('get0')
	var fb=FBConnect.install();
    //	console.log('get')
	fb.LogOut();
    //console.log('get3')
	window.localStorage.setItem("accessToken",'');
	$.mobile.changePage('#Registrationpage')
	
	
	
}

function gotoMainpage(){
	$.mobile.showPageLoadingMsg();
	getCurrentdata()
}

var atten_evid='';
function getInvitation(){
    //alert('ok');
    var GetInvite = Parse.Object.extend("EnvitedFriends");
    var query1 = new Parse.Query(GetInvite);
    query1.equalTo("FriendsId",parseInt(window.localStorage.getItem('Fuserid')));
    query1.find({
                success:function(res){
                //alert(res.length);
                // alert(res[0].get('Eventid'));
                if(res.length>0){
                var GetEvent = Parse.Object.extend("event");
                var query = new Parse.Query(GetEvent);
                atten_evid=res[0].get('Eventid');
                noti_eventid=atten_evid;
                query.equalTo("objectId",res[0].get('Eventid'));
                query.find({
                           success:function(results){
                           //alert(results.length)
                           var name=results[0].get('Name')+"'";
                           var ename=results[0].get('vEventName');
                           var eD=results[0].get('EexpDays');
                           var eH=results[0].get('EexpHours');
                           var eM=results[0].get('EexpMins');
                           // alert(eD+'---->'+eH+'----->'+eM);
                           if(eD=='')eD=0;
                           if(eH=='')eH=0;
                           if(eM=='')eM=0;
                           // alert(eD+'---->'+eH+'----->'+eM);
                           if(eD=='0' && eH=='0' && eM=='0'){
                           var htm='';
                           }
                           else{
                           var htm='\nYou have '+eD+' Days,'+eH+' Hours,'+eM+' Minutes to decide whether to go'
                           }
                           var html='<p style="padding:0.6em;">You have been invited to '+name+'s event:'+ename+'.'+htm+'</p>';
                           
                           html+='<center>Want to go?</center>';
                           // html+='<a href="#" data-role="button" data-inline="true">Yes</a>';
                           html+='<center><a href="#" onclick="InviteYes()" data-role="button" data-inline="true" class="publishbutton" corner="false" style="margin-top: 2%">Yes</a><a href="#" onclick="InvitesNo()" data-role="button" data-inline="true" class="publishbutton" corner="false" style="margin-top: 2%"> No</a> </center>'
                           var message='You have been invited to '+name+'s event:-'+ename+'.'+htm+'\nWant to go?';
                           
                           $('#eventReceived').html(html).trigger('create');
                           // $("#eventPopup").popup("open")
                           //alert('pk')
                           
                           navigator.notification.confirm(
                                                          message,  // message
                                                          //  onattendConfirm,              // callback to invoke with index of button pressed
                                                          onattendnotiConfirm,
                                                          'Alert',            // title
                                                          'Yes,No'          // buttonLabels
                                                          );
                           
                           
                           },
                           error:function(eror){
                           alert('event error');
                           }
                           });
                }
                else{
                $.mobile.changePage('#pluspage');
                }
                
                },
                error:function(error){
                alert('friend error');
                }
                });
    
    
}
function onattendConfirm(button){
    
    if(button==1){
        var GetEvent=Parse.Object.extend('event');
        var query=new Parse.Query(GetEvent);
        query.equalTo('objectId',atten_evid)
        query.find({
                   success:function(result){
                   // alert(result.length);
                   //alert(result[0].get('AttendFnd'))
                   var accpetarray=[];
                   if(result[0].get('AttendFnd') !=undefined){
                   accpetarray=result[0].get('AttendFnd');
                   accpetarray.push(window.localStorage.getItem('Fuserid'));
                   }else{
                   accpetarray.push(window.localStorage.getItem('Fuserid'));
                   }
                   save_event=new GetEvent();
                   save_event.id=result[0].id;
                   save_event.set('AttendFnd',accpetarray);
                   save_event.save();
                   //alert('ok')
                   local_login();
                   }
                   
                   });
        
    }
    else{
        $.mobile.changePage('#pluspage');
    }
}
function InviteYes(){
    $("#eventPopup").popup("close");
    $.mobile.showPageLoadingMsg();
    getCurrentdata();
}
function InvitesNo(){
    $("#eventPopup").popup("close");
    //$.mobile.showPageLoadingMsg();
    //getCurrentdata();
    $.mobile.changePage('#pluspage')
    
}
function test1(){
    var name='adsfadsf';
    var ename='sadfads asdfas';
    var html='<p style="padding:0.6em;">You ve been invited to'+name+' s event:'+ename+'. You have [time] to decide whether to go</p>';
    html+='<center>Want to go?</center>';
    // html+='<a href="#" data-role="button" data-inline="true">Yes</a>';
    html+='<center><a href="#" onclick="InviteYes()" data-role="button" data-inline="true" class="publishbutton" corner="false" style="margin-top: 2%">Yes</a><a href="#" onclick="InvitesNo()" data-role="button" data-inline="true" class="publishbutton" corner="false" style="margin-top: 2%"> No</a> </center>'
    $('#eventReceived').html(html).trigger('create');
    
    $("#eventPopup").popup("open")
    
    navigator.notification.confirm(
                                   'Are you sure to Delete ?',  // message
                                   ondelConfirm,              // callback to invoke with index of button pressed
                                   'Alert',            // title
                                   'Yes,No'          // buttonLabels
                                   );
    
}



function getGroup(){
    
    $.mobile.changePage('#Grouppage');
    $.mobile.showPageLoadingMsg();
	var Eventdata = Parse.Object.extend("event");
	var query = new Parse.Query(Eventdata);
	query.find({
               success: function(results) {
               $.mobile.hidePageLoadingMsg();
               var cur=0;
               var html='';
               for (var i = 0; i < results.length; i++) {
               var object = results[i];
               if(e_event.indexOf(object.id) !=-1){
               var s_time=object.get('sDates');
               var e_time=object.get('eDates');
               var tday=Date.parse(new Date());
               tday=Math.floor(tday/1000);
               
               console.log(s_time);
               console.log(tday);
               console.log(e_time);
               
               //  if(s_time<tday  &&  tday< e_time){
               //cur++;
               
               var object = results[i];
               var objid=object.id;
               var E_name=object.get('vEventName')
               html +='<li data-icon="arrow-r" onclick="getGroupDetail(this)" data-obid='+objid+' obid='+objid+'><a href="#">'+E_name+'</a></li>'
               
               /*   }
                else{
                //alert('not ok')
                }*/
               
               }
               }
               $('#groupeventlist').html(html);
               //$('#c_eventlist').listview('refresh')
               $.mobile.changePage("#Grouppage");
               $('#groupeventlist').listview('refresh')
               },
               error: function(error) {
               alert("Error: " + error.code + " " + error.message);
               $.mobile.hidePageLoadingMsg();
               }
               });
    
}


function getGroupDetail(event){
    ev_objid1=$(event).data('obid');
    $.mobile.showPageLoadingMsg();
	var GameScore = Parse.Object.extend("event");
	var query = new Parse.Query(GameScore);
	query.equalTo("objectId", $(event).data('obid'));
	query.find({
               success: function(results) {
               // Do something with the returned Parse.Object values
               $.mobile.hidePageLoadingMsg();
               for (var i = 0; i < results.length; i++) {
               var object = results[i];
               var venue=object.get('eVenue');
               var eDate=object.get('endDate');
               var sDate=object.get('startDate');
               var e_name=object.get('vEventName');
               Gfriendsarray1=object.get('friendId');
               
               GEuserid=object.get('iuserId');
               GUserFid=object.get('UserFBId')
               GUserName=object.get('Name')
               var GfreindName=object.get('friendName');
               var html='';
               html+='<li><img src="https://graph.facebook.com/'+GUserFid+'/picture?type=normal" width="60px" height="65px" style="padding-top:7px;"/>'+GUserName+'</li>'
               for(var i=0;i<GfreindName.length;i++){
               html+='<li><img src="https://graph.facebook.com/'+Gfriendsarray1[i]+'/picture?type=normal" width="60px" height="65px" style="padding-top:7px;" />'+GfreindName[i]+'</li>'
               }
               //alert(Euserid)<img src="https://graph.facebook.com/100001905072366/picture?type=normal"
               }
               $('#GroupFndList').html(html);
               $.mobile.changePage('#GroupFrindPage');
               $('#GroupFndList').listview('refresh');
               },
               error: function(error) {
               alert("Error: " + error.code + " " + error.message);
               }
               });
    
    
}
function NotiSetting(event){
    
	//alert($(event).val())
    var val=$(event).val();
    if(val=='on'){
        var cuser = localStorage.getItem('localusername');
        var GameScore=Parse.Object.extend("User");
        var gameScore = new GameScore();
        var query = new Parse.Query(GameScore);
        query.equalTo("email", cuser);
        query.find({
                   
                   success:function(result){
                   console.log(result[0].id)
                   gameScore.id =result[0].id;
                   gameScore.set('Notification','ON')
                   //gameScore.set('long',777)
                   //gameScore.save();
                   gameScore.save(null, {
                                  success: function (gameScore) {
                                  //alert('suc')
                                  
                                  },
                                  error:function(error){
                                  //alert("Error: " + error.code + " " + error.message);
                                  }
                                  });
                   
                   
                   },
                   error:function(error){
                   console.log('geolocation error')
                   }
                   })
    }
    else{
        var cuser = localStorage.getItem('localusername');
        var GameScore=Parse.Object.extend("User");
        var gameScore = new GameScore();
        var query = new Parse.Query(GameScore);
        query.equalTo("email", cuser);
        query.find({
                   
                   success:function(result){
                   console.log(result[0].id)
                   gameScore.id =result[0].id;
                   gameScore.set('Notification','OFF')
                   //gameScore.set('long',777)
                   //gameScore.save();
                   gameScore.save(null, {
                                  success: function (gameScore) {
                                  console.log('suc')
                                  
                                  },
                                  error:function(error){
                                  console.log("Error: " + error.code + " " + error.message);
                                  }
                                  });
                   
                   
                   },
                   error:function(error){
                   console.log('geolocation error')
                   }
                   })
        
    }
    
    
}

function getNotification(){
    $.mobile.showPageLoadingMsg();
    var EnvitedEvnet=Parse.Object.extend("EnvitedFriends");
	var query=new Parse.Query(EnvitedEvnet);
	query.equalTo("FriendsId",parseInt(window.localStorage.getItem('Fuserid')));
	query.find({
               success: function(results1) {
               $.mobile.hidePageLoadingMsg();
               //alert(results1[0].get('EcreateNoti'))
               var html=''
               
               for(var i=0;i<results1.length;i++){
               var htmlm='';
               var htmlm1='';
               var htmlm2='';
               //  html+='<li><a href="#" data-evid="'+results1[i].get('Eventid')+'" data-obid="'+results1[i].id+'" onclick="AcceptRequest(this)">'+results1[i].get('EcreateNoti')+'</a></li>';
               html+='<li>'+results1[i].get('EcreateNoti')+'</li>';
               var mq=results1[i].get('EMulAnswer');
               var tq=results1[i].get('ETextAnswer');
               var allans=results1[i].get('AllanserPoll');
               if(mq  !=undefined){
               for(var j=0;j<mq.length;j++){
               htmlm+='<li>'+mq[j]+'</li>';
               
               }
               }
               if(tq  !=undefined){
               for(var k=0;k<tq.length;k++){
               htmlm1+='<li>'+tq[k]+'</li>';
               }
               }
               if(allans  !=undefined){
               
               htmlm2+='<li>'+allans+'</li>';
               
               }
               html+=htmlm;
               html+=htmlm1;
               html+=htmlm2;
               
               }
               
               $('#notificationlist').html(html);
               $.mobile.changePage('#NotificationListpage');
               $('#notificationlist').listview('refresh');
               }
               });
    
}
function sankar(){
	
	  var expmessage='. and you have 5 Days,3 Hours,4 Minuets to decide';

var message1 = 'sankar  created an event xxxxx using effectiv.'+expmessage;
//- You have been invited to an event and have [time trigger] to decide. Click now to respond.

var message12='sankar have  invited you an event AAAAA';
var message13=expmessage+'. Click now to respond'
var message1=message12+message13;
	//Applications/MAMP/htdocs/sankar/mytest/phonegap-2.9.0/lib/android/bin/create /Applications/MAMP/htdocs/sankar/mytest/newfolder/my_new_cordova_project com.example.cordova_project_name CordovaProjectName
	Parse.Push.send({
                    
                    channels: ["d911255803038577","d000000000000000"],
                    data: {
                    alert: message1,
                    oneH_eventid:'8E1f82xN32',
                    sound: "off",
                    }
                    }, {
                    success: function() {
                    //alert('send succes')
                    console.log('createPush was successful');
                    },
                    error: function(error) {
                    alert('send error')
                    console.log(JSON.stringify(error));
                    }
                    });
}


function gotoEventDetail(eid){
	ev_objid=eid;
	$('#ansPollQesBtn').hide();
	$('#giveanswerid').hide();
	
	var GameScore = Parse.Object.extend("event");
	var query = new Parse.Query(GameScore);
	query.equalTo("objectId", eid);
	query.find({
               success: function(results) {
               // Do something with the returned Parse.Object values
               for (var i = 0; i < results.length; i++) {
               var object = results[i];
               var venue=object.get('eVenue');
               var eDate=object.get('endDate');
               var sDate=object.get('startDate');
               var e_name=object.get('vEventName');
               friendsarray1=object.get('friendId');
               friendsarray_bar=object.get('friendId');
               localStorage.setItem('fnd',friendsarray_bar);
               Euserid=object.get('iuserId');
               m_lat=object.get('lat');
               m_long=object.get('long');
               m_adds=object.get('eVenue');
               m_evetuser=object.get('UserFBId');
               AttendfnnArray=object.get('AttendFnd');
               }
               $('#c_evnetname').html(e_name);
               $('#Detail_sdate').html(sDate);
               $('#Detail_edate').html(eDate);
               curdetail=1;
               $.mobile.changePage('#CurrentDetailpage');
               },
               error: function(error) {
               alert("Error: " + error.code + " " + error.message);
               }
               });
	
}






function onNotificationGCM(e) {
	
	//phonegap local plugin add https://github.com/mallzee/phonegap-facebook-plugin.git --variable APP_ID="608052099259699" --variable APP_NAME="Ftesting"
	alert(e.event)
	//cordova plugin add org.apache.cordova.network-information
}
/*
 function successHandler (result) {
 alert(result)
 }
 
 function errorHandler (error) {
 alert('errrpr');
 }
 */