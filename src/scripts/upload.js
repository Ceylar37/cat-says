import {fileInput, mainImg, mainImgContainer} from './constants';

export default function upload() {
  fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      mainImgContainer.classList.remove('layout__main_show');
      mainImg.src = event.target.result;
      requestAnimationFrame(() => {
        const {width, height} = mainImg.getBoundingClientRect();
        const ratio = 200 / width;
        mainImg.style.width = width * ratio + 'px';
        mainImg.style.height = height * ratio + 'px';
        mainImgContainer.style.left = '156px';
        mainImgContainer.style.top = '30px';
        mainImgContainer.classList.add('layout__main_show');
      });
    };
    reader.readAsDataURL(file);
  });
}
