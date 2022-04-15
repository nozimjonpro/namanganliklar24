const elModal = document.querySelector('.modal');
const elModalBtn = document.querySelector('.header-right-link');
const elButton = document.querySelector('.modal__btn')

elModalBtn.addEventListener('click', ()=>{
elModal.classList.add('modal--active');
})

elModal.addEventListener('click', (evt)=>{
    if(evt.target.matches('.modal')){

        elModal.classList.remove('modal--active')
    }
})

elButton.addEventListener('click', ()=>{
    elModal.classList.remove('modal--active')
})