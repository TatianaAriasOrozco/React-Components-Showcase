import React from 'react'
import Cart from './cart'
import ProductList from './productList'
import useMediaQuery from '../../hooks/useMediaQuery'

const ShoppingCart = () => {
  //resoluciones tablet
  const isMediumScreen = useMediaQuery('(max-width: 940px)')
  return (
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
        Descripción: Feugiat enim fames odio ornare lectus at.
        Elit sit sit urna tempor. Egestas vitae orci porttitor placerat amet.
        Consectetur egestas et porta praesent. Ac aenean nunc ullamcorper morbi scelerisque.
        Feugiat non dolor semper aliquet donec pellentesque dictum nunc pellentesque.
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
  )
}

export default ShoppingCart
