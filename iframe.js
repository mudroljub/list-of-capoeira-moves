/* TOOLTIPS */

const addTooltip = (el, additionalClass = '') => {
  const container = document.createElement('div')
  container.classList.add('tooltip-container', additionalClass)

  const tooltip = document.createElement('span')
  tooltip.className = 'tooltip'
  tooltip.textContent = el.title

  container.appendChild(el.cloneNode(true))
  container.appendChild(tooltip)
  el.parentNode.replaceChild(container, el)
}

document.querySelectorAll('img[title]').forEach(addTooltip)
document.querySelectorAll('video[title], .youtube-player[title]').forEach(el => addTooltip(el, 'inline-block'))

/* YOUTUBE PLAYER */

const addYoutube = container => {
  const { id, start = 0 } = container.dataset

  const thumbnail = document.createElement('img')
  thumbnail.alt = thumbnail.className = 'thumbnail'
  thumbnail.src = `https://img.youtube.com/vi/${id}/mqdefault.jpg`
  container.appendChild(thumbnail)

  const play = document.createElement('input')
  play.type = 'image'
  play.alt = play.className = 'play'
  play.src = '../images/icons/youtube.png'
  container.appendChild(play)

  container.onclick = () => {
    const iframe = document.createElement('iframe')
    iframe.setAttribute('allowfullscreen', '1')
    iframe.setAttribute('allow', 'autoplay')
    iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1&loop=1&playlist=${id}&start=${start}`
    container.parentNode.replaceChild(iframe, container)
  }
}

document.querySelectorAll('.youtube-player').forEach(addYoutube)
