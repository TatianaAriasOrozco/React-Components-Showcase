import React from 'react'
import Button from '../../../button'

const Card = () => {
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
            <p style={{
                fontSize: "14px",
                lineHeight: "20px",
                margin: 0,
            }}>
                Fruits/Vegetables
            </p>
        </div>
        <img 
            src='https://res.cloudinary.com/dwdgpw20b/image/upload/v1698330380/products/milk_vmhcfw.webp'
            alt='test'
            width="90px"
            height="90px"
        />
        <p
            style={{
                fontSize: "16px",
                lineHeight: "28px",
                color: "#171717",
                margin: 0,
            }}
        >
            Milk
        </p>
        <p
            style={{
                fontSize: "16px",
                lineHeight: "28px",
                color: "#171717",
                margin: 0,
            }}
        >
            $ 2.5
        </p>
        <div style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "0.5rem",
        }}>
            <Button
                onClick={() => console.log('-')}
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
                    border: "1px solid #f5f5f5",
                    paddin: "8px 4px",
                    fontSize: "14px",
                    lineHeight: "20px",
                    outline: "none",
                    textAlign: "center",
                }}
                type="text"
                defaultValue={0}
            />
            <Button
                onClick={() => console.log('+')}
                description={"+"}
                styles={{
                    width: "36px",
                    height: "36px",
                    marginBottom: "unset",
                }}
            />
        </div>
    </div>
  )
}

export default Card
