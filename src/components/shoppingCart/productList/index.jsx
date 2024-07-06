import React, { useContext } from "react";
import Card from "./card";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { ThemeContext } from "..";

const ProductList = () => {
  const context = useContext(ThemeContext);
  const { products } = context;

  //resoluciones mobile
  const isSmallScreen = useMediaQuery("(max-width: 599px)");
  //resoluciones tablet
  const isMediumScreen = useMediaQuery(
    "(min-width: 600px) and (max-width: 940px)"
  );

  // controlar las columnas que se renderizan en el grid
  let templateColumns = 3;
  if (isMediumScreen) {
    templateColumns = 2;
  } else if (isSmallScreen) {
    templateColumns = 1;
  } else {
    templateColumns = 3;
  }

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "588px",
        padding: "8px 16px",
        background: "white",
        borderRadius: isMediumScreen ? "unset" : "16px 0 0 16px",
      }}
    >
      <h2
        style={{
          color: "#171717",
          fontSize: "24px",
          fontWeight: 700,
          lineHeight: "32px",
        }}
      >
        List of Products
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${templateColumns}, 1fr)`,
          gap: "16px",
          justifyItems: "center",
        }}
      >
        {products.map((product, index) => (
          <Card 
            key={index}
            img={product.image_url}
            productName={product.name}
            productPrice={product.price}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
