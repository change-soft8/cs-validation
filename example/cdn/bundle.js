!function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){e.exports=r(4)},function(e,t){e.exports=React},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=r(1),s=n(f),p=function(e){function t(){var e,r,n,a;o(this,t);for(var u=arguments.length,i=Array(u),c=0;c<u;c++)i[c]=arguments[c];return r=n=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n.state={disabled:!1},a=r,l(n,a)}return u(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.label,r=e.className,n=a(e,["label","className"]);return s["default"].createElement("button",i({className:"btn "+r+" "+(this.state.disabled?"disabled":"")},n),t)}}]),t}(s["default"].Component);t["default"]=p},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(1),c=n(i),f=r(7),s=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),u(t,[{key:"closeModal",value:function(){return new Promise(function(e,t){setTimeout(function(){console.log("close close close close...."),e()},5e3)})}},{key:"render",value:function(){var e=[{label:"Check me out1",value:"checkone",defaultChecked:!0},{label:"Check me out2",value:"checktwo",defaultChecked:!0},{label:"Check me out3",value:"checkthree"}],t=[{label:"requiredCheck",value:"requiredCheck",defaultChecked:!0}],r=[{label:"请选择",value:"",selected:!0,hide:!0},{label:"project1",value:"project1",selected:!0},{label:"project2",value:"project2"},{label:"project3",value:"project3"},{label:"project4",value:"project4"}],n=[{label:"project1",value:"project1"},{label:"project2",value:"project2",selected:!0},{label:"project3",value:"project3"},{label:"project4",value:"project4"}],a=[{icon:"./china.png",label:"project1",value:"project1"},{icon:"./china.png",label:"project2",value:"project2",selected:!0},{icon:"./china.png",label:"project3",value:"project3"},{label:"project4",value:"project4"}],o={rules:{projectId:{rangelength:[0,32]},taskName:{minlength:2,maxlength:10},inviteFriend:{minlength:4},password2:{equalTo:"[name='password']"}},messages:{projectId:{length:"projectId的长度为0或32"},taskName:{required:"taskName不能为空",minlength:"taskName至少{0}个字符",maxlength:"taskName最多{0}个字符",rangelength:"taskName最少{0}个字符，最多{1}个字符"},requiredCheck:{required:"请选中必选checkbox"},taskDetail:{required:"请输入任务详情"},password2:{equalTo:"密码不一致，请重新输入"}}};return c["default"].createElement("div",{style:{width:400,margin:"auto"}},c["default"].createElement("div",{className:"panel panel-primary"},c["default"].createElement("div",{className:"panel-heading"},"任务添加"),c["default"].createElement("div",{className:"panel-body"},c["default"].createElement(f.Form,{entityOper:"task-insert",config:o},c["default"].createElement(f.Input,{rule:"taskName",label:"任务名",required:!0,value:"默认任务名"}),c["default"].createElement(f.Input,{rule:"inviteFriend",label:"手机、邮箱或用户名",placeholder:"请输入手机、邮箱或用户名",enabled:!0}),c["default"].createElement(f.Checkbox,{rule:"taskLabel",label:"任务标签",datas:e}),c["default"].createElement(f.Checkbox,{rule:"requiredCheck",label:"必选标签",datas:t,required:!0}),c["default"].createElement(f.Radio,{rule:"taskPrio",label:"任务优先级",datas:e}),c["default"].createElement(f.Select,{rule:"projectName",label:"所属项目(select)",datas:r,required:!0}),c["default"].createElement(f.Select2,{rule:"projectName2",label:"所属项目(单选)",datas:n,placeholder:"请选择项目",required:!0,enabled:!0}),c["default"].createElement(f.Select2,{rule:"projectName3",label:"所属项目(多选)",datas:n,placeholder:"请选择项目",multiple:!0}),c["default"].createElement(f.Select2,{rule:"projectName4",label:"所属项目(带图片)",datas:a,placeholder:"请选择项目"}),c["default"].createElement(f.Input,{rule:"password",label:"密码",required:!0}),c["default"].createElement(f.Input,{rule:"password2",label:"确认密码",required:!0}),c["default"].createElement(f.Button,{type:"submit",className:"btn-primary",label:"注册"})))))}}]),t}(c["default"].Component);t["default"]=s},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var a=r(1),o=n(a),l=r(16),u=n(l),i=r(17),c=r(3),f=n(c),s=o["default"].createClass({displayName:"HelloMessage",render:function(){return o["default"].createElement(i.Router,{history:i.hashHistory},o["default"].createElement(i.Route,{path:"/",component:f["default"]}))}});u["default"].render(o["default"].createElement(s,null),document.getElementById("container"))},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=r(1),s=n(f),p=function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.label,r=e.rule,n=e.datas,o=e.className,l=e.labelhide,u=a(e,["label","rule","datas","className","labelhide"]);return s["default"].createElement("div",{className:"form-group checkbox-group"},l?"":s["default"].createElement("label",null,t),n.map(function(e,t){var n=a(e,[]);return s["default"].createElement("div",{className:(o?o:"checkbox")+(u.disabled?" disabled":""),key:t},s["default"].createElement("label",{className:o?o:"checkbox"},s["default"].createElement("input",i({type:"checkbox",name:r},n,u))," ",e.label||e.value))}))}}]),t}(s["default"].Component);t["default"]=p},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(a,o){try{var l=t[a](o),u=l.value}catch(i){return void r(i)}return l.done?void e(u):Promise.resolve(u).then(function(e){n("next",e)},function(e){n("throw",e)})}return n("next")})}}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),p=r(1),d=n(p),b=r(14),y=n(b),h=r(2),v=n(h),m=function(e){function t(){return u(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),s(t,[{key:"componentDidMount",value:function(){this.initFormValidation()}},{key:"componentDidUpdate",value:function(){this.initFormValidation()}},{key:"initForm",value:function(){for(var e={},t=[],r=void 0,n=this.refs.form&&this.refs.form.length||0,a=0;a<n;a++){var o=this.refs.form[a],u=o.name,i=o.value,c=void 0;if(u){if("checkbox"==o.type){if(r!=u&&(t=[],r=u),!o.checked)continue;t.push(i),c=l({},u,t.toString())}else if("radio"==o.type){if(t=[],!o.checked)continue;c=l({},u,i)}else t=[],c=l({},u,i);Object.assign(e,c),this.keyEnter(o)}}return e}},{key:"initFormValidation",value:function(){var e=this;if(this.props.entityOper){this.ifUseConfig=!0;var t=this.props.entityOper;this.entity=t.split("-")[0],this.operation=t.split("-")[1]}else this.ifUseConfig=!1;var r=this.props.config,n=r.rules,a=r.messages,o=this.initForm(),l=Object.keys(o),u=y["default"].getKeyObj(n,l),i=y["default"].getKeyObj(a,l),c={focusCleanup:!0,focusInvalid:!1,rules:u,messages:i,onfocusout:function(e){e.value=e.value.trim(),$(e).valid()},submitHandler:function(t,r){console.log("Submitted!"),e.formSubmit()},errorPlacement:function(e,t){t.is(":radio")||t.is(":checkbox")||t.is("select")?e.appendTo(t.parent()):e.insertAfter(t)}};this.validator=$(this.refs.form).validate(c)}},{key:"formSubmit",value:function(){function e(){return t.apply(this,arguments)}var t=o(regeneratorRuntime.mark(function r(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.refs.button.state.disabled){t.next=2;break}return t.abrupt("return",!1);case 2:if(e=this.initForm(),console.log("disabled"),this.refs.button.setState({disabled:!0}),!this.ifUseConfig){t.next=10;break}return t.next=8,this.formOperation(e);case 8:t.next=12;break;case 10:return t.next=12,this.props.callback(e);case 12:console.log("enabled"),this.refs.button.setState({disabled:!1}),this.setState({});case 15:case"end":return t.stop()}},r,this)}));return e}()},{key:"formOperation",value:function(e){return new Promise(function(e,t){setTimeout(function(){console.log("ajax ajax..."),e()},5e3)})}},{key:"keyEnter",value:function(e){var t=this;$(e).keyup(function(e){if(13==e.keyCode){var r=$(e.target.parentElement).next();if(r.hasClass("form-group")){var n=void 0;do n=r.find("input[type!=checkbox][type!=radio][type!=search]"),n=n.length?n:r.find("textarea"),r=r.next();while(!n.length&&r.hasClass("form-group"));n.length?n.focus():t.validator.form()}else t.validator.form();return!1}})}},{key:"render",value:function(){var e=this.props,t=e.disabled;a(e,["disabled"]);return d["default"].createElement("form",{ref:"form",key:y["default"].getKey("form")},d["default"].Children.map(this.props.children,function(e,r){if(e){var n=Object.assign({},e.props);if(n.disabled=n.enabled?"":n.disabled||t,"submit"==n.type){var o=a(n,[]);return d["default"].createElement(v["default"],f({ref:"button"},o))}var l=Object.assign({},e);return l.props=n,l}}))}}]),t}(d["default"].Component);m.propTypes={config:d["default"].PropTypes.object.isRequired},t["default"]=m},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.InputGroup=t.Textarea=t.Select2=t.Select=t.Radio=t.Checkbox=t.Button=t.Input=t.Form=void 0;var a=r(6);Object.defineProperty(t,"Form",{enumerable:!0,get:function(){return n(a)["default"]}});var o=r(8);Object.defineProperty(t,"Input",{enumerable:!0,get:function(){return n(o)["default"]}});var l=r(2);Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return n(l)["default"]}});var u=r(5);Object.defineProperty(t,"Checkbox",{enumerable:!0,get:function(){return n(u)["default"]}});var i=r(10);Object.defineProperty(t,"Radio",{enumerable:!0,get:function(){return n(i)["default"]}});var c=r(11);Object.defineProperty(t,"Select",{enumerable:!0,get:function(){return n(c)["default"]}});var f=r(12);Object.defineProperty(t,"Select2",{enumerable:!0,get:function(){return n(f)["default"]}});var s=r(13);Object.defineProperty(t,"Textarea",{enumerable:!0,get:function(){return n(s)["default"]}});var p=r(9);Object.defineProperty(t,"InputGroup",{enumerable:!0,get:function(){return n(p)["default"]}});var d=r(15);n(d)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=r(1),s=n(f),p=function(e){function t(){var e,r,n,a;o(this,t);for(var u=arguments.length,i=Array(u),c=0;c<u;c++)i[c]=arguments[c];return r=n=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n.state={value:n.props&&n.props.value||""},a=r,l(n,a)}return u(t,e),c(t,[{key:"handleChange",value:function(){this.setState({value:this.refs.sinput.value})}},{key:"render",value:function(){var e=this.props,t=e.rule,r=e.label,n=(e.enabled,e.labelhide),o=a(e,["rule","label","enabled","labelhide"]);return s["default"].createElement("div",{className:"form-group"},n?"":s["default"].createElement("label",{htmlFor:t},r),s["default"].createElement("input",i({ref:"sinput",type:"text",className:"form-control",name:t},o,{value:this.state.value,onChange:this.handleChange.bind(this)})))}}]),t}(s["default"].Component);t["default"]=p},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=r(1),s=n(f),p=function(e){function t(){var e,r,n,a;o(this,t);for(var u=arguments.length,i=Array(u),c=0;c<u;c++)i[c]=arguments[c];return r=n=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n.state={value:n.props&&n.props.value||""},a=r,l(n,a)}return u(t,e),c(t,[{key:"handleChange",value:function(){this.setState({value:this.refs.sinput.value})}},{key:"render",value:function(){var e=this.props,t=e.rule,r=e.label,n=(e.enabled,e.labelhide),o=e.pre,l=e.end,u=a(e,["rule","label","enabled","labelhide","pre","end"]);return s["default"].createElement("div",{className:"form-group"},n?"":s["default"].createElement("label",{htmlFor:t},r),s["default"].createElement("div",{className:"input-group"},o?s["default"].createElement("span",{className:"input-group-addon"},s["default"].createElement("span",{dangerouslySetInnerHTML:{__html:o}})):"",s["default"].createElement("input",i({ref:"sinput",type:"text",className:"form-control",name:t},u,{value:this.state.value,onChange:this.handleChange.bind(this)})),l?s["default"].createElement("span",{className:"input-group-addon"},s["default"].createElement("span",{dangerouslySetInnerHTML:{__html:l}})):""))}}]),t}(s["default"].Component);t["default"]=p},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=r(1),s=n(f),p=function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.label,r=e.rule,n=e.datas,o=e.className,l=e.labelhide,u=a(e,["label","rule","datas","className","labelhide"]);return s["default"].createElement("div",{className:"form-group radio-group"},l?"":s["default"].createElement("label",null,t),n.map(function(e,t){var n=a(e,[]);return s["default"].createElement("div",{className:(o?o:"radio")+(u.disabled?" disabled":""),key:t},s["default"].createElement("label",{className:o?o:"radio"},s["default"].createElement("input",i({type:"radio",name:r},n,u)),e.label))}))}}]),t}(s["default"].Component);t["default"]=p},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=r(1),s=n(f),p=function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.label,r=e.rule,n=e.datas,o=(e.enabled,e.labelhide),l=a(e,["label","rule","datas","enabled","labelhide"]);return s["default"].createElement("div",{className:"form-group"},o?"":s["default"].createElement("label",null,t),s["default"].createElement("select",i({className:"form-control",name:r},l),n.map(function(e,t){var r=e.hide,n=e.selected,o=a(e,["hide","selected"]);return n&&(l.value=e.value),s["default"].createElement("option",i({key:t,className:r?"hidden":null},o),e.label)})))}}]),t}(s["default"].Component);t["default"]=p},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=r(1),s=n(f),p=function(e){function t(){var e,r,n,a;o(this,t);for(var u=arguments.length,i=Array(u),c=0;c<u;c++)i[c]=arguments[c];return r=n=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n.state={placeholder:n.props.placeholder||"",data:n.props.datas}||{},a=r,l(n,a)}return u(t,e),c(t,[{key:"componentDidMount",value:function(){var e=this,t=this.state.data.map(function(t,r){if(t.selected)return e.setState({value:t.value}),t.value}),r=$(this.refs.select);r.select2({placeholder:this.state.placeholder||null,allowClear:!0,templateResult:this.formatState.bind(this),templateSelection:this.formatState.bind(this)}).val(t||null).trigger("change"),r.on("select2:close",function(e){r.blur()})}},{key:"formatState",value:function(e){if(!e.element||!e.element.value||!$(e.element).attr("icon"))return e.element&&e.element.label||e.text;var t=$("<span><img src="+$(e.element).attr("icon")+' class="img-flag img_24_24" />'+e.element.label+"</span>");return t}},{key:"render",value:function(){var e=this.props,t=e.label,r=e.rule,n=e.datas,o=(e.enabled,e.labelhide),l=a(e,["label","rule","datas","enabled","labelhide"]);return s["default"].createElement("div",{className:"form-group"},o?"":s["default"].createElement("label",{htmlFor:r},t),s["default"].createElement("select",i({className:"js-states form-control",name:r},l,{ref:"select"}),n.map(function(e,t){var r=e.label,n=e.value,o=e.selected,u=a(e,["label","value","selected"]);return o&&(l.value=e.value),s["default"].createElement("option",i({value:n,key:t},u),r)})))}}]),t}(s["default"].Component);t["default"]=p},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=r(1),s=n(f),p=function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.label,r=e.rule,n=e.labelhide,o=a(e,["label","rule","labelhide"]);return s["default"].createElement("div",{className:"form-group"},n?"":s["default"].createElement("label",null,t),s["default"].createElement("textarea",i({className:"form-control",name:r,style:{resize:"none"}},o)))}}]),t}(s["default"].Component);t["default"]=p},function(e,t){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=function(){function e(){r(this,e)}return a(e,null,[{key:"isArray",value:function(e){return Array.isArray(e)||"[object Array]"===toString.call(e)}},{key:"isObject",value:function(e){var t="undefined"==typeof e?"undefined":n(e);return"function"===t||"object"===t&&!!e}},{key:"isEmpty",value:function(e){if(!e)return!0;if(this.isArray(e))return 0==e.length;if(this.isObject(e)){for(var t in e)return!1;return!0}return!1}},{key:"getKey",value:function(t){var r=(t||"key")+"_";return e.key=e.key+1,r+e.key}},{key:"getKeyObj",value:function(t,r){if(t&&!e.isEmpty(t)&&r){var n={},a=[];r.constructor==String?a.push(r):r.constructor==Array&&(a=r);for(var o=0;o<a.length;o++){var l=a[o];t.constructor==Object?void 0!=t[l]&&(n[l]=t[l]):t.constructor==Array&&void 0!=t[0][l]&&(n[l]=t[0][l])}return n}}}]),e}();t["default"]=o},function(e,t){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function a(){r(this,a)};n.init=function(){$.validator.addMethod("minlength",function(e,t,r){var n=0,a=!0,o=!1,l=void 0;try{for(var u,i=e[Symbol.iterator]();!(a=(u=i.next()).done);a=!0){var c=u.value;n=c.codePointAt(0)>=19968&&c.codePointAt(0)<=40869?n+2:n+1}}catch(f){o=!0,l=f}finally{try{!a&&i["return"]&&i["return"]()}finally{if(o)throw l}}return this.optional(t)||n>=r},"请输入至少 {0} 个字符"),$.validator.addMethod("maxlength",function(e,t,r){var n=0,a=!0,o=!1,l=void 0;try{for(var u,i=e[Symbol.iterator]();!(a=(u=i.next()).done);a=!0){var c=u.value;n=c.codePointAt(0)>=19968&&c.codePointAt(0)<=40869?n+2:n+1}}catch(f){o=!0,l=f}finally{try{!a&&i["return"]&&i["return"]()}finally{if(o)throw l}}return this.optional(t)||n<=r},"请输入最多 {0} 个字符"),$.validator.addMethod("rangelength",function(e,t,r){var n=0,a=!0,o=!1,l=void 0;try{for(var u,i=e[Symbol.iterator]();!(a=(u=i.next()).done);a=!0){var c=u.value;n=c.codePointAt(0)>=19968&&c.codePointAt(0)<=40869?n+2:n+1}}catch(f){o=!0,l=f}finally{try{!a&&i["return"]&&i["return"]()}finally{if(o)throw l}}return this.optional(t)||n>=r[0]&&n<=r[1]},"输入字符最少长度: {0} ,最大长度: {1}"),$.validator.addMethod("mobile|email|loginName",function(e,t,r){return this.optional(t)||/(?!.*\.git$)^[a-zA-Z]([a-zA-Z0-9._-]){4,29}$/.test(e)||/^[0-9]{11}$/.test(e)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)},"请输入手机、邮箱或用户名")}(),t["default"]=n},function(e,t){e.exports=ReactDOM},function(e,t){e.exports=ReactRouter}]);