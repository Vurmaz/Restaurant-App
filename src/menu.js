let array = []
	class menu {
		constructor(name,price,desc,photo){
			this.name = name ,
			this.price = price,
			this.desc = desc,
			this.photo = photo 
		}
	}
(function createMenuItem() {
	const burger1 = new menu('Quatro Burger','15$','Our Special Burger with Two Burgers','./images/burger1.jpg')
	const burger2 = new menu('Double Cheese Burger','10$','Delicious Beef and Double Cheese','./images/burger2.jpg')
	const burger3 = new menu('Fresh Burger','12$','Beef with Lettuce Mayonnaise Tomato and Cheese','./images/burger3.jpg')
	const burger4 = new menu('Twin Burgers','25$','Two Burgers with Special Sauces','./images/burger4.jpg')
	array.push(burger1,burger2,burger3,burger4)
})()
function createMenu() {
	const menuHolder = document.createElement('div')
	menuHolder.classList.add('menu-holder')

	array.forEach((item)=>{
	const menuItem = document.createElement('div')
	menuItem.classList.add('menu-item')
	menuHolder.appendChild(menuItem)
	menuItem.appendChild(nameMaker(item.name))
	menuItem.appendChild(menuImg(item.photo))
	menuItem.appendChild(descMaker(item.desc))
	menuItem.appendChild(priceMaker(item.price))
	})
	return menuHolder
}
function createMenuName(){
	const menuName = document.createElement('div')
	menuName.classList.add('menu-name')
	const textName= document.createElement('h1')
	textName.textContent = 'Our Menu'
	menuName.appendChild(textName)
	return menuName
}
function nameMaker(name) {
	const burgerName = document.createElement('h2')
	burgerName.textContent = name
	return burgerName
}
function priceMaker(price) {
	const priceItem = document.createElement('h4')
	priceItem.textContent = price
	return priceItem
}
function descMaker(desc) {
	const descItem = document.createElement('p')
	descItem.textContent = desc
	return descItem
}
function menuImg(img) {
	const menuImgItem = document.createElement('img')
	menuImgItem.src = img
	menuImgItem.classList.add('menu-img')
	return menuImgItem
}
function loadMenu() {
	const main = document.querySelector('.main')
	main.textContent = ''
	main.appendChild(createMenuName())
	main.appendChild(createMenu())
}
export default loadMenu




