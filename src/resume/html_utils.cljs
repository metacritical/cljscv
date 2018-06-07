(ns resume.html-utils
  (:require-macros [hiccups.core :as hiccups :refer [html]])
  (:require [cljs.reader :as rdr :refer [read-string]]
            [hiccups.runtime :as hiccupsrt]
            [clojure.browser.dom :as bdom]
            [goog.events :as ev]
            [goog.dom :as dom]))

(defn hiccup->html [hiccup]
  (apply str (mapv #(html %) hiccup)))

(defn html->node [tmpl]
  (dom/constHtmlToNode
   (.from goog.string/Const (hiccup->html tmpl))))

(defn xhr->html [req]
  (-> req (.getResponseText) (read-string) (html->node)))

(defn append-child [id child]
  (let [parent (name id)]
    (case id
      :head (bdom/append (dom/getElementByTagNameAndClass parent) child)
      (bdom/append (dom/getElement parent) child))))

(defn slurp [path id]
  (let [xhr (goog.net.XhrIo.) complt goog.net.EventType.COMPLETE]
   (ev/listen xhr complt #(append-child id (xhr->html xhr)))
   (.send xhr path)))

