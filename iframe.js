const images = document.querySelectorAll('img[title]')

images.forEach(image => {
  const container = document.createElement('div')
  container.className = 'tooltip-container'
  
  const tooltip = document.createElement('span')
  tooltip.className = 'tooltip'
  tooltip.textContent = image.title
  
  container.appendChild(image.cloneNode(true)) // Clone the image
  container.appendChild(tooltip)
  image.parentNode.replaceChild(container, image)
})
