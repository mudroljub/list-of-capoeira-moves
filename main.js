const header = document.querySelector("header")
const frame = document.getElementById("frame")

/* CURRENT PAGE */

const pageName = window.location.hash.substring(1)
frame.src = pageName
const activeLink = document.querySelector(`aside a[href='${pageName}']`)
if (activeLink) {
  activeLink.scrollIntoView({ block: "center" })
  activeLink.classList.add('active')  
}

/* SIDE NAVIGATION */

const links = document.querySelectorAll("aside a")

links.forEach(link => link.addEventListener("click", e => {
  window.location.hash = e.currentTarget.getAttribute("href")
  link.scrollIntoView({ behavior: "smooth", block: "center" })

  links.forEach(el => {
    el == link ? el.classList.add('active') : el.classList.remove('active')
  })
}))

/* SCROLL HEADER */

let prevScrollPos = frame.contentWindow.pageYOffset;

// wait frame content to load + trigger on every change
frame.onload = () => {
  frame.contentWindow.onscroll = () => {
    const currentScrollPos = frame.contentWindow.pageYOffset;
    header.style.marginTop = prevScrollPos > currentScrollPos ? 0 : `${-header.offsetHeight}px`
    prevScrollPos = currentScrollPos
  }
}