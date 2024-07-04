import React from 'react';

const Button = ({ description, onClick }) => {
    return (
        <button 
            style={{
            borderRadius: "6px",
            padding: "8px 12px 8px 12px",
            background: "#E5E5E5",
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: 500,
            color: "#262626",
            cursor: "pointer",
            border: 0,
            }}
            type='Button'
            onClick={() => onClick()}
        >
        {description}
      </button>
    );
};

export default Button;