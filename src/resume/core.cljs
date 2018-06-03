(ns resume.core
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
  (html->node (read-string (.getResponseText req))))

(defn append-child [id child]
  (let [parent (name id)]
    (case id
      :head (bdom/append (dom/getElementByTagNameAndClass parent) child)
      (bdom/append (dom/getElement parent) child))))

(defn slurp [path callback]
  (let [xhr (goog.net.XhrIo.) complt goog.net.EventType.COMPLETE]
   (ev/listen xhr complt #(callback (xhr->html xhr)))
   (.send xhr path)))

(defn console-welcome []
  (.clear js/console)
  (.log js/console "Hey Welcome to metacritical's cv."))

(defn main []
  (bdom/remove-children :app)
  (console-welcome)
  (slurp "/hiccup/style-sheet.hic.edn" #(append-child :head %))
  (slurp "/hiccup/header-tmpl.hic.edn" #(append-child :app %)))

(.addEventListener js/window "DOMContentLoaded" (main))
