(ns resume.core
  (:require [clojure.browser.dom :as bdom]
            [resume.html-utils :as utils]))

(defn console-welcome []
  (.clear js/console)
  (.log js/console "Hey Welcome to metacritical's cv."))

(defn main []
  (bdom/remove-children :app)
  (console-welcome)
  (utils/slurp "/hiccup/style-sheet.hic.edn" :head)
  (utils/slurp "/hiccup/header-tmpl.hic.edn" :app)
  (utils/slurp "/hiccup/body-main.hic.edn" :wrapper))

(.addEventListener js/window "DOMContentLoaded" (main))
