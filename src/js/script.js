const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu');
        })
    }
}
showMenu('nav-burger', 'nav-menu');

const navLink = document.querySelectorAll('.header__nav-link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(el => el.addEventListener('click', linkAction));

function scrollHeader() {
    const header = document.getElementById('header')

    if (this.scrollY >= 100) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

let rights = document.getElementById('rights');
let year = new Date();
rights.innerText += ' ' + year.getFullYear();