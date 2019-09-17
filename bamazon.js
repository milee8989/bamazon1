// require("dotenv").config();
var mysql =require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host:"localhost",
    port: 5000,
    user:"root",
    password: "root",
    database:"bamazon_db"
});

connection.connect(function(err){
    if(err) throw err;
    console.log("connection successfull");
    // displayProcuts();
    makeTable();
})

var makeTable = function(){
    connection.query("SELECT * FROM products", function(er,res){
        for ( var i=0; i<res.lengh; i++){
            console.log(res[i].item_id+" || "+res[i].product_name+" || "+res[i].department_name+" || "+res[i].price+" || "+res[i].stock_quantity+"\n");
        }
        promptCustomer(res);
    })
}

var promptCustomer = function(res){
    inquirer.prompt([{
        type:'input',
        name:'choice',
        message:"What would you like to purchase? [Quit with Q]"
    }]).then(function(answer){
        var correct = false;
        if(answer.choice.toUpperCase()=="Q"){
            process.exit();
        }
        for(var i=0; i<res.length;i++){
            if(res[i].product_name==answer.choice){
                correct=true;
                var product=anser.choice;
                var id=i;
                inquirer.prompt({
                    type:"input",
                    name:"quant",
                    message:"HOW MANY WOULD YOU LIKE TO BUY?",
                    validate: function(value){
                        if(isNaN(value)==false){
                            return true;
                        } else {
                            return false;
                        }
                    }

                }).then (function(anser){
                    if((res[id].stock_quantity-answer.quant)>0){
                        connection.query("UPDATE products SET stock_quantity-aser.quant='"+(res[id].stock_quantity-answer.quant)+"'WHERE product_name='"+product+"'",function(err,res2){
                            console.log("Product Bought!");
                            makeTable();
                        })
                    } else {
                        console.log("Not a valid selection!");
                        promptCustomer(res);
                    }
                })
            }
        }
        if(i==res.length && correct==false){
            console.log("Not a valid selection!");
            promptCustomer(res);
        }
    })
}