let botonMostrar = document.getElementById("botonMostrar");
let botonCarrito = document.getElementById("botonCarrito");
let carrito = document.getElementById(`carrito`)
let abrirCarrito = true;
let abrirProductos = true;
let carritoVacio = JSON.parse(localStorage.getItem("carrito")) || [];

//boton ver productos
const verProductos = async () => {
try {
  botonMostrar.className = "boton";

  const productos = await fetch(`./data.json`);

  const data = await productos.json();

  data.forEach((item) => {
    let contenedorCarta = document.createElement("div");
    contenedorCarta.className = `contenedorBurger`
    contenedorCarta.innerHTML = `
      <div class="contenedor-imagen">
        <img id="${item.imagen}" class="imagen-btn" src="${item.imagen}" alt="Card image cap">
      </div>
      <div>
          <h3>${item.nombre}</h3>
          <p>$${item.precio}</p>
          <h5 class="descripcion">${item.descripcion}</h5>
          <button class="boton" id="${item.id}">Añadir al carrito</button> <br><br><hr>
      </div>
    
    `;
    // item.id como id del boton para que reconozca a cual producto le estoy agregando al carro, sino serian todos los botones iguales
    botonMostrar.append(contenedorCarta);
    
    let botonAñadirCarrito = document.getElementById(`${item.id}`) //lo cree en el innerHTML de contenedorcarta y ahora me traigo el id
    
    botonAñadirCarrito.addEventListener("click", (e) => {
      e.stopPropagation(); // para que no se cierre el boton "nuestras hamburguesas" al hacer click en el btn de agregar al carrito
    })
    
    let imagen = document.getElementById(`${item.imagen}`);
    
    imagen.addEventListener("click", (e) => {
      console.log("click en imagen")
      e.stopPropagation();
    })
    
    botonAñadirCarrito.addEventListener("click", () => guardarEnCarrito(item.id))
    
  }) 

//Guardar en el carrito (funcion dentro del forEach)
const guardarEnCarrito = (id) => {
  let productoEncontrado = data.find(item => item.id === id)

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

} catch (error) {
  console.error("error dentro de la funcion ver productos")
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
      <div class="contenedor-imagen">
        <img id="${item.imagen}"class="imagen-btn" src="${item.imagen}" alt="hamburguesa">
      </div>
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
    
    let imagenC = document.getElementById(`${item.imagen}`);

    imagenC.addEventListener("click", (e) => {
      console.log("click en imagen carrito")
      e.stopPropagation();
    })
//Funcion para sacar el producto del carrito al presionar deshacer
function botonDeshacer(id){

  let indice = carritoVacio.findIndex(producto => producto.id === id);
  
    indice !== -1 &&  //operador and (simplificacion del condicional if que no necesite un else)
    carritoVacio.splice(indice, 1);
    localStorage.setItem('carrito', JSON.stringify(carritoVacio)); // Eliminar del localStorage
    Swal.fire({
      title: `Hamburguesa ${item.nombre} quitado del carrito`,
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
  carritoVacio = []
  localStorage.setItem("carrito",JSON.stringify(carritoVacio)); // una vez comprado "carrito" queda vacio en el storage si vuelvo a recargar pag
}

//Para abrir y cerrar el boton de productos (nuestras hamburguesas)
function abrirCerrarBotonProductos(){
  abrirProductos ? 
  ( verProductos(), console.log("abrir menu"), abrirProductos = false ) :
  ( botonMostrar.innerHTML = `Nuestras hamburguesas`, console.log("cerrar menu"), abrirProductos = true);
}


//para abrir y cerrar el boton de carrito
function abrirCerrarBotonCarrito(){
  abrirCarrito ? 
  ( console.log("abrir carrito"), verCarrito(), abrirCarrito = false ) :
  ( console.log("cerrar carrito"), botonCarrito.innerHTML = `<span class="boton">Carrito</span>`, abrirCarrito = true );
}


botonCarrito.addEventListener("click", abrirCerrarBotonCarrito);

//------------------------------------------//

//cambiar tema de la pagina
const cambiarTema = document.getElementById('tema');
const body = document.body;

cambiarTema.addEventListener("click", () => {

  body.className === `cambiarTema` ? 
  (body.className = ``, cambiarTema.innerHTML = `<i class="fa-solid fa-moon"></i>`) :
  (body.className = 'cambiarTema', cambiarTema.innerHTML = `<i class="fa-solid fa-sun solcito"></i>`);
  
  });

