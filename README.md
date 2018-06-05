### Start resume from this command 
```sh
clj -Sdeps '{:deps {github-metacritical/cljscv {:git/url "https://github.com/metacritical/cljscv" :sha "5e8d22bb1aaedf74143e836e987df501203b99d9"}}}' -m figwheel.main -co '{:main resume.core}' -r
```

Wait a few seconds it first it will open a browser and show default clojurescript 
page then it will load the custom code.

