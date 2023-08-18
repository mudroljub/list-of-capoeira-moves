const header = document.querySelector("header")
const frame = document.getElementById("frame")

/* SIDE NAVIGATION */

const pageName = window.location.hash.substring(1) || 'moves/ginga.html'
const links = document.querySelectorAll("aside a")
const activeLink = document.querySelector(`aside a[href='${pageName}']`)

frame.src = pageName
activeLink.scrollIntoView({ block: "center" })
activeLink.classList.add('active')

links.forEach(link => link.addEventListener("click", e => {
  window.location.hash = e.currentTarget.getAttribute("href")
  link.scrollIntoView({ behavior: "smooth", block: "center" })

  links.forEach(el => {
    el == link ? el.classList.add('active') : el.classList.remove('active')
  })
}))

/* HIDE HEADER */

let prevScrollPos = frame.contentWindow.pageYOffset;

// wait frame content to load
frame.onload = () => {
  frame.contentWindow.onscroll = () => {
    const currentScrollPos = frame.contentWindow.pageYOffset;
    header.style.marginTop = prevScrollPos > currentScrollPos ? 0 : `${-header.offsetHeight}px`
    prevScrollPos = currentScrollPos
  }
}