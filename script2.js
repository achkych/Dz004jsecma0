'use strict';
/* Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.
 */

// Отрисовка 10 картинок собак с интервалом в 3 секунды
const dogImagesContainer = document.getElementById('dog-images');
for (let i = 0; i < 10; i++) {
  setInterval(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        const dogImageUrl = data.message;
        const imgElement = document.createElement('img');
        imgElement.src = dogImageUrl;
        dogImagesContainer.appendChild(imgElement);
      })
      .catch(error => {
        console.error('Произошла ошибка при получении данных о собаке:', error);
      });
  }, i * 3000); // Устанавливаем интервал в 3 секунды между загрузками изображений
}