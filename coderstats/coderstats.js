var link = document.getElementsByClassName('octicon-link')[0],
    path = document.location.pathname,
    details,
    login,
    url;

if (m = path.match(/^\/([\w-]+)\??.*?/)) {
    login = m[1].trim();
    if (-1 === ['timeline', 'languages', 'blog', 'explore'].indexOf(login)) {
        url = 'http://coderstats.net/github/' + login + '/';
        details = document.getElementsByClassName('vcard-details');
        if (details.length > 0) {
            addLink();
            document.addEventListener('DOMSubtreeModified', navClick, false);
        }
    }
}


function addLink() {
    let cslink = document.getElementById('coderstats');
    if (cslink) return;

    var li = document.createElement('li');
    li.setAttribute('id', 'coderstats');
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


// https://github.com/KyroChi/GitHub-Profile-Fluency/blob/Google-Chrome/chrome/content.js
function navClick() {
    document.removeEventListener('DOMSubtreeModified', navClick);
    setTimeout(function() {
        addLink();
        document.addEventListener('DOMSubtreeModified', navClick, false);
    }, 500);
}
