"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _CheckboxBase = require("./component/CheckboxBase");

var _CheckboxBase2 = _interopRequireDefault(_CheckboxBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckboxF = function (_React$Component) {
    _inherits(CheckboxF, _React$Component);

    function CheckboxF() {
        _classCallCheck(this, CheckboxF);

        return _possibleConstructorReturn(this, (CheckboxF.__proto__ || Object.getPrototypeOf(CheckboxF)).apply(this, arguments));
    }

    _createClass(CheckboxF, [{
        key: "render",
        value: function render() {
            var _props = this.props;
            var label = _props.label;
            var rule = _props.rule;
            var datas = _props.datas;
            var labelHide = _props.labelHide;
            var kind = _props.kind;

            var others = _objectWithoutProperties(_props, ["label", "rule", "datas", "labelHide", "kind"]);

            if (kind && kind.startsWith('form')) {
                return _react2.default.createElement(
                    "div",
                    { className: "form-group checkbox-group" },
                    _react2.default.createElement(
                        "label",
                        { className: kind.endsWith('label') ? null : 'sr-only' },
                        label
                    ),
                    datas.map(function (check, i) {
                        return _react2.default.createElement(_CheckboxBase2.default, _extends({ name: rule, datas: check }, others, { key: i }));
                    })
                );
            } else if (kind == 'base') {
                return _react2.default.createElement(_CheckboxBase2.default, _extends({ name: rule, datas: datas }, others));
            } else {
                return _react2.default.createElement(_CheckboxBase2.default, _extends({ name: rule, datas: datas }, others));
            }
        }
    }]);

    return CheckboxF;
}(_react2.default.Component);

exports.default = CheckboxF;