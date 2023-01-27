function tipoPerfume() {
    let p1 = "citrico";
    let p2 = "floral";
    let pp1 = 5000; 
    let pp2 = 4000;

    let producto = prompt(`digite el tipo de perfume que quiere \n1. ${p1} \n2. ${p2}`); //  tipo
      if (producto => 1 && producto <= 2) {
            if (producto === "1"){
                alert(`has elegido el producto perfume ${p1}`);
                let cantidad = prompt(`digite la cantidad de perfume ${p1} que desea comprar, c/u cuesta $${pp1}`);
                let precioFinal = cantidad * pp1;
                alert(`el monto total a pagar es de $${precioFinal}`);
                }else if (producto === "2"){
                    alert(`has elegido el producto perfume ${p2}`);
                    let cantidad = prompt(`digite la cantidad de perfume ${p2} que desea comprar, c/u cuesta $${pp2}`);
                    let precioFinal = cantidad * pp2;
                    alert(`el monto total a pagar es de $${precioFinal}`);
                }else {
                    alert("no eligio ninguno de los productos de la lista")
                }  
                let respuesta2 = prompt("¿desea comprar otro perfume? \n1. Si \n2. No");
              switch (respuesta2) {
                case "1":
                  tipoPerfume(); // seria como un bucle pero no
                  break;
                case "2":
                  alert("gracias por su compra, vuelva pronto")
                  break;
                default:
                  alert("vuelva pronto!")
                  break;
              }
      }
    }
////////////////////////////////

function tipoVestimenta() {
    let p1 = "gorra";
    let p2 = "piluso";
    let pp1 = 2000; 
    let pp2 = 1000;

    let producto = prompt(`digite el tipo de vestimenta que quiere \n1. ${p1} \n2. ${p2}`); //  tipo
      if (producto => 1 && producto <= 2) {
            if (producto === "1"){
                alert(`has elegido la vestimenta ${p1}`);
                let cantidad = prompt(`digite la cantidad de ${p1} que desea comprar, c/u cuesta $${pp1}`);
                let precioFinal = cantidad * pp1;
                alert(`el monto total a pagar es de $${precioFinal}`);
                }else if (producto === "2"){
                    alert(`has elegido la vestimenta ${p2}`);
                    let cantidad = prompt(`digite la cantidad de ${p2} que desea comprar, c/u cuesta $${pp2}`);
                    let precioFinal = cantidad * pp2;
                    alert(`el monto total a pagar es de $${precioFinal}`);
                }else {
                    alert("no eligio ninguno de los productos de la lista")
                }  
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
      }
    }
/////////////////////////////

function tipoAccesorios() {
    let p1 = "pulsera";
    let p2 = "collar";
    let pp1 = 1000; 
    let pp2 = 500;

    let producto = prompt(`digite el tipo de accesorio que quiere \n1. ${p1} \n2. ${p2}`); //  tipo
      if (producto => 1 && producto <= 2) {
            if (producto === "1"){
                alert(`has elegido el accesorio ${p1}`);
                let cantidad = prompt(`digite la cantidad de ${p1} que desea comprar, c/u cuesta $${pp1}`);
                let precioFinal = cantidad * pp1;
                alert(`el monto total a pagar es de $${precioFinal}`);
                }else if (producto === "2"){
                    alert(`has elegido el accesorio ${p2}`);
                    let cantidad = prompt(`digite la cantidad de ${p2} que desea comprar, c/u cuesta $${pp2}`);
                    let precioFinal = cantidad * pp2;
                    alert(`el monto total a pagar es de $${precioFinal}`);
                }else {
                    alert("no eligio ninguno de los productos de la lista")
                }  
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
      }
    } 





function funcionCompleta() {
let producto = prompt(
  "digite un producto para comprar \n1. perfume \n2. vestimenta \n3. accesorios"
).toLowerCase(); //aca use el toLowerCase() por si el usuario usa mayus

switch (producto) {
    case "1":
      alert("elegiste la opcion perfume");
      tipoPerfume(); 
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
