node-timer
==================

A simple timer + median estimator for node.

Quick Usage Example
----------

```javascript
var nt = require('node-timer');
var node-timer = new node-timer(),
var t = node-timer.getTimer("important-things");

// DO IMPORTANT THINGS HERE

t.stop();

```

API
---

```javascript
var t = node-timer.getTimer(name)
// DO IMPORTANT THINGS HERE
t.stop();
```

Starts a timer, and returns the timer object.  Use t.stop() to stop the timer.

```javascript
var r = node-timer.timeFunction("superSpecialFunction", function(callback){
    //DO STUFF
});
```
Time a function call.  Note that the function needs to call callback() when done, otherwise the timer will never stop.

```javascript
var medianTime = node-timer.getMedianTime(name);
```
Pretty self-explanatory.  Will return the median time given by a timer.

```javascript
var allMedians = getMedians();
```
Returns an object mapping timer names to their median times respectively.

### Restify timer

There's also a function to time the full path of arbitrary restify requests.  Example usage:

```javascript
let server = restify.createServer();
server.use(node-timer.restifyFullPathTimer());
```
Be sure to make this call to server.use before your other middleware, otherwise it won't time it.

What's broken
-------------

Check the [GitHub issues](https://github.com/michaelp/node-timer/issues).

LICENSE
-------

MIT - see
[LICENSE](https://github.com/mprobber/node-timer/blob/master/LICENSE).
