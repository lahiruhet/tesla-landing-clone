const openMenu = () => {
    document.querySelector('aside').className = 'active';
    document.querySelector('.backdrop').className = 'backdrop active';
}

const closeMenu = () => {
    document.querySelector('.backdrop').className = 'backdrop';
    document.querySelector('aside').className = '';
}

document.getElementById('menuBtn').onclick = e => {
    e.preventDefault();
    openMenu();
}

document.querySelector('aside button.close').onclick = e =>{
    closeMenu();
}

document.querySelector('.backdrop').onclick = e =>{
    closeMenu();
}