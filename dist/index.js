"use strict";

const { stringify } = require("querystring");
const { Interface } = require("readline");

Object.defineProperty(exports, "__esModule", { value: true });


Interface Product = {

    img: String,
    name: String,
    rank: Number,
    price: Number,
    description: String,
    descount: Number,
    shipment:

}

const product: Product = {
    img: "url"
    name: "Beleza Saúde"
    rank: 9.0
    price: 41, 67
    description: "Soluções saudáveis especialmente para você"
    descount: 0.1
}


console.log(product, "Produto")









//# sourceMappingURL=index.js.map