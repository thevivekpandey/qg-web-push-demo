window.QGSettings = {
  "debug": false,
  "origin": "https://www.appier.com",
  "push": {
     "delay": 0, 
     "requestSelf": false, 
     "fakePrompt": false, 
     "restrictOrigin": true,
     "onSubscribedPopup": {
        "enabled": true, 
        "showOverlay": true, 
        "htmlBody": "asd"
     }, 
     "secondsBetweenPrompts": 3600
  },
  "qgendpoint": "https://cjiestest.qgr.ph/notify.html", 
  "appId": "3a9db504e04bbc839a3c"
};
if(window.qg && window.qg.queue) {
   window.qg.queue.unshift(('init', QGSettings));
}
!function(q,g,r,a,p,h,js){
   if(!q.qg){
       js=q.qg=function() {
           js.callmethod ? js.callmethod.call(js, arguments) : js.queue.push(arguments);
           js.queue = [];
       }
   }
   if(q.qg.initialized){return;}
   window.qg.queue.unshift(['init',window.QGSettings])
   p=g.createElement(r);
   p.async=!0;
   p.src=a;
   h=g.getElementsByTagName(r)[0];
   h.parentNode.insertBefore(p,h);
   q.qg.initialized = true;
}(window,document,'script','aiqua.js');
