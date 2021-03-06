import loadHome from './home'
import loadMenu from './menu'
import loadContact from './contact'


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
  const icon = document.createElement('span')
  const a = document.createElement('a')
  a.href = 'https://github.com/Vurmaz'
	icon.classList.add('fab')
	icon.classList.add('fa-github')
  const text = document.createElement('h4')
  text.innerText = 'Created By Vurmaz'
  footer.appendChild(text)
  footer.appendChild(a)
  a.appendChild(icon)
  return footer
}
function createBtn(name,iconName) {
  const btn = document.createElement('button')
  btn.textContent = `${name.toUpperCase()}`
  btn.classList.add('btns')
  const icon = document.createElement('span')
  icon.classList.add(iconName)
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
  buttons.forEach(() => {
    buttons.forEach(btn => btn.classList.remove('active'));              
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