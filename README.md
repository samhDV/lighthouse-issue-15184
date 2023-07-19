# lighthouse-issue-15184
MWE For Lighthouse issue 15184

https://github.com/GoogleChrome/lighthouse/issues/15184


## Steps to reproduce

Add the following to your hosts file:

````
127.0.0.1 domain1.com
127.0.0.1 domain2.com
127.0.0.1 domain3.com
127.0.0.1 domain4.com
````

(restart browser to make hosts file changes take effect)

Run a local webserver, i.e. using python on mac

````
python -m SimpleHTTPServer 8000
````

Open the following URL in Chrome:

````
http://domain4.com:8000
````

Open the Lighthouse tab and run an audit. Potentially also run the profiler.

## Explanation

The different domains are introduced to make sure they are reported as different 'origins' in Lighthouse reports. 