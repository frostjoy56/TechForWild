menuButton = document.getElementById('menu-button')
navbar = document.getElementById('nav-menu')

menuButton.addEventListener('click', () => {
    navbar.classList.toggle('show');
})
