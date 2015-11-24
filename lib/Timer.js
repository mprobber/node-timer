"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_NAME = "timer";

var _default = (function () {
  function _default(timeAgragator, name) {
    _classCallCheck(this, _default);

    if (name === undefined) {
      this.name = DEFAULT_NAME;
    } else {
      this.name = name;
    }

    this.timeAgragator = timeAgragator;
  }

  _createClass(_default, [{
    key: "start",
    value: function start() {
      this.start_time = process.hrtime();
      this.done = false;
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.start_time === undefined || this.done) {
        return;
      }
      this.timeAgragator.addTime(process.hrtime(this.start_time), this.name);
      this.done = true;
    }
  }]);

  return _default;
})();

exports["default"] = _default;
module.exports = exports["default"];