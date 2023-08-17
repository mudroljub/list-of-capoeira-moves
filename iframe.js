const addTooltip = image => {
  const container = document.createElement('div')
  container.className = 'tooltip-container'

  const tooltip = document.createElement('span')
  tooltip.className = 'tooltip'
  tooltip.textContent = image.title

  container.appendChild(image.cloneNode(true))
  container.appendChild(tooltip)
  image.parentNode.replaceChild(container, image)
}

document.querySelectorAll('img[title]').forEach(addTooltip)

const addYoutube = container => {
  const id = container.dataset.id
  const img = document.createElement('img')
  img.src = `https://img.youtube.com/vi/${id}/mqdefault.jpg`
  
  container.appendChild(img)
  const playButton = document.createElement('div')
  playButton.setAttribute('class', 'play')
  container.appendChild(playButton)

  container.onclick = () => {
    const iframe = document.createElement('iframe')
    iframe.setAttribute('allowfullscreen', '1')
    iframe.setAttribute('allow', 'autoplay')
    iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1`
    container.parentNode.replaceChild(iframe, container)
  }
}

document.querySelectorAll('.youtube-player').forEach(addYoutube)
