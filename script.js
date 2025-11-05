let button = document.querySelector('.more-information');
let modal =  document.querySelector('.modal')

function abrirModal() {
    modal.style.display = 'block';
    modal.style.position = 'fixed'
}

function fecharModal() {
    modal.style.display = 'none';
}

button.addEventListener('click', abrirModal);

document.addEventListener('click', function(event) {
    if (event.target !== modal && event.target !== button) {
        fecharModal();
    }
});
