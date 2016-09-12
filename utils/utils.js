export default class Utils {

    /**
     * 判断是否为数组
     * @param  {[type]}  obj 数组
     * @return {Boolean}     [description]
     */
    static isArray(obj) {
        return Array.isArray(obj) || toString.call(obj) === '[object Array]';
    };

    /**
     * 判断是否为对象
     * @param  {[type]}  obj 对象
     * @return {Boolean}     [description]
     */
    static isObject(obj) {
        var type = typeof obj;
        return type === 'function' || type === 'object' && !!obj;
    };
    /**
     * 判断是否为空
     * @param  {[type]}  obj 对象
     * @return {Boolean}     [description]
     */
    static isEmpty(obj) {
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
    };

    // 返回页面对象key
    // static key = 0;

    /**
     * 返回一个唯一的key <React key={Utils.getKey('react')} />
     * @param  { 唯一key前缀 }
     * @return {[react_1 字符串作为唯一key]}
     */
    static getKey(prefix) {
        // 构建前缀字符串
        let p = (prefix || 'key') + '_';
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
    static getKeyObj(list, key) {

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
}
