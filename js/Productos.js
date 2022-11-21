const items = document.getElementById("itemsContainer")
const templatecard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment();

document.addEventListener('DOMContentLoaded', () => {
    FanARTS();

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
}
console.log(items)