window.QGSettings = {
   "debug": false, 
   "events": true,
   "push": {
      "prompt": {
         "buttonColor": "#006DF0", 
         "isMiddle": true, 
         "title": "Vivek wants to send you a push", 
         "overlay": true, 
         "laterText": "No penguin", 
         "subscribeText": "I like penguin", 
         "message": "Be updated to latest offerings by QGraph", 
         "icon": "http://4.bp.blogspot.com/-BfVzqdb71vY/TmxNj_ILPrI/AAAAAAAAA4A/XgJvH2HN_-4/s1600/penguin_1.jpg"
      }, 
      "delay": 0, 
      "requestSelf": false, 
      "fakePrompt": true, 
      "secondsBetweenPrompts": 3600
   }, 
   "appId": "ad55582957817e511c3d"
};
if (window.qg && window.qg.queue) {
    window.qg.queue.unshift(('init', QGSettings));
}
if (window.qg_custom_html) {
    window.QGSettings.push.prompt.html = window.qg_custom_html;
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
}(window,document,'script','//cdn.qgraph.io/v3/beta/qgraph.js');
