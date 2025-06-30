const mobileBtn = document.querySelector('#mobile-cta');
const nav = document.querySelector('nav');
const mobileBtnExit = document.querySelector('#mobile-exit');

mobileBtn.addEventListener('click', () => {
    if (nav.classList.contains('closed')) {
        nav.classList.remove('closed');
        nav.classList.add('opened');
    }
    
})

mobileBtnExit.addEventListener('click', () => {
    if (nav.classList.contains('opened')) {
        nav.classList.remove('opened');
        nav.classList.add('closed');
    }
    
})