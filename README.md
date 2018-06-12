### Start resume from this command 
```sh
# You should have clojure installed and then invoke the following command

clj -Sdeps '{:deps {github-metacritical/cljscv {:git/url "https://github.com/metacritical/cljscv" :sha "b2a96725ee562f661f120777fe6f675ad4a21f9c"}}}' -m figwheel.main -co '{:main resume.core}' -r
```

Wait a few seconds it first it will open a browser and show default clojurescript 
page then it will load the custom code.

