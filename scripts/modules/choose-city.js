const selected = document.querySelector('.search__selected');
const droppingBlockContainer = document.querySelector('.search__dropping-block-container');
// const document.querySelector('.search__dropping-block-container');
const activeClass = 'select-city-active';

const chooseCity = () => {
  selected.addEventListener('click', () => {
    droppingBlockContainer.classList.toggle(activeClass);
  });
  
};

document.addEventListener('click', event => {

  const isSelect = event.target.classList.contains('search__selected');
  if (isSelect) {
    return;
  }
  
  const isOption = event.target.classList.contains('search__dropping-block');
  if (isOption) {
    selected.innerHTML = 'fs';
  };

  droppingBlockContainer.classList.remove(activeClass);
});

export default chooseCity;
