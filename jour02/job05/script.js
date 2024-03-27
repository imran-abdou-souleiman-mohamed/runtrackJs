document.addEventListener('keydown', function(event) {
    var keylogger = document.getElementById("keylogger");
    var key = event.key.toLowerCase();
    
    if (key.match(/[a-z]/)) {
        if (document.activeElement !== keylogger) {
            keylogger.value += key;
        } else {
            keylogger.value += key + key;
        }
    }
});

window.addEventListener('scroll', function() {
    var footer = document.querySelector("footer");
    var windowHeight = window.innerHeight;
    var bodyHeight = document.body.clientHeight;
    var scrollTop = window.scrollY || window.pageYOffset;
    var scrollPercent = (scrollTop / (bodyHeight - windowHeight)) * 100;

    footer.style.backgroundColor = "hsl(" + scrollPercent + ", 100%, 50%)";
});
