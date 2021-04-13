const arrowRight = document.querySelector('.card__arrow-right');
const arrowLeft = document.querySelector('.card__arrow-left');
const cardStrip = document.querySelector('.card__strip');
const photoList = document.querySelectorAll('.card__gallery li');
const slideMarkers = document.querySelector('.card__slide-markers');
const cardList = document.querySelector('.card__list');

// const cards = document.querySelectorAll('.card');
// console.log(cards);

const slider = () => {
  
  const photoWidth = photoList[0].offsetWidth;
  let slideCount = 1; 
  let currPosition = 383; 


  // const moveToLeft = () =>;
  
  arrowRight.addEventListener('click', () => {
    currPosition += photoWidth;

    const tailPosition = photoWidth * (photoList.length - 1);

    if (currPosition <= tailPosition) {
      slideCount++;
    } else {
      currPosition = tailPosition;
    }

    cardStrip.style.marginLeft = -currPosition + 'px';
    updateMarkers(slideCount);

    if (slideCount > 0) {
      arrowRight.children[0].children[0].style.fill = 'white';
    } 

    if (slideCount == 1) {
      cardList.style.display = 'block';
      arrowLeft.style.display = 'none';
    }

    if (slideCount > 1) {
      cardList.style.display = 'none';
      arrowLeft.style.display = 'block';
    } 
    // else {
    //   ;
    // }

    // if (slideCount > 1) {
    //   arrowLeft.style.display = 'block';
    // }
  });

  arrowLeft.addEventListener('click', () => {
    currPosition -= photoWidth;

    if (currPosition >= 0) {
      slideCount--;
    } else {
      currPosition = 0;
    }

    cardStrip.style.marginLeft = -currPosition + 'px';
    updateMarkers(slideCount);

    if (slideCount === 0) {
      arrowRight.children[0].children[0].style.fill = 'black'; 
      arrowLeft.style.display = 'none';
      cardList.style.display = 'none';
    }

    if (slideCount === 1) {
      arrowLeft.style.display = 'none';
      cardList.style.display = 'block';
    }
  });

  initializeMarkers(slideCount);
  initializeSlider(currPosition);


  cardList.addEventListener('click', () => {
    currPosition -= photoWidth;

    if (currPosition >= 0) {
      slideCount--;
    } else {
      currPosition = 0;
    }

    cardStrip.style.marginLeft = -currPosition + 'px';
    updateMarkers(slideCount);

    if (slideCount === 0) {
      arrowRight.children[0].children[0].style.fill = 'black'; 
      arrowLeft.style.display = 'none';
      cardList.style.display = 'none';
    }

    if (slideCount === 1) {
      cardList.style.display = 'block';
    }

    if (slideCount > 1) {
      arrowLeft.style.display = 'block';
    }
  });

}; 

export default slider;

const initializeMarkers = startFrom => {
  for (let i = 0; i < photoList.length - 1; i++) {
    const slideMarker = document.createElement('li');
    slideMarkers.append(slideMarker);
  }
  slideMarkers.children[startFrom].classList.add('active-slide');
};

const initializeSlider = startPosition => {
  cardStrip.style.transitionDuration = '0ms';
  cardStrip.style.marginLeft = -startPosition + 'px';
  setTimeout(() => cardStrip.style.transitionDuration = '');
  arrowLeft.style.display = 'none';
};

const updateMarkers = slideCount => {
  console.log(slideCount);
  const slideMarkers = document.querySelectorAll('.card__slide-markers li');
  for (let i = 0; i < slideMarkers.length; i++) {
    if (slideCount === i) {
      slideMarkers[i].classList.add('active-slide');
    } else {
      slideMarkers[i].classList.remove('active-slide');
    }
  }
};
