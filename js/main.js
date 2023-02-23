let botonMostrar = document.getElementById("botonMostrar");
let botonComprar = document.getElementById("botonComprar");
let verdad = true;

const productos = [ 
      { id: 1, nombre: "Simple", categoria: "hamburguesas", precio: 1000 },
      { id: 2, nombre: "Con queso", categoria: "hamburguesas", precio: 1200 },
      { id: 3, nombre: "Triple queso", categoria: "hamburguesas", precio: 2000 },
      { id: 4, nombre: "Big", categoria: "hamburguesas", precio: 2100 },
      { id: 5, nombre: "Triple tasty", categoria: "hamburguesas", precio: 2300 },
      { id: 6, nombre: "Doble Bacon", categoria: "hamburguesas", precio: 2100 },
      { id: 7, nombre: "Doble cheddar", categoria: "hamburguesas", precio: 2500 },
      { id: 8, nombre: "Triple Cheddar", categoria: "hamburguesas", precio: 3000 },
    ];


const imagenes = [
  `../imagenes/hamburguesa1.png`,
  `../imagenes/hamburguesa2.png`,
  `../imagenes/hamburguesa3.png`,
  `../imagenes/hamburguesa4.png`,
  `../imagenes/hamburguesa5.png`,
  `../imagenes/hamburguesa6.png`,
  `../imagenes/hamburguesa7.png`,
  `../imagenes/hamburguesa8.png`,
];
let contadorImagenes = 0;


//boton ver//


function verProductos(){
    
    botonMostrar.className = "boton"
    
    productos.forEach(item => {
      let img = document.createElement("img")
      img.src = imagenes[contadorImagenes]
      contadorImagenes = (contadorImagenes + 1) % imagenes.length;
      img.className = "imagen-btn";
        
      let div = document.createElement("div")
      div.innerHTML = `<p><b class="tamaño-titulo">${item.nombre}</b></p>`;

      let div2 = document.createElement("div")
      div2.innerHTML = `<p>Precio: $${item.precio}</p><br><br><hr>`;
      
      botonMostrar.append(img);
      botonMostrar.append(div);
      botonMostrar.append(div2);
      
    })
}


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

botonMostrar.addEventListener("click", abrirCerrarBotonProductos);



//boton comprar//



