'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_React$Component) {
    _inherits(Form, _React$Component);

    function Form() {
        _classCallCheck(this, Form);

        return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
    }

    _createClass(Form, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // 页面new时，表单验证初始化
            this.initFormValidation();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            // 页面重构时，表单验证初始化
            this.initFormValidation();
        }

        // ========================================= 自定义方法 =================================================
        /**
         * [initForm 表单数据初始化]
         * @return        {[type]}                 [description]
         */

    }, {
        key: 'initForm',
        value: function initForm() {
            var _this2 = this;

            var datas = {};
            var checkValue = [];
            var pname = void 0;
            var len = this.refs.form && this.refs.form.length || 0;
            for (var i = 0; i < len; i++) {
                var input = this.refs.form[i];
                var name = input.name;
                var val = input.value;
                var data = void 0;
                if (name) {
                    if (input.type == 'checkbox') {
                        if (pname != name) {
                            checkValue = [];
                            pname = name;
                        }
                        if (input.checked) {
                            checkValue.push(val);
                            data = _defineProperty({}, name, checkValue.toString());
                        } else {
                            continue;
                        }
                    } else if (input.type == 'radio') {
                        checkValue = [];
                        if (input.checked) {
                            data = _defineProperty({}, name, val);
                        } else {
                            continue;
                        }
                    } else {
                        checkValue = [];
                        data = _defineProperty({}, name, val);
                    }

                    Object.assign(datas, data);
                }
            }

            // 绑定回车事件
            this.keyEnter(this.refs.form, function () {
                _this2.validator.form();
            });

            return datas;
        }

        /**
         * [initFormValidation 表单验证初始化]
         * @return        {[type]}                 [description]
         */

    }, {
        key: 'initFormValidation',
        value: function initFormValidation() {
            var _this3 = this;

            // 实体 和 操作
            if (this.props.entityOper) {
                // 判断能不能直接发布事件
                this.ifUseConfig = true;
                var entityOper = this.props.entityOper;
                // 获取实体
                this.entity = entityOper.split('-')[0];
                // 获取操作
                this.operation = entityOper.split('-')[1];
            } else {
                // 判断能不能直接发布事件
                this.ifUseConfig = false;
            }

            var config = this.props.config;
            // 初始化验证规则
            // 获取实体的 所有 验证规则
            var rulesAll = config.rules;
            // 获取实体的 所有 报错信息
            var msgAll = config.messages;

            // 表单初始数据
            var datas = this.initForm();

            // 获得表单的数据key
            var filter = Object.keys(datas);
            // 根据表单数据key获取 所需 验证
            var rules = _utils2.default.getKeyObj(rulesAll, filter);
            // 根据表单数据key获取 所需 报错信息
            var messages = _utils2.default.getKeyObj(msgAll, filter);

            // 验证实体
            var validator = {
                // 获得焦点报错信息清除
                focusCleanup: true,
                // 提交表单验证时不自动聚焦错误表单组件
                focusInvalid: false,
                // 验证规则
                rules: rules,
                // 验证报错信息
                messages: messages,
                // 失去焦点自动验证
                onfocusout: function onfocusout(element) {
                    element.value = element.value.trim();
                    $(element).valid();
                },
                // 验证通过
                submitHandler: function submitHandler(form, event) {
                    console.log("Submitted!");
                    _this3.formSubmit();
                },
                // 验证错误
                errorPlacement: function errorPlacement(error, element) {
                    // 指定错误信息位置
                    // 如果是radio或checkbox或select
                    if (element.is(':radio') || element.is(':checkbox') || element.is('select')) {
                        // 将错误信息添加当前元素的父结点后面
                        error.appendTo(element.parent());
                    } else if (element.is(':input') && element.parent().hasClass('input-group')) {
                        // 将错误信息添加当前元素的父结点后面
                        error.insertAfter(element.parent());
                    } else {
                        // 将错误信息直接添加在后面
                        error.insertAfter(element);
                    }
                }
            };

            // 初始化验证
            this.validator = $(this.refs.form).validate(validator);
        }

        /**
         * [formSubmit 表单验证成功之后的操作]
         * @return        {[type]}                 [description]
         */

    }, {
        key: 'formSubmit',
        value: function () {
            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                var datas;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!this.refs.button.state.disabled) {
                                    _context.next = 2;
                                    break;
                                }

                                return _context.abrupt('return', false);

                            case 2:
                                // 获取表单数据
                                datas = this.initForm();
                                // 按钮 disabled

                                console.log('disabled');
                                this.refs.button.setState({ disabled: true });

                                if (!this.ifUseConfig) {
                                    _context.next = 10;
                                    break;
                                }

                                _context.next = 8;
                                return this.formOperation(datas);

                            case 8:
                                _context.next = 12;
                                break;

                            case 10:
                                _context.next = 12;
                                return this.props.callback(datas);

                            case 12:

                                // 按钮 enabled
                                console.log('enabled');
                                this.refs.button.setState({ disabled: false });
                                // 表单重置
                                this.setState({});

                            case 15:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function formSubmit() {
                return _ref.apply(this, arguments);
            }

            return formSubmit;
        }()

        /**
         * [formOperation 表单数据接口操作]
         * @return        {[type]}                 [description]
         */

    }, {
        key: 'formOperation',
        value: function formOperation(datas) {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    console.log('ajax ajax...');
                    resolve();
                }, 5000);
            });

            // debugger;
            // return window.db[entity][this.operation](datas);
        }

        /**
         * [keyEnter description]
         * @param         {[type]}                 select [表单选择器]
         * @param         {[type]}                 func   [回调方法]
         * @return        {[type]}                        [description]
         */

    }, {
        key: 'keyEnter',
        value: function keyEnter(select, func) {
            var uuid = this.uuid();
            $(select).attr('id', uuid);
            var ips = $(select).find('input:checked,input:selected,[name][type!=checkbox][type!=radio]');
            var l = ips.length;
            if (l < 1) {
                ips = $(select);
                l = 1;
            }
            ips.each(function (i) {
                var _this4 = this;

                var end = false;
                if (i == ips.length - 1) end = true;
                $(this).attr({
                    'enter_index': i,
                    'enter_end': end
                });
                $(this).keyup(function (event) {
                    if (13 == event.keyCode) {
                        var e = $(_this4).attr('enter_end');
                        var a = $(_this4).attr('enter_finish');
                        var ei = parseInt($(_this4).attr('enter_index'));
                        if (a || e == 'true') {
                            func();
                        } else {
                            $('#' + uuid + ' [enter_index="' + (ei + 1) + '"]')[0].focus();
                        }
                    }
                });
            });
        }

        /**
         * [clear 表单验证清除]
         * @return        {[type]}                 [description]
         */

    }, {
        key: 'clear',
        value: function clear() {
            this.validator.resetForm();
        }

        /**
         * [uuid 生成]
         * @return        {[type]}                 [uuid]
         */

    }, {
        key: 'uuid',
        value: function uuid() {
            var s = [];
            var hexDigits = "0123456789abcdef";
            for (var i = 0; i < 36; i++) {
                s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
            }
            s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
            s[19] = hexDigits.substr(s[19] & 0x3 | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
            s[8] = s[13] = s[18] = s[23] = "-";

            var uuid = s.join("");
            return uuid;
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var disabled = _props.disabled;

            var others = _objectWithoutProperties(_props, ['disabled']);

            return _react2.default.createElement(
                'form',
                { ref: 'form', key: _utils2.default.getKey('form') },
                _react2.default.Children.map(this.props.children, function (element, i) {
                    // 设置 disabled 属性
                    if (element) {
                        var props = Object.assign({}, element.props);
                        props.disabled = props.enabled ? '' : props.disabled || disabled;
                        if (props.type == 'submit') {
                            var othersb = _objectWithoutProperties(props, []);

                            return _react2.default.createElement(_button2.default, _extends({ ref: 'button' }, othersb));
                        } else {
                            var ele = Object.assign({}, element);
                            ele.props = props;
                            return ele;
                        }
                    }
                })
            );
        }
    }]);

    return Form;
}(_react2.default.Component);

Form.propTypes = {
    config: _react2.default.PropTypes.object.isRequired
};
exports.default = Form;