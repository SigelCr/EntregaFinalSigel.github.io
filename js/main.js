
function tipoPerfume() {
    let tipo = prompt("elige tipo de perfume \n1. citrico \n2. floral"); //  tipo
      if (tipo === "citrico" || tipo === "CITRICO") { // aca use OR por si el usario usa mayus
        alert(`has elegido el tipo de perfume ${tipo}`);
        let respuesta = prompt("¿quieres comprarlo? \n1. Si \n2. No");  // si o no
            if (respuesta == "si"){alert(
              `se ha realizado la compra del perfume ${tipo} con exito`);
              let respuesta2 = prompt("¿desea comprar otro perfume? \n1. Si \n2. No");
              switch (respuesta2) {
                case "si":
                  tipoPerfume();
                  break;
                case "no":
                  alert("gracias por su compra, vuelva pronto")
                  break;
                default:
                  alert("vuelva pronto!")
                  break;
              }
            }else {
              alert("usted ha rechazado la compra");
            };  
  
      } else if (tipo === "floral" || tipo === "FLORAL") {
        alert(`has elegido el tipo de perfume ${tipo}`);
        let respuesta = prompt("¿quieres comprarlo? \n1. Si \n2. No"); // si o no
            if (respuesta == "si"){alert(
              `se ha realizado la compra del producto ${tipo} con exito`);
              let respuesta2 = prompt("¿desea comprar otro perfume? \n1. Si \n2. No");
              switch (respuesta2) {
                case "si":
                  tipoPerfume();
                  break;
                case "no":
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
        alert("no has elegido ningun tipo de perfumes que se encuentran en la lista")
      }
    } 
  
  ////////////////////////////////
  
  function tipoVestimenta() {
    let tipo = prompt("elige tipo de vestimenta \n1. gorra \n2. piluso"); 
      if (tipo === "gorra" || tipo === "GORRA") { 
        alert(`has elegido el tipo de vestimenta ${tipo}`);
        let respuesta = prompt("¿quieres comprarlo? \n1. Si \n2. No");  
            if (respuesta == "si"){alert(
              `se ha realizado la compra del producto ${tipo} con exito`);
              let respuesta2 = prompt("¿desea comprar otra vestimenta? \n1. Si \n2. No");
              switch (respuesta2) {
                case "si":
                  tipoVestimenta();
                  break;
                case "no":
                  alert("gracias por su compra, vuelva pronto")
                  break;
                default:
                  alert("vuelva pronto!")
                  break;
              }
            }else {
              alert("usted ha rechazado la compra");
            };  
  
      } else if (tipo === "piluso" || tipo === "PILUSO") {
        alert(`has elegido el tipo de vestimenta ${tipo}`);
        let respuesta = prompt("¿quieres comprarlo? \n1. Si \n2. No"); 
            if (respuesta == "si"){alert(
              `se ha realizado la compra de producto ${tipo} con exito`);
              let respuesta2 = prompt("¿desea comprar otra vestimenta? \n1. Si \n2. No");
              switch (respuesta2) {
                case "si":
                  tipoVestimenta();
                  break;
                case "no":
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
      if (tipo === "pulsera" || tipo === "PULSERA") { 
        alert(`has elegido el accesorio ${tipo}`);
        let respuesta = prompt("¿quieres comprarlo? \n1. Si \n2. No");  
            if (respuesta == "si"){alert(
              `se ha realizado la compra del producto ${tipo} con exito`);
              let respuesta2 = prompt("¿desea comprar otro accesorio? \n1. Si \n2. No");
                switch (respuesta2) {
                  case "si":
                    tipoAccesorios();
                    break;
                  case "no":
                    alert("gracias por su compra, vuelva pronto")
                    break;
                  default:
                    alert("vuelva pronto!")
                    break;
                }
            }else {
              alert("usted ha rechazado la compra");
            };  
  
      } else if (tipo === "collar" || tipo === "COLLAR") {
        alert(`has elegido el tipo de accesorio ${tipo}`);
        let respuesta = prompt("¿quieres comprarlo? \n1. Si \n2. No"); 
            if (respuesta == "si"){alert(
              `se ha realizado la compra del producto ${tipo} con exito`);
              let respuesta2 = prompt("¿desea comprar otro accesorio? \n1. Si \n2. No");
              switch (respuesta2) {
                case "si":
                  tipoAccesorios();
                  break;
                case "no":
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
    "eliga un producto para comprar \n1. perfume \n2. vestimenta \n3. accesorios"
  ).toLowerCase(); //aca use el toLowerCase() por si el usuario usa mayus
  
  switch (producto) {
      case "perfume":
        alert("elegiste la opcion perfume");
        tipoPerfume(); // cree la funcion porque no me dejaba crear variables con el mismo nombre y queria usar "tipo" pero, convertir esto en funcion me parece innecesario
        break;   
      case "vestimenta":
        alert("elegiste la opcion vestimenta");
        tipoVestimenta();
        break;
      case "accesorios":
        alert("elegiste la opcion accesorios");
        tipoAccesorios();
        break;
  
    default:
      alert("no elegiste ninguna de las opciones")
      break;
  }
}

