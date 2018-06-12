$(document).ready(function() {
    $("a.scrollto").click(function () {
        var elementClick = '#'+$(this).attr("href").split("#")[1]
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });
});*/
typewriter = function(selector, lines) {
    var target = document.querySelector(selector)
    var lineDelay = 800
    var charDelay = 180

    var ln = 0
    var line = lines[ln]
    var char, timer = 0

    var printWord = function(){
        char = 0
        timer = setInterval(function(){
            if (char < line.length) {
                target.innerHTML = line.substring(0, char)
                    + '<span class="lastLetter">'
                    + line.substr(char,1)
                    + '</span>'
                char++
            } else {
                clearTimeout(timer);
                timer = setTimeout(function(){
                    ln = ++ln<lines.length?ln:0
                    line = lines[ln] // change line
                    printWord()
                }, lineDelay);
            }
        }, charDelay);
    }
    printWord()
}

typewriter('#target1', ["", "]);