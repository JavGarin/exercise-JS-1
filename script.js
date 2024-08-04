/* manipulación del DOM.

Defino una función anónima que se ejecutará cuando ocurra el evento de clic. 
la manipulacion del DOM con el document. que es un objeto global, que representa todo el contenido de la página web,
junto a ello getElementById() con el id de 'auto' en mi HTML, uso el método que se utiliza para registrar un evento,
.addEventListener(). En este caso, estoy registrando un evento de tipo 'click' previamente aprendido en clases. */

document.getElementById('auto').addEventListener('click', function() {
    this.classList.toggle('border-red');
});

/* ocupo la función this. dentro de la función del evento, con this. se va refierir al elemento que ha recibido el clic.
En este caso, es el elemento con id='auto'.*/

/* luego agrego la propiedad classList. que devuelve una colección de las clases que tiene el elemento,
en este caso mi archivo CSS que contiene el ('border-red'), y sus atributos.

Uso toggle() que es un método de classList que agrega la clase ('border-red'), si no está presente y la elimina si ya está presente.
lo que hago es alternar la clase 'border-red' de mi CSS. Lo aprendí en un tutorial de YT buscando metodos en JS de "Midudev" */

/* literalmente lo que hago es alternar la accion con evento clic en la imagen para que aparezca y desapezca el borde de 2px red,
en la imagen del auto que coloque */