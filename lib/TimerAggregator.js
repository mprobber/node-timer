"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _TimerJs = require("./Timer.js");

var _TimerJs2 = _interopRequireDefault(_TimerJs);

var _MedianEstimatorJs = require("./MedianEstimator.js");

var _MedianEstimatorJs2 = _interopRequireDefault(_MedianEstimatorJs);

var _default = (function () {
  function _default() {
    _classCallCheck(this, _default);

    this.times = {};
  }

  _createClass(_default, [{
    key: "getTimer",
    value: function getTimer(name) {
      var t = new _TimerJs2["default"](this, name);
      t.start();
      return t;
    }
  }, {
    key: "addTime",
    value: function addTime(t, name) {
      if (this.times[name] === undefined) {
        this.times[name] = new _MedianEstimatorJs2["default"]();
      }
      this.times[name].addNumber(t[0] * 1000 + t[1] / 1000000);
    }
  }, {
    key: "timeFunction",
    value: function timeFunction(name, fn) {
      var t = this.getTimer();
      var r = fn();
      t.stop();
      return r;
    }
  }, {
    key: "getMedianTime",
    value: function getMedianTime(name) {
      return this.times[name].estimateMedian();
    }
  }, {
    key: "getMedians",
    value: function getMedians() {
      var r = {};
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.keys(this.times)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _name = _step.value;

          r[_name] = this.getMedianTime(_name);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"]) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return r;
    }
  }, {
    key: "restifyFullPathTimer",
    value: function restifyFullPathTimer() {
      return (function (req, res, next) {
        var p = req.path().split('/');
        if (p[1] === "bench") {
          var t = this.getTimer(p[2]);
          var r = next();
          t.stop();
        } else {
          return next();
        }
        return r;
      }).bind(this);
    }
  }]);

  return _default;
})();

exports["default"] = _default;
module.exports = exports["default"];