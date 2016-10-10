'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputGroup = function (_React$Component) {
	_inherits(InputGroup, _React$Component);

	function InputGroup() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, InputGroup);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InputGroup.__proto__ || Object.getPrototypeOf(InputGroup)).call.apply(_ref, [this].concat(args))), _this), _this.state = { value: _this.props && _this.props.value || '' }, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(InputGroup, [{
		key: 'handleChange',


		// ========================================= 自定义方法 =================================================
		/**
   * [handleChange 输入框内容变化 触发事件]
   * @return        {[type]}                 [description]
   */
		value: function handleChange() {
			this.setState({ 'value': this.refs.sinput.value });
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props;
			var rule = _props.rule;
			var label = _props.label;
			var enabled = _props.enabled;
			var labelhide = _props.labelhide;
			var pre = _props.pre;
			var end = _props.end;

			var others = _objectWithoutProperties(_props, ['rule', 'label', 'enabled', 'labelhide', 'pre', 'end']);

			var test = "<input type='checkbox'>";
			return _react2.default.createElement(
				'div',
				{ className: 'form-group' },
				labelhide ? '' : _react2.default.createElement(
					'label',
					{ htmlFor: rule },
					label
				),
				_react2.default.createElement(
					'div',
					{ className: 'input-group' },
					pre ? _react2.default.createElement(
						'span',
						{ className: 'input-group-addon' },
						_react2.default.createElement('span', { dangerouslySetInnerHTML: { __html: pre } })
					) : '',
					_react2.default.createElement('input', _extends({ ref: 'sinput', type: 'text', className: 'form-control', name: rule }, others, { value: this.state.value, onChange: this.handleChange.bind(this) })),
					end ? _react2.default.createElement(
						'span',
						{ className: 'input-group-addon' },
						_react2.default.createElement('span', { dangerouslySetInnerHTML: { __html: end } })
					) : ''
				)
			);
		}
	}]);

	return InputGroup;
}(_react2.default.Component);

exports.default = InputGroup;