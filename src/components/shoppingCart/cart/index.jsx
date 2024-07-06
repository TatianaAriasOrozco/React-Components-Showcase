import React, {useContext} from 'react'
import Button from '../../button'
import useMediaQuery from '../../../hooks/useMediaQuery';
import { ThemeContext } from '..';

const Cart = () => {
    const context = useContext(ThemeContext);
    const { cartProducts } = context;
    //obtener el total de precios
    const totalProductsPrice = cartProducts.reduce((acc, currentValue) => acc + currentValue.multipliedPrice, 0)
    //resoluciones tablet
    const isMediumScreen = useMediaQuery('(max-width: 940px)')

    return (
        <div
            style={{
                background: "#F5F5F5",
                padding: "16px",
                maxWidth: "300px",
                width: "100%",
                margin: isMediumScreen ? "1rem auto auto" : "unset",
                borderRadius: isMediumScreen ? "unset" : "0 16px 16px 0",
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
                Shopping Cart
            </h2>
            {cartProducts.map((product, index) => (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        margin: "0.5rem 0",
                    }}
                    key={index}
                >
                    <p style={{
                        margin: 0
                    }}>
                        {product.name} ($ {product.price} x {product.quantity})
                    </p>
                    <p style={{
                    margin: 0
                    }}>
                        ${(product.multipliedPrice).toFixed(2)}
                    </p>
                </div>
            ))}
            {cartProducts.length === 0 && 
                <p
                    style={{
                        fontWeight: 600,
                        color: "#525252",
                        textAlign: "center",
                    }}
                >
                    No Products
                </p>
            }
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: 600,
                    color: "#525252",
                }}
            >
                <p>
                    Total 
                </p>
                <p>
                    $ {(totalProductsPrice).toFixed(2)}
                </p>
            </div>
            <Button
                styles={{
                    background: "#6D28D9",
                    width: "100%",
                    color: "white",
                    marginTop: "1rem",
                }}
                description={"Submit Your Order"}
                onClick={() => alert("Datos del Carrito Enviados.")}
                isDisabled={cartProducts.length === 0}
            />
        </div>
    )
}

export default Cart
