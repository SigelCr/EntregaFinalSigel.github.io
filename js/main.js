let botonMostrar = document.getElementById("botonMostrar");
let botonCarrito = document.getElementById("botonCarrito");
let verdad = true;
let carritoVacio = JSON.parse(localStorage.getItem("carrito")) || [];
let carrito = document.getElementById(`carrito`)

const productos = [ 
      { id: 1, nombre: "Simple",            precio: 1000, imagen: `./imagenes/hamburguesa1.png`, descripcion: "El sabor de la carne 100% vacuna más deliciosa, acompañado del pan más esponjoso, kétchup, mostaza y cebolla triturada."},
      { id: 2, nombre: "Doble",             precio: 1200, imagen: `./imagenes/hamburguesa2.png`, descripcion: "Hamburguesa elaborada con dos medallones de carne 100% de carne vacuna y dos fetas de nuestro exclusivo Quedo Cheddar."},
      { id: 3, nombre: "Triple",            precio: 2000, imagen: './imagenes/hamburguesa3.png', descripcion: "Tres medallones de carne 100% vacuna, queso derretido, mostaza, kétchup y cebolla triturada, es algo que nunca puede fallar."},
      { id: 4, nombre: "Big",               precio: 2100, imagen: `./imagenes/hamburguesa4.png`, descripcion: "Dos hamburguesas de carne con salsa especial y queso derretido, cebolla, lechuga y pepino, la hace la hamburguesa más famosa del mundo."},
      { id: 5, nombre: "Triple Tasty",      precio: 2300, imagen: `./imagenes/hamburguesa5.png`, descripcion: "Tres medallones de carne, tres fetas de Queso Cheddar, cebolla, lechuga y tomate frescos. Sumado Salsa Tasty."},
      { id: 6, nombre: "Doble Bacon",       precio: 2100, imagen: `./imagenes/hamburguesa6.png`, descripcion: "Dos carnes, inigualable queso cheddar, cebolla, kétchup y mostaza, y el increíble ingrediente que lo hace único: bacon premium."},
      { id: 7, nombre: "Tasty Doble Bacon", precio: 2500, imagen: `./imagenes/hamburguesa7.png`, descripcion: "Grand Tasty Turbo Bacon Doble"},
      { id: 8, nombre: "Tasty Triple Bacon",precio: 3000, imagen: `./imagenes/hamburguesa8.png`, descripcion: "Al tradicional sabor inconfundible de la salsa Tasty ahora lo potenciamos con nuestro espectacular Bacon crujiente y con nuestro característico Bacon Crispy triturado."},
    ];

localStorage.setItem("productos",JSON.stringify(productos));

//boton ver productos
function verProductos(){
  
  botonMostrar.className = "boton";
    
  productos.forEach(item => {
    let contenedorCarta = document.createElement("div");
    contenedorCarta.innerHTML = `
    <div>
      <img class="imagen-btn" src="${item.imagen}" alt="Card image cap">
      <div>
          <h3>${item.nombre}</h3>
          <p>$${item.precio}</p>
          <h5 class="descripcion">${item.descripcion}</h5>
          <button class="boton" id="${item.id}">Añadir al carrito</button> <br><br><hr>
      </div>
    </div>
    `;                               // item.id como id del boton para que reconozca a cual producto le estoy agregando al carro, sino serian todos los botones iguales
    botonMostrar.append(contenedorCarta);

    let botonAñadirCarrito = document.getElementById(`${item.id}`) //lo cree en el innerHTML de contenedorcarta y ahora me traigo el id

    botonAñadirCarrito.addEventListener("click", (e) => {
      e.stopPropagation(); // para que no se cierre el boton "nuestras hamburguesas" al hacer click en el btn de agregar al carrito
    })

    botonAñadirCarrito.addEventListener("click", () => guardarEnCarrito(item.id))
  })

//Guardar en el carrito (funcion dentro del forEach)
const guardarEnCarrito = (id) => {
  let productoEncontrado = productos.find(item => item.id === id)

  let productoYaEnCarrito = carritoVacio.find(item => item.id === id);

  if(productoYaEnCarrito){
    Swal.fire({
      title: `Ya está añadida al carrito :)`,
      width: `300px`,
      timer: 1500,
      timerProgressBar: true,
      backdrop: false,
      showConfirmButton: false,
    })
  }
  else {
    carritoVacio.push(productoEncontrado);
    localStorage.setItem("carrito", JSON.stringify(carritoVacio));
    console.log(carritoVacio);
    Swal.fire({
      title: `Hamburguesa ${productoEncontrado.nombre} añadida al carrito :)`,
      width: `400px`,
      timer: 1500,
      timerProgressBar: true,
      backdrop: false,
      showConfirmButton: false,
    })
  }     
}
}

