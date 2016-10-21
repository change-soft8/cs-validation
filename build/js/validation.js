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