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
  const { id } = container.dataset

  const thumbnail = document.createElement('img')
  thumbnail.alt = thumbnail.className = 'thumbnail'
  thumbnail.src = `https://img.youtube.com/vi/${id}/mqdefault.jpg`
  container.appendChild(thumbnail)

  const play = document.createElement('input')
  play.type = 'image'
  play.alt = play.className = 'play'
  play.src = 'images/icons/youtube.png'
  container.appendChild(play)

  container.onclick = () => {
    const iframe = document.createElement('iframe')
    iframe.setAttribute('allowfullscreen', '1')
    iframe.setAttribute('allow', 'autoplay')
    iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1`
    container.parentNode.replaceChild(iframe, container)
  }
}

document.querySelectorAll('.youtube-player').forEach(addYoutube)