botonMostrar.addEventListener("click", abrirCerrarBotonProductos);

//boton ver carrito//
function verCarrito(){
  
  carrito.innerHTML = ``;

  carritoVacio.forEach(item => {
    let contenedorCarrito = document.createElement(`div`);
    contenedorCarrito.innerHTML = `
    <div class="contenedorCarrito ${item.id}">
      <br>
      <h1>Hamburguesa ${item.nombre} lista para llevar</h1>
      <img class="imagen-btn" src="${item.imagen}" alt="hamburguesa">
      <div>
          <h5>Nombre: ${item.nombre}</h5>
          <p>Precio: $${item.precio}</p>
          <input id="${item.id}" type="submit" value="deshacer"></input>
      </div>
    </div>
    `;
    botonCarrito.append(contenedorCarrito);
    
    let inputDeshacer = document.getElementById(`${item.id}`);

    inputDeshacer.addEventListener("click", (e) => {
      e.stopPropagation();
    })

    inputDeshacer.addEventListener("click", () => {
      botonDeshacer(item.id)
    })
    
//Funcion para sacar el producto del carrito
function botonDeshacer(id){

  let indice = carritoVacio.findIndex(producto => producto.id === id);
  
  if(indice !== -1) { 
    carritoVacio.splice(indice, 1);
    Swal.fire({
      title: `Hamburguesa ${item.nombre} quitado de carrito exitosamente`,
      width: `450px`,
      timer: 1500,
      timerProgressBar: true,
      backdrop: false,
      showConfirmButton: false,
    })
    let cartaCarrito = document.getElementsByClassName(`${item.id}`);
    
    while (cartaCarrito.length > 0) {
      cartaCarrito[0].remove();
    }

  }else {
    console.log("no anda");
  }
}
})
//Boton "comprar" de carritoVacio
  let botonComprar = document.createElement("div");
  botonComprar.innerHTML = `
  <div class="contenedorCarrito">
  <button class="btn-emergente">Comprar</button>
  </div>`;
  
  botonCarrito.append(botonComprar);
  
  botonCarrito.addEventListener("click", () => verCarrito);
  
  botonComprar.addEventListener("click", (e) => {
    e.stopPropagation();
    
  botonComprar.addEventListener("click", botonComprarProducto)
  })
}
  
//Funcion para que el boton "comprar" del carrito ande
function botonComprarProducto(){

  let precioTotal = 0;

  carritoVacio.forEach(item => {
    precioTotal += item.precio;

    Swal.fire({
      title: `<p class="verde">Compra realizada exitosamente</p>`,
      html: `Monto a pagar: <p class="verde">$${precioTotal}</p>`,
      width: `450px`,
      backdrop: false,
    })
     
  })
  console.log(precioTotal);
}

//Para abrir y cerrar el boton de productos (nuestras hamburguesas)
function abrirCerrarBotonProductos(){
  if(verdad){
    verProductos();
    console.log("abrir menu");
    verdad = false;
  }
  else {
    botonMostrar.innerHTML = `Nuestras hamburguesas`;
    console.log("cerrar menu");
    verdad = true;
  }
}

//para abrir y cerrar el boton de carrito
function abrirCerrarBotonCarrito(){
  if(verdad){
    console.log("abrir carrito");
    verCarrito();
    verdad = false;
  }
  else {
    console.log("cerrar carrito");
    botonCarrito.innerHTML = `<span class="boton">Carrito</span>`;
    verdad = true;
  }
}

botonCarrito.addEventListener("click", abrirCerrarBotonCarrito);