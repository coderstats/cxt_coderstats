var path = document.location.pathname;
if (m = path.match(/^\/([\w-]+)\??.*?/)) {
    var login = m[1];
    if (-1 === ['timeline', 'languages', 'blog', 'explore'].indexOf(login)) {
        var url = 'http://coderstats.net/github/' + login.trim() + '/';
        var details = document.getElementsByClassName('vcard-details');
        if (details.length > 0) {
            var link = document.getElementsByClassName('octicon-link')[0];

            var li = document.createElement('li');
            li.setAttribute('class', 'vcard-detail pt-1');
            li.setAttribute('itemprop', 'url');

            var a = document.createElement('a');
            a.setAttribute('href', url);
            a.textContent = "CoderStats('" + login + "')";

            var svg = link.cloneNode();
            svg.appendChild(link.childNodes[0].cloneNode())

            li.appendChild(svg);
            li.appendChild(a);
            details[0].appendChild(li);
        }
    }
}