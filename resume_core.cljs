(ns resume-core
  (:require-macros [hiccups.core :as hiccups :refer [html]])
  (:require [hiccups.runtime :as hiccupsrt]))


(.remove (.getElementById js/document "app"))
(.log js/console "HI")
