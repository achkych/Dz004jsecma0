
'use strict';
/* Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Данные при получении необходимо сохранить в локальное хранилище браузера localStorage.
*/

// Запрос к API для получения списка пользователей
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    // Сохранение списка пользователей в localStorage
    localStorage.setItem('users', JSON.stringify(users));
    
    // Отображение пользователей на странице
  const userList = document.getElementById('user-list');
  users.forEach(user => {
    const li = document.createElement('li');
    li.dataset.userId = user.id; // Добавляем атрибут data-user-id
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      deleteUser(user.id);
      li.remove();
    });
    li.textContent = user.name;
    li.appendChild(deleteBtn);
    userList.appendChild(li);
  });
  })
  .catch(error => {
    console.error('Произошла ошибка при получении данных:', error);
  });