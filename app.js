const openSidebar = document.querySelector('i.fa-bars');
const sidebar = document.querySelector('aside');

openSidebar.addEventListener('click', showSidebar);

function showSidebar() {
    sidebar.style.transform = 'translateY(0)';
}

const closeSidebarbtn = document.querySelector('#close-aside');

closeSidebarbtn.addEventListener('click', closeSidebar);

function closeSidebar() {
    sidebar.style.transform = 'translateY(-100%)';
}