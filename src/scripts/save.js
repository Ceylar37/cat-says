import {backgroundImg, ctx, mainImg, pad, saveButton} from './constants';

export default function save() {
  saveButton.addEventListener('click', () => {
    const {top, left} = backgroundImg.getBoundingClientRect();
    ctx.drawImage(backgroundImg, left - pad, top - pad);
    const {top: mTop, left: mLeft, width: mWidth, height: mHeight} = mainImg.getBoundingClientRect();
    ctx.drawImage(mainImg, mLeft - pad, mTop - pad, mWidth, mHeight);
    const dataURL = canvas.toDataURL();
    const link = document.createElement('a');
    link.download = 'cat-says.png';
    link.href = dataURL;
    link.click();
    link.remove();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });
}
