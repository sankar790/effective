package com.plugin.Custom;
import org.apache.cordova.api.CallbackContext;
import org.apache.cordova.api.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import  com.techies.effective.Effective;
public class MyCustomPlugin extends CordovaPlugin {
    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
   // 	Effective.myfunction(args.getString(0));
    	
    	
        
        if (action.equals("data")) {
        	Effective.myfunction(action);
            this.data(Effective.myvalue, callbackContext);
            return true;
        }
     
        return false;
        
    //	return false;
    }
    private void data(String message, CallbackContext callbackContext) {
        if (message != null && message.length() > 0) {
            callbackContext.success(message);
        } else {
            callbackContext.error("Expected one non-empty string argument.");
        }
    }
}
