//carrusel auto
function carrusel() {
  const carrusel = document.querySelector(`.carruselItems`);
  let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth
  let intervalo = null;
  let step = 1;
  
  const start = () => {
    intervalo = setInterval(function () {
      carrusel.scrollLeft = carrusel.scrollLeft + step;
      if(carrusel.scrollLeft === maxScrollLeft) {
        step = step * -1;
      }else if (carrusel.scrollLeft === 0) {
        step =step * -1;
      }
    }, 10);
  };
  
  const stop = () => {
    clearInterval(intervalo);
  };
  
  carrusel.addEventListener("mouseover", ()=> {
    stop();
  })
  
  carrusel.addEventListener("mouseout", ()=> {
    start();
  })
  
  start();
  }
  carrusel();

//cambiar tema de la pagina
const cambiarTema = document.getElementById('tema');
const body = document.body;

cambiarTema.addEventListener("click", () => {

  body.className === `cambiarTema` ? 
  (body.className = ``, cambiarTema.innerHTML = `<i class="fa-solid fa-moon"></i>`) :
  (body.className = 'cambiarTema', cambiarTema.innerHTML = `<i class="fa-solid fa-sun solcito"></i>`);

});

//ventanas emergentes

function abrirNosotros() {
  let nosotros = document.getElementById(`nosotros`);
  nosotros.addEventListener("click", ()=> {
  
  let div = document.createElement("div");
  div.innerHTML = Swal.fire({
    title: `
    <div>
      <h2>¿Quienes somos?</h2>
      <h5>Somos una corporacion de ventas de burger de la mejor calidad de carne 100% vacuna traida de los mejores paises de latinoamerica.<br>
      Nos centramos solo en la venta de hamburguesas por la meticulosa tarea 
      que llevan hacerlas con las mejores parrillas y cocineros del condado.</h5>
    </div>`,
    background: `grey`,
    color: `black`,
    confirmButtonText: `Cerrar`,
    toast: true,
  });
})
}
abrirNosotros();
