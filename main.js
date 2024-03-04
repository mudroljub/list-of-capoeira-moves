const frame = document.getElementById('frame')

/* IFRAME */

if (!window.location.hash) window.location.hash = 'moves/ginga.html'

const pageName = window.location.hash.substring(1)
frame.src = pageName
const activeLink = document.querySelector(`aside a[href='${pageName}']`)
if (activeLink) {
  activeLink.scrollIntoView({ block: 'center' })
  activeLink.classList.add('active')
}

/* ASIDE */

const links = document.querySelectorAll('aside a')

links.forEach(link => link.addEventListener('click', e => {
  window.location.hash = e.currentTarget.getAttribute('href')
  link.scrollIntoView({ behavior: 'smooth', block: 'center' })

  links.forEach(el => {
    el == link ? el.classList.add('active') : el.classList.remove('active')
  })
}))
