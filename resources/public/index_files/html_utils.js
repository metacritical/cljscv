// Compiled by ClojureScript 1.10.339 {}
goog.provide('resume.html_utils');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('hiccups.runtime');
goog.require('clojure.browser.dom');
goog.require('goog.events');
goog.require('goog.dom');
resume.html_utils.hiccup__GT_html = (function resume$html_utils$hiccup__GT_html(hiccup){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.mapv.call(null,(function (p1__8809_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,p1__8809_SHARP_))].join('');
}),hiccup));
});
resume.html_utils.html__GT_node = (function resume$html_utils$html__GT_node(tmpl){
return goog.dom.constHtmlToNode(goog.string.Const.from(resume.html_utils.hiccup__GT_html.call(null,tmpl)));
});
resume.html_utils.xhr__GT_html = (function resume$html_utils$xhr__GT_html(req){
return resume.html_utils.html__GT_node.call(null,cljs.reader.read_string.call(null,req.getResponseText()));
});
resume.html_utils.append_child = (function resume$html_utils$append_child(id,child){
var parent = cljs.core.name.call(null,id);
var G__8810 = id;
var G__8810__$1 = (((G__8810 instanceof cljs.core.Keyword))?G__8810.fqn:null);
switch (G__8810__$1) {
case "head":
return clojure.browser.dom.append.call(null,goog.dom.getElementByTagNameAndClass(parent),child);

break;
default:
return clojure.browser.dom.append.call(null,goog.dom.getElement(parent),child);

}
});
resume.html_utils.fetch_and_append = (function resume$html_utils$fetch_and_append(path,id){
var xhr = (new goog.net.XhrIo());
var complt = goog.net.EventType.COMPLETE;
goog.events.listen(xhr,complt,((function (xhr,complt){
return (function (){
return resume.html_utils.append_child.call(null,id,resume.html_utils.xhr__GT_html.call(null,xhr));
});})(xhr,complt))
);

return xhr.send(path);
});

//# sourceMappingURL=html_utils.js.map
