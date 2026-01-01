function playFunc() {
    var para = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        para[_i] = arguments[_i];
    }
    return para;
}
console.log(playFunc('가위'));
var varData = {
    name: 'kim',
};
function varFunc(para) {
}
varFunc(varData.name);
