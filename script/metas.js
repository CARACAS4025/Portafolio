function toggleStatus(button) {
    button.classList.toggle('completed');
    if (button.classList.contains('completed')) {
      button.textContent = 'Completada';
    } else {
      button.textContent = 'Marcar como Completada';
    }
  }
  