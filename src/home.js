function createHome() {
	const burgerDiv = document.createElement('div')
	const textDiv = document.createElement('div')
	textDiv.classList.add('text-div')
	burgerDiv.classList.add('burger-div')
	burgerDiv.appendChild(textDiv)
	textDiv.appendChild(createQuote('"Our Quotes"'))
	textDiv.appendChild(createText('"I’m sorry for what I said before I had my burger."'))
	textDiv.appendChild(createText('"The only bad burger is the one you didn’t eat"'))
	textDiv.appendChild(createText('"When life throws you a burger, eat it"'))		
	return burgerDiv
}

export function createText(para) {
	const text = document.createElement('p')
	text.classList.add('text')
	text.textContent = para
	return text
}
function homeİntro() {
	const introDiv = document.createElement('div')
	const icons = document.createElement('div')
	introDiv.classList.add('intro-div')
	icons.classList.add('intros')
	introDiv.appendChild(createQuote('High Level Service'))
	icons.appendChild(createIcon('fa-hamburger','Delicious Burgers'))
	icons.appendChild(createIcon('fa-truck','Fast Delivery'))
	icons.appendChild(createIcon('fa-mobile-alt','Order Online'))
	introDiv.appendChild(icons)

	return introDiv
}
function createIcon(name,text) {
	const iconDiv = document.createElement('div')
	iconDiv.classList.add('icon-div')
	const icon = document.createElement('span')
	icon.classList.add('fas')
	icon.classList.add('fase')
	icon.classList.add(name)
	const iconText = document.createElement('h3')
	iconText.textContent = text	
	iconDiv.appendChild(icon)
	iconDiv.appendChild(iconText)

	return iconDiv
}
function createQuote(text) {
	const qoute = document.createElement('h1')
	qoute.textContent = text
	qoute.classList.add('quote')
	return qoute
}

function loadHome() {
	const main = document.querySelector('.main')
	main.textContent = ''
	main.appendChild(createHome())
	main.appendChild(homeİntro())
	
}
export default loadHome

