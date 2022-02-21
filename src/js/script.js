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


// const signinBtn = document.querySelector('.sign-in');
// const signinForm = document.querySelector('.signin-form');
// signinBtn.addEventListener('click', function signForms() {
//     console.log('skdjlskd');

// });