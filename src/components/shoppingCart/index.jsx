import React, { useState, useEffect, createContext } from "react";
import Cart from "./cart";
import ProductList from "./productList";
import useMediaQuery from "../../hooks/useMediaQuery";

//creando el tema para el contexto.
export const ThemeContext = createContext(null);

const ShoppingCart = () => {
  //state para guardar los productos
  const [products, setProducts] = useState([]);
  //state para guardar dinamicamente los productos que son seleccionados
  const [cartProducts, setCartProducts] = useState([]);
  //resoluciones tablet
  const isMediumScreen = useMediaQuery("(max-width: 940px)");
  //valor del contexto
  const valueContext = {
    products: products,
    cartProducts: cartProducts,
    setCartProducts: setCartProducts,
  };

  useEffect(() => {
    //cargamos los datos del archivo productos.json
    const fetchShopping = async () => {
      const response = await fetch("/src/data/products.json");
      const result = await response.json();

      setProducts(result);
    };
    fetchShopping();
  }, []);

  return (
    <ThemeContext.Provider value={valueContext}>
      <div
        style={{
          padding: "4rem",
          background: "#FAFAFA",
        }}
      >
        <h2
          style={{
            fontWeight: 700,
            fontSize: "24px",
            lineHeight: "32px",
            color: "#171717",
          }}
        >
          Shooping Cart
        </h2>
        <p
          style={{
            fontSize: "18px",
            lineHeight: "32px",
            color: "#171717",
          }}
        >
          Descripción: Componente que muestra una lista de productos con sus respectivos nombres,
          imagenes y precios, desde los cuales se puede determinar la cantidad de productos a comprar.
          Los productos seleccionados, podran ser visualizados, en el carrito de compras (shopping cart)
          con el valor total a pagar.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: isMediumScreen ? "column" : "unset",
          }}
        >
          <ProductList />
          <Cart />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default ShoppingCart;
