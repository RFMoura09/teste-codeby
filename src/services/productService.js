import abaixo from "../abaixo-10-reais.json";
import acima from "../acima-10-reais.json";

const productService = {
  getProducts: function () {
    let produtos = [];

    acima.items.forEach((e, i) => {
      produtos = [
        ...produtos,
        {
          id: i,
          title: e.name,
          originalPrice: e.price,
          price: e.sellingPrice,
          image: e.imageUrl,
        },
      ];
    });

    abaixo.items.forEach((e, i) => {
      produtos = [
        ...produtos,
        {
          id: i + (produtos.length - 1),
          title: e.name,
          originalPrice: e.price,
          price: e.sellingPrice,
          image: e.imageUrl,
        },
      ];
    });

    return produtos;
  },
};

export default productService;
