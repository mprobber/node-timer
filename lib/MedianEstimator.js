"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function median(values) {
  values.sort(function (a, b) {
    return a - b;
  });
  if (values.length === 0) {
    return;
  }
  if (values.length % 2 === 0) {
    return (values[values.length / 2 - 1] + values[values.length / 2]) / 2;
  }
  return values[Math.floor(values.length / 2)];
}

var _default = (function () {
  function _default() {
    _classCallCheck(this, _default);

    this.numbers = {};
  }

  _createClass(_default, [{
    key: "_addToBucket",
    value: function _addToBucket(n, b) {
      if (this.numbers[b] === undefined) {
        this.numbers[b] = [];
      }
      this.numbers[b].push(n);
      if (this.numbers[b].length % 100 === 0) {
        var med = median(this.numbers[b]);
        this._addToBucket(med, b * 100);
        delete this.numbers[b];
      }
    }
  }, {
    key: "addNumber",
    value: function addNumber(n) {
      this._addToBucket(n, 1);
    }
  }, {
    key: "estimateMedian",
    value: function estimateMedian() {
      var allNumbers = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.keys(this.numbers)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var reps = _step.value;

          for (var i = 0; i < reps; i++) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = this.numbers[reps][Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var med = _step2.value;

                allNumbers.push(med);
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
                  _iterator2["return"]();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          }
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

      return median(allNumbers);
    }
  }]);

  return _default;
})();

exports["default"] = _default;
module.exports = exports["default"];