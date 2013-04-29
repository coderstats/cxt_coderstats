var path = document.location.pathname;
if (m = path.match(/^\/([\w-]+)\??.*?/)) {
    var nick = m[1];
    var url='http://cs.geeksta.net/github/'+$.trim(nick);$('.details').append('<dl><dt><span class="mini-icon mini-icon-link"></span></dt><dd><a href="'+url+'">Coderstats</a></dd></dl>');
}