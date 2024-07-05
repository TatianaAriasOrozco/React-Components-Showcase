import React from 'react'
import Button from '../../button'
import useMediaQuery from '../../../hooks/useMediaQuery'

const Cart = () => {
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
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <p style={{
                    margin: 0,
                }}>
                    Bread ($ 1.2 x 2)
                </p>
                <p style={{
                    margin: 0,
                }}>
                    $ 2.4
                </p>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <p>
                    Bread ($ 1.2 x 2)
                </p>
                <p>
                    $ 2.4
                </p>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: 600,
                }}
            >
                <p>
                    Total
                </p>
                <p>
                    $ 2.4
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
            />
        </div>
    )
}

export default Cart
