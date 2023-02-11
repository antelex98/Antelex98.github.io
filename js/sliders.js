(function(){

  const slider= [...document.querySelectorAll('.testimony_body')];
const buttonNext = document.querySelector('#next');
const buttonBefore = document.querySelector('#before');
let value;

buttonNext.addEventListener('click', ()=>{
  changePosition(1);
});

buttonBefore.addEventListener('click', ()=>{
  changePosition(-1);
});

const changePosition = (add)=>{
    const currentTestimony = document.querySelector('testimony_body--show').dataset.id;
    value = Number (currentTestimony);
    value+= add;

    slider[Number(currentTestimony)-1].classList.remove('testimony_body--show');
    if(value === slider.length+1 || value === 0){
    value = value === 0 ? slider.length : 1;
    }
    
    slider[value -1].classList.add('testimony_body--show');
}

})();