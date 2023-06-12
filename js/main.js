const toggleBtn = document.querySelector('toggle_button')
const toggleBtnIcon = document.querySelector('icon')
const dropDown = document.querySelector('dropdown')

toggleBtn.onclick = function (){
  dropDown.classList.toggle('open')
}