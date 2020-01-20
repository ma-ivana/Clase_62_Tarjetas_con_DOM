const clientes = [
  {image: "img/client-1.png"},
  {image: "img/client-2.png"},
  {image: "img/client-3.png"},
  {image: "img/client-4.png"},
  {image: "img/client-5.png"},
  {image: "img/client-6.png"},
  {image: "img/client-7.png"},
  {image: "img/client-8.png"}
]

const tarjetas = document.querySelector(".clientslog");
console.log(tarjetas);

let dynamicImages = "";

for (let i=0; i < clientes.length; i++) {
  dynamicImages = dynamicImages + `
  <div class="logo-cliente">
  <img src="${clientes[i].image}">
  </div>
  `
}


tarjetas.innerHTML = dynamicImages;

let tarjetasHover = document.getElementsByClassName("logo-cliente");
console.log(tarjetasHover);

for (let i = 0; i < tarjetasHover.length; i++) {
  tarjetasHover[i].onmouseenter = (e) => {    
  tarjetasHover[i].classList.add("zoom");  
  }

  tarjetasHover[i].onmouseleave = (e) => {    
  tarjetasHover[i].classList.remove("zoom");  
  }
}



