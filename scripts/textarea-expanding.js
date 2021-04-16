const textarea = document.querySelector('.chat__textarea');
const messageText = document.querySelector('.chat__message-text');
const bottomBorderWidth = parseInt(getComputedStyle(textarea).borderBottomWidth);
const topBorderWidth = parseInt(getComputedStyle(textarea).borderTopWidth);
const bordersHorizontal = bottomBorderWidth + topBorderWidth;

const resize = () => {
  const scrollHeight = textarea.scrollHeight;
  textarea.style.height = scrollHeight + bordersHorizontal + 'px';
};

textarea.addEventListener('input', resize);

resize();
