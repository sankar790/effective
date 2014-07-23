package com.techies.effective;

import android.os.Bundle;


import android.app.Activity;
import android.content.Context;
import android.telephony.TelephonyManager;
import android.view.Menu;
import org.apache.cordova.*;
import com.parse.*;
import com.techies.effective.R;

//import com.example.academyframework.R;


public class Effective  extends DroidGap {
	public static String myvalue;
	public String dev="d";
	public String devId="";
	public static Context context;
    @Override
    public void onCreate(Bundle savedInstanceState) {
    	context=this;
   // 	String abc=null;
    
        super.onCreate(savedInstanceState);
       
        super.setIntegerProperty("splashscreen", R.drawable.splash);
        super.setIntegerProperty("loadUrlTimeoutValue", 60000);
       super.loadUrl("file:///android_asset/www/index.html",5000);
       TelephonyManager   telephonyManager  = 
    		   (TelephonyManager)getSystemService( Context.TELEPHONY_SERVICE );
       String s="d";
       s=s.concat(telephonyManager.getDeviceId());
   	myvalue=s;
      Parse.initialize(this, "qe8urZso7npleQXKRxv9VrnaBwOdQ0sHYjZLvNbC", "tMN2h8yuW4mX9HgG9BUZOZ4q9W7LDOPOwt0gMvpL"); 
    //  PushService.subscribe(this, s, Effective.class);
      //PushService.subscribe(this,"", Effective.class);
       // ParseInstallation.getCurrentInstallation().saveInBackground();
      
        //ParseInstallation.put("flavor", "pistachio")["d911255803038577"]
      // myvalue=ParseInstallation.getCurrentInstallation().getInstallationId();
    /*   System.out.println("--------------------------->");
       System.out.println(ParseInstallation.getCurrentInstallation().getInstallationId());
       System.out.println("--------------------------->");
       */
    }
    
    public static void myfunction(String data){
    	/*
    	System.out.println("--------------------------->checking it--------------------------->");
    	 Parse.initialize(context, "qe8urZso7npleQXKRxv9VrnaBwOdQ0sHYjZLvNbC", "tMN2h8yuW4mX9HgG9BUZOZ4q9W7LDOPOwt0gMvpL"); 
    	      PushService.subscribe(context, data, Effective.class);
    	        ParseInstallation.getCurrentInstallation().saveInBackground();
    	        
    	        System.out.println("-----------sankar---------------->");
    	    	System.out.println(ParseInstallation.getCurrentInstallation().getObjectId());
    	    	System.out.println("-----------sankar---------------->");
    	    	*/
    	    
    	    /*    ParseQuery<ParseObject> query = ParseQuery.getQuery("Installation");
    	       // ParseObject gameScore = new ParseObject("GameScore");
    	     // Retrieve the object by id
    	     query.getInBackground(ParseInstallation.getCurrentInstallation().getObjectId(), new GetCallback<ParseObject>() {
    	       public void done(ParseObject gameScore, ParseException e) {
    	    	   System.out.println("---ok--------sankar--ok-------------->"); 
    	         if (e == null) {
    	           // Now let's update it with some new data. In this case, only cheatMode and score
    	           // will get sent to the Parse Cloud. playerName hasn't changed.
    	           gameScore.put("score", 1338);
    	           gameScore.put("cheatMode", true);
    	           gameScore.saveInBackground();
    	         }
    	         else{
    	        	 
    	        	 System.out.println(e);
    	         }
    	       }
    	     });*/
    	        
    }

    
}

