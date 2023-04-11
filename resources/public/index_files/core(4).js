// Compiled by ClojureScript 1.10.339 {}
goog.provide('resume.core');
goog.require('cljs.core');
goog.require('clojure.browser.dom');
goog.require('resume.html_utils');
resume.core.console_welcome = (function resume$core$console_welcome(){
console.clear();

return console.log("Hey Welcome to metacritical's cv.");
});
resume.core.main = (function resume$core$main(){
clojure.browser.dom.remove_children.call(null,new cljs.core.Keyword(null,"app","app",-560961707));

resume.core.console_welcome.call(null);

resume.html_utils.fetch_and_append.call(null,"/hiccup/style-sheet.hic.edn",new cljs.core.Keyword(null,"head","head",-771383919));

return resume.html_utils.fetch_and_append.call(null,"/hiccup/body-main.hic.edn",new cljs.core.Keyword(null,"app","app",-560961707));
});
window.addEventListener("DOMContentLoaded",resume.core.main);

//# sourceMappingURL=core.js.map
