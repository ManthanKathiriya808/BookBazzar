let product = document.querySelector("#product")
let search =document.getElementById("search")

search.addEventListener("keyup",function(e){
    let val = e.target.value.toUpperCase()

    let searchData = prod.filter((ele) => !ele.title.toUpperCase().indexOf(val) || !ele.category.toUpperCase().indexOf(val) )

    subData(searchData)
})

function all(){
    let subProd =prod.filter((ele) => ele)
    subData(subProd)
}
function fiction(){
    let subProd =prod.filter((ele) => ele.category =="Fiction")
    subData(subProd)
}
function nonFiction(){
    let subProd =prod.filter((ele) => ele.category =="Non-Fiction")
    subData(subProd)
}
function children(){
    let subProd =prod.filter((ele) => ele.category =="Children's Books")
    subData(subProd)
}
function self(){
    let subProd =prod.filter((ele) => ele.category =="Self-Help")
    subData(subProd)
}
function philosophy(){
    let subProd =prod.filter((ele) => ele.category =="Philosophy")
    subData(subProd)
}
function exam(){
    let subProd =prod.filter((ele) => ele.category =="Exam Books")
    subData(subProd)
}



function subData(subProd){
    
    product.innerHTML =""
subProd.map((ele) => {
    
    let col = document.createElement("div")
    col.setAttribute("class","col  p-3")
    let box = document.createElement("div")
    box.setAttribute("class","box h-100 border d-flex flex-column p-3 lh-3")
    let img = document.createElement("img")
    img.setAttribute("class","img-thumbnail")
    let title = document.createElement("h4")
    title.setAttribute("class","mt-3 ")
    
    let author = document.createElement("p")
    author.setAttribute("class","pb-0 mb-2 ")
    let category =  document.createElement("p")
    category.setAttribute("class","mt-0 pt-0")
    let price = document.createElement("h4")
    price.setAttribute("class","text-danger bolder")
    
    img.src =ele.image
    title.textContent=ele.title
    author.textContent =ele.author
    category.textContent =`Category:  ${ele.category}`
    price.textContent=`RS. ${ele.price}`

    box.append(img,title,author,category,price)
    col.append(box)
    product.append(col)
})
}


prod.map((ele) => {
    
    let col = document.createElement("div")
    col.setAttribute("class","col  p-3")
    let box = document.createElement("div")
    box.setAttribute("class","box h-100 border d-flex flex-column p-3 lh-3")
    let img = document.createElement("img")
    img.setAttribute("class","img-thumbnail")
    let title = document.createElement("h4")
    title.setAttribute("class","mt-3 ")
    
    let author = document.createElement("p")
    author.setAttribute("class","pb-0 mb-2 ")
    let category =  document.createElement("p")
    category.setAttribute("class","mt-0 pt-0")
    let price = document.createElement("h4")
    price.setAttribute("class","text-danger bolder")
    
    img.src =ele.image
    title.textContent=ele.title
    author.textContent =ele.author
    category.textContent =`Category:  ${ele.category}`
    price.textContent=`RS. ${ele.price}`

    box.append(img,title,author,category,price)
    col.append(box)
    product.append(col)
})