import React, { useEffect, useState } from "react";
import FinishShopButton from "./components/FinishShopButton";
import TotalPrice from "./components/TotalPrice";
import productService from "./services/productService";
import Card from "./components/Card";
import ProductItem from "./components/ProductItem";
import EmptyCartMessage from "./components/EmptyCartMessage";
import Container from "./components/Container";
import ConfirmShopModal from "./components/ConfirmShopModal";

function App() {
  const [products, setProducts] = useState(null);
  const [choosedProducts, setChoosedProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [confirmModal, showConfirmModal] = useState(false);

  useEffect(() => {
    setProducts(productService.getProducts());
  }, []);

  useEffect(() => {
    setTotalPrice(choosedProducts.reduce((acc, cur) => acc + cur.price, 0));
  }, [choosedProducts]);

  const resetAll = () => {
    showConfirmModal(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setProducts(null);
    setTimeout(() => setProducts(productService.getProducts()), 1000);
    setChoosedProducts([]);
  };

  const confirmShop = () =>
    choosedProducts.length === 0
      ? window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      : showConfirmModal(true);

  return (
    <>
      {confirmModal && <ConfirmShopModal onConfirm={resetAll} />}
      <Container>
        {choosedProducts.length === 0 && <EmptyCartMessage />}
        <Card title="Meu Carrinho">
          <div className="p-4 space-y-2 border-b-2 border-gray-300 overflow-y-scroll">
            {!products ? (
              <p className="text-center my-6"> Loading... </p>
            ) : (
              products.map((e, i) => (
                <ProductItem
                  key={e.id}
                  image={e.image}
                  title={e.title}
                  originalPrice={e.originalPrice}
                  price={e.price}
                  onItemCLicked={() => {
                    setChoosedProducts((prev) =>
                      prev.some((p) => p.id === e.id)
                        ? prev.filter((p) => p.id !== e.id)
                        : [...prev, { id: e.id, price: e.price }]
                    );
                  }}
                />
              ))
            )}
          </div>

          <TotalPrice
            price={totalPrice}
            showFreeTaxMessage={totalPrice / 100 > 10}
          />

          <FinishShopButton onShopButtonClicked={confirmShop} />
        </Card>
      </Container>
    </>
  );
}

export default App;
