const api_url = 'https://muhammed-radin.github.io/ag-api/data.js';


async function getData() {
    try {
        const response = await fetch(api_url);
        console.log(response)
        const data = await response.text();
        var c = 'var app = ' + data;
        eval(c)
        console.log(app);
    } catch (err) {
        console.log(err);
    }
    let script = app.script;
    let apps = script[0].apps;
    $('.bg-img-top').style.backgroundImage = 'url(' + apps[0].imgUrl.thumb + ')';
    $('.topic-box h2').innerHTML = apps[0].appName;
    $('.topic-box p').innerHTML = apps[0].description;
    $('.topic-box .row').innerHTML = '';
    apps[0].tags.forEach(function (value,index){
        $('.topic-box .row').innerHTML = `<div class="tag">${value}</div>`
    })
}

getData();
