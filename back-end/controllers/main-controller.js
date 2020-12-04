const connection = require("../db")

const addProduct = (req, res) => {
    const { store_id, product_name, product_descripition, quantity_per_unit, unit_price, available_product, picture } = req.body
    const data = [store_id, product_name, product_descripition, quantity_per_unit, unit_price, available_product, picture]
    const query = `INSERT INTO products (store_id,product_name,product_descripition,quantity_per_unit,unit_price,available_product,picture)
VALUES (?,?,?,?,?,?,?) `
    connection.query(query, data, (err, results) => {
        if (err) {
            console.log(err);
        }
        console.log(results);
        res.json(results)
    })
}

const updateProduct = (req, res) => {
    const { store_id, product_name, product_descripition, quantity_per_unit, unit_price, available_product, picture, product_id } = req.body
    const data = [product_name, product_descripition, quantity_per_unit, unit_price, available_product, picture, product_id]
    const query = `UPDATE products SET product_name=?,product_descripition=?,quantity_per_unit=?,
        unit_price=?,available_product=?,picture=? WHERE product_id=${product_id} `
    connection.query(query, data, (err, results) => {
        if (err) {
            console.log(err);
        }
        console.log(results);
        res.json(results)
    })
}

const getProducts = (req, res) => {
    const query = `SELECT * from products WHERE store_id=?`
    const data = [req.params.store_id]
    connection.query(query, data, (err, results) => {
        if (err) {
            console.log(err);
        }
        console.log(results);
        res.json(results)
    })
}

const deleteProduct = (req, res) => {
    const query = `DELETE FROM products WHERE product_id=?`
    const data = [req.body.product_id]
    connection.query(query, data, (err, results) => {
        if (err) {
            console.log(err);
        }
        console.log(results);
        res.json(results)
    })
}

//********************stores */
const addStore = (req, res) => {
    const { store_name, store_category, store_pic, user_id } = req.body
    const data = [store_name, store_category, store_pic, user_id]
    const query = `INSERT INTO store (store_name,store_category,store_pic,user_id)
    VALUES (?,?,?,?) `
    connection.query(query, data, (err, results) => {
        if (err) {
            console.log(err);
        }
        console.log(results);
        res.json(results)
    })
}

const updateStore = (req, res) => {
   
    const { store_name, store_category, store_pic } = req.body
    const data = [store_name, store_category, store_pic]
    const query = `UPDATE store SET store_name=?,store_category=?,store_pic=? WHERE store_id=${req.params.store_id} `
    connection.query(query, data, (err, results) => {
        if (err) {
            console.log(err);
        }
        console.log(results);
        res.json(results)
    })
}

const getStores = (req, res) => {
    const query = `SELECT * from store WHERE user_id=?`
    const data = [req.body.user_id]
    connection.query(query, data, (err, results) => {
        if (err) {
            console.log(err);
        }
        console.log(results);
        res.json(results)
    })
}

const getAllStores = (req, res) => {
    const query = `SELECT * from store `
    connection.query(query, (err, results) => {
        if (err) {
            throw err;
        }
        res.json(results)
    })
}

const specificStores = (req, res) => {
    const query = `SELECT * from store WHERE store_category=? `
    const{store_category}=req.body
    const data=[store_category]
    connection.query(query,data,(err, results) => {
        if (err) {
            throw err;
        }
        res.json(results)
    })
}

const deleteStore = (req, res) => {
    const query = `DELETE FROM store WHERE store_id=?`
    const data = [req.body.store_id]
    connection.query(query, data, (err, results) => {
        if (err) {
            console.log(err);
        }
        console.log(results);
        res.json(results)
    })
}
//********************orders */

const createItem = (req, res) => {
    const { orders_id, product_id, total_price } = req.body
    const data = [orders_id, product_id, total_price]
    const query = `INSERT INTO items (orders_id,product_id,total_price)
    VALUES (?,?,?) `
    connection.query(query, data, (err, results) => {
        if (err) {
            console.log(err);
        }
        console.log(results);
        res.json(results)
    })
}

const getItems = (req, res) => {
    const query = `SELECT * from items WHERE orders_id=?`
    const data = [req.body.orders_id]
    connection.query(query, data, (err, results) => {
        if (err) {
            console.log(err);
        }
        console.log(results);
        res.json(results)
    })
}

const deleteItem = (req, res) => {
    const query = `DELETE FROM items WHERE items_id=?`
    const data = [req.body.item_id]
    connection.query(query, data, (err, results) => {
        if (err) {
            console.log(err);
        }
        console.log(results);
        res.json(results)
    })
}

const createOrder = (req, res) => {
    const { user_id, delivary_user_id, store_id, item_id } = req.body
    const data = [user_id, delivary_user_id, store_id, item_id]
    const query = `INSERT INTO orders (user_id,delivary_user_id,store_id,item_id)
    VALUES (?,?,?,?) `
    connection.query(query, data, (err, results) => {
        if (err) {
            console.log(err);
        }
        console.log(results);
        res.json(results)
    })
}

const getOrders = (req, res) => {
    const query = `SELECT * from orders WHERE user_id=?`
    const data = [req.body.user_id]
    connection.query(query, data, (err, results) => {
        if (err) {
            console.log(err);
        }
        console.log(results);
        res.json(results)
    })
}

const deleteOrder = (req, res) => {
    const query = `DELETE FROM orders WHERE order_id=?`
    const data = [req.body.order_id]
    connection.query(query, data, (err, results) => {
        if (err) {
            console.log(err);
        }
        console.log(results);
        res.json(results)
    })
}

module.exports = {
    addProduct, getProducts, deleteProduct, updateProduct, addStore, updateStore, getStores, deleteStore,
    createItem, deleteItem, createOrder, getItems, getOrders, deleteOrder,getAllStores,specificStores
}
