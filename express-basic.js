const express = require('express')
const {products} = require('./data')

const app = express()

app.get('/', (req, res) => {
    res.send('<h1> Home page</h1><br><a href="api/products">Products</a>')
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const {id, name, image} = product;
        return {id, name, image}
    })
    res.json(newProducts)
})

app.get('/api/products/:productID', (req, res) => {
    // console.log(req.params);
    const {productID} = req.params
    const singleProduct = products.find((product) => product.id === Number(productID))

    if (!singleProduct) {
        return res.status(404).send('Product does not exist')
    }

    return res.json(singleProduct)
    
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params);
    res.send('Hello World')
})

app.get('/api/v1/query', (req, res) => {
    // console.log(req.query);
    const {search, limit} = req.query
    let sortedProducts = [...products]

    if (search) {
        sortedProducts = sortedProducts.filter((products) => {
            return products.name.startsWith(search)
        })
    }

    if (limit) {
        sortedProducts = sortedProducts.splice(0, Number(limit))
    }

    if (sortedProducts.length < 1) {
        // res.status(200).send('no products matched your request')
        return res.status(200).json({success:true, data: []})
    }

    res.json(sortedProducts)
})

app.listen(5000, ()=> {
    console.log('App Listening on port 5000');
})