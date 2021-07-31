const itemCount = () => {
    return document.querySelectorAll(".list li").length
}


const updateState = () => {

    let statelabel = document.querySelector("#state")
    let countlabel = document.querySelector("#count")
    let count = itemCount()

    countlabel.textContent = count

    if(count === 0){
        statelabel.textContent = "目前沒有商品"
    } else {
        statelabel.textContent = " "
    }
}

const addToCart = (item) => {
    let shoppingList = document.querySelector(".list")
    shoppingList.appendChild(item)
    updateState()
}

document.addEventListener("DOMContentLoaded",() => {
    document.querySelector(".list").addEventListener("click",(e) => {
       if(e.target.className == "closeBtn") {
           const btn = e.target
           btn.parentNode.remove()
           updateState()
       }
    })

    // document.querySelector("#c-123 button").addEventListener("click", (e) => {
    //     e.target.parentNode.remove()
    // })

    // document.querySelector("#c-777 button").addEventListener("click", (e) => {
    //     e.target.parentNode.remove()
    // })

    document.querySelector("#productArea").addEventListener("click", (e) => {
        e.preventDefault()
        let link = e.target
        let data = link.dataset
        let id = data.productId
        let shoppingList = document.querySelector(".list")

        if(id){
            const el = document.createElement("li")
            const btn = document.createElement("button")
            btn.textContent = "x"
            btn.className = "closeBtn"
            el.textContent = id
            el.appendChild(btn)
            addToCart(el)
        }
    })
})
