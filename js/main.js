function bucleDelPrompt() {

let productos = [ 
  { id: 1, nombre: "remera corta", categoria: "remeras", precio: 2500 },
  { id: 2, nombre: "remera larga", categoria: "remeras", precio: 2200 },
  { id: 3, nombre: "remera sin manga", categoria: "remeras", precio: 2000 },
  { id: 4, nombre: "camisa floreada", categoria: "remeras", precio: 3000 },

  { id: 5, nombre: "bermuda", categoria: "pantalones", precio: 1200 },
  { id: 6, nombre: "short", categoria: "pantalones", precio: 1000 },
  { id: 7, nombre: "jean", categoria: "pantalones", precio: 2000 },
  { id: 8, nombre: "chupin", categoria: "pantalones", precio: 1800 },

  { id: 9, nombre: "cadena", categoria: "bijouteries", precio: 800 },
  { id: 10, nombre: "arito", categoria: "bijouteries", precio: 500 },
  { id: 11, nombre: "pulsera", categoria: "bijouteries", precio: 500 },
  { id: 12, nombre: "anillo", categoria: "bijouteries", precio: 200 },

  { id: 13, nombre: "mochila", categoria: "accesorios", precio: 2500 },
  { id: 14, nombre: "cartera", categoria: "accesorios", precio: 3000 } ,
  { id: 15, nombre: "pañuelo", categoria: "accesorios", precio: 1500 },
  { id: 16, nombre: "billetera", categoria: "accesorios", precio: 1200 },
];
let filtrados;

let filtro = prompt(`elija el filtro a buscar: \n- Categoria \n- Precio \n- Id \n- Salir`);

if (filtro === "precio") {
  let precio = parseInt(prompt("Ingrese el precio mínimo a buscar"));
  
  filtrados = productos.filter((item) => item.precio > precio);

}else if (filtro === "categoria") {
  let categoria = prompt(`eliga la categoria que esta buscando:\n- remeras \n- pantalones \n- bijouteries \n- accesorios`);

  filtrados = productos.filter((item) => item.categoria === categoria);

}else if(filtro === "id"){
  alert(`Actualmente tenemos 16 ID`) // aca queria hacer como un bucle para que muestre todos los id pero no pude, sino como sabe el usuario el id de cada producto? ah no ser que lo este viendo en pantalla
  let id = parseInt(prompt("ingrese el id del producto que desea ver"));

  filtrados = productos.filter((item) => item.id === id);

}else if (filtro === "salir") {
  alert("Saliendo...")
}

else {
  alert(`El filtro ${filtro} no se encuentra disponible, por favor escriba los que estan en la lista`);
    while (filtro !== "precio" && filtro !== "categoria" && filtro !== "id") {
      bucleDelPrompt() 
      break; //creo que no funciona lo dejo x las dudas
  };
  
}

if (filtrados.length > 0) { // si fuese numero negativo es false
  let mensaje; // para que los productos aparezcan juntos en vez de 1x1
  filtrados.forEach((item) => {
    mensaje = // para que los productos aparezcan juntos en vez de 1x1
    ` 
     Id: ${item.id}
     Nombre: ${item.nombre}
     Precio: ${item.precio}
     `;
    alert(mensaje);
  });
} else {
  alert("No se encontraron productos");
}



//carrito
function comprarProductos() {
let idProducto = Number(prompt("Escriba el ID del producto que desea agregar al carrito"));

let carrito = [];

let productoSeleccionado = productos.find(productos => productos.id === idProducto); 

if (productoSeleccionado){
  function agregarAlCarrito(productos) {
    carrito.push(productos);
    alert(`el producto ${productos.nombre} por $${productos.precio} ha sido agregado al carrito exitosamente`)
  }
  agregarAlCarrito(productoSeleccionado); // invocacion
}else {
  alert(`Recuerde tipear el ID de los productos que se encuentran disponibles`);
}

let verProductosCarrito = prompt("¿quiere ver los productos agregados al carrito? (si/no)");
if(verProductosCarrito === "si"){
  function verCarrito(carrito){
    carrito.forEach(function(productos){ //adentro del forEach hay una funcion producto que contiene el alert
      alert(`Productos agregados al carrito: ${productos.nombre} $${productos.precio}`)
    });
    let agregarOtroProducto = prompt("¿quiere seguir agregando productos al carrito? (si/no)");
      switch (agregarOtroProducto) {
        case "si":
          comprarProductos(); // no se como hacer para que la primera compra se guarde, y cuando agregue otro producto, se muestren ambos

          break;
        case "no":
          alert("Muchas gracias por su compra");
          
          break;
      
        default:
            alert(`Por favor recuerde responder con "si" o "no" e intentelo de nuevo`);
          break;
      }
  }
  verCarrito(carrito); // invocacion

}else {
  alert("Gracias por su compra, vuelva pronto")
}
}
comprarProductos();
}
//bucleDelPrompt();
