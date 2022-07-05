export default function classnames(...params) {
    let str = ''
    for (const param of params) {
        // string
        if (typeof param === 'string' && param.length > 0) {
            str += param + ' '
        }
        // object & array
        else if (typeof param === 'object') {
            // array
            if (Array.isArray(param)) {
                for (const e of param) {
                    if (e)
                        str += e + ' '
                }
            }
            // object
            else {
                for (const key in param) {
                    if (param[key]) {
                        str += key + ' '
                    }
                }
            }
        }
    }
    return str
}
