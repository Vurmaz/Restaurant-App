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
	renderMenu(menuHolder)
	return menuHolder
}
function renderMenu(holder) {
	array.forEach((item) => {
		const menuItem = document.createElement('div')
		menuItem.classList.add('menu-item')
		menuItem.appendChild(createName(item.name))
		menuItem.appendChild(menuImg(item.photo))
		menuItem.appendChild(createDescription(item.desc))
		menuItem.appendChild(createPrice(item.price))
		holder.appendChild(menuItem)
	})
}
function createMenuName() {
	const menuName = document.createElement('div')
	menuName.classList.add('menu-name')
	const textName= document.createElement('h1')
	textName.textContent = 'Our Menu'
	menuName.appendChild(textName)
	return menuName
}
function createName(name) {
	const burgerName = document.createElement('h2')
	burgerName.textContent = name
	return burgerName
}
function createPrice(price) {
	const priceItem = document.createElement('h3')
	priceItem.textContent = price
	return priceItem
}
function createDescription(desc) {
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




