/*! caja-kissy 2013-09-23 */
var shop_log=function(n,t){function e(n,e){return s.template=s.template||{},t.mix({error_page:u,msg:n,name:t.isString(e)?e:t.DOM.attr(e,"data-modulename"),random:+new Date},{shop_id:s.shopId,site_id:s.siteId,user_id:s.userId,user_nick:s.user_nick,template_name:s.template.name,template_id:s.template.id,design_nick:s.template.design_nick})}function r(n,e,r,o){return s.template=s.template||{},t.mix({type:n,desc:e,module_name:r,time_consume:o},{shop_id:s.shopId,site_id:s.siteId,user_id:s.userId,user_nick:s.user_nick,template_name:s.template.name,template_id:s.template.id,design_nick:s.template.design_nick})}function o(n,t){if(c){var r=e(n,t);goldlog.emit("caja_log",r)}}function i(n,t){if(c){var r=e(n,t);goldlog.emit("caja_log",r)}}function a(n,t,e,o){if(c){var i=r(n,t,e,o);goldlog.emit("caja_per",i)}}var s=n.shop_config||{},u=n.document.location.href;s.template=s.template||{};var c=/.*(\.taobao\.com)$/.test(n.location.host)||-1!==n.location.search.indexOf("caja-debug");return{sendSyncErrorLog:o,sendTamingErrorLog:i,sendJsMonitor:a}}(window,KISSY);