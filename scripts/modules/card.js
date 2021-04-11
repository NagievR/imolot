// const moreInfo = document.querySelector('.card__more-info');
const cards = document.querySelector('.cards__inner');

const card = () => {
  defineDescriptionLength();

  cards.addEventListener('click', event => {

    const actionClasses = {
      moreInfo: 'card__more-info',
      cardScore: 'card__score',
    };

    // console.dir(event.target);

    const target = event.target;
    const elementClass = event.target.classList;

    if (elementClass.contains(actionClasses.moreInfo)) {
      toggleDescription(target);
    } else if (elementClass.contains(actionClasses.cardScore)) {
      setScore();
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

  const moreElemInner = {
    more: 'еще',
    less: 'скрыть'
  };

  for (let key in moreElemInner) {
    moreElemInner[key] = '...' + moreElemInner[key];
  } 
  
  const descriptionWrapper = target.closest('.card__description-wrap');
  const description = descriptionWrapper.querySelector('.card__description');
  const moreInfoElem = descriptionWrapper.querySelector('.card__more-info');

  if (moreInfoElem.innerText === moreElemInner.more) {
    moreInfoElem.innerText = moreElemInner.less;
    description.innerText = description.fullInnerText;
  } else {
    moreInfoElem.innerText = moreElemInner.more;
    description.innerText = description.shortInnerText;
  }
};

const setScore = () => {
  console.log('do something...');
};
