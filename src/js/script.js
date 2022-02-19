<<<<<<< HEAD
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


const login = document.querySelectorAll('.registration');
let reg_id;

function printState() {
    console.log(login.length);
}

login.forEach(el => el.addEventListener('click', printState));
=======
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


const login = document.querySelectorAll('.registration');
let reg_id;

function printState() {
    console.log(login.length);
}

login.forEach(el => el.addEventListener('click', printState));
>>>>>>> b61e971f80dce077a527ead2a39e30a13dbe3abd
