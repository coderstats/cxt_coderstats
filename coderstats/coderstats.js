var nick = $('em[itemprop="additionalName"]').text();// assume user page
var url='http://coderstats.geeksta.net/coder/'+$.trim(nick);$('.details').append('<dl><dt><span class="mini-icon mini-icon-link"></span></dt><dd><a href="'+url+'">Coderstats</a></dd></dl>');

