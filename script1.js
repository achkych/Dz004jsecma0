'use strict';
/*
Возможность удалить пользователя из списка и из localStorage (дополнительная задача):
*/

// Определяем функцию для удаления пользователя
function deleteUser(userId) {
  // Получаем список пользователей из localStorage
  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Удаляем пользователя с указанным ID
  const updatedUsers = users.filter(user => user.id !== userId);

  // Сохраняем обновленный список пользователей в localStorage
  localStorage.setItem('users', JSON.stringify(updatedUsers));

  // Удаляем пользователя из отображения на странице
  const userList = document.getElementById('user-list');
  const userToDelete = document.querySelector(`li[data-user-id='${userId}']`);
  if (userToDelete) {
    userToDelete.remove();
  } else {
    console.log('Пользователь не найден на странице.');
  }
}
