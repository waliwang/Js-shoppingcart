document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#productArea").addEventListener("click", (e) => {
      e.preventDefault()
      let link = e.target
      let data = link.dataset
      let id = deta.proudctId
      let shoppingList = document.querySelector(".list")

      if(id){
          const el = document.createElement("li")
          el.textCoNtent = id
          shoppingList.appendChild(el)
      }
  
    })
  })