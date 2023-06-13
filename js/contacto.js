//FUNCIONES
/* ON CLICK */
let boton = document.getElementById('enviar-btn')
boton.addEventListener ('click', respuestaClick)

function respuestaClick (){
alert ('Gracias por tu consulta, en breve estaremos poniendonos en contacto contigo!')
console.log('Respuesta enviada')
}

//MÉTODOS
const contactForm = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

if (contactForm && successMessage) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre && email && mensaje) {
      setTimeout(() => {
        console.log('¡Mensaje enviado correctamente!');
        successMessage.textContent = '¡Mensaje enviado correctamente!';
        successMessage.style.display = 'block';
        contactForm.reset();
      }, 2000);
    } else {
      successMessage.textContent = 'Por favor, completa todos los campos del formulario.';
      successMessage.style.display = 'block';
    }
  });
} else {
  console.log('No se encontró el formulario de contacto o el elemento para mostrar el mensaje en la página.');
}





