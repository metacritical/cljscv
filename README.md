### Start resume from this command 
```sh
clj -Sdeps '{:deps {github-metacritical/cljscv {:git/url "https://github.com/metacritical/cljscv" :sha "f848c768499188cfec8ed066a4d46dc20b842e17"}}}' -m figwheel.main -co '{:main resume.core}' -r
```

Wait a few seconds it first it will open a browser and show default clojurescript 
page then it will load the custom code.

