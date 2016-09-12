/**
 * 任务实体配置
 */
export default {
    // 集合查询数据详情操作
    "findOne": {
        // 查询详情，获取Url
        getUrl: (param) => {
            // 如果为字符串
            if (typeof param === 'string') {
                // 构建参数对象
                param = { taskId: param };
            }
            // 返回查询详情url
            return `/step/v2/task/taskCard/${param.taskId}`
        },
        getParam: (param) => {
            return param;
        },
        // 查询详情，mock数据结构
        "return": {
            "needDoPage": {
                "totalCount": 'int',
                "pageList": [
                    "taskId", "taskTitle", "isApply", "subTaskCount",
                    "subTaskFinishCount", "disscussCount", "status"
                ]
            }
        }
    },
    // 全项目周期待开发查询
    "find": {
        // 查询集合，获取Url
        getUrl: (param) => {
            return `/step/v2/task/taskCard`;
        },
        // 查询集合，mock数据结构
        "return": {
            "finishPage": "int",
            "needDoPage": {
                "totalCount": "int",
                "pageList": [
                    "taskId", "taskTitle", "isApply", "subTaskCount",
                    "subTaskFinishCount", "disscussCount", "status"
                ]
            },
        },
        "mockUrl": "./app/mock/success.json"
    },
    "insertOne": {
        //包含的参数，只要有include，持续层就会调用
        "include": ["projectId", "inviteStr"],
        //不包含的参数，可有可无，只有在include不存在时才会执行
        "exclusive": ["projectId", "inviteStr"],
        getUrl: (param) => {
            return `v2/task/taskCard`;
        },
        getParam: (param) => {
            return param;
        },
        "return": {
            "taskId": 32
        }
    },
    "insertMore": {
        //包含的参数，只要有include，持续层就会调用
        "include": ["projectId", "inviteStr"],
        getUrl: (param) => {
            return `/step/v2/task/taskCard`;
        },
        getParam: (param) => {
            param = { "inviteMember": param };
            return param;
        }
    },
    "update": {
        //包含的参数，只要有include，持续层就会调用
        "include": ["taskId", "taskName"],
        //不包含的参数，可有可无，只有在include不存在时才会执行
        "exclusive": ["taskId", "taskName"],
        getUrl: (param) => {
            return `/step/v2/task/taskCard/${param}`;
        },
        getParam: (param) => {
            return param;
        }
    },
    "remove": {
        //包含的参数，只要有include，持续层就会调用
        "include": ["taskId"],
        getUrl: (param) => {
            return `/step/v2/task/taskCard/${param}`
        },
        getParam: (param) => {
            return param;
        }
    },
    // 实体相关配置
    "entity": {
        // 实体主键
        "primaryKey": "taskId",
        // 实体字段配置，根据mock级别 + 数据类型 = mock属性长度
        "fields": {
            "taskId": "string",
            "taskName": "string",
            "taskTitle": ['17001', '17002'],
            "isApply": 'int',
            "subTaskCount": 'int',
            "subTaskFinishCount": 'float',
            "disscussCount": 'int',
            "status": 'string'
        },
        // 验证规则
        "rules": {
            "projectId": {
                "rangelength": [0, 32]
            },
            "taskName": {
                "minlength": 2,
                "maxlength": 10,
                // "rangelength": [4, 8]
            },
            "inviteFriend": {
                "mobile|email|loginName": ""
            },
            "password2": {
                "equalTo": "[name='password']"
            }
        },
        // 验证错误提示信息
        "messages": {
            "projectId": {
                "length": "projectId的长度为0或32"
            },
            "taskName": {
                "required": "taskName不能为空",
                "minlength": "taskName至少{0}个字符",
                "maxlength": "taskName最多{0}个字符",
                "rangelength": "taskName最少{0}个字符，最多{1}个字符"
            },
            "requiredCheck": {
                "required": "请选中必选checkbox"
            },
            "taskDetail": {
                "required": "请输入任务详情"
            },
            "password2": {
                "equalTo": "密码不一致，请重新输入"
            }
        }
    }
}
