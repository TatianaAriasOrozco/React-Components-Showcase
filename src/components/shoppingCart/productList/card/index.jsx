import React, { useContext, useState , useEffect} from "react";
import Button from "../../../button";
import { ThemeContext } from "../..";

const Card = ({ img, productName, productPrice, category }) => {
  //contador de cantidad del producto
  const [counter, setCounter] = useState(0);
  const context = useContext(ThemeContext);
  const {cartProducts, setCartProducts} = context;

  useEffect(() => {
    //si se posee el producto, se filtra y se elimina del array
    const filteredProducts = cartProducts.filter((product)=>product.name !== productName )
    //se adiciona el nuevo producto con nueva cantidad
    if (counter >0) {
      setCartProducts([
          ...filteredProducts, 
          {name: productName,price: productPrice, quantity: counter , multipliedPrice: productPrice * counter }
          
      ])} else {
      // no se adiciona producto nuevo
      setCartProducts([
          ...filteredProducts, 
      ])
    }
  }, [counter])

  return (
    <div
      style={{
        width: "100%",
        borderRadius: "8px",
        border: "1px solid #525252",
        padding: "12px 0",
        textAlign: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "fit-content",
          borderRadius: "8px",
          background: "#EDE9FE",
          padding: "2px 8px",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      >
        <p
          style={{
            fontSize: "14px",
            lineHeight: "20px",
            margin: 0,
          }}
        >
          {category}
        </p>
      </div>
      <img src={img} alt={productName} width="90px" height="90px" />
      <p
        style={{
          fontSize: "16px",
          lineHeight: "28px",
          color: "#171717",
          margin: 0,
        }}
      >
        {productName}
      </p>
      <p
        style={{
          fontSize: "16px",
          lineHeight: "28px",
          color: "#171717",
          margin: 0,
        }}
      >
        ${productPrice}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "0.5rem",
        }}
      >
        <Button 
          isDisabled={counter <= 0}         
          onClick={() => setCounter(counter - 1)}
          description={"-"}
          styles={{
            width: "36px",
            height: "36px",
            marginBottom: "unset",
          }}
        />
        <input
          style={{
            width: "40px",
            borderRadius: "6px",
            border: `1px solid ${counter > 0 ? "#6D28D9" : "#f5f5f5"}`,
            paddin: "8px 4px",
            fontSize: "14px",
            lineHeight: "20px",
            outline: "none",
            textAlign: "center",
          }}
          type="text"
          onChange={(event) => setCounter(event.target.value)}
          value={counter}
        />
        <Button
          onClick={() => setCounter(counter + 1)}
          description={"+"}
          styles={{
            width: "36px",
            height: "36px",
            marginBottom: "unset",
          }}
        />
      </div>
    </div>
  );
};

export default Card;
