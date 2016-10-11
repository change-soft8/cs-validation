"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Select = require("./Select2");

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectF2 = function (_React$Component) {
	_inherits(SelectF2, _React$Component);

	function SelectF2() {
		_classCallCheck(this, SelectF2);

		return _possibleConstructorReturn(this, (SelectF2.__proto__ || Object.getPrototypeOf(SelectF2)).apply(this, arguments));
	}

	_createClass(SelectF2, [{
		key: "render",
		value: function render() {
			var _props = this.props;
			var label = _props.label;
			var rule = _props.rule;
			var labelhide = _props.labelhide;

			var others = _objectWithoutProperties(_props, ["label", "rule", "labelhide"]);

			return _react2.default.createElement(
				"div",
				{ className: "form-group" },
				labelhide ? '' : _react2.default.createElement(
					"label",
					{ htmlFor: rule },
					label
				),
				_react2.default.createElement(_Select2.default, others)
			);
		}
	}]);

	return SelectF2;
}(_react2.default.Component);

exports.default = SelectF2;