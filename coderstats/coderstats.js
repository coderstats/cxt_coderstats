var path = document.location.pathname;
if (m = path.match(/^\/([\w-]+)\??.*?/)) {
    var login = m[1];
    if (-1 === ['timeline', 'languages', 'blog', 'explore'].indexOf(login)) {
        var url = 'http://coderstats.net/github/' + login.trim() + '/';
        var details = document.getElementsByClassName('vcard-details');
        if (details.length > 0) {
            var li = document.createElement('li');
            li.setAttribute('class', 'vcard-detail');
            li.setAttribute('itemprop', 'url');
            li.innerHTML = '<span class="octicon octicon-link"></span><a href="' + url + '">CoderStats(\'' + login + '\')</a>';
            details[0].appendChild(li);
        }
    }
}