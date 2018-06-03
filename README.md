### Start resume from this command 
```sh
clj -Sdeps '{:deps {github-metacritical/cljscv {:git/url "https://github.com/metacritical/cljscv" :sha "d3d4218b4018c2daa5a3e8296b2be49bc4984a39"}}}' -m figwheel.main -co '{:main resume.core}' -c resume.core -r
```

Wait a few seconds it first it will open a browser and show default clojurescript 
page then it will load the custom code.

