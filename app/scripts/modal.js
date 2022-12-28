import Swal from 'sweetalert2';

const Modal = () => {
  const modalBtns = document.querySelectorAll('.js-modal-btn');
  const modalBuy = document.querySelector('.modal-buy');
  const modalAsk = document.querySelector('.modal-ask');
  const modalCloseBtns = document.querySelectorAll('.modal__close');

  if (!modalBtns.length) return;

  modalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const attr = btn.dataset.modal.toLowerCase().trim();

      if (attr == 'ask') {
        Swal.fire({
          showConfirmButton: false,
          html: modalAsk,
          width: '46.125rem',
          showClass: {
            popup: 'animate__animated animate__fadeIn'
          },
          customClass: {
            container: 'custom-modal'
          }
        });
      } else if (attr == 'buy') {
        Swal.fire({
          showConfirmButton: false,
          html: modalBuy,
          width: '46.125rem',
          showClass: {
            popup: 'animate__animated animate__fadeIn'
          },
          customClass: {
            container: 'custom-modal'
          }
        });
      }
    });
  });

  modalCloseBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      Swal.close();
    });
  })
};

export default Modal;