'use strict';

// Modal
function toggleModal(btnId, modalId, closeBtnId) {
    const modal = document.getElementById(modalId)
    const btn = document.getElementById(btnId)
    const close = document.getElementById(closeBtnId)
    const body = document.querySelector('body')


    btn.addEventListener('click', () => {
        modal.classList.toggle('hidden')
        modal.classList.toggle('flex')
        body.classList.toggle('overflow-hidden')
    })

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.toggle('hidden')
            modal.classList.toggle('flex')
            body.classList.toggle('overflow-hidden')
        }
    })

    close.addEventListener('click', () => {
        modal.classList.toggle('hidden')
        modal.classList.toggle('flex')
        body.classList.toggle('overflow-hidden')
    })
}

toggleModal('modal-btn', 'modal', 'close-btn')
toggleModal('modal-btn-one', 'modal-one', 'close-btn-one')
