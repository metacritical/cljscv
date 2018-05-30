(ns resume.core
  (:require-macros [hiccups.core :as hiccups :refer [html]])
  (:require [hiccups.runtime :as hiccupsrt]))

(-> 
 (.getElementById js/document "app")
 (.remove)
 (.log js/alert "HI"))

