"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectBase = function (_React$Component) {
	_inherits(SelectBase, _React$Component);

	function SelectBase() {
		_classCallCheck(this, SelectBase);

		return _possibleConstructorReturn(this, (SelectBase.__proto__ || Object.getPrototypeOf(SelectBase)).apply(this, arguments));
	}

	_createClass(SelectBase, [{
		key: "render",
		value: function render() {
			var _props = this.props;
			var rule = _props.rule;
			var datas = _props.datas;

			var others = _objectWithoutProperties(_props, ["rule", "datas"]);

			return _react2.default.createElement(
				"select",
				_extends({ className: "form-control", name: rule }, others),
				datas.map(function (option, i) {
					var hide = option.hide;
					var selected = option.selected;

					var otherss = _objectWithoutProperties(option, ["hide", "selected"]);

					// 将原生HTML的 selected="selected" 改成 select标签的 value="..."


					if (selected) {
						others.value = option.value;
					}
					return _react2.default.createElement(
						"option",
						_extends({ key: i, className: hide ? 'hidden' : null }, otherss),
						option.label
					);
				})
			);
		}
	}]);

	return SelectBase;
}(_react2.default.Component);

exports.default = SelectBase;