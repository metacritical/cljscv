### Start resume from this command 
```sh
clj -Sdeps '{:deps {github-metacritical/cljscv {:git/url "https://github.com/metacritical/cljscv" :sha "837762f1aaa107e6cdb829ff6e007ffa7e31fe40"}}}' -m cljs.main -i @resume/core.cljs -r
```

Wait a few seconds it first it will open a browser and show default clojurescript 
page then it will load the custom code.

