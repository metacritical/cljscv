### Start resume from this command 
```sh
clj -Sdeps '{:deps {github-metacritical/cljscv {:git/url "https://github.com/metacritical/cljscv" :sha "6dad5bfbc29892a8c2f385b8275673863d1f6c6e"}}}' -m figwheel.main -co '{:main resume.core}' -c resume.core -r
```

Wait a few seconds it first it will open a browser and show default clojurescript 
page then it will load the custom code.

