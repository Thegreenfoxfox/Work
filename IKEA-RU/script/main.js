'use strict';
// day1
const btnBurger = document.querySelector('.btn-burger');
const catalog = document.querySelector('.catalog');//получили класс catalog
const btnClose = document.querySelector('.btn-close');
const subCatalog =document.querySelector('.subcatalog');//подкаталог
const subcatalogHeader = document.querySelector('.subcatalog-header');
const btnReturn = document.querySelector('.btn-return');

const overlay =document.createElement('div');
overlay.classList.add('overlay');
document.body. insertAdjacentElement('beforeend', overlay);
const openMenu =() => {
catalog.classList.add('open');
overlay.classList.add('active');
};
const closeMenu =() => {
catalog.classList.remove('open');
overlay.classList.remove('active');
closeSubMenu();

};
const openSubMenu = (event) => {
    event.preventDefault();
    const itemList = event.target.closest('.catalog-list__item');
    if (itemList) {
        subcatalogHeader.innerHTML = itemList.innerHTML;
        subCatalog.classList.add('subopen');
};
};
const closeSubMenu = ()=> {
subCatalog.classList.remove('subopen');
}
btnBurger.addEventListener('click',openMenu);
btnClose.addEventListener('click',closeMenu);
overlay.addEventListener('click',closeMenu);
catalog.addEventListener('click',openSubMenu);//по клику вызывается функция openSubMenu
btnReturn.addEventListener('click',closeSubMenu);