

let product = document.querySelector("#product")







prod.filter((ele) => {


    if(ele.category == "new release"){
        return     product.innerHTML += `
        <a href="" class="text-black text-decoration-none">
        <div class="col h-100">
                    <div class="box h-100 d-flex flex-column justify-content-evenly  p-3">
                        <div class="img">
                            <img src="${ele.image}" class="img-thumbnail" width ="240px" alt="">
                        </div>
                        <div class="content">
                            <h4 class="title mt-3">${ele.title}</h4>
                            <p class="author pb-0 mb-2">${ele.author}</p>
                            <p class="category mt-0 pt-0">${ele.category}</p>
                            <h4 class="h4 text-danger">RS. ${ele.price}</h4>
                        </div>
                    </div>
                </div>
               </a>
           
        `
    }

})