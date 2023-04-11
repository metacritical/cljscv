// Compiled by ClojureScript 1.10.339 {}
goog.provide('clojure.browser.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.object');
clojure.browser.dom.append = (function clojure$browser$dom$append(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9228 = arguments.length;
var i__4532__auto___9229 = (0);
while(true){
if((i__4532__auto___9229 < len__4531__auto___9228)){
args__4534__auto__.push((arguments[i__4532__auto___9229]));

var G__9230 = (i__4532__auto___9229 + (1));
i__4532__auto___9229 = G__9230;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return clojure.browser.dom.append.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

clojure.browser.dom.append.cljs$core$IFn$_invoke$arity$variadic = (function (parent,children){
cljs.core.apply.call(null,goog.dom.append,parent,children);

return parent;
});

clojure.browser.dom.append.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
clojure.browser.dom.append.cljs$lang$applyTo = (function (seq9226){
var G__9227 = cljs.core.first.call(null,seq9226);
var seq9226__$1 = cljs.core.next.call(null,seq9226);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9227,seq9226__$1);
});


/**
 * @interface
 */
clojure.browser.dom.DOMBuilder = function(){};

clojure.browser.dom._element = (function clojure$browser$dom$_element(var_args){
var G__9232 = arguments.length;
switch (G__9232) {
case 1:
return clojure.browser.dom._element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.browser.dom._element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.browser.dom._element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.browser.dom._element.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if(((!((this$ == null))) && (!((this$.clojure$browser$dom$DOMBuilder$_element$arity$1 == null))))){
return this$.clojure$browser$dom$DOMBuilder$_element$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (clojure.browser.dom._element[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (clojure.browser.dom._element["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DOMBuilder.-element",this$);
}
}
}
});

clojure.browser.dom._element.cljs$core$IFn$_invoke$arity$2 = (function (this$,attrs_or_children){
if(((!((this$ == null))) && (!((this$.clojure$browser$dom$DOMBuilder$_element$arity$2 == null))))){
return this$.clojure$browser$dom$DOMBuilder$_element$arity$2(this$,attrs_or_children);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (clojure.browser.dom._element[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,attrs_or_children);
} else {
var m__4244__auto____$1 = (clojure.browser.dom._element["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,attrs_or_children);
} else {
throw cljs.core.missing_protocol.call(null,"DOMBuilder.-element",this$);
}
}
}
});

clojure.browser.dom._element.cljs$core$IFn$_invoke$arity$3 = (function (this$,attrs,children){
if(((!((this$ == null))) && (!((this$.clojure$browser$dom$DOMBuilder$_element$arity$3 == null))))){
return this$.clojure$browser$dom$DOMBuilder$_element$arity$3(this$,attrs,children);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (clojure.browser.dom._element[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,attrs,children);
} else {
var m__4244__auto____$1 = (clojure.browser.dom._element["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,attrs,children);
} else {
throw cljs.core.missing_protocol.call(null,"DOMBuilder.-element",this$);
}
}
}
});

clojure.browser.dom._element.cljs$lang$maxFixedArity = 3;


clojure.browser.dom.log = (function clojure$browser$dom$log(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9235 = arguments.length;
var i__4532__auto___9236 = (0);
while(true){
if((i__4532__auto___9236 < len__4531__auto___9235)){
args__4534__auto__.push((arguments[i__4532__auto___9236]));

var G__9237 = (i__4532__auto___9236 + (1));
i__4532__auto___9236 = G__9237;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return clojure.browser.dom.log.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

clojure.browser.dom.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log(cljs.core.apply.call(null,cljs.core.pr_str,args));
});

clojure.browser.dom.log.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
clojure.browser.dom.log.cljs$lang$applyTo = (function (seq9234){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9234));
});

clojure.browser.dom.log_obj = (function clojure$browser$dom$log_obj(obj){
return console.log(obj);
});
goog.object.set(clojure.browser.dom.DOMBuilder,"string",true);

goog.object.set(clojure.browser.dom._element,"string",(function() {
var G__9247 = null;
var G__9247__1 = (function (this$){
clojure.browser.dom.log.call(null,"string (-element ",this$,")");

if((this$ instanceof cljs.core.Keyword)){
return goog.dom.createElement(cljs.core.name.call(null,this$));
} else {
return goog.dom.createTextNode(cljs.core.name.call(null,this$));

}
});
var G__9247__2 = (function (this$,attrs_or_children){
clojure.browser.dom.log.call(null,"string (-element ",this$," ",attrs_or_children,")");

var attrs = cljs.core.first.call(null,attrs_or_children);
if(cljs.core.map_QMARK_.call(null,attrs)){
return clojure.browser.dom._element.call(null,this$,attrs,cljs.core.rest.call(null,attrs_or_children));
} else {
return clojure.browser.dom._element.call(null,this$,null,attrs_or_children);
}
});
var G__9247__3 = (function (this$,attrs,children){
clojure.browser.dom.log.call(null,"string (-element ",this$," ",attrs," ",children,")");

var str_attrs = ((((cljs.core.map_QMARK_.call(null,attrs)) && (cljs.core.seq.call(null,attrs))))?cljs.core.reduce.call(null,(function (o,p__9238){
var vec__9239 = p__9238;
var k = cljs.core.nth.call(null,vec__9239,(0),null);
var v = cljs.core.nth.call(null,vec__9239,(1),null);
var o__$1 = (((o == null))?{}:o);
clojure.browser.dom.log.call(null,"o = ",o__$1);

clojure.browser.dom.log.call(null,"k = ",k);

clojure.browser.dom.log.call(null,"v = ",v);

if((((k instanceof cljs.core.Keyword)) || (typeof k === 'string'))){
var G__9244 = o__$1;
goog.object.set(G__9244,cljs.core.name.call(null,k),v);

return G__9244;
} else {
return null;
}
}),{},attrs):null);
clojure.browser.dom.log_obj.call(null,str_attrs);

if(cljs.core.seq.call(null,children)){
return cljs.core.apply.call(null,goog.dom.createDom,cljs.core.name.call(null,this$),str_attrs,cljs.core.map.call(null,clojure.browser.dom._element,children));
} else {
return goog.dom.createDom(cljs.core.name.call(null,this$),str_attrs);
}
});
G__9247 = function(this$,attrs,children){
switch(arguments.length){
case 1:
return G__9247__1.call(this,this$);
case 2:
return G__9247__2.call(this,this$,attrs);
case 3:
return G__9247__3.call(this,this$,attrs,children);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__9247.cljs$core$IFn$_invoke$arity$1 = G__9247__1;
G__9247.cljs$core$IFn$_invoke$arity$2 = G__9247__2;
G__9247.cljs$core$IFn$_invoke$arity$3 = G__9247__3;
return G__9247;
})()
);

cljs.core.PersistentVector.prototype.clojure$browser$dom$DOMBuilder$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$browser$dom$DOMBuilder$_element$arity$1 = (function (this$){
var this$__$1 = this;
clojure.browser.dom.log.call(null,"PersistentVector (-element ",this$__$1,")");

var tag = cljs.core.first.call(null,this$__$1);
var attrs = cljs.core.second.call(null,this$__$1);
var children = cljs.core.drop.call(null,(2),this$__$1);
if(cljs.core.map_QMARK_.call(null,attrs)){
return clojure.browser.dom._element.call(null,tag,attrs,children);
} else {
return clojure.browser.dom._element.call(null,tag,null,cljs.core.rest.call(null,this$__$1));
}
});

Element.prototype.clojure$browser$dom$DOMBuilder$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.clojure$browser$dom$DOMBuilder$_element$arity$1 = (function (this$){
var this$__$1 = this;
clojure.browser.dom.log.call(null,"js/Element (-element ",this$__$1,")");

return this$__$1;
});
clojure.browser.dom.element = (function clojure$browser$dom$element(var_args){
var G__9251 = arguments.length;
switch (G__9251) {
case 1:
return clojure.browser.dom.element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___9253 = arguments.length;
var i__4532__auto___9254 = (0);
while(true){
if((i__4532__auto___9254 < len__4531__auto___9253)){
args_arr__4546__auto__.push((arguments[i__4532__auto___9254]));

var G__9255 = (i__4532__auto___9254 + (1));
i__4532__auto___9254 = G__9255;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((1)),(0),null));
return clojure.browser.dom.element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4547__auto__);

}
});

clojure.browser.dom.element.cljs$core$IFn$_invoke$arity$1 = (function (tag_or_text){
clojure.browser.dom.log.call(null,"(element ",tag_or_text,")");

return clojure.browser.dom._element.call(null,tag_or_text);
});

clojure.browser.dom.element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,children){
clojure.browser.dom.log.call(null,"(element ",tag," ",children,")");

var attrs = cljs.core.first.call(null,children);
if(cljs.core.map_QMARK_.call(null,attrs)){
return clojure.browser.dom._element.call(null,tag,attrs,cljs.core.rest.call(null,children));
} else {
return clojure.browser.dom._element.call(null,tag,null,children);
}
});

/** @this {Function} */
clojure.browser.dom.element.cljs$lang$applyTo = (function (seq9249){
var G__9250 = cljs.core.first.call(null,seq9249);
var seq9249__$1 = cljs.core.next.call(null,seq9249);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9250,seq9249__$1);
});

clojure.browser.dom.element.cljs$lang$maxFixedArity = (1);

/**
 * Remove all children from the element with the passed id.
 */
clojure.browser.dom.remove_children = (function clojure$browser$dom$remove_children(id){
var parent = goog.dom.getElement(cljs.core.name.call(null,id));
return goog.dom.removeChildren(parent);
});
clojure.browser.dom.get_element = (function clojure$browser$dom$get_element(id){
return goog.dom.getElement(cljs.core.name.call(null,id));
});
clojure.browser.dom.html__GT_dom = (function clojure$browser$dom$html__GT_dom(s){
return goog.dom.htmlToDocumentFragment(s);
});
clojure.browser.dom.insert_at = (function clojure$browser$dom$insert_at(parent,child,index){
return goog.dom.insertChildAt(parent,child,index);
});
/**
 * Coerce the argument to a dom element if possible.
 */
clojure.browser.dom.ensure_element = (function clojure$browser$dom$ensure_element(e){
if((e instanceof cljs.core.Keyword)){
return clojure.browser.dom.get_element.call(null,e);
} else {
if(typeof e === 'string'){
return clojure.browser.dom.html__GT_dom.call(null,e);
} else {
return e;

}
}
});
/**
 * Replace old-node with new-node. old-node can be an element or a
 * keyword which is the id of the node to replace.  new-node can be an
 * element or an html string.
 */
clojure.browser.dom.replace_node = (function clojure$browser$dom$replace_node(old_node,new_node){
var old_node__$1 = clojure.browser.dom.ensure_element.call(null,old_node);
var new_node__$1 = clojure.browser.dom.ensure_element.call(null,new_node);
goog.dom.replaceNode(new_node__$1,old_node__$1);

return new_node__$1;
});
/**
 * Set the text content for the passed element returning the
 *   element. If a keyword is passed in the place of e, the element with
 *   that id will be used and returned.
 */
clojure.browser.dom.set_text = (function clojure$browser$dom$set_text(e,s){
return goog.dom.setTextContent(clojure.browser.dom.ensure_element.call(null,e),s);
});
/**
 * Get the value of an element.
 */
clojure.browser.dom.get_value = (function clojure$browser$dom$get_value(e){
return clojure.browser.dom.ensure_element.call(null,e).value;
});
/**
 * Set properties on an element
 */
clojure.browser.dom.set_properties = (function clojure$browser$dom$set_properties(e,m){
return goog.dom.setProperties(clojure.browser.dom.ensure_element.call(null,e),cljs.core.apply.call(null,goog.object.create,cljs.core.interleave.call(null,cljs.core.keys.call(null,m),cljs.core.vals.call(null,m))));
});
/**
 * Set the value property for an element.
 */
clojure.browser.dom.set_value = (function clojure$browser$dom$set_value(e,v){
return clojure.browser.dom.set_properties.call(null,e,new cljs.core.PersistentArrayMap(null, 1, ["value",v], null));
});
clojure.browser.dom.click_element = (function clojure$browser$dom$click_element(e){
return clojure.browser.dom.ensure_element.call(null,e).click(cljs.core.List.EMPTY);
});

//# sourceMappingURL=dom.js.map
