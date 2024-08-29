export const ProductService = {
    getProductsData() {
        return [
            {
                id: '1000',
                code: 'f230fh0g3',
                name: 'João Martins',
                description: 'Product Description',
                image: 'bamboo-watch.jpg',
                price: 65,
                category: 'Front-end',
                quantity: "24/08",
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '1001',
                code: 'nvklal433',
                name: 'Ana Paula Souza',
                description: 'Product Description',
                image: 'black-watch.jpg',
                price: 72,
                category: 'API Restful',
                quantity: "06/01",
                inventoryStatus: 'INSTOCK',
                rating: 4
            },
            {
                id: '1002',
                code: 'zz21cz3c1',
                name: 'Carlos Pereira',
                description: 'Product Description',
                image: 'blue-band.jpg',
                price: 79,
                category: 'Sistemas Distribuídos',
                quantity: "20/06",
                inventoryStatus: 'LOWSTOCK',
                rating: 3
            },
            {
                id: '1003',
                code: '244wgerg2',
                name: 'Maria Fernanda',
                description: 'Product Description',
                image: 'blue-t-shirt.jpg',
                price: 29,
                category: 'Bancos de Dados',
                quantity: "25/09",
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '1004',
                code: 'h456wer53',
                name: 'Lucas Almeida',
                description: 'Product Description',
                image: 'bracelet.jpg',
                price: 15,
                category: 'Redes Neurais',
                quantity: "07/03",
                inventoryStatus: 'INSTOCK',
                rating: 4
            },
            {
                id: '1005',
                code: 'av2231fwg',
                name: 'Gabriela Oliveira',
                description: 'Product Description',
                image: 'brown-purse.jpg',
                price: 120,
                category: 'Algoritmos Otimizados',
                quantity: "10/03",
                inventoryStatus: 'OUTOFSTOCK',
                rating: 4
            },
            {
                id: '1006',
                code: 'bib36pfvm',
                name: 'Rodrigo Santos',
                description: 'Product Description',
                image: 'chakra-bracelet.jpg',
                price: 32,
                category: 'Python Avançado',
                quantity: "05/06",
                inventoryStatus: 'LOWSTOCK',
                rating: 3
            },
            {
                id: '1007',
                code: 'mbvjkgip5',
                name: 'Juliana Moreira',
                description: 'Product Description',
                image: 'galaxy-earrings.jpg',
                price: 34,
                category: 'React Native',
                quantity: "23/07",
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '1008',
                code: 'vbb124btr',
                name: 'Felipe Costa',
                description: 'Product Description',
                image: 'game-controller.jpg',
                price: 99,
                category: 'Machine Learning',
                quantity: "02/08",
                inventoryStatus: 'LOWSTOCK',
                rating: 4
            },
            {
                id: '1009',
                code: 'cm230f032',
                name: 'Mariana Ribeiro',
                description: 'Product Description',
                image: 'gaming-set.jpg',
                price: 299,
                category: 'Inteligência Artificial',
                quantity: "06/03",
                inventoryStatus: 'INSTOCK',
                rating: 3
            },         
        ];
    },


    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    },

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },

    getProducts() {
        return Promise.resolve(this.getProductsData());
    },

    getProductsWithOrdersSmall() {
        return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    },

    getProductsWithOrders() {
        return Promise.resolve(this.getProductsWithOrdersData());
    }
};

