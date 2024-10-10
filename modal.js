// MODAL
const button = document.querySelector('#open-modal-button');
const container = document.querySelector('.modal-container');
const modal = document.querySelector('.modal');

const activeModalClass = 'modal-show';

const openModal = () => {
    console.log("Abrindo modal");
    container.classList.add(activeModalClass);
};

const closeModal = () => {
    console.log("Fechando modal");
    container.classList.remove(activeModalClass);
};

button.addEventListener('click', openModal);

container.addEventListener('click', (event) => {
    if (modal.contains(event.target)) return;
    closeModal();
});

document.querySelector('#close-modal').addEventListener('click', closeModal);


// ROLAGEM
const scrollContent = document.getElementById('scroll-content');

function scrollEsquerda() {
    scrollContent.scrollBy({ left: -400, behavior: 'smooth' });
}

function scrollDireita() {
    scrollContent.scrollBy({ left: 400, behavior: 'smooth' });
}