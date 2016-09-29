export default class Validation {

    static init = (() => {
        // 覆盖插件原有的 minlength
        $.validator.addMethod("minlength", function(value, element, params) {
            let i = 0;
            for (var v of value) {
                i = v.codePointAt(0) >= 0x4e00 && v.codePointAt(0) <= 0x9fa5 ? i + 2 : i + 1;
            }
            return this.optional(element) || (i >= params);
        }, "请输入至少 {0} 个字符");

        // 覆盖插件原有的 maxlength
        $.validator.addMethod("maxlength", function(value, element, params) {
            let i = 0;
            for (var v of value) {
                i = v.codePointAt(0) >= 0x4e00 && v.codePointAt(0) <= 0x9fa5 ? i + 2 : i + 1;
            }
            return this.optional(element) || (i <= params);
        }, "请输入最多 {0} 个字符");

        // 覆盖插件原有的 rangelength
        $.validator.addMethod("rangelength", function(value, element, params) {
            let i = 0;
            for (var v of value) {
                i = v.codePointAt(0) >= 0x4e00 && v.codePointAt(0) <= 0x9fa5 ? i + 2 : i + 1;
            }
            return this.optional(element) || (i >= params[0] && i <= params[1]);
        }, "输入字符最少长度: {0} ,最大长度: {1}");

        // 验证手机、邮箱或用户名
        $.validator.addMethod("mobile|email|loginName", function(value, element, params) {
            return this.optional(element) || /(?!.*\.git$)^[a-zA-Z]([a-zA-Z0-9._-]){4,29}$/.test(value) || /^[0-9]{11}$/.test(value) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
        }, "请输入手机、邮箱或用户名");

    })()

}
