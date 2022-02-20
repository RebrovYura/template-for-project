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


// const signin = document.querySelector('.sign-in');
// const signup = document.querySelector('.sign-up');
// const signinForm = document.querySelector('.signin-form');
// const signupForm = document.querySelector('.signup-form');

// function showForm() {
//     if (signin.addEventListener('click')) {
//         signupForm.classList.add('.hide-form');
//         signupForm.classList.remove('.hide-form');
//     }
//     if (signup.addEventListener('click')) {
//         signinForm.classList.add('.hide-form');
//         signupForm.classList.remove('.hide-form');
//     }
//     console.log(signin.addEventListener('click'));
// }

// showForm();