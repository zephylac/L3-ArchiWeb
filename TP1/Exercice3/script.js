window.onload = function(){alert('hello world! on-load')};

var btn = document.getElementById('btn')
btn.addEventListener('click', function(event) {
alert('No!!!!!! You clicked me');
});

var img = document.getElementById('img')
img.addEventListener('mouseover', function(event) {
alert('Ah!');
});