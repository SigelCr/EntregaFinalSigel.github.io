
function tipoPerfume() {
  let tipo = prompt("elige tipo de perfume con numeros \n1. citrico \n2. floral"); //  tipo
    if (tipo === "1") {
      alert(`has elegido el tipo de perfume citrico`);
      let respuesta = prompt("¿quieres comprarlo? \n1. Si \n2. No");  // si o no
          if (respuesta === "1"){alert(
            `se ha realizado la compra del perfume citrico con exito`);
            let respuesta2 = prompt("¿desea comprar otro perfume? \n1. Si \n2. No");
                switch (respuesta2) {
                    case "1":
                      tipoPerfume();
                      break;
                    case "2":
                      alert("gracias por su compra, vuelva pronto")
                      break;
                    default:
                      alert("vuelva pronto!")
                      break;
                  }
           
          }else {
            alert("usted ha rechazado la compra");
          };  

    } else if (tipo === "2") {
      alert(`has elegido el tipo de perfume floral`);
      let respuesta = prompt("¿quieres comprarlo? \n1. Si \n2. No"); // si o no
          if (respuesta === "1"){alert(
            `se ha realizado la compra del perfume floral con exito`);
            let respuesta2 = prompt("¿desea comprar otro perfume? \n1. Si \n2. No");
            switch (respuesta2) {
              case "1":
                tipoPerfume();
                break;
              case "2":
                alert("gracias por su compra, vuelva pronto")
                break;
              default:
                alert("vuelva pronto!")
                break;
            }
          }else {
            alert("usted ha rechazado la compra");
          };
    }else {
      alert("no has elegido ningun tipo de perfumes que se encuentran en la lista o no eligio las opciones con numeros")
    }
  } 

////////////////////////////////

function tipoVestimenta() {
  let tipo = prompt("elige tipo de vestimenta \n1. gorra \n2. piluso"); 
    if (tipo === "1") { 
      alert(`has elegido el tipo de vestimenta gorra`);
      let respuesta = prompt("¿quieres comprarlo? \n1. Si \n2. No");  
          if (respuesta === "1"){alert(
            `se ha realizado la compra del producto gorra con exito`);
            let respuesta2 = prompt("¿desea comprar otra vestimenta? \n1. Si \n2. No");
            switch (respuesta2) {
              case "1":
                tipoVestimenta();
                break;
              case "2":
                alert("gracias por su compra, vuelva pronto")
                break;
              default:
                alert("vuelva pronto!")
                break;
            }
          }else {
            alert("usted ha rechazado la compra");
          };  

    } else if (tipo === "2") {
      alert(`has elegido el tipo de vestimenta piluso`);
      let respuesta = prompt("¿quieres comprarlo? \n1. Si \n2. No"); 
          if (respuesta === "1"){alert(
            `se ha realizado la compra del producto piluso} con exito`);
            let respuesta2 = prompt("¿desea comprar otra vestimenta? \n1. Si \n2. No");
            switch (respuesta2) {
              case "1":
                tipoVestimenta();
                break;
              case "2":
                alert("gracias por su compra, vuelva pronto")
                break;
              default:
                alert("vuelva pronto!")
                break;
            }
          }else {
            alert("usted ha rechazado la compra");
          };
    }else {
      alert("no has elegido ningun tipo de vestimenta que se encuentran en la lista")
    }
  } 
  
/////////////////////////////

function tipoAccesorios() {
  let tipo = prompt("elige el tipo de accesorio \n1. pulsera \n2. collar"); 
    if (tipo === "1") { 
      alert(`has elegido el accesorio pulsera`);
      let respuesta = prompt("¿quieres comprarlo? \n1. Si \n2. No");  
          if (respuesta === "1"){alert(
            `se ha realizado la compra del producto pulsera con exito`);
            let respuesta2 = prompt("¿desea comprar otro accesorio? \n1. Si \n2. No");
              switch (respuesta2) {
                case "1":
                  tipoAccesorios();
                  break;
                case "2":
                  alert("gracias por su compra, vuelva pronto")
                  break;
                default:
                  alert("vuelva pronto!")
                  break;
              }
          }else {
            alert("usted ha rechazado la compra");
          };  

    } else if (tipo === "2") {
      alert(`has elegido el tipo de accesorio collar`);
      let respuesta = prompt("¿quieres comprarlo? \n1. Si \n2. No"); 
          if (respuesta === "1"){alert(
            `se ha realizado la compra del producto collar con exito`);
            let respuesta2 = prompt("¿desea comprar otro accesorio? \n1. Si \n2. No");
            switch (respuesta2) {
              case "1":
                tipoAccesorios();
                break;
              case "2":
                alert("gracias por su compra, vuelva pronto")
                break;
              default:
                alert("vuelva pronto!")
                break;
            }
          }else {
            alert("usted ha rechazado la compra");
          };
    }else {
      alert("no has elegido ningun tipo de accesorio que se encuentran en la lista")
    }
  } 





function funcionCompleta() {
let producto = prompt(
  "digite un producto para comprar \n1. perfume \n2. vestimenta \n3. accesorios"
).toLowerCase(); //aca use el toLowerCase() por si el usuario usa mayus

switch (producto) {
    case "1":
      alert("elegiste la opcion perfume");
      tipoPerfume(); // cree la funcion porque no me dejaba crear variables con el mismo nombre y queria usar "tipo" pero, convertir esto en funcion me parece innecesario
      break;   
    case "2":
      alert("elegiste la opcion vestimenta");
      tipoVestimenta();
      break;
    case "3":
      alert("elegiste la opcion accesorios");
      tipoAccesorios();
      break;

  default:
    alert("no elegiste ninguna de las opciones o no elegiste las opciones con numeros")
    break;
}
}
