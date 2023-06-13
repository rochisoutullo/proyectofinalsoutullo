
//CONDICIONALES
const brandingSection = document.querySelector('.servicio');

if (brandingSection) {
  console.log('La página contiene la sección de servicios de branding');
} else {
  console.log('La página no contiene la sección de servicios de branding');
}

//VARIABLES, FUNCIONES Y CONSTANTES
class Persona {
    constructor(nombre,apellido) {
      this.nombre = nombre
      this.apellido = apellido
    } 

    mostrarMensaje() {
      alert('¡Hola, soy' + this.nombre + this.apellido + '!, bienvenida/o a mis servicios de diseño')
    }
  }

  const asesora1 = new Persona(' Rocio ', 'Soutullo')
  asesora1.mostrarMensaje()

  class Packs {
    constructor (pack, descripcion, precio) {
        this.pack= pack
        this.descripcion = descripcion
        this.precio = precio
    }
    compra () {
        let seleccion = prompt('¿Qué paquete desea comprar?')
        alert('De acuerdo, agrega al carrito el pack que deseas comprar! el servicio de ' + seleccion + ' ' + this.pack + ' ya casi es tuyo ')

    let boton = document.getElementById('agregaralcarrito')
    boton.addEventListener ('click', respuestaClick)

    function respuestaClick (){
     alert ('Gracias por tu compra! a continuación te enviaremos un mail a tu casilla :)')
     console.log('Compra realizada')
  }
    }
}

const PaqueteBasico = new Packs ('Logo', 99)
const PaqueteEstandar = new Packs ('Logo + Manual de marca', 199)
const PaquetePremium = new Packs ('Logo + Manual de marca + Presentación Institucional + Papelería Corporativa', 299)

PaqueteEstandar.compra()
