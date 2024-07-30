document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.getElementById('scroll-container');
    const commentInput = document.getElementById('comment-input');
    const addCommentBtn = document.getElementById('add-comment-btn');
  
    addCommentBtn.addEventListener('click', () => {
      const commentText = commentInput.value.trim();
      if (commentText) {
        // Crear un nuevo div para la tarjeta de comentario
        const newCard = document.createElement('div');
        newCard.classList.add('card');
        newCard.textContent = commentText;
  
        // Añadir la nueva tarjeta al contenedor de desplazamiento
        scrollContainer.appendChild(newCard);
  
        // Limpiar el campo de texto después de añadir el comentario
        commentInput.value = '';
      } else {
        alert('Por favor, escribe un comentario antes de agregar.');
      }
    });
  });
  