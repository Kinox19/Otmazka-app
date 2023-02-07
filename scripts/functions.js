export function getRandomElement(reasons) {
    return reasons[Math.floor(Math.random() * reasons.length)];
  }

export function btnFindReasonCSS(input,otmazka,otmazkaWrapper,changeReason,btnFindReason,copyBtn){
    input.style.display = 'none';
    otmazka.style.display = 'initial';
    otmazkaWrapper.style.display = 'initial';
    changeReason.style.display = 'initial';
    btnFindReason.textContent = 'Еще причина';
    copyBtn.style.display = 'initial';
}