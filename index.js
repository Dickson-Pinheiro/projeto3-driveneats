const bebidas = document.querySelectorAll("input[name='bebidas']");
const pratos = document.querySelectorAll("input[name='pratos']");
const sobremesas = document.querySelectorAll("input[name='sobremesas']");
const itemsSelected = []

function addSelection(elementsList, category){
    elementsList.forEach(element => {
        element.addEventListener("change", (e)=>{
            const elementBox = document.querySelectorAll(`label[for=${e.target.id}] > div`)[0]
            elementBox.classList.add("selected")
            validateButton(category)

            for(box of elementsList){
                if(box.id !== e.target.id){
                    document.querySelectorAll(`label[for=${box.id}] > div`)[0].classList.remove("selected")
                }
            }
        })
    })
}

addSelection(bebidas, "bebidas")
addSelection(pratos, "pratos")
addSelection(sobremesas, "sobremesas")

function activeButton(){
    const button = document.querySelector("button")
    button.classList.add("testButton")
    button.innerText="Fechar pedido"

    button.addEventListener("click", () => {

    })
}

function validateButton(item){
    if(!itemsSelected.includes(item)){
        itemsSelected.push(item)
    }

    if(itemsSelected.length === 3){
        activeButton()
    }
}

/*
bebidas.forEach(bebida => {
    bebida.addEventListener('change', (e) => {
        const bebidaBox = document.querySelectorAll(`label[for=${e.target.id}] > div`)[0]
        
        switch(e.target.id){
            case "bebida1":
                document.querySelectorAll("label[for='bebida2'] > div")[0].classList.remove("selected")
                document.querySelectorAll("label[for='bebida3'] > div")[0].classList.remove("selected")
                bebidaBox.classList.add("selected")

                validateButton("bebida")

                break;
            case "bebida2":
                document.querySelectorAll("label[for='bebida1'] > div")[0].classList.remove("selected")
                document.querySelectorAll("label[for='bebida3'] > div")[0].classList.remove("selected")
                bebidaBox.classList.add("selected")

                validateButton("bebida")

                break;
            case "bebida3":
                document.querySelectorAll("label[for='bebida1'] > div")[0].classList.remove("selected")
                document.querySelectorAll("label[for='bebida2'] > div")[0].classList.remove("selected")
                bebidaBox.classList.add("selected")

                validateButton("bebida")

                break;
            default:
            break;
        }
    })
})

pratos.forEach(prato => {
    prato.addEventListener('change', (e) => {
        const pratoBox = document.querySelectorAll(`label[for=${e.target.id}] > div`)[0]
        
        switch(e.target.id){
            case "prato1":
                document.querySelectorAll("label[for='prato2'] > div")[0].classList.remove("selected")
                document.querySelectorAll("label[for='prato3'] > div")[0].classList.remove("selected")
                pratoBox.classList.add("selected")

                validateButton("prato")

                break;
            case "prato2":
                document.querySelectorAll("label[for='prato1'] > div")[0].classList.remove("selected")
                document.querySelectorAll("label[for='prato3'] > div")[0].classList.remove("selected")
                pratoBox.classList.add("selected")

                validateButton("prato")

                break;
            case "prato3":
                document.querySelectorAll("label[for='prato1'] > div")[0].classList.remove("selected")
                document.querySelectorAll("label[for='prato2'] > div")[0].classList.remove("selected")
                pratoBox.classList.add("selected")

                validateButton("prato")

                break;
            default:
            break;
        }
    })
})

sobremesas.forEach(sobremesa => {
    sobremesa.addEventListener('change', (e) => {
        const bebidaBox = document.querySelectorAll(`label[for=${e.target.id}] > div`)[0]
        
        switch(e.target.id){
            case "sobremesa1":
                document.querySelectorAll("label[for='sobremesa2'] > div")[0].classList.remove("selected")
                document.querySelectorAll("label[for='sobremesa3'] > div")[0].classList.remove("selected")
                bebidaBox.classList.add("selected")
                
                validateButton("sobremesa")

                break;
            case "sobremesa2":
                document.querySelectorAll("label[for='sobremesa1'] > div")[0].classList.remove("selected")
                document.querySelectorAll("label[for='sobremesa3'] > div")[0].classList.remove("selected")
                bebidaBox.classList.add("selected")

                validateButton("sobremesa")

                break;
            case "sobremesa3":
                document.querySelectorAll("label[for='sobremesa1'] > div")[0].classList.remove("selected")
                document.querySelectorAll("label[for='sobremesa2'] > div")[0].classList.remove("selected")
                bebidaBox.classList.add("selected")

                validateButton("sobremesa")

                break;
            default:
            break;
        }
    })
})

*/
