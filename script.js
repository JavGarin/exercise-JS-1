/* manipulación del DOM
agregue una funcion que recibe el evento, el elemento 'auto' */

document.getElementById('auto').addEventListener('click', 
    function() {
    this.classList.toggle('border-red');
});

/* agrego la propiedad classList que devuelve 
los atributos de clase del elemento,
con toggle('border-red') que es un método de classList,
que alterna la clase especificada y permite alternar
el estado del borde rojo en la imagen con cada clic. Lo aprendí
en un tutorial de YT buscando metodos en JS*/