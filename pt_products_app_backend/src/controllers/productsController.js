const { pool } = require("../config/db");

let products = [
    {
        id: 1,
        name: "Laptop"
    },
    {
        id: 2,
        name: "Tablet"
    },
    {
        id: 3,
        name: "Phone"
    },
]

exports.getProducts = (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        connection.query('SELECT * from products', (err, rows) => {
            console.log("ROWS:::", rows);
            if (!err) {
                res.send(rows)
                return;
            } else {
                console.log(err)
                res.send(rows);
                return rows;
            }
        })
    })
}

exports.getProduct = (req, res) => {
    const id = req.params.id;
    pool.getConnection((err, connection) => {
        if(err) throw err
        connection.query(`SELECT * from products where id = ${id}`, (err, rows) => {
            console.log("ROWS:::", rows);
            if (!err) {
                res.send(rows)
                return;
            } else {
                console.log(err)
                res.send(rows);
                return rows;
            }
        })
    })
}

exports.createProduct = (req, res) => {
    console.log(req);
    const product = req.body;
    products.push(product);
}

exports.updateProduct = (req, res) => {
    const id = req.params.id;
    const editProduct = req.body;
    products.filter((product) => product.id === editProduct.id);
}

exports.deleteProduct = (req, res) => {
    const id = req.params.id;
    products.filter((product) => product.id !== id);
}
