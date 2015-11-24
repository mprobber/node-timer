import Timer from "./Timer.js";
import MedianEstimator from "./MedianEstimator.js";

export default class {
  constructor() {
    this.times = {};
  }

  getTimer(name) {
    var t = new Timer(this, name);
    t.start();
    return t;
  }
  addTime(t, name) {
    if (this.times[name] === undefined){
      this.times[name] = new MedianEstimator();
    }
    this.times[name].addNumber(t[0] * 1000 + t[1] / 1000000);
  }
  timeFunction(name, fn) {
    var t = this.getTimer();
    var r = fn();
    t.stop();
    return r;
  }
  getMedianTime(name){
    return this.times[name].estimateMedian();
  }
  getMedians(){
    let r = {};
    for (let name of Object.keys(this.times)){
      r[name] = this.getMedianTime(name);
    }
    return r;
  }
  restifyFullPathTimer(){
    return function(req, res, next){
      var p = req.path().split('/');
      if (p[1] === "bench"){
        var t = this.getTimer(p[2]);
        var r = next();
        t.stop();
      } else {
        return next();
      }
      return r;
    }.bind(this);
  }
}
