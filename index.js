const bebidas = document.querySelectorAll("input[name='bebidas']");
const pratos = document.querySelectorAll("input[name='pratos']");
const sobremesas = document.querySelectorAll("input[name='sobremesas']");
const categoriesSelected = {
    prato: "",
    bebida: "",
    sobremesa: ""
}

const menu = {
    pratos: {
        prato1: {
            name: "Frango Yin Yang",
            price: 14.90
        },
        prato2: {
            name: "Bife a milanesa",
            price: 32.90
        },
        prato3: {
            name: "Bife a parmegiana",
            price: 47.80
        }
    },
    bebidas: {
        bebida1: {
            name: "Coquinha gelada",
            price: 4.90
        },
        bebida2: {
            name: "Laranja com morango",
            price: 15.00
        },
        bebida3: {
            name: "Guaraná Antárctica",
            price: 5.60
        }
    },
    sobremesas: {
        sobremesa1: {
            name: "Pudim",
            price: 7.90
        },
        sobremesa2: {
            name: "Bolo de Cenoura",
            price: 5.20
        },
        sobremesa3: {
            name: "torta de morango",
            price: 16.90
        }
    }
}

function addSelection(elementsList, category){
    elementsList.forEach(element => {
        element.addEventListener("change", (e)=>{
            const elementBox = document.querySelectorAll(`label[for=${e.target.id}] > div`)[0]
            elementBox.classList.add("selected")
            validateButton(category, e.target.value)

            for(box of elementsList){
                if(box.id !== e.target.id){
                    document.querySelectorAll(`label[for=${box.id}] > div`)[0].classList.remove("selected")
                }
            }
        })
    })
}

addSelection(bebidas, "bebida")
addSelection(pratos, "prato")
addSelection(sobremesas, "sobremesa")


function validateButton(category, value){
    
    categoriesSelected[`${category}`] = value;

    if(categoriesSelected.prato && categoriesSelected.bebida && categoriesSelected.sobremesa){
        activeButton()
    }
}

function activeButton(){
    const button = document.querySelector(".button button")
    button.classList.add("testButton")
    button.innerText="Fechar pedido"


    button.addEventListener("click", () => {
        activeModal()
    })
}

function activeModal(){

    const modal = document.querySelector(".modal")
    const [buttonOk, buttonCancel] = document.querySelectorAll(".modal button")
    const total = document.querySelectorAll(".total p:last-child")[0]
    const itensSelecionados = document.querySelectorAll(".modal .selectedItem")

        itensSelecionados[0].innerHTML = `<p>${menu.pratos[categoriesSelected.prato].name}</p><p>${menu.pratos[categoriesSelected.prato].price.toFixed(2)}</p>`
        itensSelecionados[1].innerHTML = `<p>${menu.bebidas[categoriesSelected.bebida].name}</p><p>${menu.bebidas[categoriesSelected.bebida].price.toFixed(2)}</p>`
        itensSelecionados[2].innerHTML = `<p>${menu.sobremesas[categoriesSelected.sobremesa].name}</p><p>${menu.sobremesas[categoriesSelected.sobremesa].price.toFixed(2)}</p>`
        total.innerHTML = `<p>R&dollar; ${(menu.sobremesas[categoriesSelected.sobremesa].price+menu.bebidas[categoriesSelected.bebida].price+menu.pratos[categoriesSelected.prato].price).toFixed(2)}</p>`


        let mensagem = window.encodeURIComponent(`Olá, gostaria de fazer o pedido:\n 
        - Prato: ${menu.pratos[categoriesSelected.prato].name}\n
        - Bebida: ${menu.bebidas[categoriesSelected.bebida].name}\n
        - Sobremesa: ${menu.sobremesas[categoriesSelected.sobremesa].name}\n
        Total: R$ ${(menu.pratos[categoriesSelected.prato].price + menu.bebidas[categoriesSelected.bebida].price + menu.sobremesas[categoriesSelected.sobremesa].price).toFixed(2)}`)


        modal.classList.add("activeModal")
        buttonOk.setAttribute("value", mensagem)
        buttonOk.addEventListener("click", (e)=>{
            window.open(`https://wa.me/5584991616256?text=${e.target.value}`)
            modal.classList.remove("activeModal")
        })
    
        buttonCancel.addEventListener("click", () => {
            modal.classList.remove("activeModal")
        })
}