"use strict";

var pow = function() {
    var a = prompt('enter an integer');
    var x = prompt('enter an integer');
    var check = !isNaN(parseFloat(a)) && !isNaN(parseFloat(x)) && (Math.ceil(a) == a) && (Math.ceil(x) == x);

    if (check) {
        var result = 1;
        if (x < 0) {
            x = -x;
            a = 1 / a;
        }
        for (var i = 0; i < x; i++) {
            result *= a;
        }
        console.log('result = ' + result);
    } else {
        console.log('not correct');
    }
};

var signIn = function() {
    var arr = [];
    while (arr.length < 5) {
        var name = prompt('enter name');
        arr.push(name);
    }

    var userName = prompt('enter the user name');
    for (var i = 0; i < 5; i++) {
        if (arr[i] === userName) {
            return alert(userName + ', вы успешно вошли');
        }
    }
    return alert('login failed');
};

alert('function pow');
pow();
alert('function singIn')
signIn();
