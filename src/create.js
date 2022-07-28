function id(elementid) {
    return document.getElementById(elementid)
}
function $(query) {
    return document.querySelector(query)
}

id('src').onkeydown = function (e) {
    if (e.keyCode == 13) {
        id('links').innerHTML += `<div class="box">
        <div>
            <a href="${id('src').value}" target="_blank">${id('src').value}</a>
            <p>${id('type').value}</p>
        </div>
    </div>`
    }
}
id('tag').onkeydown = function (e) {
    if (e.keyCode == 13) {
        id('tagbox').innerHTML += `<div class="tag">${id('tag').value}</div>`
    }
}
id('logo').onkeydown = function (e) {
    if (e.keyCode == 13) {
        id('showImages').innerHTML += `<img src="${id('logo').value}" alt="">`
    }
}
id('thumb').onkeydown = function (e) {
    if (e.keyCode == 13) {
        id('showImages').innerHTML += `<img src="${id('thumb').value}" alt="">`
    }
}
id('screen').onkeydown = function (e) {
    if (e.keyCode == 13) {
        id('showImages').innerHTML += `<img src="${id('screen').value}" alt="">`
    }
}