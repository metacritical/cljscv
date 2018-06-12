### Start resume from this command 
```sh
# You should have clojure installed and then invoke the following command

clj -Sdeps '{:deps {github-metacritical/cljscv {:git/url "https://github.com/metacritical/cljscv" :sha "5d8a8a24ea006d68382d144644e3514c51492688"}}}' -m figwheel.main -co '{:main resume.core}' -r
```

Wait a few seconds it first it will open a browser and show default clojurescript 
page then it will load the custom code.

