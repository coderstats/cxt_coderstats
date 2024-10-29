const meta_profile = document.querySelector('meta[property="profile:username"]');
if (login = meta_profile.getAttribute('content')) {
    if (details = document.getElementsByClassName('vcard-details')) {
        addLink('http://coderstats.github.io/github#' + login);
    }
}


function addLink(url) {
    const cslink = document.getElementById('coderstats');
    if (cslink) return;

    const li = document.createElement('li');
    li.setAttribute('id', 'coderstats');
    li.setAttribute('class', 'vcard-detail pt-1');
    li.setAttribute('itemprop', 'url');

    const span = document.createElement('span');
    span.setAttribute('class', 'octicon');
    span.setAttribute('style', 'margin-top:-2px;');
    span.textContent = "📊";
    li.appendChild(span)

    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.textContent = "CoderStats('" + login + "')";

    li.appendChild(a);
    details[0].appendChild(li);
}
