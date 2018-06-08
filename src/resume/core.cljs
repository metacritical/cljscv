(ns resume.core
  (:require [clojure.browser.dom :as bdom]
            [resume.html-utils :as utils]))

(defn console-welcome []
  (.clear js/console)
  (.log js/console "Hey Welcome to metacritical's cv."))

(defn main []
  (bdom/remove-children :app)
  (console-welcome)
  (utils/fetch-and-append "/hiccup/style-sheet.hic.edn" :head)
  (utils/fetch-and-append "/hiccup/body-main.hic.edn" :app))

(js/window.addEventListener "DOMContentLoaded" main)
