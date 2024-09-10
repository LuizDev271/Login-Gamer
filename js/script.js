const modal = document.getElementById('modal')
const botaoModalClose = document.getElementById('fechar')

const registro = document.getElementById('registrar')

registro.addEventListener('click', () => {
    modal.showModal()
})

botaoModalClose.addEventListener('click', () => {
    modal.close()
})