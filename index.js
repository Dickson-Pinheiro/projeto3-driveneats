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
            name: "Frango Yin Yang",
            price: 14.90
        },
        prato3: {
            name: "Frango Yin Yang",
            price: 14.90
        }
    },
    bebidas: {
        bebida1: {
            name: "Coquinha gelada",
            price: 4.90
        },
        bebida2: {
            name: "Coquinha gelada",
            price: 4.90
        },
        bebida3: {
            name: "Coquinha gelada",
            price: 4.90
        }
    },
    sobremesas: {
        sobremesa1: {
            name: "Pudim",
            price: 7.90
        },
        sobremesa2: {
            name: "Pudim",
            price: 7.90
        },
        sobremesa3: {
            name: "Pudim",
            price: 7.90
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
        const mensagem = window.encodeURIComponent(`Olá, gostaria de fazer o pedido:\n 
    - Prato: ${menu.pratos[categoriesSelected.prato].name}\n
    - Bebida: ${menu.bebidas[categoriesSelected.bebida].name}\n
    - Sobremesa: ${menu.sobremesas[categoriesSelected.sobremesa].name}\n
    Total: R$ ${(menu.pratos[categoriesSelected.prato].price + menu.bebidas[categoriesSelected.bebida].price + menu.sobremesas[categoriesSelected.sobremesa].price).toFixed(2)}`)
        activeButton(mensagem)
    }
}

function activeButton(mensagem){
    const button = document.querySelector(".button button")
    button.classList.add("testButton")
    button.innerText="Fechar pedido"


    button.addEventListener("click", () => {
        activeModal(mensagem)
    })
}

function activeModal(mensagem){

    const modal = document.querySelector(".modal")
    const buttonOk = document.querySelectorAll(".modal button")[0]
    const buttonCancel = document.querySelectorAll(".modal button")[1]
    const total = document.querySelectorAll(".total p:last-child")[0]
    const itensSelecionados = document.querySelectorAll(".modal .selectedItem")

        itensSelecionados[0].innerHTML = `<p>${menu.pratos[categoriesSelected.prato].name}</p><p>${menu.pratos[categoriesSelected.prato].price}</p>`
        itensSelecionados[1].innerHTML = `<p>${menu.bebidas[categoriesSelected.bebida].name}</p><p>${menu.bebidas[categoriesSelected.bebida].price}</p>`
        itensSelecionados[2].innerHTML = `<p>${menu.sobremesas[categoriesSelected.sobremesa].name}</p><p>${menu.sobremesas[categoriesSelected.sobremesa].price}</p>`
        total.innerHTML = `<p>${(menu.sobremesas[categoriesSelected.sobremesa].price+menu.bebidas[categoriesSelected.bebida].price+menu.pratos[categoriesSelected.prato].price).toFixed(2)}</p>`
        modal.classList.add("activeModal")

        buttonOk.addEventListener("click", ()=>{
            window.open(`https://wa.me/5584991616256?text=${mensagem}`)
            modal.classList.remove("activeModal")
        })
    
        buttonCancel.addEventListener("click", () => {
            modal.classList.remove("activeModal")
        })
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
