import {layout, mainImg, mainImgContainer, pad} from './constants';

export default function drag() {
  let innerX = 0;
  let innerY = 0;

  let dragStart = false;

  const drag = (e) => {
    const x = e.pageX - pad;
    const y = e.pageY - pad;
    mainImgContainer.style.left = x - innerX + 'px';
    mainImgContainer.style.top = y - innerY + 'px';
  };

  mainImg.addEventListener('click', (e) => {
    if (!dragStart) {
      const x = e.pageX;
      const y = e.pageY;
      const {top, left} = mainImg.getBoundingClientRect();
      innerX = x - left;
      innerY = y - top;

      layout.addEventListener('mousemove', drag);
    } else {
      layout.removeEventListener('mousemove', drag);
    }
    dragStart = !dragStart;
  });
}
