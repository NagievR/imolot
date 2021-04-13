import slider from "./slider.js";

const cards = document.querySelector('.cards__inner');

const card = () => {
  slider();
  defineDescriptionLength();
  defineReviewsAmount();

  cards.addEventListener('click', event => {
    const actionClasses = {
      moreInfo: 'card__more-info',
      cardScore: 'card__score',
    };

    const target = event.target;
    const elementClass = event.target.classList;

    if (elementClass.contains(actionClasses.moreInfo)) {
      toggleDescription(target);
    } else if (elementClass.contains(actionClasses.cardScore)) {
      
      showScoreBlock(target);
    } 
  });
};

export default card;


const defineDescriptionLength = () => {
  const maxLength = 85;
  const allDescriptions = document.querySelectorAll('.card__description');

  for (let description of allDescriptions) {
    const innerText = description.innerText;
    const currLength = innerText.length;

    if (currLength > maxLength) {
      description.shortInnerText = innerText.slice(0, maxLength);
      description.fullInnerText = innerText;
      description.innerText = description.shortInnerText;
      toggleDescription(description);
    }
  }
}

const toggleDescription = target => {
  const descriptionWrapper = target.closest('.card__description-wrap');
  const description = descriptionWrapper.querySelector('.card__description');
  const moreInfoElem = descriptionWrapper.querySelector('.card__more-info');
  const moreInfoInner = defineMoreInfoInner();

  if (moreInfoElem.innerText === moreInfoInner.more) {
    moreInfoElem.innerText = moreInfoInner.less;
    description.innerText = description.fullInnerText;
  } else {
    moreInfoElem.innerText = moreInfoInner.more;
    description.innerText = description.shortInnerText;
  }
};

const defineMoreInfoInner = () => {
  const inner = {
    more: 'еще',
    less: 'свернуть'
  };

  // add ellipsis
  for (let key in inner) {
    inner[key] = '...' + inner[key];
  }

  return inner;
};



const defineReviewsAmount = () => {
  const cards = document.querySelectorAll('.card__wrap');
  
  for (let card of cards) {
    const reviewsQuantityBtn = card.querySelector('.card__reviews-quantity');
    const allReviewsBtn = reviewsQuantityBtn.closest('.card__all-reviews-btn');
    const reviewsList = card.querySelector('.card__reviews-list');
    const reviewsQuantity = reviewsList.children.length;
    

    if (reviewsQuantity < 1) {
      allReviewsBtn.innerHTML = 'Отзывов пока нет';
    }

    reviewsQuantityBtn.innerText = reviewsQuantity || 0;

    reviewsList.style.height = '40px';
    
    

    allReviewsBtn.addEventListener('click', () => {

      if (!reviewsList.style.height) {
        reviewsList.style.height = '40px';
        const template = (
          `<div class="card__all-reviews-btn">
             Посмотреть все отзывы (<span class="card__reviews-quantity">${reviewsQuantity}</span>)
          </div>`
        );
        allReviewsBtn.innerHTML = template;
        
        for (let li of reviewsList.children) {
          li.style.whiteSpace = 'nowrap';
          li.style.overflow = 'hidden';
        }
      } else {
        reviewsList.style.height = '';
        allReviewsBtn.innerHTML = 'Скрыть все отзывы';

        for (let li of reviewsList.children) {
          li.style.whiteSpace = 'normal';
          li.style.overflow = '';
        }
      }

    });
  }
};




const showScoreBlock = target => {
  const scoreWrap = target.closest('.card__score-wrap');
  let setRating = null;

  console.log(scoreWrap.children);

  for (let star of scoreWrap.children) {
    const image = star.querySelector('.card__score');

    // const mouseoverHandler = () => {
    //   image.src = "./assets/icons/card/yellow-star.svg"
    // };
    // star.addEventListener('mouseover', mouseoverHandler);

    // const mouseoutHandler = () => {
    //   image.src = "./assets/icons/card/gray-star.svg"
    // };
    // star.addEventListener('mouseout', mouseoutHandler);

    // const clickHandler = () => {
    //   setRating = image.dataset.rating;
    //   debugger
    //   Array.from(scoreWrap.children).forEach(i => i.removeEventListener('mouseover', mouseoverHandler))
    //   Array.from(scoreWrap.children).forEach(i => i.removeEventListener('mouseout', mouseoutHandler))
    //   console.log({'rating is': setRating});
    //   Array.from(scoreWrap.children).forEach(i => i.removeEventListener('click', clickHandler))
    // };
    // star.addEventListener('click', clickHandler);
  }


  const scoreStars = scoreWrap.querySelectorAll('.card__score');
  scoreWrap.classList.toggle('card__score-wrap_show');
};