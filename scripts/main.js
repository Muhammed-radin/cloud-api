

function id(elementid){
  return document.getElementById(elementid)
}
function $(query){
  return document.querySelector(query)
}

id('menuBtn').onclick = function () {
  $('.modal-menu').style.display = 'block'
}
id('closeBtn').onclick = function () {
  $('.modal-menu').style.display = 'none'
}