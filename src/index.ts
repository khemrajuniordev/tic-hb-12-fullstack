interface Product {
    img: string;
    name: string;
    rank: number;
    price: number;
    description: string;
    descount: number;
    shipment: Shipment;
}

enum Shipment {
    CORREIOS
}

const product: Product = {
    img: "url",
    name: "Beleza Saúde",
    rank: 9.0,
    price: 41.67,
    description: "Soluções saudáveis especialmente para você",
    descount: 0.1,
    shipment: Shipment.CORREIOS
}

console.log(product, "Produto");
