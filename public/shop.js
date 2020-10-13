function fetchProducts(done){
    $.get('/api/products', (data) => {
        done(data)
    })
}

function createProductCard (product) {
   return $(`
   <div class="col-4 card mx-2 p-2">
   <h4 class='product-name'>${product.name}</h4>
   <div class='product-manufacturer'>${product.manufacturer }</div>
   <div class="row">
     <div class="col-6 m-3">Rs. ${product.price}</div>
     <button class="col-4 brn btn-primary m-3">Buy</button>
   </div>
 </div>`
 )
}

function addProduct(name,manuf,price,done){
    $.post('/api/products' , {
      name: name,
      manufacturer: manuf,
      price: price,
    },(data) => {
      done(data)
    })
}