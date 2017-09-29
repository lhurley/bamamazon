// npm packages to install
const inquirer = require('inquirer');
const mysql = require('mysql');

//connects to sql database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,

    user: 'root',

    password: null, //Your Password for MySQL Workbench
    database: 'bamamazon' //Your MySQL Database Name
});

connection.connect(function (err) {
    if (err) throw err;
    connection.query('SELECT id, product_name, department_name, price, stock_quantity FROM products', function (err, response, fields) {
        if (err) throw err;
        console.log("WELCOME TO THE JOY DIVISION STORE!");
        console.log('\n //==================================================================\\ \n');
        console.log('FOR YOUR REVIEW:');
        for(i = 0; i < response.length; i++){
            console.log('ID: ' + response[i].id);
            console.log('Product Name: ' + response[i].product_name);
            console.log('Department: ' + response[i].department_name);
            console.log('Price: ' + response[i].price);
            console.log('Quantity: ' + response[i].stock_quantity);
            console.log('\\=================================================================//');
        }

        questions();
    });
});

function questions() {
    inquirer.prompt([
        {
            name: 'id',
            message: 'What product would you like to buy? (by ID)',
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        },

        {
            name: "quantity",
            message: 'How many of that thing would you like to purchase?'
        }
    ]).then(function (answers) {

        var quantityInput = answers.quantity;
        var idInput = answers.id;
        purchase(idInput, quantityInput);
    });
}

function purchase(id, quantityInput) {

    connection.query('SELECT * FROM products WHERE id = ' + id, function (error, response) {
        if (error) { console.log(error) };

        if (quantityInput <= response[0].stock_quantity) {

            let totalCost = response[0].price * quantityInput;

            console.log('\nPlease Wait');s
            console.log(quantityInput + " " + response[0].product_name + " will be $" + totalCost);

            var newInventory = response[0].stock_quantity - parseInt(quantityInput);
            console.log('Wowza congrats!! Your transaction is complete! THANK YOU for your business!');
            var sql = "UPDATE products SET stock_quantity = '" + newInventory + "' WHERE id = '" + id + "'";
            connection.query(sql, function (err, result) {
                if (err) throw err;
                console.log(result.affectedRows + " record(s) updated");
                process.exit()
            });
        } else {
            console.log('Not enough ' + response[0].product_name + '. Srry...But please try again later!');
            process.exit()
        };
    });
};
