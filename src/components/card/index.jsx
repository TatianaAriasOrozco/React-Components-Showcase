import React from 'react';

const Card = ({ imageUrl, pokemonName, pokemonType }) => {
    return (
        <div
            style={{
                maxWidth: "160px",
                maxHeight: "170px",
                padding: "16px 12px",
                borderRadius: "4px",
                backgroundColor: "#F5F5F5",
                textAlign: "center",
            }}
        >
            <img src={imageUrl} alt={pokemonName}
                style={{
                    width: "90px",
                    height: "90px",
                }} />
            <p style={{
                fontSize: "16px",
                lineHeight: "28px",
                marginBottom: "0px",
                marginTop: "2px"

            }}>{pokemonName}</p>
            <p
                style={{
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "#525252",
                    marginTop: "0px"
                }}>{`(${pokemonType.join(', ')})`}</p>
        </div>
    );
};

export default Card;