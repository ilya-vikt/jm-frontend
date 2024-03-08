export const imgLazyLoad = (img: HTMLImageElement) => {
  const wrapper = img.parentElement;
  wrapper?.classList.add('img-lazy-load', 'img-loading');

  img.onload = () => {
    setTimeout(() => {
      wrapper?.classList.remove('img-loading');
      setTimeout(() => {
        wrapper?.classList.remove('img-lazy-load');
      }, 250);
    }, 500);
  };

  img.onerror = () => {
    wrapper?.classList.remove('img-lazy-load', 'img-loading');
  };
};
