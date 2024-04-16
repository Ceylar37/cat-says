import {mainImg, mainImgContainer, pad, squares} from './constants';

export default function resize() {
  let startX = 0;
  let startY = 0;
  let startWidth = 0;
  let startHeight = 0;
  let startTop = 0;
  let startLeft = 0;

  function getStart(e) {
    const x = e.pageX;
    const y = e.pageY;
    startX = x;
    startY = y;
    const {width, height} = mainImg.getBoundingClientRect();
    startWidth = width;
    startHeight = height;
    const {top, left} = mainImgContainer.getBoundingClientRect();
    startTop = top - pad;
    startLeft = left - pad;

    return {startX, startY, startWidth, startHeight, startTop, startLeft};
  }

  squares[0].addEventListener('mousedown', (e) => {
    const {startX, startY, startWidth, startHeight, startTop} = getStart(e);
    const drag = (e) => {
      const x = e.pageX - startX;
      const y = e.pageY - startY;
      mainImg.style.width = startWidth - x + 'px';
      mainImgContainer.style.left = startLeft + x + 'px';
      mainImg.style.height = startHeight - y + 'px';
      mainImgContainer.style.top = startTop + y + 'px';
    };
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', drag);
    });
  });

  squares[1].addEventListener('mousedown', (e) => {
    const {startX, startY, startWidth, startHeight, startTop} = getStart(e);
    const drag = (e) => {
      const x = e.pageX - startX;
      const y = e.pageY - startY;
      mainImg.style.width = startWidth + x + 'px';
      mainImg.style.height = startHeight - y + 'px';
      mainImgContainer.style.top = startTop + y + 'px';
    };
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', drag);
    });
  });

  squares[2].addEventListener('mousedown', (e) => {
    const {startX, startY, startWidth, startHeight, startTop, startLeft} = getStart(e);
    const drag = (e) => {
      const x = e.pageX - startX;
      const y = e.pageY - startY;
      mainImg.style.width = startWidth - x + 'px';
      mainImgContainer.style.left = startLeft + x + 'px';
      mainImg.style.height = startHeight + y + 'px';
    };
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', drag);
    });
  });

  squares[3].addEventListener('mousedown', (e) => {
    const {startX, startY, startWidth, startHeight} = getStart(e);
    const drag = (e) => {
      const x = e.pageX - startX;
      const y = e.pageY - startY;
      mainImg.style.width = startWidth + x + 'px';
      mainImg.style.height = startHeight + y + 'px';
    };
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', drag);
    });
  });
}
