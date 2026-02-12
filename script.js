const garden = document.getElementById('gardenContainer');
const messageDisplay = document.getElementById('messageDisplay');

// El mensaje secreto que se revelará poco a poco
const secretMessage = "Cada flor que plantas, es un recordatorio de nuestro amor. ¡Feliz Día de San Valentín, mi chapatia! Eres mi persona favorita.";
const messageParts = secretMessage.split(' '); // Dividimos el mensaje en palabras
let revealedMessage = [];
let flowerCount = 0;

// Lista de emojis de flores (puedes añadir más si quieres)
const flowerEmojis = ['🌷', '🌹', '🌻', '🌼', '🌸', '🌺', '💐'];

garden.addEventListener('click', (event) => {
    // Esconder las instrucciones después del primer clic
    const instructions = document.querySelector('.instructions');
    if (instructions) {
        instructions.style.display = 'none';
    }

    // Crear una nueva flor
    const flower = document.createElement('div');
    flower.classList.add('flower');
    
    // Elegir una flor al azar de nuestra lista
    const randomFlowerEmoji = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
    flower.innerHTML = randomFlowerEmoji;

    // Posicionar la flor donde se hizo clic
    // Restamos el tamaño de la flor para que el centro esté en el clic
    flower.style.left = `${event.clientX - garden.getBoundingClientRect().left - 25}px`;
    flower.style.top = `${event.clientY - garden.getBoundingClientRect().top - 25}px`;
    
    garden.appendChild(flower);
    flowerCount++;

    // Revelar una parte del mensaje
    if (flowerCount <= messageParts.length) {
        revealedMessage.push(messageParts[flowerCount - 1]);
        messageDisplay.innerHTML = revealedMessage.join(' ') + (flowerCount === messageParts.length ? '' : '...'); // Añadir puntos suspensivos si no está completo
        messageDisplay.classList.add('show'); // Mostrar el contenedor del mensaje
    } else if (flowerCount > messageParts.length) {
        // Mensaje completo, ahora podemos añadir más flores sin cambiar el mensaje
        // O podrías añadir un mensaje extra aquí
        messageDisplay.innerHTML = secretMessage + " ¡Y aún quedan muchas flores por plantar!";
    }
});
