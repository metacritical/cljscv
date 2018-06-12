### Start resume from this command 
```sh
# You should have clojure installed and then invoke the following command

clj -Sdeps '{:deps {github-metacritical/cljscv {:git/url "https://github.com/metacritical/cljscv" :sha "78da9deeaefb79ba5f2f99de1d983221e6e714df"}}}' -m figwheel.main -co '{:main resume.core}' -r
```

Wait a few seconds it first it will open a browser and show default clojurescript 
page then it will load the custom code.

