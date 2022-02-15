import {createText} from "./home"
function createMap() {
  const bigMap = document.createElement('div')
  bigMap.classList.add('big-map')
  const contactUsText = createText('Contact Us')
  contactUsText.classList.add('contact-us')

  bigMap.appendChild(contactUsText)
  bigMap.appendChild(initMap())
  bigMap.appendChild(createText('☎️ 0545 445 45 45'))
  bigMap.appendChild(createText('🏠 Bağlarbaşı, 41700 Darıca/Kocaeli/Turkey')) 
  return bigMap
}

function initMap() {
  const mapHolder = document.createElement('div')
  mapHolder.classList.add('map-holder')
  const eskihisar = { lat: 40.758208, lng: 29.399801 };
  const map = new google.maps.Map(mapHolder, {
    zoom: 16,
    center: eskihisar,
  });
  const marker = new google.maps.Marker({
    position: eskihisar,
    map: map,
  });
  return mapHolder
}

function loadContact() {
  const main = document.querySelector('.main')
  main.textContent = ''
  main.appendChild(createMap())
}

export default loadContact