"use strict";
exports.__esModule = true;
function classnames() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    var str = '';
    for (var _a = 0, params_1 = params; _a < params_1.length; _a++) {
        var param = params_1[_a];
        // string
        if (typeof param === 'string' && param.length > 0) {
            str += param + ' ';
        }
        // object & array
        else if (typeof param === 'object') {
            // array
            if (Array.isArray(param)) {
                for (var _b = 0, param_1 = param; _b < param_1.length; _b++) {
                    var e = param_1[_b];
                    if (e)
                        str += e + ' ';
                }
            }
            // object
            else {
                for (var key in param) {
                    if (param[key]) {
                        str += key + ' ';
                    }
                }
            }
        }
    }
    return str;
}
exports["default"] = classnames;
