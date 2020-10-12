const route = require('express').Router()
const Product = require('../../db').Product


route.get('/' , (req,res) => {
    //get all products
    Product.findAll()
        .then((products) => {
            res.status(200).send(products)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Couldnt get products from Db"
            })
        })
})

route.post('/' , (req,res) => {

    if(isNaN(parseFloat(req.body.price))){
        return res.status(403).send({
            error: "price not valid"
        })
    }

    //Add a new product


    Product.create({
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        price: parseFloat(req.body.price)
    }).then((products) => {
        res.status(201).send(products)
    }).catch((err) => {
        res.status(501).send({
            error: "Couldnt Add Products to database"
        })
    })
})





exports = module.exports =route
