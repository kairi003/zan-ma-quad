(() => {
  if (!document.querySelector('meta[name="multiangle-type"]')?.content) {
    return;
  }

  const button = document.createElement('button')
  button.textContent = '田';
  button.addEventListener('click', () => {
    const video = document.querySelector('video#video');
    video.style.transform = '';
  });

  const insert = () => {
    const mabtn = document.querySelector('button.multiangle-button');
    return mabtn?.insertAdjacentElement('afterend', button)
  };

  insert() || new MutationObserver((_, observer) => {
    insert() && observer.disconnect();
  }).observe(document, { childList: true, subtree: true });
})();
