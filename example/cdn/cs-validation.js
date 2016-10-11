(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["CsValidation"] = factory(require("React"));
	else
		root["CsValidation"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.InputGroupF = exports.InputGroup = exports.TextareaF = exports.Textarea = exports.SelectF2 = exports.Select2 = exports.SelectF = exports.Select = exports.RadioF = exports.Radio = exports.CheckboxF = exports.Checkbox = exports.Button = exports.InputF = exports.Input = exports.Form = undefined;

	var _Form = __webpack_require__(1);

	Object.defineProperty(exports, 'Form', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Form).default;
	  }
	});

	var _Input = __webpack_require__(5);

	Object.defineProperty(exports, 'Input', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Input).default;
	  }
	});

	var _InputF = __webpack_require__(6);

	Object.defineProperty(exports, 'InputF', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_InputF).default;
	  }
	});

	var _Button = __webpack_require__(7);

	Object.defineProperty(exports, 'Button', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Button).default;
	  }
	});

	var _Checkbox = __webpack_require__(8);

	Object.defineProperty(exports, 'Checkbox', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Checkbox).default;
	  }
	});

	var _CheckboxF = __webpack_require__(9);

	Object.defineProperty(exports, 'CheckboxF', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CheckboxF).default;
	  }
	});

	var _Radio = __webpack_require__(10);

	Object.defineProperty(exports, 'Radio', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Radio).default;
	  }
	});

	var _RadioF = __webpack_require__(11);

	Object.defineProperty(exports, 'RadioF', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_RadioF).default;
	  }
	});

	var _Select = __webpack_require__(12);

	Object.defineProperty(exports, 'Select', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Select).default;
	  }
	});

	var _SelectF = __webpack_require__(13);

	Object.defineProperty(exports, 'SelectF', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_SelectF).default;
	  }
	});

	var _Select2 = __webpack_require__(14);

	Object.defineProperty(exports, 'Select2', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Select2).default;
	  }
	});

	var _SelectF2 = __webpack_require__(15);

	Object.defineProperty(exports, 'SelectF2', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_SelectF2).default;
	  }
	});

	var _Textarea = __webpack_require__(16);

	Object.defineProperty(exports, 'Textarea', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Textarea).default;
	  }
	});

	var _TextareaF = __webpack_require__(17);

	Object.defineProperty(exports, 'TextareaF', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_TextareaF).default;
	  }
	});

	var _InputGroup = __webpack_require__(18);

	Object.defineProperty(exports, 'InputGroup', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_InputGroup).default;
	  }
	});

	var _InputGroupF = __webpack_require__(19);

	Object.defineProperty(exports, 'InputGroupF', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_InputGroupF).default;
	  }
	});

	var _validation = __webpack_require__(20);

	var _validation2 = _interopRequireDefault(_validation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(3);

	var _utils2 = _interopRequireDefault(_utils);

	var _button = __webpack_require__(4);

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

	                    // 绑定回车事件
	                    this.keyEnter(input);
	                }
	            }
	            return datas;
	        }

	        /**
	         * [initFormValidation 表单验证初始化]
	         * @return        {[type]}                 [description]
	         */

	    }, {
	        key: 'initFormValidation',
	        value: function initFormValidation() {
	            var _this2 = this;

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
	                    _this2.formSubmit();
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
	         * [keyEnter 表单对事件的处理-回车自动定位下一输入框]
	         * @param         {[type]}                 element [description]
	         * @return        {[type]}                         [description]
	         */

	    }, {
	        key: 'keyEnter',
	        value: function keyEnter(element) {
	            var _this3 = this;

	            // 绑定 keyup 事件
	            $(element).keyup(function (e) {
	                if (13 == e.keyCode) {
	                    // 回车事件
	                    // 下个表单元素
	                    var next = $(e.target.parentElement).next();
	                    if (next.hasClass('form-group')) {
	                        // 表单元素
	                        var ele = void 0;
	                        // 拿到 表单输入元素
	                        do {
	                            ele = next.find('input[type!=checkbox][type!=radio][type!=search]');
	                            ele = ele.length ? ele : next.find('textarea');
	                            next = next.next();
	                        } while (!ele.length && next.hasClass('form-group'));

	                        if (ele.length) {
	                            // 有表单输入元素
	                            ele.focus();
	                        } else {
	                            // 没有表单输入元素，进行验证
	                            _this3.validator.form();
	                        }
	                    } else {
	                        // 按钮元素，进行验证
	                        _this3.validator.form();
	                    }
	                    return false;
	                }
	            });
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

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Utils = function () {
	    function Utils() {
	        _classCallCheck(this, Utils);
	    }

	    _createClass(Utils, null, [{
	        key: 'isArray',


	        /**
	         * 判断是否为数组
	         * @param  {[type]}  obj 数组
	         * @return {Boolean}     [description]
	         */
	        value: function isArray(obj) {
	            return Array.isArray(obj) || toString.call(obj) === '[object Array]';
	        }
	    }, {
	        key: 'isObject',


	        /**
	         * 判断是否为对象
	         * @param  {[type]}  obj 对象
	         * @return {Boolean}     [description]
	         */
	        value: function isObject(obj) {
	            var type = typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
	            return type === 'function' || type === 'object' && !!obj;
	        }
	    }, {
	        key: 'isEmpty',

	        /**
	         * 判断是否为空
	         * @param  {[type]}  obj 对象
	         * @return {Boolean}     [description]
	         */
	        value: function isEmpty(obj) {
	            if (!obj) return true;
	            if (this.isArray(obj)) {
	                return obj.length == 0;
	            } else if (this.isObject(obj)) {
	                for (var name in obj) {
	                    return false;
	                }
	                return true;
	            }
	            return false;
	        }
	    }, {
	        key: 'getKey',


	        // 返回页面对象key
	        // static key = 0;

	        /**
	         * 返回一个唯一的key <React key={Utils.getKey('react')} />
	         * @param  { 唯一key前缀 }
	         * @return {[react_1 字符串作为唯一key]}
	         */
	        value: function getKey(prefix) {
	            // 构建前缀字符串
	            var p = (prefix || 'key') + '_';
	            // 全局key 自增1
	            Utils.key = Utils.key + 1;
	            // 返回唯一key
	            return p + Utils.key;
	        }

	        /**
	         * 获取对象数据
	         * @param  {普通对象||普通数组} list 集合名称
	         * @param  {字符串||普通数组} key  关键词
	         * @return {普通对象}      
	         */

	    }, {
	        key: 'getKeyObj',
	        value: function getKeyObj(list, key) {

	            if (!list || Utils.isEmpty(list) || !key) return;
	            var obj = {};
	            var keyAry = [];
	            if (key.constructor == String) {
	                keyAry.push(key);
	            } else if (key.constructor == Array) {
	                keyAry = key;
	            }

	            for (var i = 0; i < keyAry.length; i++) {
	                var nowKey = keyAry[i];
	                if (list.constructor == Object) {
	                    if (list[nowKey] != undefined) obj[nowKey] = list[nowKey];
	                } else if (list.constructor == Array) {
	                    if (list[0][nowKey] != undefined) obj[nowKey] = list[0][nowKey];
	                }
	            };

	            return obj;
	        }
	    }]);

	    return Utils;
	}();

	exports.default = Utils;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Button = function (_React$Component) {
		_inherits(Button, _React$Component);

		function Button() {
			var _ref;

			var _temp, _this, _ret;

			_classCallCheck(this, Button);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Button.__proto__ || Object.getPrototypeOf(Button)).call.apply(_ref, [this].concat(args))), _this), _this.state = { disabled: false }, _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(Button, [{
			key: 'render',


			// ========================================= 自定义方法 =================================================

			value: function render() {
				var _props = this.props;
				var label = _props.label;
				var className = _props.className;

				var others = _objectWithoutProperties(_props, ['label', 'className']);

				return _react2.default.createElement(
					'button',
					_extends({ className: 'btn ' + className + ' ' + (this.state.disabled ? 'disabled' : '') }, others),
					label
				);
			}
		}]);

		return Button;
	}(_react2.default.Component);

	exports.default = Button;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Input = function (_React$Component) {
		_inherits(Input, _React$Component);

		function Input() {
			var _ref;

			var _temp, _this, _ret;

			_classCallCheck(this, Input);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Input.__proto__ || Object.getPrototypeOf(Input)).call.apply(_ref, [this].concat(args))), _this), _this.state = { value: _this.props && _this.props.value || '' }, _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(Input, [{
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
				var enabled = _props.enabled;

				var others = _objectWithoutProperties(_props, ['rule', 'enabled']);

				return _react2.default.createElement('input', _extends({ ref: 'sinput', className: 'form-control', name: rule }, others, { value: this.state.value, onChange: this.handleChange.bind(this) }));
			}
		}]);

		return Input;
	}(_react2.default.Component);

	exports.default = Input;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Input = __webpack_require__(5);

	var _Input2 = _interopRequireDefault(_Input);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InputF = function (_React$Component) {
		_inherits(InputF, _React$Component);

		function InputF() {
			_classCallCheck(this, InputF);

			return _possibleConstructorReturn(this, (InputF.__proto__ || Object.getPrototypeOf(InputF)).apply(this, arguments));
		}

		_createClass(InputF, [{
			key: 'render',
			value: function render() {
				var _props = this.props;
				var rule = _props.rule;
				var label = _props.label;
				var enabled = _props.enabled;
				var labelhide = _props.labelhide;

				var others = _objectWithoutProperties(_props, ['rule', 'label', 'enabled', 'labelhide']);

				return _react2.default.createElement(
					'div',
					{ className: 'form-group' },
					labelhide ? '' : _react2.default.createElement(
						'label',
						{ htmlFor: rule },
						label
					),
					_react2.default.createElement(_Input2.default, _extends({ rule: rule }, others))
				);
			}
		}]);

		return InputF;
	}(_react2.default.Component);

	exports.default = InputF;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Button = function (_React$Component) {
		_inherits(Button, _React$Component);

		function Button() {
			var _ref;

			var _temp, _this, _ret;

			_classCallCheck(this, Button);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Button.__proto__ || Object.getPrototypeOf(Button)).call.apply(_ref, [this].concat(args))), _this), _this.state = { disabled: false }, _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(Button, [{
			key: 'render',


			// ========================================= 自定义方法 =================================================

			value: function render() {
				var _props = this.props;
				var label = _props.label;
				var className = _props.className;

				var others = _objectWithoutProperties(_props, ['label', 'className']);

				return _react2.default.createElement(
					'button',
					_extends({ className: 'btn ' + className + ' ' + (this.state.disabled ? 'disabled' : '') }, others),
					label
				);
			}
		}]);

		return Button;
	}(_react2.default.Component);

	exports.default = Button;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Checkbox = function (_React$Component) {
		_inherits(Checkbox, _React$Component);

		function Checkbox() {
			_classCallCheck(this, Checkbox);

			return _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).apply(this, arguments));
		}

		_createClass(Checkbox, [{
			key: 'render',
			value: function render() {
				var _props = this.props;
				var rule = _props.rule;
				var datas = _props.datas;
				var className = _props.className;

				var others = _objectWithoutProperties(_props, ['rule', 'datas', 'className']);

				return _react2.default.createElement(
					'div',
					{ className: (className ? className : 'checkbox') + (others.disabled ? ' disabled' : '') },
					_react2.default.createElement(
						'label',
						{ className: className ? className : 'checkbox' },
						_react2.default.createElement('input', _extends({ type: 'checkbox', name: rule }, others, { defaultChecked: datas.defaultChecked })),
						datas.label || datas.value
					)
				);
			}
		}]);

		return Checkbox;
	}(_react2.default.Component);

	exports.default = Checkbox;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Checkbox = __webpack_require__(8);

	var _Checkbox2 = _interopRequireDefault(_Checkbox);

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
				var labelhide = _props.labelhide;

				var others = _objectWithoutProperties(_props, ["label", "rule", "datas", "labelhide"]);

				return _react2.default.createElement(
					"div",
					{ className: "form-group checkbox-group" },
					labelhide ? '' : _react2.default.createElement(
						"label",
						null,
						label
					),
					datas.map(function (check, i) {
						return _react2.default.createElement(_Checkbox2.default, _extends({ name: rule, datas: check }, others, { key: i }));
					})
				);
			}
		}]);

		return CheckboxF;
	}(_react2.default.Component);

	exports.default = CheckboxF;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RadioF = function (_React$Component) {
		_inherits(RadioF, _React$Component);

		function RadioF() {
			_classCallCheck(this, RadioF);

			return _possibleConstructorReturn(this, (RadioF.__proto__ || Object.getPrototypeOf(RadioF)).apply(this, arguments));
		}

		_createClass(RadioF, [{
			key: 'render',
			value: function render() {
				var _props = this.props;
				var rule = _props.rule;
				var datas = _props.datas;
				var className = _props.className;

				var others = _objectWithoutProperties(_props, ['rule', 'datas', 'className']);

				return _react2.default.createElement(
					'div',
					{ className: (className ? className : 'radio') + (others.disabled ? ' disabled' : '') },
					_react2.default.createElement(
						'label',
						{ className: className ? className : 'radio' },
						_react2.default.createElement('input', _extends({ type: 'radio', name: rule }, others, { defaultChecked: datas.defaultChecked })),
						datas.label || datas.value
					)
				);
			}
		}]);

		return RadioF;
	}(_react2.default.Component);

	exports.default = RadioF;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Radio = __webpack_require__(10);

	var _Radio2 = _interopRequireDefault(_Radio);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RadioF = function (_React$Component) {
		_inherits(RadioF, _React$Component);

		function RadioF() {
			_classCallCheck(this, RadioF);

			return _possibleConstructorReturn(this, (RadioF.__proto__ || Object.getPrototypeOf(RadioF)).apply(this, arguments));
		}

		_createClass(RadioF, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var label = _props.label;
				var rule = _props.rule;
				var datas = _props.datas;
				var labelhide = _props.labelhide;

				var others = _objectWithoutProperties(_props, ["label", "rule", "datas", "labelhide"]);

				return _react2.default.createElement(
					"div",
					{ className: "form-group radio-group" },
					labelhide ? '' : _react2.default.createElement(
						"label",
						null,
						label
					),
					datas.map(function (radio, i) {
						return _react2.default.createElement(_Radio2.default, _extends({ name: rule, datas: radio }, others, { key: i }));
					})
				);
			}
		}]);

		return RadioF;
	}(_react2.default.Component);

	exports.default = RadioF;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Select = function (_React$Component) {
		_inherits(Select, _React$Component);

		function Select() {
			_classCallCheck(this, Select);

			return _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).apply(this, arguments));
		}

		_createClass(Select, [{
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

		return Select;
	}(_react2.default.Component);

	exports.default = Select;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Select = __webpack_require__(12);

	var _Select2 = _interopRequireDefault(_Select);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SelectF = function (_React$Component) {
		_inherits(SelectF, _React$Component);

		function SelectF() {
			_classCallCheck(this, SelectF);

			return _possibleConstructorReturn(this, (SelectF.__proto__ || Object.getPrototypeOf(SelectF)).apply(this, arguments));
		}

		_createClass(SelectF, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var label = _props.label;
				var labelhide = _props.labelhide;

				var others = _objectWithoutProperties(_props, ["label", "labelhide"]);

				return _react2.default.createElement(
					"div",
					{ className: "form-group" },
					labelhide ? '' : _react2.default.createElement(
						"label",
						null,
						label
					),
					_react2.default.createElement(_Select2.default, others)
				);
			}
		}]);

		return SelectF;
	}(_react2.default.Component);

	exports.default = SelectF;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Select2 = function (_React$Component) {
		_inherits(Select2, _React$Component);

		function Select2() {
			var _ref;

			var _temp, _this, _ret;

			_classCallCheck(this, Select2);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Select2.__proto__ || Object.getPrototypeOf(Select2)).call.apply(_ref, [this].concat(args))), _this), _this.state = { placeholder: _this.props.placeholder || '', data: _this.props.datas } || {}, _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(Select2, [{
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

		return Select2;
	}(_react2.default.Component);

	exports.default = Select2;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Select = __webpack_require__(14);

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

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Textarea = function (_React$Component) {
		_inherits(Textarea, _React$Component);

		function Textarea() {
			_classCallCheck(this, Textarea);

			return _possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).apply(this, arguments));
		}

		_createClass(Textarea, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var rule = _props.rule;

				var others = _objectWithoutProperties(_props, ["rule"]);

				return _react2.default.createElement("textarea", _extends({ className: "form-control", name: rule, style: { resize: "none" } }, others));
			}
		}]);

		return Textarea;
	}(_react2.default.Component);

	exports.default = Textarea;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Textarea = __webpack_require__(16);

	var _Textarea2 = _interopRequireDefault(_Textarea);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TextareaF = function (_React$Component) {
		_inherits(TextareaF, _React$Component);

		function TextareaF() {
			_classCallCheck(this, TextareaF);

			return _possibleConstructorReturn(this, (TextareaF.__proto__ || Object.getPrototypeOf(TextareaF)).apply(this, arguments));
		}

		_createClass(TextareaF, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var label = _props.label;
				var labelhide = _props.labelhide;

				var others = _objectWithoutProperties(_props, ["label", "labelhide"]);

				return _react2.default.createElement(
					"div",
					{ className: "form-group" },
					labelhide ? '' : _react2.default.createElement(
						"label",
						null,
						label
					),
					_react2.default.createElement(_Textarea2.default, others)
				);
			}
		}]);

		return TextareaF;
	}(_react2.default.Component);

	exports.default = TextareaF;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Input = __webpack_require__(5);

	var _Input2 = _interopRequireDefault(_Input);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InputGroup = function (_React$Component) {
		_inherits(InputGroup, _React$Component);

		function InputGroup() {
			_classCallCheck(this, InputGroup);

			return _possibleConstructorReturn(this, (InputGroup.__proto__ || Object.getPrototypeOf(InputGroup)).apply(this, arguments));
		}

		_createClass(InputGroup, [{
			key: 'render',
			value: function render() {
				var _props = this.props;
				var pre = _props.pre;
				var end = _props.end;

				var others = _objectWithoutProperties(_props, ['pre', 'end']);

				return _react2.default.createElement(
					'div',
					{ className: 'input-group' },
					pre ? _react2.default.createElement(
						'span',
						{ className: 'input-group-addon' },
						_react2.default.createElement('span', { dangerouslySetInnerHTML: { __html: pre } })
					) : '',
					_react2.default.createElement(_Input2.default, others),
					end ? _react2.default.createElement(
						'span',
						{ className: 'input-group-addon' },
						_react2.default.createElement('span', { dangerouslySetInnerHTML: { __html: end } })
					) : ''
				);
			}
		}]);

		return InputGroup;
	}(_react2.default.Component);

	exports.default = InputGroup;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Input = __webpack_require__(5);

	var _Input2 = _interopRequireDefault(_Input);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InputGroupF = function (_React$Component) {
		_inherits(InputGroupF, _React$Component);

		function InputGroupF() {
			_classCallCheck(this, InputGroupF);

			return _possibleConstructorReturn(this, (InputGroupF.__proto__ || Object.getPrototypeOf(InputGroupF)).apply(this, arguments));
		}

		_createClass(InputGroupF, [{
			key: 'render',
			value: function render() {
				var _props = this.props;
				var rule = _props.rule;
				var label = _props.label;
				var labelhide = _props.labelhide;
				var pre = _props.pre;
				var end = _props.end;

				var others = _objectWithoutProperties(_props, ['rule', 'label', 'labelhide', 'pre', 'end']);

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
						_react2.default.createElement(_Input2.default, _extends({ rule: rule }, others)),
						end ? _react2.default.createElement(
							'span',
							{ className: 'input-group-addon' },
							_react2.default.createElement('span', { dangerouslySetInnerHTML: { __html: end } })
						) : ''
					)
				);
			}
		}]);

		return InputGroupF;
	}(_react2.default.Component);

	exports.default = InputGroupF;

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Validation = function Validation() {
	    _classCallCheck(this, Validation);
	};

	Validation.init = function () {
	    // 覆盖插件原有的 minlength
	    $.validator.addMethod("minlength", function (value, element, params) {
	        var i = 0;
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	            for (var _iterator = value[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var v = _step.value;

	                i = v.codePointAt(0) >= 0x4e00 && v.codePointAt(0) <= 0x9fa5 ? i + 2 : i + 1;
	            }
	        } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion && _iterator.return) {
	                    _iterator.return();
	                }
	            } finally {
	                if (_didIteratorError) {
	                    throw _iteratorError;
	                }
	            }
	        }

	        return this.optional(element) || i >= params;
	    }, "请输入至少 {0} 个字符");

	    // 覆盖插件原有的 maxlength
	    $.validator.addMethod("maxlength", function (value, element, params) {
	        var i = 0;
	        var _iteratorNormalCompletion2 = true;
	        var _didIteratorError2 = false;
	        var _iteratorError2 = undefined;

	        try {
	            for (var _iterator2 = value[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                var v = _step2.value;

	                i = v.codePointAt(0) >= 0x4e00 && v.codePointAt(0) <= 0x9fa5 ? i + 2 : i + 1;
	            }
	        } catch (err) {
	            _didIteratorError2 = true;
	            _iteratorError2 = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                    _iterator2.return();
	                }
	            } finally {
	                if (_didIteratorError2) {
	                    throw _iteratorError2;
	                }
	            }
	        }

	        return this.optional(element) || i <= params;
	    }, "请输入最多 {0} 个字符");

	    // 覆盖插件原有的 rangelength
	    $.validator.addMethod("rangelength", function (value, element, params) {
	        var i = 0;
	        var _iteratorNormalCompletion3 = true;
	        var _didIteratorError3 = false;
	        var _iteratorError3 = undefined;

	        try {
	            for (var _iterator3 = value[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                var v = _step3.value;

	                i = v.codePointAt(0) >= 0x4e00 && v.codePointAt(0) <= 0x9fa5 ? i + 2 : i + 1;
	            }
	        } catch (err) {
	            _didIteratorError3 = true;
	            _iteratorError3 = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                    _iterator3.return();
	                }
	            } finally {
	                if (_didIteratorError3) {
	                    throw _iteratorError3;
	                }
	            }
	        }

	        return this.optional(element) || i >= params[0] && i <= params[1];
	    }, "输入字符最少长度: {0} ,最大长度: {1}");

	    // 验证手机、邮箱或用户名
	    $.validator.addMethod("mobile|email|loginName", function (value, element, params) {
	        return this.optional(element) || /(?!.*\.git$)^[a-zA-Z]([a-zA-Z0-9._-]){4,29}$/.test(value) || /^[0-9]{11}$/.test(value) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
	    }, "请输入手机、邮箱或用户名");
	}();

	exports.default = Validation;

/***/ }
/******/ ])
});
;