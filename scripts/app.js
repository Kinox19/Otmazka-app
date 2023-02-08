import { reasons } from "./db.js";
import { getRandomElement } from "./functions.js";
import { btnFindReasonCSS } from "./functions.js";

const otmazka = document.querySelector('.otmazka');
const btnFindReason = document.querySelector('.btnFindReason');
const input = document.querySelector('.input');
const changeReason = document.querySelector('.btnChangeReason');
const copyBtn = document.querySelector('.btnCopy');
const otmazkaWrapper = document.querySelector('.otmazkaWrapper');

// btnFindReason.addEventListener("click", () => {
//   otmazka.textContent = `${input.value.trim()}, потому что ${getRandomElement(reasons)}`;
//   input.style.display = 'none';
//   otmazka.style.display = 'initial';
//   otmazkaWrapper.style.display = 'initial';
//   changeReason.style.display = 'initial';
//   btnFindReason.textContent = 'Еще причина';
//   copyBtn.style.display = 'initial';
// });

// input.addEventListener('keyup', () => {
//   input.value.trim().length >= 1 ? btnFindReason.disabled = false : btnFindReason.disabled = true;
// });



input.addEventListener('keyup', () => {
  if (input.value.trim() === '') {
    btnFindReason.disabled = true;
  } else {
    btnFindReason.disabled = false;

    // этот кусок кода позволяет стригерить кнопку нажав Enter
    input.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        btnFindReason.click();
      }
    });
    //
  }
});

btnFindReason.addEventListener("click", () => {
  otmazka.textContent = `${input.value.trim()}, потому что ${getRandomElement(reasons)}`;

  copyBtn.style = '.btnCopy';
  copyBtn.textContent = 'Скопировать отмазку';

  btnFindReasonCSS(input,otmazka,otmazkaWrapper,changeReason,btnFindReason,copyBtn);
});



changeReason.addEventListener("click", () => {
  input.style.display = 'initial';
  otmazka.style.display = 'none';
  otmazkaWrapper.style.display = 'none';
  btnFindReason.textContent = 'Найти причину';

  copyBtn.style = '.btnCopy';
  copyBtn.textContent = 'Скопировать отмазку';
  copyBtn.style.display = 'none';

  changeReason.style.display = 'none';
});

copyBtn.addEventListener("click", () => {
  copyBtn.textContent = 'Отмазка скопирована'
  copyBtn.style.color = '#968033'
  copyBtn.style.borderColor = '#968033'
  navigator.clipboard.writeText(otmazka.textContent)
});

