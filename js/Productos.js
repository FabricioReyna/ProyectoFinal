const items = document.getElementById("itemsContainer")
const templatecard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment();
const agregar = document.getElementById("agregar")
var et = []

document.addEventListener('DOMContentLoaded', () => {
    FanARTS();
    if(localStorage.getItem("fan-arts")){
    FanARTS = JSON.parse(localStorage.setItem("fan-arts")) 
    pintarCards()
    }
})
function guardarStorage(){
    localStorage.setItem("productos", FanARTS )
}


const FanARTS = async () => {
    try {
        const res = await fetch('../js/productos.json')
        const data = await res.json()
        pintarCards(data)
     } catch (error) {
        console.log(error)
    }

}

const pintarCards = data =>{
    data.forEach(FanARTS => {
        templatecard.querySelector("h5").textContent = FanARTS.titulo
        templatecard.querySelector("#card-text2").textContent = FanARTS.Descripcion
        templatecard.querySelector("#text-muted").textContent = FanARTS.Layer
        templatecard.querySelector("#img").setAttribute("src", FanARTS.img)

        const clone = templatecard.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)
    localStorage.setItem("fan-arts", JSON.stringify(data))
}
console.log(items)



agregar.addEventListener("click", () => {
   var text = document.getElementById("text").value;
   var textarea = document.getElementById("floatingTextarea2").value
   var imagen = document.getElementById("formFile").value
    et.push(
        {

            "titulo": text ,
            "Descripcion": textarea,
            "Layer": "Ultima actualizacion hace 0 min",
            "img": imagen
        }
    );

    var card =   ` <div class="card-body mb-3 cards" style="max-width: 540px;" id="template-card">
    <div class="col-2 mb-2 col-md-3 p-3">
      <div class="">
        <img src="${imagen}" class="img-fluid" alt="Fan-art" id="img" style="min-height: 350px;">
      </div>
      <div class="card" style="min-height: 300px;">
        <div class="card-body">
          <h5 class="card-title">${text}</h5>
          <p class="card-text font-bold" id="card-text2">${textarea}</p>
          <p class="card-text"><small class="text-muted" id="text-muted">Ultima actualizacion hace 0 min</small></p>
        </div>
      </div>
    </div>
  </div>`
  $("#items").appendChild(card);
  $("#nombre").val("");
  $("#textarea").val("");
  $("#imagen").val("");
})
console.log(agregar)