function comprarProductos(){
  let parrafo = document.createElement("p");
  parrafo.innerHTML = `<p class="parrafo">Escriba el nombre de la hamburguesa que desea comprar</p>`;

  let input = document.createElement("input");
  input.className = "input";
  input.setAttribute("placeholder","Ejemplo: doble cheddar")

  let inputSubmit = document.createElement("input");
  inputSubmit.type = "submit";
  inputSubmit.className = "botonInput";
  inputSubmit.value = "Agregar al carrito";




  inputSubmit.addEventListener("click", () => {
    const productoBuscado = input.value.toLowerCase(); //devuelve el valor escrito en el input
    let contenedorJs;
      switch (productoBuscado) {
        case "simple":
            contenedorJs = document.createElement("div");
            contenedorJs.className = "contenedorJs";
            contenedorJs.innerHTML = `
            <h1>Bienvenido al carrito</h1>
            <h2>Hamburguesa simple ha sido agregada</h2>
            <p>$1000</p>
            <button type="text" class="btn-emergente">Comprar</button>
            `

            botonComprar.append(contenedorJs)
          break;
        case "con queso":
            contenedorJs = document.createElement("div");
            contenedorJs.className = "contenedorJs";
            contenedorJs.innerHTML = `
            <h1>Bienvenido al carrito</h1>
            <h2>Hamburguesa Con queso ha sido agregada</h2>
            <p>$1200</p>
            <button type="text" class="btn-emergente">Comprar</button>
            `
            botonComprar.append(contenedorJs)
            console.log("funciona");
          break;
        case "triple queso":
            contenedorJs = document.createElement("div");
            contenedorJs.className = "contenedorJs";
            contenedorJs.innerHTML = `
            <h1>Bienvenido al carrito</h1>
            <h2>Hamburguesa Triple queso ha sido agregada</h2>
            <p>$2000</p>
            <button type="text" class="btn-emergente">Comprar</button>
            `
            botonComprar.append(contenedorJs)
            console.log("funciona");
          break;
        case "big":
            contenedorJs = document.createElement("div");
            contenedorJs.className = "contenedorJs";
            contenedorJs.innerHTML = `
            <h1>Bienvenido al carrito</h1>
            <h2>Hamburguesa Big ha sido agregada</h2>
            <p>$2100</p>
            <button type="text" class="btn-emergente">Comprar</button>
            `
            botonComprar.append(contenedorJs)
            console.log("funciona");
          break;
        case "triple tasty":
            contenedorJs = document.createElement("div");
            contenedorJs.className = "contenedorJs";
            contenedorJs.innerHTML = `
            <h1>Bienvenido al carrito</h1>
            <h2>Hamburguesa Triple tasty ha sido agregada</h2>
            <p>$2300</p>
            <button type="text" class="btn-emergente">Comprar</button>
            `
            botonComprar.append(contenedorJs)
            console.log("funciona");
          break;
        case "doble bacon":
            contenedorJs = document.createElement("div");
            contenedorJs.className = "contenedorJs";
            contenedorJs.innerHTML = `
            <h1>Bienvenido al carrito</h1>
            <h2>Hamburguesa Doble bacon ha sido agregada</h2>
            <p>$2100</p>
            <button type="text" class="btn-emergente">Comprar</button>
            `
            botonComprar.append(contenedorJs)
            console.log("funciona");
          break;
        case "doble cheddar":
            contenedorJs = document.createElement("div");
            contenedorJs.className = "contenedorJs";
            contenedorJs.innerHTML = `
            <h1>Bienvenido al carrito</h1>
            <h2>Hamburguesa Doble cheddar ha sido agregada</h2>
            <p>$2500</p>
            <button type="text" class="btn-emergente">Comprar</button>
            `
            botonComprar.append(contenedorJs)
            console.log("funciona");
          break;
        case "triple cheddar":
            contenedorJs = document.createElement("div");
            contenedorJs.className = "contenedorJs";
            contenedorJs.innerHTML = `
            <h1>Bienvenido al carrito</h1>
            <h2>Hamburguesa Triple cheddar ha sido agregada</h2>
            <p>$3000</p>
            <button type="text" class="btn-emergente">Comprar</button>
            `
            botonComprar.append(contenedorJs)
            console.log("funciona");
          break;
        default:
          alert("Escriba bien los nombres de los productos, gracias");
          console.log("no funciona");

          break;
      }

  })

  inputSubmit.addEventListener("click", (evento) => { //para que no se cierre el botonComprar cuando hago click en buscar.
    evento.stopPropagation();
  })

  input.addEventListener("click", (evento) => { //para que no se cierre el botonComprar cuando hago click en el input.
    evento.stopPropagation();
  })

  input.addEventListener("keyup", (e) => { //para que al presionar y soltar el espacio desde la pc no se me cierre el botonComprar.
    if(e.key === " "){
      console.log("espacio");
      e.preventDefault(); //evita el comportamiento x defecto que hace la tecla o los formularios o lo sea. en este caso la tecla "espacio".
    }
  });

  botonComprar.append(parrafo);
  botonComprar.append(input);
  botonComprar.append(inputSubmit);
}



function abrirCerrarBotonComprar(){
  if(verdad){
    console.log("abrir comprar");
    comprarProductos();
    verdad = false;
  }
  else {
    console.log("cerrar comprar");
    botonComprar.innerHTML = `<span class="boton">Comprar</span>`;
    verdad = true;
  }
}

botonComprar.addEventListener("click", abrirCerrarBotonComprar);


