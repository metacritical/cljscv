### Start resume from this command 
```sh
clj -Sdeps '{:deps {github-metacritical/cljscv {:git/url "https://github.com/metacritical/cljscv" :sha "d9583e24c74ebd35787feaac11d4c5a3545479f3"}}}' -m figwheel.main -co '{:main resume.core}' -r
```

Wait a few seconds it first it will open a browser and show default clojurescript 
page then it will load the custom code.

