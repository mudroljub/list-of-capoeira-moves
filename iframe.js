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
  const div = document.createElement('div')
  div.setAttribute('data-id', id)
  const img = document.createElement('img')
  img.src = `https://img.youtube.com/vi/${id}/mqdefault.jpg`
  
  div.appendChild(img)
  const playButton = document.createElement('div')
  playButton.setAttribute('class', 'play')
  div.appendChild(playButton)
  div.onclick = () => {
    const iframe = document.createElement('iframe')
    iframe.allow = 'fullscreen'
    iframe.src = `https://www.youtube.com/embed/${div.dataset.id}?autoplay=1`
    div.parentNode.replaceChild(iframe, div)
  }
  container.appendChild(div)
}

document.querySelectorAll('.youtube-player').forEach(addYoutube)
