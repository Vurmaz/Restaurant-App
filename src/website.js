import loadHome from './home.js'
import loadMenu from './menu.js'
import loadContact from './contact.js'
function createHeader(){
  const header = document.createElement('header')
  const text = document.createElement('h1')
  text.textContent = 'Quote Burger'
  header.appendChild(text)
  return header
}
function createNav() {
  const nav = document.createElement('nav')
  const homeBtn = new createBtn('home','fa-home')
  const menuBtn = new createBtn('menu','fa-ellipsis-h')
  const contactBtn = new createBtn('contact','fa-phone-volume')
  

  homeBtn.addEventListener('click',homeClick)
  menuBtn.addEventListener('click',menuClick)
  contactBtn.addEventListener('click',contactClick)

  nav.appendChild(homeBtn)
  nav.appendChild(menuBtn)
  nav.appendChild(contactBtn)  
  return nav
}
function createMain() {
  const main = document.createElement('main')
  main.classList.add('main')
  return main
}
function createFooter() {
  const footer = document.createElement('footer')
  footer.classList.add('footer')
  return footer
}
function createBtn(name,i) {
  const btn = document.createElement('button')
  btn.textContent = `${name.toUpperCase()}`
  btn.classList.add('btns')

  const icon = document.createElement('span')
  icon.classList.add(i)
  icon.classList.add('fas')

  btn.appendChild(icon)

  return btn
}
function homeClick(button) {
  if(button.currentTarget.classList.contains('active'))return
  activeBtn(button.currentTarget)
  loadHome()
  
}
function menuClick(button) {
  if(button.currentTarget.classList.contains('active'))return
  activeBtn(button.currentTarget)
  loadMenu()
}
function contactClick(button) {
  if(button.currentTarget.classList.contains('active'))return
  activeBtn(button.currentTarget)
  loadContact()
}
function activeBtn(button) {
let buttons = document.querySelectorAll('.btns');
buttons.forEach(button => {
        buttons.forEach(btn => btn.classList.remove('active'));
        //this.classList.add('active');       
});
button.classList.add('active')
}
function initWeb() {
const content = document.querySelector('#content')
content.appendChild(createHeader())
content.appendChild(createNav())
content.appendChild(createMain())
activeBtn(document.querySelector('.btns'))
loadHome()
content.appendChild(createFooter())
}
export default initWeb;