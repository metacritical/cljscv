(ns resume.core
  (:require-macros [hiccups.core :as hiccups :refer [html]])
  (:require [hiccups.runtime :as hiccupsrt]
            [clojure.browser.dom :as bdom]
            [goog.dom :as dom]))

(def style-sheet
  [[:link {:rel "stylesheet", :href "/resume/main.css"}]])

(def header-tmpl
  [[:div {:class "header"}
   [:h2 {:href "#default", :class "logo"} "Pankaj Doharey"]
    [:p "Sr. Ruby/Go/Clojure Developer."]
    [:div {:class "header-right"}
     [:img {:src "/resume/avatar.jpg" :alt "Metacritical profile picture"}]]]])

(defn console-welcome []
  (.clear js/console)
  (.log js/console "Hey Welcome to metacritical's cv."))

(defn hiccup->html [hiccup]
  (apply str (mapv #(html %) hiccup)))

(defn html->node [tmpl]
  (dom/constHtmlToNode
   (.from goog.string/Const (hiccup->html tmpl))))

(defn append-child [id child]
  (let [parent (name id)]
    (cond
      (= id :head) (bdom/append (dom/getElementByTagNameAndClass parent) child)
      :else (bdom/append (dom/getElement parent) child))))

(defn main []
  (bdom/remove-children :app)
  (append-child :head (html->node style-sheet))
  (append-child :app (html->node header-tmpl))
  (console-welcome))

(.addEventListener js/window "DOMContentLoaded" (main))
