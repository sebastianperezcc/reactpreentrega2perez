const products = [
    {
        id: "1",
        name: "Mochila Everlast",
        price: 15990,
        category: "mochilas",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_848499-MLA69928951824_062023-F.webp",
        stock: 15,
        description: "Descripcion de la mochila",
    },
    {
        id: "2",
        name: "Bolso Head",
        price: 24550,
        category: "bolsos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_954786-MLA69550641281_052023-F.webp",
        stock: 8,
        description: "Descripcion del bolso",
    },
    {
        id: "3",
        name: "Riñonera Everlast",
        price: 12790,
        category: "riñoneras",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_909312-MLA49003599319_022022-F.webp",
        stock: 10,
        description: "Descripcion del bolso",
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredProducts = products.filter((prod) => prod.category === category);
            resolve(filteredProducts);
        }, 500);
    });
};

export default { getProducts, getProductById, getProductsByCategory }

