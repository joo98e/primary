
var numSet = {
    set: function (num) {
        var a = Number(num);
        return a < 10 ? String('0' + a) : String(a);
    }
}
