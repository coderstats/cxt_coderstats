var nick = $('span[itemprop]="nickname"').text();// assume user page
if (!nick) nick = $('.pagehead.userpage').attr('data-name');// org page
var url='http://coderstats.geeksta.net/coder/'+$.trim(nick);$('.page-profile .vcard').append('<dl><dt>Coderstats</dt><dd><a href="'+url+'">'+url+'</a></dd></dl>');

