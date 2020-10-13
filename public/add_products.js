$(()=> {
    
    let productName = $('#productName').val()
    let productManufacture = $('#productManufacture').val()
    let productPrice = $('#productPrice').val()

    $('#btnProductAdd').click(() => {

        addProduct(
            productName,
            productManufacture,
            productPrice,
            function(addedProduct){
                window.alert("Added "+addedProduct.name+" to database")
            }
        )


    })

})