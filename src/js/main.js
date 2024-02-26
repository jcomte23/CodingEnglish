import '../css/style.css'
import '../css/icons.css'

const modal = document.querySelector('.main-modal');
const closeButton = document.querySelectorAll('.modal-close');

const btnLang=document.querySelector(".btn-lang")

btnLang.addEventListener("click",() => {
    openModal()
})

const modalClose = () => {
    modal.classList.remove('fadeIn');
    modal.classList.add('fadeOut');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 500);
}

function openModal() {
    modal.classList.remove('fadeOut');
    modal.classList.add('fadeIn');
    modal.style.display = 'flex';
}

for (let i = 0; i < closeButton.length; i++) {
    const elements = closeButton[i];
    elements.onclick = (e) => modalClose();
    modal.style.display = 'none';
    window.onclick = function (event) {
        if (event.target == modal) modalClose();
    }
}





