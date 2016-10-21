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
    }]);

    return Utils;
}();

exports.default = Utils;