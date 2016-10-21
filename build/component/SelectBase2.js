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

var Select2Base = function (_React$Component) {
	_inherits(Select2Base, _React$Component);

	function Select2Base() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Select2Base);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Select2Base.__proto__ || Object.getPrototypeOf(Select2Base)).call.apply(_ref, [this].concat(args))), _this), _this.state = { placeholder: _this.props.placeholder || '', data: _this.props.datas } || {}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Select2Base, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var _this2 = this;

			// 获取默认的选项
			var defaultValue = this.state.data.map(function (data, i) {
				if (data.selected) {
					_this2.setState({ value: data.value });
					return data.value;
				}
			});

			var $select = $(this.refs.select);
			// select2 初始化
			$select.select2({
				placeholder: this.state.placeholder || null,
				// 单选时允许清空选择
				allowClear: true,
				// 数据绑定
				// data: this.state.data
				// selected 样式控制
				templateResult: this.formatState.bind(this),
				// selected 选中样式控制
				templateSelection: this.formatState.bind(this)
			}).val(defaultValue || null).trigger("change");

			// select 选项收起时的回调事件
			$select.on("select2:close", function (e) {
				$select.blur();
			});
		}

		// ========================================= 自定义方法 =================================================
		/**
   * [formatState 自定义selection的选择列表样式]
   * @param         {[type]}                 state [description]
   * @return        {[type]}                       [description]
   */

	}, {
		key: "formatState",
		value: function formatState(state) {
			if (!state.element || !state.element.value || !$(state.element).attr('icon')) {
				return state.element && state.element.label || state.text;
			}
			var $state = $("<span><img src=" + $(state.element).attr('icon') + " class=\"img-flag img_24_24\" />" + state.element.label + "</span>");
			return $state;
		}
	}, {
		key: "render",
		value: function render() {
			var _props = this.props;
			var rule = _props.rule;
			var datas = _props.datas;

			var others = _objectWithoutProperties(_props, ["rule", "datas"]);

			return _react2.default.createElement(
				"select",
				_extends({ className: "js-states form-control", name: rule }, others, { ref: "select" }),
				datas.map(function (select, i) {
					var label = select.label;
					var value = select.value;
					var selected = select.selected;

					var otherd = _objectWithoutProperties(select, ["label", "value", "selected"]);

					// 将原生HTML的 selected="selected" 改成 select标签的 value="..."


					if (selected) {
						others.value = select.value;
					}

					return _react2.default.createElement(
						"option",
						_extends({ value: value, key: i }, otherd),
						label
					);
				})
			);
		}
	}]);

	return Select2Base;
}(_react2.default.Component);

exports.default = Select2Base;