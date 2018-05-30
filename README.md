### Start resume from this command 
```sh
clj -Sdeps '{:deps {github-metacritical/cljscv {:git/url "https://github.com/metacritical/cljscv" :sha "37c4809b29859040cd67f827c9cd7ad8b3f7146e"}}}' -m cljs.main -i @resume/core.cljs -r
```

Wait a few seconds it first it will open a browser and show default clojurescript 
page then it will load the custom code.

