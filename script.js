// Tabbed Menu
function openMenu(evt, menuName) {
  var i, x, tablinks
  x = document.getElementsByClassName('menu')
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none'
  }
  tablinks = document.getElementsByClassName('tablink')
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' w3-dark-grey', '')
  }
  document.getElementById(menuName).style.display = 'block'
  evt.currentTarget.firstElementChild.className += ' w3-dark-grey'
}
document.getElementById('myLink').click()

// Script to open and close sidebar
function w3_open() {
  document.getElementById('mySidebar').style.display = 'block'
  document.getElementById('myOverlay').style.display = 'block'
}

function w3_close() {
  document.getElementById('mySidebar').style.display = 'none'
  document.getElementById('myOverlay').style.display = 'none'
}