'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SNS = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SNS = require('aws-sdk/clients/SNS');

var _SNS2 = _interopRequireDefault(_SNS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SNS = exports.SNS = function () {
  function SNS(config) {
    _classCallCheck(this, SNS);

    this.sns = new _SNS2.default(config);
  }

  _createClass(SNS, [{
    key: 'publish',
    value: function publish(message, topicARN) {
      var _this = this;

      return new Promise(function (reject, resolve) {
        _this.sns.publish({
          Message: message,
          TopicArn: topicARN
        }, function (err, data) {
          if (err) return reject(err);
          return resolve(data);
        });
      });
    }
  }]);

  return SNS;
}();