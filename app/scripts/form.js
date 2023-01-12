import Pristine from "pristinejs";

const Form = () => {
  const config = {
    classTo: 'input-block',
    errorClass: 'input-block--error',
    successClass: 'input-block--success',
    errorTextParent: 'input-block',
    errorTextTag: 'div',
    errorTextClass: 'input-block__message'
  };

  const forms = document.querySelectorAll('form');

  if (!forms.length) return;

  Pristine.addValidator("my-custom-validator", function(value) {
    const regExp = /^\d+$/;

    if (regExp.test(value)) {
      return true;
    }

    return false;
  }, "${1}", 1, false);

  forms.forEach(form => {
    const pristine = new Pristine(form, config);

    form.addEventListener('submit', function (e) {
      const valid = pristine.validate();

      if (!valid) {
        e.preventDefault();
      }
    });
  });
};

export default Form;