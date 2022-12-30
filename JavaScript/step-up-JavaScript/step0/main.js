console.log("Hello from main.js");
var element = document.getElementById('innerTest');
element.innerHTML = '<strong>JavaScript</strong> で書きました';

var buttonElm = document.getElementById('testButton');
buttonElm.addEventListener('click', function() {
    var numberElm = document.getElementById('number');
    var val = numberElm.value;
    var num = parseInt(val);
    if (num % 2 == 0) {
        alert('偶数です');
    } else {
        alert('奇数です');
    }
});

var fruits = ['りんご', 'もも', 'みかん'];
var fruitsStr = '';
for(var i = 0; i < fruits.length; i++) {
    fruitsStr += '<li class="fruit">' + fruits[i] + '</li>';
}

var arrayElm = document.getElementById('arrayTest');
arrayElm.innerHTML = fruitsStr;
