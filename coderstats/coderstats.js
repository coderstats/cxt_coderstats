var path = document.location.pathname;
if (m = path.match(/^\/([\w-]+)\??.*?/)) {
    var login = m[1];
    if (-1 === ['timeline', 'languages', 'blog', 'explore'].indexOf(login)) {
        var url = 'http://coderstats.net/github/' + login.trim() + '/';
        var details = document.getElementsByClassName('details');
        var dl = document.createElement('dl');
        dl.innerHTML = '<dt><span class="octicon octicon-link"></span></dt><dd><a href="' + url + '">CoderStats(\'' + login + '\')</a></dd>';
        details[0].appendChild(dl);
    }
}