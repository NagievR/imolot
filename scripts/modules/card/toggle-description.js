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

export default toggleDescription;

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